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

import ros_cdk_core


class Cluster(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-emr.Cluster",
):
    '''A ROS resource type:  ``ALIYUN::EMR::Cluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["ClusterProps", typing.Dict[str, typing.Any]],
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
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[ClusterProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterId: The ID of the cluster.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrHostGroups")
    def attr_host_groups(self) -> ros_cdk_core.IResolvable:
        '''Attribute HostGroups: The host group list of the cluster.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostGroups"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterNodeInnerIps")
    def attr_master_node_inner_ips(self) -> ros_cdk_core.IResolvable:
        '''Attribute MasterNodeInnerIps: The inner ip list of the cluster master nodes.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMasterNodeInnerIps"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterNodePubIps")
    def attr_master_node_pub_ips(self) -> ros_cdk_core.IResolvable:
        '''Attribute MasterNodePubIps: The public ip list of the cluster master nodes.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMasterNodePubIps"))


class Cluster2(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-emr.Cluster2",
):
    '''A ROS resource type:  ``ALIYUN::EMR::Cluster2``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["Cluster2Props", typing.Dict[str, typing.Any]],
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
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[Cluster2Props, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterId: Cluster ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))


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
        applications: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosCluster2.ApplicationsProperty", typing.Dict[str, typing.Any]]]]],
        cluster_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        node_attributes: typing.Union[ros_cdk_core.IResolvable, typing.Union["RosCluster2.NodeAttributesProperty", typing.Dict[str, typing.Any]]],
        node_groups: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosCluster2.NodeGroupsProperty", typing.Dict[str, typing.Any]]]]],
        release_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        application_configs: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosCluster2.ApplicationConfigsProperty", typing.Dict[str, typing.Any]]]]]] = None,
        bootstrap_scripts: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosCluster2.BootstrapScriptsProperty", typing.Dict[str, typing.Any]]]]]] = None,
        deploy_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        subscription_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosCluster2.SubscriptionConfigProperty", typing.Dict[str, typing.Any]]]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosCluster2.TagsProperty", typing.Dict[str, typing.Any]]]] = None,
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
            def stub(
                *,
                applications: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.ApplicationsProperty, typing.Dict[str, typing.Any]]]]],
                cluster_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                cluster_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                node_attributes: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.NodeAttributesProperty, typing.Dict[str, typing.Any]]],
                node_groups: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.NodeGroupsProperty, typing.Dict[str, typing.Any]]]]],
                release_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                application_configs: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.ApplicationConfigsProperty, typing.Dict[str, typing.Any]]]]]] = None,
                bootstrap_scripts: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.BootstrapScriptsProperty, typing.Dict[str, typing.Any]]]]]] = None,
                deploy_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                payment_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                security_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                subscription_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.SubscriptionConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                tags: typing.Optional[typing.Sequence[typing.Union[RosCluster2.TagsProperty, typing.Dict[str, typing.Any]]]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        self._values: typing.Dict[str, typing.Any] = {
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
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.ApplicationsProperty"]]]:
        '''Property applications: Application List.The value range of the number n of the number N group: 1 ~ 100.'''
        result = self._values.get("applications")
        assert result is not None, "Required property 'applications' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.ApplicationsProperty"]]], result)

    @builtins.property
    def cluster_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property clusterName: Cluster name.The length is 1 ~ 128 characters, and the alphabet or Chinese must be started. It cannot start with http:// and https: //.It can include Chinese, English, numbers, half-horn colons (:), down line (_), half-angle period (.) Or short lines (-).'''
        result = self._values.get("cluster_name")
        assert result is not None, "Required property 'cluster_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property clusterType: Cluster type.Ranges: Datalake: The new version of the data lake. OLAP: Data analysis. DataFlow: Real -time data stream. DataServing: Data service. Hadoop: The old version of the data lake (not recommended, it is recommended to use the new version of the data lake).'''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def node_attributes(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosCluster2.NodeAttributesProperty"]:
        '''Property nodeAttributes: Node attributes.All ECS nodes basic attributes of the cluster.'''
        result = self._values.get("node_attributes")
        assert result is not None, "Required property 'node_attributes' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosCluster2.NodeAttributesProperty"], result)

    @builtins.property
    def node_groups(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.NodeGroupsProperty"]]]:
        '''Property nodeGroups: The node group configuration array.The value range of the number n of the number N group: 1 ~ 100.'''
        result = self._values.get("node_groups")
        assert result is not None, "Required property 'node_groups' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.NodeGroupsProperty"]]], result)

    @builtins.property
    def release_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property releaseVersion: EMR release version.View EMR distribution versions can be viewed through the EMR cluster.'''
        result = self._values.get("release_version")
        assert result is not None, "Required property 'release_version' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def application_configs(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.ApplicationConfigsProperty"]]]]:
        '''Property applicationConfigs: Application configuration.The value range of the number n of the array element n: 1 ~ 1000.'''
        result = self._values.get("application_configs")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.ApplicationConfigsProperty"]]]], result)

    @builtins.property
    def bootstrap_scripts(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.BootstrapScriptsProperty"]]]]:
        '''Property bootstrapScripts: Guide the script group.The value range of the number n of the number N group: 1 ~ 10.'''
        result = self._values.get("bootstrap_scripts")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.BootstrapScriptsProperty"]]]], result)

    @builtins.property
    def deploy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property deployMode: Application deployment mode in the cluster.Ranges: Normal: non -high available deployment.Cluster 1 master node. HA: High availability deployment.High availability deployment requires at least 3 master nodes.'''
        result = self._values.get("deploy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property paymentType: Payment type.

        Ranges:
        PayAsYouGo: Post-paid, pay-as-you-go.
        Subscription: Prepaid, yearly and monthly.
        Default: PayAsYouGo.
        '''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: Resource group ID.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property securityMode: Cluster Kerberos security mode.Ranges: Normal: General mode, does not open the Kerberos mode. Kerberos: Open the Kerberos mode.'''
        result = self._values.get("security_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def subscription_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.SubscriptionConfigProperty"]]:
        '''Property subscriptionConfig: Pre -paid allocation.When the value of PaymentType is Subscripting, it must be filled.'''
        result = self._values.get("subscription_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.SubscriptionConfigProperty"]], result)

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
        charge_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        emr_ver: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        host_group: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosCluster.HostGroupProperty", typing.Dict[str, typing.Any]]]]],
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        net_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        use_local_meta_db: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        authorize_content: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        bootstrap_action: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosCluster.BootstrapActionProperty", typing.Dict[str, typing.Any]]]]]] = None,
        click_house_conf: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosCluster.ConfigProperty", typing.Dict[str, typing.Any]]]]]] = None,
        configurations: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        deposit_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        eas_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        high_availability_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        init_custom_hive_meta_db: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        instance_generation: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        io_optimized: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        is_open_public_ip: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        log_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        machine_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_pwd: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        meta_store_conf: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        meta_store_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        option_soft_ware_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        related_cluster_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ssh_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosCluster.TagsProperty", typing.Dict[str, typing.Any]]]] = None,
        use_custom_hive_meta_db: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        user_defined_emr_ecs_role: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        user_info: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosCluster.UserInfoProperty", typing.Dict[str, typing.Any]]]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        white_list_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
            def stub(
                *,
                charge_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                cluster_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                emr_ver: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                host_group: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster.HostGroupProperty, typing.Dict[str, typing.Any]]]]],
                name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                net_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                use_local_meta_db: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
                zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                authorize_content: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                bootstrap_action: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster.BootstrapActionProperty, typing.Dict[str, typing.Any]]]]]] = None,
                click_house_conf: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
                config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster.ConfigProperty, typing.Dict[str, typing.Any]]]]]] = None,
                configurations: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                deposit_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                eas_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                high_availability_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                init_custom_hive_meta_db: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                instance_generation: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                io_optimized: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                is_open_public_ip: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                key_pair_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                log_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                machine_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                master_pwd: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                meta_store_conf: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                meta_store_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                option_soft_ware_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                related_cluster_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                security_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ssh_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                tags: typing.Optional[typing.Sequence[typing.Union[RosCluster.TagsProperty, typing.Dict[str, typing.Any]]]] = None,
                use_custom_hive_meta_db: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                user_defined_emr_ecs_role: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                user_info: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster.UserInfoProperty, typing.Dict[str, typing.Any]]]]]] = None,
                vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                white_list_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def charge_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property chargeType: The billing method.

        Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
        subscription.
        '''
        result = self._values.get("charge_type")
        assert result is not None, "Required property 'charge_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property clusterType: The type of the cluster.

        Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
        '''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def emr_ver(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property emrVer: The version of EMR.'''
        result = self._values.get("emr_ver")
        assert result is not None, "Required property 'emr_ver' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def host_group(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.HostGroupProperty"]]]:
        '''Property hostGroup:.'''
        result = self._values.get("host_group")
        assert result is not None, "Required property 'host_group' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.HostGroupProperty"]]], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property name: The name of the cluster.

        The name can be 1 to 64 characters in length and only contain
        Chinese characters, letters, numbers, hyphens (-), and underscores (_).
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def net_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property netType: The type of the network.'''
        result = self._values.get("net_type")
        assert result is not None, "Required property 'net_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def use_local_meta_db(
        self,
    ) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        '''Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used.'''
        result = self._values.get("use_local_meta_db")
        assert result is not None, "Required property 'use_local_meta_db' is missing"
        return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property zoneId: The zone ID.'''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def authorize_content(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property authorizeContent: Not required.'''
        result = self._values.get("authorize_content")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoRenew: Indicates whether the subscription cluster is auto-renewed.'''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def bootstrap_action(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.BootstrapActionProperty"]]]]:
        '''Property bootstrapAction:.'''
        result = self._values.get("bootstrap_action")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.BootstrapActionProperty"]]]], result)

    @builtins.property
    def click_house_conf(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property clickHouseConf: undefined.'''
        result = self._values.get("click_house_conf")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.ConfigProperty"]]]]:
        '''Property config:.'''
        result = self._values.get("config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.ConfigProperty"]]]], result)

    @builtins.property
    def configurations(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property configurations: Not required.'''
        result = self._values.get("configurations")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deposit_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property depositType: The hosting type.'''
        result = self._values.get("deposit_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def eas_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property easEnable: Indicates whether the cluster is a high-security cluster.'''
        result = self._values.get("eas_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def high_availability_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster.

        A value of true indicates
        that two master nodes are required.
        '''
        result = self._values.get("high_availability_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def init_custom_hive_meta_db(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property initCustomHiveMetaDb: A reserved parameter.

        Not required.
        '''
        result = self._values.get("init_custom_hive_meta_db")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_generation(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceGeneration: The generation of the ECS instances.'''
        result = self._values.get("instance_generation")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property ioOptimized: Indicates wether I/O optimization is enabled.

        Default value: true.
        '''
        result = self._values.get("io_optimized")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def is_open_public_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property isOpenPublicIp: Indicates whether a public IP address is assigned.

        A value of true indicates that
        a bandwidth of 8 MB is set by default.
        '''
        result = self._values.get("is_open_public_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property keyPairName: The name of the key pair.'''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def log_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property logPath: The log path in OSS.'''
        result = self._values.get("log_path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def machine_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property machineType: The type of the machine.'''
        result = self._values.get("machine_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_pwd(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property masterPwd: The SSH password for the master node.

        The password must meet the following requirements.
        Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
        It must contain three types of characters (uppercase letters, lowercase letters, numbers,
        and special symbols).
        '''
        result = self._values.get("master_pwd")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def meta_store_conf(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property metaStoreConf: Meta store conf of specific meta store type.

        If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
        '''
        result = self._values.get("meta_store_conf")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def meta_store_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property metaStoreType: Meta store type.

        Allow types:
        local: Local cluster
        unified: Unified meta data
        user_rds: User's RDS
        '''
        result = self._values.get("meta_store_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def option_soft_ware_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property optionSoftWareList: The list of optional services.'''
        result = self._values.get("option_soft_ware_list")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: The length of the subscription.

        Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
        9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def related_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).'''
        result = self._values.get("related_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property securityGroupId: The ID of the security group.

        You can create a security group in the ECS console and
        use it. Note: If you use an existing security group, the default security group policy
        is applied to this security group: Only port 22 is open at the inbound and all ports
        are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property securityGroupName: The name of the security group to create.

        If the ID of the security group is not specified,
        this name is used to create a new security group. After the cluster is created, you
        can view the ID of the security group on the Cluster Management page. The default
        security group policy is applied to this security group: Only port 22 is open at the
        inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
        or SecurityGroupName.
        '''
        result = self._values.get("security_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ssh_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property sshEnable: Indicates whether SSH is enabled.'''
        result = self._values.get("ssh_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property useCustomHiveMetaDb: A reserved parameter.

        Not required.
        '''
        result = self._values.get("use_custom_hive_meta_db")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def user_defined_emr_ecs_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.'''
        result = self._values.get("user_defined_emr_ecs_role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def user_info(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.UserInfoProperty"]]]]:
        '''Property userInfo:.'''
        result = self._values.get("user_info")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.UserInfoProperty"]]]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vpcId: The ID of the VPC.

        A value is required when NetType=vpc.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vSwitchId: The ID of the Vswitch.

        A value is required when NetType=vpc.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def white_list_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property whiteListType: Not required.'''
        result = self._values.get("white_list_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ClusterServiceConfigs(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-emr.ClusterServiceConfigs",
):
    '''A ROS resource type:  ``ALIYUN::EMR::ClusterServiceConfigs``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["ClusterServiceConfigsProps", typing.Dict[str, typing.Any]],
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
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[ClusterServiceConfigsProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterId: The ID of the cluster.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-emr.ClusterServiceConfigsProps",
    jsii_struct_bases=[],
    name_mapping={"cluster_id": "clusterId", "service_configs": "serviceConfigs"},
)
class ClusterServiceConfigsProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        service_configs: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosClusterServiceConfigs.ServiceConfigsProperty", typing.Dict[str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::EMR::ClusterServiceConfigs``.

        :param cluster_id: Property clusterId: The ID of the cluster.
        :param service_configs: Property serviceConfigs: Server configs.
        '''
        if __debug__:
            def stub(
                *,
                cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                service_configs: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosClusterServiceConfigs.ServiceConfigsProperty, typing.Dict[str, typing.Any]]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument service_configs", value=service_configs, expected_type=type_hints["service_configs"])
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_id": cluster_id,
            "service_configs": service_configs,
        }

    @builtins.property
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property clusterId: The ID of the cluster.'''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def service_configs(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosClusterServiceConfigs.ServiceConfigsProperty"]]]:
        '''Property serviceConfigs: Server configs.'''
        result = self._values.get("service_configs")
        assert result is not None, "Required property 'service_configs' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosClusterServiceConfigs.ServiceConfigsProperty"]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterServiceConfigsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCluster(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-emr.RosCluster",
):
    '''A ROS template type:  ``ALIYUN::EMR::Cluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EMR::Cluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosClusterProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterId: The ID of the cluster.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrHostGroups")
    def attr_host_groups(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HostGroups: The host group list of the cluster.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostGroups"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterNodeInnerIps")
    def attr_master_node_inner_ips(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MasterNodeInnerIps: The inner ip list of the cluster master nodes.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMasterNodeInnerIps"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterNodePubIps")
    def attr_master_node_pub_ips(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MasterNodePubIps: The public ip list of the cluster master nodes.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMasterNodePubIps"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        chargeType: The billing method. Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
        subscription.
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
    @jsii.member(jsii_name="clusterType")
    def cluster_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterType: The type of the cluster. Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "clusterType"))

    @cluster_type.setter
    def cluster_type(
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
        jsii.set(self, "clusterType", value)

    @builtins.property
    @jsii.member(jsii_name="emrVer")
    def emr_ver(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: emrVer: The version of EMR.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "emrVer"))

    @emr_ver.setter
    def emr_ver(
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
        jsii.set(self, "emrVer", value)

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
    @jsii.member(jsii_name="hostGroup")
    def host_group(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.HostGroupProperty"]]]:
        '''
        :Property: hostGroup:
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.HostGroupProperty"]]], jsii.get(self, "hostGroup"))

    @host_group.setter
    def host_group(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.HostGroupProperty"]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.HostGroupProperty]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostGroup", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        name: The name of the cluster. The name can be 1 to 64 characters in length and only contain
        Chinese characters, letters, numbers, hyphens (-), and underscores (_).
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="netType")
    def net_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: netType: The type of the network.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "netType"))

    @net_type.setter
    def net_type(
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
        jsii.set(self, "netType", value)

    @builtins.property
    @jsii.member(jsii_name="useLocalMetaDb")
    def use_local_meta_db(
        self,
    ) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        '''
        :Property: useLocalMetaDb: Indicates whether the local Hive metadatabase is used.
        '''
        return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], jsii.get(self, "useLocalMetaDb"))

    @use_local_meta_db.setter
    def use_local_meta_db(
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
        jsii.set(self, "useLocalMetaDb", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: zoneId: The zone ID.
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
    @jsii.member(jsii_name="authorizeContent")
    def authorize_content(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: authorizeContent: Not required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "authorizeContent"))

    @authorize_content.setter
    def authorize_content(
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
        jsii.set(self, "authorizeContent", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoRenew: Indicates whether the subscription cluster is auto-renewed.
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
    @jsii.member(jsii_name="bootstrapAction")
    def bootstrap_action(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.BootstrapActionProperty"]]]]:
        '''
        :Property: bootstrapAction:
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.BootstrapActionProperty"]]]], jsii.get(self, "bootstrapAction"))

    @bootstrap_action.setter
    def bootstrap_action(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.BootstrapActionProperty"]]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.BootstrapActionProperty]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bootstrapAction", value)

    @builtins.property
    @jsii.member(jsii_name="clickHouseConf")
    def click_house_conf(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: clickHouseConf: undefined
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "clickHouseConf"))

    @click_house_conf.setter
    def click_house_conf(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clickHouseConf", value)

    @builtins.property
    @jsii.member(jsii_name="config")
    def config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.ConfigProperty"]]]]:
        '''
        :Property: config:
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.ConfigProperty"]]]], jsii.get(self, "config"))

    @config.setter
    def config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.ConfigProperty"]]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.ConfigProperty]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "config", value)

    @builtins.property
    @jsii.member(jsii_name="configurations")
    def configurations(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: configurations: Not required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "configurations"))

    @configurations.setter
    def configurations(
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
        jsii.set(self, "configurations", value)

    @builtins.property
    @jsii.member(jsii_name="depositType")
    def deposit_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: depositType: The hosting type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "depositType"))

    @deposit_type.setter
    def deposit_type(
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
        jsii.set(self, "depositType", value)

    @builtins.property
    @jsii.member(jsii_name="easEnable")
    def eas_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: easEnable: Indicates whether the cluster is a high-security cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "easEnable"))

    @eas_enable.setter
    def eas_enable(
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
        jsii.set(self, "easEnable", value)

    @builtins.property
    @jsii.member(jsii_name="highAvailabilityEnable")
    def high_availability_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster. A value of true indicates
        that two master nodes are required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "highAvailabilityEnable"))

    @high_availability_enable.setter
    def high_availability_enable(
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
        jsii.set(self, "highAvailabilityEnable", value)

    @builtins.property
    @jsii.member(jsii_name="initCustomHiveMetaDb")
    def init_custom_hive_meta_db(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: initCustomHiveMetaDb: A reserved parameter. Not required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "initCustomHiveMetaDb"))

    @init_custom_hive_meta_db.setter
    def init_custom_hive_meta_db(
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
        jsii.set(self, "initCustomHiveMetaDb", value)

    @builtins.property
    @jsii.member(jsii_name="instanceGeneration")
    def instance_generation(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceGeneration: The generation of the ECS instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceGeneration"))

    @instance_generation.setter
    def instance_generation(
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
        jsii.set(self, "instanceGeneration", value)

    @builtins.property
    @jsii.member(jsii_name="ioOptimized")
    def io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: ioOptimized: Indicates wether I/O optimization is enabled. Default value: true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "ioOptimized"))

    @io_optimized.setter
    def io_optimized(
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
        jsii.set(self, "ioOptimized", value)

    @builtins.property
    @jsii.member(jsii_name="isOpenPublicIp")
    def is_open_public_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        isOpenPublicIp: Indicates whether a public IP address is assigned. A value of true indicates that
        a bandwidth of 8 MB is set by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "isOpenPublicIp"))

    @is_open_public_ip.setter
    def is_open_public_ip(
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
        jsii.set(self, "isOpenPublicIp", value)

    @builtins.property
    @jsii.member(jsii_name="keyPairName")
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: keyPairName: The name of the key pair.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "keyPairName"))

    @key_pair_name.setter
    def key_pair_name(
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
        jsii.set(self, "keyPairName", value)

    @builtins.property
    @jsii.member(jsii_name="logPath")
    def log_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: logPath: The log path in OSS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "logPath"))

    @log_path.setter
    def log_path(
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
        jsii.set(self, "logPath", value)

    @builtins.property
    @jsii.member(jsii_name="machineType")
    def machine_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: machineType: The type of the machine.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "machineType"))

    @machine_type.setter
    def machine_type(
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
        jsii.set(self, "machineType", value)

    @builtins.property
    @jsii.member(jsii_name="masterPwd")
    def master_pwd(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        masterPwd: The SSH password for the master node. The password must meet the following requirements.
        Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
        It must contain three types of characters (uppercase letters, lowercase letters, numbers,
        and special symbols).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "masterPwd"))

    @master_pwd.setter
    def master_pwd(
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
        jsii.set(self, "masterPwd", value)

    @builtins.property
    @jsii.member(jsii_name="metaStoreConf")
    def meta_store_conf(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: metaStoreConf: Meta store conf of specific meta store type. If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "metaStoreConf"))

    @meta_store_conf.setter
    def meta_store_conf(
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
        jsii.set(self, "metaStoreConf", value)

    @builtins.property
    @jsii.member(jsii_name="metaStoreType")
    def meta_store_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        metaStoreType: Meta store type. Allow types:
        local: Local cluster
        unified: Unified meta data
        user_rds: User's RDS
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "metaStoreType"))

    @meta_store_type.setter
    def meta_store_type(
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
        jsii.set(self, "metaStoreType", value)

    @builtins.property
    @jsii.member(jsii_name="optionSoftWareList")
    def option_soft_ware_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: optionSoftWareList: The list of optional services.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "optionSoftWareList"))

    @option_soft_ware_list.setter
    def option_soft_ware_list(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "optionSoftWareList", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
        9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
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
    @jsii.member(jsii_name="relatedClusterId")
    def related_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "relatedClusterId"))

    @related_cluster_id.setter
    def related_cluster_id(
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
        jsii.set(self, "relatedClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
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
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        securityGroupId: The ID of the security group. You can create a security group in the ECS console and
        use it. Note: If you use an existing security group, the default security group policy
        is applied to this security group: Only port 22 is open at the inbound and all ports
        are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
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
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupName")
    def security_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        securityGroupName: The name of the security group to create. If the ID of the security group is not specified,
        this name is used to create a new security group. After the cluster is created, you
        can view the ID of the security group on the Cluster Management page. The default
        security group policy is applied to this security group: Only port 22 is open at the
        inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
        or SecurityGroupName.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "securityGroupName"))

    @security_group_name.setter
    def security_group_name(
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
        jsii.set(self, "securityGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="sshEnable")
    def ssh_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: sshEnable: Indicates whether SSH is enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "sshEnable"))

    @ssh_enable.setter
    def ssh_enable(
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
            def stub(
                value: typing.Optional[typing.List[RosCluster.TagsProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="useCustomHiveMetaDb")
    def use_custom_hive_meta_db(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: useCustomHiveMetaDb: A reserved parameter. Not required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "useCustomHiveMetaDb"))

    @use_custom_hive_meta_db.setter
    def use_custom_hive_meta_db(
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
        jsii.set(self, "useCustomHiveMetaDb", value)

    @builtins.property
    @jsii.member(jsii_name="userDefinedEmrEcsRole")
    def user_defined_emr_ecs_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "userDefinedEmrEcsRole"))

    @user_defined_emr_ecs_role.setter
    def user_defined_emr_ecs_role(
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
        jsii.set(self, "userDefinedEmrEcsRole", value)

    @builtins.property
    @jsii.member(jsii_name="userInfo")
    def user_info(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.UserInfoProperty"]]]]:
        '''
        :Property: userInfo:
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.UserInfoProperty"]]]], jsii.get(self, "userInfo"))

    @user_info.setter
    def user_info(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster.UserInfoProperty"]]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.UserInfoProperty]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userInfo", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: The ID of the VPC. A value is required when NetType=vpc.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
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
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the Vswitch. A value is required when NetType=vpc.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
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
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="whiteListType")
    def white_list_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: whiteListType: Not required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "whiteListType"))

    @white_list_type.setter
    def white_list_type(
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
            arg: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param arg: 
            :param name: 
            :param path: 
            '''
            if __debug__:
                def stub(
                    *,
                    arg: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument arg", value=arg, expected_type=type_hints["arg"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument path", value=path, expected_type=type_hints["path"])
            self._values: typing.Dict[str, typing.Any] = {}
            if arg is not None:
                self._values["arg"] = arg
            if name is not None:
                self._values["name"] = name
            if path is not None:
                self._values["path"] = path

        @builtins.property
        def arg(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: arg: The argument that you pass into the bootstrap action.
            '''
            result = self._values.get("arg")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: name: The name of the bootstrap action.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: path: The path where the bootstrap action script is stored.
            '''
            result = self._values.get("path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            config_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            config_value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            encrypt: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            file_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            replace: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            service_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
                def stub(
                    *,
                    config_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    config_value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    encrypt: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    file_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    replace: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    service_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument config_key", value=config_key, expected_type=type_hints["config_key"])
                check_type(argname="argument config_value", value=config_value, expected_type=type_hints["config_value"])
                check_type(argname="argument encrypt", value=encrypt, expected_type=type_hints["encrypt"])
                check_type(argname="argument file_name", value=file_name, expected_type=type_hints["file_name"])
                check_type(argname="argument replace", value=replace, expected_type=type_hints["replace"])
                check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            self._values: typing.Dict[str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: configKey: The key of the custom configuration item.
            '''
            result = self._values.get("config_key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def config_value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: configValue: The value of the custom configuration item.
            '''
            result = self._values.get("config_value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def encrypt(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: encrypt: A reserved parameter.
            '''
            result = self._values.get("encrypt")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def file_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: fileName: The name of the file that contains the configuration item.
            '''
            result = self._values.get("file_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def replace(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: replace: A reserved parameter.
            '''
            result = self._values.get("replace")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def service_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            serviceName: The name (capitalized) of the service that is configured by using the custom configuration
            item.
            '''
            result = self._values.get("service_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            charge_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            disk_capacity: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            disk_count: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            disk_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            host_group_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            node_count: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            sys_disk_capacity: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            sys_disk_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            cluster_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            comment: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            create_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            gpu_driver: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            host_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            host_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            host_key_pair_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            host_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
                def stub(
                    *,
                    charge_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    disk_capacity: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                    disk_count: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                    disk_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    host_group_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    node_count: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                    sys_disk_capacity: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                    sys_disk_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    cluster_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    comment: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    create_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    gpu_driver: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    host_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    host_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    host_key_pair_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    host_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
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
            self._values: typing.Dict[str, typing.Any] = {
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
        def charge_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: chargeType: The billing method for the instance group.
            '''
            result = self._values.get("charge_type")
            assert result is not None, "Required property 'charge_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def disk_capacity(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: diskCapacity: The data disk capacity of the instance group.
            '''
            result = self._values.get("disk_capacity")
            assert result is not None, "Required property 'disk_capacity' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def disk_count(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: diskCount: The data disk number of the instance group.
            '''
            result = self._values.get("disk_count")
            assert result is not None, "Required property 'disk_count' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def disk_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: diskType: The data disk type of the instance group. Valid values: CLOUD, CLOUD_EFFICIENCY, CLOUD_SSD, CLOUD_ESSD etc.
            '''
            result = self._values.get("disk_type")
            assert result is not None, "Required property 'disk_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def host_group_type(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            hostGroupType: The type of the instance group. Valid values: MASTER, CORE, and TASK. Currently, you
            can only create a maximum of one master instance group and core instance group.
            '''
            result = self._values.get("host_group_type")
            assert result is not None, "Required property 'host_group_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def instance_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: instanceType: The instance type of the instance group.
            '''
            result = self._values.get("instance_type")
            assert result is not None, "Required property 'instance_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def node_count(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: nodeCount: The number of nodes in the node group.
            '''
            result = self._values.get("node_count")
            assert result is not None, "Required property 'node_count' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def sys_disk_capacity(
            self,
        ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: sysDiskCapacity: The system disk capacity of the instance group.
            '''
            result = self._values.get("sys_disk_capacity")
            assert result is not None, "Required property 'sys_disk_capacity' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def sys_disk_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: sysDiskType: The system disk type of the instance group.
            '''
            result = self._values.get("sys_disk_type")
            assert result is not None, "Required property 'sys_disk_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def auto_renew(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: autoRenew: Indicates whether the instance group is auto-renewed.
            '''
            result = self._values.get("auto_renew")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def cluster_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: clusterId: A reserved parameter. Not required.
            '''
            result = self._values.get("cluster_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def comment(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: comment: A reserved parameter. Not required.
            '''
            result = self._values.get("comment")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def create_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: createType: A reserved parameter. Not required.
            '''
            result = self._values.get("create_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def gpu_driver(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: gpuDriver: The GPU driver.
            '''
            result = self._values.get("gpu_driver")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def host_group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: hostGroupId: A reserved parameter.
            '''
            result = self._values.get("host_group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def host_group_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: hostGroupName: The name of the instance group.
            '''
            result = self._values.get("host_group_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def host_key_pair_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: hostKeyPairName: The key pair name of the host group. Currently, only gateways are supported.
            '''
            result = self._values.get("host_key_pair_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def host_password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: hostPassword: The password of the host. Currently, only gateways are supported.
            '''
            result = self._values.get("host_password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def period(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
            9, 12, 24, and 36. A value is required when HostGroup.n.ChargeType=PrePaid.
            '''
            result = self._values.get("period")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def v_switch_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: vSwitchId: The ID of the VSwitch. A value is required when NetType=vpc.
            '''
            result = self._values.get("v_switch_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                def stub(
                    *,
                    key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            user_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            user_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param password: 
            :param user_id: 
            :param user_name: 
            '''
            if __debug__:
                def stub(
                    *,
                    password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    user_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    user_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
                check_type(argname="argument user_id", value=user_id, expected_type=type_hints["user_id"])
                check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
            self._values: typing.Dict[str, typing.Any] = {}
            if password is not None:
                self._values["password"] = password
            if user_id is not None:
                self._values["user_id"] = user_id
            if user_name is not None:
                self._values["user_name"] = user_name

        @builtins.property
        def password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: password: The password of the cluster.
            '''
            result = self._values.get("password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def user_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: userId: The ID of the Alibaba Cloud account for Knox.
            '''
            result = self._values.get("user_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def user_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: userName: The username for Knox.
            '''
            result = self._values.get("user_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "UserInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosCluster2(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-emr.RosCluster2",
):
    '''A ROS template type:  ``ALIYUN::EMR::Cluster2``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosCluster2Props", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EMR::Cluster2``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosCluster2Props, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterId: Cluster ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="applications")
    def applications(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.ApplicationsProperty"]]]:
        '''
        :Property: applications: Application List.The value range of the number n of the number N group: 1 ~ 100.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.ApplicationsProperty"]]], jsii.get(self, "applications"))

    @applications.setter
    def applications(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.ApplicationsProperty"]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster2.ApplicationsProperty]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "applications", value)

    @builtins.property
    @jsii.member(jsii_name="clusterName")
    def cluster_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterName: Cluster name.The length is 1 ~ 128 characters, and the alphabet or Chinese must be started. It cannot start with http:// and https: //.It can include Chinese, English, numbers, half-horn colons (:), down line (_), half-angle period (.) Or short lines (-)
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "clusterName"))

    @cluster_name.setter
    def cluster_name(
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
        jsii.set(self, "clusterName", value)

    @builtins.property
    @jsii.member(jsii_name="clusterType")
    def cluster_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        clusterType: Cluster type.Ranges:
        Datalake: The new version of the data lake.
        OLAP: Data analysis.
        DataFlow: Real -time data stream.
        DataServing: Data service.
        Hadoop: The old version of the data lake (not recommended, it is recommended to use the new version of the data lake).
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "clusterType"))

    @cluster_type.setter
    def cluster_type(
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
        jsii.set(self, "clusterType", value)

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
    @jsii.member(jsii_name="nodeAttributes")
    def node_attributes(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosCluster2.NodeAttributesProperty"]:
        '''
        :Property: nodeAttributes: Node attributes.All ECS nodes basic attributes of the cluster.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosCluster2.NodeAttributesProperty"], jsii.get(self, "nodeAttributes"))

    @node_attributes.setter
    def node_attributes(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, "RosCluster2.NodeAttributesProperty"],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, RosCluster2.NodeAttributesProperty],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodeAttributes", value)

    @builtins.property
    @jsii.member(jsii_name="nodeGroups")
    def node_groups(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.NodeGroupsProperty"]]]:
        '''
        :Property: nodeGroups: The node group configuration array.The value range of the number n of the number N group: 1 ~ 100.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.NodeGroupsProperty"]]], jsii.get(self, "nodeGroups"))

    @node_groups.setter
    def node_groups(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.NodeGroupsProperty"]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster2.NodeGroupsProperty]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodeGroups", value)

    @builtins.property
    @jsii.member(jsii_name="releaseVersion")
    def release_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: releaseVersion: EMR release version.View EMR distribution versions can be viewed through the EMR cluster.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "releaseVersion"))

    @release_version.setter
    def release_version(
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
        jsii.set(self, "releaseVersion", value)

    @builtins.property
    @jsii.member(jsii_name="applicationConfigs")
    def application_configs(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.ApplicationConfigsProperty"]]]]:
        '''
        :Property: applicationConfigs: Application configuration.The value range of the number n of the array element n: 1 ~ 1000.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.ApplicationConfigsProperty"]]]], jsii.get(self, "applicationConfigs"))

    @application_configs.setter
    def application_configs(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.ApplicationConfigsProperty"]]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster2.ApplicationConfigsProperty]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "applicationConfigs", value)

    @builtins.property
    @jsii.member(jsii_name="bootstrapScripts")
    def bootstrap_scripts(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.BootstrapScriptsProperty"]]]]:
        '''
        :Property: bootstrapScripts: Guide the script group.The value range of the number n of the number N group: 1 ~ 10.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.BootstrapScriptsProperty"]]]], jsii.get(self, "bootstrapScripts"))

    @bootstrap_scripts.setter
    def bootstrap_scripts(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.BootstrapScriptsProperty"]]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster2.BootstrapScriptsProperty]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bootstrapScripts", value)

    @builtins.property
    @jsii.member(jsii_name="deployMode")
    def deploy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        deployMode: Application deployment mode in the cluster.Ranges:
        Normal: non -high available deployment.Cluster 1 master node.
        HA: High availability deployment.High availability deployment requires at least 3 master nodes.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "deployMode"))

    @deploy_mode.setter
    def deploy_mode(
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
        jsii.set(self, "deployMode", value)

    @builtins.property
    @jsii.member(jsii_name="paymentType")
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        paymentType: Payment type. Ranges:
        PayAsYouGo: Post-paid, pay-as-you-go.
        Subscription: Prepaid, yearly and monthly.
        Default: PayAsYouGo.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "paymentType"))

    @payment_type.setter
    def payment_type(
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
        jsii.set(self, "paymentType", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
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
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="securityMode")
    def security_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        securityMode: Cluster Kerberos security mode.Ranges:
        Normal: General mode, does not open the Kerberos mode.
        Kerberos: Open the Kerberos mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "securityMode"))

    @security_mode.setter
    def security_mode(
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
        jsii.set(self, "securityMode", value)

    @builtins.property
    @jsii.member(jsii_name="subscriptionConfig")
    def subscription_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.SubscriptionConfigProperty"]]:
        '''
        :Property: subscriptionConfig: Pre -paid allocation.When the value of PaymentType is Subscripting, it must be filled.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.SubscriptionConfigProperty"]], jsii.get(self, "subscriptionConfig"))

    @subscription_config.setter
    def subscription_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.SubscriptionConfigProperty"]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosCluster2.SubscriptionConfigProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(
                value: typing.Optional[typing.List[RosCluster2.TagsProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            application_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            config_file_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            config_item_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            config_item_value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            config_scope: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            node_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            node_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
                def stub(
                    *,
                    application_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    config_file_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    config_item_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    config_item_value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    config_scope: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    node_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    node_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument application_name", value=application_name, expected_type=type_hints["application_name"])
                check_type(argname="argument config_file_name", value=config_file_name, expected_type=type_hints["config_file_name"])
                check_type(argname="argument config_item_key", value=config_item_key, expected_type=type_hints["config_item_key"])
                check_type(argname="argument config_item_value", value=config_item_value, expected_type=type_hints["config_item_value"])
                check_type(argname="argument config_scope", value=config_scope, expected_type=type_hints["config_scope"])
                check_type(argname="argument node_group_id", value=node_group_id, expected_type=type_hints["node_group_id"])
                check_type(argname="argument node_group_name", value=node_group_name, expected_type=type_hints["node_group_name"])
            self._values: typing.Dict[str, typing.Any] = {
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
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: applicationName: Application name
            '''
            result = self._values.get("application_name")
            assert result is not None, "Required property 'application_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def config_file_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: configFileName: Configuration file name.
            '''
            result = self._values.get("config_file_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def config_item_key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: configItemKey: Configuration key.
            '''
            result = self._values.get("config_item_key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def config_item_value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: configItemValue: Configuration value.
            '''
            result = self._values.get("config_item_value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def config_scope(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            configScope: Configuration scope. Ranges:
            CLUSTER: Cluster level.
            NODE_GROUP: Node group level.
            Default: CLUSTER.
            '''
            result = self._values.get("config_scope")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def node_group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            nodeGroupId: Node group ID. This parameter takes effect when ConfigScope takes the value NODE_GROUP.
            The NodeGroupId parameter takes precedence over the NodeGroupName.
            '''
            result = self._values.get("node_group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def node_group_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            nodeGroupName: Node group name.
            This parameter takes effect when the ConfigScope
            value is NODE_GROUP and the parameter NodeGroupId is empty.
            '''
            result = self._values.get("node_group_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            application_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param application_name: 
            '''
            if __debug__:
                def stub(
                    *,
                    application_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument application_name", value=application_name, expected_type=type_hints["application_name"])
            self._values: typing.Dict[str, typing.Any] = {
                "application_name": application_name,
            }

        @builtins.property
        def application_name(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: applicationName: Application name
            '''
            result = self._values.get("application_name")
            assert result is not None, "Required property 'application_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
            node_selector: typing.Union[ros_cdk_core.IResolvable, typing.Union["RosCluster2.NodeSelectorProperty", typing.Dict[str, typing.Any]]],
            script_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            script_path: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            execution_fail_strategy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            execution_moment: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            priority: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            script_args: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
                def stub(
                    *,
                    node_selector: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.NodeSelectorProperty, typing.Dict[str, typing.Any]]],
                    script_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    script_path: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    execution_fail_strategy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    execution_moment: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    priority: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    script_args: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument node_selector", value=node_selector, expected_type=type_hints["node_selector"])
                check_type(argname="argument script_name", value=script_name, expected_type=type_hints["script_name"])
                check_type(argname="argument script_path", value=script_path, expected_type=type_hints["script_path"])
                check_type(argname="argument execution_fail_strategy", value=execution_fail_strategy, expected_type=type_hints["execution_fail_strategy"])
                check_type(argname="argument execution_moment", value=execution_moment, expected_type=type_hints["execution_moment"])
                check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
                check_type(argname="argument script_args", value=script_args, expected_type=type_hints["script_args"])
            self._values: typing.Dict[str, typing.Any] = {
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
        ) -> typing.Union[ros_cdk_core.IResolvable, "RosCluster2.NodeSelectorProperty"]:
            '''
            :Property: nodeSelector: Node selector.
            '''
            result = self._values.get("node_selector")
            assert result is not None, "Required property 'node_selector' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosCluster2.NodeSelectorProperty"], result)

        @builtins.property
        def script_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
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
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def script_path(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: scriptPath: The OSS path where the script is located. Required. Start with oss://.
            '''
            result = self._values.get("script_path")
            assert result is not None, "Required property 'script_path' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def execution_fail_strategy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: executionFailStrategy: Execute failure strategy. Allowed values:FAILED_CONTINUE: Does not block cluster creation or cluster expansion after failure.FAILED_BLOCK: Blocks cluster creation or cluster expansion after failure.
            '''
            result = self._values.get("execution_fail_strategy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def execution_moment(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            executionMoment: When the script is executed. Allowed values:
            BEFORE_INSTALL: Before the app is installed.
            AFTER_STARTED: After the app starts.
            '''
            result = self._values.get("execution_moment")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def priority(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: priority: Script execution priority. Value range: 1~100.
            '''
            result = self._values.get("priority")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def script_args(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: scriptArgs: Script execution parameters. Optional parameter.
            '''
            result = self._values.get("script_args")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            on_demand_base_capacity: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            on_demand_percentage_above_base_capacity: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            spot_instance_pools: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param on_demand_base_capacity: 
            :param on_demand_percentage_above_base_capacity: 
            :param spot_instance_pools: 
            '''
            if __debug__:
                def stub(
                    *,
                    on_demand_base_capacity: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                    on_demand_percentage_above_base_capacity: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                    spot_instance_pools: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument on_demand_base_capacity", value=on_demand_base_capacity, expected_type=type_hints["on_demand_base_capacity"])
                check_type(argname="argument on_demand_percentage_above_base_capacity", value=on_demand_percentage_above_base_capacity, expected_type=type_hints["on_demand_percentage_above_base_capacity"])
                check_type(argname="argument spot_instance_pools", value=spot_instance_pools, expected_type=type_hints["spot_instance_pools"])
            self._values: typing.Dict[str, typing.Any] = {
                "on_demand_base_capacity": on_demand_base_capacity,
                "on_demand_percentage_above_base_capacity": on_demand_percentage_above_base_capacity,
                "spot_instance_pools": spot_instance_pools,
            }

        @builtins.property
        def on_demand_base_capacity(
            self,
        ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property:

            onDemandBaseCapacity: The minimum number of instances by quantity.
            The minimum number of instance counts required by the node group,
            the value range: 0~1000. When the number of metered instances is
            less than this value, the metered instance will be created first.
            '''
            result = self._values.get("on_demand_base_capacity")
            assert result is not None, "Required property 'on_demand_base_capacity' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def on_demand_percentage_above_base_capacity(
            self,
        ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property:

            onDemandPercentageAboveBaseCapacity: After the node group satisfies the OnDemandBaseCapacity requirement
            of the minimum on-demand instance, the proportion of the
            on-demand instances in the excess instances, ranging from 0 to 100.
            '''
            result = self._values.get("on_demand_percentage_above_base_capacity")
            assert result is not None, "Required property 'on_demand_percentage_above_base_capacity' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def spot_instance_pools(
            self,
        ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property:

            spotInstancePools: Specify the number of available instance types,
            and the scaling group will create preemptible instances
            in a balanced manner according to the multiple types with
            the lowest cost. Value range: 0~10.
            '''
            result = self._values.get("spot_instance_pools")
            assert result is not None, "Required property 'spot_instance_pools' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

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
            category: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            size: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            performance_level: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param category: 
            :param size: 
            :param count: 
            :param performance_level: 
            '''
            if __debug__:
                def stub(
                    *,
                    category: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    size: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                    count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    performance_level: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument category", value=category, expected_type=type_hints["category"])
                check_type(argname="argument size", value=size, expected_type=type_hints["size"])
                check_type(argname="argument count", value=count, expected_type=type_hints["count"])
                check_type(argname="argument performance_level", value=performance_level, expected_type=type_hints["performance_level"])
            self._values: typing.Dict[str, typing.Any] = {
                "category": category,
                "size": size,
            }
            if count is not None:
                self._values["count"] = count
            if performance_level is not None:
                self._values["performance_level"] = performance_level

        @builtins.property
        def category(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: category: Category of system disk.
            '''
            result = self._values.get("category")
            assert result is not None, "Required property 'category' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def size(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: size: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
            '''
            result = self._values.get("size")
            assert result is not None, "Required property 'size' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def count(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: count: The number of system disks per node, the default value is 1.
            '''
            result = self._values.get("count")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def performance_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            security_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            key_pair_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ram_role: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param security_group_id: 
            :param vpc_id: 
            :param zone_id: 
            :param key_pair_name: 
            :param ram_role: 
            '''
            if __debug__:
                def stub(
                    *,
                    security_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    key_pair_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    ram_role: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
                check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
                check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
                check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
                check_type(argname="argument ram_role", value=ram_role, expected_type=type_hints["ram_role"])
            self._values: typing.Dict[str, typing.Any] = {
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
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: securityGroupId: Security group ID. EMR only supports common security groups, not enterprise security groups.
            '''
            result = self._values.get("security_group_id")
            assert result is not None, "Required property 'security_group_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: vpcId: Vpc id
            '''
            result = self._values.get("vpc_id")
            assert result is not None, "Required property 'vpc_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: zoneId: Zone id
            '''
            result = self._values.get("zone_id")
            assert result is not None, "Required property 'zone_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def key_pair_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: keyPairName: ECS ssh login key.
            '''
            result = self._values.get("key_pair_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ram_role(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: ramRole: The role of the ECS access resource binding. Default value: AliyunECSInstanceForEMRRole.
            '''
            result = self._values.get("ram_role")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            instance_types: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
            node_group_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            additional_security_group_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
            cost_optimized_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosCluster2.CostOptimizedConfigProperty", typing.Dict[str, typing.Any]]]] = None,
            data_disks: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosCluster2.DataDisksProperty", typing.Dict[str, typing.Any]]]]]] = None,
            deployment_set_strategy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            graceful_shutdown: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            node_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            node_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            node_resize_strategy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            spot_bid_prices: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosCluster2.SpotBidPricesProperty", typing.Dict[str, typing.Any]]]]]] = None,
            spot_instance_remedy: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            spot_strategy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            system_disk: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosCluster2.SystemDiskProperty", typing.Dict[str, typing.Any]]]] = None,
            v_switch_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
            with_public_ip: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
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
                def stub(
                    *,
                    instance_types: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
                    node_group_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    additional_security_group_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                    cost_optimized_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.CostOptimizedConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                    data_disks: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.DataDisksProperty, typing.Dict[str, typing.Any]]]]]] = None,
                    deployment_set_strategy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    graceful_shutdown: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    node_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    node_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    node_resize_strategy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    spot_bid_prices: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.SpotBidPricesProperty, typing.Dict[str, typing.Any]]]]]] = None,
                    spot_instance_remedy: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    spot_strategy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    system_disk: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.SystemDiskProperty, typing.Dict[str, typing.Any]]]] = None,
                    v_switch_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                    with_public_ip: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
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
            self._values: typing.Dict[str, typing.Any] = {
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
        ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
            '''
            :Property: instanceTypes: A list of node instance types. The value range of the number of array elements N: 1~100.
            '''
            result = self._values.get("instance_types")
            assert result is not None, "Required property 'instance_types' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

        @builtins.property
        def node_group_type(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            nodeGroupType: Node group type. Ranges:
            MASTER: Master node group type.
            CORE: Core node group type.
            TASK: Compute order node group type.
            '''
            result = self._values.get("node_group_type")
            assert result is not None, "Required property 'node_group_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def additional_security_group_ids(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property:

            additionalSecurityGroupIds: Additional security groups. Additional security groups set
            individually for node groups in addition to the security
            groups set by the cluster.
            The value range of the number of array elements N: 0~2.
            '''
            result = self._values.get("additional_security_group_ids")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        @builtins.property
        def cost_optimized_config(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.CostOptimizedConfigProperty"]]:
            '''
            :Property: costOptimizedConfig: Cost-optimized mode configuration.
            '''
            result = self._values.get("cost_optimized_config")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.CostOptimizedConfigProperty"]], result)

        @builtins.property
        def data_disks(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.DataDisksProperty"]]]]:
            '''
            :Property: dataDisks: data disk. The current data disk supports only one disk type.
            '''
            result = self._values.get("data_disks")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.DataDisksProperty"]]]], result)

        @builtins.property
        def deployment_set_strategy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            deploymentSetStrategy: Deployment set policy. Ranges:
            NONE: Does not apply to deployment sets.
            CLUSTER: Use cluster-level deployment sets.
            NODE_GROUP: Use node group level deployment sets.
            Default: NONE.
            '''
            result = self._values.get("deployment_set_strategy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def graceful_shutdown(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            gracefulShutdown: Whether the components deployed on the node group enable graceful offline. Ranges:
            true: Enable graceful logout.
            false: Graceful logout is not enabled.
            Default: false.
            '''
            result = self._values.get("graceful_shutdown")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def node_count(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: nodeCount: number of nodes. Value range: 1~1000.
            '''
            result = self._values.get("node_count")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def node_group_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            nodeGroupName: Node group name. The maximum length is 128 characters.
            Node group names are required to be unique within the cluster.
            '''
            result = self._values.get("node_group_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def node_resize_strategy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            nodeResizeStrategy: Node expansion strategy. Ranges:
            COST_OPTIMIZED: Cost optimization strategy.
            PRIORITY: Priority policy.
            Default: PRIORITY.
            '''
            result = self._values.get("node_resize_strategy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def spot_bid_prices(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.SpotBidPricesProperty"]]]]:
            '''
            :Property:

            spotBidPrices: Preemptible Spot Instance bid price.
            The parameter SpotStrategy takes effect when the value is SpotWithPriceLimit.
            The value range of the number of array elements N: 0~100.
            '''
            result = self._values.get("spot_bid_prices")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.SpotBidPricesProperty"]]]], result)

        @builtins.property
        def spot_instance_remedy(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
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
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def spot_strategy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid. Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
            '''
            result = self._values.get("spot_strategy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def system_disk(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.SystemDiskProperty"]]:
            '''
            :Property: systemDisk: Disk config.
            '''
            result = self._values.get("system_disk")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCluster2.SystemDiskProperty"]], result)

        @builtins.property
        def v_switch_ids(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property:

            vSwitchIds: List of virtual machine switch IDs.
            The value range of the number of array elements N: 1~20.
            '''
            result = self._values.get("v_switch_ids")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        @builtins.property
        def with_public_ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: withPublicIp: Whether to open the public IP. Default is false.
            '''
            result = self._values.get("with_public_ip")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

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
            node_select_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            node_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            node_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            node_group_types: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
            node_names: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        ) -> None:
            '''
            :param node_select_type: 
            :param node_group_id: 
            :param node_group_name: 
            :param node_group_types: 
            :param node_names: 
            '''
            if __debug__:
                def stub(
                    *,
                    node_select_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    node_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    node_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    node_group_types: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                    node_names: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument node_select_type", value=node_select_type, expected_type=type_hints["node_select_type"])
                check_type(argname="argument node_group_id", value=node_group_id, expected_type=type_hints["node_group_id"])
                check_type(argname="argument node_group_name", value=node_group_name, expected_type=type_hints["node_group_name"])
                check_type(argname="argument node_group_types", value=node_group_types, expected_type=type_hints["node_group_types"])
                check_type(argname="argument node_names", value=node_names, expected_type=type_hints["node_names"])
            self._values: typing.Dict[str, typing.Any] = {
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
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            nodeSelectType: Node selection type.  Allowed values:
            CLUSTER: Cluster.
            NODE_GROUP: Node group.
            NODE: Node.
            '''
            result = self._values.get("node_select_type")
            assert result is not None, "Required property 'node_select_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def node_group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: nodeGroupId: Node group ID. This parameter takes effect when NodeSelectType is NodeGroup.
            '''
            result = self._values.get("node_group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def node_group_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            nodeGroupName: Node group name. This parameter takes effect when
            NodeSelectType is NodeGroup and the parameter NodeGroupId is empty.
            '''
            result = self._values.get("node_group_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def node_group_types(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property:

            nodeGroupTypes: Node group type. It takes effect when NodeSelectType is NodeGroup
            and the parameter NodeGroupId is empty.
            The number of array elements, N, ranges from 0 to 10.
            '''
            result = self._values.get("node_group_types")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        @builtins.property
        def node_names(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property:

            nodeNames: List of node names. When the NodeSelectType value is Node,
            this parameter takes effect.
            '''
            result = self._values.get("node_names")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

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
            bid_price: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            instance_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param bid_price: 
            :param instance_type: 
            '''
            if __debug__:
                def stub(
                    *,
                    bid_price: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    instance_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument bid_price", value=bid_price, expected_type=type_hints["bid_price"])
                check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            self._values: typing.Dict[str, typing.Any] = {}
            if bid_price is not None:
                self._values["bid_price"] = bid_price
            if instance_type is not None:
                self._values["instance_type"] = instance_type

        @builtins.property
        def bid_price(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            bidPrice: The maximum hourly bid for the instance. A maximum of 3 decimal
            places are supported. This parameter takes effect when
            the parameter SpotStrategy=SpotWithPriceLimit.
            '''
            result = self._values.get("bid_price")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def instance_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: instanceType: ECS instance type.
            '''
            result = self._values.get("instance_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            auto_renew_duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            auto_renew_duration_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            payment_duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            payment_duration_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param auto_renew: 
            :param auto_renew_duration: 
            :param auto_renew_duration_unit: 
            :param payment_duration: 
            :param payment_duration_unit: 
            '''
            if __debug__:
                def stub(
                    *,
                    auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    auto_renew_duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    auto_renew_duration_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    payment_duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    payment_duration_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
                check_type(argname="argument auto_renew_duration", value=auto_renew_duration, expected_type=type_hints["auto_renew_duration"])
                check_type(argname="argument auto_renew_duration_unit", value=auto_renew_duration_unit, expected_type=type_hints["auto_renew_duration_unit"])
                check_type(argname="argument payment_duration", value=payment_duration, expected_type=type_hints["payment_duration"])
                check_type(argname="argument payment_duration_unit", value=payment_duration_unit, expected_type=type_hints["payment_duration_unit"])
            self._values: typing.Dict[str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            autoRenew: Automatic renewal. Ranges:
            true: Enable startup renewal.
            false: Automatic renewal is not enabled.
            Default: false.
            '''
            result = self._values.get("auto_renew")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def auto_renew_duration(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            autoRenewDuration: Auto-renewal duration. It takes effect when AutoRenew is true.
            When the AutoRenewDurationUnit value is Month, the values are:
            1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60.
            '''
            result = self._values.get("auto_renew_duration")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def auto_renew_duration_unit(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: autoRenewDurationUnit: Automatic renewal time unit, Month
            '''
            result = self._values.get("auto_renew_duration_unit")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def payment_duration(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            paymentDuration: Payment time. When the value of PaymentDurationUnit is Month,
            the values are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60.
            '''
            result = self._values.get("payment_duration")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def payment_duration_unit(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: paymentDurationUnit: Payment time unit, Month
            '''
            result = self._values.get("payment_duration_unit")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            category: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            size: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            performance_level: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param category: 
            :param size: 
            :param count: 
            :param performance_level: 
            '''
            if __debug__:
                def stub(
                    *,
                    category: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    size: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                    count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    performance_level: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument category", value=category, expected_type=type_hints["category"])
                check_type(argname="argument size", value=size, expected_type=type_hints["size"])
                check_type(argname="argument count", value=count, expected_type=type_hints["count"])
                check_type(argname="argument performance_level", value=performance_level, expected_type=type_hints["performance_level"])
            self._values: typing.Dict[str, typing.Any] = {
                "category": category,
                "size": size,
            }
            if count is not None:
                self._values["count"] = count
            if performance_level is not None:
                self._values["performance_level"] = performance_level

        @builtins.property
        def category(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: category: Category of system disk.
            '''
            result = self._values.get("category")
            assert result is not None, "Required property 'category' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def size(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: size: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
            '''
            result = self._values.get("size")
            assert result is not None, "Required property 'size' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def count(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: count: The number of system disks per node, the default value is 1.
            '''
            result = self._values.get("count")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def performance_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                def stub(
                    *,
                    key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        applications: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.ApplicationsProperty, typing.Dict[str, typing.Any]]]]],
        cluster_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        node_attributes: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.NodeAttributesProperty, typing.Dict[str, typing.Any]]],
        node_groups: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.NodeGroupsProperty, typing.Dict[str, typing.Any]]]]],
        release_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        application_configs: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.ApplicationConfigsProperty, typing.Dict[str, typing.Any]]]]]] = None,
        bootstrap_scripts: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.BootstrapScriptsProperty, typing.Dict[str, typing.Any]]]]]] = None,
        deploy_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        subscription_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.SubscriptionConfigProperty, typing.Dict[str, typing.Any]]]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosCluster2.TagsProperty, typing.Dict[str, typing.Any]]]] = None,
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
            def stub(
                *,
                applications: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.ApplicationsProperty, typing.Dict[str, typing.Any]]]]],
                cluster_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                cluster_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                node_attributes: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.NodeAttributesProperty, typing.Dict[str, typing.Any]]],
                node_groups: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.NodeGroupsProperty, typing.Dict[str, typing.Any]]]]],
                release_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                application_configs: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.ApplicationConfigsProperty, typing.Dict[str, typing.Any]]]]]] = None,
                bootstrap_scripts: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.BootstrapScriptsProperty, typing.Dict[str, typing.Any]]]]]] = None,
                deploy_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                payment_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                security_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                subscription_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster2.SubscriptionConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                tags: typing.Optional[typing.Sequence[typing.Union[RosCluster2.TagsProperty, typing.Dict[str, typing.Any]]]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        self._values: typing.Dict[str, typing.Any] = {
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
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster2.ApplicationsProperty]]]:
        '''
        :Property: applications: Application List.The value range of the number n of the number N group: 1 ~ 100.
        '''
        result = self._values.get("applications")
        assert result is not None, "Required property 'applications' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster2.ApplicationsProperty]]], result)

    @builtins.property
    def cluster_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterName: Cluster name.The length is 1 ~ 128 characters, and the alphabet or Chinese must be started. It cannot start with http:// and https: //.It can include Chinese, English, numbers, half-horn colons (:), down line (_), half-angle period (.) Or short lines (-)
        '''
        result = self._values.get("cluster_name")
        assert result is not None, "Required property 'cluster_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def node_attributes(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, RosCluster2.NodeAttributesProperty]:
        '''
        :Property: nodeAttributes: Node attributes.All ECS nodes basic attributes of the cluster.
        '''
        result = self._values.get("node_attributes")
        assert result is not None, "Required property 'node_attributes' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, RosCluster2.NodeAttributesProperty], result)

    @builtins.property
    def node_groups(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster2.NodeGroupsProperty]]]:
        '''
        :Property: nodeGroups: The node group configuration array.The value range of the number n of the number N group: 1 ~ 100.
        '''
        result = self._values.get("node_groups")
        assert result is not None, "Required property 'node_groups' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster2.NodeGroupsProperty]]], result)

    @builtins.property
    def release_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: releaseVersion: EMR release version.View EMR distribution versions can be viewed through the EMR cluster.
        '''
        result = self._values.get("release_version")
        assert result is not None, "Required property 'release_version' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def application_configs(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster2.ApplicationConfigsProperty]]]]:
        '''
        :Property: applicationConfigs: Application configuration.The value range of the number n of the array element n: 1 ~ 1000.
        '''
        result = self._values.get("application_configs")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster2.ApplicationConfigsProperty]]]], result)

    @builtins.property
    def bootstrap_scripts(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster2.BootstrapScriptsProperty]]]]:
        '''
        :Property: bootstrapScripts: Guide the script group.The value range of the number n of the number N group: 1 ~ 10.
        '''
        result = self._values.get("bootstrap_scripts")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster2.BootstrapScriptsProperty]]]], result)

    @builtins.property
    def deploy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        deployMode: Application deployment mode in the cluster.Ranges:
        Normal: non -high available deployment.Cluster 1 master node.
        HA: High availability deployment.High availability deployment requires at least 3 master nodes.
        '''
        result = self._values.get("deploy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        paymentType: Payment type. Ranges:
        PayAsYouGo: Post-paid, pay-as-you-go.
        Subscription: Prepaid, yearly and monthly.
        Default: PayAsYouGo.
        '''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group ID.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        securityMode: Cluster Kerberos security mode.Ranges:
        Normal: General mode, does not open the Kerberos mode.
        Kerberos: Open the Kerberos mode.
        '''
        result = self._values.get("security_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def subscription_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosCluster2.SubscriptionConfigProperty]]:
        '''
        :Property: subscriptionConfig: Pre -paid allocation.When the value of PaymentType is Subscripting, it must be filled.
        '''
        result = self._values.get("subscription_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosCluster2.SubscriptionConfigProperty]], result)

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
        charge_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        emr_ver: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        host_group: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster.HostGroupProperty, typing.Dict[str, typing.Any]]]]],
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        net_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        use_local_meta_db: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        authorize_content: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        bootstrap_action: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster.BootstrapActionProperty, typing.Dict[str, typing.Any]]]]]] = None,
        click_house_conf: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster.ConfigProperty, typing.Dict[str, typing.Any]]]]]] = None,
        configurations: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        deposit_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        eas_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        high_availability_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        init_custom_hive_meta_db: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        instance_generation: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        io_optimized: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        is_open_public_ip: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        log_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        machine_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_pwd: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        meta_store_conf: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        meta_store_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        option_soft_ware_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        related_cluster_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ssh_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosCluster.TagsProperty, typing.Dict[str, typing.Any]]]] = None,
        use_custom_hive_meta_db: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        user_defined_emr_ecs_role: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        user_info: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster.UserInfoProperty, typing.Dict[str, typing.Any]]]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        white_list_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
            def stub(
                *,
                charge_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                cluster_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                emr_ver: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                host_group: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster.HostGroupProperty, typing.Dict[str, typing.Any]]]]],
                name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                net_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                use_local_meta_db: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
                zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                authorize_content: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                bootstrap_action: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster.BootstrapActionProperty, typing.Dict[str, typing.Any]]]]]] = None,
                click_house_conf: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
                config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster.ConfigProperty, typing.Dict[str, typing.Any]]]]]] = None,
                configurations: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                deposit_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                eas_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                high_availability_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                init_custom_hive_meta_db: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                instance_generation: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                io_optimized: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                is_open_public_ip: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                key_pair_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                log_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                machine_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                master_pwd: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                meta_store_conf: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                meta_store_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                option_soft_ware_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                related_cluster_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                security_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ssh_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                tags: typing.Optional[typing.Sequence[typing.Union[RosCluster.TagsProperty, typing.Dict[str, typing.Any]]]] = None,
                use_custom_hive_meta_db: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                user_defined_emr_ecs_role: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                user_info: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosCluster.UserInfoProperty, typing.Dict[str, typing.Any]]]]]] = None,
                vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                white_list_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def charge_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        chargeType: The billing method. Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
        subscription.
        '''
        result = self._values.get("charge_type")
        assert result is not None, "Required property 'charge_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterType: The type of the cluster. Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
        '''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def emr_ver(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: emrVer: The version of EMR.
        '''
        result = self._values.get("emr_ver")
        assert result is not None, "Required property 'emr_ver' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def host_group(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.HostGroupProperty]]]:
        '''
        :Property: hostGroup:
        '''
        result = self._values.get("host_group")
        assert result is not None, "Required property 'host_group' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.HostGroupProperty]]], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        name: The name of the cluster. The name can be 1 to 64 characters in length and only contain
        Chinese characters, letters, numbers, hyphens (-), and underscores (_).
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def net_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: netType: The type of the network.
        '''
        result = self._values.get("net_type")
        assert result is not None, "Required property 'net_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def use_local_meta_db(
        self,
    ) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        '''
        :Property: useLocalMetaDb: Indicates whether the local Hive metadatabase is used.
        '''
        result = self._values.get("use_local_meta_db")
        assert result is not None, "Required property 'use_local_meta_db' is missing"
        return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: zoneId: The zone ID.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def authorize_content(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: authorizeContent: Not required.
        '''
        result = self._values.get("authorize_content")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoRenew: Indicates whether the subscription cluster is auto-renewed.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def bootstrap_action(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.BootstrapActionProperty]]]]:
        '''
        :Property: bootstrapAction:
        '''
        result = self._values.get("bootstrap_action")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.BootstrapActionProperty]]]], result)

    @builtins.property
    def click_house_conf(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: clickHouseConf: undefined
        '''
        result = self._values.get("click_house_conf")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.ConfigProperty]]]]:
        '''
        :Property: config:
        '''
        result = self._values.get("config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.ConfigProperty]]]], result)

    @builtins.property
    def configurations(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: configurations: Not required.
        '''
        result = self._values.get("configurations")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deposit_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: depositType: The hosting type.
        '''
        result = self._values.get("deposit_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def eas_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: easEnable: Indicates whether the cluster is a high-security cluster.
        '''
        result = self._values.get("eas_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def high_availability_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster. A value of true indicates
        that two master nodes are required.
        '''
        result = self._values.get("high_availability_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def init_custom_hive_meta_db(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: initCustomHiveMetaDb: A reserved parameter. Not required.
        '''
        result = self._values.get("init_custom_hive_meta_db")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_generation(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceGeneration: The generation of the ECS instances.
        '''
        result = self._values.get("instance_generation")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: ioOptimized: Indicates wether I/O optimization is enabled. Default value: true.
        '''
        result = self._values.get("io_optimized")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def is_open_public_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        isOpenPublicIp: Indicates whether a public IP address is assigned. A value of true indicates that
        a bandwidth of 8 MB is set by default.
        '''
        result = self._values.get("is_open_public_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: keyPairName: The name of the key pair.
        '''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def log_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: logPath: The log path in OSS.
        '''
        result = self._values.get("log_path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def machine_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: machineType: The type of the machine.
        '''
        result = self._values.get("machine_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_pwd(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        masterPwd: The SSH password for the master node. The password must meet the following requirements.
        Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
        It must contain three types of characters (uppercase letters, lowercase letters, numbers,
        and special symbols).
        '''
        result = self._values.get("master_pwd")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def meta_store_conf(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: metaStoreConf: Meta store conf of specific meta store type. If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
        '''
        result = self._values.get("meta_store_conf")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def meta_store_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        metaStoreType: Meta store type. Allow types:
        local: Local cluster
        unified: Unified meta data
        user_rds: User's RDS
        '''
        result = self._values.get("meta_store_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def option_soft_ware_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: optionSoftWareList: The list of optional services.
        '''
        result = self._values.get("option_soft_ware_list")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
        9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def related_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
        '''
        result = self._values.get("related_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        securityGroupId: The ID of the security group. You can create a security group in the ECS console and
        use it. Note: If you use an existing security group, the default security group policy
        is applied to this security group: Only port 22 is open at the inbound and all ports
        are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ssh_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: sshEnable: Indicates whether SSH is enabled.
        '''
        result = self._values.get("ssh_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: useCustomHiveMetaDb: A reserved parameter. Not required.
        '''
        result = self._values.get("use_custom_hive_meta_db")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def user_defined_emr_ecs_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
        '''
        result = self._values.get("user_defined_emr_ecs_role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def user_info(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.UserInfoProperty]]]]:
        '''
        :Property: userInfo:
        '''
        result = self._values.get("user_info")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCluster.UserInfoProperty]]]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: The ID of the VPC. A value is required when NetType=vpc.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the Vswitch. A value is required when NetType=vpc.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def white_list_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: whiteListType: Not required.
        '''
        result = self._values.get("white_list_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosClusterServiceConfigs(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-emr.RosClusterServiceConfigs",
):
    '''A ROS template type:  ``ALIYUN::EMR::ClusterServiceConfigs``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterServiceConfigsProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EMR::ClusterServiceConfigs``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosClusterServiceConfigsProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterId: The ID of the cluster.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterId: The ID of the cluster.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
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
        jsii.set(self, "clusterId", value)

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
    @jsii.member(jsii_name="serviceConfigs")
    def service_configs(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosClusterServiceConfigs.ServiceConfigsProperty"]]]:
        '''
        :Property: serviceConfigs: Server configs
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosClusterServiceConfigs.ServiceConfigsProperty"]]], jsii.get(self, "serviceConfigs"))

    @service_configs.setter
    def service_configs(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosClusterServiceConfigs.ServiceConfigsProperty"]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosClusterServiceConfigs.ServiceConfigsProperty]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            config_params: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            service_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            comment: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            config_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            custom_config_params: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            gateway_cluster_id_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
            group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            host_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            refresh_host_config: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
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
                def stub(
                    *,
                    config_params: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    service_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    comment: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    config_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    custom_config_params: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    gateway_cluster_id_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                    group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    host_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    refresh_host_config: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument config_params", value=config_params, expected_type=type_hints["config_params"])
                check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
                check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
                check_type(argname="argument config_type", value=config_type, expected_type=type_hints["config_type"])
                check_type(argname="argument custom_config_params", value=custom_config_params, expected_type=type_hints["custom_config_params"])
                check_type(argname="argument gateway_cluster_id_list", value=gateway_cluster_id_list, expected_type=type_hints["gateway_cluster_id_list"])
                check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
                check_type(argname="argument host_instance_id", value=host_instance_id, expected_type=type_hints["host_instance_id"])
                check_type(argname="argument refresh_host_config", value=refresh_host_config, expected_type=type_hints["refresh_host_config"])
            self._values: typing.Dict[str, typing.Any] = {
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
        def config_params(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: configParams: The specific change of the configuration. It is a JSON string.
            '''
            result = self._values.get("config_params")
            assert result is not None, "Required property 'config_params' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: serviceName: The name of the service.
            '''
            result = self._values.get("service_name")
            assert result is not None, "Required property 'service_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def comment(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: comment: The comment for the configuration change.
            '''
            result = self._values.get("comment")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def config_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: configType: The type of the configuration parameters.
            '''
            result = self._values.get("config_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def custom_config_params(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: customConfigParams: The modification of custom configuration parameters.
            '''
            result = self._values.get("custom_config_params")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def gateway_cluster_id_list(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property: gatewayClusterIdList:
            '''
            result = self._values.get("gateway_cluster_id_list")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        @builtins.property
        def group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: groupId: The ID of the host group.
            '''
            result = self._values.get("group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def host_instance_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: hostInstanceId: The instance ID of the host. This is typically the ID of an ECS instance.
            '''
            result = self._values.get("host_instance_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def refresh_host_config(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: refreshHostConfig: Specifies whether to configure the job immediately after the modification.
            '''
            result = self._values.get("refresh_host_config")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

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
        cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        service_configs: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosClusterServiceConfigs.ServiceConfigsProperty, typing.Dict[str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::EMR::ClusterServiceConfigs``.

        :param cluster_id: 
        :param service_configs: 
        '''
        if __debug__:
            def stub(
                *,
                cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                service_configs: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosClusterServiceConfigs.ServiceConfigsProperty, typing.Dict[str, typing.Any]]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument service_configs", value=service_configs, expected_type=type_hints["service_configs"])
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_id": cluster_id,
            "service_configs": service_configs,
        }

    @builtins.property
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterId: The ID of the cluster.
        '''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def service_configs(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosClusterServiceConfigs.ServiceConfigsProperty]]]:
        '''
        :Property: serviceConfigs: Server configs
        '''
        result = self._values.get("service_configs")
        assert result is not None, "Required property 'service_configs' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosClusterServiceConfigs.ServiceConfigsProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterServiceConfigsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Cluster",
    "Cluster2",
    "Cluster2Props",
    "ClusterProps",
    "ClusterServiceConfigs",
    "ClusterServiceConfigsProps",
    "RosCluster",
    "RosCluster2",
    "RosCluster2Props",
    "RosClusterProps",
    "RosClusterServiceConfigs",
    "RosClusterServiceConfigsProps",
]

publication.publish()
