'''
## Aliyun ROS EMR Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as EMR from '@alicloud/ros-cdk-emr';
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


class Cluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-emr.Cluster",
):
    '''A ROS resource type:  ``ALIYUN::EMR::Cluster``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EMR::Cluster``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa299a15384acbfe06d615b276f273b0e7bd8f7ea216d9e4bce353702a6b64d7)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterId: The ID of the cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrHostGroups")
    def attr_host_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HostGroups: The host group list of the cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostGroups"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterNodeInnerIps")
    def attr_master_node_inner_ips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MasterNodeInnerIps: The inner ip list of the cluster master nodes.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterNodeInnerIps"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterNodePubIps")
    def attr_master_node_pub_ips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MasterNodePubIps: The public ip list of the cluster master nodes.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterNodePubIps"))


class Cluster2(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-emr.Cluster2",
):
    '''A ROS resource type:  ``ALIYUN::EMR::Cluster2``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["Cluster2Props", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EMR::Cluster2``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b22784d7f33ab87c26d306638862c8d1982c5b56eeb52cfcedd3e7e9dd75f2c9)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterId: Cluster ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-emr.Cluster2Props",
    jsii_struct_bases=[],
    name_mapping={
        "applications": "applications",
        "cluster_name": "clusterName",
        "cluster_type": "clusterType",
        "node_attributes": "nodeAttributes",
        "node_groups": "nodeGroups",
        "release_version": "releaseVersion",
        "application_configs": "applicationConfigs",
        "bootstrap_scripts": "bootstrapScripts",
        "deploy_mode": "deployMode",
        "payment_type": "paymentType",
        "resource_group_id": "resourceGroupId",
        "security_mode": "securityMode",
        "subscription_config": "subscriptionConfig",
        "tags": "tags",
    },
)
class Cluster2Props:
    def __init__(
        self,
        *,
        applications: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster2.ApplicationsProperty", typing.Dict[builtins.str, typing.Any]]]]],
        cluster_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        node_attributes: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster2.NodeAttributesProperty", typing.Dict[builtins.str, typing.Any]]],
        node_groups: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster2.NodeGroupsProperty", typing.Dict[builtins.str, typing.Any]]]]],
        release_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        application_configs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster2.ApplicationConfigsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        bootstrap_scripts: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster2.BootstrapScriptsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        deploy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        subscription_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster2.SubscriptionConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosCluster2.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EMR::Cluster2``.

        :param applications: Property applications: Application List.The value range of the number n of the number N group: 1 ~ 100.
        :param cluster_name: Property clusterName: Cluster name.The length is 1 ~ 128 characters, and the alphabet or Chinese must be started. It cannot start with http:// and https: //.It can include Chinese, English, numbers, half-horn colons (:), down line (_), half-angle period (.) Or short lines (-).
        :param cluster_type: Property clusterType: Cluster type.Ranges: Datalake: The new version of the data lake. OLAP: Data analysis. DataFlow: Real -time data stream. DataServing: Data service. Hadoop: The old version of the data lake (not recommended, it is recommended to use the new version of the data lake).
        :param node_attributes: Property nodeAttributes: Node attributes.All ECS nodes basic attributes of the cluster.
        :param node_groups: Property nodeGroups: The node group configuration array.The value range of the number n of the number N group: 1 ~ 100.
        :param release_version: Property releaseVersion: EMR release version.View EMR distribution versions can be viewed through the EMR cluster.
        :param application_configs: Property applicationConfigs: Application configuration.The value range of the number n of the array element n: 1 ~ 1000.
        :param bootstrap_scripts: Property bootstrapScripts: Guide the script group.The value range of the number n of the number N group: 1 ~ 10.
        :param deploy_mode: Property deployMode: Application deployment mode in the cluster.Ranges: Normal: non -high available deployment.Cluster 1 master node. HA: High availability deployment.High availability deployment requires at least 3 master nodes.
        :param payment_type: Property paymentType: Payment type. Ranges: PayAsYouGo: Post-paid, pay-as-you-go. Subscription: Prepaid, yearly and monthly. Default: PayAsYouGo.
        :param resource_group_id: Property resourceGroupId: Resource group ID.
        :param security_mode: Property securityMode: Cluster Kerberos security mode.Ranges: Normal: General mode, does not open the Kerberos mode. Kerberos: Open the Kerberos mode.
        :param subscription_config: Property subscriptionConfig: Pre -paid allocation.When the value of PaymentType is Subscripting, it must be filled.
        :param tags: Property tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e7f5155af542d0f61b897e0af544df17f57f93915a8d4e7aee755b062f9214f)
            check_type(argname="argument applications", value=applications, expected_type=type_hints["applications"])
            check_type(argname="argument cluster_name", value=cluster_name, expected_type=type_hints["cluster_name"])
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument node_attributes", value=node_attributes, expected_type=type_hints["node_attributes"])
            check_type(argname="argument node_groups", value=node_groups, expected_type=type_hints["node_groups"])
            check_type(argname="argument release_version", value=release_version, expected_type=type_hints["release_version"])
            check_type(argname="argument application_configs", value=application_configs, expected_type=type_hints["application_configs"])
            check_type(argname="argument bootstrap_scripts", value=bootstrap_scripts, expected_type=type_hints["bootstrap_scripts"])
            check_type(argname="argument deploy_mode", value=deploy_mode, expected_type=type_hints["deploy_mode"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_mode", value=security_mode, expected_type=type_hints["security_mode"])
            check_type(argname="argument subscription_config", value=subscription_config, expected_type=type_hints["subscription_config"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "applications": applications,
            "cluster_name": cluster_name,
            "cluster_type": cluster_type,
            "node_attributes": node_attributes,
            "node_groups": node_groups,
            "release_version": release_version,
        }
        if application_configs is not None:
            self._values["application_configs"] = application_configs
        if bootstrap_scripts is not None:
            self._values["bootstrap_scripts"] = bootstrap_scripts
        if deploy_mode is not None:
            self._values["deploy_mode"] = deploy_mode
        if payment_type is not None:
            self._values["payment_type"] = payment_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_mode is not None:
            self._values["security_mode"] = security_mode
        if subscription_config is not None:
            self._values["subscription_config"] = subscription_config
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def applications(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.ApplicationsProperty"]]]:
        '''Property applications: Application List.The value range of the number n of the number N group: 1 ~ 100.'''
        result = self._values.get("applications")
        assert result is not None, "Required property 'applications' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.ApplicationsProperty"]]], result)

    @builtins.property
    def cluster_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterName: Cluster name.The length is 1 ~ 128 characters, and the alphabet or Chinese must be started. It cannot start with http:// and https: //.It can include Chinese, English, numbers, half-horn colons (:), down line (_), half-angle period (.) Or short lines (-).'''
        result = self._values.get("cluster_name")
        assert result is not None, "Required property 'cluster_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterType: Cluster type.Ranges: Datalake: The new version of the data lake. OLAP: Data analysis. DataFlow: Real -time data stream. DataServing: Data service. Hadoop: The old version of the data lake (not recommended, it is recommended to use the new version of the data lake).'''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def node_attributes(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.NodeAttributesProperty"]:
        '''Property nodeAttributes: Node attributes.All ECS nodes basic attributes of the cluster.'''
        result = self._values.get("node_attributes")
        assert result is not None, "Required property 'node_attributes' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.NodeAttributesProperty"], result)

    @builtins.property
    def node_groups(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.NodeGroupsProperty"]]]:
        '''Property nodeGroups: The node group configuration array.The value range of the number n of the number N group: 1 ~ 100.'''
        result = self._values.get("node_groups")
        assert result is not None, "Required property 'node_groups' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.NodeGroupsProperty"]]], result)

    @builtins.property
    def release_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property releaseVersion: EMR release version.View EMR distribution versions can be viewed through the EMR cluster.'''
        result = self._values.get("release_version")
        assert result is not None, "Required property 'release_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def application_configs(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.ApplicationConfigsProperty"]]]]:
        '''Property applicationConfigs: Application configuration.The value range of the number n of the array element n: 1 ~ 1000.'''
        result = self._values.get("application_configs")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.ApplicationConfigsProperty"]]]], result)

    @builtins.property
    def bootstrap_scripts(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.BootstrapScriptsProperty"]]]]:
        '''Property bootstrapScripts: Guide the script group.The value range of the number n of the number N group: 1 ~ 10.'''
        result = self._values.get("bootstrap_scripts")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.BootstrapScriptsProperty"]]]], result)

    @builtins.property
    def deploy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deployMode: Application deployment mode in the cluster.Ranges: Normal: non -high available deployment.Cluster 1 master node. HA: High availability deployment.High availability deployment requires at least 3 master nodes.'''
        result = self._values.get("deploy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property paymentType: Payment type.

        Ranges:
        PayAsYouGo: Post-paid, pay-as-you-go.
        Subscription: Prepaid, yearly and monthly.
        Default: PayAsYouGo.
        '''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group ID.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityMode: Cluster Kerberos security mode.Ranges: Normal: General mode, does not open the Kerberos mode. Kerberos: Open the Kerberos mode.'''
        result = self._values.get("security_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def subscription_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.SubscriptionConfigProperty"]]:
        '''Property subscriptionConfig: Pre -paid allocation.When the value of PaymentType is Subscripting, it must be filled.'''
        result = self._values.get("subscription_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.SubscriptionConfigProperty"]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosCluster2.TagsProperty"]]:
        '''Property tags: Tags to attach to cluster.

        Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosCluster2.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "Cluster2Props(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-emr.ClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "charge_type": "chargeType",
        "cluster_type": "clusterType",
        "emr_ver": "emrVer",
        "host_group": "hostGroup",
        "name": "name",
        "net_type": "netType",
        "use_local_meta_db": "useLocalMetaDb",
        "zone_id": "zoneId",
        "authorize_content": "authorizeContent",
        "auto_renew": "autoRenew",
        "bootstrap_action": "bootstrapAction",
        "click_house_conf": "clickHouseConf",
        "config": "config",
        "configurations": "configurations",
        "deposit_type": "depositType",
        "eas_enable": "easEnable",
        "high_availability_enable": "highAvailabilityEnable",
        "init_custom_hive_meta_db": "initCustomHiveMetaDb",
        "instance_generation": "instanceGeneration",
        "io_optimized": "ioOptimized",
        "is_open_public_ip": "isOpenPublicIp",
        "key_pair_name": "keyPairName",
        "log_path": "logPath",
        "machine_type": "machineType",
        "master_pwd": "masterPwd",
        "meta_store_conf": "metaStoreConf",
        "meta_store_type": "metaStoreType",
        "option_soft_ware_list": "optionSoftWareList",
        "period": "period",
        "related_cluster_id": "relatedClusterId",
        "resource_group_id": "resourceGroupId",
        "security_group_id": "securityGroupId",
        "security_group_name": "securityGroupName",
        "ssh_enable": "sshEnable",
        "tags": "tags",
        "use_custom_hive_meta_db": "useCustomHiveMetaDb",
        "user_defined_emr_ecs_role": "userDefinedEmrEcsRole",
        "user_info": "userInfo",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "white_list_type": "whiteListType",
    },
)
class ClusterProps:
    def __init__(
        self,
        *,
        charge_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        emr_ver: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host_group: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster.HostGroupProperty", typing.Dict[builtins.str, typing.Any]]]]],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        net_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        use_local_meta_db: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        authorize_content: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bootstrap_action: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster.BootstrapActionProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        click_house_conf: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster.ConfigProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        configurations: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deposit_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        eas_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        high_availability_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        init_custom_hive_meta_db: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_generation: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        io_optimized: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_open_public_ip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        machine_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_pwd: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        meta_store_conf: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        meta_store_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        option_soft_ware_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        related_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ssh_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosCluster.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        use_custom_hive_meta_db: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_defined_emr_ecs_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster.UserInfoProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        white_list_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EMR::Cluster``.

        :param charge_type: Property chargeType: The billing method. Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid: subscription.
        :param cluster_type: Property clusterType: The type of the cluster. Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
        :param emr_ver: Property emrVer: The version of EMR.
        :param host_group: Property hostGroup:.
        :param name: Property name: The name of the cluster. The name can be 1 to 64 characters in length and only contain Chinese characters, letters, numbers, hyphens (-), and underscores (_).
        :param net_type: Property netType: The type of the network.
        :param use_local_meta_db: Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used.
        :param zone_id: Property zoneId: The zone ID.
        :param authorize_content: Property authorizeContent: Not required.
        :param auto_renew: Property autoRenew: Indicates whether the subscription cluster is auto-renewed.
        :param bootstrap_action: Property bootstrapAction:.
        :param click_house_conf: Property clickHouseConf: undefined.
        :param config: Property config:.
        :param configurations: Property configurations: Not required.
        :param deposit_type: Property depositType: The hosting type.
        :param eas_enable: Property easEnable: Indicates whether the cluster is a high-security cluster.
        :param high_availability_enable: Property highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster. A value of true indicates that two master nodes are required.
        :param init_custom_hive_meta_db: Property initCustomHiveMetaDb: A reserved parameter. Not required.
        :param instance_generation: Property instanceGeneration: The generation of the ECS instances.
        :param io_optimized: Property ioOptimized: Indicates wether I/O optimization is enabled. Default value: true.
        :param is_open_public_ip: Property isOpenPublicIp: Indicates whether a public IP address is assigned. A value of true indicates that a bandwidth of 8 MB is set by default.
        :param key_pair_name: Property keyPairName: The name of the key pair.
        :param log_path: Property logPath: The log path in OSS.
        :param machine_type: Property machineType: The type of the machine.
        :param master_pwd: Property masterPwd: The SSH password for the master node. The password must meet the following requirements. Length constraints: Minimum length of 8 characters. Maximum length of 30 characters. It must contain three types of characters (uppercase letters, lowercase letters, numbers, and special symbols).
        :param meta_store_conf: Property metaStoreConf: Meta store conf of specific meta store type. If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
        :param meta_store_type: Property metaStoreType: Meta store type. Allow types: local: Local cluster unified: Unified meta data user_rds: User's RDS
        :param option_soft_ware_list: Property optionSoftWareList: The list of optional services.
        :param period: Property period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
        :param related_cluster_id: Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param security_group_id: Property securityGroupId: The ID of the security group. You can create a security group in the ECS console and use it. Note: If you use an existing security group, the default security group policy is applied to this security group: Only port 22 is open at the inbound and all ports are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
        :param security_group_name: Property securityGroupName: The name of the security group to create. If the ID of the security group is not specified, this name is used to create a new security group. After the cluster is created, you can view the ID of the security group on the Cluster Management page. The default security group policy is applied to this security group: Only port 22 is open at the inbound and all ports are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
        :param ssh_enable: Property sshEnable: Indicates whether SSH is enabled.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        :param use_custom_hive_meta_db: Property useCustomHiveMetaDb: A reserved parameter. Not required.
        :param user_defined_emr_ecs_role: Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
        :param user_info: Property userInfo:.
        :param vpc_id: Property vpcId: The ID of the VPC. A value is required when NetType=vpc.
        :param v_switch_id: Property vSwitchId: The ID of the Vswitch. A value is required when NetType=vpc.
        :param white_list_type: Property whiteListType: Not required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__766dc60182425bbf8665cc25c688fab6752086812eb77d0957b01f40175c8335)
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument emr_ver", value=emr_ver, expected_type=type_hints["emr_ver"])
            check_type(argname="argument host_group", value=host_group, expected_type=type_hints["host_group"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument net_type", value=net_type, expected_type=type_hints["net_type"])
            check_type(argname="argument use_local_meta_db", value=use_local_meta_db, expected_type=type_hints["use_local_meta_db"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument authorize_content", value=authorize_content, expected_type=type_hints["authorize_content"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument bootstrap_action", value=bootstrap_action, expected_type=type_hints["bootstrap_action"])
            check_type(argname="argument click_house_conf", value=click_house_conf, expected_type=type_hints["click_house_conf"])
            check_type(argname="argument config", value=config, expected_type=type_hints["config"])
            check_type(argname="argument configurations", value=configurations, expected_type=type_hints["configurations"])
            check_type(argname="argument deposit_type", value=deposit_type, expected_type=type_hints["deposit_type"])
            check_type(argname="argument eas_enable", value=eas_enable, expected_type=type_hints["eas_enable"])
            check_type(argname="argument high_availability_enable", value=high_availability_enable, expected_type=type_hints["high_availability_enable"])
            check_type(argname="argument init_custom_hive_meta_db", value=init_custom_hive_meta_db, expected_type=type_hints["init_custom_hive_meta_db"])
            check_type(argname="argument instance_generation", value=instance_generation, expected_type=type_hints["instance_generation"])
            check_type(argname="argument io_optimized", value=io_optimized, expected_type=type_hints["io_optimized"])
            check_type(argname="argument is_open_public_ip", value=is_open_public_ip, expected_type=type_hints["is_open_public_ip"])
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
            check_type(argname="argument log_path", value=log_path, expected_type=type_hints["log_path"])
            check_type(argname="argument machine_type", value=machine_type, expected_type=type_hints["machine_type"])
            check_type(argname="argument master_pwd", value=master_pwd, expected_type=type_hints["master_pwd"])
            check_type(argname="argument meta_store_conf", value=meta_store_conf, expected_type=type_hints["meta_store_conf"])
            check_type(argname="argument meta_store_type", value=meta_store_type, expected_type=type_hints["meta_store_type"])
            check_type(argname="argument option_soft_ware_list", value=option_soft_ware_list, expected_type=type_hints["option_soft_ware_list"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument related_cluster_id", value=related_cluster_id, expected_type=type_hints["related_cluster_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument security_group_name", value=security_group_name, expected_type=type_hints["security_group_name"])
            check_type(argname="argument ssh_enable", value=ssh_enable, expected_type=type_hints["ssh_enable"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument use_custom_hive_meta_db", value=use_custom_hive_meta_db, expected_type=type_hints["use_custom_hive_meta_db"])
            check_type(argname="argument user_defined_emr_ecs_role", value=user_defined_emr_ecs_role, expected_type=type_hints["user_defined_emr_ecs_role"])
            check_type(argname="argument user_info", value=user_info, expected_type=type_hints["user_info"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument white_list_type", value=white_list_type, expected_type=type_hints["white_list_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "charge_type": charge_type,
            "cluster_type": cluster_type,
            "emr_ver": emr_ver,
            "host_group": host_group,
            "name": name,
            "net_type": net_type,
            "use_local_meta_db": use_local_meta_db,
            "zone_id": zone_id,
        }
        if authorize_content is not None:
            self._values["authorize_content"] = authorize_content
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if bootstrap_action is not None:
            self._values["bootstrap_action"] = bootstrap_action
        if click_house_conf is not None:
            self._values["click_house_conf"] = click_house_conf
        if config is not None:
            self._values["config"] = config
        if configurations is not None:
            self._values["configurations"] = configurations
        if deposit_type is not None:
            self._values["deposit_type"] = deposit_type
        if eas_enable is not None:
            self._values["eas_enable"] = eas_enable
        if high_availability_enable is not None:
            self._values["high_availability_enable"] = high_availability_enable
        if init_custom_hive_meta_db is not None:
            self._values["init_custom_hive_meta_db"] = init_custom_hive_meta_db
        if instance_generation is not None:
            self._values["instance_generation"] = instance_generation
        if io_optimized is not None:
            self._values["io_optimized"] = io_optimized
        if is_open_public_ip is not None:
            self._values["is_open_public_ip"] = is_open_public_ip
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name
        if log_path is not None:
            self._values["log_path"] = log_path
        if machine_type is not None:
            self._values["machine_type"] = machine_type
        if master_pwd is not None:
            self._values["master_pwd"] = master_pwd
        if meta_store_conf is not None:
            self._values["meta_store_conf"] = meta_store_conf
        if meta_store_type is not None:
            self._values["meta_store_type"] = meta_store_type
        if option_soft_ware_list is not None:
            self._values["option_soft_ware_list"] = option_soft_ware_list
        if period is not None:
            self._values["period"] = period
        if related_cluster_id is not None:
            self._values["related_cluster_id"] = related_cluster_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if security_group_name is not None:
            self._values["security_group_name"] = security_group_name
        if ssh_enable is not None:
            self._values["ssh_enable"] = ssh_enable
        if tags is not None:
            self._values["tags"] = tags
        if use_custom_hive_meta_db is not None:
            self._values["use_custom_hive_meta_db"] = use_custom_hive_meta_db
        if user_defined_emr_ecs_role is not None:
            self._values["user_defined_emr_ecs_role"] = user_defined_emr_ecs_role
        if user_info is not None:
            self._values["user_info"] = user_info
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if white_list_type is not None:
            self._values["white_list_type"] = white_list_type

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property chargeType: The billing method.

        Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
        subscription.
        '''
        result = self._values.get("charge_type")
        assert result is not None, "Required property 'charge_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterType: The type of the cluster.

        Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
        '''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def emr_ver(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property emrVer: The version of EMR.'''
        result = self._values.get("emr_ver")
        assert result is not None, "Required property 'emr_ver' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host_group(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.HostGroupProperty"]]]:
        '''Property hostGroup:.'''
        result = self._values.get("host_group")
        assert result is not None, "Required property 'host_group' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.HostGroupProperty"]]], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the cluster.

        The name can be 1 to 64 characters in length and only contain
        Chinese characters, letters, numbers, hyphens (-), and underscores (_).
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def net_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property netType: The type of the network.'''
        result = self._values.get("net_type")
        assert result is not None, "Required property 'net_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def use_local_meta_db(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used.'''
        result = self._values.get("use_local_meta_db")
        assert result is not None, "Required property 'use_local_meta_db' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property zoneId: The zone ID.'''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def authorize_content(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property authorizeContent: Not required.'''
        result = self._values.get("authorize_content")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Indicates whether the subscription cluster is auto-renewed.'''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bootstrap_action(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.BootstrapActionProperty"]]]]:
        '''Property bootstrapAction:.'''
        result = self._values.get("bootstrap_action")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.BootstrapActionProperty"]]]], result)

    @builtins.property
    def click_house_conf(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property clickHouseConf: undefined.'''
        result = self._values.get("click_house_conf")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.ConfigProperty"]]]]:
        '''Property config:.'''
        result = self._values.get("config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.ConfigProperty"]]]], result)

    @builtins.property
    def configurations(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property configurations: Not required.'''
        result = self._values.get("configurations")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deposit_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property depositType: The hosting type.'''
        result = self._values.get("deposit_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def eas_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property easEnable: Indicates whether the cluster is a high-security cluster.'''
        result = self._values.get("eas_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def high_availability_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster.

        A value of true indicates
        that two master nodes are required.
        '''
        result = self._values.get("high_availability_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def init_custom_hive_meta_db(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property initCustomHiveMetaDb: A reserved parameter.

        Not required.
        '''
        result = self._values.get("init_custom_hive_meta_db")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_generation(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceGeneration: The generation of the ECS instances.'''
        result = self._values.get("instance_generation")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ioOptimized: Indicates wether I/O optimization is enabled.

        Default value: true.
        '''
        result = self._values.get("io_optimized")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_open_public_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isOpenPublicIp: Indicates whether a public IP address is assigned.

        A value of true indicates that
        a bandwidth of 8 MB is set by default.
        '''
        result = self._values.get("is_open_public_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keyPairName: The name of the key pair.'''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logPath: The log path in OSS.'''
        result = self._values.get("log_path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def machine_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property machineType: The type of the machine.'''
        result = self._values.get("machine_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_pwd(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterPwd: The SSH password for the master node.

        The password must meet the following requirements.
        Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
        It must contain three types of characters (uppercase letters, lowercase letters, numbers,
        and special symbols).
        '''
        result = self._values.get("master_pwd")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def meta_store_conf(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property metaStoreConf: Meta store conf of specific meta store type.

        If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
        '''
        result = self._values.get("meta_store_conf")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def meta_store_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property metaStoreType: Meta store type.

        Allow types:
        local: Local cluster
        unified: Unified meta data
        user_rds: User's RDS
        '''
        result = self._values.get("meta_store_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def option_soft_ware_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property optionSoftWareList: The list of optional services.'''
        result = self._values.get("option_soft_ware_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The length of the subscription.

        Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
        9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def related_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).'''
        result = self._values.get("related_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupId: The ID of the security group.

        You can create a security group in the ECS console and
        use it. Note: If you use an existing security group, the default security group policy
        is applied to this security group: Only port 22 is open at the inbound and all ports
        are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupName: The name of the security group to create.

        If the ID of the security group is not specified,
        this name is used to create a new security group. After the cluster is created, you
        can view the ID of the security group on the Cluster Management page. The default
        security group policy is applied to this security group: Only port 22 is open at the
        inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
        or SecurityGroupName.
        '''
        result = self._values.get("security_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ssh_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sshEnable: Indicates whether SSH is enabled.'''
        result = self._values.get("ssh_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosCluster.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosCluster.TagsProperty"]], result)

    @builtins.property
    def use_custom_hive_meta_db(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property useCustomHiveMetaDb: A reserved parameter.

        Not required.
        '''
        result = self._values.get("use_custom_hive_meta_db")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_defined_emr_ecs_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.'''
        result = self._values.get("user_defined_emr_ecs_role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.UserInfoProperty"]]]]:
        '''Property userInfo:.'''
        result = self._values.get("user_info")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.UserInfoProperty"]]]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The ID of the VPC.

        A value is required when NetType=vpc.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The ID of the Vswitch.

        A value is required when NetType=vpc.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def white_list_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property whiteListType: Not required.'''
        result = self._values.get("white_list_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ClusterServiceConfigs(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-emr.ClusterServiceConfigs",
):
    '''A ROS resource type:  ``ALIYUN::EMR::ClusterServiceConfigs``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ClusterServiceConfigsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EMR::ClusterServiceConfigs``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a37c6b29dee7c38ee0c7966aadba0fd723ca5c661fae4d44ca900586bb82758c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterId: The ID of the cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-emr.ClusterServiceConfigsProps",
    jsii_struct_bases=[],
    name_mapping={"cluster_id": "clusterId", "service_configs": "serviceConfigs"},
)
class ClusterServiceConfigsProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_configs: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterServiceConfigs.ServiceConfigsProperty", typing.Dict[builtins.str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::EMR::ClusterServiceConfigs``.

        :param cluster_id: Property clusterId: The ID of the cluster.
        :param service_configs: Property serviceConfigs: Server configs.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e0e4aa852c7145fde27c31ca464b4c2b7808f405d777343d4a8b2103761e7b4)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument service_configs", value=service_configs, expected_type=type_hints["service_configs"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
            "service_configs": service_configs,
        }

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterId: The ID of the cluster.'''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_configs(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterServiceConfigs.ServiceConfigsProperty"]]]:
        '''Property serviceConfigs: Server configs.'''
        result = self._values.get("service_configs")
        assert result is not None, "Required property 'service_configs' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterServiceConfigs.ServiceConfigsProperty"]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterServiceConfigsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class FlowProject(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-emr.FlowProject",
):
    '''A ROS resource type:  ``ALIYUN::EMR::FlowProject``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["FlowProjectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EMR::FlowProject``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a9a7b6335da93f01b4417aace276e9a14ad6c25d572626bb171fbf2460d2763c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The time when the project was created.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: The description of the project.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrFlowProjectId")
    def attr_flow_project_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FlowProjectId: The ID of the project.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlowProjectId"))

    @builtins.property
    @jsii.member(jsii_name="attrFlowProjectName")
    def attr_flow_project_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FlowProjectName: The name of the project.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlowProjectName"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtModified")
    def attr_gmt_modified(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GmtModified: The time when the project was modified.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGmtModified"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UserId: The ID of the primary account.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-emr.FlowProjectProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "flow_project_name": "flowProjectName",
        "resource_group_id": "resourceGroupId",
    },
)
class FlowProjectProps:
    def __init__(
        self,
        *,
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        flow_project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EMR::FlowProject``.

        :param description: Property description: The description of the project.
        :param flow_project_name: Property flowProjectName: The name of the project.
        :param resource_group_id: Property resourceGroupId: The ID of the enterprise resource group to which the EMR instances and ECS node instances belong.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c4fe379036ad0074ca3fda4be5579f932a1e8d27f4e4f863ccb9abb41fe061d)
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument flow_project_name", value=flow_project_name, expected_type=type_hints["flow_project_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "description": description,
            "flow_project_name": flow_project_name,
        }
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property description: The description of the project.'''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def flow_project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property flowProjectName: The name of the project.'''
        result = self._values.get("flow_project_name")
        assert result is not None, "Required property 'flow_project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the enterprise resource group to which the EMR instances and ECS node instances belong.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FlowProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCluster(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-emr.RosCluster",
):
    '''A ROS template type:  ``ALIYUN::EMR::Cluster``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EMR::Cluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42523acdb9e60c46f44cb7d0ff24f2e87b113e1c4db35501fd9543094b0e86cb)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3b043644a81e4f7014b09f297a0f0b38b5b9063df7655a148ba98969f378ba93)
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
        :Attribute: ClusterId: The ID of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrHostGroups")
    def attr_host_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HostGroups: The host group list of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostGroups"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterNodeInnerIps")
    def attr_master_node_inner_ips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MasterNodeInnerIps: The inner ip list of the cluster master nodes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterNodeInnerIps"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterNodePubIps")
    def attr_master_node_pub_ips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MasterNodePubIps: The public ip list of the cluster master nodes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterNodePubIps"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        chargeType: The billing method. Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
        subscription.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8fcd51525fbef3491826ecff1e327ec7159271228d1de09f22bf882814480d6a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="clusterType")
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterType: The type of the cluster. Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterType"))

    @cluster_type.setter
    def cluster_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31d8c930cf024fcdb71fa7509f57c402ff714db5d59b7d246342ab1d2dc7562d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterType", value)

    @builtins.property
    @jsii.member(jsii_name="emrVer")
    def emr_ver(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: emrVer: The version of EMR.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "emrVer"))

    @emr_ver.setter
    def emr_ver(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f128a07ee3e5e3e138afb7195f869fc072a0d158ddf7ec239744373b3d692342)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "emrVer", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__22df2f992ea4a9e6f03389740a0b4132b578d16015618f26ee69897f88d44329)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="hostGroup")
    def host_group(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.HostGroupProperty"]]]:
        '''
        :Property: hostGroup:
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.HostGroupProperty"]]], jsii.get(self, "hostGroup"))

    @host_group.setter
    def host_group(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.HostGroupProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23567c9a90680fea6ab5fbe475c88d2f20cf4cab6742c07ff5fb872f128cfebe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostGroup", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        name: The name of the cluster. The name can be 1 to 64 characters in length and only contain
        Chinese characters, letters, numbers, hyphens (-), and underscores (_).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98e3f664ec8649d7dbb94e123fff67f4ba0a360123d63dc8e3cb0e6515f522fc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="netType")
    def net_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: netType: The type of the network.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "netType"))

    @net_type.setter
    def net_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5be06cb048a06da6f7ca592236347182fb6eee17b587d19f864ec9ddc72f4ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "netType", value)

    @builtins.property
    @jsii.member(jsii_name="useLocalMetaDb")
    def use_local_meta_db(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: useLocalMetaDb: Indicates whether the local Hive metadatabase is used.
        '''
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "useLocalMetaDb"))

    @use_local_meta_db.setter
    def use_local_meta_db(
        self,
        value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98c489ec1b3738fe2329dda791b0e80cc0944dfa4045d06d5f3ba0f017d1baa8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "useLocalMetaDb", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: zoneId: The zone ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__91000201811a972c6572b1fb04a8f0934a3ec8c8c4b13c2b7bb796c88edbe672)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @builtins.property
    @jsii.member(jsii_name="authorizeContent")
    def authorize_content(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: authorizeContent: Not required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "authorizeContent"))

    @authorize_content.setter
    def authorize_content(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__71fca76535df1d9ecfb9f768667cc80aa2375d7fd3ddec7a59b91de0194337b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "authorizeContent", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Indicates whether the subscription cluster is auto-renewed.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e239784622266f93084d47880178b01d87bd8d4651683554bedbc45f01e48335)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="bootstrapAction")
    def bootstrap_action(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.BootstrapActionProperty"]]]]:
        '''
        :Property: bootstrapAction:
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.BootstrapActionProperty"]]]], jsii.get(self, "bootstrapAction"))

    @bootstrap_action.setter
    def bootstrap_action(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.BootstrapActionProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d260cc4be3e3c726849b56a3aabac6b9de304fff562a6e6ed61b80be257bd49)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bootstrapAction", value)

    @builtins.property
    @jsii.member(jsii_name="clickHouseConf")
    def click_house_conf(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: clickHouseConf: undefined
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "clickHouseConf"))

    @click_house_conf.setter
    def click_house_conf(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de63cd79ebec8fbb1f85acc3ff07647247146e048da1ddafa76cb05bd52a514c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clickHouseConf", value)

    @builtins.property
    @jsii.member(jsii_name="config")
    def config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.ConfigProperty"]]]]:
        '''
        :Property: config:
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.ConfigProperty"]]]], jsii.get(self, "config"))

    @config.setter
    def config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.ConfigProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a5209fd46ac857408010026ae77df4bb9729a466a1b657bf1ab4d4403404eab1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "config", value)

    @builtins.property
    @jsii.member(jsii_name="configurations")
    def configurations(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: configurations: Not required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "configurations"))

    @configurations.setter
    def configurations(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__152bb7f1d0cfa61729854c355e8ff95dbcf23245670a5e9c4bcf093dd0471e16)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configurations", value)

    @builtins.property
    @jsii.member(jsii_name="depositType")
    def deposit_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: depositType: The hosting type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "depositType"))

    @deposit_type.setter
    def deposit_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aea6f4ad0ac0f2a89d4800d518017bcabbc7856f175e6a48b62550cf455472ed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "depositType", value)

    @builtins.property
    @jsii.member(jsii_name="easEnable")
    def eas_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: easEnable: Indicates whether the cluster is a high-security cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "easEnable"))

    @eas_enable.setter
    def eas_enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6745aa098834fb00e55eb74ff82041da6c8167cdb39e2396a2692bd08c4434f6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "easEnable", value)

    @builtins.property
    @jsii.member(jsii_name="highAvailabilityEnable")
    def high_availability_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster. A value of true indicates
        that two master nodes are required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "highAvailabilityEnable"))

    @high_availability_enable.setter
    def high_availability_enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3db8d29edc0f885c180399089c996f7d5a4c9bef77908bfedb6616a5eac08e72)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "highAvailabilityEnable", value)

    @builtins.property
    @jsii.member(jsii_name="initCustomHiveMetaDb")
    def init_custom_hive_meta_db(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: initCustomHiveMetaDb: A reserved parameter. Not required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "initCustomHiveMetaDb"))

    @init_custom_hive_meta_db.setter
    def init_custom_hive_meta_db(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa6fefb0925cd756a1349c9eca8c9de121d1523c0904198bf5bb9a10174486ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "initCustomHiveMetaDb", value)

    @builtins.property
    @jsii.member(jsii_name="instanceGeneration")
    def instance_generation(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceGeneration: The generation of the ECS instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceGeneration"))

    @instance_generation.setter
    def instance_generation(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b6649d4e33d7d40f8ea9ccf217d64c32e3fe6d6aa9cfb6a455b63d7b1473d018)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceGeneration", value)

    @builtins.property
    @jsii.member(jsii_name="ioOptimized")
    def io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ioOptimized: Indicates wether I/O optimization is enabled. Default value: true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ioOptimized"))

    @io_optimized.setter
    def io_optimized(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ed6da6de90bdc760d76303c1683619c4d2a0653f0450e9e765a02aa17c50cd5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ioOptimized", value)

    @builtins.property
    @jsii.member(jsii_name="isOpenPublicIp")
    def is_open_public_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isOpenPublicIp: Indicates whether a public IP address is assigned. A value of true indicates that
        a bandwidth of 8 MB is set by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isOpenPublicIp"))

    @is_open_public_ip.setter
    def is_open_public_ip(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d45113f91fa2fbd5aaf3aa317c7417493a1018c78d7e2b1f9b15126f6eeafd1d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isOpenPublicIp", value)

    @builtins.property
    @jsii.member(jsii_name="keyPairName")
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPairName: The name of the key pair.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keyPairName"))

    @key_pair_name.setter
    def key_pair_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a9accb64a1997e6b1bd39b5143b51b65b16da7130d115c6bf9e264ca17fa9f9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyPairName", value)

    @builtins.property
    @jsii.member(jsii_name="logPath")
    def log_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logPath: The log path in OSS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logPath"))

    @log_path.setter
    def log_path(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5a0147f15fae4aff3e7cd265d86972bf1014f7db912082f9770e3b5674a0f9e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logPath", value)

    @builtins.property
    @jsii.member(jsii_name="machineType")
    def machine_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: machineType: The type of the machine.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "machineType"))

    @machine_type.setter
    def machine_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2ca5d194ae863b969ce498894f82175e017cd74ae2b4a525e159ed05b6e1366)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "machineType", value)

    @builtins.property
    @jsii.member(jsii_name="masterPwd")
    def master_pwd(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        masterPwd: The SSH password for the master node. The password must meet the following requirements.
        Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
        It must contain three types of characters (uppercase letters, lowercase letters, numbers,
        and special symbols).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterPwd"))

    @master_pwd.setter
    def master_pwd(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__499793b47fcf6af35a3a579dd03821410255048beee9652c9911cfb1c366cb20)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterPwd", value)

    @builtins.property
    @jsii.member(jsii_name="metaStoreConf")
    def meta_store_conf(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: metaStoreConf: Meta store conf of specific meta store type. If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "metaStoreConf"))

    @meta_store_conf.setter
    def meta_store_conf(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a69b99f48d2b09e733cf2803a464cb2afdecddae60d6242fa71bff5a7cea4e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "metaStoreConf", value)

    @builtins.property
    @jsii.member(jsii_name="metaStoreType")
    def meta_store_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        metaStoreType: Meta store type. Allow types:
        local: Local cluster
        unified: Unified meta data
        user_rds: User's RDS
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "metaStoreType"))

    @meta_store_type.setter
    def meta_store_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1991a71aa36b5ebc42a2cf6da2060c4f07e3b5242ac589bad71a472dafad051)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "metaStoreType", value)

    @builtins.property
    @jsii.member(jsii_name="optionSoftWareList")
    def option_soft_ware_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: optionSoftWareList: The list of optional services.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "optionSoftWareList"))

    @option_soft_ware_list.setter
    def option_soft_ware_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__768029b14ad2728bcab17288e9c3dbcab7c07db1dd64d2c9c797e39c71662e1b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "optionSoftWareList", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
        9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed571ae7b090fdaa25d21cfbc1e190c802b26660c07762db51f839715425965c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="relatedClusterId")
    def related_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "relatedClusterId"))

    @related_cluster_id.setter
    def related_cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47237a8d2522f064f3a48abeb57eb5ad08c2387408f78cc086d3c11dcd2de2df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "relatedClusterId", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__5b62da09d1eb435e2c445930d9c9cde2ff6b25d988e7cae3929390925ac3c536)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityGroupId: The ID of the security group. You can create a security group in the ECS console and
        use it. Note: If you use an existing security group, the default security group policy
        is applied to this security group: Only port 22 is open at the inbound and all ports
        are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6417bdec370dc203fc52e4518bd6c70d00a19c78406a0c4719818f66588b187)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupName")
    def security_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityGroupName: The name of the security group to create. If the ID of the security group is not specified,
        this name is used to create a new security group. After the cluster is created, you
        can view the ID of the security group on the Cluster Management page. The default
        security group policy is applied to this security group: Only port 22 is open at the
        inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
        or SecurityGroupName.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupName"))

    @security_group_name.setter
    def security_group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8471ecae4e404f4afb4ad213c582890da42cfffdda69c50fe5d398a0f3743ea6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="sshEnable")
    def ssh_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sshEnable: Indicates whether SSH is enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sshEnable"))

    @ssh_enable.setter
    def ssh_enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7102c49fb1b177bf207487fa6c0ece2909935c72152fdde604883c129e7aaa10)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sshEnable", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosCluster.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosCluster.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosCluster.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6083e0a20a2af07c60f8bb11e2d55a88f8af86851a33cf5e89014bcad05a19d1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="useCustomHiveMetaDb")
    def use_custom_hive_meta_db(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: useCustomHiveMetaDb: A reserved parameter. Not required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "useCustomHiveMetaDb"))

    @use_custom_hive_meta_db.setter
    def use_custom_hive_meta_db(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1569c37e4ecc2e4701e46463fcc8f538b3aff7f22539f9a76f29663bb60ea9e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "useCustomHiveMetaDb", value)

    @builtins.property
    @jsii.member(jsii_name="userDefinedEmrEcsRole")
    def user_defined_emr_ecs_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "userDefinedEmrEcsRole"))

    @user_defined_emr_ecs_role.setter
    def user_defined_emr_ecs_role(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ca2444bd3bee5aea3a86371c31f281ac9a5f9b5a06591f00c8aac80e08f29fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userDefinedEmrEcsRole", value)

    @builtins.property
    @jsii.member(jsii_name="userInfo")
    def user_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.UserInfoProperty"]]]]:
        '''
        :Property: userInfo:
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.UserInfoProperty"]]]], jsii.get(self, "userInfo"))

    @user_info.setter
    def user_info(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.UserInfoProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__df0a9afd69e92b9a7bb9ec572a4d9acb7f8a0b9d2db7c1adb5ebd93b07f0202c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userInfo", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the VPC. A value is required when NetType=vpc.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a5cc6a59fd299766c9e90135965622d568ec14545cfd478df47e94a536ce648e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the Vswitch. A value is required when NetType=vpc.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9fa10efca301f2b97de3a305e28d7680fab1774776d5ea464d0079c5a5854096)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="whiteListType")
    def white_list_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: whiteListType: Not required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "whiteListType"))

    @white_list_type.setter
    def white_list_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6938921b1037b9d3c3b8f434663f2794f6482c2583a7c338a8ed31437f7dc3d8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "whiteListType", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-emr.RosCluster.BootstrapActionProperty",
        jsii_struct_bases=[],
        name_mapping={"arg": "arg", "name": "name", "path": "path"},
    )
    class BootstrapActionProperty:
        def __init__(
            self,
            *,
            arg: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param arg: 
            :param name: 
            :param path: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__2e81f42cad5dbe63c2ee8fbac9755d469e955658bf721a75f4d70e569dd4574c)
                check_type(argname="argument arg", value=arg, expected_type=type_hints["arg"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument path", value=path, expected_type=type_hints["path"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if arg is not None:
                self._values["arg"] = arg
            if name is not None:
                self._values["name"] = name
            if path is not None:
                self._values["path"] = path

        @builtins.property
        def arg(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: arg: The argument that you pass into the bootstrap action.
            '''
            result = self._values.get("arg")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: The name of the bootstrap action.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: path: The path where the bootstrap action script is stored.
            '''
            result = self._values.get("path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "BootstrapActionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-emr.RosCluster.ConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "config_key": "configKey",
            "config_value": "configValue",
            "encrypt": "encrypt",
            "file_name": "fileName",
            "replace": "replace",
            "service_name": "serviceName",
        },
    )
    class ConfigProperty:
        def __init__(
            self,
            *,
            config_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            config_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            encrypt: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            file_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            replace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            service_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param config_key: 
            :param config_value: 
            :param encrypt: 
            :param file_name: 
            :param replace: 
            :param service_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__64b0ca609d00da9f82e905a770b2caccbe137dbc8e3f271a72f64fc12395a27e)
                check_type(argname="argument config_key", value=config_key, expected_type=type_hints["config_key"])
                check_type(argname="argument config_value", value=config_value, expected_type=type_hints["config_value"])
                check_type(argname="argument encrypt", value=encrypt, expected_type=type_hints["encrypt"])
                check_type(argname="argument file_name", value=file_name, expected_type=type_hints["file_name"])
                check_type(argname="argument replace", value=replace, expected_type=type_hints["replace"])
                check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if config_key is not None:
                self._values["config_key"] = config_key
            if config_value is not None:
                self._values["config_value"] = config_value
            if encrypt is not None:
                self._values["encrypt"] = encrypt
            if file_name is not None:
                self._values["file_name"] = file_name
            if replace is not None:
                self._values["replace"] = replace
            if service_name is not None:
                self._values["service_name"] = service_name

        @builtins.property
        def config_key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: configKey: The key of the custom configuration item.
            '''
            result = self._values.get("config_key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def config_value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: configValue: The value of the custom configuration item.
            '''
            result = self._values.get("config_value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def encrypt(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: encrypt: A reserved parameter.
            '''
            result = self._values.get("encrypt")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def file_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: fileName: The name of the file that contains the configuration item.
            '''
            result = self._values.get("file_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def replace(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: replace: A reserved parameter.
            '''
            result = self._values.get("replace")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def service_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            serviceName: The name (capitalized) of the service that is configured by using the custom configuration
            item.
            '''
            result = self._values.get("service_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-emr.RosCluster.HostGroupProperty",
        jsii_struct_bases=[],
        name_mapping={
            "charge_type": "chargeType",
            "disk_capacity": "diskCapacity",
            "disk_count": "diskCount",
            "disk_type": "diskType",
            "host_group_type": "hostGroupType",
            "instance_type": "instanceType",
            "node_count": "nodeCount",
            "sys_disk_capacity": "sysDiskCapacity",
            "sys_disk_type": "sysDiskType",
            "auto_renew": "autoRenew",
            "cluster_id": "clusterId",
            "comment": "comment",
            "create_type": "createType",
            "gpu_driver": "gpuDriver",
            "host_group_id": "hostGroupId",
            "host_group_name": "hostGroupName",
            "host_key_pair_name": "hostKeyPairName",
            "host_password": "hostPassword",
            "period": "period",
            "v_switch_id": "vSwitchId",
        },
    )
    class HostGroupProperty:
        def __init__(
            self,
            *,
            charge_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            disk_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            disk_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            disk_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            host_group_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            sys_disk_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            sys_disk_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            create_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            gpu_driver: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            host_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            host_key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            host_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param charge_type: 
            :param disk_capacity: 
            :param disk_count: 
            :param disk_type: 
            :param host_group_type: 
            :param instance_type: 
            :param node_count: 
            :param sys_disk_capacity: 
            :param sys_disk_type: 
            :param auto_renew: 
            :param cluster_id: 
            :param comment: 
            :param create_type: 
            :param gpu_driver: 
            :param host_group_id: 
            :param host_group_name: 
            :param host_key_pair_name: 
            :param host_password: 
            :param period: 
            :param v_switch_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ef195be2ef6b3702390682f3a8b07193ccac50f5bdf8999188569cb1d1a7efd5)
                check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
                check_type(argname="argument disk_capacity", value=disk_capacity, expected_type=type_hints["disk_capacity"])
                check_type(argname="argument disk_count", value=disk_count, expected_type=type_hints["disk_count"])
                check_type(argname="argument disk_type", value=disk_type, expected_type=type_hints["disk_type"])
                check_type(argname="argument host_group_type", value=host_group_type, expected_type=type_hints["host_group_type"])
                check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
                check_type(argname="argument node_count", value=node_count, expected_type=type_hints["node_count"])
                check_type(argname="argument sys_disk_capacity", value=sys_disk_capacity, expected_type=type_hints["sys_disk_capacity"])
                check_type(argname="argument sys_disk_type", value=sys_disk_type, expected_type=type_hints["sys_disk_type"])
                check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
                check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
                check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
                check_type(argname="argument create_type", value=create_type, expected_type=type_hints["create_type"])
                check_type(argname="argument gpu_driver", value=gpu_driver, expected_type=type_hints["gpu_driver"])
                check_type(argname="argument host_group_id", value=host_group_id, expected_type=type_hints["host_group_id"])
                check_type(argname="argument host_group_name", value=host_group_name, expected_type=type_hints["host_group_name"])
                check_type(argname="argument host_key_pair_name", value=host_key_pair_name, expected_type=type_hints["host_key_pair_name"])
                check_type(argname="argument host_password", value=host_password, expected_type=type_hints["host_password"])
                check_type(argname="argument period", value=period, expected_type=type_hints["period"])
                check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "charge_type": charge_type,
                "disk_capacity": disk_capacity,
                "disk_count": disk_count,
                "disk_type": disk_type,
                "host_group_type": host_group_type,
                "instance_type": instance_type,
                "node_count": node_count,
                "sys_disk_capacity": sys_disk_capacity,
                "sys_disk_type": sys_disk_type,
            }
            if auto_renew is not None:
                self._values["auto_renew"] = auto_renew
            if cluster_id is not None:
                self._values["cluster_id"] = cluster_id
            if comment is not None:
                self._values["comment"] = comment
            if create_type is not None:
                self._values["create_type"] = create_type
            if gpu_driver is not None:
                self._values["gpu_driver"] = gpu_driver
            if host_group_id is not None:
                self._values["host_group_id"] = host_group_id
            if host_group_name is not None:
                self._values["host_group_name"] = host_group_name
            if host_key_pair_name is not None:
                self._values["host_key_pair_name"] = host_key_pair_name
            if host_password is not None:
                self._values["host_password"] = host_password
            if period is not None:
                self._values["period"] = period
            if v_switch_id is not None:
                self._values["v_switch_id"] = v_switch_id

        @builtins.property
        def charge_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: chargeType: The billing method for the instance group.
            '''
            result = self._values.get("charge_type")
            assert result is not None, "Required property 'charge_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def disk_capacity(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: diskCapacity: The data disk capacity of the instance group.
            '''
            result = self._values.get("disk_capacity")
            assert result is not None, "Required property 'disk_capacity' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def disk_count(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: diskCount: The data disk number of the instance group.
            '''
            result = self._values.get("disk_count")
            assert result is not None, "Required property 'disk_count' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def disk_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: diskType: The data disk type of the instance group. Valid values: CLOUD, CLOUD_EFFICIENCY, CLOUD_SSD, CLOUD_ESSD etc.
            '''
            result = self._values.get("disk_type")
            assert result is not None, "Required property 'disk_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def host_group_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            hostGroupType: The type of the instance group. Valid values: MASTER, CORE, and TASK. Currently, you
            can only create a maximum of one master instance group and core instance group.
            '''
            result = self._values.get("host_group_type")
            assert result is not None, "Required property 'host_group_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def instance_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: instanceType: The instance type of the instance group.
            '''
            result = self._values.get("instance_type")
            assert result is not None, "Required property 'instance_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def node_count(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: nodeCount: The number of nodes in the node group.
            '''
            result = self._values.get("node_count")
            assert result is not None, "Required property 'node_count' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def sys_disk_capacity(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: sysDiskCapacity: The system disk capacity of the instance group.
            '''
            result = self._values.get("sys_disk_capacity")
            assert result is not None, "Required property 'sys_disk_capacity' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def sys_disk_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: sysDiskType: The system disk type of the instance group.
            '''
            result = self._values.get("sys_disk_type")
            assert result is not None, "Required property 'sys_disk_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def auto_renew(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: autoRenew: Indicates whether the instance group is auto-renewed.
            '''
            result = self._values.get("auto_renew")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cluster_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: clusterId: A reserved parameter. Not required.
            '''
            result = self._values.get("cluster_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def comment(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: comment: A reserved parameter. Not required.
            '''
            result = self._values.get("comment")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def create_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: createType: A reserved parameter. Not required.
            '''
            result = self._values.get("create_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def gpu_driver(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: gpuDriver: The GPU driver.
            '''
            result = self._values.get("gpu_driver")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def host_group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: hostGroupId: A reserved parameter.
            '''
            result = self._values.get("host_group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def host_group_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: hostGroupName: The name of the instance group.
            '''
            result = self._values.get("host_group_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def host_key_pair_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: hostKeyPairName: The key pair name of the host group. Currently, only gateways are supported.
            '''
            result = self._values.get("host_key_pair_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def host_password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: hostPassword: The password of the host. Currently, only gateways are supported.
            '''
            result = self._values.get("host_password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def period(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
            9, 12, 24, and 36. A value is required when HostGroup.n.ChargeType=PrePaid.
            '''
            result = self._values.get("period")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def v_switch_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: vSwitchId: The ID of the VSwitch. A value is required when NetType=vpc.
            '''
            result = self._values.get("v_switch_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HostGroupProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-emr.RosCluster.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__1dd7a8fa585442092089dc3a6419cd169b4f09ae28666151335d54dbcd778d3f)
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
        jsii_type="@alicloud/ros-cdk-emr.RosCluster.UserInfoProperty",
        jsii_struct_bases=[],
        name_mapping={
            "password": "password",
            "user_id": "userId",
            "user_name": "userName",
        },
    )
    class UserInfoProperty:
        def __init__(
            self,
            *,
            password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param password: 
            :param user_id: 
            :param user_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f1ab67aacdbb2704972f1f0d892640809b34385ab8f96e007abf35daa66ade77)
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
                check_type(argname="argument user_id", value=user_id, expected_type=type_hints["user_id"])
                check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if password is not None:
                self._values["password"] = password
            if user_id is not None:
                self._values["user_id"] = user_id
            if user_name is not None:
                self._values["user_name"] = user_name

        @builtins.property
        def password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: password: The password of the cluster.
            '''
            result = self._values.get("password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def user_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: userId: The ID of the Alibaba Cloud account for Knox.
            '''
            result = self._values.get("user_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def user_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: userName: The username for Knox.
            '''
            result = self._values.get("user_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "UserInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosCluster2(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-emr.RosCluster2",
):
    '''A ROS template type:  ``ALIYUN::EMR::Cluster2``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCluster2Props", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EMR::Cluster2``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__716e1e6573cab7e5c5aa7dfaaa2f9ce3f5693f3d58e0f9a2aa1b907ee1af98e3)
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
            type_hints = typing.get_type_hints(_typecheckingstub__dbb31c8065f6c0237ed2d0ea4c4b5b3bbfaf96df70e1b41d9871bafda08230f2)
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
        :Attribute: ClusterId: Cluster ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="applications")
    def applications(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.ApplicationsProperty"]]]:
        '''
        :Property: applications: Application List.The value range of the number n of the number N group: 1 ~ 100.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.ApplicationsProperty"]]], jsii.get(self, "applications"))

    @applications.setter
    def applications(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.ApplicationsProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db283968271aeb9e09aa0b73e7b3cb04037381bb25b45adb72ca1bfb74188643)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "applications", value)

    @builtins.property
    @jsii.member(jsii_name="clusterName")
    def cluster_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterName: Cluster name.The length is 1 ~ 128 characters, and the alphabet or Chinese must be started. It cannot start with http:// and https: //.It can include Chinese, English, numbers, half-horn colons (:), down line (_), half-angle period (.) Or short lines (-)
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterName"))

    @cluster_name.setter
    def cluster_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__04e15d72ba4d3b5eba5e351ea210fc2948cf27ed4702f10d1855bea446037b07)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterName", value)

    @builtins.property
    @jsii.member(jsii_name="clusterType")
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        clusterType: Cluster type.Ranges:
        Datalake: The new version of the data lake.
        OLAP: Data analysis.
        DataFlow: Real -time data stream.
        DataServing: Data service.
        Hadoop: The old version of the data lake (not recommended, it is recommended to use the new version of the data lake).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterType"))

    @cluster_type.setter
    def cluster_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9188c7536223ec595838925ec61c7fd5e05923045f9c308c912146a03843020d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5555b4e1354f3589df3197e1f562aa5e54c8e9c062b911145aff4b9223651714)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="nodeAttributes")
    def node_attributes(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.NodeAttributesProperty"]:
        '''
        :Property: nodeAttributes: Node attributes.All ECS nodes basic attributes of the cluster.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.NodeAttributesProperty"], jsii.get(self, "nodeAttributes"))

    @node_attributes.setter
    def node_attributes(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.NodeAttributesProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34d0bc3dc91082cd7833a1b0c06cff30f0f0d8fa3f096d12431cec1ba11e0e59)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodeAttributes", value)

    @builtins.property
    @jsii.member(jsii_name="nodeGroups")
    def node_groups(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.NodeGroupsProperty"]]]:
        '''
        :Property: nodeGroups: The node group configuration array.The value range of the number n of the number N group: 1 ~ 100.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.NodeGroupsProperty"]]], jsii.get(self, "nodeGroups"))

    @node_groups.setter
    def node_groups(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.NodeGroupsProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e0325aeda27740d1848cd769fedc759ae8a50590b8fc56558c6f407f50f73af7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodeGroups", value)

    @builtins.property
    @jsii.member(jsii_name="releaseVersion")
    def release_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: releaseVersion: EMR release version.View EMR distribution versions can be viewed through the EMR cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "releaseVersion"))

    @release_version.setter
    def release_version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba11302e77ae43605d84964dc4e1a7c8de7b9d97194df1ed77536048d7ad363d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "releaseVersion", value)

    @builtins.property
    @jsii.member(jsii_name="applicationConfigs")
    def application_configs(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.ApplicationConfigsProperty"]]]]:
        '''
        :Property: applicationConfigs: Application configuration.The value range of the number n of the array element n: 1 ~ 1000.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.ApplicationConfigsProperty"]]]], jsii.get(self, "applicationConfigs"))

    @application_configs.setter
    def application_configs(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.ApplicationConfigsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37e81765128e1ed2e9c3bd1c27a652010b6b9689bd0c42e8f6dfb7888ab7726f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "applicationConfigs", value)

    @builtins.property
    @jsii.member(jsii_name="bootstrapScripts")
    def bootstrap_scripts(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.BootstrapScriptsProperty"]]]]:
        '''
        :Property: bootstrapScripts: Guide the script group.The value range of the number n of the number N group: 1 ~ 10.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.BootstrapScriptsProperty"]]]], jsii.get(self, "bootstrapScripts"))

    @bootstrap_scripts.setter
    def bootstrap_scripts(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.BootstrapScriptsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73fe03dfe42efa9e650f51d8443e89c292505fe4ae12f20d42ace2ba6554f058)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bootstrapScripts", value)

    @builtins.property
    @jsii.member(jsii_name="deployMode")
    def deploy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        deployMode: Application deployment mode in the cluster.Ranges:
        Normal: non -high available deployment.Cluster 1 master node.
        HA: High availability deployment.High availability deployment requires at least 3 master nodes.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deployMode"))

    @deploy_mode.setter
    def deploy_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74c9673e87493e38bd106b2a5e9bb5ca7b3718763bb4bd6c8f707cd23d8ab324)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deployMode", value)

    @builtins.property
    @jsii.member(jsii_name="paymentType")
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        paymentType: Payment type. Ranges:
        PayAsYouGo: Post-paid, pay-as-you-go.
        Subscription: Prepaid, yearly and monthly.
        Default: PayAsYouGo.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "paymentType"))

    @payment_type.setter
    def payment_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e408cffd44265886e20c4b6f738ff756d37adf1603b8f0f8acf39007fc2b35ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "paymentType", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__22a01ab781cdff871e437eda46dd7a978dc303e93023af5044e0192d0c295eca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="securityMode")
    def security_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityMode: Cluster Kerberos security mode.Ranges:
        Normal: General mode, does not open the Kerberos mode.
        Kerberos: Open the Kerberos mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityMode"))

    @security_mode.setter
    def security_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ccb19437cf78c43d3ff021db410d9349092f7dfbd7380f03049b4b29da71dba6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityMode", value)

    @builtins.property
    @jsii.member(jsii_name="subscriptionConfig")
    def subscription_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.SubscriptionConfigProperty"]]:
        '''
        :Property: subscriptionConfig: Pre -paid allocation.When the value of PaymentType is Subscripting, it must be filled.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.SubscriptionConfigProperty"]], jsii.get(self, "subscriptionConfig"))

    @subscription_config.setter
    def subscription_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.SubscriptionConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ad2458f8ae47305dafb6b3ac4f249cf2cc650523686de2a9b0597b3646f3aed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "subscriptionConfig", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosCluster2.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosCluster2.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosCluster2.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6390be531920b248f5781662846c2cfcf809b155c012edea279013158bfd2e9e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-emr.RosCluster2.ApplicationConfigsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "application_name": "applicationName",
            "config_file_name": "configFileName",
            "config_item_key": "configItemKey",
            "config_item_value": "configItemValue",
            "config_scope": "configScope",
            "node_group_id": "nodeGroupId",
            "node_group_name": "nodeGroupName",
        },
    )
    class ApplicationConfigsProperty:
        def __init__(
            self,
            *,
            application_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            config_file_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            config_item_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            config_item_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            config_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            node_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            node_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param application_name: 
            :param config_file_name: 
            :param config_item_key: 
            :param config_item_value: 
            :param config_scope: 
            :param node_group_id: 
            :param node_group_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__38d9312381dc6e52837677e6129dab1a5137ff42bfdd139d0834976e2161aa4b)
                check_type(argname="argument application_name", value=application_name, expected_type=type_hints["application_name"])
                check_type(argname="argument config_file_name", value=config_file_name, expected_type=type_hints["config_file_name"])
                check_type(argname="argument config_item_key", value=config_item_key, expected_type=type_hints["config_item_key"])
                check_type(argname="argument config_item_value", value=config_item_value, expected_type=type_hints["config_item_value"])
                check_type(argname="argument config_scope", value=config_scope, expected_type=type_hints["config_scope"])
                check_type(argname="argument node_group_id", value=node_group_id, expected_type=type_hints["node_group_id"])
                check_type(argname="argument node_group_name", value=node_group_name, expected_type=type_hints["node_group_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "application_name": application_name,
            }
            if config_file_name is not None:
                self._values["config_file_name"] = config_file_name
            if config_item_key is not None:
                self._values["config_item_key"] = config_item_key
            if config_item_value is not None:
                self._values["config_item_value"] = config_item_value
            if config_scope is not None:
                self._values["config_scope"] = config_scope
            if node_group_id is not None:
                self._values["node_group_id"] = node_group_id
            if node_group_name is not None:
                self._values["node_group_name"] = node_group_name

        @builtins.property
        def application_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: applicationName: Application name
            '''
            result = self._values.get("application_name")
            assert result is not None, "Required property 'application_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def config_file_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: configFileName: Configuration file name.
            '''
            result = self._values.get("config_file_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def config_item_key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: configItemKey: Configuration key.
            '''
            result = self._values.get("config_item_key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def config_item_value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: configItemValue: Configuration value.
            '''
            result = self._values.get("config_item_value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def config_scope(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            configScope: Configuration scope. Ranges:
            CLUSTER: Cluster level.
            NODE_GROUP: Node group level.
            Default: CLUSTER.
            '''
            result = self._values.get("config_scope")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def node_group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            nodeGroupId: Node group ID. This parameter takes effect when ConfigScope takes the value NODE_GROUP.
            The NodeGroupId parameter takes precedence over the NodeGroupName.
            '''
            result = self._values.get("node_group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def node_group_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            nodeGroupName: Node group name.
            This parameter takes effect when the ConfigScope
            value is NODE_GROUP and the parameter NodeGroupId is empty.
            '''
            result = self._values.get("node_group_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ApplicationConfigsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-emr.RosCluster2.ApplicationsProperty",
        jsii_struct_bases=[],
        name_mapping={"application_name": "applicationName"},
    )
    class ApplicationsProperty:
        def __init__(
            self,
            *,
            application_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param application_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__9807d8a87bbbb596f2da1dd0715f9f57358f8ea1226aac304c2722e26cc69aa6)
                check_type(argname="argument application_name", value=application_name, expected_type=type_hints["application_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "application_name": application_name,
            }

        @builtins.property
        def application_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: applicationName: Application name
            '''
            result = self._values.get("application_name")
            assert result is not None, "Required property 'application_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ApplicationsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-emr.RosCluster2.BootstrapScriptsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "node_selector": "nodeSelector",
            "script_name": "scriptName",
            "script_path": "scriptPath",
            "execution_fail_strategy": "executionFailStrategy",
            "execution_moment": "executionMoment",
            "priority": "priority",
            "script_args": "scriptArgs",
        },
    )
    class BootstrapScriptsProperty:
        def __init__(
            self,
            *,
            node_selector: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster2.NodeSelectorProperty", typing.Dict[builtins.str, typing.Any]]],
            script_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            script_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            execution_fail_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            execution_moment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            script_args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param node_selector: 
            :param script_name: 
            :param script_path: 
            :param execution_fail_strategy: 
            :param execution_moment: 
            :param priority: 
            :param script_args: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__e13d3e75c68732ab69ab07440cafef924c4cb6c7d6ea69f73aa235bd9687c1b1)
                check_type(argname="argument node_selector", value=node_selector, expected_type=type_hints["node_selector"])
                check_type(argname="argument script_name", value=script_name, expected_type=type_hints["script_name"])
                check_type(argname="argument script_path", value=script_path, expected_type=type_hints["script_path"])
                check_type(argname="argument execution_fail_strategy", value=execution_fail_strategy, expected_type=type_hints["execution_fail_strategy"])
                check_type(argname="argument execution_moment", value=execution_moment, expected_type=type_hints["execution_moment"])
                check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
                check_type(argname="argument script_args", value=script_args, expected_type=type_hints["script_args"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "node_selector": node_selector,
                "script_name": script_name,
                "script_path": script_path,
            }
            if execution_fail_strategy is not None:
                self._values["execution_fail_strategy"] = execution_fail_strategy
            if execution_moment is not None:
                self._values["execution_moment"] = execution_moment
            if priority is not None:
                self._values["priority"] = priority
            if script_args is not None:
                self._values["script_args"] = script_args

        @builtins.property
        def node_selector(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.NodeSelectorProperty"]:
            '''
            :Property: nodeSelector: Node selector.
            '''
            result = self._values.get("node_selector")
            assert result is not None, "Required property 'node_selector' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.NodeSelectorProperty"], result)

        @builtins.property
        def script_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            scriptName: script name. Required.
            The length is 1~64 characters.
            It must start with a big or small letter or Chinese.
            It cannot start with http:// and https://.
            It can contain Chinese, English, numbers, underscores (_), or dashes (-)
            '''
            result = self._values.get("script_name")
            assert result is not None, "Required property 'script_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def script_path(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: scriptPath: The OSS path where the script is located. Required. Start with oss://.
            '''
            result = self._values.get("script_path")
            assert result is not None, "Required property 'script_path' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def execution_fail_strategy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: executionFailStrategy: Execute failure strategy. Allowed values:FAILED_CONTINUE: Does not block cluster creation or cluster expansion after failure.FAILED_BLOCK: Blocks cluster creation or cluster expansion after failure.
            '''
            result = self._values.get("execution_fail_strategy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def execution_moment(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            executionMoment: When the script is executed. Allowed values:
            BEFORE_INSTALL: Before the app is installed.
            AFTER_STARTED: After the app starts.
            '''
            result = self._values.get("execution_moment")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def priority(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: priority: Script execution priority. Value range: 1~100.
            '''
            result = self._values.get("priority")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def script_args(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: scriptArgs: Script execution parameters. Optional parameter.
            '''
            result = self._values.get("script_args")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "BootstrapScriptsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-emr.RosCluster2.CostOptimizedConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "on_demand_base_capacity": "onDemandBaseCapacity",
            "on_demand_percentage_above_base_capacity": "onDemandPercentageAboveBaseCapacity",
            "spot_instance_pools": "spotInstancePools",
        },
    )
    class CostOptimizedConfigProperty:
        def __init__(
            self,
            *,
            on_demand_base_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            on_demand_percentage_above_base_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            spot_instance_pools: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param on_demand_base_capacity: 
            :param on_demand_percentage_above_base_capacity: 
            :param spot_instance_pools: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__a42cf7c3f3545467874ddb2267bd13ad7d09a086455589ce34376ecdd8ddd27b)
                check_type(argname="argument on_demand_base_capacity", value=on_demand_base_capacity, expected_type=type_hints["on_demand_base_capacity"])
                check_type(argname="argument on_demand_percentage_above_base_capacity", value=on_demand_percentage_above_base_capacity, expected_type=type_hints["on_demand_percentage_above_base_capacity"])
                check_type(argname="argument spot_instance_pools", value=spot_instance_pools, expected_type=type_hints["spot_instance_pools"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "on_demand_base_capacity": on_demand_base_capacity,
                "on_demand_percentage_above_base_capacity": on_demand_percentage_above_base_capacity,
                "spot_instance_pools": spot_instance_pools,
            }

        @builtins.property
        def on_demand_base_capacity(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            onDemandBaseCapacity: The minimum number of instances by quantity.
            The minimum number of instance counts required by the node group,
            the value range: 0~1000. When the number of metered instances is
            less than this value, the metered instance will be created first.
            '''
            result = self._values.get("on_demand_base_capacity")
            assert result is not None, "Required property 'on_demand_base_capacity' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def on_demand_percentage_above_base_capacity(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            onDemandPercentageAboveBaseCapacity: After the node group satisfies the OnDemandBaseCapacity requirement
            of the minimum on-demand instance, the proportion of the
            on-demand instances in the excess instances, ranging from 0 to 100.
            '''
            result = self._values.get("on_demand_percentage_above_base_capacity")
            assert result is not None, "Required property 'on_demand_percentage_above_base_capacity' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def spot_instance_pools(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            spotInstancePools: Specify the number of available instance types,
            and the scaling group will create preemptible instances
            in a balanced manner according to the multiple types with
            the lowest cost. Value range: 0~10.
            '''
            result = self._values.get("spot_instance_pools")
            assert result is not None, "Required property 'spot_instance_pools' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CostOptimizedConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-emr.RosCluster2.DataDisksProperty",
        jsii_struct_bases=[],
        name_mapping={
            "category": "category",
            "size": "size",
            "count": "count",
            "performance_level": "performanceLevel",
        },
    )
    class DataDisksProperty:
        def __init__(
            self,
            *,
            category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param category: 
            :param size: 
            :param count: 
            :param performance_level: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__608ebd75ddd445ce70dbe0d13a0145909da449dc5ef76d6abb5eca78c9a13f45)
                check_type(argname="argument category", value=category, expected_type=type_hints["category"])
                check_type(argname="argument size", value=size, expected_type=type_hints["size"])
                check_type(argname="argument count", value=count, expected_type=type_hints["count"])
                check_type(argname="argument performance_level", value=performance_level, expected_type=type_hints["performance_level"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "category": category,
                "size": size,
            }
            if count is not None:
                self._values["count"] = count
            if performance_level is not None:
                self._values["performance_level"] = performance_level

        @builtins.property
        def category(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: category: Category of system disk.
            '''
            result = self._values.get("category")
            assert result is not None, "Required property 'category' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def size(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: size: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
            '''
            result = self._values.get("size")
            assert result is not None, "Required property 'size' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def count(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: count: The number of system disks per node, the default value is 1.
            '''
            result = self._values.get("count")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def performance_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            performanceLevel: The performance level of the enhanced SSD.Default value: PL1. Valid values:
            PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.
            PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.
            PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.
            PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
            Default is PL1.
            '''
            result = self._values.get("performance_level")
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
        jsii_type="@alicloud/ros-cdk-emr.RosCluster2.NodeAttributesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "security_group_id": "securityGroupId",
            "vpc_id": "vpcId",
            "zone_id": "zoneId",
            "key_pair_name": "keyPairName",
            "ram_role": "ramRole",
        },
    )
    class NodeAttributesProperty:
        def __init__(
            self,
            *,
            security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ram_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param security_group_id: 
            :param vpc_id: 
            :param zone_id: 
            :param key_pair_name: 
            :param ram_role: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__1d93533388f9cd010a451bfd074e9bd2abfe8222809cd7a97a50efe717f00a7d)
                check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
                check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
                check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
                check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
                check_type(argname="argument ram_role", value=ram_role, expected_type=type_hints["ram_role"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "security_group_id": security_group_id,
                "vpc_id": vpc_id,
                "zone_id": zone_id,
            }
            if key_pair_name is not None:
                self._values["key_pair_name"] = key_pair_name
            if ram_role is not None:
                self._values["ram_role"] = ram_role

        @builtins.property
        def security_group_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: securityGroupId: Security group ID. EMR only supports common security groups, not enterprise security groups.
            '''
            result = self._values.get("security_group_id")
            assert result is not None, "Required property 'security_group_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def vpc_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vpcId: Vpc id
            '''
            result = self._values.get("vpc_id")
            assert result is not None, "Required property 'vpc_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def zone_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: zoneId: Zone id
            '''
            result = self._values.get("zone_id")
            assert result is not None, "Required property 'zone_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def key_pair_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: keyPairName: ECS ssh login key.
            '''
            result = self._values.get("key_pair_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ram_role(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ramRole: The role of the ECS access resource binding. Default value: AliyunECSInstanceForEMRRole.
            '''
            result = self._values.get("ram_role")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NodeAttributesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-emr.RosCluster2.NodeGroupsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_types": "instanceTypes",
            "node_group_type": "nodeGroupType",
            "additional_security_group_ids": "additionalSecurityGroupIds",
            "cost_optimized_config": "costOptimizedConfig",
            "data_disks": "dataDisks",
            "deployment_set_strategy": "deploymentSetStrategy",
            "graceful_shutdown": "gracefulShutdown",
            "node_count": "nodeCount",
            "node_group_name": "nodeGroupName",
            "node_resize_strategy": "nodeResizeStrategy",
            "spot_bid_prices": "spotBidPrices",
            "spot_instance_remedy": "spotInstanceRemedy",
            "spot_strategy": "spotStrategy",
            "system_disk": "systemDisk",
            "v_switch_ids": "vSwitchIds",
            "with_public_ip": "withPublicIp",
        },
    )
    class NodeGroupsProperty:
        def __init__(
            self,
            *,
            instance_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
            node_group_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            additional_security_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            cost_optimized_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster2.CostOptimizedConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster2.DataDisksProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            deployment_set_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            graceful_shutdown: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            node_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            node_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            node_resize_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            spot_bid_prices: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster2.SpotBidPricesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            spot_instance_remedy: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            system_disk: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster2.SystemDiskProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            with_public_ip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param instance_types: 
            :param node_group_type: 
            :param additional_security_group_ids: 
            :param cost_optimized_config: 
            :param data_disks: 
            :param deployment_set_strategy: 
            :param graceful_shutdown: 
            :param node_count: 
            :param node_group_name: 
            :param node_resize_strategy: 
            :param spot_bid_prices: 
            :param spot_instance_remedy: 
            :param spot_strategy: 
            :param system_disk: 
            :param v_switch_ids: 
            :param with_public_ip: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__9fd2d1d4d0914f2b50132bb3992eb72ee071865756a65a7852f132cf16538cc0)
                check_type(argname="argument instance_types", value=instance_types, expected_type=type_hints["instance_types"])
                check_type(argname="argument node_group_type", value=node_group_type, expected_type=type_hints["node_group_type"])
                check_type(argname="argument additional_security_group_ids", value=additional_security_group_ids, expected_type=type_hints["additional_security_group_ids"])
                check_type(argname="argument cost_optimized_config", value=cost_optimized_config, expected_type=type_hints["cost_optimized_config"])
                check_type(argname="argument data_disks", value=data_disks, expected_type=type_hints["data_disks"])
                check_type(argname="argument deployment_set_strategy", value=deployment_set_strategy, expected_type=type_hints["deployment_set_strategy"])
                check_type(argname="argument graceful_shutdown", value=graceful_shutdown, expected_type=type_hints["graceful_shutdown"])
                check_type(argname="argument node_count", value=node_count, expected_type=type_hints["node_count"])
                check_type(argname="argument node_group_name", value=node_group_name, expected_type=type_hints["node_group_name"])
                check_type(argname="argument node_resize_strategy", value=node_resize_strategy, expected_type=type_hints["node_resize_strategy"])
                check_type(argname="argument spot_bid_prices", value=spot_bid_prices, expected_type=type_hints["spot_bid_prices"])
                check_type(argname="argument spot_instance_remedy", value=spot_instance_remedy, expected_type=type_hints["spot_instance_remedy"])
                check_type(argname="argument spot_strategy", value=spot_strategy, expected_type=type_hints["spot_strategy"])
                check_type(argname="argument system_disk", value=system_disk, expected_type=type_hints["system_disk"])
                check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
                check_type(argname="argument with_public_ip", value=with_public_ip, expected_type=type_hints["with_public_ip"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "instance_types": instance_types,
                "node_group_type": node_group_type,
            }
            if additional_security_group_ids is not None:
                self._values["additional_security_group_ids"] = additional_security_group_ids
            if cost_optimized_config is not None:
                self._values["cost_optimized_config"] = cost_optimized_config
            if data_disks is not None:
                self._values["data_disks"] = data_disks
            if deployment_set_strategy is not None:
                self._values["deployment_set_strategy"] = deployment_set_strategy
            if graceful_shutdown is not None:
                self._values["graceful_shutdown"] = graceful_shutdown
            if node_count is not None:
                self._values["node_count"] = node_count
            if node_group_name is not None:
                self._values["node_group_name"] = node_group_name
            if node_resize_strategy is not None:
                self._values["node_resize_strategy"] = node_resize_strategy
            if spot_bid_prices is not None:
                self._values["spot_bid_prices"] = spot_bid_prices
            if spot_instance_remedy is not None:
                self._values["spot_instance_remedy"] = spot_instance_remedy
            if spot_strategy is not None:
                self._values["spot_strategy"] = spot_strategy
            if system_disk is not None:
                self._values["system_disk"] = system_disk
            if v_switch_ids is not None:
                self._values["v_switch_ids"] = v_switch_ids
            if with_public_ip is not None:
                self._values["with_public_ip"] = with_public_ip

        @builtins.property
        def instance_types(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
            '''
            :Property: instanceTypes: A list of node instance types. The value range of the number of array elements N: 1~100.
            '''
            result = self._values.get("instance_types")
            assert result is not None, "Required property 'instance_types' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

        @builtins.property
        def node_group_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            nodeGroupType: Node group type. Ranges:
            MASTER: Master node group type.
            CORE: Core node group type.
            TASK: Compute order node group type.
            '''
            result = self._values.get("node_group_type")
            assert result is not None, "Required property 'node_group_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def additional_security_group_ids(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property:

            additionalSecurityGroupIds: Additional security groups. Additional security groups set
            individually for node groups in addition to the security
            groups set by the cluster.
            The value range of the number of array elements N: 0~2.
            '''
            result = self._values.get("additional_security_group_ids")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def cost_optimized_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.CostOptimizedConfigProperty"]]:
            '''
            :Property: costOptimizedConfig: Cost-optimized mode configuration.
            '''
            result = self._values.get("cost_optimized_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.CostOptimizedConfigProperty"]], result)

        @builtins.property
        def data_disks(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.DataDisksProperty"]]]]:
            '''
            :Property: dataDisks: data disk. The current data disk supports only one disk type.
            '''
            result = self._values.get("data_disks")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.DataDisksProperty"]]]], result)

        @builtins.property
        def deployment_set_strategy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            deploymentSetStrategy: Deployment set policy. Ranges:
            NONE: Does not apply to deployment sets.
            CLUSTER: Use cluster-level deployment sets.
            NODE_GROUP: Use node group level deployment sets.
            Default: NONE.
            '''
            result = self._values.get("deployment_set_strategy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def graceful_shutdown(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            gracefulShutdown: Whether the components deployed on the node group enable graceful offline. Ranges:
            true: Enable graceful logout.
            false: Graceful logout is not enabled.
            Default: false.
            '''
            result = self._values.get("graceful_shutdown")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def node_count(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: nodeCount: number of nodes. Value range: 1~1000.
            '''
            result = self._values.get("node_count")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def node_group_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            nodeGroupName: Node group name. The maximum length is 128 characters.
            Node group names are required to be unique within the cluster.
            '''
            result = self._values.get("node_group_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def node_resize_strategy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            nodeResizeStrategy: Node expansion strategy. Ranges:
            COST_OPTIMIZED: Cost optimization strategy.
            PRIORITY: Priority policy.
            Default: PRIORITY.
            '''
            result = self._values.get("node_resize_strategy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def spot_bid_prices(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.SpotBidPricesProperty"]]]]:
            '''
            :Property:

            spotBidPrices: Preemptible Spot Instance bid price.
            The parameter SpotStrategy takes effect when the value is SpotWithPriceLimit.
            The value range of the number of array elements N: 0~100.
            '''
            result = self._values.get("spot_bid_prices")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.SpotBidPricesProperty"]]]], result)

        @builtins.property
        def spot_instance_remedy(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            spotInstanceRemedy: After it is enabled, when it receives a system message that the preemptible
            instance will be recycled, the scaling group will try to create a new
            instance to replace the preemptible instance that will be recycled. Ranges:
            true: Enable fill-in preemptive instances.
            false: Do not enable fill-up preemptive instances.
            Default: false.
            '''
            result = self._values.get("spot_instance_remedy")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def spot_strategy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
            '''
            result = self._values.get("spot_strategy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def system_disk(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.SystemDiskProperty"]]:
            '''
            :Property: systemDisk: Disk config.
            '''
            result = self._values.get("system_disk")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster2.SystemDiskProperty"]], result)

        @builtins.property
        def v_switch_ids(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property:

            vSwitchIds: List of virtual machine switch IDs.
            The value range of the number of array elements N: 1~20.
            '''
            result = self._values.get("v_switch_ids")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def with_public_ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: withPublicIp: Whether to open the public IP. Default is false.
            '''
            result = self._values.get("with_public_ip")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NodeGroupsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-emr.RosCluster2.NodeSelectorProperty",
        jsii_struct_bases=[],
        name_mapping={
            "node_select_type": "nodeSelectType",
            "node_group_id": "nodeGroupId",
            "node_group_name": "nodeGroupName",
            "node_group_types": "nodeGroupTypes",
            "node_names": "nodeNames",
        },
    )
    class NodeSelectorProperty:
        def __init__(
            self,
            *,
            node_select_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            node_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            node_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            node_group_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            node_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param node_select_type: 
            :param node_group_id: 
            :param node_group_name: 
            :param node_group_types: 
            :param node_names: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__e80fde63d3fad8cf3fe73196a6cc3119f8700c1b10da68eb0d8c024fe2d8dd3a)
                check_type(argname="argument node_select_type", value=node_select_type, expected_type=type_hints["node_select_type"])
                check_type(argname="argument node_group_id", value=node_group_id, expected_type=type_hints["node_group_id"])
                check_type(argname="argument node_group_name", value=node_group_name, expected_type=type_hints["node_group_name"])
                check_type(argname="argument node_group_types", value=node_group_types, expected_type=type_hints["node_group_types"])
                check_type(argname="argument node_names", value=node_names, expected_type=type_hints["node_names"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "node_select_type": node_select_type,
            }
            if node_group_id is not None:
                self._values["node_group_id"] = node_group_id
            if node_group_name is not None:
                self._values["node_group_name"] = node_group_name
            if node_group_types is not None:
                self._values["node_group_types"] = node_group_types
            if node_names is not None:
                self._values["node_names"] = node_names

        @builtins.property
        def node_select_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            nodeSelectType: Node selection type.  Allowed values:
            CLUSTER: Cluster.
            NODE_GROUP: Node group.
            NODE: Node.
            '''
            result = self._values.get("node_select_type")
            assert result is not None, "Required property 'node_select_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def node_group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: nodeGroupId: Node group ID. This parameter takes effect when NodeSelectType is NodeGroup.
            '''
            result = self._values.get("node_group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def node_group_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            nodeGroupName: Node group name. This parameter takes effect when
            NodeSelectType is NodeGroup and the parameter NodeGroupId is empty.
            '''
            result = self._values.get("node_group_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def node_group_types(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property:

            nodeGroupTypes: Node group type. It takes effect when NodeSelectType is NodeGroup
            and the parameter NodeGroupId is empty.
            The number of array elements, N, ranges from 0 to 10.
            '''
            result = self._values.get("node_group_types")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def node_names(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property:

            nodeNames: List of node names. When the NodeSelectType value is Node,
            this parameter takes effect.
            '''
            result = self._values.get("node_names")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NodeSelectorProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-emr.RosCluster2.SpotBidPricesProperty",
        jsii_struct_bases=[],
        name_mapping={"bid_price": "bidPrice", "instance_type": "instanceType"},
    )
    class SpotBidPricesProperty:
        def __init__(
            self,
            *,
            bid_price: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param bid_price: 
            :param instance_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7102e83877b6eb558051cb0dc8ba38c8ee6744619ff8eaf5d94f156abbdcd4f0)
                check_type(argname="argument bid_price", value=bid_price, expected_type=type_hints["bid_price"])
                check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if bid_price is not None:
                self._values["bid_price"] = bid_price
            if instance_type is not None:
                self._values["instance_type"] = instance_type

        @builtins.property
        def bid_price(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            bidPrice: The maximum hourly bid for the instance. A maximum of 3 decimal
            places are supported. This parameter takes effect when
            the parameter SpotStrategy=SpotWithPriceLimit.
            '''
            result = self._values.get("bid_price")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: instanceType: ECS instance type.
            '''
            result = self._values.get("instance_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SpotBidPricesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-emr.RosCluster2.SubscriptionConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "auto_renew": "autoRenew",
            "auto_renew_duration": "autoRenewDuration",
            "auto_renew_duration_unit": "autoRenewDurationUnit",
            "payment_duration": "paymentDuration",
            "payment_duration_unit": "paymentDurationUnit",
        },
    )
    class SubscriptionConfigProperty:
        def __init__(
            self,
            *,
            auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            auto_renew_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            auto_renew_duration_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            payment_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            payment_duration_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param auto_renew: 
            :param auto_renew_duration: 
            :param auto_renew_duration_unit: 
            :param payment_duration: 
            :param payment_duration_unit: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__9355b9c1e4d26b83abc4ea8722fc8d86109282ea8a469a8214bd6f5a784a80f2)
                check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
                check_type(argname="argument auto_renew_duration", value=auto_renew_duration, expected_type=type_hints["auto_renew_duration"])
                check_type(argname="argument auto_renew_duration_unit", value=auto_renew_duration_unit, expected_type=type_hints["auto_renew_duration_unit"])
                check_type(argname="argument payment_duration", value=payment_duration, expected_type=type_hints["payment_duration"])
                check_type(argname="argument payment_duration_unit", value=payment_duration_unit, expected_type=type_hints["payment_duration_unit"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if auto_renew is not None:
                self._values["auto_renew"] = auto_renew
            if auto_renew_duration is not None:
                self._values["auto_renew_duration"] = auto_renew_duration
            if auto_renew_duration_unit is not None:
                self._values["auto_renew_duration_unit"] = auto_renew_duration_unit
            if payment_duration is not None:
                self._values["payment_duration"] = payment_duration
            if payment_duration_unit is not None:
                self._values["payment_duration_unit"] = payment_duration_unit

        @builtins.property
        def auto_renew(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            autoRenew: Automatic renewal. Ranges:
            true: Enable startup renewal.
            false: Automatic renewal is not enabled.
            Default: false.
            '''
            result = self._values.get("auto_renew")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def auto_renew_duration(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            autoRenewDuration: Auto-renewal duration. It takes effect when AutoRenew is true.
            When the AutoRenewDurationUnit value is Month, the values are:
            1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60.
            '''
            result = self._values.get("auto_renew_duration")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def auto_renew_duration_unit(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: autoRenewDurationUnit: Automatic renewal time unit, Month
            '''
            result = self._values.get("auto_renew_duration_unit")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def payment_duration(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            paymentDuration: Payment time. When the value of PaymentDurationUnit is Month,
            the values are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60.
            '''
            result = self._values.get("payment_duration")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def payment_duration_unit(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: paymentDurationUnit: Payment time unit, Month
            '''
            result = self._values.get("payment_duration_unit")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SubscriptionConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-emr.RosCluster2.SystemDiskProperty",
        jsii_struct_bases=[],
        name_mapping={
            "category": "category",
            "size": "size",
            "count": "count",
            "performance_level": "performanceLevel",
        },
    )
    class SystemDiskProperty:
        def __init__(
            self,
            *,
            category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param category: 
            :param size: 
            :param count: 
            :param performance_level: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5f2a91b59f682f6bd31488acf85fc1c0fa0a6b9bb8578a51e8e34a4028bd4cd7)
                check_type(argname="argument category", value=category, expected_type=type_hints["category"])
                check_type(argname="argument size", value=size, expected_type=type_hints["size"])
                check_type(argname="argument count", value=count, expected_type=type_hints["count"])
                check_type(argname="argument performance_level", value=performance_level, expected_type=type_hints["performance_level"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "category": category,
                "size": size,
            }
            if count is not None:
                self._values["count"] = count
            if performance_level is not None:
                self._values["performance_level"] = performance_level

        @builtins.property
        def category(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: category: Category of system disk.
            '''
            result = self._values.get("category")
            assert result is not None, "Required property 'category' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def size(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: size: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
            '''
            result = self._values.get("size")
            assert result is not None, "Required property 'size' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def count(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: count: The number of system disks per node, the default value is 1.
            '''
            result = self._values.get("count")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def performance_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            performanceLevel: The performance level of the enhanced SSD.Default value: PL1. Valid values:
            PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.
            PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.
            PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.
            PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
            Default is PL1.
            '''
            result = self._values.get("performance_level")
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
        jsii_type="@alicloud/ros-cdk-emr.RosCluster2.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__8e400c7d7ff48f5b16573752db2ac28b219be25effff5510e0112aa53f0727c6)
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
    jsii_type="@alicloud/ros-cdk-emr.RosCluster2Props",
    jsii_struct_bases=[],
    name_mapping={
        "applications": "applications",
        "cluster_name": "clusterName",
        "cluster_type": "clusterType",
        "node_attributes": "nodeAttributes",
        "node_groups": "nodeGroups",
        "release_version": "releaseVersion",
        "application_configs": "applicationConfigs",
        "bootstrap_scripts": "bootstrapScripts",
        "deploy_mode": "deployMode",
        "payment_type": "paymentType",
        "resource_group_id": "resourceGroupId",
        "security_mode": "securityMode",
        "subscription_config": "subscriptionConfig",
        "tags": "tags",
    },
)
class RosCluster2Props:
    def __init__(
        self,
        *,
        applications: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.ApplicationsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        cluster_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        node_attributes: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.NodeAttributesProperty, typing.Dict[builtins.str, typing.Any]]],
        node_groups: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.NodeGroupsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        release_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        application_configs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.ApplicationConfigsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        bootstrap_scripts: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.BootstrapScriptsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        deploy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        subscription_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.SubscriptionConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosCluster2.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EMR::Cluster2``.

        :param applications: 
        :param cluster_name: 
        :param cluster_type: 
        :param node_attributes: 
        :param node_groups: 
        :param release_version: 
        :param application_configs: 
        :param bootstrap_scripts: 
        :param deploy_mode: 
        :param payment_type: 
        :param resource_group_id: 
        :param security_mode: 
        :param subscription_config: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__32422ecc390ff4fa806c43539ab495d7dbc32dfb715fe4262c4ed8214ed5327f)
            check_type(argname="argument applications", value=applications, expected_type=type_hints["applications"])
            check_type(argname="argument cluster_name", value=cluster_name, expected_type=type_hints["cluster_name"])
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument node_attributes", value=node_attributes, expected_type=type_hints["node_attributes"])
            check_type(argname="argument node_groups", value=node_groups, expected_type=type_hints["node_groups"])
            check_type(argname="argument release_version", value=release_version, expected_type=type_hints["release_version"])
            check_type(argname="argument application_configs", value=application_configs, expected_type=type_hints["application_configs"])
            check_type(argname="argument bootstrap_scripts", value=bootstrap_scripts, expected_type=type_hints["bootstrap_scripts"])
            check_type(argname="argument deploy_mode", value=deploy_mode, expected_type=type_hints["deploy_mode"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_mode", value=security_mode, expected_type=type_hints["security_mode"])
            check_type(argname="argument subscription_config", value=subscription_config, expected_type=type_hints["subscription_config"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "applications": applications,
            "cluster_name": cluster_name,
            "cluster_type": cluster_type,
            "node_attributes": node_attributes,
            "node_groups": node_groups,
            "release_version": release_version,
        }
        if application_configs is not None:
            self._values["application_configs"] = application_configs
        if bootstrap_scripts is not None:
            self._values["bootstrap_scripts"] = bootstrap_scripts
        if deploy_mode is not None:
            self._values["deploy_mode"] = deploy_mode
        if payment_type is not None:
            self._values["payment_type"] = payment_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_mode is not None:
            self._values["security_mode"] = security_mode
        if subscription_config is not None:
            self._values["subscription_config"] = subscription_config
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def applications(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster2.ApplicationsProperty]]]:
        '''
        :Property: applications: Application List.The value range of the number n of the number N group: 1 ~ 100.
        '''
        result = self._values.get("applications")
        assert result is not None, "Required property 'applications' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster2.ApplicationsProperty]]], result)

    @builtins.property
    def cluster_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterName: Cluster name.The length is 1 ~ 128 characters, and the alphabet or Chinese must be started. It cannot start with http:// and https: //.It can include Chinese, English, numbers, half-horn colons (:), down line (_), half-angle period (.) Or short lines (-)
        '''
        result = self._values.get("cluster_name")
        assert result is not None, "Required property 'cluster_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        clusterType: Cluster type.Ranges:
        Datalake: The new version of the data lake.
        OLAP: Data analysis.
        DataFlow: Real -time data stream.
        DataServing: Data service.
        Hadoop: The old version of the data lake (not recommended, it is recommended to use the new version of the data lake).
        '''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def node_attributes(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster2.NodeAttributesProperty]:
        '''
        :Property: nodeAttributes: Node attributes.All ECS nodes basic attributes of the cluster.
        '''
        result = self._values.get("node_attributes")
        assert result is not None, "Required property 'node_attributes' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster2.NodeAttributesProperty], result)

    @builtins.property
    def node_groups(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster2.NodeGroupsProperty]]]:
        '''
        :Property: nodeGroups: The node group configuration array.The value range of the number n of the number N group: 1 ~ 100.
        '''
        result = self._values.get("node_groups")
        assert result is not None, "Required property 'node_groups' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster2.NodeGroupsProperty]]], result)

    @builtins.property
    def release_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: releaseVersion: EMR release version.View EMR distribution versions can be viewed through the EMR cluster.
        '''
        result = self._values.get("release_version")
        assert result is not None, "Required property 'release_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def application_configs(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster2.ApplicationConfigsProperty]]]]:
        '''
        :Property: applicationConfigs: Application configuration.The value range of the number n of the array element n: 1 ~ 1000.
        '''
        result = self._values.get("application_configs")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster2.ApplicationConfigsProperty]]]], result)

    @builtins.property
    def bootstrap_scripts(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster2.BootstrapScriptsProperty]]]]:
        '''
        :Property: bootstrapScripts: Guide the script group.The value range of the number n of the number N group: 1 ~ 10.
        '''
        result = self._values.get("bootstrap_scripts")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster2.BootstrapScriptsProperty]]]], result)

    @builtins.property
    def deploy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        deployMode: Application deployment mode in the cluster.Ranges:
        Normal: non -high available deployment.Cluster 1 master node.
        HA: High availability deployment.High availability deployment requires at least 3 master nodes.
        '''
        result = self._values.get("deploy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        paymentType: Payment type. Ranges:
        PayAsYouGo: Post-paid, pay-as-you-go.
        Subscription: Prepaid, yearly and monthly.
        Default: PayAsYouGo.
        '''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group ID.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityMode: Cluster Kerberos security mode.Ranges:
        Normal: General mode, does not open the Kerberos mode.
        Kerberos: Open the Kerberos mode.
        '''
        result = self._values.get("security_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def subscription_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster2.SubscriptionConfigProperty]]:
        '''
        :Property: subscriptionConfig: Pre -paid allocation.When the value of PaymentType is Subscripting, it must be filled.
        '''
        result = self._values.get("subscription_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster2.SubscriptionConfigProperty]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosCluster2.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosCluster2.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCluster2Props(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-emr.RosClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "charge_type": "chargeType",
        "cluster_type": "clusterType",
        "emr_ver": "emrVer",
        "host_group": "hostGroup",
        "name": "name",
        "net_type": "netType",
        "use_local_meta_db": "useLocalMetaDb",
        "zone_id": "zoneId",
        "authorize_content": "authorizeContent",
        "auto_renew": "autoRenew",
        "bootstrap_action": "bootstrapAction",
        "click_house_conf": "clickHouseConf",
        "config": "config",
        "configurations": "configurations",
        "deposit_type": "depositType",
        "eas_enable": "easEnable",
        "high_availability_enable": "highAvailabilityEnable",
        "init_custom_hive_meta_db": "initCustomHiveMetaDb",
        "instance_generation": "instanceGeneration",
        "io_optimized": "ioOptimized",
        "is_open_public_ip": "isOpenPublicIp",
        "key_pair_name": "keyPairName",
        "log_path": "logPath",
        "machine_type": "machineType",
        "master_pwd": "masterPwd",
        "meta_store_conf": "metaStoreConf",
        "meta_store_type": "metaStoreType",
        "option_soft_ware_list": "optionSoftWareList",
        "period": "period",
        "related_cluster_id": "relatedClusterId",
        "resource_group_id": "resourceGroupId",
        "security_group_id": "securityGroupId",
        "security_group_name": "securityGroupName",
        "ssh_enable": "sshEnable",
        "tags": "tags",
        "use_custom_hive_meta_db": "useCustomHiveMetaDb",
        "user_defined_emr_ecs_role": "userDefinedEmrEcsRole",
        "user_info": "userInfo",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "white_list_type": "whiteListType",
    },
)
class RosClusterProps:
    def __init__(
        self,
        *,
        charge_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        emr_ver: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host_group: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.HostGroupProperty, typing.Dict[builtins.str, typing.Any]]]]],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        net_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        use_local_meta_db: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        authorize_content: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bootstrap_action: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.BootstrapActionProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        click_house_conf: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.ConfigProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        configurations: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deposit_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        eas_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        high_availability_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        init_custom_hive_meta_db: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_generation: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        io_optimized: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_open_public_ip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        machine_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_pwd: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        meta_store_conf: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        meta_store_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        option_soft_ware_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        related_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ssh_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        use_custom_hive_meta_db: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_defined_emr_ecs_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.UserInfoProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        white_list_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EMR::Cluster``.

        :param charge_type: 
        :param cluster_type: 
        :param emr_ver: 
        :param host_group: 
        :param name: 
        :param net_type: 
        :param use_local_meta_db: 
        :param zone_id: 
        :param authorize_content: 
        :param auto_renew: 
        :param bootstrap_action: 
        :param click_house_conf: 
        :param config: 
        :param configurations: 
        :param deposit_type: 
        :param eas_enable: 
        :param high_availability_enable: 
        :param init_custom_hive_meta_db: 
        :param instance_generation: 
        :param io_optimized: 
        :param is_open_public_ip: 
        :param key_pair_name: 
        :param log_path: 
        :param machine_type: 
        :param master_pwd: 
        :param meta_store_conf: 
        :param meta_store_type: 
        :param option_soft_ware_list: 
        :param period: 
        :param related_cluster_id: 
        :param resource_group_id: 
        :param security_group_id: 
        :param security_group_name: 
        :param ssh_enable: 
        :param tags: 
        :param use_custom_hive_meta_db: 
        :param user_defined_emr_ecs_role: 
        :param user_info: 
        :param vpc_id: 
        :param v_switch_id: 
        :param white_list_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__610d0c82bff4b29f0715b390249d66d4606ff3bb2eba9557732ee64b7d025537)
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument emr_ver", value=emr_ver, expected_type=type_hints["emr_ver"])
            check_type(argname="argument host_group", value=host_group, expected_type=type_hints["host_group"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument net_type", value=net_type, expected_type=type_hints["net_type"])
            check_type(argname="argument use_local_meta_db", value=use_local_meta_db, expected_type=type_hints["use_local_meta_db"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument authorize_content", value=authorize_content, expected_type=type_hints["authorize_content"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument bootstrap_action", value=bootstrap_action, expected_type=type_hints["bootstrap_action"])
            check_type(argname="argument click_house_conf", value=click_house_conf, expected_type=type_hints["click_house_conf"])
            check_type(argname="argument config", value=config, expected_type=type_hints["config"])
            check_type(argname="argument configurations", value=configurations, expected_type=type_hints["configurations"])
            check_type(argname="argument deposit_type", value=deposit_type, expected_type=type_hints["deposit_type"])
            check_type(argname="argument eas_enable", value=eas_enable, expected_type=type_hints["eas_enable"])
            check_type(argname="argument high_availability_enable", value=high_availability_enable, expected_type=type_hints["high_availability_enable"])
            check_type(argname="argument init_custom_hive_meta_db", value=init_custom_hive_meta_db, expected_type=type_hints["init_custom_hive_meta_db"])
            check_type(argname="argument instance_generation", value=instance_generation, expected_type=type_hints["instance_generation"])
            check_type(argname="argument io_optimized", value=io_optimized, expected_type=type_hints["io_optimized"])
            check_type(argname="argument is_open_public_ip", value=is_open_public_ip, expected_type=type_hints["is_open_public_ip"])
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
            check_type(argname="argument log_path", value=log_path, expected_type=type_hints["log_path"])
            check_type(argname="argument machine_type", value=machine_type, expected_type=type_hints["machine_type"])
            check_type(argname="argument master_pwd", value=master_pwd, expected_type=type_hints["master_pwd"])
            check_type(argname="argument meta_store_conf", value=meta_store_conf, expected_type=type_hints["meta_store_conf"])
            check_type(argname="argument meta_store_type", value=meta_store_type, expected_type=type_hints["meta_store_type"])
            check_type(argname="argument option_soft_ware_list", value=option_soft_ware_list, expected_type=type_hints["option_soft_ware_list"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument related_cluster_id", value=related_cluster_id, expected_type=type_hints["related_cluster_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument security_group_name", value=security_group_name, expected_type=type_hints["security_group_name"])
            check_type(argname="argument ssh_enable", value=ssh_enable, expected_type=type_hints["ssh_enable"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument use_custom_hive_meta_db", value=use_custom_hive_meta_db, expected_type=type_hints["use_custom_hive_meta_db"])
            check_type(argname="argument user_defined_emr_ecs_role", value=user_defined_emr_ecs_role, expected_type=type_hints["user_defined_emr_ecs_role"])
            check_type(argname="argument user_info", value=user_info, expected_type=type_hints["user_info"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument white_list_type", value=white_list_type, expected_type=type_hints["white_list_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "charge_type": charge_type,
            "cluster_type": cluster_type,
            "emr_ver": emr_ver,
            "host_group": host_group,
            "name": name,
            "net_type": net_type,
            "use_local_meta_db": use_local_meta_db,
            "zone_id": zone_id,
        }
        if authorize_content is not None:
            self._values["authorize_content"] = authorize_content
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if bootstrap_action is not None:
            self._values["bootstrap_action"] = bootstrap_action
        if click_house_conf is not None:
            self._values["click_house_conf"] = click_house_conf
        if config is not None:
            self._values["config"] = config
        if configurations is not None:
            self._values["configurations"] = configurations
        if deposit_type is not None:
            self._values["deposit_type"] = deposit_type
        if eas_enable is not None:
            self._values["eas_enable"] = eas_enable
        if high_availability_enable is not None:
            self._values["high_availability_enable"] = high_availability_enable
        if init_custom_hive_meta_db is not None:
            self._values["init_custom_hive_meta_db"] = init_custom_hive_meta_db
        if instance_generation is not None:
            self._values["instance_generation"] = instance_generation
        if io_optimized is not None:
            self._values["io_optimized"] = io_optimized
        if is_open_public_ip is not None:
            self._values["is_open_public_ip"] = is_open_public_ip
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name
        if log_path is not None:
            self._values["log_path"] = log_path
        if machine_type is not None:
            self._values["machine_type"] = machine_type
        if master_pwd is not None:
            self._values["master_pwd"] = master_pwd
        if meta_store_conf is not None:
            self._values["meta_store_conf"] = meta_store_conf
        if meta_store_type is not None:
            self._values["meta_store_type"] = meta_store_type
        if option_soft_ware_list is not None:
            self._values["option_soft_ware_list"] = option_soft_ware_list
        if period is not None:
            self._values["period"] = period
        if related_cluster_id is not None:
            self._values["related_cluster_id"] = related_cluster_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if security_group_name is not None:
            self._values["security_group_name"] = security_group_name
        if ssh_enable is not None:
            self._values["ssh_enable"] = ssh_enable
        if tags is not None:
            self._values["tags"] = tags
        if use_custom_hive_meta_db is not None:
            self._values["use_custom_hive_meta_db"] = use_custom_hive_meta_db
        if user_defined_emr_ecs_role is not None:
            self._values["user_defined_emr_ecs_role"] = user_defined_emr_ecs_role
        if user_info is not None:
            self._values["user_info"] = user_info
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if white_list_type is not None:
            self._values["white_list_type"] = white_list_type

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        chargeType: The billing method. Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
        subscription.
        '''
        result = self._values.get("charge_type")
        assert result is not None, "Required property 'charge_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterType: The type of the cluster. Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
        '''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def emr_ver(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: emrVer: The version of EMR.
        '''
        result = self._values.get("emr_ver")
        assert result is not None, "Required property 'emr_ver' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host_group(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.HostGroupProperty]]]:
        '''
        :Property: hostGroup:
        '''
        result = self._values.get("host_group")
        assert result is not None, "Required property 'host_group' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.HostGroupProperty]]], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        name: The name of the cluster. The name can be 1 to 64 characters in length and only contain
        Chinese characters, letters, numbers, hyphens (-), and underscores (_).
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def net_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: netType: The type of the network.
        '''
        result = self._values.get("net_type")
        assert result is not None, "Required property 'net_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def use_local_meta_db(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: useLocalMetaDb: Indicates whether the local Hive metadatabase is used.
        '''
        result = self._values.get("use_local_meta_db")
        assert result is not None, "Required property 'use_local_meta_db' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: zoneId: The zone ID.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def authorize_content(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: authorizeContent: Not required.
        '''
        result = self._values.get("authorize_content")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Indicates whether the subscription cluster is auto-renewed.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bootstrap_action(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.BootstrapActionProperty]]]]:
        '''
        :Property: bootstrapAction:
        '''
        result = self._values.get("bootstrap_action")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.BootstrapActionProperty]]]], result)

    @builtins.property
    def click_house_conf(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: clickHouseConf: undefined
        '''
        result = self._values.get("click_house_conf")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.ConfigProperty]]]]:
        '''
        :Property: config:
        '''
        result = self._values.get("config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.ConfigProperty]]]], result)

    @builtins.property
    def configurations(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: configurations: Not required.
        '''
        result = self._values.get("configurations")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deposit_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: depositType: The hosting type.
        '''
        result = self._values.get("deposit_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def eas_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: easEnable: Indicates whether the cluster is a high-security cluster.
        '''
        result = self._values.get("eas_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def high_availability_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster. A value of true indicates
        that two master nodes are required.
        '''
        result = self._values.get("high_availability_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def init_custom_hive_meta_db(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: initCustomHiveMetaDb: A reserved parameter. Not required.
        '''
        result = self._values.get("init_custom_hive_meta_db")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_generation(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceGeneration: The generation of the ECS instances.
        '''
        result = self._values.get("instance_generation")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ioOptimized: Indicates wether I/O optimization is enabled. Default value: true.
        '''
        result = self._values.get("io_optimized")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_open_public_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isOpenPublicIp: Indicates whether a public IP address is assigned. A value of true indicates that
        a bandwidth of 8 MB is set by default.
        '''
        result = self._values.get("is_open_public_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPairName: The name of the key pair.
        '''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logPath: The log path in OSS.
        '''
        result = self._values.get("log_path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def machine_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: machineType: The type of the machine.
        '''
        result = self._values.get("machine_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_pwd(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        masterPwd: The SSH password for the master node. The password must meet the following requirements.
        Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
        It must contain three types of characters (uppercase letters, lowercase letters, numbers,
        and special symbols).
        '''
        result = self._values.get("master_pwd")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def meta_store_conf(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: metaStoreConf: Meta store conf of specific meta store type. If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
        '''
        result = self._values.get("meta_store_conf")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def meta_store_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        metaStoreType: Meta store type. Allow types:
        local: Local cluster
        unified: Unified meta data
        user_rds: User's RDS
        '''
        result = self._values.get("meta_store_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def option_soft_ware_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: optionSoftWareList: The list of optional services.
        '''
        result = self._values.get("option_soft_ware_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
        9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def related_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
        '''
        result = self._values.get("related_cluster_id")
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
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityGroupId: The ID of the security group. You can create a security group in the ECS console and
        use it. Note: If you use an existing security group, the default security group policy
        is applied to this security group: Only port 22 is open at the inbound and all ports
        are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityGroupName: The name of the security group to create. If the ID of the security group is not specified,
        this name is used to create a new security group. After the cluster is created, you
        can view the ID of the security group on the Cluster Management page. The default
        security group policy is applied to this security group: Only port 22 is open at the
        inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
        or SecurityGroupName.
        '''
        result = self._values.get("security_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ssh_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sshEnable: Indicates whether SSH is enabled.
        '''
        result = self._values.get("ssh_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosCluster.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosCluster.TagsProperty]], result)

    @builtins.property
    def use_custom_hive_meta_db(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: useCustomHiveMetaDb: A reserved parameter. Not required.
        '''
        result = self._values.get("use_custom_hive_meta_db")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_defined_emr_ecs_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
        '''
        result = self._values.get("user_defined_emr_ecs_role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.UserInfoProperty]]]]:
        '''
        :Property: userInfo:
        '''
        result = self._values.get("user_info")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.UserInfoProperty]]]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the VPC. A value is required when NetType=vpc.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the Vswitch. A value is required when NetType=vpc.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def white_list_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: whiteListType: Not required.
        '''
        result = self._values.get("white_list_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosClusterServiceConfigs(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-emr.RosClusterServiceConfigs",
):
    '''A ROS template type:  ``ALIYUN::EMR::ClusterServiceConfigs``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterServiceConfigsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EMR::ClusterServiceConfigs``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d8dd5b6a053c6cb6e2025b95999907950547049bf692a3e4ddf198f4a9046bb)
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
            type_hints = typing.get_type_hints(_typecheckingstub__1b0a51f3f9ce12d332f2ad155cc5755a24d5b3200d2b11b58e19ee9361d5fadf)
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
        :Attribute: ClusterId: The ID of the cluster.
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
        :Property: clusterId: The ID of the cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea139ffc30cf9aabcf195ded16b0c95649a8bef3cc0662740672adc2527bba1f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__66df74a1e45e67a4d0a2a6bb57e8787f82f1ea8f8665bf29956c9e9c2c97da83)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="serviceConfigs")
    def service_configs(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterServiceConfigs.ServiceConfigsProperty"]]]:
        '''
        :Property: serviceConfigs: Server configs
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterServiceConfigs.ServiceConfigsProperty"]]], jsii.get(self, "serviceConfigs"))

    @service_configs.setter
    def service_configs(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterServiceConfigs.ServiceConfigsProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2857d276596987f0f546ba13391d32cd75145a41424937f12a204cddf9b59d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceConfigs", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-emr.RosClusterServiceConfigs.ServiceConfigsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "config_params": "configParams",
            "service_name": "serviceName",
            "comment": "comment",
            "config_type": "configType",
            "custom_config_params": "customConfigParams",
            "gateway_cluster_id_list": "gatewayClusterIdList",
            "group_id": "groupId",
            "host_instance_id": "hostInstanceId",
            "refresh_host_config": "refreshHostConfig",
        },
    )
    class ServiceConfigsProperty:
        def __init__(
            self,
            *,
            config_params: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            config_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            custom_config_params: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            gateway_cluster_id_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            host_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            refresh_host_config: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param config_params: 
            :param service_name: 
            :param comment: 
            :param config_type: 
            :param custom_config_params: 
            :param gateway_cluster_id_list: 
            :param group_id: 
            :param host_instance_id: 
            :param refresh_host_config: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f37479e021dcc43d7a837b17486b74055331b17fbdfff836e387a843074da60b)
                check_type(argname="argument config_params", value=config_params, expected_type=type_hints["config_params"])
                check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
                check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
                check_type(argname="argument config_type", value=config_type, expected_type=type_hints["config_type"])
                check_type(argname="argument custom_config_params", value=custom_config_params, expected_type=type_hints["custom_config_params"])
                check_type(argname="argument gateway_cluster_id_list", value=gateway_cluster_id_list, expected_type=type_hints["gateway_cluster_id_list"])
                check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
                check_type(argname="argument host_instance_id", value=host_instance_id, expected_type=type_hints["host_instance_id"])
                check_type(argname="argument refresh_host_config", value=refresh_host_config, expected_type=type_hints["refresh_host_config"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "config_params": config_params,
                "service_name": service_name,
            }
            if comment is not None:
                self._values["comment"] = comment
            if config_type is not None:
                self._values["config_type"] = config_type
            if custom_config_params is not None:
                self._values["custom_config_params"] = custom_config_params
            if gateway_cluster_id_list is not None:
                self._values["gateway_cluster_id_list"] = gateway_cluster_id_list
            if group_id is not None:
                self._values["group_id"] = group_id
            if host_instance_id is not None:
                self._values["host_instance_id"] = host_instance_id
            if refresh_host_config is not None:
                self._values["refresh_host_config"] = refresh_host_config

        @builtins.property
        def config_params(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: configParams: The specific change of the configuration. It is a JSON string.
            '''
            result = self._values.get("config_params")
            assert result is not None, "Required property 'config_params' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def service_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: serviceName: The name of the service.
            '''
            result = self._values.get("service_name")
            assert result is not None, "Required property 'service_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def comment(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: comment: The comment for the configuration change.
            '''
            result = self._values.get("comment")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def config_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: configType: The type of the configuration parameters.
            '''
            result = self._values.get("config_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def custom_config_params(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: customConfigParams: The modification of custom configuration parameters.
            '''
            result = self._values.get("custom_config_params")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def gateway_cluster_id_list(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: gatewayClusterIdList:
            '''
            result = self._values.get("gateway_cluster_id_list")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: groupId: The ID of the host group.
            '''
            result = self._values.get("group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def host_instance_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: hostInstanceId: The instance ID of the host. This is typically the ID of an ECS instance.
            '''
            result = self._values.get("host_instance_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def refresh_host_config(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: refreshHostConfig: Specifies whether to configure the job immediately after the modification.
            '''
            result = self._values.get("refresh_host_config")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ServiceConfigsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-emr.RosClusterServiceConfigsProps",
    jsii_struct_bases=[],
    name_mapping={"cluster_id": "clusterId", "service_configs": "serviceConfigs"},
)
class RosClusterServiceConfigsProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_configs: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterServiceConfigs.ServiceConfigsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::EMR::ClusterServiceConfigs``.

        :param cluster_id: 
        :param service_configs: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__234918020588f4f56d91745eac42d32c492c300cf0e07d501f7e34ec1d9bc24d)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument service_configs", value=service_configs, expected_type=type_hints["service_configs"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
            "service_configs": service_configs,
        }

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: The ID of the cluster.
        '''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_configs(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterServiceConfigs.ServiceConfigsProperty]]]:
        '''
        :Property: serviceConfigs: Server configs
        '''
        result = self._values.get("service_configs")
        assert result is not None, "Required property 'service_configs' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterServiceConfigs.ServiceConfigsProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterServiceConfigsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosFlowProject(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-emr.RosFlowProject",
):
    '''A ROS template type:  ``ALIYUN::EMR::FlowProject``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosFlowProjectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EMR::FlowProject``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64cf502257662b1670244aadcb73dca37af8da8bd6d1a5198d53e9c5b5a2f3b3)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5289ca48405b72db27bec66882203a976b50207428cf67c03d3cb3e5a7d025fb)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The time when the project was created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the project.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrFlowProjectId")
    def attr_flow_project_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FlowProjectId: The ID of the project.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlowProjectId"))

    @builtins.property
    @jsii.member(jsii_name="attrFlowProjectName")
    def attr_flow_project_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FlowProjectName: The name of the project.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlowProjectName"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtModified")
    def attr_gmt_modified(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GmtModified: The time when the project was modified.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGmtModified"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserId: The ID of the primary account.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: description: The description of the project.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__563111f2b2c77dad1069d2860dde8bb846a8b13d5a47638ea3b84c5e6a34e080)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78868eefe49d6bb02f4a22303ff93d32779ed4002660585669911c5af55d34ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="flowProjectName")
    def flow_project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: flowProjectName: The name of the project.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "flowProjectName"))

    @flow_project_name.setter
    def flow_project_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1912a2d1b639ffd2b794102c61467414766788e350aef194a56b388ff4c248a0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "flowProjectName", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the enterprise resource group to which the EMR instances and ECS node instances belong.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3640bb79e15a8dd4cb1309e3309b26ae20d555fabd18d41612e12a200cf9965)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-emr.RosFlowProjectProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "flow_project_name": "flowProjectName",
        "resource_group_id": "resourceGroupId",
    },
)
class RosFlowProjectProps:
    def __init__(
        self,
        *,
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        flow_project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EMR::FlowProject``.

        :param description: 
        :param flow_project_name: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6022bb3e0c8109b1c11194d1f08b5466404bf99be64f5b5e831d3129cd6d7302)
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument flow_project_name", value=flow_project_name, expected_type=type_hints["flow_project_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "description": description,
            "flow_project_name": flow_project_name,
        }
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: description: The description of the project.
        '''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def flow_project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: flowProjectName: The name of the project.
        '''
        result = self._values.get("flow_project_name")
        assert result is not None, "Required property 'flow_project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the enterprise resource group to which the EMR instances and ECS node instances belong.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFlowProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Cluster",
    "Cluster2",
    "Cluster2Props",
    "ClusterProps",
    "ClusterServiceConfigs",
    "ClusterServiceConfigsProps",
    "FlowProject",
    "FlowProjectProps",
    "RosCluster",
    "RosCluster2",
    "RosCluster2Props",
    "RosClusterProps",
    "RosClusterServiceConfigs",
    "RosClusterServiceConfigsProps",
    "RosFlowProject",
    "RosFlowProjectProps",
]

publication.publish()

def _typecheckingstub__aa299a15384acbfe06d615b276f273b0e7bd8f7ea216d9e4bce353702a6b64d7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b22784d7f33ab87c26d306638862c8d1982c5b56eeb52cfcedd3e7e9dd75f2c9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[Cluster2Props, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e7f5155af542d0f61b897e0af544df17f57f93915a8d4e7aee755b062f9214f(
    *,
    applications: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.ApplicationsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    cluster_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    node_attributes: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.NodeAttributesProperty, typing.Dict[builtins.str, typing.Any]]],
    node_groups: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.NodeGroupsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    release_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    application_configs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.ApplicationConfigsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    bootstrap_scripts: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.BootstrapScriptsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    deploy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    subscription_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.SubscriptionConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosCluster2.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__766dc60182425bbf8665cc25c688fab6752086812eb77d0957b01f40175c8335(
    *,
    charge_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    emr_ver: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host_group: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.HostGroupProperty, typing.Dict[builtins.str, typing.Any]]]]],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    net_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    use_local_meta_db: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    authorize_content: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bootstrap_action: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.BootstrapActionProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    click_house_conf: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.ConfigProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    configurations: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deposit_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    eas_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    high_availability_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    init_custom_hive_meta_db: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_generation: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    io_optimized: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_open_public_ip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    machine_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_pwd: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    meta_store_conf: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    meta_store_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    option_soft_ware_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    related_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ssh_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    use_custom_hive_meta_db: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_defined_emr_ecs_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.UserInfoProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    white_list_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a37c6b29dee7c38ee0c7966aadba0fd723ca5c661fae4d44ca900586bb82758c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ClusterServiceConfigsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e0e4aa852c7145fde27c31ca464b4c2b7808f405d777343d4a8b2103761e7b4(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_configs: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterServiceConfigs.ServiceConfigsProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9a7b6335da93f01b4417aace276e9a14ad6c25d572626bb171fbf2460d2763c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[FlowProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c4fe379036ad0074ca3fda4be5579f932a1e8d27f4e4f863ccb9abb41fe061d(
    *,
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    flow_project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42523acdb9e60c46f44cb7d0ff24f2e87b113e1c4db35501fd9543094b0e86cb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b043644a81e4f7014b09f297a0f0b38b5b9063df7655a148ba98969f378ba93(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8fcd51525fbef3491826ecff1e327ec7159271228d1de09f22bf882814480d6a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31d8c930cf024fcdb71fa7509f57c402ff714db5d59b7d246342ab1d2dc7562d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f128a07ee3e5e3e138afb7195f869fc072a0d158ddf7ec239744373b3d692342(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22df2f992ea4a9e6f03389740a0b4132b578d16015618f26ee69897f88d44329(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23567c9a90680fea6ab5fbe475c88d2f20cf4cab6742c07ff5fb872f128cfebe(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.HostGroupProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98e3f664ec8649d7dbb94e123fff67f4ba0a360123d63dc8e3cb0e6515f522fc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5be06cb048a06da6f7ca592236347182fb6eee17b587d19f864ec9ddc72f4ee(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98c489ec1b3738fe2329dda791b0e80cc0944dfa4045d06d5f3ba0f017d1baa8(
    value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91000201811a972c6572b1fb04a8f0934a3ec8c8c4b13c2b7bb796c88edbe672(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__71fca76535df1d9ecfb9f768667cc80aa2375d7fd3ddec7a59b91de0194337b2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e239784622266f93084d47880178b01d87bd8d4651683554bedbc45f01e48335(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d260cc4be3e3c726849b56a3aabac6b9de304fff562a6e6ed61b80be257bd49(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.BootstrapActionProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de63cd79ebec8fbb1f85acc3ff07647247146e048da1ddafa76cb05bd52a514c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a5209fd46ac857408010026ae77df4bb9729a466a1b657bf1ab4d4403404eab1(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.ConfigProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__152bb7f1d0cfa61729854c355e8ff95dbcf23245670a5e9c4bcf093dd0471e16(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aea6f4ad0ac0f2a89d4800d518017bcabbc7856f175e6a48b62550cf455472ed(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6745aa098834fb00e55eb74ff82041da6c8167cdb39e2396a2692bd08c4434f6(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3db8d29edc0f885c180399089c996f7d5a4c9bef77908bfedb6616a5eac08e72(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa6fefb0925cd756a1349c9eca8c9de121d1523c0904198bf5bb9a10174486ec(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6649d4e33d7d40f8ea9ccf217d64c32e3fe6d6aa9cfb6a455b63d7b1473d018(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ed6da6de90bdc760d76303c1683619c4d2a0653f0450e9e765a02aa17c50cd5(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d45113f91fa2fbd5aaf3aa317c7417493a1018c78d7e2b1f9b15126f6eeafd1d(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a9accb64a1997e6b1bd39b5143b51b65b16da7130d115c6bf9e264ca17fa9f9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5a0147f15fae4aff3e7cd265d86972bf1014f7db912082f9770e3b5674a0f9e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2ca5d194ae863b969ce498894f82175e017cd74ae2b4a525e159ed05b6e1366(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__499793b47fcf6af35a3a579dd03821410255048beee9652c9911cfb1c366cb20(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a69b99f48d2b09e733cf2803a464cb2afdecddae60d6242fa71bff5a7cea4e1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1991a71aa36b5ebc42a2cf6da2060c4f07e3b5242ac589bad71a472dafad051(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__768029b14ad2728bcab17288e9c3dbcab7c07db1dd64d2c9c797e39c71662e1b(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed571ae7b090fdaa25d21cfbc1e190c802b26660c07762db51f839715425965c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47237a8d2522f064f3a48abeb57eb5ad08c2387408f78cc086d3c11dcd2de2df(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b62da09d1eb435e2c445930d9c9cde2ff6b25d988e7cae3929390925ac3c536(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6417bdec370dc203fc52e4518bd6c70d00a19c78406a0c4719818f66588b187(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8471ecae4e404f4afb4ad213c582890da42cfffdda69c50fe5d398a0f3743ea6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7102c49fb1b177bf207487fa6c0ece2909935c72152fdde604883c129e7aaa10(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6083e0a20a2af07c60f8bb11e2d55a88f8af86851a33cf5e89014bcad05a19d1(
    value: typing.Optional[typing.List[RosCluster.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1569c37e4ecc2e4701e46463fcc8f538b3aff7f22539f9a76f29663bb60ea9e(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ca2444bd3bee5aea3a86371c31f281ac9a5f9b5a06591f00c8aac80e08f29fe(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df0a9afd69e92b9a7bb9ec572a4d9acb7f8a0b9d2db7c1adb5ebd93b07f0202c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.UserInfoProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a5cc6a59fd299766c9e90135965622d568ec14545cfd478df47e94a536ce648e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9fa10efca301f2b97de3a305e28d7680fab1774776d5ea464d0079c5a5854096(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6938921b1037b9d3c3b8f434663f2794f6482c2583a7c338a8ed31437f7dc3d8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e81f42cad5dbe63c2ee8fbac9755d469e955658bf721a75f4d70e569dd4574c(
    *,
    arg: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64b0ca609d00da9f82e905a770b2caccbe137dbc8e3f271a72f64fc12395a27e(
    *,
    config_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    config_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypt: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    file_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    replace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef195be2ef6b3702390682f3a8b07193ccac50f5bdf8999188569cb1d1a7efd5(
    *,
    charge_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    disk_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    disk_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    disk_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host_group_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    sys_disk_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    sys_disk_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    create_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    gpu_driver: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1dd7a8fa585442092089dc3a6419cd169b4f09ae28666151335d54dbcd778d3f(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1ab67aacdbb2704972f1f0d892640809b34385ab8f96e007abf35daa66ade77(
    *,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__716e1e6573cab7e5c5aa7dfaaa2f9ce3f5693f3d58e0f9a2aa1b907ee1af98e3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCluster2Props, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dbb31c8065f6c0237ed2d0ea4c4b5b3bbfaf96df70e1b41d9871bafda08230f2(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db283968271aeb9e09aa0b73e7b3cb04037381bb25b45adb72ca1bfb74188643(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster2.ApplicationsProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__04e15d72ba4d3b5eba5e351ea210fc2948cf27ed4702f10d1855bea446037b07(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9188c7536223ec595838925ec61c7fd5e05923045f9c308c912146a03843020d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5555b4e1354f3589df3197e1f562aa5e54c8e9c062b911145aff4b9223651714(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34d0bc3dc91082cd7833a1b0c06cff30f0f0d8fa3f096d12431cec1ba11e0e59(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster2.NodeAttributesProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0325aeda27740d1848cd769fedc759ae8a50590b8fc56558c6f407f50f73af7(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster2.NodeGroupsProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba11302e77ae43605d84964dc4e1a7c8de7b9d97194df1ed77536048d7ad363d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37e81765128e1ed2e9c3bd1c27a652010b6b9689bd0c42e8f6dfb7888ab7726f(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster2.ApplicationConfigsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73fe03dfe42efa9e650f51d8443e89c292505fe4ae12f20d42ace2ba6554f058(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster2.BootstrapScriptsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74c9673e87493e38bd106b2a5e9bb5ca7b3718763bb4bd6c8f707cd23d8ab324(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e408cffd44265886e20c4b6f738ff756d37adf1603b8f0f8acf39007fc2b35ee(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22a01ab781cdff871e437eda46dd7a978dc303e93023af5044e0192d0c295eca(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ccb19437cf78c43d3ff021db410d9349092f7dfbd7380f03049b4b29da71dba6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ad2458f8ae47305dafb6b3ac4f249cf2cc650523686de2a9b0597b3646f3aed(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster2.SubscriptionConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6390be531920b248f5781662846c2cfcf809b155c012edea279013158bfd2e9e(
    value: typing.Optional[typing.List[RosCluster2.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38d9312381dc6e52837677e6129dab1a5137ff42bfdd139d0834976e2161aa4b(
    *,
    application_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    config_file_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    config_item_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    config_item_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    config_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    node_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    node_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9807d8a87bbbb596f2da1dd0715f9f57358f8ea1226aac304c2722e26cc69aa6(
    *,
    application_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e13d3e75c68732ab69ab07440cafef924c4cb6c7d6ea69f73aa235bd9687c1b1(
    *,
    node_selector: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.NodeSelectorProperty, typing.Dict[builtins.str, typing.Any]]],
    script_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    script_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    execution_fail_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    execution_moment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    script_args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a42cf7c3f3545467874ddb2267bd13ad7d09a086455589ce34376ecdd8ddd27b(
    *,
    on_demand_base_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    on_demand_percentage_above_base_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    spot_instance_pools: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__608ebd75ddd445ce70dbe0d13a0145909da449dc5ef76d6abb5eca78c9a13f45(
    *,
    category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d93533388f9cd010a451bfd074e9bd2abfe8222809cd7a97a50efe717f00a7d(
    *,
    security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ram_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9fd2d1d4d0914f2b50132bb3992eb72ee071865756a65a7852f132cf16538cc0(
    *,
    instance_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    node_group_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    additional_security_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    cost_optimized_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.CostOptimizedConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.DataDisksProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    deployment_set_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    graceful_shutdown: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    node_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    node_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    node_resize_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_bid_prices: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.SpotBidPricesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    spot_instance_remedy: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.SystemDiskProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    with_public_ip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e80fde63d3fad8cf3fe73196a6cc3119f8700c1b10da68eb0d8c024fe2d8dd3a(
    *,
    node_select_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    node_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    node_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    node_group_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    node_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7102e83877b6eb558051cb0dc8ba38c8ee6744619ff8eaf5d94f156abbdcd4f0(
    *,
    bid_price: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9355b9c1e4d26b83abc4ea8722fc8d86109282ea8a469a8214bd6f5a784a80f2(
    *,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_duration_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_duration_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f2a91b59f682f6bd31488acf85fc1c0fa0a6b9bb8578a51e8e34a4028bd4cd7(
    *,
    category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e400c7d7ff48f5b16573752db2ac28b219be25effff5510e0112aa53f0727c6(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__32422ecc390ff4fa806c43539ab495d7dbc32dfb715fe4262c4ed8214ed5327f(
    *,
    applications: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.ApplicationsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    cluster_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    node_attributes: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.NodeAttributesProperty, typing.Dict[builtins.str, typing.Any]]],
    node_groups: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.NodeGroupsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    release_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    application_configs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.ApplicationConfigsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    bootstrap_scripts: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.BootstrapScriptsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    deploy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    subscription_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster2.SubscriptionConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosCluster2.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__610d0c82bff4b29f0715b390249d66d4606ff3bb2eba9557732ee64b7d025537(
    *,
    charge_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    emr_ver: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host_group: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.HostGroupProperty, typing.Dict[builtins.str, typing.Any]]]]],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    net_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    use_local_meta_db: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    authorize_content: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bootstrap_action: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.BootstrapActionProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    click_house_conf: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.ConfigProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    configurations: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deposit_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    eas_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    high_availability_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    init_custom_hive_meta_db: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_generation: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    io_optimized: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_open_public_ip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    machine_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_pwd: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    meta_store_conf: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    meta_store_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    option_soft_ware_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    related_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ssh_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    use_custom_hive_meta_db: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_defined_emr_ecs_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.UserInfoProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    white_list_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d8dd5b6a053c6cb6e2025b95999907950547049bf692a3e4ddf198f4a9046bb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosClusterServiceConfigsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b0a51f3f9ce12d332f2ad155cc5755a24d5b3200d2b11b58e19ee9361d5fadf(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea139ffc30cf9aabcf195ded16b0c95649a8bef3cc0662740672adc2527bba1f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__66df74a1e45e67a4d0a2a6bb57e8787f82f1ea8f8665bf29956c9e9c2c97da83(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2857d276596987f0f546ba13391d32cd75145a41424937f12a204cddf9b59d4(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterServiceConfigs.ServiceConfigsProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f37479e021dcc43d7a837b17486b74055331b17fbdfff836e387a843074da60b(
    *,
    config_params: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    config_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    custom_config_params: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    gateway_cluster_id_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_host_config: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__234918020588f4f56d91745eac42d32c492c300cf0e07d501f7e34ec1d9bc24d(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_configs: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterServiceConfigs.ServiceConfigsProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64cf502257662b1670244aadcb73dca37af8da8bd6d1a5198d53e9c5b5a2f3b3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosFlowProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5289ca48405b72db27bec66882203a976b50207428cf67c03d3cb3e5a7d025fb(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__563111f2b2c77dad1069d2860dde8bb846a8b13d5a47638ea3b84c5e6a34e080(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78868eefe49d6bb02f4a22303ff93d32779ed4002660585669911c5af55d34ae(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1912a2d1b639ffd2b794102c61467414766788e350aef194a56b388ff4c248a0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3640bb79e15a8dd4cb1309e3309b26ae20d555fabd18d41612e12a200cf9965(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6022bb3e0c8109b1c11194d1f08b5466404bf99be64f5b5e831d3129cd6d7302(
    *,
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    flow_project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
