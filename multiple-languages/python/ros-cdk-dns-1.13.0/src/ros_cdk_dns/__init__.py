'''
## Aliyun ROS DNS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as DNS from '@alicloud/ros-cdk-dns';
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.AccessStrategyProps",
    jsii_struct_bases=[],
    name_mapping={
        "default_addr_pool": "defaultAddrPool",
        "default_addr_pool_type": "defaultAddrPoolType",
        "default_min_available_addr_num": "defaultMinAvailableAddrNum",
        "instance_id": "instanceId",
        "strategy_mode": "strategyMode",
        "strategy_name": "strategyName",
        "access_mode": "accessMode",
        "default_latency_optimization": "defaultLatencyOptimization",
        "default_lba_strategy": "defaultLbaStrategy",
        "default_max_return_addr_num": "defaultMaxReturnAddrNum",
        "failover_addr_pool": "failoverAddrPool",
        "failover_addr_pool_type": "failoverAddrPoolType",
        "failover_latency_optimization": "failoverLatencyOptimization",
        "failover_lba_strategy": "failoverLbaStrategy",
        "failover_max_return_addr_num": "failoverMaxReturnAddrNum",
        "failover_min_available_addr_num": "failoverMinAvailableAddrNum",
        "lines": "lines",
    },
)
class AccessStrategyProps:
    def __init__(
        self,
        *,
        default_addr_pool: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAccessStrategy.DefaultAddrPoolProperty", typing.Dict[builtins.str, typing.Any]]]]],
        default_addr_pool_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        default_min_available_addr_num: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        strategy_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        strategy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        access_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        default_latency_optimization: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        default_lba_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        default_max_return_addr_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        failover_addr_pool: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAccessStrategy.FailoverAddrPoolProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        failover_addr_pool_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        failover_latency_optimization: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        failover_lba_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        failover_max_return_addr_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        failover_min_available_addr_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lines: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``AccessStrategy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-accessstrategy

        :param default_addr_pool: Property defaultAddrPool: The default address pool of the access strategy.
        :param default_addr_pool_type: Property defaultAddrPoolType: The type of the default address pool.
        :param default_min_available_addr_num: Property defaultMinAvailableAddrNum: The minimum available address number of the default address pool.
        :param instance_id: Property instanceId: The ID of the Dns instance.
        :param strategy_mode: Property strategyMode: The mode of the access strategy.
        :param strategy_name: Property strategyName: The name of the access strategy.
        :param access_mode: Property accessMode: The access mode of the access strategy.
        :param default_latency_optimization: Property defaultLatencyOptimization: Whether to enable latency optimization for the default address pool.
        :param default_lba_strategy: Property defaultLbaStrategy: The load balancing strategy of the default address pool.
        :param default_max_return_addr_num: Property defaultMaxReturnAddrNum: The maximum return address number of the default address pool.
        :param failover_addr_pool: Property failoverAddrPool: The failover address pool of the access strategy.
        :param failover_addr_pool_type: Property failoverAddrPoolType: The type of the failover address pool.
        :param failover_latency_optimization: Property failoverLatencyOptimization: Whether to enable latency optimization for the failover address pool.
        :param failover_lba_strategy: Property failoverLbaStrategy: The load balancing strategy of the failover address pool.
        :param failover_max_return_addr_num: Property failoverMaxReturnAddrNum: The maximum return address number of the failover address pool.
        :param failover_min_available_addr_num: Property failoverMinAvailableAddrNum: The minimum available address number of the failover address pool.
        :param lines: Property lines: The lines of the access strategy.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bfd7c69a76953f996f046befc00b8ec59eb7c4855ecbcc47e877a5056518502a)
            check_type(argname="argument default_addr_pool", value=default_addr_pool, expected_type=type_hints["default_addr_pool"])
            check_type(argname="argument default_addr_pool_type", value=default_addr_pool_type, expected_type=type_hints["default_addr_pool_type"])
            check_type(argname="argument default_min_available_addr_num", value=default_min_available_addr_num, expected_type=type_hints["default_min_available_addr_num"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument strategy_mode", value=strategy_mode, expected_type=type_hints["strategy_mode"])
            check_type(argname="argument strategy_name", value=strategy_name, expected_type=type_hints["strategy_name"])
            check_type(argname="argument access_mode", value=access_mode, expected_type=type_hints["access_mode"])
            check_type(argname="argument default_latency_optimization", value=default_latency_optimization, expected_type=type_hints["default_latency_optimization"])
            check_type(argname="argument default_lba_strategy", value=default_lba_strategy, expected_type=type_hints["default_lba_strategy"])
            check_type(argname="argument default_max_return_addr_num", value=default_max_return_addr_num, expected_type=type_hints["default_max_return_addr_num"])
            check_type(argname="argument failover_addr_pool", value=failover_addr_pool, expected_type=type_hints["failover_addr_pool"])
            check_type(argname="argument failover_addr_pool_type", value=failover_addr_pool_type, expected_type=type_hints["failover_addr_pool_type"])
            check_type(argname="argument failover_latency_optimization", value=failover_latency_optimization, expected_type=type_hints["failover_latency_optimization"])
            check_type(argname="argument failover_lba_strategy", value=failover_lba_strategy, expected_type=type_hints["failover_lba_strategy"])
            check_type(argname="argument failover_max_return_addr_num", value=failover_max_return_addr_num, expected_type=type_hints["failover_max_return_addr_num"])
            check_type(argname="argument failover_min_available_addr_num", value=failover_min_available_addr_num, expected_type=type_hints["failover_min_available_addr_num"])
            check_type(argname="argument lines", value=lines, expected_type=type_hints["lines"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "default_addr_pool": default_addr_pool,
            "default_addr_pool_type": default_addr_pool_type,
            "default_min_available_addr_num": default_min_available_addr_num,
            "instance_id": instance_id,
            "strategy_mode": strategy_mode,
            "strategy_name": strategy_name,
        }
        if access_mode is not None:
            self._values["access_mode"] = access_mode
        if default_latency_optimization is not None:
            self._values["default_latency_optimization"] = default_latency_optimization
        if default_lba_strategy is not None:
            self._values["default_lba_strategy"] = default_lba_strategy
        if default_max_return_addr_num is not None:
            self._values["default_max_return_addr_num"] = default_max_return_addr_num
        if failover_addr_pool is not None:
            self._values["failover_addr_pool"] = failover_addr_pool
        if failover_addr_pool_type is not None:
            self._values["failover_addr_pool_type"] = failover_addr_pool_type
        if failover_latency_optimization is not None:
            self._values["failover_latency_optimization"] = failover_latency_optimization
        if failover_lba_strategy is not None:
            self._values["failover_lba_strategy"] = failover_lba_strategy
        if failover_max_return_addr_num is not None:
            self._values["failover_max_return_addr_num"] = failover_max_return_addr_num
        if failover_min_available_addr_num is not None:
            self._values["failover_min_available_addr_num"] = failover_min_available_addr_num
        if lines is not None:
            self._values["lines"] = lines

    @builtins.property
    def default_addr_pool(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAccessStrategy.DefaultAddrPoolProperty"]]]:
        '''Property defaultAddrPool: The default address pool of the access strategy.'''
        result = self._values.get("default_addr_pool")
        assert result is not None, "Required property 'default_addr_pool' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAccessStrategy.DefaultAddrPoolProperty"]]], result)

    @builtins.property
    def default_addr_pool_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property defaultAddrPoolType: The type of the default address pool.'''
        result = self._values.get("default_addr_pool_type")
        assert result is not None, "Required property 'default_addr_pool_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def default_min_available_addr_num(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property defaultMinAvailableAddrNum: The minimum available address number of the default address pool.'''
        result = self._values.get("default_min_available_addr_num")
        assert result is not None, "Required property 'default_min_available_addr_num' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the Dns instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def strategy_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property strategyMode: The mode of the access strategy.'''
        result = self._values.get("strategy_mode")
        assert result is not None, "Required property 'strategy_mode' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def strategy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property strategyName: The name of the access strategy.'''
        result = self._values.get("strategy_name")
        assert result is not None, "Required property 'strategy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def access_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accessMode: The access mode of the access strategy.'''
        result = self._values.get("access_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def default_latency_optimization(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property defaultLatencyOptimization: Whether to enable latency optimization for the default address pool.'''
        result = self._values.get("default_latency_optimization")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def default_lba_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property defaultLbaStrategy: The load balancing strategy of the default address pool.'''
        result = self._values.get("default_lba_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def default_max_return_addr_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property defaultMaxReturnAddrNum: The maximum return address number of the default address pool.'''
        result = self._values.get("default_max_return_addr_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def failover_addr_pool(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAccessStrategy.FailoverAddrPoolProperty"]]]]:
        '''Property failoverAddrPool: The failover address pool of the access strategy.'''
        result = self._values.get("failover_addr_pool")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAccessStrategy.FailoverAddrPoolProperty"]]]], result)

    @builtins.property
    def failover_addr_pool_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property failoverAddrPoolType: The type of the failover address pool.'''
        result = self._values.get("failover_addr_pool_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def failover_latency_optimization(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property failoverLatencyOptimization: Whether to enable latency optimization for the failover address pool.'''
        result = self._values.get("failover_latency_optimization")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def failover_lba_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property failoverLbaStrategy: The load balancing strategy of the failover address pool.'''
        result = self._values.get("failover_lba_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def failover_max_return_addr_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property failoverMaxReturnAddrNum: The maximum return address number of the failover address pool.'''
        result = self._values.get("failover_max_return_addr_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def failover_min_available_addr_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property failoverMinAvailableAddrNum: The minimum available address number of the failover address pool.'''
        result = self._values.get("failover_min_available_addr_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lines(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property lines: The lines of the access strategy.'''
        result = self._values.get("lines")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccessStrategyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.AddressPoolProps",
    jsii_struct_bases=[],
    name_mapping={
        "addr": "addr",
        "instance_id": "instanceId",
        "lba_strategy": "lbaStrategy",
        "name": "name",
        "type": "type",
        "evaluation_count": "evaluationCount",
        "interval": "interval",
        "isp_city_node": "ispCityNode",
        "monitor_extend_info": "monitorExtendInfo",
        "monitor_status": "monitorStatus",
        "protocol_type": "protocolType",
        "timeout": "timeout",
    },
)
class AddressPoolProps:
    def __init__(
        self,
        *,
        addr: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAddressPool.AddrProperty", typing.Dict[builtins.str, typing.Any]]]]],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        lba_strategy: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        evaluation_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        isp_city_node: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAddressPool.IspCityNodeProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        monitor_extend_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        monitor_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        protocol_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``AddressPool``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-addresspool

        :param addr: Property addr: The list of addresses in the address pool.
        :param instance_id: Property instanceId: The ID of the GTM instance.
        :param lba_strategy: Property lbaStrategy: The load balancing strategy. Valid values: RoundRobin, Weighted, FallbackToFirst.
        :param name: Property name: The name of the address pool.
        :param type: Property type: The type of the address pool. Valid values: Ipv4, Ipv6, Domain.
        :param evaluation_count: Property evaluationCount: The number of times that the system waits for a response from each address before it marks the address as unhealthy.
        :param interval: Property interval: The interval between two consecutive health checks, in seconds.
        :param isp_city_node: Property ispCityNode: The list of ISP city nodes.
        :param monitor_extend_info: Property monitorExtendInfo: The extended information of the health check.
        :param monitor_status: Property monitorStatus: The monitoring status of the address pool.
        :param protocol_type: Property protocolType: The protocol type.
        :param timeout: Property timeout: The timeout period of a health check, in seconds.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca91c4700a8776c6d73551402307fc4dc1b493dcbad14b973ceedc46ffc7faa0)
            check_type(argname="argument addr", value=addr, expected_type=type_hints["addr"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument lba_strategy", value=lba_strategy, expected_type=type_hints["lba_strategy"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument evaluation_count", value=evaluation_count, expected_type=type_hints["evaluation_count"])
            check_type(argname="argument interval", value=interval, expected_type=type_hints["interval"])
            check_type(argname="argument isp_city_node", value=isp_city_node, expected_type=type_hints["isp_city_node"])
            check_type(argname="argument monitor_extend_info", value=monitor_extend_info, expected_type=type_hints["monitor_extend_info"])
            check_type(argname="argument monitor_status", value=monitor_status, expected_type=type_hints["monitor_status"])
            check_type(argname="argument protocol_type", value=protocol_type, expected_type=type_hints["protocol_type"])
            check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "addr": addr,
            "instance_id": instance_id,
            "lba_strategy": lba_strategy,
            "name": name,
            "type": type,
        }
        if evaluation_count is not None:
            self._values["evaluation_count"] = evaluation_count
        if interval is not None:
            self._values["interval"] = interval
        if isp_city_node is not None:
            self._values["isp_city_node"] = isp_city_node
        if monitor_extend_info is not None:
            self._values["monitor_extend_info"] = monitor_extend_info
        if monitor_status is not None:
            self._values["monitor_status"] = monitor_status
        if protocol_type is not None:
            self._values["protocol_type"] = protocol_type
        if timeout is not None:
            self._values["timeout"] = timeout

    @builtins.property
    def addr(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddressPool.AddrProperty"]]]:
        '''Property addr: The list of addresses in the address pool.'''
        result = self._values.get("addr")
        assert result is not None, "Required property 'addr' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddressPool.AddrProperty"]]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the GTM instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def lba_strategy(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property lbaStrategy: The load balancing strategy.

        Valid values: RoundRobin, Weighted, FallbackToFirst.
        '''
        result = self._values.get("lba_strategy")
        assert result is not None, "Required property 'lba_strategy' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the address pool.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property type: The type of the address pool.

        Valid values: Ipv4, Ipv6, Domain.
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def evaluation_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property evaluationCount: The number of times that the system waits for a response from each address before it marks the address as unhealthy.'''
        result = self._values.get("evaluation_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property interval: The interval between two consecutive health checks, in seconds.'''
        result = self._values.get("interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def isp_city_node(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddressPool.IspCityNodeProperty"]]]]:
        '''Property ispCityNode: The list of ISP city nodes.'''
        result = self._values.get("isp_city_node")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddressPool.IspCityNodeProperty"]]]], result)

    @builtins.property
    def monitor_extend_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property monitorExtendInfo: The extended information of the health check.'''
        result = self._values.get("monitor_extend_info")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def monitor_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property monitorStatus: The monitoring status of the address pool.'''
        result = self._values.get("monitor_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def protocol_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property protocolType: The protocol type.'''
        result = self._values.get("protocol_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timeout: The timeout period of a health check, in seconds.'''
        result = self._values.get("timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AddressPoolProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.CacheDomainProps",
    jsii_struct_bases=[],
    name_mapping={
        "cache_ttl_max": "cacheTtlMax",
        "cache_ttl_min": "cacheTtlMin",
        "domain_name": "domainName",
        "instance_id": "instanceId",
        "source_dns_server": "sourceDnsServer",
        "source_edns": "sourceEdns",
        "source_protocol": "sourceProtocol",
        "remark": "remark",
    },
)
class CacheDomainProps:
    def __init__(
        self,
        *,
        cache_ttl_max: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        cache_ttl_min: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_dns_server: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCacheDomain.SourceDnsServerProperty", typing.Dict[builtins.str, typing.Any]]]]],
        source_edns: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``CacheDomain``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-cachedomain

        :param cache_ttl_max: Property cacheTtlMax: The maximum TTL value for cached records.
        :param cache_ttl_min: Property cacheTtlMin: The minimum TTL value for cached records.
        :param domain_name: Property domainName: The domain name of the DNS cache domain.
        :param instance_id: Property instanceId: The instance ID associated with the DNS cache domain.
        :param source_dns_server: Property sourceDnsServer: List of source DNS servers.
        :param source_edns: Property sourceEdns: Whether EDNS is enabled for the source DNS server.
        :param source_protocol: Property sourceProtocol: The protocol used by the source DNS server.
        :param remark: Property remark: Remark for the DNS cache domain.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36b8358721fe937e83b4ac1866be101067a83160a3c9e2a0dd971f29b444340c)
            check_type(argname="argument cache_ttl_max", value=cache_ttl_max, expected_type=type_hints["cache_ttl_max"])
            check_type(argname="argument cache_ttl_min", value=cache_ttl_min, expected_type=type_hints["cache_ttl_min"])
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument source_dns_server", value=source_dns_server, expected_type=type_hints["source_dns_server"])
            check_type(argname="argument source_edns", value=source_edns, expected_type=type_hints["source_edns"])
            check_type(argname="argument source_protocol", value=source_protocol, expected_type=type_hints["source_protocol"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cache_ttl_max": cache_ttl_max,
            "cache_ttl_min": cache_ttl_min,
            "domain_name": domain_name,
            "instance_id": instance_id,
            "source_dns_server": source_dns_server,
            "source_edns": source_edns,
            "source_protocol": source_protocol,
        }
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def cache_ttl_max(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cacheTtlMax: The maximum TTL value for cached records.'''
        result = self._values.get("cache_ttl_max")
        assert result is not None, "Required property 'cache_ttl_max' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cache_ttl_min(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cacheTtlMin: The minimum TTL value for cached records.'''
        result = self._values.get("cache_ttl_min")
        assert result is not None, "Required property 'cache_ttl_min' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domainName: The domain name of the DNS cache domain.'''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The instance ID associated with the DNS cache domain.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_dns_server(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCacheDomain.SourceDnsServerProperty"]]]:
        '''Property sourceDnsServer: List of source DNS servers.'''
        result = self._values.get("source_dns_server")
        assert result is not None, "Required property 'source_dns_server' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCacheDomain.SourceDnsServerProperty"]]], result)

    @builtins.property
    def source_edns(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceEdns: Whether EDNS is enabled for the source DNS server.'''
        result = self._values.get("source_edns")
        assert result is not None, "Required property 'source_edns' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceProtocol: The protocol used by the source DNS server.'''
        result = self._values.get("source_protocol")
        assert result is not None, "Required property 'source_protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property remark: Remark for the DNS cache domain.'''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CacheDomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.CustomLineProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain_name": "domainName",
        "ip_segment": "ipSegment",
        "line_name": "lineName",
    },
)
class CustomLineProps:
    def __init__(
        self,
        *,
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ip_segment: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCustomLine.IpSegmentProperty", typing.Dict[builtins.str, typing.Any]]]]],
        line_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``CustomLine``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-customline

        :param domain_name: Property domainName: The domain name associated with the custom line.
        :param ip_segment: Property ipSegment: The list of IP segments for the custom line.
        :param line_name: Property lineName: The name of the custom line.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__880aa6e12c68a0b3a8f32a56285f189db5a7d20a78d8c00c0e5756cac824d778)
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument ip_segment", value=ip_segment, expected_type=type_hints["ip_segment"])
            check_type(argname="argument line_name", value=line_name, expected_type=type_hints["line_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_name": domain_name,
            "ip_segment": ip_segment,
            "line_name": line_name,
        }

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domainName: The domain name associated with the custom line.'''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ip_segment(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomLine.IpSegmentProperty"]]]:
        '''Property ipSegment: The list of IP segments for the custom line.'''
        result = self._values.get("ip_segment")
        assert result is not None, "Required property 'ip_segment' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomLine.IpSegmentProperty"]]], result)

    @builtins.property
    def line_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property lineName: The name of the custom line.'''
        result = self._values.get("line_name")
        assert result is not None, "Required property 'line_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CustomLineProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.DomainAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={"domain_names": "domainNames", "instance_id": "instanceId"},
)
class DomainAttachmentProps:
    def __init__(
        self,
        *,
        domain_names: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``DomainAttachment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainattachment

        :param domain_names: Property domainNames: The list of domain names to attach.
        :param instance_id: Property instanceId: The ID of the instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dec7582a65349c714d3c46bf88e26980843b43bcdb4d363fe334be08b0340c64)
            check_type(argname="argument domain_names", value=domain_names, expected_type=type_hints["domain_names"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_names": domain_names,
            "instance_id": instance_id,
        }

    @builtins.property
    def domain_names(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property domainNames: The list of domain names to attach.'''
        result = self._values.get("domain_names")
        assert result is not None, "Required property 'domain_names' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.DomainGroupProps",
    jsii_struct_bases=[],
    name_mapping={"group_name": "groupName"},
)
class DomainGroupProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``DomainGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domaingroup

        :param group_name: Property groupName: Domain name group name.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__870e7dce3a2c27425fac2ea0724cd35e4ea4acb14a4d25bd0595e75d676a18d4)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_name": group_name,
        }

    @builtins.property
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property groupName: Domain name group name.'''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.DomainProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain_name": "domainName",
        "group_id": "groupId",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class DomainProps:
    def __init__(
        self,
        *,
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosDomain.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``Domain``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domain

        :param domain_name: Property domainName: Domain name.
        :param group_id: Property groupId: Domain name grouping, the default is the "default grouping" GroupId.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54144fb86336ae6a2a3b61141b78184b3058b63a7638c776d4bed058fb28eedd)
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_name": domain_name,
        }
        if group_id is not None:
            self._values["group_id"] = group_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domainName: Domain name.'''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupId: Domain name grouping, the default is the "default grouping" GroupId.'''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosDomain.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosDomain.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.DomainRecordProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain_name": "domainName",
        "rr": "rr",
        "type": "type",
        "value": "value",
        "line": "line",
        "priority": "priority",
        "ttl": "ttl",
    },
)
class DomainRecordProps:
    def __init__(
        self,
        *,
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        line: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DomainRecord``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainrecord

        :param domain_name: Property domainName: Domain name.
        :param rr: Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty.
        :param type: Property type: Parse record type, see parsing record type format.
        :param value: Property value: Record value.
        :param line: Property line: Parse the line, the default is default. See parsing line enumeration
        :param priority: Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be.
        :param ttl: Property ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7bbc2719a168ec2f8c950e1f545a604d25f38b321d07897ff2b71b20ffc833fa)
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument rr", value=rr, expected_type=type_hints["rr"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            check_type(argname="argument line", value=line, expected_type=type_hints["line"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument ttl", value=ttl, expected_type=type_hints["ttl"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_name": domain_name,
            "rr": rr,
            "type": type,
            "value": value,
        }
        if line is not None:
            self._values["line"] = line
        if priority is not None:
            self._values["priority"] = priority
        if ttl is not None:
            self._values["ttl"] = ttl

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domainName: Domain name.'''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rr(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty.'''
        result = self._values.get("rr")
        assert result is not None, "Required property 'rr' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property type: Parse record type, see parsing record type format.'''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def value(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property value: Record value.'''
        result = self._values.get("value")
        assert result is not None, "Required property 'value' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def line(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property line: Parse the line, the default is default.

        See parsing line enumeration
        '''
        result = self._values.get("line")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be.'''
        result = self._values.get("priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ttl: The resolution time is valid.

        The default is 600 seconds (10 minutes). See the TTL definition.
        '''
        result = self._values.get("ttl")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainRecordProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-dns.IAccessStrategy")
class IAccessStrategy(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``AccessStrategy``.'''

    @builtins.property
    @jsii.member(jsii_name="attrStrategyId")
    def attr_strategy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StrategyId: The ID of the access strategy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccessStrategyProps:
        ...


class _IAccessStrategyProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``AccessStrategy``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-dns.IAccessStrategy"

    @builtins.property
    @jsii.member(jsii_name="attrStrategyId")
    def attr_strategy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StrategyId: The ID of the access strategy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStrategyId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccessStrategyProps:
        return typing.cast(AccessStrategyProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAccessStrategy).__jsii_proxy_class__ = lambda : _IAccessStrategyProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-dns.IAddressPool")
class IAddressPool(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``AddressPool``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAddrPoolId")
    def attr_addr_pool_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AddrPoolId: The ID of the address pool.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AddressPoolProps:
        ...


class _IAddressPoolProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``AddressPool``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-dns.IAddressPool"

    @builtins.property
    @jsii.member(jsii_name="attrAddrPoolId")
    def attr_addr_pool_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AddrPoolId: The ID of the address pool.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAddrPoolId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AddressPoolProps:
        return typing.cast(AddressPoolProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAddressPool).__jsii_proxy_class__ = lambda : _IAddressPoolProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-dns.ICacheDomain")
class ICacheDomain(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``CacheDomain``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: The domain name of the DNS cache.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CacheDomainProps:
        ...


class _ICacheDomainProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``CacheDomain``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-dns.ICacheDomain"

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: The domain name of the DNS cache.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CacheDomainProps:
        return typing.cast(CacheDomainProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ICacheDomain).__jsii_proxy_class__ = lambda : _ICacheDomainProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-dns.ICustomLine")
class ICustomLine(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``CustomLine``.'''

    @builtins.property
    @jsii.member(jsii_name="attrLineId")
    def attr_line_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LineId: The ID of the custom line.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CustomLineProps:
        ...


class _ICustomLineProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``CustomLine``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-dns.ICustomLine"

    @builtins.property
    @jsii.member(jsii_name="attrLineId")
    def attr_line_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LineId: The ID of the custom line.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLineId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CustomLineProps:
        return typing.cast(CustomLineProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ICustomLine).__jsii_proxy_class__ = lambda : _ICustomLineProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-dns.IDomain")
class IDomain(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Domain``.'''

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDnsServers")
    def attr_dns_servers(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DnsServers: The DNS list for the domain name under resolution.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDomainId")
    def attr_domain_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainId: Domain ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: Domain name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupId: Domain name group ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: The name of the domain name group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPunyCode")
    def attr_puny_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PunyCode: punycode returned only for a Chinese domain name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainProps:
        ...


class _IDomainProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Domain``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-dns.IDomain"

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrDnsServers")
    def attr_dns_servers(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DnsServers: The DNS list for the domain name under resolution.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDnsServers"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainId")
    def attr_domain_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainId: Domain ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainId"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: Domain name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupId: Domain name group ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: The name of the domain name group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrPunyCode")
    def attr_puny_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PunyCode: punycode returned only for a Chinese domain name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPunyCode"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainProps:
        return typing.cast(DomainProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDomain).__jsii_proxy_class__ = lambda : _IDomainProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-dns.IDomainAttachment")
class IDomainAttachment(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``DomainAttachment``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainAttachmentProps:
        ...


class _IDomainAttachmentProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DomainAttachment``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-dns.IDomainAttachment"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainAttachmentProps:
        return typing.cast(DomainAttachmentProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDomainAttachment).__jsii_proxy_class__ = lambda : _IDomainAttachmentProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-dns.IDomainGroup")
class IDomainGroup(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``DomainGroup``.'''

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupId: Domain name group ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainGroupProps:
        ...


class _IDomainGroupProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DomainGroup``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-dns.IDomainGroup"

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupId: Domain name group ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainGroupProps:
        return typing.cast(DomainGroupProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDomainGroup).__jsii_proxy_class__ = lambda : _IDomainGroupProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-dns.IDomainRecord")
class IDomainRecord(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``DomainRecord``.'''

    @builtins.property
    @jsii.member(jsii_name="attrRecordId")
    def attr_record_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RecordId: Parse the ID of the record.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainRecordProps:
        ...


class _IDomainRecordProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DomainRecord``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-dns.IDomainRecord"

    @builtins.property
    @jsii.member(jsii_name="attrRecordId")
    def attr_record_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RecordId: Parse the ID of the record.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRecordId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainRecordProps:
        return typing.cast(DomainRecordProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDomainRecord).__jsii_proxy_class__ = lambda : _IDomainRecordProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-dns.IInstance")
class IInstance(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Instance``.'''

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: DNS instance id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        ...


class _IInstanceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Instance``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-dns.IInstance"

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: DNS instance id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IInstance).__jsii_proxy_class__ = lambda : _IInstanceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-dns.IMonitorConfig")
class IMonitorConfig(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``MonitorConfig``.'''

    @builtins.property
    @jsii.member(jsii_name="attrMonitorConfigId")
    def attr_monitor_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MonitorConfigId: The ID of the monitor config.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "MonitorConfigProps":
        ...


class _IMonitorConfigProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``MonitorConfig``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-dns.IMonitorConfig"

    @builtins.property
    @jsii.member(jsii_name="attrMonitorConfigId")
    def attr_monitor_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MonitorConfigId: The ID of the monitor config.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMonitorConfigId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "MonitorConfigProps":
        return typing.cast("MonitorConfigProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IMonitorConfig).__jsii_proxy_class__ = lambda : _IMonitorConfigProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-dns.IRecoveryPlan")
class IRecoveryPlan(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``RecoveryPlan``.'''

    @builtins.property
    @jsii.member(jsii_name="attrRecoveryPlanId")
    def attr_recovery_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RecoveryPlanId: The ID of the recovery plan.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RecoveryPlanProps":
        ...


class _IRecoveryPlanProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``RecoveryPlan``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-dns.IRecoveryPlan"

    @builtins.property
    @jsii.member(jsii_name="attrRecoveryPlanId")
    def attr_recovery_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RecoveryPlanId: The ID of the recovery plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRecoveryPlanId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RecoveryPlanProps":
        return typing.cast("RecoveryPlanProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IRecoveryPlan).__jsii_proxy_class__ = lambda : _IRecoveryPlanProxy


@jsii.implements(IInstance)
class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.Instance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DNS::Instance``, which is used to create an Alibaba Cloud DNS instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-instance
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
            type_hints = typing.get_type_hints(_typecheckingstub__33e15550113a92d6d3e6098456a214d174ad3a53fcc8c9e52977cd245eae044d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: DNS instance id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__654994675929b971ca5ffaa883bd7d9de1d55f9f97db84d40665ad842e394d70)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c8bfdecdcd1d5bab13d433dcc61edc4c99bba5ab351e9e329a8eb631273673d9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4902032cf7f526aaf6e1c366b451fe57dba3457c04d16ab882cff5ff58edcc1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "dns_security": "dnsSecurity",
        "domain_numbers": "domainNumbers",
        "period": "period",
        "period_unit": "periodUnit",
        "version": "version",
        "domain": "domain",
        "instance_type": "instanceType",
        "renewal_status": "renewalStatus",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        dns_security: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        domain_numbers: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        period_unit: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Instance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-instance

        :param dns_security: Property dnsSecurity: The DNS security policy. Valid values: - no: No protection against DNS attacks is provided. - basic: Basic protection against DNS attacks is provided. - advanced: Advanced protection against DNS attacks is provided.
        :param domain_numbers: Property domainNumbers: The number of domain names.
        :param period: Property period: The subscription duration. Valid values: - If unit is month: 1, 2, 3, 6 - If unit is year: 1, 2
        :param period_unit: Property periodUnit: The subscription duration unit.
        :param version: Property version: The edition of Alibaba Cloud DNS. Valid values: If create hosted public zone: - version_personal: Personal Edition. - version_enterprise_basic: Enterprise Standard Edition. - version_enterprise_advanced: Enterprise Ultimate Edition. If create cached public zone: - version_cached_basic**Note**: Only upgrade operations are supported after instance creation.
        :param domain: Property domain: The domain name that you want to bind to the instance. If you want to bind multiple domain names to the instance, separate these domain names with commas (,).
        :param instance_type: Property instanceType: The type of the instance. Valid values: - HostedPublicZone: Hosted Public Zone - CachedPublicZone: Cached Public Zone.
        :param renewal_status: Property renewalStatus: The renewal method. Valid values: - AutoRenewal: The instance is automatically renewed. - ManualRenewal: The instance is manually renewed. Default value: ManualRenewal.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba95997c0729dd10f964ab726668df3a13eb424c3c4b96783b94711c40bd2d72)
            check_type(argname="argument dns_security", value=dns_security, expected_type=type_hints["dns_security"])
            check_type(argname="argument domain_numbers", value=domain_numbers, expected_type=type_hints["domain_numbers"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            check_type(argname="argument domain", value=domain, expected_type=type_hints["domain"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument renewal_status", value=renewal_status, expected_type=type_hints["renewal_status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "dns_security": dns_security,
            "domain_numbers": domain_numbers,
            "period": period,
            "period_unit": period_unit,
            "version": version,
        }
        if domain is not None:
            self._values["domain"] = domain
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if renewal_status is not None:
            self._values["renewal_status"] = renewal_status

    @builtins.property
    def dns_security(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dnsSecurity: The DNS security policy.

        Valid values:

        - no: No protection against DNS attacks is provided.
        - basic: Basic protection against DNS attacks is provided.
        - advanced: Advanced protection against DNS attacks is provided.
        '''
        result = self._values.get("dns_security")
        assert result is not None, "Required property 'dns_security' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def domain_numbers(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domainNumbers: The number of domain names.'''
        result = self._values.get("domain_numbers")
        assert result is not None, "Required property 'domain_numbers' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property period: The subscription duration.

        Valid values:

        - If unit is month: 1, 2, 3, 6
        - If unit is year: 1, 2
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property periodUnit: The subscription duration unit.'''
        result = self._values.get("period_unit")
        assert result is not None, "Required property 'period_unit' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def version(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property version: The edition of Alibaba Cloud DNS.

        Valid values:
        If create hosted public zone:

        - version_personal: Personal Edition.
        - version_enterprise_basic: Enterprise Standard Edition.
        - version_enterprise_advanced: Enterprise Ultimate Edition.
          If create cached public zone:
        - version_cached_basic**Note**: Only upgrade operations are supported after instance creation.
        '''
        result = self._values.get("version")
        assert result is not None, "Required property 'version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def domain(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property domain: The domain name that you want to bind to the instance.

        If you want to bind multiple domain names to the instance, separate these domain names with commas (,).
        '''
        result = self._values.get("domain")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceType: The type of the instance.

        Valid values:

        - HostedPublicZone: Hosted Public Zone
        - CachedPublicZone: Cached Public Zone.
        '''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property renewalStatus: The renewal method.

        Valid values:

        - AutoRenewal: The instance is automatically renewed.
        - ManualRenewal: The instance is manually renewed.
          Default value: ManualRenewal.
        '''
        result = self._values.get("renewal_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IMonitorConfig)
class MonitorConfig(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.MonitorConfig",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DNS::MonitorConfig``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosMonitorConfig``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-monitorconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MonitorConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a03b279dde500477a7a3091f49784e384a8271bdf8b19adc7ebc6546c2973d03)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrMonitorConfigId")
    def attr_monitor_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MonitorConfigId: The ID of the monitor config.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMonitorConfigId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "MonitorConfigProps":
        return typing.cast("MonitorConfigProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__605ff6d07ed077e4cb358525543e31b8e54075386bd148a2d66038dc544a8b8a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2e9a5531d5b54d592342249eaa89707ac4126d36a1ee3dfb1799ce59d4fb1a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2b8042942255178e28dc78653d43d7671e6c61ebcc606e267887c197e3d7207)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.MonitorConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "addr_pool_id": "addrPoolId",
        "evaluation_count": "evaluationCount",
        "interval": "interval",
        "isp_city_node": "ispCityNode",
        "monitor_extend_info": "monitorExtendInfo",
        "protocol_type": "protocolType",
        "timeout": "timeout",
    },
)
class MonitorConfigProps:
    def __init__(
        self,
        *,
        addr_pool_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        evaluation_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        interval: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        isp_city_node: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMonitorConfig.IspCityNodeProperty", typing.Dict[builtins.str, typing.Any]]]]],
        monitor_extend_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        protocol_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        timeout: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``MonitorConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-monitorconfig

        :param addr_pool_id: Property addrPoolId: The ID of the address pool.
        :param evaluation_count: Property evaluationCount: The evaluation count of the monitor.
        :param interval: Property interval: The interval of the monitor.
        :param isp_city_node: Property ispCityNode: The ISP city node list.
        :param monitor_extend_info: Property monitorExtendInfo: The extend info of the monitor.
        :param protocol_type: Property protocolType: The protocol type of the monitor.
        :param timeout: Property timeout: The timeout of the monitor.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c563c947dac0bcb1fe0f023d7803ae2555032460adecacc4dfa7e1fa5766ebc9)
            check_type(argname="argument addr_pool_id", value=addr_pool_id, expected_type=type_hints["addr_pool_id"])
            check_type(argname="argument evaluation_count", value=evaluation_count, expected_type=type_hints["evaluation_count"])
            check_type(argname="argument interval", value=interval, expected_type=type_hints["interval"])
            check_type(argname="argument isp_city_node", value=isp_city_node, expected_type=type_hints["isp_city_node"])
            check_type(argname="argument monitor_extend_info", value=monitor_extend_info, expected_type=type_hints["monitor_extend_info"])
            check_type(argname="argument protocol_type", value=protocol_type, expected_type=type_hints["protocol_type"])
            check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "addr_pool_id": addr_pool_id,
            "evaluation_count": evaluation_count,
            "interval": interval,
            "isp_city_node": isp_city_node,
            "monitor_extend_info": monitor_extend_info,
            "protocol_type": protocol_type,
            "timeout": timeout,
        }

    @builtins.property
    def addr_pool_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property addrPoolId: The ID of the address pool.'''
        result = self._values.get("addr_pool_id")
        assert result is not None, "Required property 'addr_pool_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def evaluation_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property evaluationCount: The evaluation count of the monitor.'''
        result = self._values.get("evaluation_count")
        assert result is not None, "Required property 'evaluation_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def interval(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property interval: The interval of the monitor.'''
        result = self._values.get("interval")
        assert result is not None, "Required property 'interval' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def isp_city_node(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMonitorConfig.IspCityNodeProperty"]]]:
        '''Property ispCityNode: The ISP city node list.'''
        result = self._values.get("isp_city_node")
        assert result is not None, "Required property 'isp_city_node' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMonitorConfig.IspCityNodeProperty"]]], result)

    @builtins.property
    def monitor_extend_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property monitorExtendInfo: The extend info of the monitor.'''
        result = self._values.get("monitor_extend_info")
        assert result is not None, "Required property 'monitor_extend_info' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def protocol_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property protocolType: The protocol type of the monitor.'''
        result = self._values.get("protocol_type")
        assert result is not None, "Required property 'protocol_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def timeout(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property timeout: The timeout of the monitor.'''
        result = self._values.get("timeout")
        assert result is not None, "Required property 'timeout' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MonitorConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IRecoveryPlan)
class RecoveryPlan(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.RecoveryPlan",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DNS::RecoveryPlan``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosRecoveryPlan``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-recoveryplan
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RecoveryPlanProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d130b65e65b6feee2e2fbe4a6193fb078f700480034d45cf7c187e2898348ec5)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrRecoveryPlanId")
    def attr_recovery_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RecoveryPlanId: The ID of the recovery plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRecoveryPlanId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RecoveryPlanProps":
        return typing.cast("RecoveryPlanProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46201b4e91b697499c0ed247de72c10c5ae3af6b1d3bdc2c7311c6d5dae8a65e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b001f9a4556b5e388e406a4e074149d879f200d60bdbe1b4de6345e8b19b682)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__271db616d792f6269b749f6bc96d8ccd26c37ecff762101fe94bdb14a349be10)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.RecoveryPlanProps",
    jsii_struct_bases=[],
    name_mapping={
        "fault_addr_pool": "faultAddrPool",
        "name": "name",
        "lang": "lang",
        "remark": "remark",
    },
)
class RecoveryPlanProps:
    def __init__(
        self,
        *,
        fault_addr_pool: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RecoveryPlan``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-recoveryplan

        :param fault_addr_pool: Property faultAddrPool: The fault address pool of the recovery plan. The value must be encoded in UTF-8.
        :param name: Property name: The name of the recovery plan. The value can be up to 128 bytes in length. The value must be encoded in UTF-8.
        :param lang: Property lang: The language of the request.
        :param remark: Property remark: The remark of the recovery plan. The value can be up to 256 bytes in length. The value must be encoded in UTF-8.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5771ad668f63be30c1bbbebd1881263aabc2b32d760655cbefe68a6828c6df8)
            check_type(argname="argument fault_addr_pool", value=fault_addr_pool, expected_type=type_hints["fault_addr_pool"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument lang", value=lang, expected_type=type_hints["lang"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "fault_addr_pool": fault_addr_pool,
            "name": name,
        }
        if lang is not None:
            self._values["lang"] = lang
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def fault_addr_pool(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property faultAddrPool: The fault address pool of the recovery plan.

        The value must be encoded in UTF-8.
        '''
        result = self._values.get("fault_addr_pool")
        assert result is not None, "Required property 'fault_addr_pool' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the recovery plan.

        The value can be up to 128 bytes in length. The value must be encoded in UTF-8.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property lang: The language of the request.'''
        result = self._values.get("lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property remark: The remark of the recovery plan.

        The value can be up to 256 bytes in length. The value must be encoded in UTF-8.
        '''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RecoveryPlanProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccessStrategy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.RosAccessStrategy",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DNS::AccessStrategy``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AccessStrategy`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-accessstrategy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccessStrategyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__500317eae4cc66c387de18fe72c15b3a2b61e32f2935c1dbab690ad18f1cc138)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e61e6552b9eed1e03c881edf28f1a0064154a223aa2c94fb9dc0f3d016269213)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrStrategyId")
    def attr_strategy_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StrategyId: The ID of the access strategy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStrategyId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="defaultAddrPool")
    def default_addr_pool(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAccessStrategy.DefaultAddrPoolProperty"]]]:
        '''
        :Property: defaultAddrPool: The default address pool of the access strategy.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAccessStrategy.DefaultAddrPoolProperty"]]], jsii.get(self, "defaultAddrPool"))

    @default_addr_pool.setter
    def default_addr_pool(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAccessStrategy.DefaultAddrPoolProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__367ab01bf4ccf3618b9811d5a5473b36604c4d7f0797ffb3055813139b59dfa6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultAddrPool", value)

    @builtins.property
    @jsii.member(jsii_name="defaultAddrPoolType")
    def default_addr_pool_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: defaultAddrPoolType: The type of the default address pool.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "defaultAddrPoolType"))

    @default_addr_pool_type.setter
    def default_addr_pool_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__634d7f670bb6487aaf09ecf63430b73470bcec2da0811634e671c00acfba9c92)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultAddrPoolType", value)

    @builtins.property
    @jsii.member(jsii_name="defaultMinAvailableAddrNum")
    def default_min_available_addr_num(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: defaultMinAvailableAddrNum: The minimum available address number of the default address pool.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "defaultMinAvailableAddrNum"))

    @default_min_available_addr_num.setter
    def default_min_available_addr_num(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb32112d6af6c089818bef290c239aec68633e91c6cf12fb7eacc0516c2923ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultMinAvailableAddrNum", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab10d453efdb09753d072d9aa29b06eb3348a35e4278c961db443420b38f2299)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the Dns instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b2986fde1b3d9e8321ab16ee2e924f75dc4889194812c44e047a12432faf972)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="strategyMode")
    def strategy_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: strategyMode: The mode of the access strategy.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "strategyMode"))

    @strategy_mode.setter
    def strategy_mode(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4648283aa6bbbdb2df256cfb7377e4d293fcde9c87533a1cfb001274bdd440e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "strategyMode", value)

    @builtins.property
    @jsii.member(jsii_name="strategyName")
    def strategy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: strategyName: The name of the access strategy.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "strategyName"))

    @strategy_name.setter
    def strategy_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__412860cb60db6825a295dec1f56ab1a914e064929bc0c6d02c5b6e0153c037b1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "strategyName", value)

    @builtins.property
    @jsii.member(jsii_name="accessMode")
    def access_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accessMode: The access mode of the access strategy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accessMode"))

    @access_mode.setter
    def access_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d23094b58a15ed92f0f8c8dd87ef6da699a42c600129cda48afacaa07f1faef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessMode", value)

    @builtins.property
    @jsii.member(jsii_name="defaultLatencyOptimization")
    def default_latency_optimization(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: defaultLatencyOptimization: Whether to enable latency optimization for the default address pool.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "defaultLatencyOptimization"))

    @default_latency_optimization.setter
    def default_latency_optimization(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__725a638446eb2eabc020b49508b8923cf0d71aa2baff50b4dffa98d943315538)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultLatencyOptimization", value)

    @builtins.property
    @jsii.member(jsii_name="defaultLbaStrategy")
    def default_lba_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: defaultLbaStrategy: The load balancing strategy of the default address pool.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "defaultLbaStrategy"))

    @default_lba_strategy.setter
    def default_lba_strategy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__943f8cc48cf6aa5985e7b5bee16f19cf4f65550c76e0d94ea9c04294b1391f7c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultLbaStrategy", value)

    @builtins.property
    @jsii.member(jsii_name="defaultMaxReturnAddrNum")
    def default_max_return_addr_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: defaultMaxReturnAddrNum: The maximum return address number of the default address pool.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "defaultMaxReturnAddrNum"))

    @default_max_return_addr_num.setter
    def default_max_return_addr_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3502dbe3612502d42396b5714f527fb376c0621e34bb9bf29bb4293d07b4b4d5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultMaxReturnAddrNum", value)

    @builtins.property
    @jsii.member(jsii_name="failoverAddrPool")
    def failover_addr_pool(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAccessStrategy.FailoverAddrPoolProperty"]]]]:
        '''
        :Property: failoverAddrPool: The failover address pool of the access strategy.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAccessStrategy.FailoverAddrPoolProperty"]]]], jsii.get(self, "failoverAddrPool"))

    @failover_addr_pool.setter
    def failover_addr_pool(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAccessStrategy.FailoverAddrPoolProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59c9c54c69aaf2cd98bb0a782394371ed09831f952fbf098be5cc7b2bc6a2856)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "failoverAddrPool", value)

    @builtins.property
    @jsii.member(jsii_name="failoverAddrPoolType")
    def failover_addr_pool_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: failoverAddrPoolType: The type of the failover address pool.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "failoverAddrPoolType"))

    @failover_addr_pool_type.setter
    def failover_addr_pool_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__697472cfab40ded6cd89e2720788b07dc79ffed4df4c0d64de82f9a692d7243e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "failoverAddrPoolType", value)

    @builtins.property
    @jsii.member(jsii_name="failoverLatencyOptimization")
    def failover_latency_optimization(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: failoverLatencyOptimization: Whether to enable latency optimization for the failover address pool.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "failoverLatencyOptimization"))

    @failover_latency_optimization.setter
    def failover_latency_optimization(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__050ca042b55058e56ac160f0c104ad2aa7be6b94237e28f81a44801d7f4db88c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "failoverLatencyOptimization", value)

    @builtins.property
    @jsii.member(jsii_name="failoverLbaStrategy")
    def failover_lba_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: failoverLbaStrategy: The load balancing strategy of the failover address pool.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "failoverLbaStrategy"))

    @failover_lba_strategy.setter
    def failover_lba_strategy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab5312d023a0987f71ac0e126ea9bd2eff6f60741a02e28ece0daa466b5c94fa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "failoverLbaStrategy", value)

    @builtins.property
    @jsii.member(jsii_name="failoverMaxReturnAddrNum")
    def failover_max_return_addr_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: failoverMaxReturnAddrNum: The maximum return address number of the failover address pool.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "failoverMaxReturnAddrNum"))

    @failover_max_return_addr_num.setter
    def failover_max_return_addr_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82c9110deffe31cd6f79e0aa736ef7a42e3ee9c3e8648e2ee7e3b70a9d002aa6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "failoverMaxReturnAddrNum", value)

    @builtins.property
    @jsii.member(jsii_name="failoverMinAvailableAddrNum")
    def failover_min_available_addr_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: failoverMinAvailableAddrNum: The minimum available address number of the failover address pool.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "failoverMinAvailableAddrNum"))

    @failover_min_available_addr_num.setter
    def failover_min_available_addr_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd6a3047e61f2a465cef66ff416c64eefb7207946c889bdf12f6f35be564f360)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "failoverMinAvailableAddrNum", value)

    @builtins.property
    @jsii.member(jsii_name="lines")
    def lines(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: lines: The lines of the access strategy.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "lines"))

    @lines.setter
    def lines(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__16c0596989f1b164abb3dba0227c5c9be6293ff5102ecc2131f59ea6c8a48203)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lines", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dns.RosAccessStrategy.DefaultAddrPoolProperty",
        jsii_struct_bases=[],
        name_mapping={"identity": "identity", "lba_weight": "lbaWeight"},
    )
    class DefaultAddrPoolProperty:
        def __init__(
            self,
            *,
            identity: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            lba_weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param identity: 
            :param lba_weight: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__c3fa8a0f3a8029924705313c3f6b3d98d156429bd84fc2f0bf00cfa4b5eba445)
                check_type(argname="argument identity", value=identity, expected_type=type_hints["identity"])
                check_type(argname="argument lba_weight", value=lba_weight, expected_type=type_hints["lba_weight"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if identity is not None:
                self._values["identity"] = identity
            if lba_weight is not None:
                self._values["lba_weight"] = lba_weight

        @builtins.property
        def identity(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: identity: The ID of the address pool.
            '''
            result = self._values.get("identity")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def lba_weight(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: lbaWeight: The load balancing weight of the address pool.
            '''
            result = self._values.get("lba_weight")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DefaultAddrPoolProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dns.RosAccessStrategy.FailoverAddrPoolProperty",
        jsii_struct_bases=[],
        name_mapping={"identity": "identity", "lba_weight": "lbaWeight"},
    )
    class FailoverAddrPoolProperty:
        def __init__(
            self,
            *,
            identity: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            lba_weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param identity: 
            :param lba_weight: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__afd8e1de3a80146ec062fe6ed0635f9e741c5bb2dee40b8c2c636f89f7010e08)
                check_type(argname="argument identity", value=identity, expected_type=type_hints["identity"])
                check_type(argname="argument lba_weight", value=lba_weight, expected_type=type_hints["lba_weight"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if identity is not None:
                self._values["identity"] = identity
            if lba_weight is not None:
                self._values["lba_weight"] = lba_weight

        @builtins.property
        def identity(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: identity: The ID of the address pool.
            '''
            result = self._values.get("identity")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def lba_weight(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: lbaWeight: The load balancing weight of the address pool.
            '''
            result = self._values.get("lba_weight")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "FailoverAddrPoolProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.RosAccessStrategyProps",
    jsii_struct_bases=[],
    name_mapping={
        "default_addr_pool": "defaultAddrPool",
        "default_addr_pool_type": "defaultAddrPoolType",
        "default_min_available_addr_num": "defaultMinAvailableAddrNum",
        "instance_id": "instanceId",
        "strategy_mode": "strategyMode",
        "strategy_name": "strategyName",
        "access_mode": "accessMode",
        "default_latency_optimization": "defaultLatencyOptimization",
        "default_lba_strategy": "defaultLbaStrategy",
        "default_max_return_addr_num": "defaultMaxReturnAddrNum",
        "failover_addr_pool": "failoverAddrPool",
        "failover_addr_pool_type": "failoverAddrPoolType",
        "failover_latency_optimization": "failoverLatencyOptimization",
        "failover_lba_strategy": "failoverLbaStrategy",
        "failover_max_return_addr_num": "failoverMaxReturnAddrNum",
        "failover_min_available_addr_num": "failoverMinAvailableAddrNum",
        "lines": "lines",
    },
)
class RosAccessStrategyProps:
    def __init__(
        self,
        *,
        default_addr_pool: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAccessStrategy.DefaultAddrPoolProperty, typing.Dict[builtins.str, typing.Any]]]]],
        default_addr_pool_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        default_min_available_addr_num: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        strategy_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        strategy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        access_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        default_latency_optimization: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        default_lba_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        default_max_return_addr_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        failover_addr_pool: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAccessStrategy.FailoverAddrPoolProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        failover_addr_pool_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        failover_latency_optimization: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        failover_lba_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        failover_max_return_addr_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        failover_min_available_addr_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lines: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosAccessStrategy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-accessstrategy

        :param default_addr_pool: 
        :param default_addr_pool_type: 
        :param default_min_available_addr_num: 
        :param instance_id: 
        :param strategy_mode: 
        :param strategy_name: 
        :param access_mode: 
        :param default_latency_optimization: 
        :param default_lba_strategy: 
        :param default_max_return_addr_num: 
        :param failover_addr_pool: 
        :param failover_addr_pool_type: 
        :param failover_latency_optimization: 
        :param failover_lba_strategy: 
        :param failover_max_return_addr_num: 
        :param failover_min_available_addr_num: 
        :param lines: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ff453f01156a86508f5b68b40baf480cc049d550ed3e197ffa606d86f7fb495)
            check_type(argname="argument default_addr_pool", value=default_addr_pool, expected_type=type_hints["default_addr_pool"])
            check_type(argname="argument default_addr_pool_type", value=default_addr_pool_type, expected_type=type_hints["default_addr_pool_type"])
            check_type(argname="argument default_min_available_addr_num", value=default_min_available_addr_num, expected_type=type_hints["default_min_available_addr_num"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument strategy_mode", value=strategy_mode, expected_type=type_hints["strategy_mode"])
            check_type(argname="argument strategy_name", value=strategy_name, expected_type=type_hints["strategy_name"])
            check_type(argname="argument access_mode", value=access_mode, expected_type=type_hints["access_mode"])
            check_type(argname="argument default_latency_optimization", value=default_latency_optimization, expected_type=type_hints["default_latency_optimization"])
            check_type(argname="argument default_lba_strategy", value=default_lba_strategy, expected_type=type_hints["default_lba_strategy"])
            check_type(argname="argument default_max_return_addr_num", value=default_max_return_addr_num, expected_type=type_hints["default_max_return_addr_num"])
            check_type(argname="argument failover_addr_pool", value=failover_addr_pool, expected_type=type_hints["failover_addr_pool"])
            check_type(argname="argument failover_addr_pool_type", value=failover_addr_pool_type, expected_type=type_hints["failover_addr_pool_type"])
            check_type(argname="argument failover_latency_optimization", value=failover_latency_optimization, expected_type=type_hints["failover_latency_optimization"])
            check_type(argname="argument failover_lba_strategy", value=failover_lba_strategy, expected_type=type_hints["failover_lba_strategy"])
            check_type(argname="argument failover_max_return_addr_num", value=failover_max_return_addr_num, expected_type=type_hints["failover_max_return_addr_num"])
            check_type(argname="argument failover_min_available_addr_num", value=failover_min_available_addr_num, expected_type=type_hints["failover_min_available_addr_num"])
            check_type(argname="argument lines", value=lines, expected_type=type_hints["lines"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "default_addr_pool": default_addr_pool,
            "default_addr_pool_type": default_addr_pool_type,
            "default_min_available_addr_num": default_min_available_addr_num,
            "instance_id": instance_id,
            "strategy_mode": strategy_mode,
            "strategy_name": strategy_name,
        }
        if access_mode is not None:
            self._values["access_mode"] = access_mode
        if default_latency_optimization is not None:
            self._values["default_latency_optimization"] = default_latency_optimization
        if default_lba_strategy is not None:
            self._values["default_lba_strategy"] = default_lba_strategy
        if default_max_return_addr_num is not None:
            self._values["default_max_return_addr_num"] = default_max_return_addr_num
        if failover_addr_pool is not None:
            self._values["failover_addr_pool"] = failover_addr_pool
        if failover_addr_pool_type is not None:
            self._values["failover_addr_pool_type"] = failover_addr_pool_type
        if failover_latency_optimization is not None:
            self._values["failover_latency_optimization"] = failover_latency_optimization
        if failover_lba_strategy is not None:
            self._values["failover_lba_strategy"] = failover_lba_strategy
        if failover_max_return_addr_num is not None:
            self._values["failover_max_return_addr_num"] = failover_max_return_addr_num
        if failover_min_available_addr_num is not None:
            self._values["failover_min_available_addr_num"] = failover_min_available_addr_num
        if lines is not None:
            self._values["lines"] = lines

    @builtins.property
    def default_addr_pool(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAccessStrategy.DefaultAddrPoolProperty]]]:
        '''
        :Property: defaultAddrPool: The default address pool of the access strategy.
        '''
        result = self._values.get("default_addr_pool")
        assert result is not None, "Required property 'default_addr_pool' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAccessStrategy.DefaultAddrPoolProperty]]], result)

    @builtins.property
    def default_addr_pool_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: defaultAddrPoolType: The type of the default address pool.
        '''
        result = self._values.get("default_addr_pool_type")
        assert result is not None, "Required property 'default_addr_pool_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def default_min_available_addr_num(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: defaultMinAvailableAddrNum: The minimum available address number of the default address pool.
        '''
        result = self._values.get("default_min_available_addr_num")
        assert result is not None, "Required property 'default_min_available_addr_num' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the Dns instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def strategy_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: strategyMode: The mode of the access strategy.
        '''
        result = self._values.get("strategy_mode")
        assert result is not None, "Required property 'strategy_mode' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def strategy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: strategyName: The name of the access strategy.
        '''
        result = self._values.get("strategy_name")
        assert result is not None, "Required property 'strategy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def access_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accessMode: The access mode of the access strategy.
        '''
        result = self._values.get("access_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def default_latency_optimization(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: defaultLatencyOptimization: Whether to enable latency optimization for the default address pool.
        '''
        result = self._values.get("default_latency_optimization")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def default_lba_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: defaultLbaStrategy: The load balancing strategy of the default address pool.
        '''
        result = self._values.get("default_lba_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def default_max_return_addr_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: defaultMaxReturnAddrNum: The maximum return address number of the default address pool.
        '''
        result = self._values.get("default_max_return_addr_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def failover_addr_pool(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAccessStrategy.FailoverAddrPoolProperty]]]]:
        '''
        :Property: failoverAddrPool: The failover address pool of the access strategy.
        '''
        result = self._values.get("failover_addr_pool")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAccessStrategy.FailoverAddrPoolProperty]]]], result)

    @builtins.property
    def failover_addr_pool_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: failoverAddrPoolType: The type of the failover address pool.
        '''
        result = self._values.get("failover_addr_pool_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def failover_latency_optimization(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: failoverLatencyOptimization: Whether to enable latency optimization for the failover address pool.
        '''
        result = self._values.get("failover_latency_optimization")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def failover_lba_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: failoverLbaStrategy: The load balancing strategy of the failover address pool.
        '''
        result = self._values.get("failover_lba_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def failover_max_return_addr_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: failoverMaxReturnAddrNum: The maximum return address number of the failover address pool.
        '''
        result = self._values.get("failover_max_return_addr_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def failover_min_available_addr_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: failoverMinAvailableAddrNum: The minimum available address number of the failover address pool.
        '''
        result = self._values.get("failover_min_available_addr_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lines(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: lines: The lines of the access strategy.
        '''
        result = self._values.get("lines")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccessStrategyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAddressPool(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.RosAddressPool",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DNS::AddressPool``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AddressPool`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-addresspool
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAddressPoolProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54e226dc644795e78329ea6a772c42a56976b557d225bce8a590b568a5c41ee8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3cc7d12ee3261c4b7ca9de652a99a74f1fd77d2b58255056fb931450c57a580c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAddrPoolId")
    def attr_addr_pool_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AddrPoolId: The ID of the address pool.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddrPoolId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="addr")
    def addr(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddressPool.AddrProperty"]]]:
        '''
        :Property: addr: The list of addresses in the address pool.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddressPool.AddrProperty"]]], jsii.get(self, "addr"))

    @addr.setter
    def addr(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddressPool.AddrProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__00eb211c4a74c1e0e76127adeb2bc8226143696eec23dd46486e2418fc991a84)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addr", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9056a0322b3ca998ff0708d90227ce5e4e554b8b00790ef797663205fa26783d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the GTM instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__156c29d1adbc1134724035824a6cf2696cd049aff2cebad970dd0df85b5fb73f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="lbaStrategy")
    def lba_strategy(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: lbaStrategy: The load balancing strategy. Valid values: RoundRobin, Weighted, FallbackToFirst.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "lbaStrategy"))

    @lba_strategy.setter
    def lba_strategy(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cf8b0b6594ace68a3d4e455a33f3245544c1149e2a9039e31adf750625f2d95b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lbaStrategy", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the address pool.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c79ebd0767e3505c795f0be688fb40f3b066e5cca7827f36fe41b1bded9f47c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: type: The type of the address pool. Valid values: Ipv4, Ipv6, Domain.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd3fcb9dc3c5d6f31fd85743db4e1e7c54414325d0fa6268c32535f89ad37c71)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)

    @builtins.property
    @jsii.member(jsii_name="evaluationCount")
    def evaluation_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: evaluationCount: The number of times that the system waits for a response from each address before it marks the address as unhealthy.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "evaluationCount"))

    @evaluation_count.setter
    def evaluation_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d31f40ead33f2d458c2b8c3bee6fa91747e09f9fe6cd839ea9d5c8a6e48a00c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "evaluationCount", value)

    @builtins.property
    @jsii.member(jsii_name="interval")
    def interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: interval: The interval between two consecutive health checks, in seconds.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "interval"))

    @interval.setter
    def interval(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5f5eddb22935619e0bd05a84547eeffb03b67848c590ee7cb98f8ff148738a77)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "interval", value)

    @builtins.property
    @jsii.member(jsii_name="ispCityNode")
    def isp_city_node(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddressPool.IspCityNodeProperty"]]]]:
        '''
        :Property: ispCityNode: The list of ISP city nodes.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddressPool.IspCityNodeProperty"]]]], jsii.get(self, "ispCityNode"))

    @isp_city_node.setter
    def isp_city_node(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddressPool.IspCityNodeProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__11fae5ad5df8e71e3dccf687148c76763086f8d69d0a9289b999fc523d0b6fe0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ispCityNode", value)

    @builtins.property
    @jsii.member(jsii_name="monitorExtendInfo")
    def monitor_extend_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: monitorExtendInfo: The extended information of the health check.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "monitorExtendInfo"))

    @monitor_extend_info.setter
    def monitor_extend_info(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fee9431b024e7c72bbdead88830bc40cdb0546f16c6ccf1d3fa72b972ffb96df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "monitorExtendInfo", value)

    @builtins.property
    @jsii.member(jsii_name="monitorStatus")
    def monitor_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: monitorStatus: The monitoring status of the address pool.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "monitorStatus"))

    @monitor_status.setter
    def monitor_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0503ce5a079cf763f14e8238ceaff1cc0084f11f92dfb8a828a19739e17500a2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "monitorStatus", value)

    @builtins.property
    @jsii.member(jsii_name="protocolType")
    def protocol_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: protocolType: The protocol type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "protocolType"))

    @protocol_type.setter
    def protocol_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea9b16e240116480949681c9ca1841d478f407d8f1aef774db9cce41f2f855e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocolType", value)

    @builtins.property
    @jsii.member(jsii_name="timeout")
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeout: The timeout period of a health check, in seconds.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "timeout"))

    @timeout.setter
    def timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74a3f9324772d15406f8f3cd589954b0c4d8bb4e05120bbb22136446697010b7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeout", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dns.RosAddressPool.AddrProperty",
        jsii_struct_bases=[],
        name_mapping={
            "addr": "addr",
            "attribute_info": "attributeInfo",
            "mode": "mode",
            "lba_weight": "lbaWeight",
            "remark": "remark",
        },
    )
    class AddrProperty:
        def __init__(
            self,
            *,
            addr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            attribute_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
            mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            lba_weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param addr: 
            :param attribute_info: 
            :param mode: 
            :param lba_weight: 
            :param remark: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__74d5f2075cd17013dd1e04d0d5877220aee372bda39ac9b8a26408f2dc54fc5a)
                check_type(argname="argument addr", value=addr, expected_type=type_hints["addr"])
                check_type(argname="argument attribute_info", value=attribute_info, expected_type=type_hints["attribute_info"])
                check_type(argname="argument mode", value=mode, expected_type=type_hints["mode"])
                check_type(argname="argument lba_weight", value=lba_weight, expected_type=type_hints["lba_weight"])
                check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "addr": addr,
                "attribute_info": attribute_info,
                "mode": mode,
            }
            if lba_weight is not None:
                self._values["lba_weight"] = lba_weight
            if remark is not None:
                self._values["remark"] = remark

        @builtins.property
        def addr(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: addr: The address value.
            '''
            result = self._values.get("addr")
            assert result is not None, "Required property 'addr' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def attribute_info(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
            '''
            :Property: attributeInfo: The attribute information of the address.
            '''
            result = self._values.get("attribute_info")
            assert result is not None, "Required property 'attribute_info' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

        @builtins.property
        def mode(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: mode: The mode of the address. Valid values: Normal, Maintenance.
            '''
            result = self._values.get("mode")
            assert result is not None, "Required property 'mode' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def lba_weight(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: lbaWeight: The weight of the address.
            '''
            result = self._values.get("lba_weight")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def remark(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: remark: The remark of the address.
            '''
            result = self._values.get("remark")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AddrProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dns.RosAddressPool.IspCityNodeProperty",
        jsii_struct_bases=[],
        name_mapping={"city_code": "cityCode", "isp_code": "ispCode"},
    )
    class IspCityNodeProperty:
        def __init__(
            self,
            *,
            city_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            isp_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param city_code: 
            :param isp_code: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d8c561b10caf093c4d09d11d6b9dcf1b05d46b0b5c02953ba9e6a48d5541ce03)
                check_type(argname="argument city_code", value=city_code, expected_type=type_hints["city_code"])
                check_type(argname="argument isp_code", value=isp_code, expected_type=type_hints["isp_code"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if city_code is not None:
                self._values["city_code"] = city_code
            if isp_code is not None:
                self._values["isp_code"] = isp_code

        @builtins.property
        def city_code(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cityCode: The city code.
            '''
            result = self._values.get("city_code")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def isp_code(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ispCode: The ISP code.
            '''
            result = self._values.get("isp_code")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IspCityNodeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.RosAddressPoolProps",
    jsii_struct_bases=[],
    name_mapping={
        "addr": "addr",
        "instance_id": "instanceId",
        "lba_strategy": "lbaStrategy",
        "name": "name",
        "type": "type",
        "evaluation_count": "evaluationCount",
        "interval": "interval",
        "isp_city_node": "ispCityNode",
        "monitor_extend_info": "monitorExtendInfo",
        "monitor_status": "monitorStatus",
        "protocol_type": "protocolType",
        "timeout": "timeout",
    },
)
class RosAddressPoolProps:
    def __init__(
        self,
        *,
        addr: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAddressPool.AddrProperty, typing.Dict[builtins.str, typing.Any]]]]],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        lba_strategy: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        evaluation_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        isp_city_node: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAddressPool.IspCityNodeProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        monitor_extend_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        monitor_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        protocol_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAddressPool``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-addresspool

        :param addr: 
        :param instance_id: 
        :param lba_strategy: 
        :param name: 
        :param type: 
        :param evaluation_count: 
        :param interval: 
        :param isp_city_node: 
        :param monitor_extend_info: 
        :param monitor_status: 
        :param protocol_type: 
        :param timeout: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__105b6495b76593ca5cdbdb4c49b175b17c30df0a904e2532ddb2f9a0f687f314)
            check_type(argname="argument addr", value=addr, expected_type=type_hints["addr"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument lba_strategy", value=lba_strategy, expected_type=type_hints["lba_strategy"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument evaluation_count", value=evaluation_count, expected_type=type_hints["evaluation_count"])
            check_type(argname="argument interval", value=interval, expected_type=type_hints["interval"])
            check_type(argname="argument isp_city_node", value=isp_city_node, expected_type=type_hints["isp_city_node"])
            check_type(argname="argument monitor_extend_info", value=monitor_extend_info, expected_type=type_hints["monitor_extend_info"])
            check_type(argname="argument monitor_status", value=monitor_status, expected_type=type_hints["monitor_status"])
            check_type(argname="argument protocol_type", value=protocol_type, expected_type=type_hints["protocol_type"])
            check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "addr": addr,
            "instance_id": instance_id,
            "lba_strategy": lba_strategy,
            "name": name,
            "type": type,
        }
        if evaluation_count is not None:
            self._values["evaluation_count"] = evaluation_count
        if interval is not None:
            self._values["interval"] = interval
        if isp_city_node is not None:
            self._values["isp_city_node"] = isp_city_node
        if monitor_extend_info is not None:
            self._values["monitor_extend_info"] = monitor_extend_info
        if monitor_status is not None:
            self._values["monitor_status"] = monitor_status
        if protocol_type is not None:
            self._values["protocol_type"] = protocol_type
        if timeout is not None:
            self._values["timeout"] = timeout

    @builtins.property
    def addr(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAddressPool.AddrProperty]]]:
        '''
        :Property: addr: The list of addresses in the address pool.
        '''
        result = self._values.get("addr")
        assert result is not None, "Required property 'addr' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAddressPool.AddrProperty]]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the GTM instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def lba_strategy(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: lbaStrategy: The load balancing strategy. Valid values: RoundRobin, Weighted, FallbackToFirst.
        '''
        result = self._values.get("lba_strategy")
        assert result is not None, "Required property 'lba_strategy' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the address pool.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: type: The type of the address pool. Valid values: Ipv4, Ipv6, Domain.
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def evaluation_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: evaluationCount: The number of times that the system waits for a response from each address before it marks the address as unhealthy.
        '''
        result = self._values.get("evaluation_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: interval: The interval between two consecutive health checks, in seconds.
        '''
        result = self._values.get("interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def isp_city_node(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAddressPool.IspCityNodeProperty]]]]:
        '''
        :Property: ispCityNode: The list of ISP city nodes.
        '''
        result = self._values.get("isp_city_node")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAddressPool.IspCityNodeProperty]]]], result)

    @builtins.property
    def monitor_extend_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: monitorExtendInfo: The extended information of the health check.
        '''
        result = self._values.get("monitor_extend_info")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def monitor_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: monitorStatus: The monitoring status of the address pool.
        '''
        result = self._values.get("monitor_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def protocol_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: protocolType: The protocol type.
        '''
        result = self._values.get("protocol_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeout: The timeout period of a health check, in seconds.
        '''
        result = self._values.get("timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAddressPoolProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCacheDomain(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.RosCacheDomain",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DNS::CacheDomain``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``CacheDomain`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-cachedomain
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCacheDomainProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca4a5d425274c6c924c31deee5ac53f4b612d3258f0dd433a299f77b4605ac3d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__069d694f947c5d9740ecebd18bbc46b6d5513870c3aa7b835b18ee083c6534b8)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainName: The domain name of the DNS cache.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="cacheTtlMax")
    def cache_ttl_max(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cacheTtlMax: The maximum TTL value for cached records.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cacheTtlMax"))

    @cache_ttl_max.setter
    def cache_ttl_max(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1aa65be6b0683a3d3f4c3d2783c6845e3fdf3414c18524ac97ae45313b8fb9bb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cacheTtlMax", value)

    @builtins.property
    @jsii.member(jsii_name="cacheTtlMin")
    def cache_ttl_min(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cacheTtlMin: The minimum TTL value for cached records.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cacheTtlMin"))

    @cache_ttl_min.setter
    def cache_ttl_min(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52b2ca13b3b84bf4adaf941dc75545b67c409022fd3da4e44e35f59a91ac8064)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cacheTtlMin", value)

    @builtins.property
    @jsii.member(jsii_name="domainName")
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: The domain name of the DNS cache domain.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domainName"))

    @domain_name.setter
    def domain_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8bfbbedced088758dd71a901104a9918eb08d83dec8415b2325ec85a6adfbd63)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9c1fe4e8066cd1d58b4a8176fe9aef27cadab777dbd76fcb3f406985533779b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The instance ID associated with the DNS cache domain.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd27562fe8bc15bab2b3eca1d74e233bdfae1c50826223f4354e42408f061255)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="sourceDnsServer")
    def source_dns_server(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCacheDomain.SourceDnsServerProperty"]]]:
        '''
        :Property: sourceDnsServer: List of source DNS servers.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCacheDomain.SourceDnsServerProperty"]]], jsii.get(self, "sourceDnsServer"))

    @source_dns_server.setter
    def source_dns_server(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCacheDomain.SourceDnsServerProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b430ede420e26c2d976148c5d49c7d9ece19e15b5a6e68315f0d822b5adf2d2e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceDnsServer", value)

    @builtins.property
    @jsii.member(jsii_name="sourceEdns")
    def source_edns(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceEdns: Whether EDNS is enabled for the source DNS server.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceEdns"))

    @source_edns.setter
    def source_edns(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__56bbe3fce0e44ada98edb8b072a1e0ad4bc6be14dc5889ce6caf6be6fba0cbea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceEdns", value)

    @builtins.property
    @jsii.member(jsii_name="sourceProtocol")
    def source_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceProtocol: The protocol used by the source DNS server.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceProtocol"))

    @source_protocol.setter
    def source_protocol(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6f236bf458dd2de5b98d814875d6e628c0a50faf23e11d72cd7bf58158c3ec6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceProtocol", value)

    @builtins.property
    @jsii.member(jsii_name="remark")
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: Remark for the DNS cache domain.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "remark"))

    @remark.setter
    def remark(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b121a84595c249f14840046821c3b809b1d52119fe507a9a77b161b811d69447)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "remark", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dns.RosCacheDomain.SourceDnsServerProperty",
        jsii_struct_bases=[],
        name_mapping={"host": "host", "port": "port"},
    )
    class SourceDnsServerProperty:
        def __init__(
            self,
            *,
            host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            port: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param host: 
            :param port: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__6e62d4fd03ae7857db54ab27c8c1cedcf29138911f43df7a8fde487fbb962010)
                check_type(argname="argument host", value=host, expected_type=type_hints["host"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "host": host,
                "port": port,
            }

        @builtins.property
        def host(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: host: Host of the source DNS server.
            '''
            result = self._values.get("host")
            assert result is not None, "Required property 'host' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: port: Port of the source DNS server.
            '''
            result = self._values.get("port")
            assert result is not None, "Required property 'port' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SourceDnsServerProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.RosCacheDomainProps",
    jsii_struct_bases=[],
    name_mapping={
        "cache_ttl_max": "cacheTtlMax",
        "cache_ttl_min": "cacheTtlMin",
        "domain_name": "domainName",
        "instance_id": "instanceId",
        "source_dns_server": "sourceDnsServer",
        "source_edns": "sourceEdns",
        "source_protocol": "sourceProtocol",
        "remark": "remark",
    },
)
class RosCacheDomainProps:
    def __init__(
        self,
        *,
        cache_ttl_max: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        cache_ttl_min: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_dns_server: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCacheDomain.SourceDnsServerProperty, typing.Dict[builtins.str, typing.Any]]]]],
        source_edns: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosCacheDomain``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-cachedomain

        :param cache_ttl_max: 
        :param cache_ttl_min: 
        :param domain_name: 
        :param instance_id: 
        :param source_dns_server: 
        :param source_edns: 
        :param source_protocol: 
        :param remark: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0fa328843336f7ac5fd715f2d3284f6860f79e060813c644d73e2ddca75effab)
            check_type(argname="argument cache_ttl_max", value=cache_ttl_max, expected_type=type_hints["cache_ttl_max"])
            check_type(argname="argument cache_ttl_min", value=cache_ttl_min, expected_type=type_hints["cache_ttl_min"])
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument source_dns_server", value=source_dns_server, expected_type=type_hints["source_dns_server"])
            check_type(argname="argument source_edns", value=source_edns, expected_type=type_hints["source_edns"])
            check_type(argname="argument source_protocol", value=source_protocol, expected_type=type_hints["source_protocol"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cache_ttl_max": cache_ttl_max,
            "cache_ttl_min": cache_ttl_min,
            "domain_name": domain_name,
            "instance_id": instance_id,
            "source_dns_server": source_dns_server,
            "source_edns": source_edns,
            "source_protocol": source_protocol,
        }
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def cache_ttl_max(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cacheTtlMax: The maximum TTL value for cached records.
        '''
        result = self._values.get("cache_ttl_max")
        assert result is not None, "Required property 'cache_ttl_max' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cache_ttl_min(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cacheTtlMin: The minimum TTL value for cached records.
        '''
        result = self._values.get("cache_ttl_min")
        assert result is not None, "Required property 'cache_ttl_min' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: The domain name of the DNS cache domain.
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The instance ID associated with the DNS cache domain.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_dns_server(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCacheDomain.SourceDnsServerProperty]]]:
        '''
        :Property: sourceDnsServer: List of source DNS servers.
        '''
        result = self._values.get("source_dns_server")
        assert result is not None, "Required property 'source_dns_server' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCacheDomain.SourceDnsServerProperty]]], result)

    @builtins.property
    def source_edns(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceEdns: Whether EDNS is enabled for the source DNS server.
        '''
        result = self._values.get("source_edns")
        assert result is not None, "Required property 'source_edns' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceProtocol: The protocol used by the source DNS server.
        '''
        result = self._values.get("source_protocol")
        assert result is not None, "Required property 'source_protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: Remark for the DNS cache domain.
        '''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCacheDomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCustomLine(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.RosCustomLine",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DNS::CustomLine``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``CustomLine`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-customline
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCustomLineProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5841f0ccdc67040a14701df8bf1b18c3d1e4d0e3c28a7803bab57631dbc4118)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ebf191d6c8c4b5c62f9973162c8242e0c5386b26f39f00762b283935bb41084b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrLineId")
    def attr_line_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LineId: The ID of the custom line.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLineId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="domainName")
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: The domain name associated with the custom line.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domainName"))

    @domain_name.setter
    def domain_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0dd83ba172ecc4f8f7d124d8b1b1c4153f08e833915802214857e1184c9ae2d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ae420b15946fec540c0bc40d04d0765b684418b8bcdc9df087e57f1671cb872)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="ipSegment")
    def ip_segment(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomLine.IpSegmentProperty"]]]:
        '''
        :Property: ipSegment: The list of IP segments for the custom line.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomLine.IpSegmentProperty"]]], jsii.get(self, "ipSegment"))

    @ip_segment.setter
    def ip_segment(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomLine.IpSegmentProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23663b8b76e7ac4de11541bd71f365c1e2e673349299355a8c8ad9f95955e3e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipSegment", value)

    @builtins.property
    @jsii.member(jsii_name="lineName")
    def line_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: lineName: The name of the custom line.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "lineName"))

    @line_name.setter
    def line_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b2369d29590b3566d611b37986d8c28c91e602166d5241bfdf75441ffdc88e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lineName", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dns.RosCustomLine.IpSegmentProperty",
        jsii_struct_bases=[],
        name_mapping={"end_ip": "endIp", "start_ip": "startIp"},
    )
    class IpSegmentProperty:
        def __init__(
            self,
            *,
            end_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            start_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param end_ip: 
            :param start_ip: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b404b9d51204c053b2c8925761984248a1776d3dea79d4474d7a2f0a340dd89f)
                check_type(argname="argument end_ip", value=end_ip, expected_type=type_hints["end_ip"])
                check_type(argname="argument start_ip", value=start_ip, expected_type=type_hints["start_ip"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if end_ip is not None:
                self._values["end_ip"] = end_ip
            if start_ip is not None:
                self._values["start_ip"] = start_ip

        @builtins.property
        def end_ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: endIp: The end IP address of the segment.
            '''
            result = self._values.get("end_ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def start_ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: startIp: The start IP address of the segment.
            '''
            result = self._values.get("start_ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IpSegmentProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.RosCustomLineProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain_name": "domainName",
        "ip_segment": "ipSegment",
        "line_name": "lineName",
    },
)
class RosCustomLineProps:
    def __init__(
        self,
        *,
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ip_segment: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomLine.IpSegmentProperty, typing.Dict[builtins.str, typing.Any]]]]],
        line_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosCustomLine``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-customline

        :param domain_name: 
        :param ip_segment: 
        :param line_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__363c56b679e2b8764d14fb29c414f7a58f1e6ac463d7e4fe114e7cd83f6f06c2)
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument ip_segment", value=ip_segment, expected_type=type_hints["ip_segment"])
            check_type(argname="argument line_name", value=line_name, expected_type=type_hints["line_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_name": domain_name,
            "ip_segment": ip_segment,
            "line_name": line_name,
        }

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: The domain name associated with the custom line.
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ip_segment(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomLine.IpSegmentProperty]]]:
        '''
        :Property: ipSegment: The list of IP segments for the custom line.
        '''
        result = self._values.get("ip_segment")
        assert result is not None, "Required property 'ip_segment' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomLine.IpSegmentProperty]]], result)

    @builtins.property
    def line_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: lineName: The name of the custom line.
        '''
        result = self._values.get("line_name")
        assert result is not None, "Required property 'line_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCustomLineProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDomain(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.RosDomain",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DNS::Domain``, which is used to add a domain name.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Domain`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domain
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDomainProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb25659fa22e8a493ed571fe3e6c0fa528be099a39778f87cde719e1137edba7)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d2a902deb0d9a87dcfc5ff63966368d4fc6e5f0f1c32d61a546aaf59783bfd91)
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
    @jsii.member(jsii_name="attrDnsServers")
    def attr_dns_servers(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DnsServers: The DNS list for the domain name under resolution
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDnsServers"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainId")
    def attr_domain_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainId: Domain ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainId"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainName: Domain name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupId: Domain name group ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupName: The name of the domain name group
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrPunyCode")
    def attr_puny_code(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PunyCode: punycode returned only for a Chinese domain name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPunyCode"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="domainName")
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: Domain name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domainName"))

    @domain_name.setter
    def domain_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__618ea2054753f9ca4a0ab05020803cf21812447252c396b3ba45bec7a44312e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e1a7981008765d63d000cae9f1d0162665ced5d86280ff1943a27063b82b43d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupId")
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupId: Domain name grouping, the default is the "default grouping" GroupId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__239348e38b328eb902903185f713bde98370366e63561583dce03203abbcf03f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupId", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b0643773e4f93b7d714c1bfd1768051ea3c21ed0e07a8c285e9873b5ed96903)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosDomain.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosDomain.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosDomain.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__558cca742078e2f16384d95652cbd5750df3d539da4c3aba79e30dbafb1902b7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dns.RosDomain.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b82adc7cf0463a84a76fcf4aa9abe0a462eb796a8c90ca17415175326e181501)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosDomainAttachment(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.RosDomainAttachment",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DNS::DomainAttachment``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DomainAttachment`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainattachment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDomainAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba674f5cbd8004f68a8484a5f8ec19f4fe9efa0a0bd46eb106d3e743808cf5bd)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5e6730f8af3660b9a7566c42b3696bc0cf55d5eb5ab2160b29c2521a8ee870e3)
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
    @jsii.member(jsii_name="domainNames")
    def domain_names(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: domainNames: The list of domain names to attach.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "domainNames"))

    @domain_names.setter
    def domain_names(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a146a2c0faa6dbf5bd124d46fe5dca5cec4047376ef0e96413f8b7a4ffeadf3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainNames", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38d4b11e5b23b185497a15c99c50779ffcb80e850cf9192165a83746e534352d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee3b8b7165616208dc26ff7a9d2902099b367bec199114b7c940d74d622896b8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.RosDomainAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={"domain_names": "domainNames", "instance_id": "instanceId"},
)
class RosDomainAttachmentProps:
    def __init__(
        self,
        *,
        domain_names: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosDomainAttachment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainattachment

        :param domain_names: 
        :param instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e1665e0189e31d8ccbd58a26521469548c2ee5ccf38f7fafedd2a9ce1e113e9)
            check_type(argname="argument domain_names", value=domain_names, expected_type=type_hints["domain_names"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_names": domain_names,
            "instance_id": instance_id,
        }

    @builtins.property
    def domain_names(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: domainNames: The list of domain names to attach.
        '''
        result = self._values.get("domain_names")
        assert result is not None, "Required property 'domain_names' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDomainGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.RosDomainGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DNS::DomainGroup``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DomainGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domaingroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDomainGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36c9c64667ef48506f14bf425f31455781aea1190115fce33af3d6b4e27733e2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__054b11b59ff90286929cfb05472515ffba8877db14a7ac6b18bbd0aeeae655e7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupId: Domain name group ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__58b52f9588b8fe7497c6f0e77e95a436d3c2cea4da9231c948a1095b057cf5e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupName: Domain name group name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__233ac99ec64f0b3e5d516110357bc6308bac4f29c8d33ce290fb1504c8e97a67)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.RosDomainGroupProps",
    jsii_struct_bases=[],
    name_mapping={"group_name": "groupName"},
)
class RosDomainGroupProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosDomainGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domaingroup

        :param group_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__99e77b4391b951fafc8dfcb5ac842433e98ffe2b146eb0ac3193e57fcbdb878a)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_name": group_name,
        }

    @builtins.property
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupName: Domain name group name
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.RosDomainProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain_name": "domainName",
        "group_id": "groupId",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class RosDomainProps:
    def __init__(
        self,
        *,
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosDomain.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosDomain``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domain

        :param domain_name: 
        :param group_id: 
        :param resource_group_id: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6437ac63b2b357896d63b81c82954f004f688e75050a21b9c46dab9ac23ab871)
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_name": domain_name,
        }
        if group_id is not None:
            self._values["group_id"] = group_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: Domain name
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupId: Domain name grouping, the default is the "default grouping" GroupId
        '''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosDomain.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosDomain.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDomainRecord(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.RosDomainRecord",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DNS::DomainRecord``, which is used to add a Domain Name System (DNS) record.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DomainRecord`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainrecord
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDomainRecordProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__206efbd760d0f7682402adad13fe4ac64f64a984f388af30c850825ce5fb736f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__339f7968e547e56e71f7954ae0b46b223ae608104c5e9f264bba41968a27188b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrRecordId")
    def attr_record_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RecordId: Parse the ID of the record
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRecordId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="domainName")
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: Domain name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domainName"))

    @domain_name.setter
    def domain_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7167352467d2f74de035d9733b82c5482c4d5baffad5f4476d1fb246d44713c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__03a60909c400b279c363196be08543381e79486f575b5f53a31e0611b65147eb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="rr")
    def rr(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :: " instead of empty
        :Property: rr: Host record, if you want to resolve
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "rr"))

    @rr.setter
    def rr(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__697dc88744c9e6d654d3ee52511a0627327844151c0a3df16bdd8b04b5dba429)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rr", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: type: Parse record type, see parsing record type format
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0b396858b0125a0896e0142c0abd1d47082d451a5924c093f76922586f32a36)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)

    @builtins.property
    @jsii.member(jsii_name="value")
    def value(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: value: Record value
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "value"))

    @value.setter
    def value(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1699df48d7e6c96cc581812e0483da645f90df7dd684a0208bd69496ce758765)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "value", value)

    @builtins.property
    @jsii.member(jsii_name="line")
    def line(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: line: Parse the line, the default is default. See parsing line enumeration
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "line"))

    @line.setter
    def line(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__adfca66ec152873ba73156ce54e3f481d53ea70b53406814071a527988656e85)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "line", value)

    @builtins.property
    @jsii.member(jsii_name="priority")
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "priority"))

    @priority.setter
    def priority(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa714ab5f921ca00a34825983ca581537b0883be12d5a693461be8e56927687e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "priority", value)

    @builtins.property
    @jsii.member(jsii_name="ttl")
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ttl"))

    @ttl.setter
    def ttl(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb01de8db985d0dfd2e50d4952ba0a38b25fafc9af4e4debbeb1b48cb0f5c7ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ttl", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.RosDomainRecordProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain_name": "domainName",
        "rr": "rr",
        "type": "type",
        "value": "value",
        "line": "line",
        "priority": "priority",
        "ttl": "ttl",
    },
)
class RosDomainRecordProps:
    def __init__(
        self,
        *,
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        line: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDomainRecord``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainrecord

        :param domain_name: 
        :param rr: 
        :param type: 
        :param value: 
        :param line: 
        :param priority: 
        :param ttl: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e4837133d8848c211a085f20e9c4ed2118c15a2b47f51c7157e854fcc00bc2b)
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument rr", value=rr, expected_type=type_hints["rr"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            check_type(argname="argument line", value=line, expected_type=type_hints["line"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument ttl", value=ttl, expected_type=type_hints["ttl"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_name": domain_name,
            "rr": rr,
            "type": type,
            "value": value,
        }
        if line is not None:
            self._values["line"] = line
        if priority is not None:
            self._values["priority"] = priority
        if ttl is not None:
            self._values["ttl"] = ttl

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: Domain name
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rr(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :: " instead of empty
        :Property: rr: Host record, if you want to resolve
        '''
        result = self._values.get("rr")
        assert result is not None, "Required property 'rr' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: type: Parse record type, see parsing record type format
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def value(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: value: Record value
        '''
        result = self._values.get("value")
        assert result is not None, "Required property 'value' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def line(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: line: Parse the line, the default is default. See parsing line enumeration
        '''
        result = self._values.get("line")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
        '''
        result = self._values.get("priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
        '''
        result = self._values.get("ttl")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainRecordProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.RosInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DNS::Instance``, which is used to create an Alibaba Cloud DNS instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-instance
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
            type_hints = typing.get_type_hints(_typecheckingstub__0208c01aee71269d08717fd2e07495db6c81d3fd0e81fcb2577b674d4f76ab04)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e0bc99d9b466d5b8afd76084839d4e622ea20704b45f0f2e37a393a31b2b9902)
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
        :Attribute: InstanceId: DNS instance id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dnsSecurity")
    def dns_security(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dnsSecurity: The DNS security policy. Valid values:

        - no: No protection against DNS attacks is provided.
        - basic: Basic protection against DNS attacks is provided.
        - advanced: Advanced protection against DNS attacks is provided.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dnsSecurity"))

    @dns_security.setter
    def dns_security(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__890f5cc813a09cccc7f9324acf07a165f88d88ef36046096e454211ae83bda8b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dnsSecurity", value)

    @builtins.property
    @jsii.member(jsii_name="domainNumbers")
    def domain_numbers(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainNumbers: The number of domain names.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domainNumbers"))

    @domain_numbers.setter
    def domain_numbers(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9a235067c6ceb5eca2ad4dde186773829a4d43f0d267b3e63fad1e81f4e41331)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainNumbers", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c2a52e2d4728f02090df5c2d1dd0ad658714dc26612ed8843aadd25b7da37ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        period: The subscription duration. Valid values:

        - If unit is month: 1, 2, 3, 6
        - If unit is year: 1, 2
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab2248b5dad3e34d843385002ca7c1c4ea6904cb1def1437182dbb387e7ca2dc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: periodUnit: The subscription duration unit.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a1b951fe1b3921616537451767ce9d06f3416de2fdf3534c73376f8fe73583f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="version")
    def version(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        version: The edition of Alibaba Cloud DNS. Valid values:
        If create hosted public zone:

        - version_personal: Personal Edition.
        - version_enterprise_basic: Enterprise Standard Edition.
        - version_enterprise_advanced: Enterprise Ultimate Edition.
        If create cached public zone:
        - version_cached_basic**Note**: Only upgrade operations are supported after instance creation.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "version"))

    @version.setter
    def version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57c95a7fbb0df7bbe5f356018c0b8b6fc9c9ce7fd9cb08ae490a6a621f0d76ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "version", value)

    @builtins.property
    @jsii.member(jsii_name="domain")
    def domain(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: domain: The domain name that you want to bind to the instance. If you want to bind multiple domain names to the instance, separate these domain names with commas (,).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "domain"))

    @domain.setter
    def domain(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24191c1875d5c11d7add62eaf5aa1000b1df695dcf43109e585526f040adab72)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domain", value)

    @builtins.property
    @jsii.member(jsii_name="instanceType")
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceType: The type of the instance. Valid values:

        - HostedPublicZone: Hosted Public Zone
        - CachedPublicZone: Cached Public Zone.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__237240c398b6975e11bb7ee5556fff5cffd7542890332ed522018d7e66660d87)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceType", value)

    @builtins.property
    @jsii.member(jsii_name="renewalStatus")
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        renewalStatus: The renewal method. Valid values:

        - AutoRenewal: The instance is automatically renewed.
        - ManualRenewal: The instance is manually renewed.
        Default value: ManualRenewal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "renewalStatus"))

    @renewal_status.setter
    def renewal_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb2b4d7a4571b770fe69d00b34a7b71bd78858efae077f5715c7706fa6452f79)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "renewalStatus", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "dns_security": "dnsSecurity",
        "domain_numbers": "domainNumbers",
        "period": "period",
        "period_unit": "periodUnit",
        "version": "version",
        "domain": "domain",
        "instance_type": "instanceType",
        "renewal_status": "renewalStatus",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        dns_security: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        domain_numbers: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        period_unit: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-instance

        :param dns_security: 
        :param domain_numbers: 
        :param period: 
        :param period_unit: 
        :param version: 
        :param domain: 
        :param instance_type: 
        :param renewal_status: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1fa09235e5ecdfb365733751a021cec9cf256babc2a686cfb2fd02a4f5f060fa)
            check_type(argname="argument dns_security", value=dns_security, expected_type=type_hints["dns_security"])
            check_type(argname="argument domain_numbers", value=domain_numbers, expected_type=type_hints["domain_numbers"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            check_type(argname="argument domain", value=domain, expected_type=type_hints["domain"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument renewal_status", value=renewal_status, expected_type=type_hints["renewal_status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "dns_security": dns_security,
            "domain_numbers": domain_numbers,
            "period": period,
            "period_unit": period_unit,
            "version": version,
        }
        if domain is not None:
            self._values["domain"] = domain
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if renewal_status is not None:
            self._values["renewal_status"] = renewal_status

    @builtins.property
    def dns_security(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dnsSecurity: The DNS security policy. Valid values:

        - no: No protection against DNS attacks is provided.
        - basic: Basic protection against DNS attacks is provided.
        - advanced: Advanced protection against DNS attacks is provided.
        '''
        result = self._values.get("dns_security")
        assert result is not None, "Required property 'dns_security' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def domain_numbers(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainNumbers: The number of domain names.
        '''
        result = self._values.get("domain_numbers")
        assert result is not None, "Required property 'domain_numbers' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        period: The subscription duration. Valid values:

        - If unit is month: 1, 2, 3, 6
        - If unit is year: 1, 2
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: periodUnit: The subscription duration unit.
        '''
        result = self._values.get("period_unit")
        assert result is not None, "Required property 'period_unit' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def version(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        version: The edition of Alibaba Cloud DNS. Valid values:
        If create hosted public zone:

        - version_personal: Personal Edition.
        - version_enterprise_basic: Enterprise Standard Edition.
        - version_enterprise_advanced: Enterprise Ultimate Edition.
        If create cached public zone:
        - version_cached_basic**Note**: Only upgrade operations are supported after instance creation.
        '''
        result = self._values.get("version")
        assert result is not None, "Required property 'version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def domain(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: domain: The domain name that you want to bind to the instance. If you want to bind multiple domain names to the instance, separate these domain names with commas (,).
        '''
        result = self._values.get("domain")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceType: The type of the instance. Valid values:

        - HostedPublicZone: Hosted Public Zone
        - CachedPublicZone: Cached Public Zone.
        '''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        renewalStatus: The renewal method. Valid values:

        - AutoRenewal: The instance is automatically renewed.
        - ManualRenewal: The instance is manually renewed.
        Default value: ManualRenewal.
        '''
        result = self._values.get("renewal_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMonitorConfig(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.RosMonitorConfig",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DNS::MonitorConfig``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``MonitorConfig`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-monitorconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMonitorConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9df1605f70c5eaa914eec0cda7612aa1e66c430718bf055a3d8d80eed528e273)
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
            type_hints = typing.get_type_hints(_typecheckingstub__de81129d9867ff7e31210f971a4188910cdf3b34060a23f6ddb62e32009a447d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrMonitorConfigId")
    def attr_monitor_config_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MonitorConfigId: The ID of the monitor config.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMonitorConfigId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="addrPoolId")
    def addr_pool_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: addrPoolId: The ID of the address pool.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "addrPoolId"))

    @addr_pool_id.setter
    def addr_pool_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f4ece0acda9b19b085d29c9cb3e59a919affad94b051e1f0348380c26a753c81)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addrPoolId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__32c8c40801670a291eebdc814f86e4dc30b108ed53265372532f5bc93a81aef2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="evaluationCount")
    def evaluation_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: evaluationCount: The evaluation count of the monitor.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "evaluationCount"))

    @evaluation_count.setter
    def evaluation_count(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce46fa3ca75fe783c26995eabeece9f5ed3f94976ec914da0f9f1dd3872ed9d1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "evaluationCount", value)

    @builtins.property
    @jsii.member(jsii_name="interval")
    def interval(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: interval: The interval of the monitor.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "interval"))

    @interval.setter
    def interval(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be2a0fea8a6dea042561df67f26f146922f7e9daabd20ee223f64aef8942912e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "interval", value)

    @builtins.property
    @jsii.member(jsii_name="ispCityNode")
    def isp_city_node(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMonitorConfig.IspCityNodeProperty"]]]:
        '''
        :Property: ispCityNode: The ISP city node list.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMonitorConfig.IspCityNodeProperty"]]], jsii.get(self, "ispCityNode"))

    @isp_city_node.setter
    def isp_city_node(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMonitorConfig.IspCityNodeProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd0bd966c208acbf437e859896a095dbed9cfde674295e47bb0db9fb170a1b6d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ispCityNode", value)

    @builtins.property
    @jsii.member(jsii_name="monitorExtendInfo")
    def monitor_extend_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: monitorExtendInfo: The extend info of the monitor.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "monitorExtendInfo"))

    @monitor_extend_info.setter
    def monitor_extend_info(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72be3fee2a6493abf3dfb22d2891480bd0abfdfad41318186717d367cd39b2ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "monitorExtendInfo", value)

    @builtins.property
    @jsii.member(jsii_name="protocolType")
    def protocol_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: protocolType: The protocol type of the monitor.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "protocolType"))

    @protocol_type.setter
    def protocol_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9acb744a8bb2daae71620972986878bc222d8efffa52019b10450667cb1d1c7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocolType", value)

    @builtins.property
    @jsii.member(jsii_name="timeout")
    def timeout(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: timeout: The timeout of the monitor.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "timeout"))

    @timeout.setter
    def timeout(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5025ba136c61b107f285933e65742728b941bf646abc33dd8d510537b53e449e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeout", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dns.RosMonitorConfig.IspCityNodeProperty",
        jsii_struct_bases=[],
        name_mapping={"city_code": "cityCode", "isp_code": "ispCode"},
    )
    class IspCityNodeProperty:
        def __init__(
            self,
            *,
            city_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            isp_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param city_code: 
            :param isp_code: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5b65a6b0fcb592f84954fe87e317ffa6415c928ca3a455adc963abc4ea4be8e9)
                check_type(argname="argument city_code", value=city_code, expected_type=type_hints["city_code"])
                check_type(argname="argument isp_code", value=isp_code, expected_type=type_hints["isp_code"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if city_code is not None:
                self._values["city_code"] = city_code
            if isp_code is not None:
                self._values["isp_code"] = isp_code

        @builtins.property
        def city_code(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cityCode: The city code of the ISP city node.
            '''
            result = self._values.get("city_code")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def isp_code(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ispCode: The ISP code of the ISP city node.
            '''
            result = self._values.get("isp_code")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IspCityNodeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.RosMonitorConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "addr_pool_id": "addrPoolId",
        "evaluation_count": "evaluationCount",
        "interval": "interval",
        "isp_city_node": "ispCityNode",
        "monitor_extend_info": "monitorExtendInfo",
        "protocol_type": "protocolType",
        "timeout": "timeout",
    },
)
class RosMonitorConfigProps:
    def __init__(
        self,
        *,
        addr_pool_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        evaluation_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        interval: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        isp_city_node: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMonitorConfig.IspCityNodeProperty, typing.Dict[builtins.str, typing.Any]]]]],
        monitor_extend_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        protocol_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        timeout: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosMonitorConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-monitorconfig

        :param addr_pool_id: 
        :param evaluation_count: 
        :param interval: 
        :param isp_city_node: 
        :param monitor_extend_info: 
        :param protocol_type: 
        :param timeout: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50265fc443332b1397371716a1d05aa04ae8564b4c3ff870d9497dedf314a6e8)
            check_type(argname="argument addr_pool_id", value=addr_pool_id, expected_type=type_hints["addr_pool_id"])
            check_type(argname="argument evaluation_count", value=evaluation_count, expected_type=type_hints["evaluation_count"])
            check_type(argname="argument interval", value=interval, expected_type=type_hints["interval"])
            check_type(argname="argument isp_city_node", value=isp_city_node, expected_type=type_hints["isp_city_node"])
            check_type(argname="argument monitor_extend_info", value=monitor_extend_info, expected_type=type_hints["monitor_extend_info"])
            check_type(argname="argument protocol_type", value=protocol_type, expected_type=type_hints["protocol_type"])
            check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "addr_pool_id": addr_pool_id,
            "evaluation_count": evaluation_count,
            "interval": interval,
            "isp_city_node": isp_city_node,
            "monitor_extend_info": monitor_extend_info,
            "protocol_type": protocol_type,
            "timeout": timeout,
        }

    @builtins.property
    def addr_pool_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: addrPoolId: The ID of the address pool.
        '''
        result = self._values.get("addr_pool_id")
        assert result is not None, "Required property 'addr_pool_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def evaluation_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: evaluationCount: The evaluation count of the monitor.
        '''
        result = self._values.get("evaluation_count")
        assert result is not None, "Required property 'evaluation_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def interval(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: interval: The interval of the monitor.
        '''
        result = self._values.get("interval")
        assert result is not None, "Required property 'interval' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def isp_city_node(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMonitorConfig.IspCityNodeProperty]]]:
        '''
        :Property: ispCityNode: The ISP city node list.
        '''
        result = self._values.get("isp_city_node")
        assert result is not None, "Required property 'isp_city_node' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMonitorConfig.IspCityNodeProperty]]], result)

    @builtins.property
    def monitor_extend_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: monitorExtendInfo: The extend info of the monitor.
        '''
        result = self._values.get("monitor_extend_info")
        assert result is not None, "Required property 'monitor_extend_info' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def protocol_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: protocolType: The protocol type of the monitor.
        '''
        result = self._values.get("protocol_type")
        assert result is not None, "Required property 'protocol_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def timeout(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: timeout: The timeout of the monitor.
        '''
        result = self._values.get("timeout")
        assert result is not None, "Required property 'timeout' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMonitorConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRecoveryPlan(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.RosRecoveryPlan",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DNS::RecoveryPlan``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``RecoveryPlan`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-recoveryplan
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRecoveryPlanProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23d01cd042107ac46a18cdb1bfcd15186c04a51cde3d4e3fe3d04d813ce6be50)
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
            type_hints = typing.get_type_hints(_typecheckingstub__13a077ba32beff0cec03439d82c30645712a35d7becefa54a1a69a9b596bbd2f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrRecoveryPlanId")
    def attr_recovery_plan_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RecoveryPlanId: The ID of the recovery plan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRecoveryPlanId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__5e694373d427d57ff0158be27375f7faebcc8f9a434c3436bad7ce84f48ccf19)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="faultAddrPool")
    def fault_addr_pool(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: faultAddrPool: The fault address pool of the recovery plan. The value must be encoded in UTF-8.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "faultAddrPool"))

    @fault_addr_pool.setter
    def fault_addr_pool(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__188e2c624f470c049d04d22dbb7ff63484430ce677ca238281d34e47e65ceca6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "faultAddrPool", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the recovery plan. The value can be up to 128 bytes in length. The value must be encoded in UTF-8.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c88fe27482958eca945ade384f41afc46583df577803c68218ccc0145a812c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="lang")
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: lang: The language of the request.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "lang"))

    @lang.setter
    def lang(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5b412c45156301b60dd33b94059ec9f27f90f661b239d472abd079312344975)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lang", value)

    @builtins.property
    @jsii.member(jsii_name="remark")
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: The remark of the recovery plan. The value can be up to 256 bytes in length. The value must be encoded in UTF-8.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "remark"))

    @remark.setter
    def remark(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__63ec36e16753d4ce50da25bc2ef8a70fdb11e8f636e072a1a0e2b3dc46de63d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "remark", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.RosRecoveryPlanProps",
    jsii_struct_bases=[],
    name_mapping={
        "fault_addr_pool": "faultAddrPool",
        "name": "name",
        "lang": "lang",
        "remark": "remark",
    },
)
class RosRecoveryPlanProps:
    def __init__(
        self,
        *,
        fault_addr_pool: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosRecoveryPlan``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-recoveryplan

        :param fault_addr_pool: 
        :param name: 
        :param lang: 
        :param remark: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__93a5caef3418e27354db44c6205db0f820422cc93f2c755b40ea33de09b082fc)
            check_type(argname="argument fault_addr_pool", value=fault_addr_pool, expected_type=type_hints["fault_addr_pool"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument lang", value=lang, expected_type=type_hints["lang"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "fault_addr_pool": fault_addr_pool,
            "name": name,
        }
        if lang is not None:
            self._values["lang"] = lang
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def fault_addr_pool(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: faultAddrPool: The fault address pool of the recovery plan. The value must be encoded in UTF-8.
        '''
        result = self._values.get("fault_addr_pool")
        assert result is not None, "Required property 'fault_addr_pool' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the recovery plan. The value can be up to 128 bytes in length. The value must be encoded in UTF-8.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: lang: The language of the request.
        '''
        result = self._values.get("lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: The remark of the recovery plan. The value can be up to 256 bytes in length. The value must be encoded in UTF-8.
        '''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRecoveryPlanProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IAccessStrategy)
class AccessStrategy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.AccessStrategy",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DNS::AccessStrategy``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAccessStrategy``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-accessstrategy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AccessStrategyProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f70a51c96b1f61c4c8fc1034902a1def9a109f1d08c4226fae032c214746a938)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrStrategyId")
    def attr_strategy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StrategyId: The ID of the access strategy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStrategyId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccessStrategyProps:
        return typing.cast(AccessStrategyProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ed0a98a3c15f8d0775b4811b3af020f949f5970a6be40d45d21b687acb8834e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24eb22bec0ff80a3a5f6ce618be6b7ca7ae535e398e49096ad0b37e4c22c55e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89f35e0834c7475568a8b3337362f39ea219e226bce56be2062900888ca35ca9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IAddressPool)
class AddressPool(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.AddressPool",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DNS::AddressPool``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAddressPool``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-addresspool
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AddressPoolProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d499010c978f5a5635f581ffd7686ec45433cbd40508d5e8ad21b3150a51524)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAddrPoolId")
    def attr_addr_pool_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AddrPoolId: The ID of the address pool.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAddrPoolId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AddressPoolProps:
        return typing.cast(AddressPoolProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7487a277e2e6c560d83c43f5844ef4581151bf2fd0c74d2c4b98254064b5f603)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f438c018936736807b1c84c57ad9af8f29ddc5881c96949fd1c99446878c95f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4075572948bf3ed82904ef8bfc83bb99141d4f65c55931d48042c55bb2ca618)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(ICacheDomain)
class CacheDomain(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.CacheDomain",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DNS::CacheDomain``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCacheDomain``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-cachedomain
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[CacheDomainProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__208f3a85f6c984efb3b093256beb72255d893bffda554158aaa83500e105a74e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: The domain name of the DNS cache.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CacheDomainProps:
        return typing.cast(CacheDomainProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ac898ad990e7f61ccea7f388282432ac098ea2017a3a9ea94323cb3308f7e1f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__baa22db9c1e0fcd322923863edd4da2b4bd9c547911dc7dd8f2dd6b433977250)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b94e7229edc2d45600ac9d6a6c6f6cf5652714620a0918e7435e292646b9ab4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(ICustomLine)
class CustomLine(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.CustomLine",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DNS::CustomLine``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCustomLine``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-customline
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[CustomLineProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b8c5ab883e113c2e478f483303873ce15fffe9eca2d55d65595680e87010f12)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrLineId")
    def attr_line_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LineId: The ID of the custom line.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLineId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CustomLineProps:
        return typing.cast(CustomLineProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1424b8963425f9f12c4419012ac307e12c4bc6473e7fc2e3fb934ea42fc9f1c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5a60a1d15395ee964343d2c893eaee1cf28e131eef4c302c41c8f20fab2715a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a9809409b13b78f9322ebd1ce55a020a4ad78f8cbfaaaa9e1a103a9a193ba7b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDomain)
class Domain(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.Domain",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DNS::Domain``, which is used to add a domain name.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDomain``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domain
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DomainProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68675ca91cacc3d03ca6f4f05fcb6d32d86e1aaf939975d10d9ac4aea4c34771)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrDnsServers")
    def attr_dns_servers(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DnsServers: The DNS list for the domain name under resolution.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDnsServers"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainId")
    def attr_domain_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainId: Domain ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainId"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: Domain name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupId: Domain name group ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: The name of the domain name group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrPunyCode")
    def attr_puny_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PunyCode: punycode returned only for a Chinese domain name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPunyCode"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainProps:
        return typing.cast(DomainProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__167fd44bb6824dd605bf4dbefb609eb979d0de597fc5fb77cbb9192ddd4de7d9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82c2363692e855e443d30e5d805493adb327b0881b8cabc189a31c9c38173745)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5fadf45b3186ede5071cfaa92b5032e72c41e3ff5dd3c28b597fad8ecc4b9c7d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDomainAttachment)
class DomainAttachment(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.DomainAttachment",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DNS::DomainAttachment``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDomainAttachment``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainattachment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DomainAttachmentProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f91ff2fe97ba7968954fd96bee7d83dedf19cc802d411c38b4f542ba55b7b16)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainAttachmentProps:
        return typing.cast(DomainAttachmentProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b8d0d39cc6501a8ab1569e1f3bb70ac63f431dc6d2fd9de37bf85aca46ac0021)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc84b95b1a138567bd1e7b1ec18e6e8720d97629583069b709b6d90b0e53f6cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52d889cdeb96f8fcbac79f2319733322752083902c59b42b783f066672590a0b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDomainGroup)
class DomainGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.DomainGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DNS::DomainGroup``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDomainGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domaingroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DomainGroupProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc0634a5d8e5d02667b094b6d23b0f4ad91c9eaea2036e25ef1e91da037fed88)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupId: Domain name group ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainGroupProps:
        return typing.cast(DomainGroupProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8c709c5b451f1ae263880ceaa07d935981b7cea7067b44d60380a5780fd11a0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__206cb1a2bae7db897ebd92ba6741ee73703e80254e1054db03c550fd762bddd9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c36716ea3aa32178ba64852b39724eca54596fa60249c2faffb7bddc4116383f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDomainRecord)
class DomainRecord(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.DomainRecord",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DNS::DomainRecord``, which is used to add a Domain Name System (DNS) record.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDomainRecord``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainrecord
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DomainRecordProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff85cf6f434336025c41e85270626eb795aec726d497686f68628d4382606550)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrRecordId")
    def attr_record_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RecordId: Parse the ID of the record.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRecordId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainRecordProps:
        return typing.cast(DomainRecordProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d5fd820d1fa21acdd1b7e96b8e3b61511ce5289dd3ea4aa7635b982710cc014)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6291eae60d2f5c87a5ef1f4df17492e60f5a92289e0d8ec690c352b34a5f6b9b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a57c341aa9f74c0b2bce31ba243259ae182f946a2bb88bf8c44a02402918c6c4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "AccessStrategy",
    "AccessStrategyProps",
    "AddressPool",
    "AddressPoolProps",
    "CacheDomain",
    "CacheDomainProps",
    "CustomLine",
    "CustomLineProps",
    "Domain",
    "DomainAttachment",
    "DomainAttachmentProps",
    "DomainGroup",
    "DomainGroupProps",
    "DomainProps",
    "DomainRecord",
    "DomainRecordProps",
    "IAccessStrategy",
    "IAddressPool",
    "ICacheDomain",
    "ICustomLine",
    "IDomain",
    "IDomainAttachment",
    "IDomainGroup",
    "IDomainRecord",
    "IInstance",
    "IMonitorConfig",
    "IRecoveryPlan",
    "Instance",
    "InstanceProps",
    "MonitorConfig",
    "MonitorConfigProps",
    "RecoveryPlan",
    "RecoveryPlanProps",
    "RosAccessStrategy",
    "RosAccessStrategyProps",
    "RosAddressPool",
    "RosAddressPoolProps",
    "RosCacheDomain",
    "RosCacheDomainProps",
    "RosCustomLine",
    "RosCustomLineProps",
    "RosDomain",
    "RosDomainAttachment",
    "RosDomainAttachmentProps",
    "RosDomainGroup",
    "RosDomainGroupProps",
    "RosDomainProps",
    "RosDomainRecord",
    "RosDomainRecordProps",
    "RosInstance",
    "RosInstanceProps",
    "RosMonitorConfig",
    "RosMonitorConfigProps",
    "RosRecoveryPlan",
    "RosRecoveryPlanProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__bfd7c69a76953f996f046befc00b8ec59eb7c4855ecbcc47e877a5056518502a(
    *,
    default_addr_pool: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAccessStrategy.DefaultAddrPoolProperty, typing.Dict[builtins.str, typing.Any]]]]],
    default_addr_pool_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    default_min_available_addr_num: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    strategy_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    strategy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    access_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    default_latency_optimization: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    default_lba_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    default_max_return_addr_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    failover_addr_pool: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAccessStrategy.FailoverAddrPoolProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    failover_addr_pool_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    failover_latency_optimization: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    failover_lba_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    failover_max_return_addr_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    failover_min_available_addr_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lines: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca91c4700a8776c6d73551402307fc4dc1b493dcbad14b973ceedc46ffc7faa0(
    *,
    addr: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAddressPool.AddrProperty, typing.Dict[builtins.str, typing.Any]]]]],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    lba_strategy: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    evaluation_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    isp_city_node: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAddressPool.IspCityNodeProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    monitor_extend_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    monitor_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protocol_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36b8358721fe937e83b4ac1866be101067a83160a3c9e2a0dd971f29b444340c(
    *,
    cache_ttl_max: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    cache_ttl_min: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_dns_server: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCacheDomain.SourceDnsServerProperty, typing.Dict[builtins.str, typing.Any]]]]],
    source_edns: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__880aa6e12c68a0b3a8f32a56285f189db5a7d20a78d8c00c0e5756cac824d778(
    *,
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ip_segment: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomLine.IpSegmentProperty, typing.Dict[builtins.str, typing.Any]]]]],
    line_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dec7582a65349c714d3c46bf88e26980843b43bcdb4d363fe334be08b0340c64(
    *,
    domain_names: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__870e7dce3a2c27425fac2ea0724cd35e4ea4acb14a4d25bd0595e75d676a18d4(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54144fb86336ae6a2a3b61141b78184b3058b63a7638c776d4bed058fb28eedd(
    *,
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDomain.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7bbc2719a168ec2f8c950e1f545a604d25f38b321d07897ff2b71b20ffc833fa(
    *,
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    line: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33e15550113a92d6d3e6098456a214d174ad3a53fcc8c9e52977cd245eae044d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__654994675929b971ca5ffaa883bd7d9de1d55f9f97db84d40665ad842e394d70(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8bfdecdcd1d5bab13d433dcc61edc4c99bba5ab351e9e329a8eb631273673d9(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4902032cf7f526aaf6e1c366b451fe57dba3457c04d16ab882cff5ff58edcc1(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba95997c0729dd10f964ab726668df3a13eb424c3c4b96783b94711c40bd2d72(
    *,
    dns_security: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    domain_numbers: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    period_unit: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a03b279dde500477a7a3091f49784e384a8271bdf8b19adc7ebc6546c2973d03(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[MonitorConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__605ff6d07ed077e4cb358525543e31b8e54075386bd148a2d66038dc544a8b8a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2e9a5531d5b54d592342249eaa89707ac4126d36a1ee3dfb1799ce59d4fb1a5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2b8042942255178e28dc78653d43d7671e6c61ebcc606e267887c197e3d7207(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c563c947dac0bcb1fe0f023d7803ae2555032460adecacc4dfa7e1fa5766ebc9(
    *,
    addr_pool_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    evaluation_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    interval: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    isp_city_node: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMonitorConfig.IspCityNodeProperty, typing.Dict[builtins.str, typing.Any]]]]],
    monitor_extend_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    protocol_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    timeout: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d130b65e65b6feee2e2fbe4a6193fb078f700480034d45cf7c187e2898348ec5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RecoveryPlanProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46201b4e91b697499c0ed247de72c10c5ae3af6b1d3bdc2c7311c6d5dae8a65e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b001f9a4556b5e388e406a4e074149d879f200d60bdbe1b4de6345e8b19b682(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__271db616d792f6269b749f6bc96d8ccd26c37ecff762101fe94bdb14a349be10(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5771ad668f63be30c1bbbebd1881263aabc2b32d760655cbefe68a6828c6df8(
    *,
    fault_addr_pool: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__500317eae4cc66c387de18fe72c15b3a2b61e32f2935c1dbab690ad18f1cc138(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccessStrategyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e61e6552b9eed1e03c881edf28f1a0064154a223aa2c94fb9dc0f3d016269213(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__367ab01bf4ccf3618b9811d5a5473b36604c4d7f0797ffb3055813139b59dfa6(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAccessStrategy.DefaultAddrPoolProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__634d7f670bb6487aaf09ecf63430b73470bcec2da0811634e671c00acfba9c92(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb32112d6af6c089818bef290c239aec68633e91c6cf12fb7eacc0516c2923ee(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab10d453efdb09753d072d9aa29b06eb3348a35e4278c961db443420b38f2299(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b2986fde1b3d9e8321ab16ee2e924f75dc4889194812c44e047a12432faf972(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4648283aa6bbbdb2df256cfb7377e4d293fcde9c87533a1cfb001274bdd440e3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__412860cb60db6825a295dec1f56ab1a914e064929bc0c6d02c5b6e0153c037b1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d23094b58a15ed92f0f8c8dd87ef6da699a42c600129cda48afacaa07f1faef(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__725a638446eb2eabc020b49508b8923cf0d71aa2baff50b4dffa98d943315538(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__943f8cc48cf6aa5985e7b5bee16f19cf4f65550c76e0d94ea9c04294b1391f7c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3502dbe3612502d42396b5714f527fb376c0621e34bb9bf29bb4293d07b4b4d5(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59c9c54c69aaf2cd98bb0a782394371ed09831f952fbf098be5cc7b2bc6a2856(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAccessStrategy.FailoverAddrPoolProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__697472cfab40ded6cd89e2720788b07dc79ffed4df4c0d64de82f9a692d7243e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__050ca042b55058e56ac160f0c104ad2aa7be6b94237e28f81a44801d7f4db88c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab5312d023a0987f71ac0e126ea9bd2eff6f60741a02e28ece0daa466b5c94fa(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82c9110deffe31cd6f79e0aa736ef7a42e3ee9c3e8648e2ee7e3b70a9d002aa6(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd6a3047e61f2a465cef66ff416c64eefb7207946c889bdf12f6f35be564f360(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__16c0596989f1b164abb3dba0227c5c9be6293ff5102ecc2131f59ea6c8a48203(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3fa8a0f3a8029924705313c3f6b3d98d156429bd84fc2f0bf00cfa4b5eba445(
    *,
    identity: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lba_weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__afd8e1de3a80146ec062fe6ed0635f9e741c5bb2dee40b8c2c636f89f7010e08(
    *,
    identity: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lba_weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ff453f01156a86508f5b68b40baf480cc049d550ed3e197ffa606d86f7fb495(
    *,
    default_addr_pool: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAccessStrategy.DefaultAddrPoolProperty, typing.Dict[builtins.str, typing.Any]]]]],
    default_addr_pool_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    default_min_available_addr_num: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    strategy_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    strategy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    access_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    default_latency_optimization: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    default_lba_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    default_max_return_addr_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    failover_addr_pool: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAccessStrategy.FailoverAddrPoolProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    failover_addr_pool_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    failover_latency_optimization: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    failover_lba_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    failover_max_return_addr_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    failover_min_available_addr_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lines: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54e226dc644795e78329ea6a772c42a56976b557d225bce8a590b568a5c41ee8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAddressPoolProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3cc7d12ee3261c4b7ca9de652a99a74f1fd77d2b58255056fb931450c57a580c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00eb211c4a74c1e0e76127adeb2bc8226143696eec23dd46486e2418fc991a84(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAddressPool.AddrProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9056a0322b3ca998ff0708d90227ce5e4e554b8b00790ef797663205fa26783d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__156c29d1adbc1134724035824a6cf2696cd049aff2cebad970dd0df85b5fb73f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cf8b0b6594ace68a3d4e455a33f3245544c1149e2a9039e31adf750625f2d95b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c79ebd0767e3505c795f0be688fb40f3b066e5cca7827f36fe41b1bded9f47c1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd3fcb9dc3c5d6f31fd85743db4e1e7c54414325d0fa6268c32535f89ad37c71(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d31f40ead33f2d458c2b8c3bee6fa91747e09f9fe6cd839ea9d5c8a6e48a00c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f5eddb22935619e0bd05a84547eeffb03b67848c590ee7cb98f8ff148738a77(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11fae5ad5df8e71e3dccf687148c76763086f8d69d0a9289b999fc523d0b6fe0(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAddressPool.IspCityNodeProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fee9431b024e7c72bbdead88830bc40cdb0546f16c6ccf1d3fa72b972ffb96df(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0503ce5a079cf763f14e8238ceaff1cc0084f11f92dfb8a828a19739e17500a2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea9b16e240116480949681c9ca1841d478f407d8f1aef774db9cce41f2f855e3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74a3f9324772d15406f8f3cd589954b0c4d8bb4e05120bbb22136446697010b7(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74d5f2075cd17013dd1e04d0d5877220aee372bda39ac9b8a26408f2dc54fc5a(
    *,
    addr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    attribute_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    lba_weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8c561b10caf093c4d09d11d6b9dcf1b05d46b0b5c02953ba9e6a48d5541ce03(
    *,
    city_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    isp_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__105b6495b76593ca5cdbdb4c49b175b17c30df0a904e2532ddb2f9a0f687f314(
    *,
    addr: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAddressPool.AddrProperty, typing.Dict[builtins.str, typing.Any]]]]],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    lba_strategy: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    evaluation_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    isp_city_node: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAddressPool.IspCityNodeProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    monitor_extend_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    monitor_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protocol_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca4a5d425274c6c924c31deee5ac53f4b612d3258f0dd433a299f77b4605ac3d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCacheDomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__069d694f947c5d9740ecebd18bbc46b6d5513870c3aa7b835b18ee083c6534b8(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1aa65be6b0683a3d3f4c3d2783c6845e3fdf3414c18524ac97ae45313b8fb9bb(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52b2ca13b3b84bf4adaf941dc75545b67c409022fd3da4e44e35f59a91ac8064(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8bfbbedced088758dd71a901104a9918eb08d83dec8415b2325ec85a6adfbd63(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9c1fe4e8066cd1d58b4a8176fe9aef27cadab777dbd76fcb3f406985533779b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd27562fe8bc15bab2b3eca1d74e233bdfae1c50826223f4354e42408f061255(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b430ede420e26c2d976148c5d49c7d9ece19e15b5a6e68315f0d822b5adf2d2e(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCacheDomain.SourceDnsServerProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56bbe3fce0e44ada98edb8b072a1e0ad4bc6be14dc5889ce6caf6be6fba0cbea(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6f236bf458dd2de5b98d814875d6e628c0a50faf23e11d72cd7bf58158c3ec6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b121a84595c249f14840046821c3b809b1d52119fe507a9a77b161b811d69447(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e62d4fd03ae7857db54ab27c8c1cedcf29138911f43df7a8fde487fbb962010(
    *,
    host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    port: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0fa328843336f7ac5fd715f2d3284f6860f79e060813c644d73e2ddca75effab(
    *,
    cache_ttl_max: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    cache_ttl_min: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_dns_server: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCacheDomain.SourceDnsServerProperty, typing.Dict[builtins.str, typing.Any]]]]],
    source_edns: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5841f0ccdc67040a14701df8bf1b18c3d1e4d0e3c28a7803bab57631dbc4118(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCustomLineProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ebf191d6c8c4b5c62f9973162c8242e0c5386b26f39f00762b283935bb41084b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0dd83ba172ecc4f8f7d124d8b1b1c4153f08e833915802214857e1184c9ae2d3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ae420b15946fec540c0bc40d04d0765b684418b8bcdc9df087e57f1671cb872(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23663b8b76e7ac4de11541bd71f365c1e2e673349299355a8c8ad9f95955e3e8(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomLine.IpSegmentProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b2369d29590b3566d611b37986d8c28c91e602166d5241bfdf75441ffdc88e2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b404b9d51204c053b2c8925761984248a1776d3dea79d4474d7a2f0a340dd89f(
    *,
    end_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    start_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__363c56b679e2b8764d14fb29c414f7a58f1e6ac463d7e4fe114e7cd83f6f06c2(
    *,
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ip_segment: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomLine.IpSegmentProperty, typing.Dict[builtins.str, typing.Any]]]]],
    line_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb25659fa22e8a493ed571fe3e6c0fa528be099a39778f87cde719e1137edba7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2a902deb0d9a87dcfc5ff63966368d4fc6e5f0f1c32d61a546aaf59783bfd91(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__618ea2054753f9ca4a0ab05020803cf21812447252c396b3ba45bec7a44312e8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e1a7981008765d63d000cae9f1d0162665ced5d86280ff1943a27063b82b43d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__239348e38b328eb902903185f713bde98370366e63561583dce03203abbcf03f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b0643773e4f93b7d714c1bfd1768051ea3c21ed0e07a8c285e9873b5ed96903(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__558cca742078e2f16384d95652cbd5750df3d539da4c3aba79e30dbafb1902b7(
    value: typing.Optional[typing.List[RosDomain.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b82adc7cf0463a84a76fcf4aa9abe0a462eb796a8c90ca17415175326e181501(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba674f5cbd8004f68a8484a5f8ec19f4fe9efa0a0bd46eb106d3e743808cf5bd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDomainAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e6730f8af3660b9a7566c42b3696bc0cf55d5eb5ab2160b29c2521a8ee870e3(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a146a2c0faa6dbf5bd124d46fe5dca5cec4047376ef0e96413f8b7a4ffeadf3(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38d4b11e5b23b185497a15c99c50779ffcb80e850cf9192165a83746e534352d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee3b8b7165616208dc26ff7a9d2902099b367bec199114b7c940d74d622896b8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e1665e0189e31d8ccbd58a26521469548c2ee5ccf38f7fafedd2a9ce1e113e9(
    *,
    domain_names: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36c9c64667ef48506f14bf425f31455781aea1190115fce33af3d6b4e27733e2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDomainGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__054b11b59ff90286929cfb05472515ffba8877db14a7ac6b18bbd0aeeae655e7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__58b52f9588b8fe7497c6f0e77e95a436d3c2cea4da9231c948a1095b057cf5e3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__233ac99ec64f0b3e5d516110357bc6308bac4f29c8d33ce290fb1504c8e97a67(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99e77b4391b951fafc8dfcb5ac842433e98ffe2b146eb0ac3193e57fcbdb878a(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6437ac63b2b357896d63b81c82954f004f688e75050a21b9c46dab9ac23ab871(
    *,
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDomain.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__206efbd760d0f7682402adad13fe4ac64f64a984f388af30c850825ce5fb736f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDomainRecordProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__339f7968e547e56e71f7954ae0b46b223ae608104c5e9f264bba41968a27188b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7167352467d2f74de035d9733b82c5482c4d5baffad5f4476d1fb246d44713c5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03a60909c400b279c363196be08543381e79486f575b5f53a31e0611b65147eb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__697dc88744c9e6d654d3ee52511a0627327844151c0a3df16bdd8b04b5dba429(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0b396858b0125a0896e0142c0abd1d47082d451a5924c093f76922586f32a36(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1699df48d7e6c96cc581812e0483da645f90df7dd684a0208bd69496ce758765(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__adfca66ec152873ba73156ce54e3f481d53ea70b53406814071a527988656e85(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa714ab5f921ca00a34825983ca581537b0883be12d5a693461be8e56927687e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb01de8db985d0dfd2e50d4952ba0a38b25fafc9af4e4debbeb1b48cb0f5c7ec(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e4837133d8848c211a085f20e9c4ed2118c15a2b47f51c7157e854fcc00bc2b(
    *,
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    line: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0208c01aee71269d08717fd2e07495db6c81d3fd0e81fcb2577b674d4f76ab04(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0bc99d9b466d5b8afd76084839d4e622ea20704b45f0f2e37a393a31b2b9902(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__890f5cc813a09cccc7f9324acf07a165f88d88ef36046096e454211ae83bda8b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a235067c6ceb5eca2ad4dde186773829a4d43f0d267b3e63fad1e81f4e41331(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c2a52e2d4728f02090df5c2d1dd0ad658714dc26612ed8843aadd25b7da37ca(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab2248b5dad3e34d843385002ca7c1c4ea6904cb1def1437182dbb387e7ca2dc(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1b951fe1b3921616537451767ce9d06f3416de2fdf3534c73376f8fe73583f4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57c95a7fbb0df7bbe5f356018c0b8b6fc9c9ce7fd9cb08ae490a6a621f0d76ec(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24191c1875d5c11d7add62eaf5aa1000b1df695dcf43109e585526f040adab72(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__237240c398b6975e11bb7ee5556fff5cffd7542890332ed522018d7e66660d87(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb2b4d7a4571b770fe69d00b34a7b71bd78858efae077f5715c7706fa6452f79(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fa09235e5ecdfb365733751a021cec9cf256babc2a686cfb2fd02a4f5f060fa(
    *,
    dns_security: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    domain_numbers: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    period_unit: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9df1605f70c5eaa914eec0cda7612aa1e66c430718bf055a3d8d80eed528e273(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMonitorConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de81129d9867ff7e31210f971a4188910cdf3b34060a23f6ddb62e32009a447d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4ece0acda9b19b085d29c9cb3e59a919affad94b051e1f0348380c26a753c81(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__32c8c40801670a291eebdc814f86e4dc30b108ed53265372532f5bc93a81aef2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce46fa3ca75fe783c26995eabeece9f5ed3f94976ec914da0f9f1dd3872ed9d1(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be2a0fea8a6dea042561df67f26f146922f7e9daabd20ee223f64aef8942912e(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd0bd966c208acbf437e859896a095dbed9cfde674295e47bb0db9fb170a1b6d(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMonitorConfig.IspCityNodeProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72be3fee2a6493abf3dfb22d2891480bd0abfdfad41318186717d367cd39b2ec(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9acb744a8bb2daae71620972986878bc222d8efffa52019b10450667cb1d1c7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5025ba136c61b107f285933e65742728b941bf646abc33dd8d510537b53e449e(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b65a6b0fcb592f84954fe87e317ffa6415c928ca3a455adc963abc4ea4be8e9(
    *,
    city_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    isp_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50265fc443332b1397371716a1d05aa04ae8564b4c3ff870d9497dedf314a6e8(
    *,
    addr_pool_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    evaluation_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    interval: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    isp_city_node: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMonitorConfig.IspCityNodeProperty, typing.Dict[builtins.str, typing.Any]]]]],
    monitor_extend_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    protocol_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    timeout: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23d01cd042107ac46a18cdb1bfcd15186c04a51cde3d4e3fe3d04d813ce6be50(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRecoveryPlanProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13a077ba32beff0cec03439d82c30645712a35d7becefa54a1a69a9b596bbd2f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e694373d427d57ff0158be27375f7faebcc8f9a434c3436bad7ce84f48ccf19(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__188e2c624f470c049d04d22dbb7ff63484430ce677ca238281d34e47e65ceca6(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c88fe27482958eca945ade384f41afc46583df577803c68218ccc0145a812c5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5b412c45156301b60dd33b94059ec9f27f90f661b239d472abd079312344975(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63ec36e16753d4ce50da25bc2ef8a70fdb11e8f636e072a1a0e2b3dc46de63d4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__93a5caef3418e27354db44c6205db0f820422cc93f2c755b40ea33de09b082fc(
    *,
    fault_addr_pool: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f70a51c96b1f61c4c8fc1034902a1def9a109f1d08c4226fae032c214746a938(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccessStrategyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ed0a98a3c15f8d0775b4811b3af020f949f5970a6be40d45d21b687acb8834e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24eb22bec0ff80a3a5f6ce618be6b7ca7ae535e398e49096ad0b37e4c22c55e2(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89f35e0834c7475568a8b3337362f39ea219e226bce56be2062900888ca35ca9(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d499010c978f5a5635f581ffd7686ec45433cbd40508d5e8ad21b3150a51524(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AddressPoolProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7487a277e2e6c560d83c43f5844ef4581151bf2fd0c74d2c4b98254064b5f603(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f438c018936736807b1c84c57ad9af8f29ddc5881c96949fd1c99446878c95f(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4075572948bf3ed82904ef8bfc83bb99141d4f65c55931d48042c55bb2ca618(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__208f3a85f6c984efb3b093256beb72255d893bffda554158aaa83500e105a74e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CacheDomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ac898ad990e7f61ccea7f388282432ac098ea2017a3a9ea94323cb3308f7e1f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__baa22db9c1e0fcd322923863edd4da2b4bd9c547911dc7dd8f2dd6b433977250(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b94e7229edc2d45600ac9d6a6c6f6cf5652714620a0918e7435e292646b9ab4(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b8c5ab883e113c2e478f483303873ce15fffe9eca2d55d65595680e87010f12(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CustomLineProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1424b8963425f9f12c4419012ac307e12c4bc6473e7fc2e3fb934ea42fc9f1c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5a60a1d15395ee964343d2c893eaee1cf28e131eef4c302c41c8f20fab2715a(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a9809409b13b78f9322ebd1ce55a020a4ad78f8cbfaaaa9e1a103a9a193ba7b(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__68675ca91cacc3d03ca6f4f05fcb6d32d86e1aaf939975d10d9ac4aea4c34771(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__167fd44bb6824dd605bf4dbefb609eb979d0de597fc5fb77cbb9192ddd4de7d9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82c2363692e855e443d30e5d805493adb327b0881b8cabc189a31c9c38173745(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5fadf45b3186ede5071cfaa92b5032e72c41e3ff5dd3c28b597fad8ecc4b9c7d(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f91ff2fe97ba7968954fd96bee7d83dedf19cc802d411c38b4f542ba55b7b16(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DomainAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8d0d39cc6501a8ab1569e1f3bb70ac63f431dc6d2fd9de37bf85aca46ac0021(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc84b95b1a138567bd1e7b1ec18e6e8720d97629583069b709b6d90b0e53f6cd(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52d889cdeb96f8fcbac79f2319733322752083902c59b42b783f066672590a0b(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc0634a5d8e5d02667b094b6d23b0f4ad91c9eaea2036e25ef1e91da037fed88(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DomainGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8c709c5b451f1ae263880ceaa07d935981b7cea7067b44d60380a5780fd11a0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__206cb1a2bae7db897ebd92ba6741ee73703e80254e1054db03c550fd762bddd9(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c36716ea3aa32178ba64852b39724eca54596fa60249c2faffb7bddc4116383f(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff85cf6f434336025c41e85270626eb795aec726d497686f68628d4382606550(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DomainRecordProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d5fd820d1fa21acdd1b7e96b8e3b61511ce5289dd3ea4aa7635b982710cc014(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6291eae60d2f5c87a5ef1f4df17492e60f5a92289e0d8ec690c352b34a5f6b9b(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a57c341aa9f74c0b2bce31ba243259ae182f946a2bb88bf8c44a02402918c6c4(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
