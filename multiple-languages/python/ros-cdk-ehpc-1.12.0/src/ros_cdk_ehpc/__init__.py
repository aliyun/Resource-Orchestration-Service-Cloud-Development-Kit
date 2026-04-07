'''
## Aliyun ROS EHPC Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as EHPC from '@alicloud/ros-cdk-ehpc';
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
    jsii_type="@alicloud/ros-cdk-ehpc.AutoScaleConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "enable_auto_grow": "enableAutoGrow",
        "enable_auto_shrink": "enableAutoShrink",
        "exclude_nodes": "excludeNodes",
        "extra_nodes_grow_ratio": "extraNodesGrowRatio",
        "grow_interval_in_minutes": "growIntervalInMinutes",
        "grow_ratio": "growRatio",
        "grow_timeout_in_minutes": "growTimeoutInMinutes",
        "image_id": "imageId",
        "max_nodes_in_cluster": "maxNodesInCluster",
        "queues": "queues",
        "shrink_idle_times": "shrinkIdleTimes",
        "shrink_interval_in_minutes": "shrinkIntervalInMinutes",
        "spot_price_limit": "spotPriceLimit",
        "spot_strategy": "spotStrategy",
    },
)
class AutoScaleConfigProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        enable_auto_grow: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_auto_shrink: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        exclude_nodes: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        extra_nodes_grow_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        grow_interval_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        grow_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        grow_timeout_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_nodes_in_cluster: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        queues: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAutoScaleConfig.QueuesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        shrink_idle_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        shrink_interval_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``AutoScaleConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-autoscaleconfig

        :param cluster_id: Property clusterId: Cluster ID.
        :param enable_auto_grow: Property enableAutoGrow: Specifies whether to enable auto scale-out. Valid values: true: enables auto scale-out. false: disables auto scale-out Default value: false
        :param enable_auto_shrink: Property enableAutoShrink: Specifies whether to enable auto scale-in. Valid values: true: enables auto scale-in. false: disables auto scale-in Default value: false
        :param exclude_nodes: Property excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes. Separate multiple compute nodes with commas (,). If you want to retain a compute node, you can set the node as an exceptional node. Then, the node is not released if it is idle.
        :param extra_nodes_grow_ratio: Property extraNodesGrowRatio: The percentage of extra compute nodes. Default value: 0
        :param grow_interval_in_minutes: Property growIntervalInMinutes: The interval between two consecutive rounds of scale-out. Unit: minutes. Default value: 2
        :param grow_ratio: Property growRatio: The percentage of each round of scale-out. Default value: 100
        :param grow_timeout_in_minutes: Property growTimeoutInMinutes: The scale-out timeout period. Unit: minutes. Default value: 20
        :param image_id: Property imageId: The ID of the image. If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails. If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect. If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
        :param max_nodes_in_cluster: Property maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster. Default value: 100
        :param queues: Property queues:.
        :param shrink_idle_times: Property shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check. Default value: 3
        :param shrink_interval_in_minutes: Property shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in. Unit: minutes. Default value: 2
        :param spot_price_limit: Property spotPriceLimit: The maximum hourly price of the compute nodes. The value can be accurate to three decimal places. The parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
        :param spot_strategy: Property spotStrategy: The preemption policy of the compute nodes. Valid values: NoSpot: The compute nodes are pay-as-you-go instances. SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price. SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price. Default value: NoSpot
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__196d52035879bf00b7184dea87eeacd9bfe3bfa64e309819dc860bccc220f2d9)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument enable_auto_grow", value=enable_auto_grow, expected_type=type_hints["enable_auto_grow"])
            check_type(argname="argument enable_auto_shrink", value=enable_auto_shrink, expected_type=type_hints["enable_auto_shrink"])
            check_type(argname="argument exclude_nodes", value=exclude_nodes, expected_type=type_hints["exclude_nodes"])
            check_type(argname="argument extra_nodes_grow_ratio", value=extra_nodes_grow_ratio, expected_type=type_hints["extra_nodes_grow_ratio"])
            check_type(argname="argument grow_interval_in_minutes", value=grow_interval_in_minutes, expected_type=type_hints["grow_interval_in_minutes"])
            check_type(argname="argument grow_ratio", value=grow_ratio, expected_type=type_hints["grow_ratio"])
            check_type(argname="argument grow_timeout_in_minutes", value=grow_timeout_in_minutes, expected_type=type_hints["grow_timeout_in_minutes"])
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument max_nodes_in_cluster", value=max_nodes_in_cluster, expected_type=type_hints["max_nodes_in_cluster"])
            check_type(argname="argument queues", value=queues, expected_type=type_hints["queues"])
            check_type(argname="argument shrink_idle_times", value=shrink_idle_times, expected_type=type_hints["shrink_idle_times"])
            check_type(argname="argument shrink_interval_in_minutes", value=shrink_interval_in_minutes, expected_type=type_hints["shrink_interval_in_minutes"])
            check_type(argname="argument spot_price_limit", value=spot_price_limit, expected_type=type_hints["spot_price_limit"])
            check_type(argname="argument spot_strategy", value=spot_strategy, expected_type=type_hints["spot_strategy"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
        }
        if enable_auto_grow is not None:
            self._values["enable_auto_grow"] = enable_auto_grow
        if enable_auto_shrink is not None:
            self._values["enable_auto_shrink"] = enable_auto_shrink
        if exclude_nodes is not None:
            self._values["exclude_nodes"] = exclude_nodes
        if extra_nodes_grow_ratio is not None:
            self._values["extra_nodes_grow_ratio"] = extra_nodes_grow_ratio
        if grow_interval_in_minutes is not None:
            self._values["grow_interval_in_minutes"] = grow_interval_in_minutes
        if grow_ratio is not None:
            self._values["grow_ratio"] = grow_ratio
        if grow_timeout_in_minutes is not None:
            self._values["grow_timeout_in_minutes"] = grow_timeout_in_minutes
        if image_id is not None:
            self._values["image_id"] = image_id
        if max_nodes_in_cluster is not None:
            self._values["max_nodes_in_cluster"] = max_nodes_in_cluster
        if queues is not None:
            self._values["queues"] = queues
        if shrink_idle_times is not None:
            self._values["shrink_idle_times"] = shrink_idle_times
        if shrink_interval_in_minutes is not None:
            self._values["shrink_interval_in_minutes"] = shrink_interval_in_minutes
        if spot_price_limit is not None:
            self._values["spot_price_limit"] = spot_price_limit
        if spot_strategy is not None:
            self._values["spot_strategy"] = spot_strategy

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterId: Cluster ID.'''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def enable_auto_grow(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableAutoGrow: Specifies whether to enable auto scale-out.

        Valid values:
        true: enables auto scale-out.
        false: disables auto scale-out
        Default value: false
        '''
        result = self._values.get("enable_auto_grow")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_auto_shrink(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableAutoShrink: Specifies whether to enable auto scale-in.

        Valid values:
        true: enables auto scale-in.
        false: disables auto scale-in
        Default value: false
        '''
        result = self._values.get("enable_auto_shrink")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def exclude_nodes(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes.

        Separate multiple compute nodes with commas (,). If you want to retain a compute node, you can set the node as an exceptional node. Then, the node is not released if it is idle.
        '''
        result = self._values.get("exclude_nodes")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def extra_nodes_grow_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property extraNodesGrowRatio: The percentage of extra compute nodes.

        Default value: 0
        '''
        result = self._values.get("extra_nodes_grow_ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def grow_interval_in_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property growIntervalInMinutes: The interval between two consecutive rounds of scale-out.

        Unit: minutes.
        Default value: 2
        '''
        result = self._values.get("grow_interval_in_minutes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def grow_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property growRatio: The percentage of each round of scale-out.

        Default value: 100
        '''
        result = self._values.get("grow_ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def grow_timeout_in_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property growTimeoutInMinutes: The scale-out timeout period.

        Unit: minutes.
        Default value: 20
        '''
        result = self._values.get("grow_timeout_in_minutes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageId: The ID of the image.

        If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
        If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
        If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
        '''
        result = self._values.get("image_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_nodes_in_cluster(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster.

        Default value: 100
        '''
        result = self._values.get("max_nodes_in_cluster")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def queues(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAutoScaleConfig.QueuesProperty"]]]]:
        '''Property queues:.'''
        result = self._values.get("queues")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAutoScaleConfig.QueuesProperty"]]]], result)

    @builtins.property
    def shrink_idle_times(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check.

        Default value: 3
        '''
        result = self._values.get("shrink_idle_times")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def shrink_interval_in_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in.

        Unit: minutes.
        Default value: 2
        '''
        result = self._values.get("shrink_interval_in_minutes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spot_price_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property spotPriceLimit: The maximum hourly price of the compute nodes.

        The value can be accurate to three decimal places. The parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
        '''
        result = self._values.get("spot_price_limit")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property spotStrategy: The preemption policy of the compute nodes.

        Valid values:
        NoSpot: The compute nodes are pay-as-you-go instances.
        SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
        SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
        Default value: NoSpot
        '''
        result = self._values.get("spot_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AutoScaleConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ehpc.ClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "ecs_order_compute_count": "ecsOrderComputeCount",
        "ecs_order_compute_instance_type": "ecsOrderComputeInstanceType",
        "ecs_order_login_count": "ecsOrderLoginCount",
        "ecs_order_login_instance_type": "ecsOrderLoginInstanceType",
        "ecs_order_manager_instance_type": "ecsOrderManagerInstanceType",
        "name": "name",
        "v_switch_id": "vSwitchId",
        "account_type": "accountType",
        "additional_volumes": "additionalVolumes",
        "application": "application",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "client_version": "clientVersion",
        "compute_enable_ht": "computeEnableHt",
        "compute_spot_price_limit": "computeSpotPriceLimit",
        "compute_spot_strategy": "computeSpotStrategy",
        "deploy_mode": "deployMode",
        "description": "description",
        "ecs_charge_type": "ecsChargeType",
        "ecs_order_manager_count": "ecsOrderManagerCount",
        "ehpc_version": "ehpcVersion",
        "ha_enable": "haEnable",
        "image_id": "imageId",
        "image_owner_alias": "imageOwnerAlias",
        "input_file_url": "inputFileUrl",
        "is_compute_ess": "isComputeEss",
        "job_queue": "jobQueue",
        "key_pair_name": "keyPairName",
        "network_interface_traffic_mode": "networkInterfaceTrafficMode",
        "os_tag": "osTag",
        "password": "password",
        "period": "period",
        "period_unit": "periodUnit",
        "post_install_script": "postInstallScript",
        "ram_node_types": "ramNodeTypes",
        "ram_role_name": "ramRoleName",
        "remote_directory": "remoteDirectory",
        "remote_vis_enable": "remoteVisEnable",
        "resource_group_id": "resourceGroupId",
        "scc_cluster_id": "sccClusterId",
        "scheduler_type": "schedulerType",
        "security_group_id": "securityGroupId",
        "security_group_name": "securityGroupName",
        "system_disk_level": "systemDiskLevel",
        "system_disk_size": "systemDiskSize",
        "system_disk_type": "systemDiskType",
        "volume_id": "volumeId",
        "volume_mountpoint": "volumeMountpoint",
        "volume_protocol": "volumeProtocol",
        "volume_type": "volumeType",
        "vpc_id": "vpcId",
        "without_elastic_ip": "withoutElasticIp",
        "zone_id": "zoneId",
    },
)
class ClusterProps:
    def __init__(
        self,
        *,
        ecs_order_compute_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ecs_order_compute_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ecs_order_login_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ecs_order_login_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ecs_order_manager_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        additional_volumes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster.AdditionalVolumesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        application: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster.ApplicationProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        client_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        compute_enable_ht: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        compute_spot_price_limit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        compute_spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deploy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_order_manager_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ehpc_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ha_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_owner_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        input_file_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_compute_ess: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        job_queue: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        network_interface_traffic_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        os_tag: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        post_install_script: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster.PostInstallScriptProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ram_node_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ram_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        remote_directory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        remote_vis_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scc_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scheduler_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        volume_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        volume_mountpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        volume_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        volume_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        without_elastic_ip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Cluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-cluster

        :param ecs_order_compute_count: Property ecsOrderComputeCount: Computing node number, which ranges from: 0-99.
        :param ecs_order_compute_instance_type: Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.
        :param ecs_order_login_count: Property ecsOrderLoginCount: Login node number can only be 1.
        :param ecs_order_login_instance_type: Property ecsOrderLoginInstanceType: Log cluster node instance specifications.
        :param ecs_order_manager_instance_type: Property ecsOrderManagerInstanceType: Cluster control node instance specifications.
        :param name: Property name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
        :param v_switch_id: Property vSwitchId: VPC in switch ID. Products currently only supports VPC network.
        :param account_type: Property accountType: The service type of the domain account. Valid values: nis ldap Default value: nis
        :param additional_volumes: Property additionalVolumes:.
        :param application: Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
        :param auto_renew: Property autoRenew: true: automatic renewals; false: no automatic renewals.
        :param auto_renew_period: Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
        :param client_version: Property clientVersion: The version of the E-HPC client. By default, the parameter is set to the latest version number. You can call the ListCurrentClientVersion operation to query the current version of the E-HPC client.
        :param compute_enable_ht: Property computeEnableHt: Specifies whether the compute nodes support hyper-threading. Valid values: true: Hyper-threading is supported. false: Hyper-threading is not supported. Default value: true
        :param compute_spot_price_limit: Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
        :param compute_spot_strategy: Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo.
        :param deploy_mode: Property deployMode: The mode in which the cluster is deployed. Valid values: Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed. Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed. Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed. Default value: Standard
        :param description: Property description: Cluster description, 2 to 128 characters.
        :param ecs_charge_type: Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
        :param ecs_order_manager_count: Property ecsOrderManagerCount: Control node number can be 1, 2.
        :param ehpc_version: Property ehpcVersion: The version of E-HPC. By default, the parameter is set to the latest version number.
        :param ha_enable: Property haEnable: Specifies whether to enable the high availability feature. Valid values: true: enables the high availability feature false: disables the high availability feature Default value: false Note If high availability is enabled, primary management nodes and secondary management nodes are used.
        :param image_id: Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag; if self, others, or marketplace, ImageId is mandatory.
        :param image_owner_alias: Property imageOwnerAlias: Mirror type: system, self, others or marketplace.
        :param input_file_url: Property inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.
        :param is_compute_ess: Property isComputeEss: Specifies whether to enable auto scaling. Valid values: true: enables auto scaling false: disables auto scaling Default value: false
        :param job_queue: Property jobQueue: The queue to which the compute nodes are added.
        :param key_pair_name: Property keyPairName: Key pair name.
        :param network_interface_traffic_mode: Property networkInterfaceTrafficMode: Communication mode of an elastic NIC. Value values: - **Standard**: The TCP communication mode is used. - **HighPerformance**: Enables the Elastic RDMA Interface (ERI) and uses the RDMA communication mode.
        :param os_tag: Property osTag: Operating system image tag. You can call ListImages API to query.
        :param password: Property password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
        :param period: Property period: The purchase of long resources, units: week / month / year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
        :param period_unit: Property periodUnit: The purchase of long-resources unit. Alternatively value Week / Month / year.
        :param post_install_script: Property postInstallScript:.
        :param ram_node_types: Property ramNodeTypes: When authorizing instance configuration, the node type to which the RAM role is bound. When the value of DeployMode is Standard, the value range: scheduler, account, login, compute. When the value of DeployMode is Simple, the value range: manager, login, compute. When the value of DeployMode is Tiny, the value range: manager, compute.
        :param ram_role_name: Property ramRoleName: The name of the Resource Access Management (RAM) role. You can call the ListRoles operation provided by RAM to query the created RAM roles.
        :param remote_directory: Property remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
        :param remote_vis_enable: Property remoteVisEnable: Specifies whether to enable Virtual Network Computing (VNC). Valid values: true: enables VNC false: disables VNC Default value: false
        :param resource_group_id: Property resourceGroupId: The ID of the resource group. You can call the ListResourceGroups operation to obtain the ID of the resource group.
        :param scc_cluster_id: Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
        :param scheduler_type: Property schedulerType: The type of the scheduler. Valid values: pbs slurm opengridscheduler deadline Default value: pbs
        :param security_group_id: Property securityGroupId: Security group ID.
        :param security_group_name: Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. Format Requirements Reference ECS security group name.
        :param system_disk_level: Property systemDiskLevel: The performance level of the ESSD that is created as the system disk. Valid values: PL0: A single ESSD can deliver up to 10,000 input/output operations per second (IOPS) of random read/write. PL1: A single ESSD can deliver up to 50,000 IOPS of random read/write. PL2: A single ESSD can deliver up to 100,000 IOPS of random read/write. PL3: A single ESSD can deliver up to 1,000,000 IOPS of random read/write. Default value: PL1
        :param system_disk_size: Property systemDiskSize: The size of the system disk. Unit: GB Valid values: 40 to 500 Default value: 40
        :param system_disk_type: Property systemDiskType: The type of the system disk. Valid values: cloud_efficiency: ultra disk. cloud_ssd: SSD. cloud_essd: ESSD. Default value: cloud_ssd
        :param volume_id: Property volumeId: The ID of the file system. If you leave the parameter empty, a Performance NAS file system is created by default.
        :param volume_mountpoint: Property volumeMountpoint: The mount target of the file system. Take note of the following information: If you do not specify the VolumeId parameter, you can leave the VolumeMountpoint parameter empty. A mount target is created by default. If you specify the VolumeId parameter, the VolumeMountpoint parameter is required.
        :param volume_protocol: Property volumeProtocol: The type of the protocol that is used by the file system. Valid values: nfs smb Default value: nfs
        :param volume_type: Property volumeType: The type of the shared storage. Only Apsara File Storage nas file systems are supported.
        :param vpc_id: Property vpcId: The ID of the virtual private cloud (VPC) to which the E-HPC cluster belongs.
        :param without_elastic_ip: Property withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP). Default value: false
        :param zone_id: Property zoneId: Available area ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__45e193143351251319a5627dd2ae3499075d631305c83a432861b0b284235a34)
            check_type(argname="argument ecs_order_compute_count", value=ecs_order_compute_count, expected_type=type_hints["ecs_order_compute_count"])
            check_type(argname="argument ecs_order_compute_instance_type", value=ecs_order_compute_instance_type, expected_type=type_hints["ecs_order_compute_instance_type"])
            check_type(argname="argument ecs_order_login_count", value=ecs_order_login_count, expected_type=type_hints["ecs_order_login_count"])
            check_type(argname="argument ecs_order_login_instance_type", value=ecs_order_login_instance_type, expected_type=type_hints["ecs_order_login_instance_type"])
            check_type(argname="argument ecs_order_manager_instance_type", value=ecs_order_manager_instance_type, expected_type=type_hints["ecs_order_manager_instance_type"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument account_type", value=account_type, expected_type=type_hints["account_type"])
            check_type(argname="argument additional_volumes", value=additional_volumes, expected_type=type_hints["additional_volumes"])
            check_type(argname="argument application", value=application, expected_type=type_hints["application"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument client_version", value=client_version, expected_type=type_hints["client_version"])
            check_type(argname="argument compute_enable_ht", value=compute_enable_ht, expected_type=type_hints["compute_enable_ht"])
            check_type(argname="argument compute_spot_price_limit", value=compute_spot_price_limit, expected_type=type_hints["compute_spot_price_limit"])
            check_type(argname="argument compute_spot_strategy", value=compute_spot_strategy, expected_type=type_hints["compute_spot_strategy"])
            check_type(argname="argument deploy_mode", value=deploy_mode, expected_type=type_hints["deploy_mode"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument ecs_charge_type", value=ecs_charge_type, expected_type=type_hints["ecs_charge_type"])
            check_type(argname="argument ecs_order_manager_count", value=ecs_order_manager_count, expected_type=type_hints["ecs_order_manager_count"])
            check_type(argname="argument ehpc_version", value=ehpc_version, expected_type=type_hints["ehpc_version"])
            check_type(argname="argument ha_enable", value=ha_enable, expected_type=type_hints["ha_enable"])
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument image_owner_alias", value=image_owner_alias, expected_type=type_hints["image_owner_alias"])
            check_type(argname="argument input_file_url", value=input_file_url, expected_type=type_hints["input_file_url"])
            check_type(argname="argument is_compute_ess", value=is_compute_ess, expected_type=type_hints["is_compute_ess"])
            check_type(argname="argument job_queue", value=job_queue, expected_type=type_hints["job_queue"])
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
            check_type(argname="argument network_interface_traffic_mode", value=network_interface_traffic_mode, expected_type=type_hints["network_interface_traffic_mode"])
            check_type(argname="argument os_tag", value=os_tag, expected_type=type_hints["os_tag"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument post_install_script", value=post_install_script, expected_type=type_hints["post_install_script"])
            check_type(argname="argument ram_node_types", value=ram_node_types, expected_type=type_hints["ram_node_types"])
            check_type(argname="argument ram_role_name", value=ram_role_name, expected_type=type_hints["ram_role_name"])
            check_type(argname="argument remote_directory", value=remote_directory, expected_type=type_hints["remote_directory"])
            check_type(argname="argument remote_vis_enable", value=remote_vis_enable, expected_type=type_hints["remote_vis_enable"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument scc_cluster_id", value=scc_cluster_id, expected_type=type_hints["scc_cluster_id"])
            check_type(argname="argument scheduler_type", value=scheduler_type, expected_type=type_hints["scheduler_type"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument security_group_name", value=security_group_name, expected_type=type_hints["security_group_name"])
            check_type(argname="argument system_disk_level", value=system_disk_level, expected_type=type_hints["system_disk_level"])
            check_type(argname="argument system_disk_size", value=system_disk_size, expected_type=type_hints["system_disk_size"])
            check_type(argname="argument system_disk_type", value=system_disk_type, expected_type=type_hints["system_disk_type"])
            check_type(argname="argument volume_id", value=volume_id, expected_type=type_hints["volume_id"])
            check_type(argname="argument volume_mountpoint", value=volume_mountpoint, expected_type=type_hints["volume_mountpoint"])
            check_type(argname="argument volume_protocol", value=volume_protocol, expected_type=type_hints["volume_protocol"])
            check_type(argname="argument volume_type", value=volume_type, expected_type=type_hints["volume_type"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument without_elastic_ip", value=without_elastic_ip, expected_type=type_hints["without_elastic_ip"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ecs_order_compute_count": ecs_order_compute_count,
            "ecs_order_compute_instance_type": ecs_order_compute_instance_type,
            "ecs_order_login_count": ecs_order_login_count,
            "ecs_order_login_instance_type": ecs_order_login_instance_type,
            "ecs_order_manager_instance_type": ecs_order_manager_instance_type,
            "name": name,
            "v_switch_id": v_switch_id,
        }
        if account_type is not None:
            self._values["account_type"] = account_type
        if additional_volumes is not None:
            self._values["additional_volumes"] = additional_volumes
        if application is not None:
            self._values["application"] = application
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if client_version is not None:
            self._values["client_version"] = client_version
        if compute_enable_ht is not None:
            self._values["compute_enable_ht"] = compute_enable_ht
        if compute_spot_price_limit is not None:
            self._values["compute_spot_price_limit"] = compute_spot_price_limit
        if compute_spot_strategy is not None:
            self._values["compute_spot_strategy"] = compute_spot_strategy
        if deploy_mode is not None:
            self._values["deploy_mode"] = deploy_mode
        if description is not None:
            self._values["description"] = description
        if ecs_charge_type is not None:
            self._values["ecs_charge_type"] = ecs_charge_type
        if ecs_order_manager_count is not None:
            self._values["ecs_order_manager_count"] = ecs_order_manager_count
        if ehpc_version is not None:
            self._values["ehpc_version"] = ehpc_version
        if ha_enable is not None:
            self._values["ha_enable"] = ha_enable
        if image_id is not None:
            self._values["image_id"] = image_id
        if image_owner_alias is not None:
            self._values["image_owner_alias"] = image_owner_alias
        if input_file_url is not None:
            self._values["input_file_url"] = input_file_url
        if is_compute_ess is not None:
            self._values["is_compute_ess"] = is_compute_ess
        if job_queue is not None:
            self._values["job_queue"] = job_queue
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name
        if network_interface_traffic_mode is not None:
            self._values["network_interface_traffic_mode"] = network_interface_traffic_mode
        if os_tag is not None:
            self._values["os_tag"] = os_tag
        if password is not None:
            self._values["password"] = password
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if post_install_script is not None:
            self._values["post_install_script"] = post_install_script
        if ram_node_types is not None:
            self._values["ram_node_types"] = ram_node_types
        if ram_role_name is not None:
            self._values["ram_role_name"] = ram_role_name
        if remote_directory is not None:
            self._values["remote_directory"] = remote_directory
        if remote_vis_enable is not None:
            self._values["remote_vis_enable"] = remote_vis_enable
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if scc_cluster_id is not None:
            self._values["scc_cluster_id"] = scc_cluster_id
        if scheduler_type is not None:
            self._values["scheduler_type"] = scheduler_type
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if security_group_name is not None:
            self._values["security_group_name"] = security_group_name
        if system_disk_level is not None:
            self._values["system_disk_level"] = system_disk_level
        if system_disk_size is not None:
            self._values["system_disk_size"] = system_disk_size
        if system_disk_type is not None:
            self._values["system_disk_type"] = system_disk_type
        if volume_id is not None:
            self._values["volume_id"] = volume_id
        if volume_mountpoint is not None:
            self._values["volume_mountpoint"] = volume_mountpoint
        if volume_protocol is not None:
            self._values["volume_protocol"] = volume_protocol
        if volume_type is not None:
            self._values["volume_type"] = volume_type
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if without_elastic_ip is not None:
            self._values["without_elastic_ip"] = without_elastic_ip
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def ecs_order_compute_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ecsOrderComputeCount: Computing node number, which ranges from: 0-99.'''
        result = self._values.get("ecs_order_compute_count")
        assert result is not None, "Required property 'ecs_order_compute_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ecs_order_compute_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.'''
        result = self._values.get("ecs_order_compute_instance_type")
        assert result is not None, "Required property 'ecs_order_compute_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ecs_order_login_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ecsOrderLoginCount: Login node number can only be 1.'''
        result = self._values.get("ecs_order_login_count")
        assert result is not None, "Required property 'ecs_order_login_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ecs_order_login_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ecsOrderLoginInstanceType: Log cluster node instance specifications.'''
        result = self._values.get("ecs_order_login_instance_type")
        assert result is not None, "Required property 'ecs_order_login_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ecs_order_manager_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ecsOrderManagerInstanceType: Cluster control node instance specifications.'''
        result = self._values.get("ecs_order_manager_instance_type")
        assert result is not None, "Required property 'ecs_order_manager_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: Cluster name.

        2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: VPC in switch ID.

        Products currently only supports VPC network.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountType: The service type of the domain account.

        Valid values:
        nis
        ldap
        Default value: nis
        '''
        result = self._values.get("account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def additional_volumes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.AdditionalVolumesProperty"]]]]:
        '''Property additionalVolumes:.'''
        result = self._values.get("additional_volumes")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.AdditionalVolumesProperty"]]]], result)

    @builtins.property
    def application(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.ApplicationProperty"]]]]:
        '''Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.'''
        result = self._values.get("application")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.ApplicationProperty"]]]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: true: automatic renewals;

        false: no automatic renewals.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.'''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def client_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clientVersion: The version of the E-HPC client.

        By default, the parameter is set to the latest version number.
        You can call the ListCurrentClientVersion operation to query the current version of the E-HPC client.
        '''
        result = self._values.get("client_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def compute_enable_ht(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property computeEnableHt: Specifies whether the compute nodes support hyper-threading.

        Valid values:
        true: Hyper-threading is supported.
        false: Hyper-threading is not supported.
        Default value: true
        '''
        result = self._values.get("compute_enable_ht")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def compute_spot_price_limit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.'''
        result = self._values.get("compute_spot_price_limit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def compute_spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo.'''
        result = self._values.get("compute_spot_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deploy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deployMode: The mode in which the cluster is deployed.

        Valid values:
        Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
        Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed.
        Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed.
        Default value: Standard
        '''
        result = self._values.get("deploy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Cluster description, 2 to 128 characters.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.'''
        result = self._values.get("ecs_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_order_manager_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ecsOrderManagerCount: Control node number can be 1, 2.'''
        result = self._values.get("ecs_order_manager_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ehpc_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ehpcVersion: The version of E-HPC.

        By default, the parameter is set to the latest version number.
        '''
        result = self._values.get("ehpc_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ha_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property haEnable: Specifies whether to enable the high availability feature.

        Valid values:
        true: enables the high availability feature
        false: disables the high availability feature
        Default value: false
        Note If high availability is enabled, primary management nodes and secondary management nodes are used.
        '''
        result = self._values.get("ha_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag;

        if self, others, or marketplace, ImageId is mandatory.
        '''
        result = self._values.get("image_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_owner_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageOwnerAlias: Mirror type: system, self, others or marketplace.'''
        result = self._values.get("image_owner_alias")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def input_file_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.'''
        result = self._values.get("input_file_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_compute_ess(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isComputeEss: Specifies whether to enable auto scaling.

        Valid values:
        true: enables auto scaling
        false: disables auto scaling
        Default value: false
        '''
        result = self._values.get("is_compute_ess")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def job_queue(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property jobQueue: 	The queue to which the compute nodes are added.'''
        result = self._values.get("job_queue")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keyPairName: Key pair name.'''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def network_interface_traffic_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property networkInterfaceTrafficMode: Communication mode of an elastic NIC.

        Value values:

        - **Standard**: The TCP communication mode is used.
        - **HighPerformance**: Enables the Elastic RDMA Interface (ERI) and uses the RDMA communication mode.
        '''
        result = self._values.get("network_interface_traffic_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def os_tag(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property osTag: Operating system image tag.

        You can call ListImages API to query.
        '''
        result = self._values.get("os_tag")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property password: Root password of jump server (login node).

        8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
        '''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The purchase of long resources, units: week / month / year.

        When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: The purchase of long-resources unit.

        Alternatively value Week / Month / year.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def post_install_script(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.PostInstallScriptProperty"]]]]:
        '''Property postInstallScript:.'''
        result = self._values.get("post_install_script")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.PostInstallScriptProperty"]]]], result)

    @builtins.property
    def ram_node_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property ramNodeTypes: When authorizing instance configuration, the node type to which the RAM role is bound.

        When the value of DeployMode is Standard, the value range: scheduler, account, login, compute.
        When the value of DeployMode is Simple, the value range: manager, login, compute.
        When the value of DeployMode is Tiny, the value range: manager, compute.
        '''
        result = self._values.get("ram_node_types")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def ram_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ramRoleName: The name of the Resource Access Management (RAM) role.

        You can call the ListRoles operation provided by RAM to query the created RAM roles.
        '''
        result = self._values.get("ram_role_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def remote_directory(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property remoteDirectory: Mount shared storage remote directory.

        The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
        '''
        result = self._values.get("remote_directory")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def remote_vis_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property remoteVisEnable: Specifies whether to enable Virtual Network Computing (VNC).

        Valid values:
        true: enables VNC
        false: disables VNC
        Default value: false
        '''
        result = self._values.get("remote_vis_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.

        You can call the ListResourceGroups operation to obtain the ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scc_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.'''
        result = self._values.get("scc_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scheduler_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property schedulerType: The type of the scheduler.

        Valid values:
        pbs
        slurm
        opengridscheduler
        deadline
        Default value: pbs
        '''
        result = self._values.get("scheduler_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupId: Security group ID.'''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy.

        Format Requirements Reference ECS security group name.
        '''
        result = self._values.get("security_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property systemDiskLevel: The performance level of the ESSD that is created as the system disk.

        Valid values:
        PL0: A single ESSD can deliver up to 10,000 input/output operations per second (IOPS) of random read/write.
        PL1: A single ESSD can deliver up to 50,000 IOPS of random read/write.
        PL2: A single ESSD can deliver up to 100,000 IOPS of random read/write.
        PL3: A single ESSD can deliver up to 1,000,000 IOPS of random read/write.
        Default value: PL1
        '''
        result = self._values.get("system_disk_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property systemDiskSize: The size of the system disk.

        Unit: GB
        Valid values: 40 to 500
        Default value: 40
        '''
        result = self._values.get("system_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property systemDiskType: The type of the system disk.

        Valid values:
        cloud_efficiency: ultra disk.
        cloud_ssd: SSD.
        cloud_essd: ESSD.
        Default value: cloud_ssd
        '''
        result = self._values.get("system_disk_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def volume_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property volumeId: The ID of the file system.

        If you leave the parameter empty, a Performance NAS file system is created by default.
        '''
        result = self._values.get("volume_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def volume_mountpoint(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property volumeMountpoint: The mount target of the file system.

        Take note of the following information:
        If you do not specify the VolumeId parameter, you can leave the VolumeMountpoint parameter empty. A mount target is created by default.
        If you specify the VolumeId parameter, the VolumeMountpoint parameter is required.
        '''
        result = self._values.get("volume_mountpoint")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def volume_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property volumeProtocol: The type of the protocol that is used by the file system.

        Valid values:
        nfs
        smb
        Default value: nfs
        '''
        result = self._values.get("volume_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def volume_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property volumeType: The type of the shared storage.

        Only Apsara File Storage nas file systems are supported.
        '''
        result = self._values.get("volume_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The ID of the virtual private cloud (VPC) to which the E-HPC cluster belongs.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def without_elastic_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP).

        Default value: false
        '''
        result = self._values.get("without_elastic_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: Available area ID.'''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ehpc.ClusterV2Props",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_name": "clusterName",
        "shared_storages": "sharedStorages",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "additional_packages": "additionalPackages",
        "addons": "addons",
        "client_version": "clientVersion",
        "cluster_category": "clusterCategory",
        "cluster_credentials": "clusterCredentials",
        "cluster_custom_configuration": "clusterCustomConfiguration",
        "cluster_description": "clusterDescription",
        "cluster_mode": "clusterMode",
        "deletion_protection": "deletionProtection",
        "is_enterprise_security_group": "isEnterpriseSecurityGroup",
        "manager": "manager",
        "max_core_count": "maxCoreCount",
        "max_count": "maxCount",
        "queues": "queues",
        "resource_group_id": "resourceGroupId",
        "security_group_id": "securityGroupId",
        "tags": "tags",
    },
)
class ClusterV2Props:
    def __init__(
        self,
        *,
        cluster_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        shared_storages: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterV2.SharedStoragesProperty", typing.Dict[builtins.str, typing.Any]]]]],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        additional_packages: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterV2.AdditionalPackagesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        addons: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterV2.AddonsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        client_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_credentials: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterV2.ClusterCredentialsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        cluster_custom_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterV2.ClusterCustomConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        cluster_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        manager: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterV2.ManagerProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        max_core_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        queues: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterV2.QueuesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosClusterV2.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ClusterV2``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-clusterv2

        :param cluster_name: Property clusterName: Cluster name. The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
        :param shared_storages: Property sharedStorages: The list of shared storage configurations.
        :param vpc_id: Property vpcId: The ID of the VPC used by the cluster.
        :param v_switch_id: Property vSwitchId: The ID of the VSwitch used by the cluster.
        :param additional_packages: Property additionalPackages: A list of software to install on the cluster. Range from 0 to 10.
        :param addons: Property addons: Cluster custom service component configuration to support only one component.
        :param client_version: Property clientVersion: Cluster client version. By default, the latest version is used.
        :param cluster_category: Property clusterCategory: Cluster series. Valid values: - Standard: The standard version. - Serverless: Hosted version
        :param cluster_credentials: Property clusterCredentials: Security credentials for the cluster.
        :param cluster_custom_configuration: Property clusterCustomConfiguration: Cluster post-processing scripts.
        :param cluster_description: Property clusterDescription: Cluster description. The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
        :param cluster_mode: Property clusterMode: Cluster deployment type. Valid values: - Integrated: Public cloud clustering. - Hybrid: Hybrid cloud cluster. - Custom: The cluster is customized
        :param deletion_protection: Property deletionProtection: The cluster deletion protection property, which specifies whether cluster deletion via the console or the DeleteCluster API is supported. - true: Cluster deletion protection is enabled. - false: This turns off cluster deletion protection. Default value: false
        :param is_enterprise_security_group: Property isEnterpriseSecurityGroup: Whether to create an enterprise security group. Valid values: - true: Enterprise security groups are automatically created and used. - false: Normal security groups are automatically created and used instead of enterprise security groups.
        :param manager: Property manager: The cluster manages node configuration.
        :param max_core_count: Property maxCoreCount: Total number of cores that the cluster can manage on compute nodes, ranging from 0 to 100,000.
        :param max_count: Property maxCount: Number of compute nodes that can be managed by the cluster, ranging from 0 to 5,000.
        :param queues: Property queues: Cluster queue configuration. The number of queues is supported from 0 to 8.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param security_group_id: Property securityGroupId: Specifies the security group ID to which the newly created cluster belongs.
        :param tags: Property tags: Tags to attach to cluster_v2. Max support 20 tags to add during create cluster_v2. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0f1ec5c2f0d2bb7b14186fb5766e0b8523232ae58574a3360496e6f5df5d0df)
            check_type(argname="argument cluster_name", value=cluster_name, expected_type=type_hints["cluster_name"])
            check_type(argname="argument shared_storages", value=shared_storages, expected_type=type_hints["shared_storages"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument additional_packages", value=additional_packages, expected_type=type_hints["additional_packages"])
            check_type(argname="argument addons", value=addons, expected_type=type_hints["addons"])
            check_type(argname="argument client_version", value=client_version, expected_type=type_hints["client_version"])
            check_type(argname="argument cluster_category", value=cluster_category, expected_type=type_hints["cluster_category"])
            check_type(argname="argument cluster_credentials", value=cluster_credentials, expected_type=type_hints["cluster_credentials"])
            check_type(argname="argument cluster_custom_configuration", value=cluster_custom_configuration, expected_type=type_hints["cluster_custom_configuration"])
            check_type(argname="argument cluster_description", value=cluster_description, expected_type=type_hints["cluster_description"])
            check_type(argname="argument cluster_mode", value=cluster_mode, expected_type=type_hints["cluster_mode"])
            check_type(argname="argument deletion_protection", value=deletion_protection, expected_type=type_hints["deletion_protection"])
            check_type(argname="argument is_enterprise_security_group", value=is_enterprise_security_group, expected_type=type_hints["is_enterprise_security_group"])
            check_type(argname="argument manager", value=manager, expected_type=type_hints["manager"])
            check_type(argname="argument max_core_count", value=max_core_count, expected_type=type_hints["max_core_count"])
            check_type(argname="argument max_count", value=max_count, expected_type=type_hints["max_count"])
            check_type(argname="argument queues", value=queues, expected_type=type_hints["queues"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_name": cluster_name,
            "shared_storages": shared_storages,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if additional_packages is not None:
            self._values["additional_packages"] = additional_packages
        if addons is not None:
            self._values["addons"] = addons
        if client_version is not None:
            self._values["client_version"] = client_version
        if cluster_category is not None:
            self._values["cluster_category"] = cluster_category
        if cluster_credentials is not None:
            self._values["cluster_credentials"] = cluster_credentials
        if cluster_custom_configuration is not None:
            self._values["cluster_custom_configuration"] = cluster_custom_configuration
        if cluster_description is not None:
            self._values["cluster_description"] = cluster_description
        if cluster_mode is not None:
            self._values["cluster_mode"] = cluster_mode
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if is_enterprise_security_group is not None:
            self._values["is_enterprise_security_group"] = is_enterprise_security_group
        if manager is not None:
            self._values["manager"] = manager
        if max_core_count is not None:
            self._values["max_core_count"] = max_core_count
        if max_count is not None:
            self._values["max_count"] = max_count
        if queues is not None:
            self._values["queues"] = queues
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def cluster_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterName: Cluster name.

        The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
        '''
        result = self._values.get("cluster_name")
        assert result is not None, "Required property 'cluster_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def shared_storages(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.SharedStoragesProperty"]]]:
        '''Property sharedStorages: The list of shared storage configurations.'''
        result = self._values.get("shared_storages")
        assert result is not None, "Required property 'shared_storages' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.SharedStoragesProperty"]]], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The ID of the VPC used by the cluster.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: The ID of the VSwitch used by the cluster.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def additional_packages(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.AdditionalPackagesProperty"]]]]:
        '''Property additionalPackages: A list of software to install on the cluster.

        Range from 0 to 10.
        '''
        result = self._values.get("additional_packages")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.AdditionalPackagesProperty"]]]], result)

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.AddonsProperty"]]]]:
        '''Property addons: Cluster custom service component configuration to support only one component.'''
        result = self._values.get("addons")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.AddonsProperty"]]]], result)

    @builtins.property
    def client_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clientVersion: Cluster client version.

        By default, the latest version is used.
        '''
        result = self._values.get("client_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterCategory: Cluster series.

        Valid values:

        - Standard: The standard version.
        - Serverless: Hosted version
        '''
        result = self._values.get("cluster_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_credentials(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ClusterCredentialsProperty"]]:
        '''Property clusterCredentials: Security credentials for the cluster.'''
        result = self._values.get("cluster_credentials")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ClusterCredentialsProperty"]], result)

    @builtins.property
    def cluster_custom_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ClusterCustomConfigurationProperty"]]:
        '''Property clusterCustomConfiguration: Cluster post-processing scripts.'''
        result = self._values.get("cluster_custom_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ClusterCustomConfigurationProperty"]], result)

    @builtins.property
    def cluster_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterDescription: Cluster description.

        The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
        '''
        result = self._values.get("cluster_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterMode: Cluster deployment type.

        Valid values:

        - Integrated: Public cloud clustering.
        - Hybrid: Hybrid cloud cluster.
        - Custom: The cluster is customized
        '''
        result = self._values.get("cluster_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionProtection: The cluster deletion protection property, which specifies whether cluster deletion via the console or the DeleteCluster API is supported.

        - true: Cluster deletion protection is enabled.
        - false: This turns off cluster deletion protection.
          Default value: false
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isEnterpriseSecurityGroup: Whether to create an enterprise security group.

        Valid values:

        - true: Enterprise security groups are automatically created and used.
        - false: Normal security groups are automatically created and used instead of enterprise security groups.
        '''
        result = self._values.get("is_enterprise_security_group")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def manager(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ManagerProperty"]]:
        '''Property manager: The cluster manages node configuration.'''
        result = self._values.get("manager")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ManagerProperty"]], result)

    @builtins.property
    def max_core_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maxCoreCount: Total number of cores that the cluster can manage on compute nodes, ranging from 0 to 100,000.'''
        result = self._values.get("max_core_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maxCount: Number of compute nodes that can be managed by the cluster, ranging from 0 to 5,000.'''
        result = self._values.get("max_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def queues(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.QueuesProperty"]]]]:
        '''Property queues: Cluster queue configuration.

        The number of queues is supported from 0 to 8.
        '''
        result = self._values.get("queues")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.QueuesProperty"]]]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupId: Specifies the security group ID to which the newly created cluster belongs.'''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosClusterV2.TagsProperty"]]:
        '''Property tags: Tags to attach to cluster_v2.

        Max support 20 tags to add during create cluster_v2. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosClusterV2.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterV2Props(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-ehpc.IAutoScaleConfig")
class IAutoScaleConfig(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``AutoScaleConfig``.'''

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: Cluster Id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AutoScaleConfigProps:
        ...


class _IAutoScaleConfigProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``AutoScaleConfig``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-ehpc.IAutoScaleConfig"

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: Cluster Id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AutoScaleConfigProps:
        return typing.cast(AutoScaleConfigProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAutoScaleConfig).__jsii_proxy_class__ = lambda : _IAutoScaleConfigProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-ehpc.ICluster")
class ICluster(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Cluster``.'''

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: Cluster Id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEcsInfo")
    def attr_ecs_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EcsInfo: A data structure describing the number and specifications of ECS for various components of the cluster.

        You will get results similar to the following: EcsInfo: {"Manager": {"Count": 2, "InstanceType": "ecs.n1.large"}, "Compute": {"Count": 8, "InstanceType": "ecs.n1.large"}, "Login": {"Count": 1, "InstanceType": "ecs.n1.large"}}
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: Cluster name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityGroupId: Security group ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClusterProps:
        ...


class _IClusterProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Cluster``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-ehpc.ICluster"

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: Cluster Id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrEcsInfo")
    def attr_ecs_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EcsInfo: A data structure describing the number and specifications of ECS for various components of the cluster.

        You will get results similar to the following: EcsInfo: {"Manager": {"Count": 2, "InstanceType": "ecs.n1.large"}, "Compute": {"Count": 8, "InstanceType": "ecs.n1.large"}, "Login": {"Count": 1, "InstanceType": "ecs.n1.large"}}
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEcsInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: Cluster name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityGroupId: Security group ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClusterProps:
        return typing.cast(ClusterProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ICluster).__jsii_proxy_class__ = lambda : _IClusterProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-ehpc.IClusterV2")
class IClusterV2(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ClusterV2``.'''

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: Cluster Id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClusterV2Props:
        ...


class _IClusterV2Proxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ClusterV2``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-ehpc.IClusterV2"

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: Cluster Id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClusterV2Props:
        return typing.cast(ClusterV2Props, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IClusterV2).__jsii_proxy_class__ = lambda : _IClusterV2Proxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-ehpc.IUsers")
class IUsers(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Users``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UsersProps":
        ...


class _IUsersProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Users``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-ehpc.IUsers"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UsersProps":
        return typing.cast("UsersProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IUsers).__jsii_proxy_class__ = lambda : _IUsersProxy


class RosAutoScaleConfig(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ehpc.RosAutoScaleConfig",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::EHPC::AutoScaleConfig``, which is used to configure the auto scaling settings of a cluster.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AutoScaleConfig`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-autoscaleconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAutoScaleConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e6aa3a147ede06e83fbeb4315c5101912fc2a982848075b358e751418ba52ec)
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
            type_hints = typing.get_type_hints(_typecheckingstub__52c9bcab2898982620100e8afb81348f593abb2657af225d289f72561a50dc01)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterId: Cluster Id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: Cluster ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fef2d493a4213be1ae35c64fd562de14cdba28cc1115d9254813bc309f9e80a7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__747c41aebd15546922847383a55a3b84e5455a9cf295e054acbc568e174d0526)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="enableAutoGrow")
    def enable_auto_grow(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableAutoGrow: Specifies whether to enable auto scale-out. Valid values:
        true: enables auto scale-out.
        false: disables auto scale-out
        Default value: false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableAutoGrow"))

    @enable_auto_grow.setter
    def enable_auto_grow(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bcaaed7b479ebb2284a85d268698232ab66ca8db3067cb0c46e28d08f434492e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableAutoGrow", value)

    @builtins.property
    @jsii.member(jsii_name="enableAutoShrink")
    def enable_auto_shrink(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableAutoShrink: Specifies whether to enable auto scale-in. Valid values:
        true: enables auto scale-in.
        false: disables auto scale-in
        Default value: false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableAutoShrink"))

    @enable_auto_shrink.setter
    def enable_auto_shrink(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c77607b7f550120466836d948b578ecbd9d393e97f72b0754be58d8b1aaf3ab6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableAutoShrink", value)

    @builtins.property
    @jsii.member(jsii_name="excludeNodes")
    def exclude_nodes(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes. Separate multiple compute nodes with commas (,). If you want to retain a compute node, you can set the node as an exceptional node. Then, the node is not released if it is idle.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "excludeNodes"))

    @exclude_nodes.setter
    def exclude_nodes(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29b6f058b52f19cf24326d4260893bae238df966af5c490433da5566f2026919)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "excludeNodes", value)

    @builtins.property
    @jsii.member(jsii_name="extraNodesGrowRatio")
    def extra_nodes_grow_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        extraNodesGrowRatio: The percentage of extra compute nodes.
        Default value: 0
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "extraNodesGrowRatio"))

    @extra_nodes_grow_ratio.setter
    def extra_nodes_grow_ratio(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__63f23a241a75ed57a74039e387b7fb929befcb7736619afc8ab0763d2e64bd17)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "extraNodesGrowRatio", value)

    @builtins.property
    @jsii.member(jsii_name="growIntervalInMinutes")
    def grow_interval_in_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        growIntervalInMinutes: The interval between two consecutive rounds of scale-out. Unit: minutes.
        Default value: 2
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "growIntervalInMinutes"))

    @grow_interval_in_minutes.setter
    def grow_interval_in_minutes(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__09a7cb6fd221814ea9f72a243e3b5afa22ab9ef202db82e85d0833bcd9e65ecf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "growIntervalInMinutes", value)

    @builtins.property
    @jsii.member(jsii_name="growRatio")
    def grow_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        growRatio: The percentage of each round of scale-out.
        Default value: 100
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "growRatio"))

    @grow_ratio.setter
    def grow_ratio(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__999d92e0bce30dda57e3ccd922ad611d18b485722a2cc374d99eb4ae047918c8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "growRatio", value)

    @builtins.property
    @jsii.member(jsii_name="growTimeoutInMinutes")
    def grow_timeout_in_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        growTimeoutInMinutes: The scale-out timeout period. Unit: minutes.
        Default value: 20
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "growTimeoutInMinutes"))

    @grow_timeout_in_minutes.setter
    def grow_timeout_in_minutes(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__772ed5b0016d0f2bfdad234649dc20809d39aff1c2e5e8210134395724d5e00c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "growTimeoutInMinutes", value)

    @builtins.property
    @jsii.member(jsii_name="imageId")
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        imageId: The ID of the image.
        If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
        If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
        If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageId"))

    @image_id.setter
    def image_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b8d6ac888e1527778bd98c8936cdc0d6a5aa69ebb096bc43de04c9f661c0114)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageId", value)

    @builtins.property
    @jsii.member(jsii_name="maxNodesInCluster")
    def max_nodes_in_cluster(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster.
        Default value: 100
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maxNodesInCluster"))

    @max_nodes_in_cluster.setter
    def max_nodes_in_cluster(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__896a0afa37141b9f5672200c0a9571cb6c229736a95ffcf16f878b406d49e348)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxNodesInCluster", value)

    @builtins.property
    @jsii.member(jsii_name="queues")
    def queues(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAutoScaleConfig.QueuesProperty"]]]]:
        '''
        :Property: queues:
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAutoScaleConfig.QueuesProperty"]]]], jsii.get(self, "queues"))

    @queues.setter
    def queues(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAutoScaleConfig.QueuesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__02ce51878aaca07f205a84d3429d425f89ada6a958b1e0c5d818635a5088d11a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "queues", value)

    @builtins.property
    @jsii.member(jsii_name="shrinkIdleTimes")
    def shrink_idle_times(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check.
        Default value: 3
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "shrinkIdleTimes"))

    @shrink_idle_times.setter
    def shrink_idle_times(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a54e2edb75347b44916d732ca529551820705aa21ce763a40f6be2745468b0d0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "shrinkIdleTimes", value)

    @builtins.property
    @jsii.member(jsii_name="shrinkIntervalInMinutes")
    def shrink_interval_in_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in. Unit: minutes.
        Default value: 2
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "shrinkIntervalInMinutes"))

    @shrink_interval_in_minutes.setter
    def shrink_interval_in_minutes(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e43451a7f375511269acd231ddd4f1bd7dd4fbc36d273eeb3bb3824fa738f6d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "shrinkIntervalInMinutes", value)

    @builtins.property
    @jsii.member(jsii_name="spotPriceLimit")
    def spot_price_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: spotPriceLimit: The maximum hourly price of the compute nodes. The value can be accurate to three decimal places. The parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "spotPriceLimit"))

    @spot_price_limit.setter
    def spot_price_limit(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73a8d0109ee8c3a0cd73cc459ae668f970f8e68e3af8ad166452dd37d81b21fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "spotPriceLimit", value)

    @builtins.property
    @jsii.member(jsii_name="spotStrategy")
    def spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        spotStrategy: The preemption policy of the compute nodes. Valid values:
        NoSpot: The compute nodes are pay-as-you-go instances.
        SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
        SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
        Default value: NoSpot
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "spotStrategy"))

    @spot_strategy.setter
    def spot_strategy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1abe4597b590dbe3d2c3de16f154b753392a081f4934eaf52ef49846ec103de5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "spotStrategy", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosAutoScaleConfig.DataDisksProperty",
        jsii_struct_bases=[],
        name_mapping={
            "data_disk_category": "dataDiskCategory",
            "data_disk_delete_with_instance": "dataDiskDeleteWithInstance",
            "data_disk_encrypted": "dataDiskEncrypted",
            "data_disk_kms_key_id": "dataDiskKmsKeyId",
            "data_disk_performance_level": "dataDiskPerformanceLevel",
            "data_disk_size": "dataDiskSize",
        },
    )
    class DataDisksProperty:
        def __init__(
            self,
            *,
            data_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            data_disk_delete_with_instance: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            data_disk_encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            data_disk_kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            data_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            data_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param data_disk_category: 
            :param data_disk_delete_with_instance: 
            :param data_disk_encrypted: 
            :param data_disk_kms_key_id: 
            :param data_disk_performance_level: 
            :param data_disk_size: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8898d1e5b9634a3b2524bf8d141df15fc3a1415239536314b090cb16db48f424)
                check_type(argname="argument data_disk_category", value=data_disk_category, expected_type=type_hints["data_disk_category"])
                check_type(argname="argument data_disk_delete_with_instance", value=data_disk_delete_with_instance, expected_type=type_hints["data_disk_delete_with_instance"])
                check_type(argname="argument data_disk_encrypted", value=data_disk_encrypted, expected_type=type_hints["data_disk_encrypted"])
                check_type(argname="argument data_disk_kms_key_id", value=data_disk_kms_key_id, expected_type=type_hints["data_disk_kms_key_id"])
                check_type(argname="argument data_disk_performance_level", value=data_disk_performance_level, expected_type=type_hints["data_disk_performance_level"])
                check_type(argname="argument data_disk_size", value=data_disk_size, expected_type=type_hints["data_disk_size"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if data_disk_category is not None:
                self._values["data_disk_category"] = data_disk_category
            if data_disk_delete_with_instance is not None:
                self._values["data_disk_delete_with_instance"] = data_disk_delete_with_instance
            if data_disk_encrypted is not None:
                self._values["data_disk_encrypted"] = data_disk_encrypted
            if data_disk_kms_key_id is not None:
                self._values["data_disk_kms_key_id"] = data_disk_kms_key_id
            if data_disk_performance_level is not None:
                self._values["data_disk_performance_level"] = data_disk_performance_level
            if data_disk_size is not None:
                self._values["data_disk_size"] = data_disk_size

        @builtins.property
        def data_disk_category(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            dataDiskCategory: The type of the data disk. Valid values:
            cloud_efficiency: ultra disk.
            cloud_ssd: SSD.
            cloud_essd: ESSD.
            Default value: cloud_efficiency
            '''
            result = self._values.get("data_disk_category")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def data_disk_delete_with_instance(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dataDiskDeleteWithInstance: Specifies whether the data disk is released when the node is released.
            '''
            result = self._values.get("data_disk_delete_with_instance")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def data_disk_encrypted(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dataDiskEncrypted: Specifies whether to encrypt the data disk.
            '''
            result = self._values.get("data_disk_encrypted")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def data_disk_kms_key_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dataDiskKmsKeyId: The KMS key ID of the data disk.
            '''
            result = self._values.get("data_disk_kms_key_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def data_disk_performance_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            dataDiskPerformanceLevel: The performance level of the ESSD used as the data disk. The parameter takes effect only when the Queues.N.DataDisks.M.DataDiskCategory parameter is set to cloud_essd. Valid values:
            PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
            PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
            PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
            PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
            Default value: PL1
            '''
            result = self._values.get("data_disk_performance_level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def data_disk_size(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            dataDiskSize: The size of the data disk. Unit: GB.
            Default value: 40
            '''
            result = self._values.get("data_disk_size")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DataDisksProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosAutoScaleConfig.InstanceTypesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_type": "instanceType",
            "v_switch_id": "vSwitchId",
            "zone_id": "zoneId",
            "spot_price_limit": "spotPriceLimit",
            "spot_strategy": "spotStrategy",
        },
    )
    class InstanceTypesProperty:
        def __init__(
            self,
            *,
            instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param instance_type: 
            :param v_switch_id: 
            :param zone_id: 
            :param spot_price_limit: 
            :param spot_strategy: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d167d30cbe4d4102e62760d61cf3096d77424041b9175713e4beca1a2048d2e7)
                check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
                check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
                check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
                check_type(argname="argument spot_price_limit", value=spot_price_limit, expected_type=type_hints["spot_price_limit"])
                check_type(argname="argument spot_strategy", value=spot_strategy, expected_type=type_hints["spot_strategy"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "instance_type": instance_type,
                "v_switch_id": v_switch_id,
                "zone_id": zone_id,
            }
            if spot_price_limit is not None:
                self._values["spot_price_limit"] = spot_price_limit
            if spot_strategy is not None:
                self._values["spot_strategy"] = spot_strategy

        @builtins.property
        def instance_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: instanceType: The instance type of the compute nodes that are automatically added in the queue.
            '''
            result = self._values.get("instance_type")
            assert result is not None, "Required property 'instance_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def v_switch_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vSwitchId: The vSwitch ID of the compute nodes that are automatically added in the queue.
            '''
            result = self._values.get("v_switch_id")
            assert result is not None, "Required property 'v_switch_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def zone_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: zoneId: The zone ID of the compute nodes that are automatically added in the queue belongs.
            '''
            result = self._values.get("zone_id")
            assert result is not None, "Required property 'zone_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def spot_price_limit(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: spotPriceLimit: The maximum hourly price of the compute nodes that are automatically added in the queue. The value can be accurate to three decimal places. The parameter takes effect only when Queues.N.InstanceTypes.M.SpotStrategy is set to SpotWithPriceLimit
            '''
            result = self._values.get("spot_price_limit")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def spot_strategy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            spotStrategy: The bidding method of the compute nodes that are automatically added in the queue. Valid values:
            NoSpot: The compute nodes are pay-as-you-go instances.
            SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
            SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
            Default value: NoSpot
            '''
            result = self._values.get("spot_strategy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InstanceTypesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosAutoScaleConfig.QueuesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "data_disks": "dataDisks",
            "enable_auto_grow": "enableAutoGrow",
            "enable_auto_shrink": "enableAutoShrink",
            "host_name_prefix": "hostNamePrefix",
            "host_name_suffix": "hostNameSuffix",
            "instance_type": "instanceType",
            "instance_types": "instanceTypes",
            "max_nodes_in_queue": "maxNodesInQueue",
            "max_nodes_per_cycle": "maxNodesPerCycle",
            "min_nodes_in_queue": "minNodesInQueue",
            "min_nodes_per_cycle": "minNodesPerCycle",
            "queue_image_id": "queueImageId",
            "queue_name": "queueName",
            "spot_price_limit": "spotPriceLimit",
            "spot_strategy": "spotStrategy",
            "system_disk_category": "systemDiskCategory",
            "system_disk_level": "systemDiskLevel",
            "system_disk_size": "systemDiskSize",
        },
    )
    class QueuesProperty:
        def __init__(
            self,
            *,
            data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAutoScaleConfig.DataDisksProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            enable_auto_grow: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_auto_shrink: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            host_name_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            host_name_suffix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAutoScaleConfig.InstanceTypesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            max_nodes_in_queue: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            max_nodes_per_cycle: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            min_nodes_in_queue: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            min_nodes_per_cycle: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            queue_image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            queue_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            system_disk_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param data_disks: 
            :param enable_auto_grow: 
            :param enable_auto_shrink: 
            :param host_name_prefix: 
            :param host_name_suffix: 
            :param instance_type: 
            :param instance_types: 
            :param max_nodes_in_queue: 
            :param max_nodes_per_cycle: 
            :param min_nodes_in_queue: 
            :param min_nodes_per_cycle: 
            :param queue_image_id: 
            :param queue_name: 
            :param spot_price_limit: 
            :param spot_strategy: 
            :param system_disk_category: 
            :param system_disk_level: 
            :param system_disk_size: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8a4ab527712ba869a751af8d2f99de8772b964e864912bb8d2debf26be716578)
                check_type(argname="argument data_disks", value=data_disks, expected_type=type_hints["data_disks"])
                check_type(argname="argument enable_auto_grow", value=enable_auto_grow, expected_type=type_hints["enable_auto_grow"])
                check_type(argname="argument enable_auto_shrink", value=enable_auto_shrink, expected_type=type_hints["enable_auto_shrink"])
                check_type(argname="argument host_name_prefix", value=host_name_prefix, expected_type=type_hints["host_name_prefix"])
                check_type(argname="argument host_name_suffix", value=host_name_suffix, expected_type=type_hints["host_name_suffix"])
                check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
                check_type(argname="argument instance_types", value=instance_types, expected_type=type_hints["instance_types"])
                check_type(argname="argument max_nodes_in_queue", value=max_nodes_in_queue, expected_type=type_hints["max_nodes_in_queue"])
                check_type(argname="argument max_nodes_per_cycle", value=max_nodes_per_cycle, expected_type=type_hints["max_nodes_per_cycle"])
                check_type(argname="argument min_nodes_in_queue", value=min_nodes_in_queue, expected_type=type_hints["min_nodes_in_queue"])
                check_type(argname="argument min_nodes_per_cycle", value=min_nodes_per_cycle, expected_type=type_hints["min_nodes_per_cycle"])
                check_type(argname="argument queue_image_id", value=queue_image_id, expected_type=type_hints["queue_image_id"])
                check_type(argname="argument queue_name", value=queue_name, expected_type=type_hints["queue_name"])
                check_type(argname="argument spot_price_limit", value=spot_price_limit, expected_type=type_hints["spot_price_limit"])
                check_type(argname="argument spot_strategy", value=spot_strategy, expected_type=type_hints["spot_strategy"])
                check_type(argname="argument system_disk_category", value=system_disk_category, expected_type=type_hints["system_disk_category"])
                check_type(argname="argument system_disk_level", value=system_disk_level, expected_type=type_hints["system_disk_level"])
                check_type(argname="argument system_disk_size", value=system_disk_size, expected_type=type_hints["system_disk_size"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if data_disks is not None:
                self._values["data_disks"] = data_disks
            if enable_auto_grow is not None:
                self._values["enable_auto_grow"] = enable_auto_grow
            if enable_auto_shrink is not None:
                self._values["enable_auto_shrink"] = enable_auto_shrink
            if host_name_prefix is not None:
                self._values["host_name_prefix"] = host_name_prefix
            if host_name_suffix is not None:
                self._values["host_name_suffix"] = host_name_suffix
            if instance_type is not None:
                self._values["instance_type"] = instance_type
            if instance_types is not None:
                self._values["instance_types"] = instance_types
            if max_nodes_in_queue is not None:
                self._values["max_nodes_in_queue"] = max_nodes_in_queue
            if max_nodes_per_cycle is not None:
                self._values["max_nodes_per_cycle"] = max_nodes_per_cycle
            if min_nodes_in_queue is not None:
                self._values["min_nodes_in_queue"] = min_nodes_in_queue
            if min_nodes_per_cycle is not None:
                self._values["min_nodes_per_cycle"] = min_nodes_per_cycle
            if queue_image_id is not None:
                self._values["queue_image_id"] = queue_image_id
            if queue_name is not None:
                self._values["queue_name"] = queue_name
            if spot_price_limit is not None:
                self._values["spot_price_limit"] = spot_price_limit
            if spot_strategy is not None:
                self._values["spot_strategy"] = spot_strategy
            if system_disk_category is not None:
                self._values["system_disk_category"] = system_disk_category
            if system_disk_level is not None:
                self._values["system_disk_level"] = system_disk_level
            if system_disk_size is not None:
                self._values["system_disk_size"] = system_disk_size

        @builtins.property
        def data_disks(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAutoScaleConfig.DataDisksProperty"]]]]:
            '''
            :Property: dataDisks: undefined
            '''
            result = self._values.get("data_disks")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAutoScaleConfig.DataDisksProperty"]]]], result)

        @builtins.property
        def enable_auto_grow(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            enableAutoGrow: Specifies whether the queue enables auto scale-out. Valid values:
            true: enables auto scale-out.
            false: disables auto scale-out
            Default value: false
            '''
            result = self._values.get("enable_auto_grow")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_auto_shrink(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            enableAutoShrink: Specifies whether the queue enables auto scale-in. Valid values:
            true: enables auto scale-in.
            false: disables auto scale-in
            Default value: false
            '''
            result = self._values.get("enable_auto_shrink")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def host_name_prefix(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: hostNamePrefix: The hostname prefix of the host that is used to perform scale-out for the queue. You can manage compute nodes that have a specified hostname prefix.
            '''
            result = self._values.get("host_name_prefix")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def host_name_suffix(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: hostNameSuffix: The hostname suffix of the host that is used to perform scale-out for the queue. You can manage nodes that have a specified hostname suffix.
            '''
            result = self._values.get("host_name_suffix")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: instanceType: The instance type of the compute nodes that are automatically added in the queue.
            '''
            result = self._values.get("instance_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_types(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAutoScaleConfig.InstanceTypesProperty"]]]]:
            '''
            :Property: instanceTypes: undefined
            '''
            result = self._values.get("instance_types")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAutoScaleConfig.InstanceTypesProperty"]]]], result)

        @builtins.property
        def max_nodes_in_queue(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            maxNodesInQueue: The maximum number of the compute nodes that can be added in the queue.
            Default value: 100
            '''
            result = self._values.get("max_nodes_in_queue")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def max_nodes_per_cycle(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            maxNodesPerCycle: The maximum number of compute nodes that can be added in each round of scale-out.
            Default value: 0
            '''
            result = self._values.get("max_nodes_per_cycle")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def min_nodes_in_queue(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            minNodesInQueue: The minimum number of the compute nodes that can be removed in the queue.
            Default value: 0
            '''
            result = self._values.get("min_nodes_in_queue")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def min_nodes_per_cycle(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            minNodesPerCycle: The minimum number of compute nodes that can be added in each round of scale-out.
            Default value: 1
            '''
            result = self._values.get("min_nodes_per_cycle")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def queue_image_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            queueImageId: The image ID of the queue where scale-out is performed.
            If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
            If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
            If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
            '''
            result = self._values.get("queue_image_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def queue_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: queueName: The name of the queue.
            '''
            result = self._values.get("queue_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def spot_price_limit(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: spotPriceLimit: The maximum hourly price of the compute nodes that are automatically added in the queue. The value can be accurate to three decimal places. The parameter takes effect only when Queues.N.SpotStrategy is set to SpotWithPriceLimit.
            '''
            result = self._values.get("spot_price_limit")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def spot_strategy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            spotStrategy: The bidding method of the compute nodes that are automatically added in the queue. Valid values:
            NoSpot: The compute nodes are pay-as-you-go instances.
            SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
            SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
            Default value: NoSpot
            '''
            result = self._values.get("spot_strategy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def system_disk_category(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            systemDiskCategory: The type of the system disk specified for the compute nodes that are added in the queue. Valid values:
            cloud_efficiency: ultra disk.
            cloud_ssd: SSD.
            cloud_essd: ESSD.
            Default value: cloud_efficiency
            '''
            result = self._values.get("system_disk_category")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def system_disk_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            systemDiskLevel: The performance level of the system disk specified for the compute nodes that are added in the queue. Valid values:
            PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
            PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
            PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
            PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
            Default value: PL1
            '''
            result = self._values.get("system_disk_level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def system_disk_size(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            systemDiskSize: The size of the system disk specified for the compute nodes that are added in the queue. Unit: GB.
            Default value: 40
            '''
            result = self._values.get("system_disk_size")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "QueuesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ehpc.RosAutoScaleConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "enable_auto_grow": "enableAutoGrow",
        "enable_auto_shrink": "enableAutoShrink",
        "exclude_nodes": "excludeNodes",
        "extra_nodes_grow_ratio": "extraNodesGrowRatio",
        "grow_interval_in_minutes": "growIntervalInMinutes",
        "grow_ratio": "growRatio",
        "grow_timeout_in_minutes": "growTimeoutInMinutes",
        "image_id": "imageId",
        "max_nodes_in_cluster": "maxNodesInCluster",
        "queues": "queues",
        "shrink_idle_times": "shrinkIdleTimes",
        "shrink_interval_in_minutes": "shrinkIntervalInMinutes",
        "spot_price_limit": "spotPriceLimit",
        "spot_strategy": "spotStrategy",
    },
)
class RosAutoScaleConfigProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        enable_auto_grow: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_auto_shrink: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        exclude_nodes: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        extra_nodes_grow_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        grow_interval_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        grow_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        grow_timeout_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_nodes_in_cluster: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        queues: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAutoScaleConfig.QueuesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        shrink_idle_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        shrink_interval_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAutoScaleConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-autoscaleconfig

        :param cluster_id: 
        :param enable_auto_grow: 
        :param enable_auto_shrink: 
        :param exclude_nodes: 
        :param extra_nodes_grow_ratio: 
        :param grow_interval_in_minutes: 
        :param grow_ratio: 
        :param grow_timeout_in_minutes: 
        :param image_id: 
        :param max_nodes_in_cluster: 
        :param queues: 
        :param shrink_idle_times: 
        :param shrink_interval_in_minutes: 
        :param spot_price_limit: 
        :param spot_strategy: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__527569db2babe86e47fee4c8b26c23d682c7cbf15f4c8858bc4221fc2b2da6c8)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument enable_auto_grow", value=enable_auto_grow, expected_type=type_hints["enable_auto_grow"])
            check_type(argname="argument enable_auto_shrink", value=enable_auto_shrink, expected_type=type_hints["enable_auto_shrink"])
            check_type(argname="argument exclude_nodes", value=exclude_nodes, expected_type=type_hints["exclude_nodes"])
            check_type(argname="argument extra_nodes_grow_ratio", value=extra_nodes_grow_ratio, expected_type=type_hints["extra_nodes_grow_ratio"])
            check_type(argname="argument grow_interval_in_minutes", value=grow_interval_in_minutes, expected_type=type_hints["grow_interval_in_minutes"])
            check_type(argname="argument grow_ratio", value=grow_ratio, expected_type=type_hints["grow_ratio"])
            check_type(argname="argument grow_timeout_in_minutes", value=grow_timeout_in_minutes, expected_type=type_hints["grow_timeout_in_minutes"])
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument max_nodes_in_cluster", value=max_nodes_in_cluster, expected_type=type_hints["max_nodes_in_cluster"])
            check_type(argname="argument queues", value=queues, expected_type=type_hints["queues"])
            check_type(argname="argument shrink_idle_times", value=shrink_idle_times, expected_type=type_hints["shrink_idle_times"])
            check_type(argname="argument shrink_interval_in_minutes", value=shrink_interval_in_minutes, expected_type=type_hints["shrink_interval_in_minutes"])
            check_type(argname="argument spot_price_limit", value=spot_price_limit, expected_type=type_hints["spot_price_limit"])
            check_type(argname="argument spot_strategy", value=spot_strategy, expected_type=type_hints["spot_strategy"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
        }
        if enable_auto_grow is not None:
            self._values["enable_auto_grow"] = enable_auto_grow
        if enable_auto_shrink is not None:
            self._values["enable_auto_shrink"] = enable_auto_shrink
        if exclude_nodes is not None:
            self._values["exclude_nodes"] = exclude_nodes
        if extra_nodes_grow_ratio is not None:
            self._values["extra_nodes_grow_ratio"] = extra_nodes_grow_ratio
        if grow_interval_in_minutes is not None:
            self._values["grow_interval_in_minutes"] = grow_interval_in_minutes
        if grow_ratio is not None:
            self._values["grow_ratio"] = grow_ratio
        if grow_timeout_in_minutes is not None:
            self._values["grow_timeout_in_minutes"] = grow_timeout_in_minutes
        if image_id is not None:
            self._values["image_id"] = image_id
        if max_nodes_in_cluster is not None:
            self._values["max_nodes_in_cluster"] = max_nodes_in_cluster
        if queues is not None:
            self._values["queues"] = queues
        if shrink_idle_times is not None:
            self._values["shrink_idle_times"] = shrink_idle_times
        if shrink_interval_in_minutes is not None:
            self._values["shrink_interval_in_minutes"] = shrink_interval_in_minutes
        if spot_price_limit is not None:
            self._values["spot_price_limit"] = spot_price_limit
        if spot_strategy is not None:
            self._values["spot_strategy"] = spot_strategy

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: Cluster ID.
        '''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def enable_auto_grow(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableAutoGrow: Specifies whether to enable auto scale-out. Valid values:
        true: enables auto scale-out.
        false: disables auto scale-out
        Default value: false
        '''
        result = self._values.get("enable_auto_grow")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_auto_shrink(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableAutoShrink: Specifies whether to enable auto scale-in. Valid values:
        true: enables auto scale-in.
        false: disables auto scale-in
        Default value: false
        '''
        result = self._values.get("enable_auto_shrink")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def exclude_nodes(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes. Separate multiple compute nodes with commas (,). If you want to retain a compute node, you can set the node as an exceptional node. Then, the node is not released if it is idle.
        '''
        result = self._values.get("exclude_nodes")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def extra_nodes_grow_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        extraNodesGrowRatio: The percentage of extra compute nodes.
        Default value: 0
        '''
        result = self._values.get("extra_nodes_grow_ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def grow_interval_in_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        growIntervalInMinutes: The interval between two consecutive rounds of scale-out. Unit: minutes.
        Default value: 2
        '''
        result = self._values.get("grow_interval_in_minutes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def grow_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        growRatio: The percentage of each round of scale-out.
        Default value: 100
        '''
        result = self._values.get("grow_ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def grow_timeout_in_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        growTimeoutInMinutes: The scale-out timeout period. Unit: minutes.
        Default value: 20
        '''
        result = self._values.get("grow_timeout_in_minutes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        imageId: The ID of the image.
        If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
        If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
        If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
        '''
        result = self._values.get("image_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_nodes_in_cluster(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster.
        Default value: 100
        '''
        result = self._values.get("max_nodes_in_cluster")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def queues(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAutoScaleConfig.QueuesProperty]]]]:
        '''
        :Property: queues:
        '''
        result = self._values.get("queues")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAutoScaleConfig.QueuesProperty]]]], result)

    @builtins.property
    def shrink_idle_times(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check.
        Default value: 3
        '''
        result = self._values.get("shrink_idle_times")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def shrink_interval_in_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in. Unit: minutes.
        Default value: 2
        '''
        result = self._values.get("shrink_interval_in_minutes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spot_price_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: spotPriceLimit: The maximum hourly price of the compute nodes. The value can be accurate to three decimal places. The parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
        '''
        result = self._values.get("spot_price_limit")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        spotStrategy: The preemption policy of the compute nodes. Valid values:
        NoSpot: The compute nodes are pay-as-you-go instances.
        SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
        SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
        Default value: NoSpot
        '''
        result = self._values.get("spot_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAutoScaleConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCluster(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ehpc.RosCluster",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::EHPC::Cluster``, which is used to create an Elastic High Performance Computing (E-HPC) cluster.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Cluster`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-cluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf93d989786b299a7833199d65147d8075a203cba28aee188bd9dc8d127864a2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4c16cc463df9bd416f4663a0515a5b8f67111cde04577c2e89746bf1aee1bfb1)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterId: Cluster Id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrEcsInfo")
    def attr_ecs_info(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        EcsInfo: A data structure describing the number and specifications of ECS for various components of the cluster.
        You will get results similar to the following: EcsInfo: {"Manager": {"Count": 2, "InstanceType": "ecs.n1.large"}, "Compute": {"Count": 8, "InstanceType": "ecs.n1.large"}, "Login": {"Count": 1, "InstanceType": "ecs.n1.large"}}
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEcsInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Name: Cluster name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityGroupId: Security group ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="ecsOrderComputeCount")
    def ecs_order_compute_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ecsOrderComputeCount: Computing node number, which ranges from: 0-99.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ecsOrderComputeCount"))

    @ecs_order_compute_count.setter
    def ecs_order_compute_count(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__011909b9f7478db8d3e01d15c8e18a6c063eab31685533c356c968a9a49aa581)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsOrderComputeCount", value)

    @builtins.property
    @jsii.member(jsii_name="ecsOrderComputeInstanceType")
    def ecs_order_compute_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ecsOrderComputeInstanceType: Cluster computing node instance specifications.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ecsOrderComputeInstanceType"))

    @ecs_order_compute_instance_type.setter
    def ecs_order_compute_instance_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd5c2642f0a44ed0abe0f563e22eea45e303b9d647adeb1db75d51be5874dc13)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsOrderComputeInstanceType", value)

    @builtins.property
    @jsii.member(jsii_name="ecsOrderLoginCount")
    def ecs_order_login_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ecsOrderLoginCount: Login node number can only be 1.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ecsOrderLoginCount"))

    @ecs_order_login_count.setter
    def ecs_order_login_count(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__442acdebf2f065232ea367d5983c3f18ed6d621b479297ad1030c25f810dd5ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsOrderLoginCount", value)

    @builtins.property
    @jsii.member(jsii_name="ecsOrderLoginInstanceType")
    def ecs_order_login_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ecsOrderLoginInstanceType: Log cluster node instance specifications.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ecsOrderLoginInstanceType"))

    @ecs_order_login_instance_type.setter
    def ecs_order_login_instance_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e53c7928b3b53d98e4a53c1e42762a8d8c696667f8d3820a8b191ce7b9004bee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsOrderLoginInstanceType", value)

    @builtins.property
    @jsii.member(jsii_name="ecsOrderManagerInstanceType")
    def ecs_order_manager_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ecsOrderManagerInstanceType: Cluster control node instance specifications.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ecsOrderManagerInstanceType"))

    @ecs_order_manager_instance_type.setter
    def ecs_order_manager_instance_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6685a8b886f129222820659b26ef3d1bcfea35e44ef743c8e80674df50e0e3c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsOrderManagerInstanceType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9675e0300f626dc93caa437a6a6a116bfdc347d690ea833a87d144962402171)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23d4209ba794939b3d8e069503780aa5758947ddf750d6f695dbfcefacb47bca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: VPC in switch ID. Products currently only supports VPC network.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e1264e301623e85196ffefec0bcfc8bc19570fb2ecf768ba0d5d4ca4c2b771b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="accountType")
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountType: The service type of the domain account. Valid values:
        nis
        ldap
        Default value: nis
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountType"))

    @account_type.setter
    def account_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd95cf09d7b4deec1a52f53ffbe408a26c21d094bb68a8628a4763d4513f592f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountType", value)

    @builtins.property
    @jsii.member(jsii_name="additionalVolumes")
    def additional_volumes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.AdditionalVolumesProperty"]]]]:
        '''
        :Property: additionalVolumes:
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.AdditionalVolumesProperty"]]]], jsii.get(self, "additionalVolumes"))

    @additional_volumes.setter
    def additional_volumes(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.AdditionalVolumesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd3aa0fc9b29b3b357f9f1691162543c7fb36135ffdbfeff299dc1ccb3b0b292)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "additionalVolumes", value)

    @builtins.property
    @jsii.member(jsii_name="application")
    def application(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.ApplicationProperty"]]]]:
        '''
        :Property: application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.ApplicationProperty"]]]], jsii.get(self, "application"))

    @application.setter
    def application(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.ApplicationProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c1f817c99fa88d2cf61097b18f1a8cab8436beb3dc65d787c3cdf76d07949b4d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "application", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: true: automatic renewals; false: no automatic renewals.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7bc77fcdedcc6a20cc568ca4697eb2d19d8c1bee2cc02832cf4352d115d06a1c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenewPeriod"))

    @auto_renew_period.setter
    def auto_renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83163176f4265844a9c7b7672e49a3fccb0347a9a85550e49260992da495d840)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="clientVersion")
    def client_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clientVersion: The version of the E-HPC client. By default, the parameter is set to the latest version number.
        You can call the ListCurrentClientVersion operation to query the current version of the E-HPC client.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clientVersion"))

    @client_version.setter
    def client_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28cf772b526ea2f695a6ba87c1b47c77471dcc01de6781382f580983bb564e2b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clientVersion", value)

    @builtins.property
    @jsii.member(jsii_name="computeEnableHt")
    def compute_enable_ht(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        computeEnableHt: Specifies whether the compute nodes support hyper-threading. Valid values:
        true: Hyper-threading is supported.
        false: Hyper-threading is not supported.
        Default value: true
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "computeEnableHt"))

    @compute_enable_ht.setter
    def compute_enable_ht(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d07de26c8a7c217859a0a87e930c2b6bc5169d5c9411d249203241db9b5308f6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "computeEnableHt", value)

    @builtins.property
    @jsii.member(jsii_name="computeSpotPriceLimit")
    def compute_spot_price_limit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "computeSpotPriceLimit"))

    @compute_spot_price_limit.setter
    def compute_spot_price_limit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__84d101d934cfec211821e325182d34e8baa1936a1449a8669cc2f8f38101c118)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "computeSpotPriceLimit", value)

    @builtins.property
    @jsii.member(jsii_name="computeSpotStrategy")
    def compute_spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "computeSpotStrategy"))

    @compute_spot_strategy.setter
    def compute_spot_strategy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__04fd17506be7e28b16c12e89a9989b5f52c377a549ef3c99620eeeabe84d0831)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "computeSpotStrategy", value)

    @builtins.property
    @jsii.member(jsii_name="deployMode")
    def deploy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        deployMode: The mode in which the cluster is deployed. Valid values:
        Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
        Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed.
        Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed.
        Default value: Standard
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deployMode"))

    @deploy_mode.setter
    def deploy_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67e0069b30be5334aca0e38f3140a3bb6220a51cb3247cd23a9a57ce1e8bea87)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deployMode", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Cluster description, 2 to 128 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3fb252a4810d5f659209965c392b66698435db4866f405a09a97112ddd7d22cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="ecsChargeType")
    def ecs_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ecsChargeType"))

    @ecs_charge_type.setter
    def ecs_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cad091f7522b589ac02ee3e7f489e78f4a87f1e9684cfa27caf80ebbb3d6f082)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="ecsOrderManagerCount")
    def ecs_order_manager_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ecsOrderManagerCount: Control node number can be 1, 2
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ecsOrderManagerCount"))

    @ecs_order_manager_count.setter
    def ecs_order_manager_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0ab1df340496c9abd4a315fcd9f0a2b9c0f38bb2e8649d419da5c3f271f61e78)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsOrderManagerCount", value)

    @builtins.property
    @jsii.member(jsii_name="ehpcVersion")
    def ehpc_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ehpcVersion: The version of E-HPC. By default, the parameter is set to the latest version number.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ehpcVersion"))

    @ehpc_version.setter
    def ehpc_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81c960b8eb91fb2154c762da4a1825bfce99419896f27d82d6c33101c50dc3a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ehpcVersion", value)

    @builtins.property
    @jsii.member(jsii_name="haEnable")
    def ha_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        haEnable: Specifies whether to enable the high availability feature. Valid values:
        true: enables the high availability feature
        false: disables the high availability feature
        Default value: false
        Note If high availability is enabled, primary management nodes and secondary management nodes are used.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "haEnable"))

    @ha_enable.setter
    def ha_enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a676bb10dbf7fb79da1681e849e71ea0dc4ccead98b07e97d026b61a8b8070a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "haEnable", value)

    @builtins.property
    @jsii.member(jsii_name="imageId")
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag; if self, others, or marketplace, ImageId is mandatory.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageId"))

    @image_id.setter
    def image_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c93f309f1b47355df4b0e5b95d509eb5b73804d2feefa1efa7f6d43578d1ab1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageId", value)

    @builtins.property
    @jsii.member(jsii_name="imageOwnerAlias")
    def image_owner_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageOwnerAlias: Mirror type: system, self, others or marketplace
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageOwnerAlias"))

    @image_owner_alias.setter
    def image_owner_alias(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e51df2fc113d1cf59a2222418e5e4076bba1fd8e6a8be952f2c8f36178e3724)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageOwnerAlias", value)

    @builtins.property
    @jsii.member(jsii_name="inputFileUrl")
    def input_file_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "inputFileUrl"))

    @input_file_url.setter
    def input_file_url(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a736d2f2f170307b01546fb9e719e74a29746621c6c4eff24dfb0e258d2118ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "inputFileUrl", value)

    @builtins.property
    @jsii.member(jsii_name="isComputeEss")
    def is_compute_ess(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isComputeEss: Specifies whether to enable auto scaling. Valid values:
        true: enables auto scaling
        false: disables auto scaling
        Default value: false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isComputeEss"))

    @is_compute_ess.setter
    def is_compute_ess(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe23634f9a834032a4e7a6e5fe4bb4fc2e6393a81a873f0291c5ada7bb5f7ab7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isComputeEss", value)

    @builtins.property
    @jsii.member(jsii_name="jobQueue")
    def job_queue(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: jobQueue: 	The queue to which the compute nodes are added.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "jobQueue"))

    @job_queue.setter
    def job_queue(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0651dba12f1f67b4544fbc0b421a29b0b29e2b725d212699a2e1c036b4a35b2e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "jobQueue", value)

    @builtins.property
    @jsii.member(jsii_name="keyPairName")
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPairName: Key pair name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keyPairName"))

    @key_pair_name.setter
    def key_pair_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__79d17d537aa8fc0fec83073478f30c897043ef2a67b66d3bfca3164af45b4e72)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyPairName", value)

    @builtins.property
    @jsii.member(jsii_name="networkInterfaceTrafficMode")
    def network_interface_traffic_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        networkInterfaceTrafficMode: Communication mode of an elastic NIC. Value values:

        - **Standard**: The TCP communication mode is used.
        - **HighPerformance**: Enables the Elastic RDMA Interface (ERI) and uses the RDMA communication mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "networkInterfaceTrafficMode"))

    @network_interface_traffic_mode.setter
    def network_interface_traffic_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bfb99fc70b338d879cdd49a21ce20ef2506bbca4d30386a86e6c1586e4361f27)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkInterfaceTrafficMode", value)

    @builtins.property
    @jsii.member(jsii_name="osTag")
    def os_tag(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: osTag: Operating system image tag. You can call ListImages API to query.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "osTag"))

    @os_tag.setter
    def os_tag(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae6a7faa5e4c00d6e2a830f72ebcb41a67489d2ed99706e6c22289abeb95d234)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "osTag", value)

    @builtins.property
    @jsii.member(jsii_name="password")
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__657e009d65230e887e3a27f351cf58104406994874996458415b6700cfcf8bd3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "password", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The purchase of long resources, units: week / month / year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23fb6535c6582e9aafae54321bd979c9eb430b0ca2547d51324d5f971c25b97b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodUnit: The purchase of long-resources unit. Alternatively value Week / Month / year.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a714bdfa0670bcb42c0993c5737a90af245b5930f4fd23d562c5311bd4d70f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="postInstallScript")
    def post_install_script(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.PostInstallScriptProperty"]]]]:
        '''
        :Property: postInstallScript:
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.PostInstallScriptProperty"]]]], jsii.get(self, "postInstallScript"))

    @post_install_script.setter
    def post_install_script(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.PostInstallScriptProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34de0b293259def086d741f7c0e7dab754bceb4a2ec89ed01e9fa055c0598090)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "postInstallScript", value)

    @builtins.property
    @jsii.member(jsii_name="ramNodeTypes")
    def ram_node_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        ramNodeTypes: When authorizing instance configuration, the node type to which the RAM role is bound.
        When the value of DeployMode is Standard, the value range: scheduler, account, login, compute.
        When the value of DeployMode is Simple, the value range: manager, login, compute.
        When the value of DeployMode is Tiny, the value range: manager, compute.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "ramNodeTypes"))

    @ram_node_types.setter
    def ram_node_types(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__edd563d558f549cca80e3f6a0c2ef3a5b19a4cec7fde5e3ce2ee5a97ac9978da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ramNodeTypes", value)

    @builtins.property
    @jsii.member(jsii_name="ramRoleName")
    def ram_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ramRoleName: The name of the Resource Access Management (RAM) role.
        You can call the ListRoles operation provided by RAM to query the created RAM roles.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ramRoleName"))

    @ram_role_name.setter
    def ram_role_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52fef3915c83026696f5c5ea99b7990c22ababa1660825e622cbfbc4922120ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ramRoleName", value)

    @builtins.property
    @jsii.member(jsii_name="remoteDirectory")
    def remote_directory(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "remoteDirectory"))

    @remote_directory.setter
    def remote_directory(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5bbebac803f7af975e311d295ca881a957d7c0c4149b219ad45beb2ad3b64e59)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "remoteDirectory", value)

    @builtins.property
    @jsii.member(jsii_name="remoteVisEnable")
    def remote_vis_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        remoteVisEnable: Specifies whether to enable Virtual Network Computing (VNC). Valid values:
        true: enables VNC
        false: disables VNC
        Default value: false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "remoteVisEnable"))

    @remote_vis_enable.setter
    def remote_vis_enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__308bc690fb0ad5800270e9d466ab5420d3f7722b1b4e13f2b71d21d5401a059f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "remoteVisEnable", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the resource group.
        You can call the ListResourceGroups operation to obtain the ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74105de73744288f5040a4c9e0c31bb5b13dc782555399eb665e4216f46a92ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="sccClusterId")
    def scc_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sccClusterId"))

    @scc_cluster_id.setter
    def scc_cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c3d96c1e3c2250eb0bc9b2d51104f98f51032e52618818071381e2a0c063303)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sccClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="schedulerType")
    def scheduler_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        schedulerType: The type of the scheduler. Valid values:
        pbs
        slurm
        opengridscheduler
        deadline
        Default value: pbs
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "schedulerType"))

    @scheduler_type.setter
    def scheduler_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b54659551ac4a234501cd61490320d484daaa2d21d1549fc681f0114cb3c80ed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "schedulerType", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: Security group ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a11181dd640ee823b32f36010f92d14c6edd2b0a78370e03063c55376ed9971f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupName")
    def security_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. Format Requirements Reference ECS security group name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupName"))

    @security_group_name.setter
    def security_group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01f2c0581699ece08c4bdba215dfa9c1b8ce57f153b3b2c52aa8acbe7a79302f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="systemDiskLevel")
    def system_disk_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        systemDiskLevel: The performance level of the ESSD that is created as the system disk. Valid values:
        PL0: A single ESSD can deliver up to 10,000 input/output operations per second (IOPS) of random read/write.
        PL1: A single ESSD can deliver up to 50,000 IOPS of random read/write.
        PL2: A single ESSD can deliver up to 100,000 IOPS of random read/write.
        PL3: A single ESSD can deliver up to 1,000,000 IOPS of random read/write.
        Default value: PL1
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "systemDiskLevel"))

    @system_disk_level.setter
    def system_disk_level(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c1ae049b76b16c2525dba7017ddafdaec286e526d82fab2b4f9ccaff1a8149c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "systemDiskLevel", value)

    @builtins.property
    @jsii.member(jsii_name="systemDiskSize")
    def system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        systemDiskSize: The size of the system disk. Unit: GB
        Valid values: 40 to 500
        Default value: 40
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "systemDiskSize"))

    @system_disk_size.setter
    def system_disk_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0de2102d5cb73b2217c541186305c8cd330008ce9d6a598e71710e4b225b3295)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "systemDiskSize", value)

    @builtins.property
    @jsii.member(jsii_name="systemDiskType")
    def system_disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        systemDiskType: The type of the system disk. Valid values:
        cloud_efficiency: ultra disk.
        cloud_ssd: SSD.
        cloud_essd: ESSD.
        Default value: cloud_ssd
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "systemDiskType"))

    @system_disk_type.setter
    def system_disk_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__15b80086c31a65901fa49e921bf5deb821b8b056f5531161e8e895e5f4e50a65)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "systemDiskType", value)

    @builtins.property
    @jsii.member(jsii_name="volumeId")
    def volume_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: volumeId: The ID of the file system. If you leave the parameter empty, a Performance NAS file system is created by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "volumeId"))

    @volume_id.setter
    def volume_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__feb25ac143d8c65bf76f43af5b2e71a82e63613a09cddc781de8dc56ba26cae1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "volumeId", value)

    @builtins.property
    @jsii.member(jsii_name="volumeMountpoint")
    def volume_mountpoint(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        volumeMountpoint: The mount target of the file system. Take note of the following information:
        If you do not specify the VolumeId parameter, you can leave the VolumeMountpoint parameter empty. A mount target is created by default.
        If you specify the VolumeId parameter, the VolumeMountpoint parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "volumeMountpoint"))

    @volume_mountpoint.setter
    def volume_mountpoint(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__191c0053df3422e2951f31fe3030aa6c11088cf00ca8f7f46b326f1e34cdd55d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "volumeMountpoint", value)

    @builtins.property
    @jsii.member(jsii_name="volumeProtocol")
    def volume_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        volumeProtocol: The type of the protocol that is used by the file system. Valid values:
        nfs
        smb
        Default value: nfs
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "volumeProtocol"))

    @volume_protocol.setter
    def volume_protocol(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a57c8244dacb5aa00bb77fb51c75e19b43d48a5b270fae9bafd68041efe0c883)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "volumeProtocol", value)

    @builtins.property
    @jsii.member(jsii_name="volumeType")
    def volume_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: volumeType: The type of the shared storage. Only Apsara File Storage nas file systems are supported.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "volumeType"))

    @volume_type.setter
    def volume_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2dec30dc8c5046fb2006cea3dd3c5e2e9828cdd220ed1c01737d958494b39ef5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "volumeType", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) to which the E-HPC cluster belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd3e234a35f9d55bfe5f5aae3488605895e582893604b831cf311284e134172a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="withoutElasticIp")
    def without_elastic_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP). Default value: false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "withoutElasticIp"))

    @without_elastic_ip.setter
    def without_elastic_ip(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c3c0168ad4a9ee650b34b52f9e920272235e20c6d8cf780b3fddf51773dfd24)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "withoutElasticIp", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: Available area ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42d21b2922e8df9ad551fc1fb204f7b5763731844edff20520b5e67b700ab88a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosCluster.AdditionalVolumesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "local_directory": "localDirectory",
            "volume_id": "volumeId",
            "volume_mountpoint": "volumeMountpoint",
            "job_queue": "jobQueue",
            "location": "location",
            "remote_directory": "remoteDirectory",
            "volume_protocol": "volumeProtocol",
            "volume_type": "volumeType",
        },
    )
    class AdditionalVolumesProperty:
        def __init__(
            self,
            *,
            local_directory: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            volume_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            volume_mountpoint: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            job_queue: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            location: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            remote_directory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            volume_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            volume_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param local_directory: 
            :param volume_id: 
            :param volume_mountpoint: 
            :param job_queue: 
            :param location: 
            :param remote_directory: 
            :param volume_protocol: 
            :param volume_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__078f69ae7a13d416f6d6917f77c4c80846f7ad6897a4b5a55b4ce01acbffac2c)
                check_type(argname="argument local_directory", value=local_directory, expected_type=type_hints["local_directory"])
                check_type(argname="argument volume_id", value=volume_id, expected_type=type_hints["volume_id"])
                check_type(argname="argument volume_mountpoint", value=volume_mountpoint, expected_type=type_hints["volume_mountpoint"])
                check_type(argname="argument job_queue", value=job_queue, expected_type=type_hints["job_queue"])
                check_type(argname="argument location", value=location, expected_type=type_hints["location"])
                check_type(argname="argument remote_directory", value=remote_directory, expected_type=type_hints["remote_directory"])
                check_type(argname="argument volume_protocol", value=volume_protocol, expected_type=type_hints["volume_protocol"])
                check_type(argname="argument volume_type", value=volume_type, expected_type=type_hints["volume_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "local_directory": local_directory,
                "volume_id": volume_id,
                "volume_mountpoint": volume_mountpoint,
            }
            if job_queue is not None:
                self._values["job_queue"] = job_queue
            if location is not None:
                self._values["location"] = location
            if remote_directory is not None:
                self._values["remote_directory"] = remote_directory
            if volume_protocol is not None:
                self._values["volume_protocol"] = volume_protocol
            if volume_type is not None:
                self._values["volume_type"] = volume_type

        @builtins.property
        def local_directory(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: localDirectory: The local directory to which the additional file system is mounted.
            '''
            result = self._values.get("local_directory")
            assert result is not None, "Required property 'local_directory' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def volume_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: volumeId: The ID of the additional file system.
            '''
            result = self._values.get("volume_id")
            assert result is not None, "Required property 'volume_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def volume_mountpoint(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: volumeMountpoint: The mount target of the additional file system.
            '''
            result = self._values.get("volume_mountpoint")
            assert result is not None, "Required property 'volume_mountpoint' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def job_queue(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: jobQueue: The queue of the nodes to which the additional file system is attached.
            '''
            result = self._values.get("job_queue")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def location(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: location: The type of the cluster. Valid value: PublicCloud.
            '''
            result = self._values.get("location")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def remote_directory(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: remoteDirectory: The remote directory to which the additional file system is mounted.
            '''
            result = self._values.get("remote_directory")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def volume_protocol(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            volumeProtocol: The type of the protocol that is used by the additional file system. Valid values:
            nfs
            smb
            Default value: nfs
            '''
            result = self._values.get("volume_protocol")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def volume_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: volumeType: The type of the additional shared storage. Only nas file systems are supported.
            '''
            result = self._values.get("volume_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AdditionalVolumesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosCluster.ApplicationProperty",
        jsii_struct_bases=[],
        name_mapping={"tag": "tag"},
    )
    class ApplicationProperty:
        def __init__(
            self,
            *,
            tag: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param tag: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__91f667542426b4e96f766ac0d0ce1a1c60e5a9f5ffd3fff89c86ea88186ea8c9)
                check_type(argname="argument tag", value=tag, expected_type=type_hints["tag"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "tag": tag,
            }

        @builtins.property
        def tag(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: tag: Application software tag (SoftwareTag), for example OpenMPI_11.1.
            '''
            result = self._values.get("tag")
            assert result is not None, "Required property 'tag' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ApplicationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosCluster.PostInstallScriptProperty",
        jsii_struct_bases=[],
        name_mapping={"args": "args", "url": "url"},
    )
    class PostInstallScriptProperty:
        def __init__(
            self,
            *,
            args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param args: 
            :param url: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0418a5eec8fe94e92a82f369e91ee5c99a421ee24d25814a12e30b6972af9205)
                check_type(argname="argument args", value=args, expected_type=type_hints["args"])
                check_type(argname="argument url", value=url, expected_type=type_hints["url"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if args is not None:
                self._values["args"] = args
            if url is not None:
                self._values["url"] = url

        @builtins.property
        def args(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: args: N-th (n numbered starting from 1, you can have multiple, maximum 16) execution parameters after the installation script.
            '''
            result = self._values.get("args")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def url(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: url: N-th (n numbered starting with 1, can have multiple, maximum 16) after installation script Download.
            '''
            result = self._values.get("url")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PostInstallScriptProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ehpc.RosClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "ecs_order_compute_count": "ecsOrderComputeCount",
        "ecs_order_compute_instance_type": "ecsOrderComputeInstanceType",
        "ecs_order_login_count": "ecsOrderLoginCount",
        "ecs_order_login_instance_type": "ecsOrderLoginInstanceType",
        "ecs_order_manager_instance_type": "ecsOrderManagerInstanceType",
        "name": "name",
        "v_switch_id": "vSwitchId",
        "account_type": "accountType",
        "additional_volumes": "additionalVolumes",
        "application": "application",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "client_version": "clientVersion",
        "compute_enable_ht": "computeEnableHt",
        "compute_spot_price_limit": "computeSpotPriceLimit",
        "compute_spot_strategy": "computeSpotStrategy",
        "deploy_mode": "deployMode",
        "description": "description",
        "ecs_charge_type": "ecsChargeType",
        "ecs_order_manager_count": "ecsOrderManagerCount",
        "ehpc_version": "ehpcVersion",
        "ha_enable": "haEnable",
        "image_id": "imageId",
        "image_owner_alias": "imageOwnerAlias",
        "input_file_url": "inputFileUrl",
        "is_compute_ess": "isComputeEss",
        "job_queue": "jobQueue",
        "key_pair_name": "keyPairName",
        "network_interface_traffic_mode": "networkInterfaceTrafficMode",
        "os_tag": "osTag",
        "password": "password",
        "period": "period",
        "period_unit": "periodUnit",
        "post_install_script": "postInstallScript",
        "ram_node_types": "ramNodeTypes",
        "ram_role_name": "ramRoleName",
        "remote_directory": "remoteDirectory",
        "remote_vis_enable": "remoteVisEnable",
        "resource_group_id": "resourceGroupId",
        "scc_cluster_id": "sccClusterId",
        "scheduler_type": "schedulerType",
        "security_group_id": "securityGroupId",
        "security_group_name": "securityGroupName",
        "system_disk_level": "systemDiskLevel",
        "system_disk_size": "systemDiskSize",
        "system_disk_type": "systemDiskType",
        "volume_id": "volumeId",
        "volume_mountpoint": "volumeMountpoint",
        "volume_protocol": "volumeProtocol",
        "volume_type": "volumeType",
        "vpc_id": "vpcId",
        "without_elastic_ip": "withoutElasticIp",
        "zone_id": "zoneId",
    },
)
class RosClusterProps:
    def __init__(
        self,
        *,
        ecs_order_compute_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ecs_order_compute_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ecs_order_login_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ecs_order_login_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ecs_order_manager_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        additional_volumes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.AdditionalVolumesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        application: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.ApplicationProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        client_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        compute_enable_ht: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        compute_spot_price_limit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        compute_spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deploy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_order_manager_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ehpc_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ha_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_owner_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        input_file_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_compute_ess: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        job_queue: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        network_interface_traffic_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        os_tag: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        post_install_script: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.PostInstallScriptProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ram_node_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ram_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        remote_directory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        remote_vis_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scc_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scheduler_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        volume_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        volume_mountpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        volume_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        volume_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        without_elastic_ip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-cluster

        :param ecs_order_compute_count: 
        :param ecs_order_compute_instance_type: 
        :param ecs_order_login_count: 
        :param ecs_order_login_instance_type: 
        :param ecs_order_manager_instance_type: 
        :param name: 
        :param v_switch_id: 
        :param account_type: 
        :param additional_volumes: 
        :param application: 
        :param auto_renew: 
        :param auto_renew_period: 
        :param client_version: 
        :param compute_enable_ht: 
        :param compute_spot_price_limit: 
        :param compute_spot_strategy: 
        :param deploy_mode: 
        :param description: 
        :param ecs_charge_type: 
        :param ecs_order_manager_count: 
        :param ehpc_version: 
        :param ha_enable: 
        :param image_id: 
        :param image_owner_alias: 
        :param input_file_url: 
        :param is_compute_ess: 
        :param job_queue: 
        :param key_pair_name: 
        :param network_interface_traffic_mode: 
        :param os_tag: 
        :param password: 
        :param period: 
        :param period_unit: 
        :param post_install_script: 
        :param ram_node_types: 
        :param ram_role_name: 
        :param remote_directory: 
        :param remote_vis_enable: 
        :param resource_group_id: 
        :param scc_cluster_id: 
        :param scheduler_type: 
        :param security_group_id: 
        :param security_group_name: 
        :param system_disk_level: 
        :param system_disk_size: 
        :param system_disk_type: 
        :param volume_id: 
        :param volume_mountpoint: 
        :param volume_protocol: 
        :param volume_type: 
        :param vpc_id: 
        :param without_elastic_ip: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9544891090de6cbb7ca4fdd01d92448fdfc3c5efc0f3980d28ff825c1725bef)
            check_type(argname="argument ecs_order_compute_count", value=ecs_order_compute_count, expected_type=type_hints["ecs_order_compute_count"])
            check_type(argname="argument ecs_order_compute_instance_type", value=ecs_order_compute_instance_type, expected_type=type_hints["ecs_order_compute_instance_type"])
            check_type(argname="argument ecs_order_login_count", value=ecs_order_login_count, expected_type=type_hints["ecs_order_login_count"])
            check_type(argname="argument ecs_order_login_instance_type", value=ecs_order_login_instance_type, expected_type=type_hints["ecs_order_login_instance_type"])
            check_type(argname="argument ecs_order_manager_instance_type", value=ecs_order_manager_instance_type, expected_type=type_hints["ecs_order_manager_instance_type"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument account_type", value=account_type, expected_type=type_hints["account_type"])
            check_type(argname="argument additional_volumes", value=additional_volumes, expected_type=type_hints["additional_volumes"])
            check_type(argname="argument application", value=application, expected_type=type_hints["application"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument client_version", value=client_version, expected_type=type_hints["client_version"])
            check_type(argname="argument compute_enable_ht", value=compute_enable_ht, expected_type=type_hints["compute_enable_ht"])
            check_type(argname="argument compute_spot_price_limit", value=compute_spot_price_limit, expected_type=type_hints["compute_spot_price_limit"])
            check_type(argname="argument compute_spot_strategy", value=compute_spot_strategy, expected_type=type_hints["compute_spot_strategy"])
            check_type(argname="argument deploy_mode", value=deploy_mode, expected_type=type_hints["deploy_mode"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument ecs_charge_type", value=ecs_charge_type, expected_type=type_hints["ecs_charge_type"])
            check_type(argname="argument ecs_order_manager_count", value=ecs_order_manager_count, expected_type=type_hints["ecs_order_manager_count"])
            check_type(argname="argument ehpc_version", value=ehpc_version, expected_type=type_hints["ehpc_version"])
            check_type(argname="argument ha_enable", value=ha_enable, expected_type=type_hints["ha_enable"])
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument image_owner_alias", value=image_owner_alias, expected_type=type_hints["image_owner_alias"])
            check_type(argname="argument input_file_url", value=input_file_url, expected_type=type_hints["input_file_url"])
            check_type(argname="argument is_compute_ess", value=is_compute_ess, expected_type=type_hints["is_compute_ess"])
            check_type(argname="argument job_queue", value=job_queue, expected_type=type_hints["job_queue"])
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
            check_type(argname="argument network_interface_traffic_mode", value=network_interface_traffic_mode, expected_type=type_hints["network_interface_traffic_mode"])
            check_type(argname="argument os_tag", value=os_tag, expected_type=type_hints["os_tag"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument post_install_script", value=post_install_script, expected_type=type_hints["post_install_script"])
            check_type(argname="argument ram_node_types", value=ram_node_types, expected_type=type_hints["ram_node_types"])
            check_type(argname="argument ram_role_name", value=ram_role_name, expected_type=type_hints["ram_role_name"])
            check_type(argname="argument remote_directory", value=remote_directory, expected_type=type_hints["remote_directory"])
            check_type(argname="argument remote_vis_enable", value=remote_vis_enable, expected_type=type_hints["remote_vis_enable"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument scc_cluster_id", value=scc_cluster_id, expected_type=type_hints["scc_cluster_id"])
            check_type(argname="argument scheduler_type", value=scheduler_type, expected_type=type_hints["scheduler_type"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument security_group_name", value=security_group_name, expected_type=type_hints["security_group_name"])
            check_type(argname="argument system_disk_level", value=system_disk_level, expected_type=type_hints["system_disk_level"])
            check_type(argname="argument system_disk_size", value=system_disk_size, expected_type=type_hints["system_disk_size"])
            check_type(argname="argument system_disk_type", value=system_disk_type, expected_type=type_hints["system_disk_type"])
            check_type(argname="argument volume_id", value=volume_id, expected_type=type_hints["volume_id"])
            check_type(argname="argument volume_mountpoint", value=volume_mountpoint, expected_type=type_hints["volume_mountpoint"])
            check_type(argname="argument volume_protocol", value=volume_protocol, expected_type=type_hints["volume_protocol"])
            check_type(argname="argument volume_type", value=volume_type, expected_type=type_hints["volume_type"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument without_elastic_ip", value=without_elastic_ip, expected_type=type_hints["without_elastic_ip"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ecs_order_compute_count": ecs_order_compute_count,
            "ecs_order_compute_instance_type": ecs_order_compute_instance_type,
            "ecs_order_login_count": ecs_order_login_count,
            "ecs_order_login_instance_type": ecs_order_login_instance_type,
            "ecs_order_manager_instance_type": ecs_order_manager_instance_type,
            "name": name,
            "v_switch_id": v_switch_id,
        }
        if account_type is not None:
            self._values["account_type"] = account_type
        if additional_volumes is not None:
            self._values["additional_volumes"] = additional_volumes
        if application is not None:
            self._values["application"] = application
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if client_version is not None:
            self._values["client_version"] = client_version
        if compute_enable_ht is not None:
            self._values["compute_enable_ht"] = compute_enable_ht
        if compute_spot_price_limit is not None:
            self._values["compute_spot_price_limit"] = compute_spot_price_limit
        if compute_spot_strategy is not None:
            self._values["compute_spot_strategy"] = compute_spot_strategy
        if deploy_mode is not None:
            self._values["deploy_mode"] = deploy_mode
        if description is not None:
            self._values["description"] = description
        if ecs_charge_type is not None:
            self._values["ecs_charge_type"] = ecs_charge_type
        if ecs_order_manager_count is not None:
            self._values["ecs_order_manager_count"] = ecs_order_manager_count
        if ehpc_version is not None:
            self._values["ehpc_version"] = ehpc_version
        if ha_enable is not None:
            self._values["ha_enable"] = ha_enable
        if image_id is not None:
            self._values["image_id"] = image_id
        if image_owner_alias is not None:
            self._values["image_owner_alias"] = image_owner_alias
        if input_file_url is not None:
            self._values["input_file_url"] = input_file_url
        if is_compute_ess is not None:
            self._values["is_compute_ess"] = is_compute_ess
        if job_queue is not None:
            self._values["job_queue"] = job_queue
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name
        if network_interface_traffic_mode is not None:
            self._values["network_interface_traffic_mode"] = network_interface_traffic_mode
        if os_tag is not None:
            self._values["os_tag"] = os_tag
        if password is not None:
            self._values["password"] = password
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if post_install_script is not None:
            self._values["post_install_script"] = post_install_script
        if ram_node_types is not None:
            self._values["ram_node_types"] = ram_node_types
        if ram_role_name is not None:
            self._values["ram_role_name"] = ram_role_name
        if remote_directory is not None:
            self._values["remote_directory"] = remote_directory
        if remote_vis_enable is not None:
            self._values["remote_vis_enable"] = remote_vis_enable
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if scc_cluster_id is not None:
            self._values["scc_cluster_id"] = scc_cluster_id
        if scheduler_type is not None:
            self._values["scheduler_type"] = scheduler_type
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if security_group_name is not None:
            self._values["security_group_name"] = security_group_name
        if system_disk_level is not None:
            self._values["system_disk_level"] = system_disk_level
        if system_disk_size is not None:
            self._values["system_disk_size"] = system_disk_size
        if system_disk_type is not None:
            self._values["system_disk_type"] = system_disk_type
        if volume_id is not None:
            self._values["volume_id"] = volume_id
        if volume_mountpoint is not None:
            self._values["volume_mountpoint"] = volume_mountpoint
        if volume_protocol is not None:
            self._values["volume_protocol"] = volume_protocol
        if volume_type is not None:
            self._values["volume_type"] = volume_type
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if without_elastic_ip is not None:
            self._values["without_elastic_ip"] = without_elastic_ip
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def ecs_order_compute_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ecsOrderComputeCount: Computing node number, which ranges from: 0-99.
        '''
        result = self._values.get("ecs_order_compute_count")
        assert result is not None, "Required property 'ecs_order_compute_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ecs_order_compute_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ecsOrderComputeInstanceType: Cluster computing node instance specifications.
        '''
        result = self._values.get("ecs_order_compute_instance_type")
        assert result is not None, "Required property 'ecs_order_compute_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ecs_order_login_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ecsOrderLoginCount: Login node number can only be 1.
        '''
        result = self._values.get("ecs_order_login_count")
        assert result is not None, "Required property 'ecs_order_login_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ecs_order_login_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ecsOrderLoginInstanceType: Log cluster node instance specifications.
        '''
        result = self._values.get("ecs_order_login_instance_type")
        assert result is not None, "Required property 'ecs_order_login_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ecs_order_manager_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ecsOrderManagerInstanceType: Cluster control node instance specifications.
        '''
        result = self._values.get("ecs_order_manager_instance_type")
        assert result is not None, "Required property 'ecs_order_manager_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: VPC in switch ID. Products currently only supports VPC network.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountType: The service type of the domain account. Valid values:
        nis
        ldap
        Default value: nis
        '''
        result = self._values.get("account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def additional_volumes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.AdditionalVolumesProperty]]]]:
        '''
        :Property: additionalVolumes:
        '''
        result = self._values.get("additional_volumes")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.AdditionalVolumesProperty]]]], result)

    @builtins.property
    def application(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.ApplicationProperty]]]]:
        '''
        :Property: application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
        '''
        result = self._values.get("application")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.ApplicationProperty]]]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: true: automatic renewals; false: no automatic renewals.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def client_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clientVersion: The version of the E-HPC client. By default, the parameter is set to the latest version number.
        You can call the ListCurrentClientVersion operation to query the current version of the E-HPC client.
        '''
        result = self._values.get("client_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def compute_enable_ht(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        computeEnableHt: Specifies whether the compute nodes support hyper-threading. Valid values:
        true: Hyper-threading is supported.
        false: Hyper-threading is not supported.
        Default value: true
        '''
        result = self._values.get("compute_enable_ht")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def compute_spot_price_limit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
        '''
        result = self._values.get("compute_spot_price_limit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def compute_spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo
        '''
        result = self._values.get("compute_spot_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deploy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        deployMode: The mode in which the cluster is deployed. Valid values:
        Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
        Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed.
        Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed.
        Default value: Standard
        '''
        result = self._values.get("deploy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Cluster description, 2 to 128 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
        '''
        result = self._values.get("ecs_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_order_manager_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ecsOrderManagerCount: Control node number can be 1, 2
        '''
        result = self._values.get("ecs_order_manager_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ehpc_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ehpcVersion: The version of E-HPC. By default, the parameter is set to the latest version number.
        '''
        result = self._values.get("ehpc_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ha_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        haEnable: Specifies whether to enable the high availability feature. Valid values:
        true: enables the high availability feature
        false: disables the high availability feature
        Default value: false
        Note If high availability is enabled, primary management nodes and secondary management nodes are used.
        '''
        result = self._values.get("ha_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag; if self, others, or marketplace, ImageId is mandatory.
        '''
        result = self._values.get("image_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_owner_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageOwnerAlias: Mirror type: system, self, others or marketplace
        '''
        result = self._values.get("image_owner_alias")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def input_file_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.
        '''
        result = self._values.get("input_file_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_compute_ess(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isComputeEss: Specifies whether to enable auto scaling. Valid values:
        true: enables auto scaling
        false: disables auto scaling
        Default value: false
        '''
        result = self._values.get("is_compute_ess")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def job_queue(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: jobQueue: 	The queue to which the compute nodes are added.
        '''
        result = self._values.get("job_queue")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPairName: Key pair name.
        '''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def network_interface_traffic_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        networkInterfaceTrafficMode: Communication mode of an elastic NIC. Value values:

        - **Standard**: The TCP communication mode is used.
        - **HighPerformance**: Enables the Elastic RDMA Interface (ERI) and uses the RDMA communication mode.
        '''
        result = self._values.get("network_interface_traffic_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def os_tag(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: osTag: Operating system image tag. You can call ListImages API to query.
        '''
        result = self._values.get("os_tag")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
        '''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The purchase of long resources, units: week / month / year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodUnit: The purchase of long-resources unit. Alternatively value Week / Month / year.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def post_install_script(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.PostInstallScriptProperty]]]]:
        '''
        :Property: postInstallScript:
        '''
        result = self._values.get("post_install_script")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.PostInstallScriptProperty]]]], result)

    @builtins.property
    def ram_node_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        ramNodeTypes: When authorizing instance configuration, the node type to which the RAM role is bound.
        When the value of DeployMode is Standard, the value range: scheduler, account, login, compute.
        When the value of DeployMode is Simple, the value range: manager, login, compute.
        When the value of DeployMode is Tiny, the value range: manager, compute.
        '''
        result = self._values.get("ram_node_types")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def ram_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ramRoleName: The name of the Resource Access Management (RAM) role.
        You can call the ListRoles operation provided by RAM to query the created RAM roles.
        '''
        result = self._values.get("ram_role_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def remote_directory(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
        '''
        result = self._values.get("remote_directory")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def remote_vis_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        remoteVisEnable: Specifies whether to enable Virtual Network Computing (VNC). Valid values:
        true: enables VNC
        false: disables VNC
        Default value: false
        '''
        result = self._values.get("remote_vis_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the resource group.
        You can call the ListResourceGroups operation to obtain the ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scc_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
        '''
        result = self._values.get("scc_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scheduler_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        schedulerType: The type of the scheduler. Valid values:
        pbs
        slurm
        opengridscheduler
        deadline
        Default value: pbs
        '''
        result = self._values.get("scheduler_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: Security group ID.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. Format Requirements Reference ECS security group name.
        '''
        result = self._values.get("security_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        systemDiskLevel: The performance level of the ESSD that is created as the system disk. Valid values:
        PL0: A single ESSD can deliver up to 10,000 input/output operations per second (IOPS) of random read/write.
        PL1: A single ESSD can deliver up to 50,000 IOPS of random read/write.
        PL2: A single ESSD can deliver up to 100,000 IOPS of random read/write.
        PL3: A single ESSD can deliver up to 1,000,000 IOPS of random read/write.
        Default value: PL1
        '''
        result = self._values.get("system_disk_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        systemDiskSize: The size of the system disk. Unit: GB
        Valid values: 40 to 500
        Default value: 40
        '''
        result = self._values.get("system_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        systemDiskType: The type of the system disk. Valid values:
        cloud_efficiency: ultra disk.
        cloud_ssd: SSD.
        cloud_essd: ESSD.
        Default value: cloud_ssd
        '''
        result = self._values.get("system_disk_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def volume_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: volumeId: The ID of the file system. If you leave the parameter empty, a Performance NAS file system is created by default.
        '''
        result = self._values.get("volume_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def volume_mountpoint(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        volumeMountpoint: The mount target of the file system. Take note of the following information:
        If you do not specify the VolumeId parameter, you can leave the VolumeMountpoint parameter empty. A mount target is created by default.
        If you specify the VolumeId parameter, the VolumeMountpoint parameter is required.
        '''
        result = self._values.get("volume_mountpoint")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def volume_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        volumeProtocol: The type of the protocol that is used by the file system. Valid values:
        nfs
        smb
        Default value: nfs
        '''
        result = self._values.get("volume_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def volume_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: volumeType: The type of the shared storage. Only Apsara File Storage nas file systems are supported.
        '''
        result = self._values.get("volume_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) to which the E-HPC cluster belongs.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def without_elastic_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP). Default value: false
        '''
        result = self._values.get("without_elastic_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: Available area ID.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosClusterV2(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ehpc.RosClusterV2",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::EHPC::ClusterV2``, which is used to create a cluster in Elastic High Performance Computing (E-HPC) of the new version.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ClusterV2`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-clusterv2
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterV2Props", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c99fcb3d02927b82ba86f88943f88a4dac4582dfc273bffab860e175b92ee836)
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
            type_hints = typing.get_type_hints(_typecheckingstub__106beb202ce48f7eae9704b8ce0fa78e50cc66f03e75032a9ae82dfaf54a9c62)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterId: Cluster Id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="clusterName")
    def cluster_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterName: Cluster name. The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterName"))

    @cluster_name.setter
    def cluster_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06b6abf6c5c06a39d461151257ad6e3fcaa14d67f1799b0e83e20ebe13f151a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c68026839f428595e644cbf93b028e96167b667c748bef2102c4f0dba9e77b6e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="sharedStorages")
    def shared_storages(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.SharedStoragesProperty"]]]:
        '''
        :Property: sharedStorages: The list of shared storage configurations.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.SharedStoragesProperty"]]], jsii.get(self, "sharedStorages"))

    @shared_storages.setter
    def shared_storages(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.SharedStoragesProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3802a4b49330d1cb92ab943722d851078e0fea00b373a849cbd7c150c3e25874)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sharedStorages", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC used by the cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01e4ab9bc83542a351ab637b53db67333dd686a1a219b586cc7ee8f957b172cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The ID of the VSwitch used by the cluster
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a402d62e8bd9bbddee18d1de69b806871db1266278dec06f503db4d4605570a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="additionalPackages")
    def additional_packages(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.AdditionalPackagesProperty"]]]]:
        '''
        :Property: additionalPackages: A list of software to install on the cluster. Range from 0 to 10.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.AdditionalPackagesProperty"]]]], jsii.get(self, "additionalPackages"))

    @additional_packages.setter
    def additional_packages(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.AdditionalPackagesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b43219aaba8e0fda1c4883eb6796430139fb41e53b3ab343f8a4eb79d490ff5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "additionalPackages", value)

    @builtins.property
    @jsii.member(jsii_name="addons")
    def addons(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.AddonsProperty"]]]]:
        '''
        :Property: addons: Cluster custom service component configuration to support only one component.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.AddonsProperty"]]]], jsii.get(self, "addons"))

    @addons.setter
    def addons(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.AddonsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29bc3b2e3a59a769f8526ae9eb1a85bca185e58978bd4665d5e18508bbe67bca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addons", value)

    @builtins.property
    @jsii.member(jsii_name="clientVersion")
    def client_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clientVersion: Cluster client version. By default, the latest version is used.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clientVersion"))

    @client_version.setter
    def client_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cde486f5a861db4af068b7c204b1cb17d9b15f92cb052e0a21d62dda34f5425e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clientVersion", value)

    @builtins.property
    @jsii.member(jsii_name="clusterCategory")
    def cluster_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clusterCategory: Cluster series. Valid values:

        - Standard: The standard version.
        - Serverless: Hosted version
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterCategory"))

    @cluster_category.setter
    def cluster_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__71481e6a2e18e4c1d22a816246d77fc95388148e12df560d108d36491ab7e20f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterCategory", value)

    @builtins.property
    @jsii.member(jsii_name="clusterCredentials")
    def cluster_credentials(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ClusterCredentialsProperty"]]:
        '''
        :Property: clusterCredentials: Security credentials for the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ClusterCredentialsProperty"]], jsii.get(self, "clusterCredentials"))

    @cluster_credentials.setter
    def cluster_credentials(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ClusterCredentialsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4461d52f86b0d1b2c697f484d443d1d3230fd33f6a21716f0f9144e70620807)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterCredentials", value)

    @builtins.property
    @jsii.member(jsii_name="clusterCustomConfiguration")
    def cluster_custom_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ClusterCustomConfigurationProperty"]]:
        '''
        :Property: clusterCustomConfiguration: Cluster post-processing scripts.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ClusterCustomConfigurationProperty"]], jsii.get(self, "clusterCustomConfiguration"))

    @cluster_custom_configuration.setter
    def cluster_custom_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ClusterCustomConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__56059e6a08f4bfc2399c4a04c1efbbc147c036783ed27f420ac50cd618ea3860)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterCustomConfiguration", value)

    @builtins.property
    @jsii.member(jsii_name="clusterDescription")
    def cluster_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterDescription: Cluster description. The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterDescription"))

    @cluster_description.setter
    def cluster_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de209a339fe1ce143ac9daf0a937e2bf8752d5b2ff9d145a75933b7b98538945)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterDescription", value)

    @builtins.property
    @jsii.member(jsii_name="clusterMode")
    def cluster_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clusterMode: Cluster deployment type. Valid values:

        - Integrated: Public cloud clustering.
        - Hybrid: Hybrid cloud cluster.
        - Custom: The cluster is customized
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterMode"))

    @cluster_mode.setter
    def cluster_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4390b11c4cfc84a0d9cc71190aa3c1913f52c9a9f07757d629324a3f5568e064)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterMode", value)

    @builtins.property
    @jsii.member(jsii_name="deletionProtection")
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        deletionProtection: The cluster deletion protection property, which specifies whether cluster deletion via the console or the DeleteCluster API is supported.

        - true: Cluster deletion protection is enabled.
        - false: This turns off cluster deletion protection.
        Default value: false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionProtection"))

    @deletion_protection.setter
    def deletion_protection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18c36e717ef5a919f6a5e4ff66f1adc1915f244f1ed4a4074fb3766ae1412459)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionProtection", value)

    @builtins.property
    @jsii.member(jsii_name="isEnterpriseSecurityGroup")
    def is_enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isEnterpriseSecurityGroup: Whether to create an enterprise security group. Valid values:

        - true: Enterprise security groups are automatically created and used.
        - false: Normal security groups are automatically created and used instead of enterprise security groups.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isEnterpriseSecurityGroup"))

    @is_enterprise_security_group.setter
    def is_enterprise_security_group(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__790698405776dc4f05df9398f9d2e318ed058590895ee0cd97f7c73174fa25ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isEnterpriseSecurityGroup", value)

    @builtins.property
    @jsii.member(jsii_name="manager")
    def manager(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ManagerProperty"]]:
        '''
        :Property: manager: The cluster manages node configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ManagerProperty"]], jsii.get(self, "manager"))

    @manager.setter
    def manager(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ManagerProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6dda2e4c7af7fcf3c99a276f20eee2f36b375c6e3533829e59e0a9e36495dc50)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "manager", value)

    @builtins.property
    @jsii.member(jsii_name="maxCoreCount")
    def max_core_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxCoreCount: Total number of cores that the cluster can manage on compute nodes, ranging from 0 to 100,000.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maxCoreCount"))

    @max_core_count.setter
    def max_core_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c13ebd372d016e614a1741448ae4b481078909dc8383e7ea503e4673c604c53b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxCoreCount", value)

    @builtins.property
    @jsii.member(jsii_name="maxCount")
    def max_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxCount: Number of compute nodes that can be managed by the cluster, ranging from 0 to 5,000.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maxCount"))

    @max_count.setter
    def max_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94b03eb0658b3ed8dbbc0bf2bc844be7819145fe65ece32741837ac5f9e66eb4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxCount", value)

    @builtins.property
    @jsii.member(jsii_name="queues")
    def queues(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.QueuesProperty"]]]]:
        '''
        :Property: queues: Cluster queue configuration. The number of queues is supported from 0 to 8.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.QueuesProperty"]]]], jsii.get(self, "queues"))

    @queues.setter
    def queues(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.QueuesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4e3527af0a7a0b6eac79265f8bc95c941257b135a61375495ad9eef8fef12a7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "queues", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a1493cdfc72fa5a688b837362ef1c001992c7baadba14caaeaf0deaff7d00940)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: Specifies the security group ID to which the newly created cluster belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__21e5344655ab1a30f1f8d9a95e36eb34cbeba668dac4f3adab15d996e984f7a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosClusterV2.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to cluster_v2. Max support 20 tags to add during create cluster_v2. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosClusterV2.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosClusterV2.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2d480beaf5c358f437d2a21f1997c97dea4473f3695f1e07cac7d8b9edbf74f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosClusterV2.AdditionalPackagesProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "version": "version"},
    )
    class AdditionalPackagesProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param name: 
            :param version: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d17e772ffe710ac103417743c1c0205d756c9531079305545e3f521a76e815dc)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
                "version": version,
            }

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: The name of the software package.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: version: The version of the software package.
            '''
            result = self._values.get("version")
            assert result is not None, "Required property 'version' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AdditionalPackagesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosClusterV2.AddonsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "name": "name",
            "version": "version",
            "resources_spec": "resourcesSpec",
            "services_spec": "servicesSpec",
        },
    )
    class AddonsProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            resources_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            services_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param version: 
            :param resources_spec: 
            :param services_spec: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__87925780fa00ce176f212b9bb4ac1f412bedf941bbfe1f5fa3da79fa086fe98d)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
                check_type(argname="argument resources_spec", value=resources_spec, expected_type=type_hints["resources_spec"])
                check_type(argname="argument services_spec", value=services_spec, expected_type=type_hints["services_spec"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
                "version": version,
            }
            if resources_spec is not None:
                self._values["resources_spec"] = resources_spec
            if services_spec is not None:
                self._values["services_spec"] = services_spec

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: The name of the custom service component.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: version: The version of the custom service component.
            '''
            result = self._values.get("version")
            assert result is not None, "Required property 'version' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def resources_spec(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: resourcesSpec: The resource configuration of the custom service component.
            '''
            result = self._values.get("resources_spec")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def services_spec(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: servicesSpec: The configuration of the custom service component.
            '''
            result = self._values.get("services_spec")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AddonsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosClusterV2.ClusterCredentialsProperty",
        jsii_struct_bases=[],
        name_mapping={"key_pair_name": "keyPairName", "password": "password"},
    )
    class ClusterCredentialsProperty:
        def __init__(
            self,
            *,
            key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key_pair_name: 
            :param password: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f4b7caa60e476dc89b728f16c56e8f90768ae34bd8bcce436f4ce3d11d9737ff)
                check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if key_pair_name is not None:
                self._values["key_pair_name"] = key_pair_name
            if password is not None:
                self._values["password"] = password

        @builtins.property
        def key_pair_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: keyPairName: Key pair name. The length is 2~128 English or Chinese characters. Must begin with a lowercase letter or Chinese, not http:// or https://. You can include a number, a semi-colon (:), an underscore (_), or a dash (-).
            '''
            result = self._values.get("key_pair_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            ::



            $% ^ & * - = + {} [] :; '< >,.? /
            :Property: password: The root password of the login node. The length is 8 to 20 characters and must contain all three types of characters: uppercase and lowercase letters, numbers and special symbols. Special symbols can be: () ~!
            '''
            result = self._values.get("password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ClusterCredentialsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosClusterV2.ClusterCustomConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={"args": "args", "script": "script"},
    )
    class ClusterCustomConfigurationProperty:
        def __init__(
            self,
            *,
            args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            script: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param args: 
            :param script: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__edc87208f043af02de7ce037caf33ea2a59c1d9b4064361942c20e6277997616)
                check_type(argname="argument args", value=args, expected_type=type_hints["args"])
                check_type(argname="argument script", value=script, expected_type=type_hints["script"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if args is not None:
                self._values["args"] = args
            if script is not None:
                self._values["script"] = script

        @builtins.property
        def args(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: args: Execution parameters for the script after installation.
            '''
            result = self._values.get("args")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def script(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: script: Where to download the post-processing script.
            '''
            result = self._values.get("script")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ClusterCustomConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosClusterV2.ComputeNodesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "image_id": "imageId",
            "instance_type": "instanceType",
            "system_disk": "systemDisk",
            "data_disks": "dataDisks",
            "duration": "duration",
            "enable_ht": "enableHt",
            "spot_price_limit": "spotPriceLimit",
            "spot_strategy": "spotStrategy",
        },
    )
    class ComputeNodesProperty:
        def __init__(
            self,
            *,
            image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            system_disk: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterV2.SystemDiskProperty", typing.Dict[builtins.str, typing.Any]]],
            data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterV2.DataDisksProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_ht: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param image_id: 
            :param instance_type: 
            :param system_disk: 
            :param data_disks: 
            :param duration: 
            :param enable_ht: 
            :param spot_price_limit: 
            :param spot_strategy: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f782c4bd5949858739f8629c8e7179f45cf872cdc9e062686f31b929ea435e78)
                check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
                check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
                check_type(argname="argument system_disk", value=system_disk, expected_type=type_hints["system_disk"])
                check_type(argname="argument data_disks", value=data_disks, expected_type=type_hints["data_disks"])
                check_type(argname="argument duration", value=duration, expected_type=type_hints["duration"])
                check_type(argname="argument enable_ht", value=enable_ht, expected_type=type_hints["enable_ht"])
                check_type(argname="argument spot_price_limit", value=spot_price_limit, expected_type=type_hints["spot_price_limit"])
                check_type(argname="argument spot_strategy", value=spot_strategy, expected_type=type_hints["spot_strategy"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "image_id": image_id,
                "instance_type": instance_type,
                "system_disk": system_disk,
            }
            if data_disks is not None:
                self._values["data_disks"] = data_disks
            if duration is not None:
                self._values["duration"] = duration
            if enable_ht is not None:
                self._values["enable_ht"] = enable_ht
            if spot_price_limit is not None:
                self._values["spot_price_limit"] = spot_price_limit
            if spot_strategy is not None:
                self._values["spot_strategy"] = spot_strategy

        @builtins.property
        def image_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: imageId: ECS image ID.
            '''
            result = self._values.get("image_id")
            assert result is not None, "Required property 'image_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def instance_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: instanceType: ECS instance type.
            '''
            result = self._values.get("instance_type")
            assert result is not None, "Required property 'instance_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def system_disk(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.SystemDiskProperty"]:
            '''
            :Property: systemDisk: Node system disk configuration details.
            '''
            result = self._values.get("system_disk")
            assert result is not None, "Required property 'system_disk' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.SystemDiskProperty"], result)

        @builtins.property
        def data_disks(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.DataDisksProperty"]]]]:
            '''
            :Property: dataDisks: Data disk information collection list.
            '''
            result = self._values.get("data_disks")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.DataDisksProperty"]]]], result)

        @builtins.property
        def duration(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            duration: Retention time, in hours, for a preemptive instance. Default value: 1. Valid values:

            - 1: Aliyun will ensure that the instance will run for 1 hour after creation and will not be released automatically; After more than one hour, the system automatically compares the bid with the market price and checks the resource inventory to decide whether to hold or reclaim the instance.
            - 0: After the creation, Aliyun does not guarantee that the instance will run for 1 hour. The system will automatically compare the bid price with the market price and check the resource inventory to determine the holding and recycling of the instance.
            Aliyun will send you a notification through ECS system event 5 minutes before instance collection. Preemptive instances are charged per second, and it is recommended that you choose the appropriate retention time based on the specific task execution time.
            '''
            result = self._values.get("duration")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_ht(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            enableHt: Whether to enable the hyper-threading feature. Valid values:

            - true: Enable the hyper-threading feature.
            - false: Disable the hyper-threading feature.
            '''
            result = self._values.get("enable_ht")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def spot_price_limit(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: spotPriceLimit: Sets the maximum hourly price for the instance. Up to three decimal places are supported, and the parameter SpotStrategy takes effect with a value of SpotWithPriceLimit.
            '''
            result = self._values.get("spot_price_limit")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def spot_strategy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            spotStrategy: The bidding strategy for pay-as-you-go instances. Applies when the parameter InstanceChargeType is PostPaid. Valid values:

            - NoSpot: Normal pay-as-you-go instance
            - SpotWithPriceLimit: A preemptive instance of setting a cap price.
            - SpotAsPriceGo: The system automatically bids, following the current market actual price.
            Default value: NoSpot
            '''
            result = self._values.get("spot_strategy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ComputeNodesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosClusterV2.DNSProperty",
        jsii_struct_bases=[],
        name_mapping={"type": "type", "version": "version"},
    )
    class DNSProperty:
        def __init__(
            self,
            *,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param type: 
            :param version: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__01bf151d721c00946f4d178e6e4d47d7cf79ca716b188c32232e4237c73f72e7)
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if type is not None:
                self._values["type"] = type
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: type: DNS type.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: version: DNS version.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DNSProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosClusterV2.DataDisksProperty",
        jsii_struct_bases=[],
        name_mapping={
            "category": "category",
            "size": "size",
            "delete_with_instance": "deleteWithInstance",
            "level": "level",
            "mount_dir": "mountDir",
        },
    )
    class DataDisksProperty:
        def __init__(
            self,
            *,
            category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            delete_with_instance: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mount_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param category: 
            :param size: 
            :param delete_with_instance: 
            :param level: 
            :param mount_dir: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__838137c16d2e4f078a514726d1034c1ad336a2bf5681e1bdceceb1d3b55b6f21)
                check_type(argname="argument category", value=category, expected_type=type_hints["category"])
                check_type(argname="argument size", value=size, expected_type=type_hints["size"])
                check_type(argname="argument delete_with_instance", value=delete_with_instance, expected_type=type_hints["delete_with_instance"])
                check_type(argname="argument level", value=level, expected_type=type_hints["level"])
                check_type(argname="argument mount_dir", value=mount_dir, expected_type=type_hints["mount_dir"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "category": category,
                "size": size,
            }
            if delete_with_instance is not None:
                self._values["delete_with_instance"] = delete_with_instance
            if level is not None:
                self._values["level"] = level
            if mount_dir is not None:
                self._values["mount_dir"] = mount_dir

        @builtins.property
        def category(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            category: The type of data disk. Valid values:
            cloud_efficiency: ultra disk.
            cloud_ssd: standard SSD.
            cloud_essd: enhanced SSD.
            '''
            result = self._values.get("category")
            assert result is not None, "Required property 'category' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def size(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            size: The size of the data disk, in GiB. Valid values:

            - cloud_efficiency: 40 ~ 32768.
            - cloud_ssd: 40 ~ 32768.
            - cloud_essd: PL0: 40 ~ 65,536; PL1: 40 ~ 65,536; PL2: 461 ~ 65,536; PL3: 1261 ~ 65,536.
            '''
            result = self._values.get("size")
            assert result is not None, "Required property 'size' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def delete_with_instance(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            deleteWithInstance: Specifies whether to release the data disk when the instance is released. Valid values:

            - true (default): The data disk is released when the instance is released. - false: The data disk is retained when the instance is released.
            '''
            result = self._values.get("delete_with_instance")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            level: When creating ESSD cloud disk as data disk, set the performance level of cloud disk. Valid values:

            - PL0: The highest random read and write IOPS of a single disk is 10,000.
            - PL1 (default) : The maximum random read/write IOPS of a single disk is 50,000.
            - PL2: The highest random read and write IOPS of a single disk is 100,000.
            - PL3: The highest random read/write IOPS of a single disk is 1 million.
            '''
            result = self._values.get("level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mount_dir(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: mountDir: The mount directory of the data disk. The value must start with a forward slash (/).
            '''
            result = self._values.get("mount_dir")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DataDisksProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosClusterV2.DirectoryServiceProperty",
        jsii_struct_bases=[],
        name_mapping={"type": "type", "version": "version"},
    )
    class DirectoryServiceProperty:
        def __init__(
            self,
            *,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param type: 
            :param version: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ef07b62e8f737fd16ffe56250c87001a71c2cd9551192a5490f1ea45c631a2db)
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if type is not None:
                self._values["type"] = type
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: type: Domain account type.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: version: Domain account version.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DirectoryServiceProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosClusterV2.ManagerNodeDataDisksProperty",
        jsii_struct_bases=[],
        name_mapping={
            "category": "category",
            "size": "size",
            "delete_with_instance": "deleteWithInstance",
            "level": "level",
            "mount_dir": "mountDir",
        },
    )
    class ManagerNodeDataDisksProperty:
        def __init__(
            self,
            *,
            category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            delete_with_instance: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mount_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param category: 
            :param size: 
            :param delete_with_instance: 
            :param level: 
            :param mount_dir: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0dcce16763aa57d2695612bdeba8dafad13cec2cada0cfb1455c5398db3afa7c)
                check_type(argname="argument category", value=category, expected_type=type_hints["category"])
                check_type(argname="argument size", value=size, expected_type=type_hints["size"])
                check_type(argname="argument delete_with_instance", value=delete_with_instance, expected_type=type_hints["delete_with_instance"])
                check_type(argname="argument level", value=level, expected_type=type_hints["level"])
                check_type(argname="argument mount_dir", value=mount_dir, expected_type=type_hints["mount_dir"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "category": category,
                "size": size,
            }
            if delete_with_instance is not None:
                self._values["delete_with_instance"] = delete_with_instance
            if level is not None:
                self._values["level"] = level
            if mount_dir is not None:
                self._values["mount_dir"] = mount_dir

        @builtins.property
        def category(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            category: The type of data disk. Valid values:
            cloud_efficiency: ultra disk.
            cloud_ssd: standard SSD.
            cloud_essd: enhanced SSD.
            '''
            result = self._values.get("category")
            assert result is not None, "Required property 'category' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def size(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            size: The size of the data disk, in GiB. Valid values:

            - cloud_efficiency: 40 ~ 32768.
            - cloud_ssd: 40 ~ 32768.
            - cloud_essd: PL0: 40 ~ 65,536; PL1: 40 ~ 65,536; PL2: 461 ~ 65,536; PL3: 1261 ~ 65,536.
            '''
            result = self._values.get("size")
            assert result is not None, "Required property 'size' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def delete_with_instance(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            deleteWithInstance: Specifies whether to release the data disk when the instance is released. Valid values:

            - true (default): The data disk is released when the instance is released. - false: The data disk is retained when the instance is released.
            '''
            result = self._values.get("delete_with_instance")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            level: When creating ESSD cloud disk as data disk, set the performance level of cloud disk. Valid values:

            - PL0: The highest random read and write IOPS of a single disk is 10,000.
            - PL1 (default) : The maximum random read/write IOPS of a single disk is 50,000.
            - PL2: The highest random read and write IOPS of a single disk is 100,000.
            - PL3: The highest random read/write IOPS of a single disk is 1 million.
            '''
            result = self._values.get("level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mount_dir(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: mountDir: The mount directory of the data disk. The value must start with a forward slash (/).
            '''
            result = self._values.get("mount_dir")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ManagerNodeDataDisksProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosClusterV2.ManagerNodeProperty",
        jsii_struct_bases=[],
        name_mapping={
            "image_id": "imageId",
            "instance_type": "instanceType",
            "system_disk": "systemDisk",
            "auto_renew": "autoRenew",
            "auto_renew_period": "autoRenewPeriod",
            "data_disks": "dataDisks",
            "enable_ht": "enableHt",
            "instance_charge_type": "instanceChargeType",
            "period": "period",
            "period_unit": "periodUnit",
        },
    )
    class ManagerNodeProperty:
        def __init__(
            self,
            *,
            image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            system_disk: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterV2.ManagerNodeSystemDiskProperty", typing.Dict[builtins.str, typing.Any]]],
            auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterV2.ManagerNodeDataDisksProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            enable_ht: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param image_id: 
            :param instance_type: 
            :param system_disk: 
            :param auto_renew: 
            :param auto_renew_period: 
            :param data_disks: 
            :param enable_ht: 
            :param instance_charge_type: 
            :param period: 
            :param period_unit: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__70ae3fb1e0585712110b7cbfd6df2bf7d9ca11af48c18afe548ad4e1280ebe56)
                check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
                check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
                check_type(argname="argument system_disk", value=system_disk, expected_type=type_hints["system_disk"])
                check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
                check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
                check_type(argname="argument data_disks", value=data_disks, expected_type=type_hints["data_disks"])
                check_type(argname="argument enable_ht", value=enable_ht, expected_type=type_hints["enable_ht"])
                check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
                check_type(argname="argument period", value=period, expected_type=type_hints["period"])
                check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "image_id": image_id,
                "instance_type": instance_type,
                "system_disk": system_disk,
            }
            if auto_renew is not None:
                self._values["auto_renew"] = auto_renew
            if auto_renew_period is not None:
                self._values["auto_renew_period"] = auto_renew_period
            if data_disks is not None:
                self._values["data_disks"] = data_disks
            if enable_ht is not None:
                self._values["enable_ht"] = enable_ht
            if instance_charge_type is not None:
                self._values["instance_charge_type"] = instance_charge_type
            if period is not None:
                self._values["period"] = period
            if period_unit is not None:
                self._values["period_unit"] = period_unit

        @builtins.property
        def image_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: imageId: ECS image ID.
            '''
            result = self._values.get("image_id")
            assert result is not None, "Required property 'image_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def instance_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: instanceType: ECS instance type.
            '''
            result = self._values.get("instance_type")
            assert result is not None, "Required property 'instance_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def system_disk(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ManagerNodeSystemDiskProperty"]:
            '''
            :Property: systemDisk: Node system disk configuration details.
            '''
            result = self._values.get("system_disk")
            assert result is not None, "Required property 'system_disk' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ManagerNodeSystemDiskProperty"], result)

        @builtins.property
        def auto_renew(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            autoRenew: Whether to automatically renew. The InstanceChargeType parameter takes effect when it has a value of PrePaid. Valid values:

            - true: Automatic renewal.
            - false: No automatic renewal.
            Default value: false
            '''
            result = self._values.get("auto_renew")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def auto_renew_period(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            autoRenewPeriod: Length of renewal for a single automatic renewal. Valid values:

            - When PeriodUnit=Week: 1, 2, 3.
            - When PeriodUnit=Month: 1, 2, 3, 6, 12, 24, 36, 48, 60.
            Default value: 1
            '''
            result = self._values.get("auto_renew_period")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def data_disks(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ManagerNodeDataDisksProperty"]]]]:
            '''
            :Property: dataDisks: Data disk information collection list.
            '''
            result = self._values.get("data_disks")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ManagerNodeDataDisksProperty"]]]], result)

        @builtins.property
        def enable_ht(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            enableHt: Whether to enable the hyper-threading feature. Valid values:

            - true: Enable the hyper-threading feature.
            - false: Disable the hyper-threading feature.
            '''
            result = self._values.get("enable_ht")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_charge_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            instanceChargeType: How the instance is paid. Valid values:

            - PrePaid: A year and a month.
            - PostPaid: pay-as-you-go
            Default value: PostPaid
            You must confirm that your account supports balance payment or credit payment, otherwise an error message with InvalidPayMethod will be returned.
            '''
            result = self._values.get("instance_charge_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def period(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            period: The duration of the purchase of the resource in units specified by PeriodUnit. It is required when InstanceChargeType is set to PrePaid. Once DedicatedHostId is specified, the value cannot exceed the subscription duration of the dedicated host. Valid values:

            - When PeriodUnit=Week, Period value: 1, 2, 3, 4.
            - When PeriodUnit=Month, Period value: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60.
            '''
            result = self._values.get("period")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def period_unit(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: periodUnit: A unit of time for annual and monthly billing. Valid values: Week, Month (default).
            '''
            result = self._values.get("period_unit")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ManagerNodeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosClusterV2.ManagerNodeSystemDiskProperty",
        jsii_struct_bases=[],
        name_mapping={"category": "category", "size": "size", "level": "level"},
    )
    class ManagerNodeSystemDiskProperty:
        def __init__(
            self,
            *,
            category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param category: 
            :param size: 
            :param level: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__1fbcafa106d4e84dede5aae9ae147d4efcb2d2e4e13b7e9293bb8829627c7d4b)
                check_type(argname="argument category", value=category, expected_type=type_hints["category"])
                check_type(argname="argument size", value=size, expected_type=type_hints["size"])
                check_type(argname="argument level", value=level, expected_type=type_hints["level"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "category": category,
                "size": size,
            }
            if level is not None:
                self._values["level"] = level

        @builtins.property
        def category(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            category: The type of data disk. Valid values:
            cloud: basic disk.
            cloud_efficiency: ultra disk.
            cloud_ssd: standard SSD.
            cloud_essd: enhanced SSD.
            '''
            result = self._values.get("category")
            assert result is not None, "Required property 'category' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def size(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            size: The size of the system disk, in GiB. Valid values:

            - cloud_efficiency: 40 ~ 32768.
            - cloud_ssd: 40 ~ 32768
            - cloud_essd: PL0: 40 ~ 65,536; PL1: 40 ~ 65,536; PL2: 461 ~ 65,536; PL3: 1261 ~ 65,536.
            - cloud: 40 ~ 500.
            '''
            result = self._values.get("size")
            assert result is not None, "Required property 'size' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            level: When creating ESSD cloud disk as system disk, set the performance level of cloud disk. Valid values:

            - PL0: The highest random read and write IOPS of a single disk is 10,000.
            - PL1 (default) : The maximum random read/write IOPS of a single disk is 50,000.
            - PL2: The highest random read and write IOPS of a single disk is 100,000.
            - PL3: The highest random read/write IOPS of a single disk is 1 million.
            '''
            result = self._values.get("level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ManagerNodeSystemDiskProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosClusterV2.ManagerProperty",
        jsii_struct_bases=[],
        name_mapping={
            "directory_service": "directoryService",
            "dns": "dns",
            "manager_node": "managerNode",
            "scheduler": "scheduler",
        },
    )
    class ManagerProperty:
        def __init__(
            self,
            *,
            directory_service: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterV2.DirectoryServiceProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            dns: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterV2.DNSProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            manager_node: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterV2.ManagerNodeProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            scheduler: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterV2.SchedulerProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param directory_service: 
            :param dns: 
            :param manager_node: 
            :param scheduler: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__855e159350535b4ae543bd83cfd25eecc0d4cf362efe0a813ee16371a6df44b9)
                check_type(argname="argument directory_service", value=directory_service, expected_type=type_hints["directory_service"])
                check_type(argname="argument dns", value=dns, expected_type=type_hints["dns"])
                check_type(argname="argument manager_node", value=manager_node, expected_type=type_hints["manager_node"])
                check_type(argname="argument scheduler", value=scheduler, expected_type=type_hints["scheduler"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if directory_service is not None:
                self._values["directory_service"] = directory_service
            if dns is not None:
                self._values["dns"] = dns
            if manager_node is not None:
                self._values["manager_node"] = manager_node
            if scheduler is not None:
                self._values["scheduler"] = scheduler

        @builtins.property
        def directory_service(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.DirectoryServiceProperty"]]:
            '''
            :Property: directoryService: Domain account service configuration information.
            '''
            result = self._values.get("directory_service")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.DirectoryServiceProperty"]], result)

        @builtins.property
        def dns(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.DNSProperty"]]:
            '''
            :Property: dns: DNS service configuration information.
            '''
            result = self._values.get("dns")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.DNSProperty"]], result)

        @builtins.property
        def manager_node(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ManagerNodeProperty"]]:
            '''
            :Property: managerNode: Public description of ECS resources with parameters such as payment type, instance specification, image, system disk, and data disk
            '''
            result = self._values.get("manager_node")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ManagerNodeProperty"]], result)

        @builtins.property
        def scheduler(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.SchedulerProperty"]]:
            '''
            :Property: scheduler: Scheduler service configuration information.
            '''
            result = self._values.get("scheduler")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.SchedulerProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ManagerProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosClusterV2.QueuesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "queue_name": "queueName",
            "allocation_strategy": "allocationStrategy",
            "compute_nodes": "computeNodes",
            "enable_scale_in": "enableScaleIn",
            "enable_scale_out": "enableScaleOut",
            "hostname_prefix": "hostnamePrefix",
            "hostname_suffix": "hostnameSuffix",
            "initial_count": "initialCount",
            "inter_connect": "interConnect",
            "keep_alive_nodes": "keepAliveNodes",
            "max_count": "maxCount",
            "max_count_per_cycle": "maxCountPerCycle",
            "min_count": "minCount",
            "ram_role": "ramRole",
            "v_switch_ids": "vSwitchIds",
        },
    )
    class QueuesProperty:
        def __init__(
            self,
            *,
            queue_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            allocation_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            compute_nodes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterV2.ComputeNodesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            enable_scale_in: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_scale_out: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            hostname_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            hostname_suffix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            initial_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            inter_connect: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            keep_alive_nodes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            max_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            max_count_per_cycle: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            min_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ram_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param queue_name: 
            :param allocation_strategy: 
            :param compute_nodes: 
            :param enable_scale_in: 
            :param enable_scale_out: 
            :param hostname_prefix: 
            :param hostname_suffix: 
            :param initial_count: 
            :param inter_connect: 
            :param keep_alive_nodes: 
            :param max_count: 
            :param max_count_per_cycle: 
            :param min_count: 
            :param ram_role: 
            :param v_switch_ids: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b49af4be06863c95c6de1e8bd3b1b48f023c86567c3e75cccbd7b05a795cc177)
                check_type(argname="argument queue_name", value=queue_name, expected_type=type_hints["queue_name"])
                check_type(argname="argument allocation_strategy", value=allocation_strategy, expected_type=type_hints["allocation_strategy"])
                check_type(argname="argument compute_nodes", value=compute_nodes, expected_type=type_hints["compute_nodes"])
                check_type(argname="argument enable_scale_in", value=enable_scale_in, expected_type=type_hints["enable_scale_in"])
                check_type(argname="argument enable_scale_out", value=enable_scale_out, expected_type=type_hints["enable_scale_out"])
                check_type(argname="argument hostname_prefix", value=hostname_prefix, expected_type=type_hints["hostname_prefix"])
                check_type(argname="argument hostname_suffix", value=hostname_suffix, expected_type=type_hints["hostname_suffix"])
                check_type(argname="argument initial_count", value=initial_count, expected_type=type_hints["initial_count"])
                check_type(argname="argument inter_connect", value=inter_connect, expected_type=type_hints["inter_connect"])
                check_type(argname="argument keep_alive_nodes", value=keep_alive_nodes, expected_type=type_hints["keep_alive_nodes"])
                check_type(argname="argument max_count", value=max_count, expected_type=type_hints["max_count"])
                check_type(argname="argument max_count_per_cycle", value=max_count_per_cycle, expected_type=type_hints["max_count_per_cycle"])
                check_type(argname="argument min_count", value=min_count, expected_type=type_hints["min_count"])
                check_type(argname="argument ram_role", value=ram_role, expected_type=type_hints["ram_role"])
                check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "queue_name": queue_name,
            }
            if allocation_strategy is not None:
                self._values["allocation_strategy"] = allocation_strategy
            if compute_nodes is not None:
                self._values["compute_nodes"] = compute_nodes
            if enable_scale_in is not None:
                self._values["enable_scale_in"] = enable_scale_in
            if enable_scale_out is not None:
                self._values["enable_scale_out"] = enable_scale_out
            if hostname_prefix is not None:
                self._values["hostname_prefix"] = hostname_prefix
            if hostname_suffix is not None:
                self._values["hostname_suffix"] = hostname_suffix
            if initial_count is not None:
                self._values["initial_count"] = initial_count
            if inter_connect is not None:
                self._values["inter_connect"] = inter_connect
            if keep_alive_nodes is not None:
                self._values["keep_alive_nodes"] = keep_alive_nodes
            if max_count is not None:
                self._values["max_count"] = max_count
            if max_count_per_cycle is not None:
                self._values["max_count_per_cycle"] = max_count_per_cycle
            if min_count is not None:
                self._values["min_count"] = min_count
            if ram_role is not None:
                self._values["ram_role"] = ram_role
            if v_switch_ids is not None:
                self._values["v_switch_ids"] = v_switch_ids

        @builtins.property
        def queue_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: queueName: Queue name. The length is from 1 to 15 characters. It supports characters in the Unicode letter class (including English and numbers), and can include half-angular periods (.).
            '''
            result = self._values.get("queue_name")
            assert result is not None, "Required property 'queue_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def allocation_strategy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: allocationStrategy: The allocation strategy of the queue.
            '''
            result = self._values.get("allocation_strategy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def compute_nodes(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ComputeNodesProperty"]]]]:
            '''
            :Property: computeNodes: List of compute nodes in the queue. Range from 0 to 10.
            '''
            result = self._values.get("compute_nodes")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterV2.ComputeNodesProperty"]]]], result)

        @builtins.property
        def enable_scale_in(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            enableScaleIn: Whether to enable automatic shrinkage. Valid values:

            - true: enables automatic shrinkage.
            - false: disables automatic shrinkage.
            '''
            result = self._values.get("enable_scale_in")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_scale_out(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            enableScaleOut: Whether to enable automatic scaling. Valid values:

            - true: enables automatic scaling.
            - false: disables automatic scaling.
            '''
            result = self._values.get("enable_scale_out")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def hostname_prefix(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: hostnamePrefix: The hostname prefix of the compute nodes in the queue.
            '''
            result = self._values.get("hostname_prefix")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def hostname_suffix(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: hostnameSuffix: The hostname suffix of the compute nodes in the queue.
            '''
            result = self._values.get("hostname_suffix")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def initial_count(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: initialCount: The initial number of nodes in the queue.
            '''
            result = self._values.get("initial_count")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def inter_connect(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: interConnect: Type of network between nodes in the queue. Valid values: vpc, eRDMA.
            '''
            result = self._values.get("inter_connect")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def keep_alive_nodes(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: keepAliveNodes: List of nodes in the queue with deletion protection enabled.
            '''
            result = self._values.get("keep_alive_nodes")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def max_count(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: maxCount: The maximum number of nodes in the queue.
            '''
            result = self._values.get("max_count")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def max_count_per_cycle(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: maxCountPerCycle: The number of computing nodes that the queue can maximally expand in each scaling round.
            '''
            result = self._values.get("max_count_per_cycle")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def min_count(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: minCount: The minimum number of nodes in the queue.
            '''
            result = self._values.get("min_count")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ram_role(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ramRole: The RAM role name attached to the compute nodes of the queue.
            '''
            result = self._values.get("ram_role")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def v_switch_ids(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: vSwitchIds: List of virtual switches available to compute nodes in the queue. Range from 1 to 5.
            '''
            result = self._values.get("v_switch_ids")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "QueuesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosClusterV2.SchedulerProperty",
        jsii_struct_bases=[],
        name_mapping={"type": "type", "version": "version"},
    )
    class SchedulerProperty:
        def __init__(
            self,
            *,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param type: 
            :param version: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__3b2bffa600b531264afcbda482fb08653830591b91e6e86c566afe61234fd1ba)
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if type is not None:
                self._values["type"] = type
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            type: Scheduler type. Valid values:

            - SLURM
            - PBS
            - OPENGRIDSCHEDULER
            - LSF_PLUGIN
            - PBS_PLUGIN
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: version: Scheduler version.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SchedulerProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosClusterV2.SharedStoragesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "file_system_id": "fileSystemId",
            "mount_target_domain": "mountTargetDomain",
            "mount_directory": "mountDirectory",
            "mount_options": "mountOptions",
            "nas_directory": "nasDirectory",
            "protocol_type": "protocolType",
        },
    )
    class SharedStoragesProperty:
        def __init__(
            self,
            *,
            file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            mount_target_domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            mount_directory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mount_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            nas_directory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            protocol_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param file_system_id: 
            :param mount_target_domain: 
            :param mount_directory: 
            :param mount_options: 
            :param nas_directory: 
            :param protocol_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__235413b66c215abb9dbaa33cee4eb7a0a04b74dd86d0c9dd5c877cac5d0f7b0e)
                check_type(argname="argument file_system_id", value=file_system_id, expected_type=type_hints["file_system_id"])
                check_type(argname="argument mount_target_domain", value=mount_target_domain, expected_type=type_hints["mount_target_domain"])
                check_type(argname="argument mount_directory", value=mount_directory, expected_type=type_hints["mount_directory"])
                check_type(argname="argument mount_options", value=mount_options, expected_type=type_hints["mount_options"])
                check_type(argname="argument nas_directory", value=nas_directory, expected_type=type_hints["nas_directory"])
                check_type(argname="argument protocol_type", value=protocol_type, expected_type=type_hints["protocol_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "file_system_id": file_system_id,
                "mount_target_domain": mount_target_domain,
            }
            if mount_directory is not None:
                self._values["mount_directory"] = mount_directory
            if mount_options is not None:
                self._values["mount_options"] = mount_options
            if nas_directory is not None:
                self._values["nas_directory"] = nas_directory
            if protocol_type is not None:
                self._values["protocol_type"] = protocol_type

        @builtins.property
        def file_system_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: fileSystemId: The ID of the file system.
            '''
            result = self._values.get("file_system_id")
            assert result is not None, "Required property 'file_system_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def mount_target_domain(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: mountTargetDomain: The mount target domain of the file system.
            '''
            result = self._values.get("mount_target_domain")
            assert result is not None, "Required property 'mount_target_domain' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def mount_directory(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: mountDirectory: The local mount directory to mount the file system.
            '''
            result = self._values.get("mount_directory")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mount_options(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: mountOptions: The mount options of the file system.
            '''
            result = self._values.get("mount_options")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def nas_directory(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: nasDirectory: Mounted filesystems require mounted remote directories.
            '''
            result = self._values.get("nas_directory")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def protocol_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: protocolType: The protocol type of the file system. Valid values: NFS, SMB.
            '''
            result = self._values.get("protocol_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SharedStoragesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosClusterV2.SystemDiskProperty",
        jsii_struct_bases=[],
        name_mapping={"category": "category", "size": "size", "level": "level"},
    )
    class SystemDiskProperty:
        def __init__(
            self,
            *,
            category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param category: 
            :param size: 
            :param level: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__e7c95e85592a491fff02c00cfb3e4d54433dc8dfa14c92f699d0c9532c4db12c)
                check_type(argname="argument category", value=category, expected_type=type_hints["category"])
                check_type(argname="argument size", value=size, expected_type=type_hints["size"])
                check_type(argname="argument level", value=level, expected_type=type_hints["level"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "category": category,
                "size": size,
            }
            if level is not None:
                self._values["level"] = level

        @builtins.property
        def category(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            category: The type of data disk. Valid values:
            cloud: basic disk.
            cloud_efficiency: ultra disk.
            cloud_ssd: standard SSD.
            cloud_essd: enhanced SSD.
            '''
            result = self._values.get("category")
            assert result is not None, "Required property 'category' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def size(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            size: The size of the system disk, in GiB. Valid values:

            - cloud_efficiency: 40 ~ 32768.
            - cloud_ssd: 40 ~ 32768
            - cloud_essd: PL0: 40 ~ 65,536; PL1: 40 ~ 65,536; PL2: 461 ~ 65,536; PL3: 1261 ~ 65,536.
            - cloud: 40 ~ 500.
            '''
            result = self._values.get("size")
            assert result is not None, "Required property 'size' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            level: When creating ESSD cloud disk as system disk, set the performance level of cloud disk. Valid values:

            - PL0: The highest random read and write IOPS of a single disk is 10,000.
            - PL1 (default) : The maximum random read/write IOPS of a single disk is 50,000.
            - PL2: The highest random read and write IOPS of a single disk is 100,000.
            - PL3: The highest random read/write IOPS of a single disk is 1 million.
            '''
            result = self._values.get("level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SystemDiskProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosClusterV2.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__e1e2bc4e4d4de777df6d685d7036ac34db68492b445970214178c66248a43bbd)
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ehpc.RosClusterV2Props",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_name": "clusterName",
        "shared_storages": "sharedStorages",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "additional_packages": "additionalPackages",
        "addons": "addons",
        "client_version": "clientVersion",
        "cluster_category": "clusterCategory",
        "cluster_credentials": "clusterCredentials",
        "cluster_custom_configuration": "clusterCustomConfiguration",
        "cluster_description": "clusterDescription",
        "cluster_mode": "clusterMode",
        "deletion_protection": "deletionProtection",
        "is_enterprise_security_group": "isEnterpriseSecurityGroup",
        "manager": "manager",
        "max_core_count": "maxCoreCount",
        "max_count": "maxCount",
        "queues": "queues",
        "resource_group_id": "resourceGroupId",
        "security_group_id": "securityGroupId",
        "tags": "tags",
    },
)
class RosClusterV2Props:
    def __init__(
        self,
        *,
        cluster_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        shared_storages: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.SharedStoragesProperty, typing.Dict[builtins.str, typing.Any]]]]],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        additional_packages: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.AdditionalPackagesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        addons: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.AddonsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        client_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_credentials: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.ClusterCredentialsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        cluster_custom_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.ClusterCustomConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        cluster_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        manager: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.ManagerProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        max_core_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        queues: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.QueuesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosClusterV2.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosClusterV2``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-clusterv2

        :param cluster_name: 
        :param shared_storages: 
        :param vpc_id: 
        :param v_switch_id: 
        :param additional_packages: 
        :param addons: 
        :param client_version: 
        :param cluster_category: 
        :param cluster_credentials: 
        :param cluster_custom_configuration: 
        :param cluster_description: 
        :param cluster_mode: 
        :param deletion_protection: 
        :param is_enterprise_security_group: 
        :param manager: 
        :param max_core_count: 
        :param max_count: 
        :param queues: 
        :param resource_group_id: 
        :param security_group_id: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e24f1d14f50226f7ba0e5124e99605b4ed4526675c72d1f24f18e949278a9508)
            check_type(argname="argument cluster_name", value=cluster_name, expected_type=type_hints["cluster_name"])
            check_type(argname="argument shared_storages", value=shared_storages, expected_type=type_hints["shared_storages"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument additional_packages", value=additional_packages, expected_type=type_hints["additional_packages"])
            check_type(argname="argument addons", value=addons, expected_type=type_hints["addons"])
            check_type(argname="argument client_version", value=client_version, expected_type=type_hints["client_version"])
            check_type(argname="argument cluster_category", value=cluster_category, expected_type=type_hints["cluster_category"])
            check_type(argname="argument cluster_credentials", value=cluster_credentials, expected_type=type_hints["cluster_credentials"])
            check_type(argname="argument cluster_custom_configuration", value=cluster_custom_configuration, expected_type=type_hints["cluster_custom_configuration"])
            check_type(argname="argument cluster_description", value=cluster_description, expected_type=type_hints["cluster_description"])
            check_type(argname="argument cluster_mode", value=cluster_mode, expected_type=type_hints["cluster_mode"])
            check_type(argname="argument deletion_protection", value=deletion_protection, expected_type=type_hints["deletion_protection"])
            check_type(argname="argument is_enterprise_security_group", value=is_enterprise_security_group, expected_type=type_hints["is_enterprise_security_group"])
            check_type(argname="argument manager", value=manager, expected_type=type_hints["manager"])
            check_type(argname="argument max_core_count", value=max_core_count, expected_type=type_hints["max_core_count"])
            check_type(argname="argument max_count", value=max_count, expected_type=type_hints["max_count"])
            check_type(argname="argument queues", value=queues, expected_type=type_hints["queues"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_name": cluster_name,
            "shared_storages": shared_storages,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if additional_packages is not None:
            self._values["additional_packages"] = additional_packages
        if addons is not None:
            self._values["addons"] = addons
        if client_version is not None:
            self._values["client_version"] = client_version
        if cluster_category is not None:
            self._values["cluster_category"] = cluster_category
        if cluster_credentials is not None:
            self._values["cluster_credentials"] = cluster_credentials
        if cluster_custom_configuration is not None:
            self._values["cluster_custom_configuration"] = cluster_custom_configuration
        if cluster_description is not None:
            self._values["cluster_description"] = cluster_description
        if cluster_mode is not None:
            self._values["cluster_mode"] = cluster_mode
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if is_enterprise_security_group is not None:
            self._values["is_enterprise_security_group"] = is_enterprise_security_group
        if manager is not None:
            self._values["manager"] = manager
        if max_core_count is not None:
            self._values["max_core_count"] = max_core_count
        if max_count is not None:
            self._values["max_count"] = max_count
        if queues is not None:
            self._values["queues"] = queues
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def cluster_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterName: Cluster name. The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
        '''
        result = self._values.get("cluster_name")
        assert result is not None, "Required property 'cluster_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def shared_storages(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterV2.SharedStoragesProperty]]]:
        '''
        :Property: sharedStorages: The list of shared storage configurations.
        '''
        result = self._values.get("shared_storages")
        assert result is not None, "Required property 'shared_storages' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterV2.SharedStoragesProperty]]], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC used by the cluster.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The ID of the VSwitch used by the cluster
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def additional_packages(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterV2.AdditionalPackagesProperty]]]]:
        '''
        :Property: additionalPackages: A list of software to install on the cluster. Range from 0 to 10.
        '''
        result = self._values.get("additional_packages")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterV2.AdditionalPackagesProperty]]]], result)

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterV2.AddonsProperty]]]]:
        '''
        :Property: addons: Cluster custom service component configuration to support only one component.
        '''
        result = self._values.get("addons")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterV2.AddonsProperty]]]], result)

    @builtins.property
    def client_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clientVersion: Cluster client version. By default, the latest version is used.
        '''
        result = self._values.get("client_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clusterCategory: Cluster series. Valid values:

        - Standard: The standard version.
        - Serverless: Hosted version
        '''
        result = self._values.get("cluster_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_credentials(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterV2.ClusterCredentialsProperty]]:
        '''
        :Property: clusterCredentials: Security credentials for the cluster.
        '''
        result = self._values.get("cluster_credentials")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterV2.ClusterCredentialsProperty]], result)

    @builtins.property
    def cluster_custom_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterV2.ClusterCustomConfigurationProperty]]:
        '''
        :Property: clusterCustomConfiguration: Cluster post-processing scripts.
        '''
        result = self._values.get("cluster_custom_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterV2.ClusterCustomConfigurationProperty]], result)

    @builtins.property
    def cluster_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterDescription: Cluster description. The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
        '''
        result = self._values.get("cluster_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clusterMode: Cluster deployment type. Valid values:

        - Integrated: Public cloud clustering.
        - Hybrid: Hybrid cloud cluster.
        - Custom: The cluster is customized
        '''
        result = self._values.get("cluster_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        deletionProtection: The cluster deletion protection property, which specifies whether cluster deletion via the console or the DeleteCluster API is supported.

        - true: Cluster deletion protection is enabled.
        - false: This turns off cluster deletion protection.
        Default value: false
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isEnterpriseSecurityGroup: Whether to create an enterprise security group. Valid values:

        - true: Enterprise security groups are automatically created and used.
        - false: Normal security groups are automatically created and used instead of enterprise security groups.
        '''
        result = self._values.get("is_enterprise_security_group")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def manager(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterV2.ManagerProperty]]:
        '''
        :Property: manager: The cluster manages node configuration.
        '''
        result = self._values.get("manager")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterV2.ManagerProperty]], result)

    @builtins.property
    def max_core_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxCoreCount: Total number of cores that the cluster can manage on compute nodes, ranging from 0 to 100,000.
        '''
        result = self._values.get("max_core_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxCount: Number of compute nodes that can be managed by the cluster, ranging from 0 to 5,000.
        '''
        result = self._values.get("max_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def queues(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterV2.QueuesProperty]]]]:
        '''
        :Property: queues: Cluster queue configuration. The number of queues is supported from 0 to 8.
        '''
        result = self._values.get("queues")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterV2.QueuesProperty]]]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: Specifies the security group ID to which the newly created cluster belongs.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosClusterV2.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to cluster_v2. Max support 20 tags to add during create cluster_v2. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosClusterV2.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterV2Props(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUsers(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ehpc.RosUsers",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::EHPC::Users``, which is used to add one or more users to a specified cluster.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Users`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-users
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosUsersProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2823654dc384d7e64250506020a517553473a533499d8d98251d21866998f90)
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
            type_hints = typing.get_type_hints(_typecheckingstub__9a8f0884345719a77c569462e5694deda8eb3c027fda2cf9997b458340f0df40)
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
    @jsii.member(jsii_name="clusterId")
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: The cluster ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b38d2f9dfcd4188ae98a3b725db1ec520fae336e679b6f9a03a2866043e98076)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c7c9e4b86c0d437cfd2868ebb9d0a1bd575ccb53876793cc62a98f239e0574d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="users")
    def users(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUsers.UsersProperty"]]]:
        '''
        :Property: users: The information about the users.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUsers.UsersProperty"]]], jsii.get(self, "users"))

    @users.setter
    def users(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUsers.UsersProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__462685c1d2a1342da07c72bcce83c4b2d65633abac953130f1e49275260fd5f9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "users", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ehpc.RosUsers.UsersProperty",
        jsii_struct_bases=[],
        name_mapping={"group": "group", "name": "name", "password": "password"},
    )
    class UsersProperty:
        def __init__(
            self,
            *,
            group: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param group: 
            :param name: 
            :param password: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b0a365e81aefa64fef0444672af32f4d98f670d7348ac31f7a3f2f1c5a98ab3f)
                check_type(argname="argument group", value=group, expected_type=type_hints["group"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "group": group,
                "name": name,
                "password": password,
            }

        @builtins.property
        def group(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            group: The permission group to which the user N belongs. Valid values:

            - **users**: an ordinary permission group. It is applicable to ordinary users that need only to submit and debug jobs.
            - **wheel**: a sudo permission group. It is applicable to the administrator who needs to manage the cluster. In addition to submitting and debugging jobs, users who have sudo permissions can run sudo commands to install software and restart nodes.
            Valid values of N: 1 to 100.
            '''
            result = self._values.get("group")
            assert result is not None, "Required property 'group' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            name: The name of the user that you want to add. The name must be 6 to 30 characters in length and can contain letters, digits, and periods (.). It must start with a letter.
            Valid values of N: 1 to 100.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def password(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            ::

            #$%^&*-_+=|{}[]:;'/<>,.?/
            Valid values of N: 1 to 100.
            :Property:

            password: The password of the Nth user. The password must be 8 to 30 characters in length and contain three of the following items:

            - Uppercase letter
            - Lowercase letter
            - Digit
            - Special character: ()~!
            '''
            result = self._values.get("password")
            assert result is not None, "Required property 'password' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "UsersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ehpc.RosUsersProps",
    jsii_struct_bases=[],
    name_mapping={"cluster_id": "clusterId", "users": "users"},
)
class RosUsersProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        users: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUsers.UsersProperty, typing.Dict[builtins.str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``RosUsers``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-users

        :param cluster_id: 
        :param users: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba8677669a0755dfad0df0be981fd888520f73dd790cc623c06383c2572db9ee)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument users", value=users, expected_type=type_hints["users"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
            "users": users,
        }

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: The cluster ID.
        '''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def users(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUsers.UsersProperty]]]:
        '''
        :Property: users: The information about the users.
        '''
        result = self._values.get("users")
        assert result is not None, "Required property 'users' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUsers.UsersProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUsersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IUsers)
class Users(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ehpc.Users",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::EHPC::Users``, which is used to add one or more users to a specified cluster.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosUsers``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-users
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["UsersProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b83c29fb8566ce03f806fffab6b6acca30901dfb2e3bf5e1e36afd3b8d70b52b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UsersProps":
        return typing.cast("UsersProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4433ffa7298dc084a0d233f83215deaf639e3953187c01af695baed1f866547b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__859a4f90e488ff2e1475f4c4ad759aaeb050ac9896675bb63e4f1cded75cebfa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a3e3280e4254679b14607ac376ca5caf40bfe1ec0a5894ca43e83a3f88341ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ehpc.UsersProps",
    jsii_struct_bases=[],
    name_mapping={"cluster_id": "clusterId", "users": "users"},
)
class UsersProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        users: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUsers.UsersProperty, typing.Dict[builtins.str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``Users``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-users

        :param cluster_id: Property clusterId: The cluster ID.
        :param users: Property users: The information about the users.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b8900b3d7e0fa5359626dcde2735b1053a653e5bde68ebd72300990a52b9a74)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument users", value=users, expected_type=type_hints["users"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
            "users": users,
        }

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterId: The cluster ID.'''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def users(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUsers.UsersProperty]]]:
        '''Property users: The information about the users.'''
        result = self._values.get("users")
        assert result is not None, "Required property 'users' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUsers.UsersProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UsersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IAutoScaleConfig)
class AutoScaleConfig(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ehpc.AutoScaleConfig",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::EHPC::AutoScaleConfig``, which is used to configure the auto scaling settings of a cluster.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAutoScaleConfig``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-autoscaleconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AutoScaleConfigProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__871b92a5787489715c1b4796c24157ba88adefdd89167ef4e90f7ab3fc2d0f7a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: Cluster Id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AutoScaleConfigProps:
        return typing.cast(AutoScaleConfigProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__578c9e3d0590cd54425c57fbb7e2940db643ac253499bfbb3003ce94ed029c1a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5a5914f47bd397b28e01e81133069ecdb667e867f65c1f38b875a399b2f7262)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a1d698c8ee2c7b635c92474762c28cee493d181b4c5e7d3ad4d8adf63cbd2b79)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(ICluster)
class Cluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ehpc.Cluster",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::EHPC::Cluster``, which is used to create an Elastic High Performance Computing (E-HPC) cluster.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCluster``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-cluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ClusterProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42fad8b829254cde00b4b66624801be4034f9a3b2e118a654013f4c23ac80df2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: Cluster Id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrEcsInfo")
    def attr_ecs_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EcsInfo: A data structure describing the number and specifications of ECS for various components of the cluster.

        You will get results similar to the following: EcsInfo: {"Manager": {"Count": 2, "InstanceType": "ecs.n1.large"}, "Compute": {"Count": 8, "InstanceType": "ecs.n1.large"}, "Login": {"Count": 1, "InstanceType": "ecs.n1.large"}}
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEcsInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: Cluster name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityGroupId: Security group ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClusterProps:
        return typing.cast(ClusterProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce0732b218bac6cbdb7885c797f110458c5b9d7b8e0fca568128cb06571a04ba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b29617f38f40d229034c80b764dede731aed203cc1712bee252f69976900a549)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__660d2c1a7baa8a5876fa3c35888ac6123ccf99c99a80e80ca6de3239d8547426)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IClusterV2)
class ClusterV2(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ehpc.ClusterV2",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::EHPC::ClusterV2``, which is used to create a cluster in Elastic High Performance Computing (E-HPC) of the new version.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosClusterV2``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-clusterv2
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ClusterV2Props, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9a61fff66aac8fb4773c5af2f24250ea874af08cf5552eff0a6a12bccf5375da)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: Cluster Id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClusterV2Props:
        return typing.cast(ClusterV2Props, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a69f6f20b7f6afacdffca877bf962be54146a4319cd232f82ffa0ec08eb5ca1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b64d8811c79f1557ac130662a817ac9925921482bf05fc2e10e5ef270790aec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__876d7b28861e7a4ad52eb0ba536ec21e797f8a074f27a1782a5c646b2dbdedbc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "AutoScaleConfig",
    "AutoScaleConfigProps",
    "Cluster",
    "ClusterProps",
    "ClusterV2",
    "ClusterV2Props",
    "IAutoScaleConfig",
    "ICluster",
    "IClusterV2",
    "IUsers",
    "RosAutoScaleConfig",
    "RosAutoScaleConfigProps",
    "RosCluster",
    "RosClusterProps",
    "RosClusterV2",
    "RosClusterV2Props",
    "RosUsers",
    "RosUsersProps",
    "Users",
    "UsersProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__196d52035879bf00b7184dea87eeacd9bfe3bfa64e309819dc860bccc220f2d9(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    enable_auto_grow: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_auto_shrink: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    exclude_nodes: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    extra_nodes_grow_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    grow_interval_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    grow_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    grow_timeout_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_nodes_in_cluster: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    queues: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAutoScaleConfig.QueuesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    shrink_idle_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    shrink_interval_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__45e193143351251319a5627dd2ae3499075d631305c83a432861b0b284235a34(
    *,
    ecs_order_compute_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ecs_order_compute_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ecs_order_login_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ecs_order_login_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ecs_order_manager_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    additional_volumes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.AdditionalVolumesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    application: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.ApplicationProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    client_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    compute_enable_ht: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    compute_spot_price_limit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    compute_spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deploy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_order_manager_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ehpc_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ha_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_owner_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    input_file_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_compute_ess: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    job_queue: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network_interface_traffic_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    os_tag: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    post_install_script: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.PostInstallScriptProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ram_node_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ram_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    remote_directory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    remote_vis_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scc_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scheduler_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_mountpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    without_elastic_ip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0f1ec5c2f0d2bb7b14186fb5766e0b8523232ae58574a3360496e6f5df5d0df(
    *,
    cluster_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    shared_storages: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.SharedStoragesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    additional_packages: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.AdditionalPackagesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    addons: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.AddonsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    client_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_credentials: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.ClusterCredentialsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    cluster_custom_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.ClusterCustomConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    cluster_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    manager: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.ManagerProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    max_core_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    queues: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.QueuesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosClusterV2.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e6aa3a147ede06e83fbeb4315c5101912fc2a982848075b358e751418ba52ec(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAutoScaleConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52c9bcab2898982620100e8afb81348f593abb2657af225d289f72561a50dc01(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fef2d493a4213be1ae35c64fd562de14cdba28cc1115d9254813bc309f9e80a7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__747c41aebd15546922847383a55a3b84e5455a9cf295e054acbc568e174d0526(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bcaaed7b479ebb2284a85d268698232ab66ca8db3067cb0c46e28d08f434492e(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c77607b7f550120466836d948b578ecbd9d393e97f72b0754be58d8b1aaf3ab6(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29b6f058b52f19cf24326d4260893bae238df966af5c490433da5566f2026919(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63f23a241a75ed57a74039e387b7fb929befcb7736619afc8ab0763d2e64bd17(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09a7cb6fd221814ea9f72a243e3b5afa22ab9ef202db82e85d0833bcd9e65ecf(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__999d92e0bce30dda57e3ccd922ad611d18b485722a2cc374d99eb4ae047918c8(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__772ed5b0016d0f2bfdad234649dc20809d39aff1c2e5e8210134395724d5e00c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b8d6ac888e1527778bd98c8936cdc0d6a5aa69ebb096bc43de04c9f661c0114(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__896a0afa37141b9f5672200c0a9571cb6c229736a95ffcf16f878b406d49e348(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02ce51878aaca07f205a84d3429d425f89ada6a958b1e0c5d818635a5088d11a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAutoScaleConfig.QueuesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a54e2edb75347b44916d732ca529551820705aa21ce763a40f6be2745468b0d0(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e43451a7f375511269acd231ddd4f1bd7dd4fbc36d273eeb3bb3824fa738f6d(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73a8d0109ee8c3a0cd73cc459ae668f970f8e68e3af8ad166452dd37d81b21fe(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1abe4597b590dbe3d2c3de16f154b753392a081f4934eaf52ef49846ec103de5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8898d1e5b9634a3b2524bf8d141df15fc3a1415239536314b090cb16db48f424(
    *,
    data_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_disk_delete_with_instance: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_disk_encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_disk_kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d167d30cbe4d4102e62760d61cf3096d77424041b9175713e4beca1a2048d2e7(
    *,
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a4ab527712ba869a751af8d2f99de8772b964e864912bb8d2debf26be716578(
    *,
    data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAutoScaleConfig.DataDisksProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    enable_auto_grow: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_auto_shrink: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_name_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_name_suffix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAutoScaleConfig.InstanceTypesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    max_nodes_in_queue: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_nodes_per_cycle: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    min_nodes_in_queue: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    min_nodes_per_cycle: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    queue_image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    queue_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__527569db2babe86e47fee4c8b26c23d682c7cbf15f4c8858bc4221fc2b2da6c8(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    enable_auto_grow: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_auto_shrink: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    exclude_nodes: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    extra_nodes_grow_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    grow_interval_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    grow_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    grow_timeout_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_nodes_in_cluster: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    queues: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAutoScaleConfig.QueuesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    shrink_idle_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    shrink_interval_in_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf93d989786b299a7833199d65147d8075a203cba28aee188bd9dc8d127864a2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c16cc463df9bd416f4663a0515a5b8f67111cde04577c2e89746bf1aee1bfb1(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__011909b9f7478db8d3e01d15c8e18a6c063eab31685533c356c968a9a49aa581(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd5c2642f0a44ed0abe0f563e22eea45e303b9d647adeb1db75d51be5874dc13(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__442acdebf2f065232ea367d5983c3f18ed6d621b479297ad1030c25f810dd5ab(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e53c7928b3b53d98e4a53c1e42762a8d8c696667f8d3820a8b191ce7b9004bee(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6685a8b886f129222820659b26ef3d1bcfea35e44ef743c8e80674df50e0e3c5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9675e0300f626dc93caa437a6a6a116bfdc347d690ea833a87d144962402171(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23d4209ba794939b3d8e069503780aa5758947ddf750d6f695dbfcefacb47bca(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e1264e301623e85196ffefec0bcfc8bc19570fb2ecf768ba0d5d4ca4c2b771b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd95cf09d7b4deec1a52f53ffbe408a26c21d094bb68a8628a4763d4513f592f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd3aa0fc9b29b3b357f9f1691162543c7fb36135ffdbfeff299dc1ccb3b0b292(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.AdditionalVolumesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1f817c99fa88d2cf61097b18f1a8cab8436beb3dc65d787c3cdf76d07949b4d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.ApplicationProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7bc77fcdedcc6a20cc568ca4697eb2d19d8c1bee2cc02832cf4352d115d06a1c(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83163176f4265844a9c7b7672e49a3fccb0347a9a85550e49260992da495d840(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28cf772b526ea2f695a6ba87c1b47c77471dcc01de6781382f580983bb564e2b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d07de26c8a7c217859a0a87e930c2b6bc5169d5c9411d249203241db9b5308f6(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__84d101d934cfec211821e325182d34e8baa1936a1449a8669cc2f8f38101c118(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__04fd17506be7e28b16c12e89a9989b5f52c377a549ef3c99620eeeabe84d0831(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67e0069b30be5334aca0e38f3140a3bb6220a51cb3247cd23a9a57ce1e8bea87(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3fb252a4810d5f659209965c392b66698435db4866f405a09a97112ddd7d22cd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cad091f7522b589ac02ee3e7f489e78f4a87f1e9684cfa27caf80ebbb3d6f082(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0ab1df340496c9abd4a315fcd9f0a2b9c0f38bb2e8649d419da5c3f271f61e78(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81c960b8eb91fb2154c762da4a1825bfce99419896f27d82d6c33101c50dc3a5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a676bb10dbf7fb79da1681e849e71ea0dc4ccead98b07e97d026b61a8b8070a5(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c93f309f1b47355df4b0e5b95d509eb5b73804d2feefa1efa7f6d43578d1ab1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e51df2fc113d1cf59a2222418e5e4076bba1fd8e6a8be952f2c8f36178e3724(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a736d2f2f170307b01546fb9e719e74a29746621c6c4eff24dfb0e258d2118ac(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe23634f9a834032a4e7a6e5fe4bb4fc2e6393a81a873f0291c5ada7bb5f7ab7(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0651dba12f1f67b4544fbc0b421a29b0b29e2b725d212699a2e1c036b4a35b2e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79d17d537aa8fc0fec83073478f30c897043ef2a67b66d3bfca3164af45b4e72(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bfb99fc70b338d879cdd49a21ce20ef2506bbca4d30386a86e6c1586e4361f27(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae6a7faa5e4c00d6e2a830f72ebcb41a67489d2ed99706e6c22289abeb95d234(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__657e009d65230e887e3a27f351cf58104406994874996458415b6700cfcf8bd3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23fb6535c6582e9aafae54321bd979c9eb430b0ca2547d51324d5f971c25b97b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a714bdfa0670bcb42c0993c5737a90af245b5930f4fd23d562c5311bd4d70f7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34de0b293259def086d741f7c0e7dab754bceb4a2ec89ed01e9fa055c0598090(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.PostInstallScriptProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__edd563d558f549cca80e3f6a0c2ef3a5b19a4cec7fde5e3ce2ee5a97ac9978da(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52fef3915c83026696f5c5ea99b7990c22ababa1660825e622cbfbc4922120ce(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5bbebac803f7af975e311d295ca881a957d7c0c4149b219ad45beb2ad3b64e59(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__308bc690fb0ad5800270e9d466ab5420d3f7722b1b4e13f2b71d21d5401a059f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74105de73744288f5040a4c9e0c31bb5b13dc782555399eb665e4216f46a92ca(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c3d96c1e3c2250eb0bc9b2d51104f98f51032e52618818071381e2a0c063303(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b54659551ac4a234501cd61490320d484daaa2d21d1549fc681f0114cb3c80ed(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a11181dd640ee823b32f36010f92d14c6edd2b0a78370e03063c55376ed9971f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01f2c0581699ece08c4bdba215dfa9c1b8ce57f153b3b2c52aa8acbe7a79302f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c1ae049b76b16c2525dba7017ddafdaec286e526d82fab2b4f9ccaff1a8149c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0de2102d5cb73b2217c541186305c8cd330008ce9d6a598e71710e4b225b3295(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15b80086c31a65901fa49e921bf5deb821b8b056f5531161e8e895e5f4e50a65(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__feb25ac143d8c65bf76f43af5b2e71a82e63613a09cddc781de8dc56ba26cae1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__191c0053df3422e2951f31fe3030aa6c11088cf00ca8f7f46b326f1e34cdd55d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a57c8244dacb5aa00bb77fb51c75e19b43d48a5b270fae9bafd68041efe0c883(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2dec30dc8c5046fb2006cea3dd3c5e2e9828cdd220ed1c01737d958494b39ef5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd3e234a35f9d55bfe5f5aae3488605895e582893604b831cf311284e134172a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c3c0168ad4a9ee650b34b52f9e920272235e20c6d8cf780b3fddf51773dfd24(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42d21b2922e8df9ad551fc1fb204f7b5763731844edff20520b5e67b700ab88a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__078f69ae7a13d416f6d6917f77c4c80846f7ad6897a4b5a55b4ce01acbffac2c(
    *,
    local_directory: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    volume_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    volume_mountpoint: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    job_queue: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    location: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    remote_directory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91f667542426b4e96f766ac0d0ce1a1c60e5a9f5ffd3fff89c86ea88186ea8c9(
    *,
    tag: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0418a5eec8fe94e92a82f369e91ee5c99a421ee24d25814a12e30b6972af9205(
    *,
    args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9544891090de6cbb7ca4fdd01d92448fdfc3c5efc0f3980d28ff825c1725bef(
    *,
    ecs_order_compute_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ecs_order_compute_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ecs_order_login_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ecs_order_login_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ecs_order_manager_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    additional_volumes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.AdditionalVolumesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    application: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.ApplicationProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    client_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    compute_enable_ht: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    compute_spot_price_limit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    compute_spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deploy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_order_manager_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ehpc_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ha_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_owner_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    input_file_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_compute_ess: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    job_queue: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network_interface_traffic_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    os_tag: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    post_install_script: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.PostInstallScriptProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ram_node_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ram_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    remote_directory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    remote_vis_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scc_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scheduler_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_mountpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    without_elastic_ip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c99fcb3d02927b82ba86f88943f88a4dac4582dfc273bffab860e175b92ee836(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosClusterV2Props, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__106beb202ce48f7eae9704b8ce0fa78e50cc66f03e75032a9ae82dfaf54a9c62(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06b6abf6c5c06a39d461151257ad6e3fcaa14d67f1799b0e83e20ebe13f151a6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c68026839f428595e644cbf93b028e96167b667c748bef2102c4f0dba9e77b6e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3802a4b49330d1cb92ab943722d851078e0fea00b373a849cbd7c150c3e25874(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterV2.SharedStoragesProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01e4ab9bc83542a351ab637b53db67333dd686a1a219b586cc7ee8f957b172cd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a402d62e8bd9bbddee18d1de69b806871db1266278dec06f503db4d4605570a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b43219aaba8e0fda1c4883eb6796430139fb41e53b3ab343f8a4eb79d490ff5(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterV2.AdditionalPackagesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29bc3b2e3a59a769f8526ae9eb1a85bca185e58978bd4665d5e18508bbe67bca(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterV2.AddonsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cde486f5a861db4af068b7c204b1cb17d9b15f92cb052e0a21d62dda34f5425e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__71481e6a2e18e4c1d22a816246d77fc95388148e12df560d108d36491ab7e20f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4461d52f86b0d1b2c697f484d443d1d3230fd33f6a21716f0f9144e70620807(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterV2.ClusterCredentialsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56059e6a08f4bfc2399c4a04c1efbbc147c036783ed27f420ac50cd618ea3860(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterV2.ClusterCustomConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de209a339fe1ce143ac9daf0a937e2bf8752d5b2ff9d145a75933b7b98538945(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4390b11c4cfc84a0d9cc71190aa3c1913f52c9a9f07757d629324a3f5568e064(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18c36e717ef5a919f6a5e4ff66f1adc1915f244f1ed4a4074fb3766ae1412459(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__790698405776dc4f05df9398f9d2e318ed058590895ee0cd97f7c73174fa25ca(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6dda2e4c7af7fcf3c99a276f20eee2f36b375c6e3533829e59e0a9e36495dc50(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterV2.ManagerProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c13ebd372d016e614a1741448ae4b481078909dc8383e7ea503e4673c604c53b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94b03eb0658b3ed8dbbc0bf2bc844be7819145fe65ece32741837ac5f9e66eb4(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4e3527af0a7a0b6eac79265f8bc95c941257b135a61375495ad9eef8fef12a7(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterV2.QueuesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1493cdfc72fa5a688b837362ef1c001992c7baadba14caaeaf0deaff7d00940(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__21e5344655ab1a30f1f8d9a95e36eb34cbeba668dac4f3adab15d996e984f7a6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2d480beaf5c358f437d2a21f1997c97dea4473f3695f1e07cac7d8b9edbf74f(
    value: typing.Optional[typing.List[RosClusterV2.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d17e772ffe710ac103417743c1c0205d756c9531079305545e3f521a76e815dc(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87925780fa00ce176f212b9bb4ac1f412bedf941bbfe1f5fa3da79fa086fe98d(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resources_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    services_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4b7caa60e476dc89b728f16c56e8f90768ae34bd8bcce436f4ce3d11d9737ff(
    *,
    key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__edc87208f043af02de7ce037caf33ea2a59c1d9b4064361942c20e6277997616(
    *,
    args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    script: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f782c4bd5949858739f8629c8e7179f45cf872cdc9e062686f31b929ea435e78(
    *,
    image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    system_disk: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.SystemDiskProperty, typing.Dict[builtins.str, typing.Any]]],
    data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.DataDisksProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_ht: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01bf151d721c00946f4d178e6e4d47d7cf79ca716b188c32232e4237c73f72e7(
    *,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__838137c16d2e4f078a514726d1034c1ad336a2bf5681e1bdceceb1d3b55b6f21(
    *,
    category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    delete_with_instance: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mount_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef07b62e8f737fd16ffe56250c87001a71c2cd9551192a5490f1ea45c631a2db(
    *,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0dcce16763aa57d2695612bdeba8dafad13cec2cada0cfb1455c5398db3afa7c(
    *,
    category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    delete_with_instance: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mount_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70ae3fb1e0585712110b7cbfd6df2bf7d9ca11af48c18afe548ad4e1280ebe56(
    *,
    image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    system_disk: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.ManagerNodeSystemDiskProperty, typing.Dict[builtins.str, typing.Any]]],
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.ManagerNodeDataDisksProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    enable_ht: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fbcafa106d4e84dede5aae9ae147d4efcb2d2e4e13b7e9293bb8829627c7d4b(
    *,
    category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__855e159350535b4ae543bd83cfd25eecc0d4cf362efe0a813ee16371a6df44b9(
    *,
    directory_service: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.DirectoryServiceProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    dns: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.DNSProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    manager_node: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.ManagerNodeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    scheduler: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.SchedulerProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b49af4be06863c95c6de1e8bd3b1b48f023c86567c3e75cccbd7b05a795cc177(
    *,
    queue_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    allocation_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    compute_nodes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.ComputeNodesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    enable_scale_in: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_scale_out: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    hostname_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    hostname_suffix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    initial_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    inter_connect: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    keep_alive_nodes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    max_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_count_per_cycle: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    min_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ram_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b2bffa600b531264afcbda482fb08653830591b91e6e86c566afe61234fd1ba(
    *,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__235413b66c215abb9dbaa33cee4eb7a0a04b74dd86d0c9dd5c877cac5d0f7b0e(
    *,
    file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    mount_target_domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    mount_directory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mount_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nas_directory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protocol_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e7c95e85592a491fff02c00cfb3e4d54433dc8dfa14c92f699d0c9532c4db12c(
    *,
    category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1e2bc4e4d4de777df6d685d7036ac34db68492b445970214178c66248a43bbd(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e24f1d14f50226f7ba0e5124e99605b4ed4526675c72d1f24f18e949278a9508(
    *,
    cluster_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    shared_storages: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.SharedStoragesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    additional_packages: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.AdditionalPackagesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    addons: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.AddonsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    client_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_credentials: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.ClusterCredentialsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    cluster_custom_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.ClusterCustomConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    cluster_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    manager: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.ManagerProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    max_core_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    queues: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterV2.QueuesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosClusterV2.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2823654dc384d7e64250506020a517553473a533499d8d98251d21866998f90(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosUsersProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a8f0884345719a77c569462e5694deda8eb3c027fda2cf9997b458340f0df40(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b38d2f9dfcd4188ae98a3b725db1ec520fae336e679b6f9a03a2866043e98076(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c7c9e4b86c0d437cfd2868ebb9d0a1bd575ccb53876793cc62a98f239e0574d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__462685c1d2a1342da07c72bcce83c4b2d65633abac953130f1e49275260fd5f9(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUsers.UsersProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0a365e81aefa64fef0444672af32f4d98f670d7348ac31f7a3f2f1c5a98ab3f(
    *,
    group: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba8677669a0755dfad0df0be981fd888520f73dd790cc623c06383c2572db9ee(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    users: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUsers.UsersProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b83c29fb8566ce03f806fffab6b6acca30901dfb2e3bf5e1e36afd3b8d70b52b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[UsersProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4433ffa7298dc084a0d233f83215deaf639e3953187c01af695baed1f866547b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__859a4f90e488ff2e1475f4c4ad759aaeb050ac9896675bb63e4f1cded75cebfa(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a3e3280e4254679b14607ac376ca5caf40bfe1ec0a5894ca43e83a3f88341ef(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b8900b3d7e0fa5359626dcde2735b1053a653e5bde68ebd72300990a52b9a74(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    users: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUsers.UsersProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__871b92a5787489715c1b4796c24157ba88adefdd89167ef4e90f7ab3fc2d0f7a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AutoScaleConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__578c9e3d0590cd54425c57fbb7e2940db643ac253499bfbb3003ce94ed029c1a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5a5914f47bd397b28e01e81133069ecdb667e867f65c1f38b875a399b2f7262(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1d698c8ee2c7b635c92474762c28cee493d181b4c5e7d3ad4d8adf63cbd2b79(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42fad8b829254cde00b4b66624801be4034f9a3b2e118a654013f4c23ac80df2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce0732b218bac6cbdb7885c797f110458c5b9d7b8e0fca568128cb06571a04ba(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b29617f38f40d229034c80b764dede731aed203cc1712bee252f69976900a549(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__660d2c1a7baa8a5876fa3c35888ac6123ccf99c99a80e80ca6de3239d8547426(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a61fff66aac8fb4773c5af2f24250ea874af08cf5552eff0a6a12bccf5375da(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ClusterV2Props, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a69f6f20b7f6afacdffca877bf962be54146a4319cd232f82ffa0ec08eb5ca1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b64d8811c79f1557ac130662a817ac9925921482bf05fc2e10e5ef270790aec(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__876d7b28861e7a4ad52eb0ba536ec21e797f8a074f27a1782a5c646b2dbdedbc(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
