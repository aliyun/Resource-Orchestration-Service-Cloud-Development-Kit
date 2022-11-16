'''
## Aliyun ROS EDAS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as EDAS from '@alicloud/ros-cdk-edas';
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


class Application(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.Application",
):
    '''A ROS resource type:  ``ALIYUN::EDAS::Application``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["ApplicationProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::Application``.

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
                props: typing.Union[ApplicationProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AppId: Application Id, a unique identifier EDAS application.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute Port: Application port.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPort"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.ApplicationProps",
    jsii_struct_bases=[],
    name_mapping={
        "application_name": "applicationName",
        "cluster_id": "clusterId",
        "build_pack_id": "buildPackId",
        "component_ids": "componentIds",
        "description": "description",
        "ecu_info": "ecuInfo",
        "health_check_url": "healthCheckUrl",
        "logical_region_id": "logicalRegionId",
        "package_type": "packageType",
        "resource_group_id": "resourceGroupId",
    },
)
class ApplicationProps:
    def __init__(
        self,
        *,
        application_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        build_pack_id: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        component_ids: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ecu_info: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        health_check_url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        logical_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        package_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::Application``.

        :param application_name: Property applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters).
        :param cluster_id: Property clusterId: Cluster ID of ECS application.
        :param build_pack_id: Property buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition). When creating HSF application, this parameter must be specified
        :param component_ids: Property componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo Application required) or standard Java application (jar package format Spring Boot / Spring Cloud applications require) you need to specify when the operating environment. Commonly used application component ID and meaning: 4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK 1.7.x
        :param description: Property description: Descriptive information.
        :param ecu_info: Property ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id Interface to obtain).
        :param health_check_url: Property healthCheckUrl: Application Health Check URL.
        :param logical_region_id: Property logicalRegionId: Namespace ID.
        :param package_type: Property packageType: Application packet format, possible values: war or jar.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        '''
        if __debug__:
            def stub(
                *,
                application_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                build_pack_id: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                component_ids: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ecu_info: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                health_check_url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                logical_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                package_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument application_name", value=application_name, expected_type=type_hints["application_name"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument build_pack_id", value=build_pack_id, expected_type=type_hints["build_pack_id"])
            check_type(argname="argument component_ids", value=component_ids, expected_type=type_hints["component_ids"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument ecu_info", value=ecu_info, expected_type=type_hints["ecu_info"])
            check_type(argname="argument health_check_url", value=health_check_url, expected_type=type_hints["health_check_url"])
            check_type(argname="argument logical_region_id", value=logical_region_id, expected_type=type_hints["logical_region_id"])
            check_type(argname="argument package_type", value=package_type, expected_type=type_hints["package_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[str, typing.Any] = {
            "application_name": application_name,
            "cluster_id": cluster_id,
        }
        if build_pack_id is not None:
            self._values["build_pack_id"] = build_pack_id
        if component_ids is not None:
            self._values["component_ids"] = component_ids
        if description is not None:
            self._values["description"] = description
        if ecu_info is not None:
            self._values["ecu_info"] = ecu_info
        if health_check_url is not None:
            self._values["health_check_url"] = health_check_url
        if logical_region_id is not None:
            self._values["logical_region_id"] = logical_region_id
        if package_type is not None:
            self._values["package_type"] = package_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def application_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters).'''
        result = self._values.get("application_name")
        assert result is not None, "Required property 'application_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property clusterId: Cluster ID of ECS application.'''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def build_pack_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition).

        When creating HSF application, this parameter must be specified
        '''
        result = self._values.get("build_pack_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def component_ids(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo Application required) or standard Java application (jar package format Spring Boot / Spring Cloud applications require) you need to specify when the operating environment.

        Commonly used application component ID and meaning:
        4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
        1.7.x
        '''
        result = self._values.get("component_ids")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Descriptive information.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ecu_info(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id Interface to obtain).'''
        result = self._values.get("ecu_info")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property healthCheckUrl: Application Health Check URL.'''
        result = self._values.get("health_check_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def logical_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property logicalRegionId: Namespace ID.'''
        result = self._values.get("logical_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def package_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property packageType: Application packet format, possible values: war or jar.'''
        result = self._values.get("package_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ApplicationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Cluster(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.Cluster",
):
    '''A ROS resource type:  ``ALIYUN::EDAS::Cluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["ClusterProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::Cluster``.

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
        '''Attribute ClusterId: Cluster ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterName")
    def attr_cluster_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterName: Cluster name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterName"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterType: Cluster type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrIaasProvider")
    def attr_iaas_provider(self) -> ros_cdk_core.IResolvable:
        '''Attribute IaasProvider: Provider.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIaasProvider"))


class ClusterMember(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.ClusterMember",
):
    '''A ROS resource type:  ``ALIYUN::EDAS::ClusterMember``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["ClusterMemberProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::ClusterMember``.

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
                props: typing.Union[ClusterMemberProps, typing.Dict[str, typing.Any]],
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

    @builtins.property
    @jsii.member(jsii_name="attrClusterMemberIds")
    def attr_cluster_member_ids(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterMemberIds: Cluster member IDs corresponding to the ECS instance IDs.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterMemberIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceIds: ECS instance IDs.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceIds"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.ClusterMemberProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "instance_ids": "instanceIds",
        "password": "password",
    },
)
class ClusterMemberProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_ids: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::ClusterMember``.

        :param cluster_id: Property clusterId: Cluster ID to import ECS instance.
        :param instance_ids: Property instanceIds: ECS instance ID list to import.
        :param password: Property password: Password ECS hosts need to import (ECS settings can continue to use purchased).
        '''
        if __debug__:
            def stub(
                *,
                cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                instance_ids: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
                password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument instance_ids", value=instance_ids, expected_type=type_hints["instance_ids"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_id": cluster_id,
            "instance_ids": instance_ids,
            "password": password,
        }

    @builtins.property
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property clusterId: Cluster ID to import ECS instance.'''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_ids(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''Property instanceIds: ECS instance ID list to import.'''
        result = self._values.get("instance_ids")
        assert result is not None, "Required property 'instance_ids' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    @builtins.property
    def password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property password: Password ECS hosts need to import (ECS settings can continue to use purchased).'''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterMemberProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.ClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_name": "clusterName",
        "cluster_type": "clusterType",
        "network_mode": "networkMode",
        "logical_region_id": "logicalRegionId",
        "oversold_factor": "oversoldFactor",
        "resource_group_id": "resourceGroupId",
        "vpc_id": "vpcId",
    },
)
class ClusterProps:
    def __init__(
        self,
        *,
        cluster_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_type: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        network_mode: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        logical_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        oversold_factor: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::Cluster``.

        :param cluster_name: Property clusterName: Cluster name.
        :param cluster_type: Property clusterType: Cluster type. 1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
        :param network_mode: Property networkMode: Network Type. 1- classic network, 2-VPC
        :param logical_region_id: Property logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier).
        :param oversold_factor: Property oversoldFactor: Docker CPU cluster oversold. Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param vpc_id: Property vpcId: VPC network ID. If network selection VPC, this parameter Required
        '''
        if __debug__:
            def stub(
                *,
                cluster_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                cluster_type: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                network_mode: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                logical_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                oversold_factor: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument cluster_name", value=cluster_name, expected_type=type_hints["cluster_name"])
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument network_mode", value=network_mode, expected_type=type_hints["network_mode"])
            check_type(argname="argument logical_region_id", value=logical_region_id, expected_type=type_hints["logical_region_id"])
            check_type(argname="argument oversold_factor", value=oversold_factor, expected_type=type_hints["oversold_factor"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_name": cluster_name,
            "cluster_type": cluster_type,
            "network_mode": network_mode,
        }
        if logical_region_id is not None:
            self._values["logical_region_id"] = logical_region_id
        if oversold_factor is not None:
            self._values["oversold_factor"] = oversold_factor
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def cluster_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property clusterName: Cluster name.'''
        result = self._values.get("cluster_name")
        assert result is not None, "Required property 'cluster_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_type(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property clusterType: Cluster type.

        1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
        '''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def network_mode(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property networkMode: Network Type.

        1- classic network, 2-VPC
        '''
        result = self._values.get("network_mode")
        assert result is not None, "Required property 'network_mode' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def logical_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier).'''
        result = self._values.get("logical_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def oversold_factor(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property oversoldFactor: Docker CPU cluster oversold.

        Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
        '''
        result = self._values.get("oversold_factor")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vpcId: VPC network ID.

        If network selection VPC, this parameter Required
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DeployGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.DeployGroup",
):
    '''A ROS resource type:  ``ALIYUN::EDAS::DeployGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["DeployGroupProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::DeployGroup``.

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
                props: typing.Union[DeployGroupProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AppId: Application ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute GroupName: Deploy group name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute Id: Deploy group ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.DeployGroupProps",
    jsii_struct_bases=[],
    name_mapping={"app_id": "appId", "group_name": "groupName"},
)
class DeployGroupProps:
    def __init__(
        self,
        *,
        app_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::DeployGroup``.

        :param app_id: Property appId: Application ID.
        :param group_name: Property groupName: Group name, maximum length of 64.
        '''
        if __debug__:
            def stub(
                *,
                app_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument app_id", value=app_id, expected_type=type_hints["app_id"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
        self._values: typing.Dict[str, typing.Any] = {
            "app_id": app_id,
            "group_name": group_name,
        }

    @builtins.property
    def app_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property appId: Application ID.'''
        result = self._values.get("app_id")
        assert result is not None, "Required property 'app_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property groupName: Group name, maximum length of 64.'''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DeployGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class K8sApplication(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.K8sApplication",
):
    '''A ROS resource type:  ``ALIYUN::EDAS::K8sApplication``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["K8sApplicationProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::K8sApplication``.

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
                props: typing.Union[K8sApplicationProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AppId: The ID of the application.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property
    @jsii.member(jsii_name="attrAppName")
    def attr_app_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute AppName: The name of the application.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppName"))

    @builtins.property
    @jsii.member(jsii_name="attrChangeOrderId")
    def attr_change_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ChangeOrderId: The ID of the change process.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrChangeOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterId: The cluster ID of the application.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrCsClusterId")
    def attr_cs_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute CsClusterId: The K8s cluster ID of the application.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCsClusterId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.K8sApplicationProps",
    jsii_struct_bases=[],
    name_mapping={
        "app_name": "appName",
        "cluster_id": "clusterId",
        "application_description": "applicationDescription",
        "command": "command",
        "command_args": "commandArgs",
        "deploy_across_nodes": "deployAcrossNodes",
        "deploy_across_zones": "deployAcrossZones",
        "edas_container_version": "edasContainerVersion",
        "enable_ahas": "enableAhas",
        "envs": "envs",
        "image_url": "imageUrl",
        "internet_slb_id": "internetSlbId",
        "internet_slb_port": "internetSlbPort",
        "internet_slb_protocol": "internetSlbProtocol",
        "internet_target_port": "internetTargetPort",
        "intranet_slb_id": "intranetSlbId",
        "intranet_slb_port": "intranetSlbPort",
        "intranet_slb_protocol": "intranetSlbProtocol",
        "intranet_target_port": "intranetTargetPort",
        "is_multilingual_app": "isMultilingualApp",
        "java_start_up_config": "javaStartUpConfig",
        "jdk": "jdk",
        "limit_cpu": "limitCpu",
        "limit_mem": "limitMem",
        "liveness": "liveness",
        "local_volume": "localVolume",
        "logical_region_id": "logicalRegionId",
        "mount_descs": "mountDescs",
        "namespace": "namespace",
        "nas_id": "nasId",
        "package_type": "packageType",
        "package_url": "packageUrl",
        "package_version": "packageVersion",
        "post_start": "postStart",
        "pre_stop": "preStop",
        "readiness": "readiness",
        "replicas": "replicas",
        "repo_id": "repoId",
        "requests_cpu": "requestsCpu",
        "requests_mem": "requestsMem",
        "runtime_class_name": "runtimeClassName",
        "sls_configs": "slsConfigs",
        "storage_type": "storageType",
        "timeout": "timeout",
        "uri_encoding": "uriEncoding",
        "use_body_encoding": "useBodyEncoding",
        "web_container": "webContainer",
        "web_container_config": "webContainerConfig",
    },
)
class K8sApplicationProps:
    def __init__(
        self,
        *,
        app_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        application_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        command: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        command_args: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.CommandArgsProperty", typing.Dict[str, typing.Any]]]]]] = None,
        deploy_across_nodes: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        deploy_across_zones: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        edas_container_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        enable_ahas: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        envs: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.EnvsProperty", typing.Dict[str, typing.Any]]]]]] = None,
        image_url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        internet_slb_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        internet_slb_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        internet_slb_protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        internet_target_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        intranet_slb_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        intranet_slb_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        intranet_slb_protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        intranet_target_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        is_multilingual_app: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        java_start_up_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.JavaStartUpConfigProperty", typing.Dict[str, typing.Any]]]] = None,
        jdk: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        limit_cpu: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        limit_mem: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        liveness: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.LivenessProperty", typing.Dict[str, typing.Any]]]] = None,
        local_volume: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.LocalVolumeProperty", typing.Dict[str, typing.Any]]]]]] = None,
        logical_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        mount_descs: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.MountDescsProperty", typing.Dict[str, typing.Any]]]]]] = None,
        namespace: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        nas_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        package_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        package_url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        package_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        post_start: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.PostStartProperty", typing.Dict[str, typing.Any]]]] = None,
        pre_stop: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.PreStopProperty", typing.Dict[str, typing.Any]]]] = None,
        readiness: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.ReadinessProperty", typing.Dict[str, typing.Any]]]] = None,
        replicas: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        repo_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        requests_cpu: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        requests_mem: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        runtime_class_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        sls_configs: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.SlsConfigsProperty", typing.Dict[str, typing.Any]]]]]] = None,
        storage_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        uri_encoding: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        use_body_encoding: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        web_container: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        web_container_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.WebContainerConfigProperty", typing.Dict[str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::K8sApplication``.

        :param app_name: Property appName: The name of the application. The name must start with a letter and can contain digits, letters, and hyphens (-). It can be up to 36 characters in length.
        :param cluster_id: Property clusterId: The cluster ID. You can query the cluster ID by calling the ListCluster operation. For more information, see ListCluster.
        :param application_description: Property applicationDescription: The description of the application.
        :param command: Property command: The command that is specified. If it is specified, it replaces the startup command in the image when the image is started.
        :param command_args: Property commandArgs: The collection of commands. For example, [{"argument":"-c"},{"argument":"test"}], where -c and test are two parameters that can be set.
        :param deploy_across_nodes: Property deployAcrossNodes: Specifies whether to distribute application instances to multiple nodes. The value true indicates yes, whereas other values indicate no.
        :param deploy_across_zones: Property deployAcrossZones: Specifies whether to distribute application instances to multiple zones. The value true indicates yes, whereas other values indicate no.
        :param edas_container_version: Property edasContainerVersion: The version of EDAS Container on which the deployment package of the application depends. Note This parameter is not supported when you deploy an application by using images.
        :param enable_ahas: Property enableAhas: Specifies whether to enable access to Application High Availability Service (AHAS).
        :param envs: Property envs: The collection of deployment environment variables. For example, [{"Name":"x","Value":"y"},{"Name":"x2","Value":"y2"}].
        :param image_url: Property imageUrl: The image URL. When PackageType is set to Image, this parameter is required.
        :param internet_slb_id: Property internetSlbId: The ID of the Internet-facing SLB instance. If this parameter is not specified, EDAS automatically purchases a new SLB instance for you.
        :param internet_slb_port: Property internetSlbPort: The frontend port of the Internet-facing SLB instance. Valid values: 1 to 65535.
        :param internet_slb_protocol: Property internetSlbProtocol: The protocol of the Internet-facing SLB instance. Valid values: TCP, HTTP, and HTTPS.
        :param internet_target_port: Property internetTargetPort: The backend port of the internal-facing SLB instance, which is also the service port of the application. Valid values: 1 to 65535.
        :param intranet_slb_id: Property intranetSlbId: The ID of the internal-facing SLB instance. If this parameter is not specified, Enterprise Distributed Application Service (EDAS) automatically purchases a new SLB instance for you.
        :param intranet_slb_port: Property intranetSlbPort: The frontend port of the internal-facing SLB instance. Valid values: 1 to 65535.
        :param intranet_slb_protocol: Property intranetSlbProtocol: The protocol of the internal-facing SLB instance. Valid values: TCP, HTTP, and HTTPS.
        :param intranet_target_port: Property intranetTargetPort: The backend port of the internal-facing Server Load Balancer (SLB) instance, which is also the service port of the application. Valid values: 1 to 65535.
        :param is_multilingual_app: Property isMultilingualApp: Specifies whether the application is a multi-language application.
        :param java_start_up_config: Property javaStartUpConfig: The configuration of Java startup parameters for a Java application. These startup parameters involve the memory, application, garbage collection (GC) policy, tools, service registration and discovery, and custom configurations. Proper parameter settings help reduce the GC overhead, shorten the server response time, and improve the throughput. The system automatically concatenates all startup values as the configuration of Java startup parameters for the application.
        :param jdk: Property jdk: The version of Java Development Kit (JDK) on which the deployment package of the application depends. Valid values: Open JDK 7 and Open JDK 8. This parameter is not supported when you deploy an application by using images.
        :param limit_cpu: Property limitCpu: The maximum number of CPUs allowed for each application instance when the application is running. Unit: cores.
        :param limit_mem: Property limitMem: The maximum amount of memory allowed for each application instance when the application is running. Unit: MB.
        :param liveness: Property liveness: The liveness check on the container.
        :param local_volume: Property localVolume: The configuration for mounting host files to the container where the application is running. For example, the value can be [{"type":"", "nodePath":"/localfiles", "mountPath":"/app/files"}, {"type":"Directory", "nodePath":"/mnt", "mountPath":"/app/storage"}].
        :param logical_region_id: Property logicalRegionId: The ID of the EDAS namespace. This parameter is required for a non-default namespace.
        :param mount_descs: Property mountDescs: The description of the NAS mounting configuration. For example, the value can be [{"NasPath": "/k8s","MountPath": "/mnt"}, {"NasPath": "/files", "MountPath": "/app/files"}].
        :param namespace: Property namespace: The namespace of the Kubernetes cluster. This parameter determines the Kubernetes namespace where your application is deployed. By default, this parameter is set to default.
        :param nas_id: Property nasId: The ID of the Network Attached Storage (NAS) file system mounted to the container where the application is running. The NAS file system must be in the same region as the cluster. The NAS file system must have an available mount target, or have a mount target on the vSwitch in the virtual private cloud (VPC) where the application is located. If this parameter is not specified and the mountDescs field exists, a NAS file system is automatically purchased and mounted to the vSwitch in the VPC by default.
        :param package_type: Property packageType: The type of the deployment package. Valid values: FatJar, WAR, and Image.
        :param package_url: Property packageUrl: The URL of the deployment package. This parameter must be set for the applications that are deployed by using FatJar or WAR packages. Note The version of SDK for Java or Python must be 2.44.0 or later.
        :param package_version: Property packageVersion: The version of the deployment package. This parameter is required when the PackageType parameter is set to WAR or FatJar. You must specify a version. Note The version of SDK for Java or Python must be 2.44.0 or later.
        :param post_start: Property postStart: The post-start script. For example, {"Exec": {"Command": ["ls", "/"]}}.
        :param pre_stop: Property preStop: The pre-stop script. For example, {"Exec": {"Command": ["ls", "/"]}}.
        :param readiness: Property readiness: The readiness check on the container.
        :param replicas: Property replicas: The number of instances for the application that you want to create. Default: 1
        :param repo_id: Property repoId: The ID of the image repository.
        :param requests_cpu: Property requestsCpu: The maximum number of CPUs allowed for each application instance when the application is created. Unit: cores. The value 0 indicates no limit.
        :param requests_mem: Property requestsMem: The maximum amount of memory allowed for each application instance when the application is created. Unit: MB. The value 0 indicates no limit.
        :param runtime_class_name: Property runtimeClassName: The type of the container runtime. This parameter is applicable only to clusters that use sandboxed containers.
        :param sls_configs: Property slsConfigs: The Logstore configurations.
        :param storage_type: Property storageType: Only SSD is supported.
        :param timeout: Property timeout: The timeout interval of the change process. Unit: seconds.
        :param uri_encoding: Property uriEncoding: The uniform resource identifier (URI) encoding scheme. Valid values: ISO-8859-1, GBK, GB2312, and UTF-8. Note If this parameter is not specified in application configuration, the default URI encoding scheme in the Tomcat container is applied.
        :param use_body_encoding: Property useBodyEncoding: Specifies whether useBodyEncodingForURI is enabled. Note If this parameter is not specified in application configuration, the default value false is applied.
        :param web_container: Property webContainer: The version of the Tomcat container on which the deployment package of the application depends. This parameter is applicable to Spring Cloud and Apache Dubbo applications that are deployed by using WAR packages. This parameter is not supported when you deploy an application by using images.
        :param web_container_config: Property webContainerConfig: The Tomcat container configuration.
        '''
        if __debug__:
            def stub(
                *,
                app_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                application_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                command: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                command_args: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.CommandArgsProperty, typing.Dict[str, typing.Any]]]]]] = None,
                deploy_across_nodes: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                deploy_across_zones: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                edas_container_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                enable_ahas: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                envs: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.EnvsProperty, typing.Dict[str, typing.Any]]]]]] = None,
                image_url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                internet_slb_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                internet_slb_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                internet_slb_protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                internet_target_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                intranet_slb_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                intranet_slb_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                intranet_slb_protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                intranet_target_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                is_multilingual_app: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                java_start_up_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.JavaStartUpConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                jdk: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                limit_cpu: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                limit_mem: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                liveness: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.LivenessProperty, typing.Dict[str, typing.Any]]]] = None,
                local_volume: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.LocalVolumeProperty, typing.Dict[str, typing.Any]]]]]] = None,
                logical_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                mount_descs: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.MountDescsProperty, typing.Dict[str, typing.Any]]]]]] = None,
                namespace: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                nas_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                package_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                package_url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                package_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                post_start: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.PostStartProperty, typing.Dict[str, typing.Any]]]] = None,
                pre_stop: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.PreStopProperty, typing.Dict[str, typing.Any]]]] = None,
                readiness: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.ReadinessProperty, typing.Dict[str, typing.Any]]]] = None,
                replicas: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                repo_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                requests_cpu: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                requests_mem: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                runtime_class_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                sls_configs: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.SlsConfigsProperty, typing.Dict[str, typing.Any]]]]]] = None,
                storage_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                uri_encoding: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                use_body_encoding: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                web_container: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                web_container_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.WebContainerConfigProperty, typing.Dict[str, typing.Any]]]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument app_name", value=app_name, expected_type=type_hints["app_name"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument application_description", value=application_description, expected_type=type_hints["application_description"])
            check_type(argname="argument command", value=command, expected_type=type_hints["command"])
            check_type(argname="argument command_args", value=command_args, expected_type=type_hints["command_args"])
            check_type(argname="argument deploy_across_nodes", value=deploy_across_nodes, expected_type=type_hints["deploy_across_nodes"])
            check_type(argname="argument deploy_across_zones", value=deploy_across_zones, expected_type=type_hints["deploy_across_zones"])
            check_type(argname="argument edas_container_version", value=edas_container_version, expected_type=type_hints["edas_container_version"])
            check_type(argname="argument enable_ahas", value=enable_ahas, expected_type=type_hints["enable_ahas"])
            check_type(argname="argument envs", value=envs, expected_type=type_hints["envs"])
            check_type(argname="argument image_url", value=image_url, expected_type=type_hints["image_url"])
            check_type(argname="argument internet_slb_id", value=internet_slb_id, expected_type=type_hints["internet_slb_id"])
            check_type(argname="argument internet_slb_port", value=internet_slb_port, expected_type=type_hints["internet_slb_port"])
            check_type(argname="argument internet_slb_protocol", value=internet_slb_protocol, expected_type=type_hints["internet_slb_protocol"])
            check_type(argname="argument internet_target_port", value=internet_target_port, expected_type=type_hints["internet_target_port"])
            check_type(argname="argument intranet_slb_id", value=intranet_slb_id, expected_type=type_hints["intranet_slb_id"])
            check_type(argname="argument intranet_slb_port", value=intranet_slb_port, expected_type=type_hints["intranet_slb_port"])
            check_type(argname="argument intranet_slb_protocol", value=intranet_slb_protocol, expected_type=type_hints["intranet_slb_protocol"])
            check_type(argname="argument intranet_target_port", value=intranet_target_port, expected_type=type_hints["intranet_target_port"])
            check_type(argname="argument is_multilingual_app", value=is_multilingual_app, expected_type=type_hints["is_multilingual_app"])
            check_type(argname="argument java_start_up_config", value=java_start_up_config, expected_type=type_hints["java_start_up_config"])
            check_type(argname="argument jdk", value=jdk, expected_type=type_hints["jdk"])
            check_type(argname="argument limit_cpu", value=limit_cpu, expected_type=type_hints["limit_cpu"])
            check_type(argname="argument limit_mem", value=limit_mem, expected_type=type_hints["limit_mem"])
            check_type(argname="argument liveness", value=liveness, expected_type=type_hints["liveness"])
            check_type(argname="argument local_volume", value=local_volume, expected_type=type_hints["local_volume"])
            check_type(argname="argument logical_region_id", value=logical_region_id, expected_type=type_hints["logical_region_id"])
            check_type(argname="argument mount_descs", value=mount_descs, expected_type=type_hints["mount_descs"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument nas_id", value=nas_id, expected_type=type_hints["nas_id"])
            check_type(argname="argument package_type", value=package_type, expected_type=type_hints["package_type"])
            check_type(argname="argument package_url", value=package_url, expected_type=type_hints["package_url"])
            check_type(argname="argument package_version", value=package_version, expected_type=type_hints["package_version"])
            check_type(argname="argument post_start", value=post_start, expected_type=type_hints["post_start"])
            check_type(argname="argument pre_stop", value=pre_stop, expected_type=type_hints["pre_stop"])
            check_type(argname="argument readiness", value=readiness, expected_type=type_hints["readiness"])
            check_type(argname="argument replicas", value=replicas, expected_type=type_hints["replicas"])
            check_type(argname="argument repo_id", value=repo_id, expected_type=type_hints["repo_id"])
            check_type(argname="argument requests_cpu", value=requests_cpu, expected_type=type_hints["requests_cpu"])
            check_type(argname="argument requests_mem", value=requests_mem, expected_type=type_hints["requests_mem"])
            check_type(argname="argument runtime_class_name", value=runtime_class_name, expected_type=type_hints["runtime_class_name"])
            check_type(argname="argument sls_configs", value=sls_configs, expected_type=type_hints["sls_configs"])
            check_type(argname="argument storage_type", value=storage_type, expected_type=type_hints["storage_type"])
            check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
            check_type(argname="argument uri_encoding", value=uri_encoding, expected_type=type_hints["uri_encoding"])
            check_type(argname="argument use_body_encoding", value=use_body_encoding, expected_type=type_hints["use_body_encoding"])
            check_type(argname="argument web_container", value=web_container, expected_type=type_hints["web_container"])
            check_type(argname="argument web_container_config", value=web_container_config, expected_type=type_hints["web_container_config"])
        self._values: typing.Dict[str, typing.Any] = {
            "app_name": app_name,
            "cluster_id": cluster_id,
        }
        if application_description is not None:
            self._values["application_description"] = application_description
        if command is not None:
            self._values["command"] = command
        if command_args is not None:
            self._values["command_args"] = command_args
        if deploy_across_nodes is not None:
            self._values["deploy_across_nodes"] = deploy_across_nodes
        if deploy_across_zones is not None:
            self._values["deploy_across_zones"] = deploy_across_zones
        if edas_container_version is not None:
            self._values["edas_container_version"] = edas_container_version
        if enable_ahas is not None:
            self._values["enable_ahas"] = enable_ahas
        if envs is not None:
            self._values["envs"] = envs
        if image_url is not None:
            self._values["image_url"] = image_url
        if internet_slb_id is not None:
            self._values["internet_slb_id"] = internet_slb_id
        if internet_slb_port is not None:
            self._values["internet_slb_port"] = internet_slb_port
        if internet_slb_protocol is not None:
            self._values["internet_slb_protocol"] = internet_slb_protocol
        if internet_target_port is not None:
            self._values["internet_target_port"] = internet_target_port
        if intranet_slb_id is not None:
            self._values["intranet_slb_id"] = intranet_slb_id
        if intranet_slb_port is not None:
            self._values["intranet_slb_port"] = intranet_slb_port
        if intranet_slb_protocol is not None:
            self._values["intranet_slb_protocol"] = intranet_slb_protocol
        if intranet_target_port is not None:
            self._values["intranet_target_port"] = intranet_target_port
        if is_multilingual_app is not None:
            self._values["is_multilingual_app"] = is_multilingual_app
        if java_start_up_config is not None:
            self._values["java_start_up_config"] = java_start_up_config
        if jdk is not None:
            self._values["jdk"] = jdk
        if limit_cpu is not None:
            self._values["limit_cpu"] = limit_cpu
        if limit_mem is not None:
            self._values["limit_mem"] = limit_mem
        if liveness is not None:
            self._values["liveness"] = liveness
        if local_volume is not None:
            self._values["local_volume"] = local_volume
        if logical_region_id is not None:
            self._values["logical_region_id"] = logical_region_id
        if mount_descs is not None:
            self._values["mount_descs"] = mount_descs
        if namespace is not None:
            self._values["namespace"] = namespace
        if nas_id is not None:
            self._values["nas_id"] = nas_id
        if package_type is not None:
            self._values["package_type"] = package_type
        if package_url is not None:
            self._values["package_url"] = package_url
        if package_version is not None:
            self._values["package_version"] = package_version
        if post_start is not None:
            self._values["post_start"] = post_start
        if pre_stop is not None:
            self._values["pre_stop"] = pre_stop
        if readiness is not None:
            self._values["readiness"] = readiness
        if replicas is not None:
            self._values["replicas"] = replicas
        if repo_id is not None:
            self._values["repo_id"] = repo_id
        if requests_cpu is not None:
            self._values["requests_cpu"] = requests_cpu
        if requests_mem is not None:
            self._values["requests_mem"] = requests_mem
        if runtime_class_name is not None:
            self._values["runtime_class_name"] = runtime_class_name
        if sls_configs is not None:
            self._values["sls_configs"] = sls_configs
        if storage_type is not None:
            self._values["storage_type"] = storage_type
        if timeout is not None:
            self._values["timeout"] = timeout
        if uri_encoding is not None:
            self._values["uri_encoding"] = uri_encoding
        if use_body_encoding is not None:
            self._values["use_body_encoding"] = use_body_encoding
        if web_container is not None:
            self._values["web_container"] = web_container
        if web_container_config is not None:
            self._values["web_container_config"] = web_container_config

    @builtins.property
    def app_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property appName: The name of the application.

        The name must start with a letter and can contain digits,
        letters, and hyphens (-). It can be up to 36 characters in length.
        '''
        result = self._values.get("app_name")
        assert result is not None, "Required property 'app_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property clusterId: The cluster ID.

        You can query the cluster ID by calling the ListCluster operation.
        For more information, see ListCluster.
        '''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def application_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property applicationDescription: The description of the application.'''
        result = self._values.get("application_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def command(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property command: The command that is specified.

        If it is specified, it replaces the startup command in the image when the image is started.
        '''
        result = self._values.get("command")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def command_args(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.CommandArgsProperty"]]]]:
        '''Property commandArgs: The collection of commands.

        For example, [{"argument":"-c"},{"argument":"test"}], where -c and test are two parameters that can be set.
        '''
        result = self._values.get("command_args")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.CommandArgsProperty"]]]], result)

    @builtins.property
    def deploy_across_nodes(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property deployAcrossNodes: Specifies whether to distribute application instances to multiple nodes.

        The value true indicates yes, whereas other values indicate no.
        '''
        result = self._values.get("deploy_across_nodes")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deploy_across_zones(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property deployAcrossZones: Specifies whether to distribute application instances to multiple zones.

        The value true indicates yes, whereas other values indicate no.
        '''
        result = self._values.get("deploy_across_zones")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def edas_container_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property edasContainerVersion: The version of EDAS Container on which the deployment package of the application depends.

        Note This parameter is not supported when you deploy an application by using images.
        '''
        result = self._values.get("edas_container_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable_ahas(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property enableAhas: Specifies whether to enable access to Application High Availability Service (AHAS).'''
        result = self._values.get("enable_ahas")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def envs(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.EnvsProperty"]]]]:
        '''Property envs: The collection of deployment environment variables.

        For example, [{"Name":"x","Value":"y"},{"Name":"x2","Value":"y2"}].
        '''
        result = self._values.get("envs")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.EnvsProperty"]]]], result)

    @builtins.property
    def image_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property imageUrl: The image URL.

        When PackageType is set to Image, this parameter is required.
        '''
        result = self._values.get("image_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_slb_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property internetSlbId: The ID of the Internet-facing SLB instance.

        If this parameter is not specified, EDAS automatically purchases a new SLB instance for you.
        '''
        result = self._values.get("internet_slb_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_slb_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property internetSlbPort: The frontend port of the Internet-facing SLB instance.

        Valid values: 1 to 65535.
        '''
        result = self._values.get("internet_slb_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_slb_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property internetSlbProtocol: The protocol of the Internet-facing SLB instance.

        Valid values: TCP, HTTP, and HTTPS.
        '''
        result = self._values.get("internet_slb_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_target_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property internetTargetPort: The backend port of the internal-facing SLB instance, which is also the service port of the application.

        Valid values: 1 to 65535.
        '''
        result = self._values.get("internet_target_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def intranet_slb_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property intranetSlbId: The ID of the internal-facing SLB instance.

        If this parameter is not specified, Enterprise Distributed Application Service (EDAS) automatically purchases a new SLB instance for you.
        '''
        result = self._values.get("intranet_slb_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def intranet_slb_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property intranetSlbPort: The frontend port of the internal-facing SLB instance.

        Valid values: 1 to 65535.
        '''
        result = self._values.get("intranet_slb_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def intranet_slb_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property intranetSlbProtocol: The protocol of the internal-facing SLB instance.

        Valid values: TCP, HTTP, and HTTPS.
        '''
        result = self._values.get("intranet_slb_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def intranet_target_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property intranetTargetPort: The backend port of the internal-facing Server Load Balancer (SLB) instance, which is also the service port of the application.

        Valid values: 1 to 65535.
        '''
        result = self._values.get("intranet_target_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def is_multilingual_app(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property isMultilingualApp: Specifies whether the application is a multi-language application.'''
        result = self._values.get("is_multilingual_app")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def java_start_up_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.JavaStartUpConfigProperty"]]:
        '''Property javaStartUpConfig: The configuration of Java startup parameters for a Java application.

        These startup parameters involve the memory, application, garbage collection (GC) policy, tools, service registration and discovery, and custom configurations. Proper parameter settings help reduce the GC overhead, shorten the server response time, and improve the throughput.
        The system automatically concatenates all startup values as the configuration of Java startup parameters for the application.
        '''
        result = self._values.get("java_start_up_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.JavaStartUpConfigProperty"]], result)

    @builtins.property
    def jdk(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property jdk: The version of Java Development Kit (JDK) on which the deployment package of the application depends.

        Valid values: Open JDK 7 and Open JDK 8. This parameter is not supported when you deploy an application by using images.
        '''
        result = self._values.get("jdk")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def limit_cpu(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property limitCpu: The maximum number of CPUs allowed for each application instance when the application is running.

        Unit: cores.
        '''
        result = self._values.get("limit_cpu")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def limit_mem(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property limitMem: The maximum amount of memory allowed for each application instance when the application is running.

        Unit: MB.
        '''
        result = self._values.get("limit_mem")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def liveness(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.LivenessProperty"]]:
        '''Property liveness: The liveness check on the container.'''
        result = self._values.get("liveness")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.LivenessProperty"]], result)

    @builtins.property
    def local_volume(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.LocalVolumeProperty"]]]]:
        '''Property localVolume: The configuration for mounting host files to the container where the application is running.

        For example, the value can be [{"type":"", "nodePath":"/localfiles", "mountPath":"/app/files"}, {"type":"Directory", "nodePath":"/mnt", "mountPath":"/app/storage"}].
        '''
        result = self._values.get("local_volume")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.LocalVolumeProperty"]]]], result)

    @builtins.property
    def logical_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property logicalRegionId: The ID of the EDAS namespace.

        This parameter is required for a non-default namespace.
        '''
        result = self._values.get("logical_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def mount_descs(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.MountDescsProperty"]]]]:
        '''Property mountDescs: The description of the NAS mounting configuration.

        For example, the value can be [{"NasPath": "/k8s","MountPath": "/mnt"}, {"NasPath": "/files", "MountPath": "/app/files"}].
        '''
        result = self._values.get("mount_descs")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.MountDescsProperty"]]]], result)

    @builtins.property
    def namespace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property namespace: The namespace of the Kubernetes cluster.

        This parameter determines the Kubernetes namespace where your application is deployed. By default, this parameter is set to default.
        '''
        result = self._values.get("namespace")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def nas_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property nasId: The ID of the Network Attached Storage (NAS) file system mounted to the container where the application is running.

        The NAS file system must be in the same region as the cluster. The NAS file system must have an available mount target, or have a mount
        target on the vSwitch in the virtual private cloud (VPC) where the application is located. If this parameter is not specified and the mountDescs field exists, a NAS file system is automatically purchased and mounted to the vSwitch in the VPC by default.
        '''
        result = self._values.get("nas_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def package_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property packageType: The type of the deployment package.

        Valid values: FatJar, WAR, and Image.
        '''
        result = self._values.get("package_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def package_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property packageUrl: The URL of the deployment package.

        This parameter must be set for the applications
        that are deployed by using FatJar or WAR packages.
        Note The version of SDK for Java or Python must be 2.44.0 or later.
        '''
        result = self._values.get("package_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def package_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property packageVersion: The version of the deployment package.

        This parameter is required when the PackageType parameter is set to WAR or FatJar. You must specify a version.
        Note The version of SDK for Java or Python must be 2.44.0 or later.
        '''
        result = self._values.get("package_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def post_start(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PostStartProperty"]]:
        '''Property postStart: The post-start script.

        For example, {"Exec": {"Command": ["ls", "/"]}}.
        '''
        result = self._values.get("post_start")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PostStartProperty"]], result)

    @builtins.property
    def pre_stop(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PreStopProperty"]]:
        '''Property preStop: The pre-stop script.

        For example, {"Exec": {"Command": ["ls", "/"]}}.
        '''
        result = self._values.get("pre_stop")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PreStopProperty"]], result)

    @builtins.property
    def readiness(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.ReadinessProperty"]]:
        '''Property readiness: The readiness check on the container.'''
        result = self._values.get("readiness")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.ReadinessProperty"]], result)

    @builtins.property
    def replicas(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property replicas: The number of instances for the application that you want to create.

        Default: 1
        '''
        result = self._values.get("replicas")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def repo_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property repoId: The ID of the image repository.'''
        result = self._values.get("repo_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def requests_cpu(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property requestsCpu: The maximum number of CPUs allowed for each application instance when the application is created.

        Unit: cores. The value 0 indicates no limit.
        '''
        result = self._values.get("requests_cpu")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def requests_mem(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property requestsMem: The maximum amount of memory allowed for each application instance when the application is created.

        Unit: MB. The value 0 indicates no limit.
        '''
        result = self._values.get("requests_mem")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def runtime_class_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property runtimeClassName: The type of the container runtime.

        This parameter is applicable only to clusters that use sandboxed containers.
        '''
        result = self._values.get("runtime_class_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def sls_configs(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.SlsConfigsProperty"]]]]:
        '''Property slsConfigs: The Logstore configurations.'''
        result = self._values.get("sls_configs")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.SlsConfigsProperty"]]]], result)

    @builtins.property
    def storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property storageType: Only SSD is supported.'''
        result = self._values.get("storage_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property timeout: The timeout interval of the change process.

        Unit: seconds.
        '''
        result = self._values.get("timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def uri_encoding(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property uriEncoding: The uniform resource identifier (URI) encoding scheme.

        Valid values: ISO-8859-1, GBK, GB2312, and UTF-8.
        Note If this parameter is not specified in application configuration, the default URI encoding
        scheme in the Tomcat container is applied.
        '''
        result = self._values.get("uri_encoding")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def use_body_encoding(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property useBodyEncoding: Specifies whether useBodyEncodingForURI is enabled.

        Note If this parameter is not specified in application configuration, the default value
        false is applied.
        '''
        result = self._values.get("use_body_encoding")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def web_container(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property webContainer: The version of the Tomcat container on which the deployment package of the application depends.

        This parameter is applicable to Spring Cloud and Apache Dubbo applications that are deployed by using WAR packages. This parameter is not supported when you deploy an application by using images.
        '''
        result = self._values.get("web_container")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def web_container_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.WebContainerConfigProperty"]]:
        '''Property webContainerConfig: The Tomcat container configuration.'''
        result = self._values.get("web_container_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.WebContainerConfigProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "K8sApplicationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class K8sCluster(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.K8sCluster",
):
    '''A ROS resource type:  ``ALIYUN::EDAS::K8sCluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["K8sClusterProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::K8sCluster``.

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
                props: typing.Union[K8sClusterProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrClusterName")
    def attr_cluster_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterName: The name of the cluster.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterName"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterType: The type of the cluster: 2: ECS cluster 5: Container Service K8s cluster or Serverless K8s cluster.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrCsClusterId")
    def attr_cs_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute CsClusterId: The ID of the K8s cluster.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCsClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkMode")
    def attr_network_mode(self) -> ros_cdk_core.IResolvable:
        '''Attribute NetworkMode: Network node: 1: Classic network 2: VPC.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNetworkMode"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeNum")
    def attr_node_num(self) -> ros_cdk_core.IResolvable:
        '''Attribute NodeNum: Number of nodes.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNodeNum"))

    @builtins.property
    @jsii.member(jsii_name="attrSubNetCidr")
    def attr_sub_net_cidr(self) -> ros_cdk_core.IResolvable:
        '''Attribute SubNetCidr: Sub net CIDR.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSubNetCidr"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcId: The ID of the cluster.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVswitchId")
    def attr_vswitch_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VswitchId: The ID of the cluster.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVswitchId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.K8sClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "cs_cluster_id": "csClusterId",
        "enable_asm": "enableAsm",
        "namespace_id": "namespaceId",
    },
)
class K8sClusterProps:
    def __init__(
        self,
        *,
        cs_cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        enable_asm: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        namespace_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::K8sCluster``.

        :param cs_cluster_id: Property csClusterId: The ID of the CS cluster.
        :param enable_asm: Property enableAsm: Whether enable ASM.
        :param namespace_id: Property namespaceId: The ID of the namespace to which the cluster that you want to import belongs.
        '''
        if __debug__:
            def stub(
                *,
                cs_cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                enable_asm: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                namespace_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument cs_cluster_id", value=cs_cluster_id, expected_type=type_hints["cs_cluster_id"])
            check_type(argname="argument enable_asm", value=enable_asm, expected_type=type_hints["enable_asm"])
            check_type(argname="argument namespace_id", value=namespace_id, expected_type=type_hints["namespace_id"])
        self._values: typing.Dict[str, typing.Any] = {
            "cs_cluster_id": cs_cluster_id,
        }
        if enable_asm is not None:
            self._values["enable_asm"] = enable_asm
        if namespace_id is not None:
            self._values["namespace_id"] = namespace_id

    @builtins.property
    def cs_cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property csClusterId: The ID of the CS cluster.'''
        result = self._values.get("cs_cluster_id")
        assert result is not None, "Required property 'cs_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def enable_asm(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property enableAsm: Whether enable ASM.'''
        result = self._values.get("enable_asm")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def namespace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property namespaceId: The ID of the namespace to which the cluster that you want to import belongs.'''
        result = self._values.get("namespace_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "K8sClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class K8sSlbBinding(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.K8sSlbBinding",
):
    '''A ROS resource type:  ``ALIYUN::EDAS::K8sSlbBinding``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["K8sSlbBindingProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::K8sSlbBinding``.

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
                props: typing.Union[K8sSlbBindingProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrAddress")
    def attr_address(self) -> ros_cdk_core.IResolvable:
        '''Attribute Address: The address of load balancer instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AppId: The ID of the application.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property
    @jsii.member(jsii_name="attrChangeOrderId")
    def attr_change_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ChangeOrderId: The ID of the change process.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrChangeOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute LoadBalancerId: The ID of load balancer instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerName")
    def attr_load_balancer_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute LoadBalancerName: The name of load balancer instance defined in EDAS.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.K8sSlbBindingProps",
    jsii_struct_bases=[],
    name_mapping={
        "app_id": "appId",
        "cluster_id": "clusterId",
        "service_port_infos": "servicePortInfos",
        "type": "type",
        "load_balancer_id": "loadBalancerId",
        "scheduler": "scheduler",
        "specification": "specification",
    },
)
class K8sSlbBindingProps:
    def __init__(
        self,
        *,
        app_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        service_port_infos: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sSlbBinding.ServicePortInfosProperty", typing.Dict[str, typing.Any]]]]],
        type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        load_balancer_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        scheduler: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        specification: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::K8sSlbBinding``.

        :param app_id: Property appId: The ID of the application.
        :param cluster_id: Property clusterId: The ID of the cluster.
        :param service_port_infos: Property servicePortInfos: The information about the ports.
        :param type: Property type: The type of the SLB instance. Valid values: internet and intranet.
        :param load_balancer_id: Property loadBalancerId: The ID of the load balancer instance. If you leave this parameter empty, Enterprise Distributed Application Service (EDAS) automatically purchases an SLB instance.
        :param scheduler: Property scheduler: The scheduling algorithm. Valid values: wrr: Backend servers that have higher weights receive more requests than those that have lower weights. rr: Requests are distributed to backend servers in sequence. Default value: rr
        :param specification: Property specification: The specification of the load balancer instance.
        '''
        if __debug__:
            def stub(
                *,
                app_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                service_port_infos: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sSlbBinding.ServicePortInfosProperty, typing.Dict[str, typing.Any]]]]],
                type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                load_balancer_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                scheduler: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                specification: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument app_id", value=app_id, expected_type=type_hints["app_id"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument service_port_infos", value=service_port_infos, expected_type=type_hints["service_port_infos"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument scheduler", value=scheduler, expected_type=type_hints["scheduler"])
            check_type(argname="argument specification", value=specification, expected_type=type_hints["specification"])
        self._values: typing.Dict[str, typing.Any] = {
            "app_id": app_id,
            "cluster_id": cluster_id,
            "service_port_infos": service_port_infos,
            "type": type,
        }
        if load_balancer_id is not None:
            self._values["load_balancer_id"] = load_balancer_id
        if scheduler is not None:
            self._values["scheduler"] = scheduler
        if specification is not None:
            self._values["specification"] = specification

    @builtins.property
    def app_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property appId: The ID of the application.'''
        result = self._values.get("app_id")
        assert result is not None, "Required property 'app_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property clusterId: The ID of the cluster.'''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def service_port_infos(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sSlbBinding.ServicePortInfosProperty"]]]:
        '''Property servicePortInfos: The information about the ports.'''
        result = self._values.get("service_port_infos")
        assert result is not None, "Required property 'service_port_infos' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sSlbBinding.ServicePortInfosProperty"]]], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property type: The type of the SLB instance.

        Valid values: internet and intranet.
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property loadBalancerId: The ID of the load balancer instance.

        If you leave this parameter empty, Enterprise Distributed Application Service (EDAS) automatically purchases an SLB instance.
        '''
        result = self._values.get("load_balancer_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def scheduler(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property scheduler: The scheduling algorithm.

        Valid values:
        wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
        rr: Requests are distributed to backend servers in sequence.
        Default value: rr
        '''
        result = self._values.get("scheduler")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def specification(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property specification: The specification of the load balancer instance.'''
        result = self._values.get("specification")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "K8sSlbBindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosApplication(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.RosApplication",
):
    '''A ROS template type:  ``ALIYUN::EDAS::Application``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosApplicationProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::Application``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosApplicationProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AppId: Application Id, a unique identifier EDAS application
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Port: Application port
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="applicationName")
    def application_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters)
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "applicationName"))

    @application_name.setter
    def application_name(
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
        jsii.set(self, "applicationName", value)

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterId: Cluster ID of ECS application
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
    @jsii.member(jsii_name="buildPackId")
    def build_pack_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition). When creating HSF application, this parameter must be specified
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "buildPackId"))

    @build_pack_id.setter
    def build_pack_id(
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
        jsii.set(self, "buildPackId", value)

    @builtins.property
    @jsii.member(jsii_name="componentIds")
    def component_ids(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo
        Application required) or standard Java application (jar package format Spring Boot / Spring Cloud applications require) you need to specify when the operating environment. Commonly used application component ID and meaning:
        4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
        1.7.x
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "componentIds"))

    @component_ids.setter
    def component_ids(
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
        jsii.set(self, "componentIds", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Descriptive information
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
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
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="ecuInfo")
    def ecu_info(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id
        Interface to obtain).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "ecuInfo"))

    @ecu_info.setter
    def ecu_info(
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
        jsii.set(self, "ecuInfo", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckUrl")
    def health_check_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: healthCheckUrl: Application Health Check URL
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "healthCheckUrl"))

    @health_check_url.setter
    def health_check_url(
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
        jsii.set(self, "healthCheckUrl", value)

    @builtins.property
    @jsii.member(jsii_name="logicalRegionId")
    def logical_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: logicalRegionId: Namespace ID
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "logicalRegionId"))

    @logical_region_id.setter
    def logical_region_id(
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
        jsii.set(self, "logicalRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="packageType")
    def package_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: packageType: Application packet format, possible values: war or jar
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "packageType"))

    @package_type.setter
    def package_type(
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
        jsii.set(self, "packageType", value)

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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.RosApplicationProps",
    jsii_struct_bases=[],
    name_mapping={
        "application_name": "applicationName",
        "cluster_id": "clusterId",
        "build_pack_id": "buildPackId",
        "component_ids": "componentIds",
        "description": "description",
        "ecu_info": "ecuInfo",
        "health_check_url": "healthCheckUrl",
        "logical_region_id": "logicalRegionId",
        "package_type": "packageType",
        "resource_group_id": "resourceGroupId",
    },
)
class RosApplicationProps:
    def __init__(
        self,
        *,
        application_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        build_pack_id: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        component_ids: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ecu_info: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        health_check_url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        logical_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        package_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::Application``.

        :param application_name: 
        :param cluster_id: 
        :param build_pack_id: 
        :param component_ids: 
        :param description: 
        :param ecu_info: 
        :param health_check_url: 
        :param logical_region_id: 
        :param package_type: 
        :param resource_group_id: 
        '''
        if __debug__:
            def stub(
                *,
                application_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                build_pack_id: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                component_ids: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ecu_info: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                health_check_url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                logical_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                package_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument application_name", value=application_name, expected_type=type_hints["application_name"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument build_pack_id", value=build_pack_id, expected_type=type_hints["build_pack_id"])
            check_type(argname="argument component_ids", value=component_ids, expected_type=type_hints["component_ids"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument ecu_info", value=ecu_info, expected_type=type_hints["ecu_info"])
            check_type(argname="argument health_check_url", value=health_check_url, expected_type=type_hints["health_check_url"])
            check_type(argname="argument logical_region_id", value=logical_region_id, expected_type=type_hints["logical_region_id"])
            check_type(argname="argument package_type", value=package_type, expected_type=type_hints["package_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[str, typing.Any] = {
            "application_name": application_name,
            "cluster_id": cluster_id,
        }
        if build_pack_id is not None:
            self._values["build_pack_id"] = build_pack_id
        if component_ids is not None:
            self._values["component_ids"] = component_ids
        if description is not None:
            self._values["description"] = description
        if ecu_info is not None:
            self._values["ecu_info"] = ecu_info
        if health_check_url is not None:
            self._values["health_check_url"] = health_check_url
        if logical_region_id is not None:
            self._values["logical_region_id"] = logical_region_id
        if package_type is not None:
            self._values["package_type"] = package_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def application_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters)
        '''
        result = self._values.get("application_name")
        assert result is not None, "Required property 'application_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterId: Cluster ID of ECS application
        '''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def build_pack_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition). When creating HSF application, this parameter must be specified
        '''
        result = self._values.get("build_pack_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def component_ids(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo
        Application required) or standard Java application (jar package format Spring Boot / Spring Cloud applications require) you need to specify when the operating environment. Commonly used application component ID and meaning:
        4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
        1.7.x
        '''
        result = self._values.get("component_ids")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Descriptive information
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ecu_info(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id
        Interface to obtain).
        '''
        result = self._values.get("ecu_info")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: healthCheckUrl: Application Health Check URL
        '''
        result = self._values.get("health_check_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def logical_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: logicalRegionId: Namespace ID
        '''
        result = self._values.get("logical_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def package_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: packageType: Application packet format, possible values: war or jar
        '''
        result = self._values.get("package_type")
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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosApplicationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCluster(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.RosCluster",
):
    '''A ROS template type:  ``ALIYUN::EDAS::Cluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::Cluster``.

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
        :Attribute: ClusterId: Cluster ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterName")
    def attr_cluster_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterName: Cluster name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterName"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterType: Cluster type
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrIaasProvider")
    def attr_iaas_provider(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IaasProvider: Provider
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIaasProvider"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="clusterName")
    def cluster_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterName: Cluster name
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
    def cluster_type(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterType: Cluster type. 1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "clusterType"))

    @cluster_type.setter
    def cluster_type(
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
    @jsii.member(jsii_name="networkMode")
    def network_mode(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: networkMode: Network Type. 1- classic network, 2-VPC
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "networkMode"))

    @network_mode.setter
    def network_mode(
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
        jsii.set(self, "networkMode", value)

    @builtins.property
    @jsii.member(jsii_name="logicalRegionId")
    def logical_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "logicalRegionId"))

    @logical_region_id.setter
    def logical_region_id(
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
        jsii.set(self, "logicalRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="oversoldFactor")
    def oversold_factor(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: oversoldFactor: Docker CPU cluster oversold. Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "oversoldFactor"))

    @oversold_factor.setter
    def oversold_factor(
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
        jsii.set(self, "oversoldFactor", value)

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
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: VPC network ID. If network selection VPC, this parameter Required
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


class RosClusterMember(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.RosClusterMember",
):
    '''A ROS template type:  ``ALIYUN::EDAS::ClusterMember``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterMemberProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::ClusterMember``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosClusterMemberProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrClusterMemberIds")
    def attr_cluster_member_ids(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterMemberIds: Cluster member IDs corresponding to the ECS instance IDs.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterMemberIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceIds: ECS instance IDs.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterId: Cluster ID to import ECS instance
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
    @jsii.member(jsii_name="instanceIds")
    def instance_ids(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: instanceIds: ECS instance ID list to import.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], jsii.get(self, "instanceIds"))

    @instance_ids.setter
    def instance_ids(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceIds", value)

    @builtins.property
    @jsii.member(jsii_name="password")
    def password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: password: Password ECS hosts need to import (ECS settings can continue to use purchased)
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "password"))

    @password.setter
    def password(
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
        jsii.set(self, "password", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.RosClusterMemberProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "instance_ids": "instanceIds",
        "password": "password",
    },
)
class RosClusterMemberProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_ids: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::ClusterMember``.

        :param cluster_id: 
        :param instance_ids: 
        :param password: 
        '''
        if __debug__:
            def stub(
                *,
                cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                instance_ids: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
                password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument instance_ids", value=instance_ids, expected_type=type_hints["instance_ids"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_id": cluster_id,
            "instance_ids": instance_ids,
            "password": password,
        }

    @builtins.property
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterId: Cluster ID to import ECS instance
        '''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_ids(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: instanceIds: ECS instance ID list to import.
        '''
        result = self._values.get("instance_ids")
        assert result is not None, "Required property 'instance_ids' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    @builtins.property
    def password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: password: Password ECS hosts need to import (ECS settings can continue to use purchased)
        '''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterMemberProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.RosClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_name": "clusterName",
        "cluster_type": "clusterType",
        "network_mode": "networkMode",
        "logical_region_id": "logicalRegionId",
        "oversold_factor": "oversoldFactor",
        "resource_group_id": "resourceGroupId",
        "vpc_id": "vpcId",
    },
)
class RosClusterProps:
    def __init__(
        self,
        *,
        cluster_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_type: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        network_mode: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        logical_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        oversold_factor: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::Cluster``.

        :param cluster_name: 
        :param cluster_type: 
        :param network_mode: 
        :param logical_region_id: 
        :param oversold_factor: 
        :param resource_group_id: 
        :param vpc_id: 
        '''
        if __debug__:
            def stub(
                *,
                cluster_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                cluster_type: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                network_mode: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                logical_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                oversold_factor: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument cluster_name", value=cluster_name, expected_type=type_hints["cluster_name"])
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument network_mode", value=network_mode, expected_type=type_hints["network_mode"])
            check_type(argname="argument logical_region_id", value=logical_region_id, expected_type=type_hints["logical_region_id"])
            check_type(argname="argument oversold_factor", value=oversold_factor, expected_type=type_hints["oversold_factor"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_name": cluster_name,
            "cluster_type": cluster_type,
            "network_mode": network_mode,
        }
        if logical_region_id is not None:
            self._values["logical_region_id"] = logical_region_id
        if oversold_factor is not None:
            self._values["oversold_factor"] = oversold_factor
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def cluster_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterName: Cluster name
        '''
        result = self._values.get("cluster_name")
        assert result is not None, "Required property 'cluster_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_type(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterType: Cluster type. 1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
        '''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def network_mode(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: networkMode: Network Type. 1- classic network, 2-VPC
        '''
        result = self._values.get("network_mode")
        assert result is not None, "Required property 'network_mode' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def logical_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier)
        '''
        result = self._values.get("logical_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def oversold_factor(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: oversoldFactor: Docker CPU cluster oversold. Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
        '''
        result = self._values.get("oversold_factor")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: VPC network ID. If network selection VPC, this parameter Required
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDeployGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.RosDeployGroup",
):
    '''A ROS template type:  ``ALIYUN::EDAS::DeployGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosDeployGroupProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::DeployGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosDeployGroupProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AppId: Application ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: GroupName: Deploy group name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Id: Deploy group ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="appId")
    def app_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: appId: Application ID
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "appId"))

    @app_id.setter
    def app_id(
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
        jsii.set(self, "appId", value)

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
    @jsii.member(jsii_name="groupName")
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupName: Group name, maximum length of 64.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
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
        jsii.set(self, "groupName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.RosDeployGroupProps",
    jsii_struct_bases=[],
    name_mapping={"app_id": "appId", "group_name": "groupName"},
)
class RosDeployGroupProps:
    def __init__(
        self,
        *,
        app_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::DeployGroup``.

        :param app_id: 
        :param group_name: 
        '''
        if __debug__:
            def stub(
                *,
                app_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument app_id", value=app_id, expected_type=type_hints["app_id"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
        self._values: typing.Dict[str, typing.Any] = {
            "app_id": app_id,
            "group_name": group_name,
        }

    @builtins.property
    def app_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: appId: Application ID
        '''
        result = self._values.get("app_id")
        assert result is not None, "Required property 'app_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupName: Group name, maximum length of 64.
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDeployGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosK8sApplication(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication",
):
    '''A ROS template type:  ``ALIYUN::EDAS::K8sApplication``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosK8sApplicationProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::K8sApplication``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosK8sApplicationProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AppId: The ID of the application.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property
    @jsii.member(jsii_name="attrAppName")
    def attr_app_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AppName: The name of the application.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppName"))

    @builtins.property
    @jsii.member(jsii_name="attrChangeOrderId")
    def attr_change_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ChangeOrderId: The ID of the change process.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrChangeOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterId: The cluster ID of the application.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrCsClusterId")
    def attr_cs_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CsClusterId: The K8s cluster ID of the application.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCsClusterId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="appName")
    def app_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        appName: The name of the application. The name must start with a letter and can contain digits,
        letters, and hyphens (-). It can be up to 36 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "appName"))

    @app_name.setter
    def app_name(
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
        jsii.set(self, "appName", value)

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        clusterId: The cluster ID. You can query the cluster ID by calling the ListCluster operation.
        For more information, see ListCluster.
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
    @jsii.member(jsii_name="applicationDescription")
    def application_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: applicationDescription: The description of the application.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "applicationDescription"))

    @application_description.setter
    def application_description(
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
        jsii.set(self, "applicationDescription", value)

    @builtins.property
    @jsii.member(jsii_name="command")
    def command(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: command: The command that is specified. If it is specified, it replaces the startup command in the image when the image is started.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "command"))

    @command.setter
    def command(
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
        jsii.set(self, "command", value)

    @builtins.property
    @jsii.member(jsii_name="commandArgs")
    def command_args(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.CommandArgsProperty"]]]]:
        '''
        :Property: commandArgs: The collection of commands. For example, [{"argument":"-c"},{"argument":"test"}], where -c and test are two parameters that can be set.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.CommandArgsProperty"]]]], jsii.get(self, "commandArgs"))

    @command_args.setter
    def command_args(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.CommandArgsProperty"]]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.CommandArgsProperty]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "commandArgs", value)

    @builtins.property
    @jsii.member(jsii_name="deployAcrossNodes")
    def deploy_across_nodes(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deployAcrossNodes: Specifies whether to distribute application instances to multiple nodes. The value true indicates yes, whereas other values indicate no.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "deployAcrossNodes"))

    @deploy_across_nodes.setter
    def deploy_across_nodes(
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
        jsii.set(self, "deployAcrossNodes", value)

    @builtins.property
    @jsii.member(jsii_name="deployAcrossZones")
    def deploy_across_zones(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deployAcrossZones: Specifies whether to distribute application instances to multiple zones. The value true indicates yes, whereas other values indicate no.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "deployAcrossZones"))

    @deploy_across_zones.setter
    def deploy_across_zones(
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
        jsii.set(self, "deployAcrossZones", value)

    @builtins.property
    @jsii.member(jsii_name="edasContainerVersion")
    def edas_container_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        edasContainerVersion: The version of EDAS Container on which the deployment package of the application depends.
        Note This parameter is not supported when you deploy an application by using images.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "edasContainerVersion"))

    @edas_container_version.setter
    def edas_container_version(
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
        jsii.set(self, "edasContainerVersion", value)

    @builtins.property
    @jsii.member(jsii_name="enableAhas")
    def enable_ahas(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: enableAhas: Specifies whether to enable access to Application High Availability Service (AHAS).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "enableAhas"))

    @enable_ahas.setter
    def enable_ahas(
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
        jsii.set(self, "enableAhas", value)

    @builtins.property
    @jsii.member(jsii_name="envs")
    def envs(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.EnvsProperty"]]]]:
        '''
        :Property: envs: The collection of deployment environment variables. For example, [{"Name":"x","Value":"y"},{"Name":"x2","Value":"y2"}].
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.EnvsProperty"]]]], jsii.get(self, "envs"))

    @envs.setter
    def envs(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.EnvsProperty"]]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.EnvsProperty]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "envs", value)

    @builtins.property
    @jsii.member(jsii_name="imageUrl")
    def image_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: imageUrl: The image URL. When PackageType is set to Image, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "imageUrl"))

    @image_url.setter
    def image_url(
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
        jsii.set(self, "imageUrl", value)

    @builtins.property
    @jsii.member(jsii_name="internetSlbId")
    def internet_slb_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: internetSlbId: The ID of the Internet-facing SLB instance. If this parameter is not specified, EDAS automatically purchases a new SLB instance for you.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "internetSlbId"))

    @internet_slb_id.setter
    def internet_slb_id(
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
        jsii.set(self, "internetSlbId", value)

    @builtins.property
    @jsii.member(jsii_name="internetSlbPort")
    def internet_slb_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: internetSlbPort: The frontend port of the Internet-facing SLB instance. Valid values: 1 to 65535.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "internetSlbPort"))

    @internet_slb_port.setter
    def internet_slb_port(
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
        jsii.set(self, "internetSlbPort", value)

    @builtins.property
    @jsii.member(jsii_name="internetSlbProtocol")
    def internet_slb_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: internetSlbProtocol: The protocol of the Internet-facing SLB instance. Valid values: TCP, HTTP, and HTTPS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "internetSlbProtocol"))

    @internet_slb_protocol.setter
    def internet_slb_protocol(
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
        jsii.set(self, "internetSlbProtocol", value)

    @builtins.property
    @jsii.member(jsii_name="internetTargetPort")
    def internet_target_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        internetTargetPort: The backend port of the internal-facing SLB instance, which is also the service port of the application.
        Valid values: 1 to 65535.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "internetTargetPort"))

    @internet_target_port.setter
    def internet_target_port(
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
        jsii.set(self, "internetTargetPort", value)

    @builtins.property
    @jsii.member(jsii_name="intranetSlbId")
    def intranet_slb_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: intranetSlbId: The ID of the internal-facing SLB instance. If this parameter is not specified, Enterprise Distributed Application Service (EDAS) automatically purchases a new SLB instance for you.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "intranetSlbId"))

    @intranet_slb_id.setter
    def intranet_slb_id(
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
        jsii.set(self, "intranetSlbId", value)

    @builtins.property
    @jsii.member(jsii_name="intranetSlbPort")
    def intranet_slb_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: intranetSlbPort: The frontend port of the internal-facing SLB instance. Valid values: 1 to 65535.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "intranetSlbPort"))

    @intranet_slb_port.setter
    def intranet_slb_port(
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
        jsii.set(self, "intranetSlbPort", value)

    @builtins.property
    @jsii.member(jsii_name="intranetSlbProtocol")
    def intranet_slb_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: intranetSlbProtocol: The protocol of the internal-facing SLB instance. Valid values: TCP, HTTP, and HTTPS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "intranetSlbProtocol"))

    @intranet_slb_protocol.setter
    def intranet_slb_protocol(
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
        jsii.set(self, "intranetSlbProtocol", value)

    @builtins.property
    @jsii.member(jsii_name="intranetTargetPort")
    def intranet_target_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: intranetTargetPort: The backend port of the internal-facing Server Load Balancer (SLB) instance, which is also the service port of the application. Valid values: 1 to 65535.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "intranetTargetPort"))

    @intranet_target_port.setter
    def intranet_target_port(
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
        jsii.set(self, "intranetTargetPort", value)

    @builtins.property
    @jsii.member(jsii_name="isMultilingualApp")
    def is_multilingual_app(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: isMultilingualApp: Specifies whether the application is a multi-language application.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "isMultilingualApp"))

    @is_multilingual_app.setter
    def is_multilingual_app(
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
        jsii.set(self, "isMultilingualApp", value)

    @builtins.property
    @jsii.member(jsii_name="javaStartUpConfig")
    def java_start_up_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.JavaStartUpConfigProperty"]]:
        '''
        :Property:

        javaStartUpConfig: The configuration of Java startup parameters for a Java application. These startup parameters involve the memory, application, garbage collection (GC) policy, tools, service registration and discovery, and custom configurations. Proper parameter settings help reduce the GC overhead, shorten the server response time, and improve the throughput.
        The system automatically concatenates all startup values as the configuration of Java startup parameters for the application.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.JavaStartUpConfigProperty"]], jsii.get(self, "javaStartUpConfig"))

    @java_start_up_config.setter
    def java_start_up_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.JavaStartUpConfigProperty"]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.JavaStartUpConfigProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "javaStartUpConfig", value)

    @builtins.property
    @jsii.member(jsii_name="jdk")
    def jdk(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        jdk: The version of Java Development Kit (JDK) on which the deployment package of the application depends.
        Valid values: Open JDK 7 and Open JDK 8. This parameter is not supported when you deploy an application by using images.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "jdk"))

    @jdk.setter
    def jdk(
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
        jsii.set(self, "jdk", value)

    @builtins.property
    @jsii.member(jsii_name="limitCpu")
    def limit_cpu(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        limitCpu: The maximum number of CPUs allowed for each application instance when the application
        is running. Unit: cores.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "limitCpu"))

    @limit_cpu.setter
    def limit_cpu(
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
        jsii.set(self, "limitCpu", value)

    @builtins.property
    @jsii.member(jsii_name="limitMem")
    def limit_mem(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: limitMem: The maximum amount of memory allowed for each application instance when the application is running. Unit: MB.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "limitMem"))

    @limit_mem.setter
    def limit_mem(
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
        jsii.set(self, "limitMem", value)

    @builtins.property
    @jsii.member(jsii_name="liveness")
    def liveness(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.LivenessProperty"]]:
        '''
        :Property: liveness: The liveness check on the container.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.LivenessProperty"]], jsii.get(self, "liveness"))

    @liveness.setter
    def liveness(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.LivenessProperty"]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.LivenessProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "liveness", value)

    @builtins.property
    @jsii.member(jsii_name="localVolume")
    def local_volume(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.LocalVolumeProperty"]]]]:
        '''
        :Property: localVolume: The configuration for mounting host files to the container where the application is running. For example, the value can be [{"type":"", "nodePath":"/localfiles", "mountPath":"/app/files"}, {"type":"Directory", "nodePath":"/mnt", "mountPath":"/app/storage"}].
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.LocalVolumeProperty"]]]], jsii.get(self, "localVolume"))

    @local_volume.setter
    def local_volume(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.LocalVolumeProperty"]]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.LocalVolumeProperty]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "localVolume", value)

    @builtins.property
    @jsii.member(jsii_name="logicalRegionId")
    def logical_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: logicalRegionId: The ID of the EDAS namespace. This parameter is required for a non-default namespace.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "logicalRegionId"))

    @logical_region_id.setter
    def logical_region_id(
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
        jsii.set(self, "logicalRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="mountDescs")
    def mount_descs(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.MountDescsProperty"]]]]:
        '''
        :Property: mountDescs: The description of the NAS mounting configuration. For example, the value can be [{"NasPath": "/k8s","MountPath": "/mnt"}, {"NasPath": "/files", "MountPath": "/app/files"}].
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.MountDescsProperty"]]]], jsii.get(self, "mountDescs"))

    @mount_descs.setter
    def mount_descs(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.MountDescsProperty"]]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.MountDescsProperty]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mountDescs", value)

    @builtins.property
    @jsii.member(jsii_name="namespace")
    def namespace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: namespace: The namespace of the Kubernetes cluster. This parameter determines the Kubernetes namespace where your application is deployed. By default, this parameter is set to default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "namespace"))

    @namespace.setter
    def namespace(
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
        jsii.set(self, "namespace", value)

    @builtins.property
    @jsii.member(jsii_name="nasId")
    def nas_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        nasId: The ID of the Network Attached Storage (NAS) file system mounted to the container where the application is running. The NAS file system must be in the same region as the cluster. The NAS file system must have an available mount target, or have a mount
        target on the vSwitch in the virtual private cloud (VPC) where the application is located. If this parameter is not specified and the mountDescs field exists, a NAS file system is automatically purchased and mounted to the vSwitch in the VPC by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "nasId"))

    @nas_id.setter
    def nas_id(
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
        jsii.set(self, "nasId", value)

    @builtins.property
    @jsii.member(jsii_name="packageType")
    def package_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: packageType: The type of the deployment package. Valid values: FatJar, WAR, and Image.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "packageType"))

    @package_type.setter
    def package_type(
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
        jsii.set(self, "packageType", value)

    @builtins.property
    @jsii.member(jsii_name="packageUrl")
    def package_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        packageUrl: The URL of the deployment package. This parameter must be set for the applications
        that are deployed by using FatJar or WAR packages.
        Note The version of SDK for Java or Python must be 2.44.0 or later.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "packageUrl"))

    @package_url.setter
    def package_url(
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
        jsii.set(self, "packageUrl", value)

    @builtins.property
    @jsii.member(jsii_name="packageVersion")
    def package_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        packageVersion: The version of the deployment package. This parameter is required when the PackageType parameter is set to WAR or FatJar. You must specify a version.
        Note The version of SDK for Java or Python must be 2.44.0 or later.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "packageVersion"))

    @package_version.setter
    def package_version(
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
        jsii.set(self, "packageVersion", value)

    @builtins.property
    @jsii.member(jsii_name="postStart")
    def post_start(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PostStartProperty"]]:
        '''
        :Property: postStart: The post-start script. For example, {"Exec": {"Command": ["ls", "/"]}}.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PostStartProperty"]], jsii.get(self, "postStart"))

    @post_start.setter
    def post_start(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PostStartProperty"]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.PostStartProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "postStart", value)

    @builtins.property
    @jsii.member(jsii_name="preStop")
    def pre_stop(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PreStopProperty"]]:
        '''
        :Property: preStop: The pre-stop script. For example, {"Exec": {"Command": ["ls", "/"]}}.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PreStopProperty"]], jsii.get(self, "preStop"))

    @pre_stop.setter
    def pre_stop(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PreStopProperty"]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.PreStopProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "preStop", value)

    @builtins.property
    @jsii.member(jsii_name="readiness")
    def readiness(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.ReadinessProperty"]]:
        '''
        :Property: readiness: The readiness check on the container.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.ReadinessProperty"]], jsii.get(self, "readiness"))

    @readiness.setter
    def readiness(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.ReadinessProperty"]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.ReadinessProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "readiness", value)

    @builtins.property
    @jsii.member(jsii_name="replicas")
    def replicas(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: replicas: The number of instances for the application that you want to create. Default: 1
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "replicas"))

    @replicas.setter
    def replicas(
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
        jsii.set(self, "replicas", value)

    @builtins.property
    @jsii.member(jsii_name="repoId")
    def repo_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: repoId: The ID of the image repository.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "repoId"))

    @repo_id.setter
    def repo_id(
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
        jsii.set(self, "repoId", value)

    @builtins.property
    @jsii.member(jsii_name="requestsCpu")
    def requests_cpu(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: requestsCpu: The maximum number of CPUs allowed for each application instance when the application is created. Unit: cores. The value 0 indicates no limit.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "requestsCpu"))

    @requests_cpu.setter
    def requests_cpu(
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
        jsii.set(self, "requestsCpu", value)

    @builtins.property
    @jsii.member(jsii_name="requestsMem")
    def requests_mem(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        requestsMem: The maximum amount of memory allowed for each application instance when the application
        is created. Unit: MB. The value 0 indicates no limit.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "requestsMem"))

    @requests_mem.setter
    def requests_mem(
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
        jsii.set(self, "requestsMem", value)

    @builtins.property
    @jsii.member(jsii_name="runtimeClassName")
    def runtime_class_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: runtimeClassName: The type of the container runtime. This parameter is applicable only to clusters that use sandboxed containers.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "runtimeClassName"))

    @runtime_class_name.setter
    def runtime_class_name(
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
        jsii.set(self, "runtimeClassName", value)

    @builtins.property
    @jsii.member(jsii_name="slsConfigs")
    def sls_configs(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.SlsConfigsProperty"]]]]:
        '''
        :Property: slsConfigs: The Logstore configurations.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.SlsConfigsProperty"]]]], jsii.get(self, "slsConfigs"))

    @sls_configs.setter
    def sls_configs(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.SlsConfigsProperty"]]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.SlsConfigsProperty]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "slsConfigs", value)

    @builtins.property
    @jsii.member(jsii_name="storageType")
    def storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: storageType: Only SSD is supported.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "storageType"))

    @storage_type.setter
    def storage_type(
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
        jsii.set(self, "storageType", value)

    @builtins.property
    @jsii.member(jsii_name="timeout")
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: timeout: The timeout interval of the change process. Unit: seconds.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "timeout"))

    @timeout.setter
    def timeout(
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
        jsii.set(self, "timeout", value)

    @builtins.property
    @jsii.member(jsii_name="uriEncoding")
    def uri_encoding(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        uriEncoding: The uniform resource identifier (URI) encoding scheme. Valid values: ISO-8859-1, GBK, GB2312, and UTF-8.
        Note If this parameter is not specified in application configuration, the default URI encoding
        scheme in the Tomcat container is applied.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "uriEncoding"))

    @uri_encoding.setter
    def uri_encoding(
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
        jsii.set(self, "uriEncoding", value)

    @builtins.property
    @jsii.member(jsii_name="useBodyEncoding")
    def use_body_encoding(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        useBodyEncoding: Specifies whether useBodyEncodingForURI is enabled.
        Note If this parameter is not specified in application configuration, the default value
        false is applied.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "useBodyEncoding"))

    @use_body_encoding.setter
    def use_body_encoding(
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
        jsii.set(self, "useBodyEncoding", value)

    @builtins.property
    @jsii.member(jsii_name="webContainer")
    def web_container(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: webContainer: The version of the Tomcat container on which the deployment package of the application depends. This parameter is applicable to Spring Cloud and Apache Dubbo applications that are deployed by using WAR packages. This parameter is not supported when you deploy an application by using images.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "webContainer"))

    @web_container.setter
    def web_container(
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
        jsii.set(self, "webContainer", value)

    @builtins.property
    @jsii.member(jsii_name="webContainerConfig")
    def web_container_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.WebContainerConfigProperty"]]:
        '''
        :Property: webContainerConfig: The Tomcat container configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.WebContainerConfigProperty"]], jsii.get(self, "webContainerConfig"))

    @web_container_config.setter
    def web_container_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.WebContainerConfigProperty"]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.WebContainerConfigProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "webContainerConfig", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.CommandArgsProperty",
        jsii_struct_bases=[],
        name_mapping={"argument": "argument"},
    )
    class CommandArgsProperty:
        def __init__(
            self,
            *,
            argument: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param argument: 
            '''
            if __debug__:
                def stub(
                    *,
                    argument: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument argument", value=argument, expected_type=type_hints["argument"])
            self._values: typing.Dict[str, typing.Any] = {}
            if argument is not None:
                self._values["argument"] = argument

        @builtins.property
        def argument(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: argument: undefined
            '''
            result = self._values.get("argument")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CommandArgsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.ConcGCThreadsProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class ConcGCThreadsProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConcGCThreadsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.CustomParamsProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class CustomParamsProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CustomParamsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.EnvsProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "value": "value"},
    )
    class EnvsProperty:
        def __init__(
            self,
            *,
            name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param value: 
            '''
            if __debug__:
                def stub(
                    *,
                    name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[str, typing.Any] = {}
            if name is not None:
                self._values["name"] = name
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: name: undefined
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            return "EnvsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.ExecProperty",
        jsii_struct_bases=[],
        name_mapping={"command": "command"},
    )
    class ExecProperty:
        def __init__(
            self,
            *,
            command: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        ) -> None:
            '''
            :param command: 
            '''
            if __debug__:
                def stub(
                    *,
                    command: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument command", value=command, expected_type=type_hints["command"])
            self._values: typing.Dict[str, typing.Any] = {}
            if command is not None:
                self._values["command"] = command

        @builtins.property
        def command(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property: command: undefined
            '''
            result = self._values.get("command")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ExecProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.G1HeapRegionSizeProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class G1HeapRegionSizeProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "G1HeapRegionSizeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.GCLogFilePathProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class GCLogFilePathProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "GCLogFilePathProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.GCLogFileSizeProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class GCLogFileSizeProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "GCLogFileSizeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.HeapDumpOnOutOfMemoryErrorProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class HeapDumpOnOutOfMemoryErrorProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HeapDumpOnOutOfMemoryErrorProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.HeapDumpPathProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class HeapDumpPathProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HeapDumpPathProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.HttpGetHttpHeadersProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "value": "value"},
    )
    class HttpGetHttpHeadersProperty:
        def __init__(
            self,
            *,
            name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param value: 
            '''
            if __debug__:
                def stub(
                    *,
                    name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[str, typing.Any] = {}
            if name is not None:
                self._values["name"] = name
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: name: undefined
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            return "HttpGetHttpHeadersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.HttpGetProperty",
        jsii_struct_bases=[],
        name_mapping={
            "host": "host",
            "http_headers": "httpHeaders",
            "path": "path",
            "port": "port",
            "scheme": "scheme",
        },
    )
    class HttpGetProperty:
        def __init__(
            self,
            *,
            host: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            http_headers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.HttpHeadersProperty", typing.Dict[str, typing.Any]]]]]] = None,
            path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            port: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            scheme: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param host: 
            :param http_headers: 
            :param path: 
            :param port: 
            :param scheme: 
            '''
            if __debug__:
                def stub(
                    *,
                    host: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    http_headers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.HttpHeadersProperty, typing.Dict[str, typing.Any]]]]]] = None,
                    path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    port: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    scheme: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument host", value=host, expected_type=type_hints["host"])
                check_type(argname="argument http_headers", value=http_headers, expected_type=type_hints["http_headers"])
                check_type(argname="argument path", value=path, expected_type=type_hints["path"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument scheme", value=scheme, expected_type=type_hints["scheme"])
            self._values: typing.Dict[str, typing.Any] = {}
            if host is not None:
                self._values["host"] = host
            if http_headers is not None:
                self._values["http_headers"] = http_headers
            if path is not None:
                self._values["path"] = path
            if port is not None:
                self._values["port"] = port
            if scheme is not None:
                self._values["scheme"] = scheme

        @builtins.property
        def host(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: host: undefined
            '''
            result = self._values.get("host")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def http_headers(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.HttpHeadersProperty"]]]]:
            '''
            :Property: httpHeaders: undefined
            '''
            result = self._values.get("http_headers")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.HttpHeadersProperty"]]]], result)

        @builtins.property
        def path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: path: undefined
            '''
            result = self._values.get("path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: port: undefined
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def scheme(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: scheme: undefined
            '''
            result = self._values.get("scheme")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HttpGetProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.HttpHeadersProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "value": "value"},
    )
    class HttpHeadersProperty:
        def __init__(
            self,
            *,
            name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param value: 
            '''
            if __debug__:
                def stub(
                    *,
                    name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[str, typing.Any] = {}
            if name is not None:
                self._values["name"] = name
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: name: undefined
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            return "HttpHeadersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.InitialHeapSizeProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class InitialHeapSizeProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InitialHeapSizeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.JavaStartUpConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "conc_gc_threads": "concGcThreads",
            "custom_params": "customParams",
            "g1_heap_region_size": "g1HeapRegionSize",
            "gc_log_file_path": "gcLogFilePath",
            "gc_log_file_size": "gcLogFileSize",
            "heap_dump_on_out_of_memory_error": "heapDumpOnOutOfMemoryError",
            "heap_dump_path": "heapDumpPath",
            "initial_heap_size": "initialHeapSize",
            "max_direct_memory_size": "maxDirectMemorySize",
            "max_heap_size": "maxHeapSize",
            "max_new_size": "maxNewSize",
            "max_perm_size": "maxPermSize",
            "nacos_use_cloud_namespace_parsing": "nacosUseCloudNamespaceParsing",
            "nacos_use_endpoint_parsing_rule": "nacosUseEndpointParsingRule",
            "new_ratio": "newRatio",
            "new_size": "newSize",
            "old_garbage_collector": "oldGarbageCollector",
            "parallel_gc_threads": "parallelGcThreads",
            "perm_size": "permSize",
            "print_gc": "printGc",
            "print_gc_date_stamps": "printGcDateStamps",
            "survivor_ratio": "survivorRatio",
            "thread_stack_size": "threadStackSize",
            "use_gc_log_file_rotation": "useGcLogFileRotation",
            "young_garbage_collector": "youngGarbageCollector",
        },
    )
    class JavaStartUpConfigProperty:
        def __init__(
            self,
            *,
            conc_gc_threads: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.ConcGCThreadsProperty", typing.Dict[str, typing.Any]]]] = None,
            custom_params: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.CustomParamsProperty", typing.Dict[str, typing.Any]]]] = None,
            g1_heap_region_size: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.G1HeapRegionSizeProperty", typing.Dict[str, typing.Any]]]] = None,
            gc_log_file_path: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.GCLogFilePathProperty", typing.Dict[str, typing.Any]]]] = None,
            gc_log_file_size: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.GCLogFileSizeProperty", typing.Dict[str, typing.Any]]]] = None,
            heap_dump_on_out_of_memory_error: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.HeapDumpOnOutOfMemoryErrorProperty", typing.Dict[str, typing.Any]]]] = None,
            heap_dump_path: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.HeapDumpPathProperty", typing.Dict[str, typing.Any]]]] = None,
            initial_heap_size: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.InitialHeapSizeProperty", typing.Dict[str, typing.Any]]]] = None,
            max_direct_memory_size: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.MaxDirectMemorySizeProperty", typing.Dict[str, typing.Any]]]] = None,
            max_heap_size: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.MaxHeapSizeProperty", typing.Dict[str, typing.Any]]]] = None,
            max_new_size: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.MaxNewSizeProperty", typing.Dict[str, typing.Any]]]] = None,
            max_perm_size: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.MaxPermSizeProperty", typing.Dict[str, typing.Any]]]] = None,
            nacos_use_cloud_namespace_parsing: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.NacosUseCloudNamespaceParsingProperty", typing.Dict[str, typing.Any]]]] = None,
            nacos_use_endpoint_parsing_rule: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.NacosUseEndpointParsingRuleProperty", typing.Dict[str, typing.Any]]]] = None,
            new_ratio: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.NewRatioProperty", typing.Dict[str, typing.Any]]]] = None,
            new_size: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.NewSizeProperty", typing.Dict[str, typing.Any]]]] = None,
            old_garbage_collector: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.OldGarbageCollectorProperty", typing.Dict[str, typing.Any]]]] = None,
            parallel_gc_threads: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.ParallelGCThreadsProperty", typing.Dict[str, typing.Any]]]] = None,
            perm_size: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.PermSizeProperty", typing.Dict[str, typing.Any]]]] = None,
            print_gc: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.PrintGCProperty", typing.Dict[str, typing.Any]]]] = None,
            print_gc_date_stamps: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.PrintGCDateStampsProperty", typing.Dict[str, typing.Any]]]] = None,
            survivor_ratio: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.SurvivorRatioProperty", typing.Dict[str, typing.Any]]]] = None,
            thread_stack_size: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.ThreadStackSizeProperty", typing.Dict[str, typing.Any]]]] = None,
            use_gc_log_file_rotation: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.UseGCLogFileRotationProperty", typing.Dict[str, typing.Any]]]] = None,
            young_garbage_collector: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.YoungGarbageCollectorProperty", typing.Dict[str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param conc_gc_threads: 
            :param custom_params: 
            :param g1_heap_region_size: 
            :param gc_log_file_path: 
            :param gc_log_file_size: 
            :param heap_dump_on_out_of_memory_error: 
            :param heap_dump_path: 
            :param initial_heap_size: 
            :param max_direct_memory_size: 
            :param max_heap_size: 
            :param max_new_size: 
            :param max_perm_size: 
            :param nacos_use_cloud_namespace_parsing: 
            :param nacos_use_endpoint_parsing_rule: 
            :param new_ratio: 
            :param new_size: 
            :param old_garbage_collector: 
            :param parallel_gc_threads: 
            :param perm_size: 
            :param print_gc: 
            :param print_gc_date_stamps: 
            :param survivor_ratio: 
            :param thread_stack_size: 
            :param use_gc_log_file_rotation: 
            :param young_garbage_collector: 
            '''
            if __debug__:
                def stub(
                    *,
                    conc_gc_threads: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.ConcGCThreadsProperty, typing.Dict[str, typing.Any]]]] = None,
                    custom_params: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.CustomParamsProperty, typing.Dict[str, typing.Any]]]] = None,
                    g1_heap_region_size: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.G1HeapRegionSizeProperty, typing.Dict[str, typing.Any]]]] = None,
                    gc_log_file_path: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.GCLogFilePathProperty, typing.Dict[str, typing.Any]]]] = None,
                    gc_log_file_size: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.GCLogFileSizeProperty, typing.Dict[str, typing.Any]]]] = None,
                    heap_dump_on_out_of_memory_error: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.HeapDumpOnOutOfMemoryErrorProperty, typing.Dict[str, typing.Any]]]] = None,
                    heap_dump_path: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.HeapDumpPathProperty, typing.Dict[str, typing.Any]]]] = None,
                    initial_heap_size: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.InitialHeapSizeProperty, typing.Dict[str, typing.Any]]]] = None,
                    max_direct_memory_size: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.MaxDirectMemorySizeProperty, typing.Dict[str, typing.Any]]]] = None,
                    max_heap_size: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.MaxHeapSizeProperty, typing.Dict[str, typing.Any]]]] = None,
                    max_new_size: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.MaxNewSizeProperty, typing.Dict[str, typing.Any]]]] = None,
                    max_perm_size: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.MaxPermSizeProperty, typing.Dict[str, typing.Any]]]] = None,
                    nacos_use_cloud_namespace_parsing: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.NacosUseCloudNamespaceParsingProperty, typing.Dict[str, typing.Any]]]] = None,
                    nacos_use_endpoint_parsing_rule: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.NacosUseEndpointParsingRuleProperty, typing.Dict[str, typing.Any]]]] = None,
                    new_ratio: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.NewRatioProperty, typing.Dict[str, typing.Any]]]] = None,
                    new_size: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.NewSizeProperty, typing.Dict[str, typing.Any]]]] = None,
                    old_garbage_collector: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.OldGarbageCollectorProperty, typing.Dict[str, typing.Any]]]] = None,
                    parallel_gc_threads: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.ParallelGCThreadsProperty, typing.Dict[str, typing.Any]]]] = None,
                    perm_size: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.PermSizeProperty, typing.Dict[str, typing.Any]]]] = None,
                    print_gc: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.PrintGCProperty, typing.Dict[str, typing.Any]]]] = None,
                    print_gc_date_stamps: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.PrintGCDateStampsProperty, typing.Dict[str, typing.Any]]]] = None,
                    survivor_ratio: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.SurvivorRatioProperty, typing.Dict[str, typing.Any]]]] = None,
                    thread_stack_size: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.ThreadStackSizeProperty, typing.Dict[str, typing.Any]]]] = None,
                    use_gc_log_file_rotation: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.UseGCLogFileRotationProperty, typing.Dict[str, typing.Any]]]] = None,
                    young_garbage_collector: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.YoungGarbageCollectorProperty, typing.Dict[str, typing.Any]]]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument conc_gc_threads", value=conc_gc_threads, expected_type=type_hints["conc_gc_threads"])
                check_type(argname="argument custom_params", value=custom_params, expected_type=type_hints["custom_params"])
                check_type(argname="argument g1_heap_region_size", value=g1_heap_region_size, expected_type=type_hints["g1_heap_region_size"])
                check_type(argname="argument gc_log_file_path", value=gc_log_file_path, expected_type=type_hints["gc_log_file_path"])
                check_type(argname="argument gc_log_file_size", value=gc_log_file_size, expected_type=type_hints["gc_log_file_size"])
                check_type(argname="argument heap_dump_on_out_of_memory_error", value=heap_dump_on_out_of_memory_error, expected_type=type_hints["heap_dump_on_out_of_memory_error"])
                check_type(argname="argument heap_dump_path", value=heap_dump_path, expected_type=type_hints["heap_dump_path"])
                check_type(argname="argument initial_heap_size", value=initial_heap_size, expected_type=type_hints["initial_heap_size"])
                check_type(argname="argument max_direct_memory_size", value=max_direct_memory_size, expected_type=type_hints["max_direct_memory_size"])
                check_type(argname="argument max_heap_size", value=max_heap_size, expected_type=type_hints["max_heap_size"])
                check_type(argname="argument max_new_size", value=max_new_size, expected_type=type_hints["max_new_size"])
                check_type(argname="argument max_perm_size", value=max_perm_size, expected_type=type_hints["max_perm_size"])
                check_type(argname="argument nacos_use_cloud_namespace_parsing", value=nacos_use_cloud_namespace_parsing, expected_type=type_hints["nacos_use_cloud_namespace_parsing"])
                check_type(argname="argument nacos_use_endpoint_parsing_rule", value=nacos_use_endpoint_parsing_rule, expected_type=type_hints["nacos_use_endpoint_parsing_rule"])
                check_type(argname="argument new_ratio", value=new_ratio, expected_type=type_hints["new_ratio"])
                check_type(argname="argument new_size", value=new_size, expected_type=type_hints["new_size"])
                check_type(argname="argument old_garbage_collector", value=old_garbage_collector, expected_type=type_hints["old_garbage_collector"])
                check_type(argname="argument parallel_gc_threads", value=parallel_gc_threads, expected_type=type_hints["parallel_gc_threads"])
                check_type(argname="argument perm_size", value=perm_size, expected_type=type_hints["perm_size"])
                check_type(argname="argument print_gc", value=print_gc, expected_type=type_hints["print_gc"])
                check_type(argname="argument print_gc_date_stamps", value=print_gc_date_stamps, expected_type=type_hints["print_gc_date_stamps"])
                check_type(argname="argument survivor_ratio", value=survivor_ratio, expected_type=type_hints["survivor_ratio"])
                check_type(argname="argument thread_stack_size", value=thread_stack_size, expected_type=type_hints["thread_stack_size"])
                check_type(argname="argument use_gc_log_file_rotation", value=use_gc_log_file_rotation, expected_type=type_hints["use_gc_log_file_rotation"])
                check_type(argname="argument young_garbage_collector", value=young_garbage_collector, expected_type=type_hints["young_garbage_collector"])
            self._values: typing.Dict[str, typing.Any] = {}
            if conc_gc_threads is not None:
                self._values["conc_gc_threads"] = conc_gc_threads
            if custom_params is not None:
                self._values["custom_params"] = custom_params
            if g1_heap_region_size is not None:
                self._values["g1_heap_region_size"] = g1_heap_region_size
            if gc_log_file_path is not None:
                self._values["gc_log_file_path"] = gc_log_file_path
            if gc_log_file_size is not None:
                self._values["gc_log_file_size"] = gc_log_file_size
            if heap_dump_on_out_of_memory_error is not None:
                self._values["heap_dump_on_out_of_memory_error"] = heap_dump_on_out_of_memory_error
            if heap_dump_path is not None:
                self._values["heap_dump_path"] = heap_dump_path
            if initial_heap_size is not None:
                self._values["initial_heap_size"] = initial_heap_size
            if max_direct_memory_size is not None:
                self._values["max_direct_memory_size"] = max_direct_memory_size
            if max_heap_size is not None:
                self._values["max_heap_size"] = max_heap_size
            if max_new_size is not None:
                self._values["max_new_size"] = max_new_size
            if max_perm_size is not None:
                self._values["max_perm_size"] = max_perm_size
            if nacos_use_cloud_namespace_parsing is not None:
                self._values["nacos_use_cloud_namespace_parsing"] = nacos_use_cloud_namespace_parsing
            if nacos_use_endpoint_parsing_rule is not None:
                self._values["nacos_use_endpoint_parsing_rule"] = nacos_use_endpoint_parsing_rule
            if new_ratio is not None:
                self._values["new_ratio"] = new_ratio
            if new_size is not None:
                self._values["new_size"] = new_size
            if old_garbage_collector is not None:
                self._values["old_garbage_collector"] = old_garbage_collector
            if parallel_gc_threads is not None:
                self._values["parallel_gc_threads"] = parallel_gc_threads
            if perm_size is not None:
                self._values["perm_size"] = perm_size
            if print_gc is not None:
                self._values["print_gc"] = print_gc
            if print_gc_date_stamps is not None:
                self._values["print_gc_date_stamps"] = print_gc_date_stamps
            if survivor_ratio is not None:
                self._values["survivor_ratio"] = survivor_ratio
            if thread_stack_size is not None:
                self._values["thread_stack_size"] = thread_stack_size
            if use_gc_log_file_rotation is not None:
                self._values["use_gc_log_file_rotation"] = use_gc_log_file_rotation
            if young_garbage_collector is not None:
                self._values["young_garbage_collector"] = young_garbage_collector

        @builtins.property
        def conc_gc_threads(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.ConcGCThreadsProperty"]]:
            '''
            :Property: concGcThreads: Number of threads concurrent gc will use.
            '''
            result = self._values.get("conc_gc_threads")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.ConcGCThreadsProperty"]], result)

        @builtins.property
        def custom_params(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.CustomParamsProperty"]]:
            '''
            :Property: customParams: If the preceding options cannot meet your requirements, you can use custom parameters. Separate parameters with spaces.
            '''
            result = self._values.get("custom_params")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.CustomParamsProperty"]], result)

        @builtins.property
        def g1_heap_region_size(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.G1HeapRegionSizeProperty"]]:
            '''
            :Property: g1HeapRegionSize: Size of the G1 regions.
            '''
            result = self._values.get("g1_heap_region_size")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.G1HeapRegionSizeProperty"]], result)

        @builtins.property
        def gc_log_file_path(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.GCLogFilePathProperty"]]:
            '''
            :Property: gcLogFilePath: GC log directory.
            '''
            result = self._values.get("gc_log_file_path")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.GCLogFilePathProperty"]], result)

        @builtins.property
        def gc_log_file_size(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.GCLogFileSizeProperty"]]:
            '''
            :Property: gcLogFileSize: GC log file size.
            '''
            result = self._values.get("gc_log_file_size")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.GCLogFileSizeProperty"]], result)

        @builtins.property
        def heap_dump_on_out_of_memory_error(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.HeapDumpOnOutOfMemoryErrorProperty"]]:
            '''
            :Property: heapDumpOnOutOfMemoryError: Whether dump memory when OOM occurs.
            '''
            result = self._values.get("heap_dump_on_out_of_memory_error")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.HeapDumpOnOutOfMemoryErrorProperty"]], result)

        @builtins.property
        def heap_dump_path(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.HeapDumpPathProperty"]]:
            '''
            :Property: heapDumpPath: Dump File Path.
            '''
            result = self._values.get("heap_dump_path")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.HeapDumpPathProperty"]], result)

        @builtins.property
        def initial_heap_size(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.InitialHeapSizeProperty"]]:
            '''
            :Property: initialHeapSize: The size of the initial heap. Unit: MB. The value 0 indicates that the size is unlimited.
            '''
            result = self._values.get("initial_heap_size")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.InitialHeapSizeProperty"]], result)

        @builtins.property
        def max_direct_memory_size(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.MaxDirectMemorySizeProperty"]]:
            '''
            :Property: maxDirectMemorySize: The maximum size of NIO direct memory. Unit: MB.
            '''
            result = self._values.get("max_direct_memory_size")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.MaxDirectMemorySizeProperty"]], result)

        @builtins.property
        def max_heap_size(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.MaxHeapSizeProperty"]]:
            '''
            :Property: maxHeapSize: The maximum heap size. Unit: MB. Value range: 0 to (0.85 x Available memory for ECS instances of the application)
            '''
            result = self._values.get("max_heap_size")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.MaxHeapSizeProperty"]], result)

        @builtins.property
        def max_new_size(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.MaxNewSizeProperty"]]:
            '''
            :Property: maxNewSize: The maximum size of young generation. Unit: MB. The value max_uintx indicates that no upper limit is specified for memory usage.
            '''
            result = self._values.get("max_new_size")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.MaxNewSizeProperty"]], result)

        @builtins.property
        def max_perm_size(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.MaxPermSizeProperty"]]:
            '''
            :Property: maxPermSize: The maximum size of permanent generation. Unit: MB.
            '''
            result = self._values.get("max_perm_size")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.MaxPermSizeProperty"]], result)

        @builtins.property
        def nacos_use_cloud_namespace_parsing(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.NacosUseCloudNamespaceParsingProperty"]]:
            '''
            :Property: nacosUseCloudNamespaceParsing: Whether enable automatic namespace parsing.
            '''
            result = self._values.get("nacos_use_cloud_namespace_parsing")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.NacosUseCloudNamespaceParsingProperty"]], result)

        @builtins.property
        def nacos_use_endpoint_parsing_rule(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.NacosUseEndpointParsingRuleProperty"]]:
            '''
            :Property: nacosUseEndpointParsingRule: Whether enable rule parsing.
            '''
            result = self._values.get("nacos_use_endpoint_parsing_rule")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.NacosUseEndpointParsingRuleProperty"]], result)

        @builtins.property
        def new_ratio(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.NewRatioProperty"]]:
            '''
            :Property: newRatio: Old/Young Generation Memory Size Ratio.
            '''
            result = self._values.get("new_ratio")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.NewRatioProperty"]], result)

        @builtins.property
        def new_size(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.NewSizeProperty"]]:
            '''
            :Property: newSize: Initial Young Generation Size (MB).
            '''
            result = self._values.get("new_size")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.NewSizeProperty"]], result)

        @builtins.property
        def old_garbage_collector(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.OldGarbageCollectorProperty"]]:
            '''
            :Property: oldGarbageCollector: It is used to configure the old generation garbage collector. You must configure the young generation garbage collector first.
            '''
            result = self._values.get("old_garbage_collector")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.OldGarbageCollectorProperty"]], result)

        @builtins.property
        def parallel_gc_threads(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.ParallelGCThreadsProperty"]]:
            '''
            :Property: parallelGcThreads: Number of parallel threads parallel gc will use.
            '''
            result = self._values.get("parallel_gc_threads")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.ParallelGCThreadsProperty"]], result)

        @builtins.property
        def perm_size(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PermSizeProperty"]]:
            '''
            :Property: permSize: Initial Permanent Generation Size (MB).
            '''
            result = self._values.get("perm_size")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PermSizeProperty"]], result)

        @builtins.property
        def print_gc(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PrintGCProperty"]]:
            '''
            :Property: printGc:
            '''
            result = self._values.get("print_gc")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PrintGCProperty"]], result)

        @builtins.property
        def print_gc_date_stamps(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PrintGCDateStampsProperty"]]:
            '''
            :Property: printGcDateStamps:
            '''
            result = self._values.get("print_gc_date_stamps")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PrintGCDateStampsProperty"]], result)

        @builtins.property
        def survivor_ratio(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.SurvivorRatioProperty"]]:
            '''
            :Property: survivorRatio: Eden/Survivor Memory Size Ratio.
            '''
            result = self._values.get("survivor_ratio")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.SurvivorRatioProperty"]], result)

        @builtins.property
        def thread_stack_size(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.ThreadStackSizeProperty"]]:
            '''
            :Property: threadStackSize: Thread stack size (KB).
            '''
            result = self._values.get("thread_stack_size")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.ThreadStackSizeProperty"]], result)

        @builtins.property
        def use_gc_log_file_rotation(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.UseGCLogFileRotationProperty"]]:
            '''
            :Property: useGcLogFileRotation:
            '''
            result = self._values.get("use_gc_log_file_rotation")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.UseGCLogFileRotationProperty"]], result)

        @builtins.property
        def young_garbage_collector(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.YoungGarbageCollectorProperty"]]:
            '''
            :Property: youngGarbageCollector: It is used to configure young generation garbage collector.
            '''
            result = self._values.get("young_garbage_collector")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.YoungGarbageCollectorProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "JavaStartUpConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.LivenessProperty",
        jsii_struct_bases=[],
        name_mapping={
            "exec": "exec",
            "failure_threshold": "failureThreshold",
            "http_get": "httpGet",
            "initial_delay_seconds": "initialDelaySeconds",
            "period_seconds": "periodSeconds",
            "success_threshold": "successThreshold",
            "tcp_socket": "tcpSocket",
            "timeout_seconds": "timeoutSeconds",
        },
    )
    class LivenessProperty:
        def __init__(
            self,
            *,
            exec: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.ExecProperty", typing.Dict[str, typing.Any]]]] = None,
            failure_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            http_get: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.HttpGetProperty", typing.Dict[str, typing.Any]]]] = None,
            initial_delay_seconds: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            period_seconds: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            success_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            tcp_socket: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.TcpSocketProperty", typing.Dict[str, typing.Any]]]] = None,
            timeout_seconds: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param exec: 
            :param failure_threshold: 
            :param http_get: 
            :param initial_delay_seconds: 
            :param period_seconds: 
            :param success_threshold: 
            :param tcp_socket: 
            :param timeout_seconds: 
            '''
            if __debug__:
                def stub(
                    *,
                    exec: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.ExecProperty, typing.Dict[str, typing.Any]]]] = None,
                    failure_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    http_get: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.HttpGetProperty, typing.Dict[str, typing.Any]]]] = None,
                    initial_delay_seconds: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    period_seconds: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    success_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    tcp_socket: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.TcpSocketProperty, typing.Dict[str, typing.Any]]]] = None,
                    timeout_seconds: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument exec", value=exec, expected_type=type_hints["exec"])
                check_type(argname="argument failure_threshold", value=failure_threshold, expected_type=type_hints["failure_threshold"])
                check_type(argname="argument http_get", value=http_get, expected_type=type_hints["http_get"])
                check_type(argname="argument initial_delay_seconds", value=initial_delay_seconds, expected_type=type_hints["initial_delay_seconds"])
                check_type(argname="argument period_seconds", value=period_seconds, expected_type=type_hints["period_seconds"])
                check_type(argname="argument success_threshold", value=success_threshold, expected_type=type_hints["success_threshold"])
                check_type(argname="argument tcp_socket", value=tcp_socket, expected_type=type_hints["tcp_socket"])
                check_type(argname="argument timeout_seconds", value=timeout_seconds, expected_type=type_hints["timeout_seconds"])
            self._values: typing.Dict[str, typing.Any] = {}
            if exec is not None:
                self._values["exec"] = exec
            if failure_threshold is not None:
                self._values["failure_threshold"] = failure_threshold
            if http_get is not None:
                self._values["http_get"] = http_get
            if initial_delay_seconds is not None:
                self._values["initial_delay_seconds"] = initial_delay_seconds
            if period_seconds is not None:
                self._values["period_seconds"] = period_seconds
            if success_threshold is not None:
                self._values["success_threshold"] = success_threshold
            if tcp_socket is not None:
                self._values["tcp_socket"] = tcp_socket
            if timeout_seconds is not None:
                self._values["timeout_seconds"] = timeout_seconds

        @builtins.property
        def exec(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.ExecProperty"]]:
            '''
            :Property: exec: undefined
            '''
            result = self._values.get("exec")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.ExecProperty"]], result)

        @builtins.property
        def failure_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: failureThreshold: undefined
            '''
            result = self._values.get("failure_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def http_get(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.HttpGetProperty"]]:
            '''
            :Property: httpGet: undefined
            '''
            result = self._values.get("http_get")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.HttpGetProperty"]], result)

        @builtins.property
        def initial_delay_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: initialDelaySeconds: undefined
            '''
            result = self._values.get("initial_delay_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def period_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: periodSeconds: undefined
            '''
            result = self._values.get("period_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def success_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: successThreshold: undefined
            '''
            result = self._values.get("success_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def tcp_socket(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.TcpSocketProperty"]]:
            '''
            :Property: tcpSocket: undefined
            '''
            result = self._values.get("tcp_socket")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.TcpSocketProperty"]], result)

        @builtins.property
        def timeout_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: timeoutSeconds: undefined
            '''
            result = self._values.get("timeout_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LivenessProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.LocalVolumeProperty",
        jsii_struct_bases=[],
        name_mapping={
            "mount_path": "mountPath",
            "node_path": "nodePath",
            "type": "type",
        },
    )
    class LocalVolumeProperty:
        def __init__(
            self,
            *,
            mount_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            node_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param mount_path: 
            :param node_path: 
            :param type: 
            '''
            if __debug__:
                def stub(
                    *,
                    mount_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    node_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument mount_path", value=mount_path, expected_type=type_hints["mount_path"])
                check_type(argname="argument node_path", value=node_path, expected_type=type_hints["node_path"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[str, typing.Any] = {}
            if mount_path is not None:
                self._values["mount_path"] = mount_path
            if node_path is not None:
                self._values["node_path"] = node_path
            if type is not None:
                self._values["type"] = type

        @builtins.property
        def mount_path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: mountPath: Specifies the path within the container.
            '''
            result = self._values.get("mount_path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def node_path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: nodePath: Specifies the host path.
            '''
            result = self._values.get("node_path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: type: Specifies the mounting type.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LocalVolumeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.MaxDirectMemorySizeProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class MaxDirectMemorySizeProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MaxDirectMemorySizeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.MaxHeapSizeProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class MaxHeapSizeProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MaxHeapSizeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.MaxNewSizeProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class MaxNewSizeProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MaxNewSizeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.MaxPermSizeProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class MaxPermSizeProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MaxPermSizeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.MountDescsProperty",
        jsii_struct_bases=[],
        name_mapping={"mount_path": "mountPath", "nas_path": "nasPath"},
    )
    class MountDescsProperty:
        def __init__(
            self,
            *,
            mount_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            nas_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param mount_path: 
            :param nas_path: 
            '''
            if __debug__:
                def stub(
                    *,
                    mount_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    nas_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument mount_path", value=mount_path, expected_type=type_hints["mount_path"])
                check_type(argname="argument nas_path", value=nas_path, expected_type=type_hints["nas_path"])
            self._values: typing.Dict[str, typing.Any] = {}
            if mount_path is not None:
                self._values["mount_path"] = mount_path
            if nas_path is not None:
                self._values["nas_path"] = nas_path

        @builtins.property
        def mount_path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: mountPath: Specifies the path to mount the file system to the container where the application is running.
            '''
            result = self._values.get("mount_path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def nas_path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: nasPath: Specifies the file storage path.
            '''
            result = self._values.get("nas_path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MountDescsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.NacosUseCloudNamespaceParsingProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class NacosUseCloudNamespaceParsingProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NacosUseCloudNamespaceParsingProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.NacosUseEndpointParsingRuleProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class NacosUseEndpointParsingRuleProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NacosUseEndpointParsingRuleProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.NewRatioProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class NewRatioProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NewRatioProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.NewSizeProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class NewSizeProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NewSizeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.OldGarbageCollectorProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class OldGarbageCollectorProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "OldGarbageCollectorProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.ParallelGCThreadsProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class ParallelGCThreadsProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ParallelGCThreadsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.PermSizeProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class PermSizeProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PermSizeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.PostStartExecProperty",
        jsii_struct_bases=[],
        name_mapping={"command": "command"},
    )
    class PostStartExecProperty:
        def __init__(
            self,
            *,
            command: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        ) -> None:
            '''
            :param command: 
            '''
            if __debug__:
                def stub(
                    *,
                    command: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument command", value=command, expected_type=type_hints["command"])
            self._values: typing.Dict[str, typing.Any] = {}
            if command is not None:
                self._values["command"] = command

        @builtins.property
        def command(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property: command: undefined
            '''
            result = self._values.get("command")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PostStartExecProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.PostStartHttpGetProperty",
        jsii_struct_bases=[],
        name_mapping={
            "host": "host",
            "http_headers": "httpHeaders",
            "path": "path",
            "port": "port",
            "scheme": "scheme",
        },
    )
    class PostStartHttpGetProperty:
        def __init__(
            self,
            *,
            host: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            http_headers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.HttpGetHttpHeadersProperty", typing.Dict[str, typing.Any]]]]]] = None,
            path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            port: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            scheme: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param host: 
            :param http_headers: 
            :param path: 
            :param port: 
            :param scheme: 
            '''
            if __debug__:
                def stub(
                    *,
                    host: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    http_headers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.HttpGetHttpHeadersProperty, typing.Dict[str, typing.Any]]]]]] = None,
                    path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    port: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    scheme: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument host", value=host, expected_type=type_hints["host"])
                check_type(argname="argument http_headers", value=http_headers, expected_type=type_hints["http_headers"])
                check_type(argname="argument path", value=path, expected_type=type_hints["path"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument scheme", value=scheme, expected_type=type_hints["scheme"])
            self._values: typing.Dict[str, typing.Any] = {}
            if host is not None:
                self._values["host"] = host
            if http_headers is not None:
                self._values["http_headers"] = http_headers
            if path is not None:
                self._values["path"] = path
            if port is not None:
                self._values["port"] = port
            if scheme is not None:
                self._values["scheme"] = scheme

        @builtins.property
        def host(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: host: undefined
            '''
            result = self._values.get("host")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def http_headers(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.HttpGetHttpHeadersProperty"]]]]:
            '''
            :Property: httpHeaders: undefined
            '''
            result = self._values.get("http_headers")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.HttpGetHttpHeadersProperty"]]]], result)

        @builtins.property
        def path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: path: undefined
            '''
            result = self._values.get("path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: port: undefined
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def scheme(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: scheme: undefined
            '''
            result = self._values.get("scheme")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PostStartHttpGetProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.PostStartProperty",
        jsii_struct_bases=[],
        name_mapping={"exec": "exec", "http_get": "httpGet"},
    )
    class PostStartProperty:
        def __init__(
            self,
            *,
            exec: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.PostStartExecProperty", typing.Dict[str, typing.Any]]]] = None,
            http_get: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.PostStartHttpGetProperty", typing.Dict[str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param exec: 
            :param http_get: 
            '''
            if __debug__:
                def stub(
                    *,
                    exec: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.PostStartExecProperty, typing.Dict[str, typing.Any]]]] = None,
                    http_get: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.PostStartHttpGetProperty, typing.Dict[str, typing.Any]]]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument exec", value=exec, expected_type=type_hints["exec"])
                check_type(argname="argument http_get", value=http_get, expected_type=type_hints["http_get"])
            self._values: typing.Dict[str, typing.Any] = {}
            if exec is not None:
                self._values["exec"] = exec
            if http_get is not None:
                self._values["http_get"] = http_get

        @builtins.property
        def exec(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PostStartExecProperty"]]:
            '''
            :Property: exec: undefined
            '''
            result = self._values.get("exec")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PostStartExecProperty"]], result)

        @builtins.property
        def http_get(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PostStartHttpGetProperty"]]:
            '''
            :Property: httpGet: undefined
            '''
            result = self._values.get("http_get")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PostStartHttpGetProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PostStartProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.PreStopExecProperty",
        jsii_struct_bases=[],
        name_mapping={"command": "command"},
    )
    class PreStopExecProperty:
        def __init__(
            self,
            *,
            command: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        ) -> None:
            '''
            :param command: 
            '''
            if __debug__:
                def stub(
                    *,
                    command: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument command", value=command, expected_type=type_hints["command"])
            self._values: typing.Dict[str, typing.Any] = {}
            if command is not None:
                self._values["command"] = command

        @builtins.property
        def command(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property: command: undefined
            '''
            result = self._values.get("command")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PreStopExecProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.PreStopHttpGetHttpHeadersProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "value": "value"},
    )
    class PreStopHttpGetHttpHeadersProperty:
        def __init__(
            self,
            *,
            name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param value: 
            '''
            if __debug__:
                def stub(
                    *,
                    name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[str, typing.Any] = {}
            if name is not None:
                self._values["name"] = name
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: name: undefined
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            return "PreStopHttpGetHttpHeadersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.PreStopHttpGetProperty",
        jsii_struct_bases=[],
        name_mapping={
            "host": "host",
            "http_headers": "httpHeaders",
            "path": "path",
            "port": "port",
            "scheme": "scheme",
        },
    )
    class PreStopHttpGetProperty:
        def __init__(
            self,
            *,
            host: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            http_headers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.PreStopHttpGetHttpHeadersProperty", typing.Dict[str, typing.Any]]]]]] = None,
            path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            port: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            scheme: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param host: 
            :param http_headers: 
            :param path: 
            :param port: 
            :param scheme: 
            '''
            if __debug__:
                def stub(
                    *,
                    host: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    http_headers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.PreStopHttpGetHttpHeadersProperty, typing.Dict[str, typing.Any]]]]]] = None,
                    path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    port: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    scheme: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument host", value=host, expected_type=type_hints["host"])
                check_type(argname="argument http_headers", value=http_headers, expected_type=type_hints["http_headers"])
                check_type(argname="argument path", value=path, expected_type=type_hints["path"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument scheme", value=scheme, expected_type=type_hints["scheme"])
            self._values: typing.Dict[str, typing.Any] = {}
            if host is not None:
                self._values["host"] = host
            if http_headers is not None:
                self._values["http_headers"] = http_headers
            if path is not None:
                self._values["path"] = path
            if port is not None:
                self._values["port"] = port
            if scheme is not None:
                self._values["scheme"] = scheme

        @builtins.property
        def host(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: host: undefined
            '''
            result = self._values.get("host")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def http_headers(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PreStopHttpGetHttpHeadersProperty"]]]]:
            '''
            :Property: httpHeaders: undefined
            '''
            result = self._values.get("http_headers")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PreStopHttpGetHttpHeadersProperty"]]]], result)

        @builtins.property
        def path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: path: undefined
            '''
            result = self._values.get("path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: port: undefined
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def scheme(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: scheme: undefined
            '''
            result = self._values.get("scheme")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PreStopHttpGetProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.PreStopProperty",
        jsii_struct_bases=[],
        name_mapping={"exec": "exec", "http_get": "httpGet"},
    )
    class PreStopProperty:
        def __init__(
            self,
            *,
            exec: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.PreStopExecProperty", typing.Dict[str, typing.Any]]]] = None,
            http_get: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.PreStopHttpGetProperty", typing.Dict[str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param exec: 
            :param http_get: 
            '''
            if __debug__:
                def stub(
                    *,
                    exec: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.PreStopExecProperty, typing.Dict[str, typing.Any]]]] = None,
                    http_get: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.PreStopHttpGetProperty, typing.Dict[str, typing.Any]]]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument exec", value=exec, expected_type=type_hints["exec"])
                check_type(argname="argument http_get", value=http_get, expected_type=type_hints["http_get"])
            self._values: typing.Dict[str, typing.Any] = {}
            if exec is not None:
                self._values["exec"] = exec
            if http_get is not None:
                self._values["http_get"] = http_get

        @builtins.property
        def exec(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PreStopExecProperty"]]:
            '''
            :Property: exec: undefined
            '''
            result = self._values.get("exec")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PreStopExecProperty"]], result)

        @builtins.property
        def http_get(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PreStopHttpGetProperty"]]:
            '''
            :Property: httpGet: undefined
            '''
            result = self._values.get("http_get")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.PreStopHttpGetProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PreStopProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.PrintGCDateStampsProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class PrintGCDateStampsProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PrintGCDateStampsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.PrintGCProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class PrintGCProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PrintGCProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessExecProperty",
        jsii_struct_bases=[],
        name_mapping={"command": "command"},
    )
    class ReadinessExecProperty:
        def __init__(
            self,
            *,
            command: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        ) -> None:
            '''
            :param command: 
            '''
            if __debug__:
                def stub(
                    *,
                    command: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument command", value=command, expected_type=type_hints["command"])
            self._values: typing.Dict[str, typing.Any] = {}
            if command is not None:
                self._values["command"] = command

        @builtins.property
        def command(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property: command: undefined
            '''
            result = self._values.get("command")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ReadinessExecProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessHttpGetHttpHeadersProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "value": "value"},
    )
    class ReadinessHttpGetHttpHeadersProperty:
        def __init__(
            self,
            *,
            name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param value: 
            '''
            if __debug__:
                def stub(
                    *,
                    name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[str, typing.Any] = {}
            if name is not None:
                self._values["name"] = name
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: name: undefined
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            return "ReadinessHttpGetHttpHeadersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessHttpGetProperty",
        jsii_struct_bases=[],
        name_mapping={
            "host": "host",
            "http_headers": "httpHeaders",
            "path": "path",
            "port": "port",
            "scheme": "scheme",
        },
    )
    class ReadinessHttpGetProperty:
        def __init__(
            self,
            *,
            host: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            http_headers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.ReadinessHttpGetHttpHeadersProperty", typing.Dict[str, typing.Any]]]]]] = None,
            path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            port: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            scheme: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param host: 
            :param http_headers: 
            :param path: 
            :param port: 
            :param scheme: 
            '''
            if __debug__:
                def stub(
                    *,
                    host: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    http_headers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.ReadinessHttpGetHttpHeadersProperty, typing.Dict[str, typing.Any]]]]]] = None,
                    path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    port: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    scheme: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument host", value=host, expected_type=type_hints["host"])
                check_type(argname="argument http_headers", value=http_headers, expected_type=type_hints["http_headers"])
                check_type(argname="argument path", value=path, expected_type=type_hints["path"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument scheme", value=scheme, expected_type=type_hints["scheme"])
            self._values: typing.Dict[str, typing.Any] = {}
            if host is not None:
                self._values["host"] = host
            if http_headers is not None:
                self._values["http_headers"] = http_headers
            if path is not None:
                self._values["path"] = path
            if port is not None:
                self._values["port"] = port
            if scheme is not None:
                self._values["scheme"] = scheme

        @builtins.property
        def host(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: host: undefined
            '''
            result = self._values.get("host")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def http_headers(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.ReadinessHttpGetHttpHeadersProperty"]]]]:
            '''
            :Property: httpHeaders: undefined
            '''
            result = self._values.get("http_headers")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.ReadinessHttpGetHttpHeadersProperty"]]]], result)

        @builtins.property
        def path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: path: undefined
            '''
            result = self._values.get("path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: port: undefined
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def scheme(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: scheme: undefined
            '''
            result = self._values.get("scheme")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ReadinessHttpGetProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessProperty",
        jsii_struct_bases=[],
        name_mapping={
            "exec": "exec",
            "failure_threshold": "failureThreshold",
            "http_get": "httpGet",
            "initial_delay_seconds": "initialDelaySeconds",
            "period_seconds": "periodSeconds",
            "success_threshold": "successThreshold",
            "tcp_socket": "tcpSocket",
            "timeout_seconds": "timeoutSeconds",
        },
    )
    class ReadinessProperty:
        def __init__(
            self,
            *,
            exec: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.ReadinessExecProperty", typing.Dict[str, typing.Any]]]] = None,
            failure_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            http_get: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.ReadinessHttpGetProperty", typing.Dict[str, typing.Any]]]] = None,
            initial_delay_seconds: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            period_seconds: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            success_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            tcp_socket: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosK8sApplication.ReadinessTcpSocketProperty", typing.Dict[str, typing.Any]]]] = None,
            timeout_seconds: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param exec: 
            :param failure_threshold: 
            :param http_get: 
            :param initial_delay_seconds: 
            :param period_seconds: 
            :param success_threshold: 
            :param tcp_socket: 
            :param timeout_seconds: 
            '''
            if __debug__:
                def stub(
                    *,
                    exec: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.ReadinessExecProperty, typing.Dict[str, typing.Any]]]] = None,
                    failure_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    http_get: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.ReadinessHttpGetProperty, typing.Dict[str, typing.Any]]]] = None,
                    initial_delay_seconds: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    period_seconds: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    success_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    tcp_socket: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.ReadinessTcpSocketProperty, typing.Dict[str, typing.Any]]]] = None,
                    timeout_seconds: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument exec", value=exec, expected_type=type_hints["exec"])
                check_type(argname="argument failure_threshold", value=failure_threshold, expected_type=type_hints["failure_threshold"])
                check_type(argname="argument http_get", value=http_get, expected_type=type_hints["http_get"])
                check_type(argname="argument initial_delay_seconds", value=initial_delay_seconds, expected_type=type_hints["initial_delay_seconds"])
                check_type(argname="argument period_seconds", value=period_seconds, expected_type=type_hints["period_seconds"])
                check_type(argname="argument success_threshold", value=success_threshold, expected_type=type_hints["success_threshold"])
                check_type(argname="argument tcp_socket", value=tcp_socket, expected_type=type_hints["tcp_socket"])
                check_type(argname="argument timeout_seconds", value=timeout_seconds, expected_type=type_hints["timeout_seconds"])
            self._values: typing.Dict[str, typing.Any] = {}
            if exec is not None:
                self._values["exec"] = exec
            if failure_threshold is not None:
                self._values["failure_threshold"] = failure_threshold
            if http_get is not None:
                self._values["http_get"] = http_get
            if initial_delay_seconds is not None:
                self._values["initial_delay_seconds"] = initial_delay_seconds
            if period_seconds is not None:
                self._values["period_seconds"] = period_seconds
            if success_threshold is not None:
                self._values["success_threshold"] = success_threshold
            if tcp_socket is not None:
                self._values["tcp_socket"] = tcp_socket
            if timeout_seconds is not None:
                self._values["timeout_seconds"] = timeout_seconds

        @builtins.property
        def exec(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.ReadinessExecProperty"]]:
            '''
            :Property: exec: undefined
            '''
            result = self._values.get("exec")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.ReadinessExecProperty"]], result)

        @builtins.property
        def failure_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: failureThreshold: undefined
            '''
            result = self._values.get("failure_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def http_get(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.ReadinessHttpGetProperty"]]:
            '''
            :Property: httpGet: undefined
            '''
            result = self._values.get("http_get")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.ReadinessHttpGetProperty"]], result)

        @builtins.property
        def initial_delay_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: initialDelaySeconds: undefined
            '''
            result = self._values.get("initial_delay_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def period_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: periodSeconds: undefined
            '''
            result = self._values.get("period_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def success_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: successThreshold: undefined
            '''
            result = self._values.get("success_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def tcp_socket(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.ReadinessTcpSocketProperty"]]:
            '''
            :Property: tcpSocket: undefined
            '''
            result = self._values.get("tcp_socket")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosK8sApplication.ReadinessTcpSocketProperty"]], result)

        @builtins.property
        def timeout_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: timeoutSeconds: undefined
            '''
            result = self._values.get("timeout_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ReadinessProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessTcpSocketProperty",
        jsii_struct_bases=[],
        name_mapping={"host": "host", "port": "port"},
    )
    class ReadinessTcpSocketProperty:
        def __init__(
            self,
            *,
            host: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            port: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param host: 
            :param port: 
            '''
            if __debug__:
                def stub(
                    *,
                    host: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    port: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument host", value=host, expected_type=type_hints["host"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
            self._values: typing.Dict[str, typing.Any] = {}
            if host is not None:
                self._values["host"] = host
            if port is not None:
                self._values["port"] = port

        @builtins.property
        def host(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: host: undefined
            '''
            result = self._values.get("host")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: port: undefined
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ReadinessTcpSocketProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.SlsConfigsProperty",
        jsii_struct_bases=[],
        name_mapping={"log_dir": "logDir", "logstore": "logstore", "type": "type"},
    )
    class SlsConfigsProperty:
        def __init__(
            self,
            *,
            log_dir: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            logstore: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param log_dir: 
            :param logstore: 
            :param type: 
            '''
            if __debug__:
                def stub(
                    *,
                    log_dir: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    logstore: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument log_dir", value=log_dir, expected_type=type_hints["log_dir"])
                check_type(argname="argument logstore", value=logstore, expected_type=type_hints["logstore"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[str, typing.Any] = {}
            if log_dir is not None:
                self._values["log_dir"] = log_dir
            if logstore is not None:
                self._values["logstore"] = logstore
            if type is not None:
                self._values["type"] = type

        @builtins.property
        def log_dir(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            logDir: If the standard output type is used, the collection path is stdout.log. If the file type is used, the collection path is the path of the collected file. Wildcards(*) are supported. The collection path must match the following regular expression:
            ^/( +)/(. *)^/$.
            '''
            result = self._values.get("log_dir")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def logstore(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            logstore: The name of the Logstore. Make sure that the name of the Logstore is unique in the cluster. The name must comply with the following rules:
            The name can contain only lowercase letters, digits, hyphens (-), and underscores(_). The name must start and end with a lowercase letter or a digit. The name must be 3 to 63 characters in length.
            If this parameter is empty, the system automatically generates a name.
            '''
            result = self._values.get("logstore")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: type: The collection type. The file type is file and the standard output type is stdout.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SlsConfigsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.SurvivorRatioProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class SurvivorRatioProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SurvivorRatioProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.TcpSocketProperty",
        jsii_struct_bases=[],
        name_mapping={"host": "host", "port": "port"},
    )
    class TcpSocketProperty:
        def __init__(
            self,
            *,
            host: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            port: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param host: 
            :param port: 
            '''
            if __debug__:
                def stub(
                    *,
                    host: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    port: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument host", value=host, expected_type=type_hints["host"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
            self._values: typing.Dict[str, typing.Any] = {}
            if host is not None:
                self._values["host"] = host
            if port is not None:
                self._values["port"] = port

        @builtins.property
        def host(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: host: undefined
            '''
            result = self._values.get("host")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: port: undefined
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TcpSocketProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.ThreadStackSizeProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class ThreadStackSizeProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ThreadStackSizeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.UseGCLogFileRotationProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class UseGCLogFileRotationProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "UseGCLogFileRotationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.WebContainerConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "context_input_type": "contextInputType",
            "context_path": "contextPath",
            "http_port": "httpPort",
            "max_threads": "maxThreads",
            "server_xml": "serverXml",
            "uri_encoding": "uriEncoding",
            "use_advanced_server_xml": "useAdvancedServerXml",
            "use_body_encoding": "useBodyEncoding",
            "use_default_config": "useDefaultConfig",
        },
    )
    class WebContainerConfigProperty:
        def __init__(
            self,
            *,
            context_input_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            context_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            http_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            max_threads: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            server_xml: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            uri_encoding: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            use_advanced_server_xml: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            use_body_encoding: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            use_default_config: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param context_input_type: 
            :param context_path: 
            :param http_port: 
            :param max_threads: 
            :param server_xml: 
            :param uri_encoding: 
            :param use_advanced_server_xml: 
            :param use_body_encoding: 
            :param use_default_config: 
            '''
            if __debug__:
                def stub(
                    *,
                    context_input_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    context_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    http_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    max_threads: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    server_xml: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    uri_encoding: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    use_advanced_server_xml: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    use_body_encoding: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    use_default_config: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument context_input_type", value=context_input_type, expected_type=type_hints["context_input_type"])
                check_type(argname="argument context_path", value=context_path, expected_type=type_hints["context_path"])
                check_type(argname="argument http_port", value=http_port, expected_type=type_hints["http_port"])
                check_type(argname="argument max_threads", value=max_threads, expected_type=type_hints["max_threads"])
                check_type(argname="argument server_xml", value=server_xml, expected_type=type_hints["server_xml"])
                check_type(argname="argument uri_encoding", value=uri_encoding, expected_type=type_hints["uri_encoding"])
                check_type(argname="argument use_advanced_server_xml", value=use_advanced_server_xml, expected_type=type_hints["use_advanced_server_xml"])
                check_type(argname="argument use_body_encoding", value=use_body_encoding, expected_type=type_hints["use_body_encoding"])
                check_type(argname="argument use_default_config", value=use_default_config, expected_type=type_hints["use_default_config"])
            self._values: typing.Dict[str, typing.Any] = {}
            if context_input_type is not None:
                self._values["context_input_type"] = context_input_type
            if context_path is not None:
                self._values["context_path"] = context_path
            if http_port is not None:
                self._values["http_port"] = http_port
            if max_threads is not None:
                self._values["max_threads"] = max_threads
            if server_xml is not None:
                self._values["server_xml"] = server_xml
            if uri_encoding is not None:
                self._values["uri_encoding"] = uri_encoding
            if use_advanced_server_xml is not None:
                self._values["use_advanced_server_xml"] = use_advanced_server_xml
            if use_body_encoding is not None:
                self._values["use_body_encoding"] = use_body_encoding
            if use_default_config is not None:
                self._values["use_default_config"] = use_default_config

        @builtins.property
        def context_input_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            contextInputType: Specifies whether to customize the access path for the application. Valid values:
            war: The application access path is the name of the WAR package. You do not need to enter a custom path.
            root: The application access path is /. You do not need to enter a custom path.
            custom: If you select this option, you must set contextPath to a custom path.
            '''
            result = self._values.get("context_input_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def context_path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: contextPath: The custom path. This parameter is required only when the ContextInputType parameter is set to custom.
            '''
            result = self._values.get("context_path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def http_port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: httpPort: The port range is from 1024 to 65535. The admin permission is configured for the container, but the root permission is required to perform operations on ports with numbers less than 1024. Therefore, enter a value greater than 1024 within the range. If you do not specify this parameter, 8080 is the default value.
            '''
            result = self._values.get("http_port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def max_threads(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            maxThreads: The number of connections in the connection pool. Default value: 400.
            Note This parameter greatly affects the application performance. We recommend that you set this parameter under professional guidance.
            '''
            result = self._values.get("max_threads")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def server_xml(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            serverXml: serverXml: The content of the server.xml file customized in advanced configurations.
            This parameter takes effect only when UseAdvancedServerXml is set to true.
            '''
            result = self._values.get("server_xml")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def uri_encoding(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: uriEncoding: The encoding format for Tomcat. Valid values: UTF-8, ISO-8859-1, GBK, and GB2312. If you do not specify this parameter, ISO-8859-1 is the default value.
            '''
            result = self._values.get("uri_encoding")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def use_advanced_server_xml(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: useAdvancedServerXml: Specifies whether to use advanced configurations to customize the server.xml file. When the preceding parameter type and specific parameters cannot meet your requirements, you can use advanced configurations to edit the server.xml file of Tomcat.
            '''
            result = self._values.get("use_advanced_server_xml")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def use_body_encoding(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: useBodyEncoding: Specifies whether to use BodyEncoding for URL.
            '''
            result = self._values.get("use_body_encoding")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def use_default_config(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: useDefaultConfig: Specifies whether to use the custom configuration. The value true indicates that the custom configuration is not used, whereas the value false indicates that the custom configuration is used. If the custom configuration is not used, the following parameters do not take effect.
            '''
            result = self._values.get("use_default_config")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "WebContainerConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sApplication.YoungGarbageCollectorProperty",
        jsii_struct_bases=[],
        name_mapping={"original": "original", "startup": "startup"},
    )
    class YoungGarbageCollectorProperty:
        def __init__(
            self,
            *,
            original: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param original: 
            :param startup: 
            '''
            if __debug__:
                def stub(
                    *,
                    original: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    startup: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument original", value=original, expected_type=type_hints["original"])
                check_type(argname="argument startup", value=startup, expected_type=type_hints["startup"])
            self._values: typing.Dict[str, typing.Any] = {}
            if original is not None:
                self._values["original"] = original
            if startup is not None:
                self._values["startup"] = startup

        @builtins.property
        def original(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: original: Indicates the configuration value.
            '''
            result = self._values.get("original")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def startup(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: startup: Indicates a startup parameter.
            '''
            result = self._values.get("startup")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "YoungGarbageCollectorProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.RosK8sApplicationProps",
    jsii_struct_bases=[],
    name_mapping={
        "app_name": "appName",
        "cluster_id": "clusterId",
        "application_description": "applicationDescription",
        "command": "command",
        "command_args": "commandArgs",
        "deploy_across_nodes": "deployAcrossNodes",
        "deploy_across_zones": "deployAcrossZones",
        "edas_container_version": "edasContainerVersion",
        "enable_ahas": "enableAhas",
        "envs": "envs",
        "image_url": "imageUrl",
        "internet_slb_id": "internetSlbId",
        "internet_slb_port": "internetSlbPort",
        "internet_slb_protocol": "internetSlbProtocol",
        "internet_target_port": "internetTargetPort",
        "intranet_slb_id": "intranetSlbId",
        "intranet_slb_port": "intranetSlbPort",
        "intranet_slb_protocol": "intranetSlbProtocol",
        "intranet_target_port": "intranetTargetPort",
        "is_multilingual_app": "isMultilingualApp",
        "java_start_up_config": "javaStartUpConfig",
        "jdk": "jdk",
        "limit_cpu": "limitCpu",
        "limit_mem": "limitMem",
        "liveness": "liveness",
        "local_volume": "localVolume",
        "logical_region_id": "logicalRegionId",
        "mount_descs": "mountDescs",
        "namespace": "namespace",
        "nas_id": "nasId",
        "package_type": "packageType",
        "package_url": "packageUrl",
        "package_version": "packageVersion",
        "post_start": "postStart",
        "pre_stop": "preStop",
        "readiness": "readiness",
        "replicas": "replicas",
        "repo_id": "repoId",
        "requests_cpu": "requestsCpu",
        "requests_mem": "requestsMem",
        "runtime_class_name": "runtimeClassName",
        "sls_configs": "slsConfigs",
        "storage_type": "storageType",
        "timeout": "timeout",
        "uri_encoding": "uriEncoding",
        "use_body_encoding": "useBodyEncoding",
        "web_container": "webContainer",
        "web_container_config": "webContainerConfig",
    },
)
class RosK8sApplicationProps:
    def __init__(
        self,
        *,
        app_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        application_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        command: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        command_args: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.CommandArgsProperty, typing.Dict[str, typing.Any]]]]]] = None,
        deploy_across_nodes: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        deploy_across_zones: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        edas_container_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        enable_ahas: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        envs: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.EnvsProperty, typing.Dict[str, typing.Any]]]]]] = None,
        image_url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        internet_slb_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        internet_slb_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        internet_slb_protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        internet_target_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        intranet_slb_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        intranet_slb_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        intranet_slb_protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        intranet_target_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        is_multilingual_app: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        java_start_up_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.JavaStartUpConfigProperty, typing.Dict[str, typing.Any]]]] = None,
        jdk: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        limit_cpu: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        limit_mem: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        liveness: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.LivenessProperty, typing.Dict[str, typing.Any]]]] = None,
        local_volume: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.LocalVolumeProperty, typing.Dict[str, typing.Any]]]]]] = None,
        logical_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        mount_descs: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.MountDescsProperty, typing.Dict[str, typing.Any]]]]]] = None,
        namespace: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        nas_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        package_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        package_url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        package_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        post_start: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.PostStartProperty, typing.Dict[str, typing.Any]]]] = None,
        pre_stop: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.PreStopProperty, typing.Dict[str, typing.Any]]]] = None,
        readiness: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.ReadinessProperty, typing.Dict[str, typing.Any]]]] = None,
        replicas: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        repo_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        requests_cpu: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        requests_mem: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        runtime_class_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        sls_configs: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.SlsConfigsProperty, typing.Dict[str, typing.Any]]]]]] = None,
        storage_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        uri_encoding: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        use_body_encoding: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        web_container: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        web_container_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.WebContainerConfigProperty, typing.Dict[str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::K8sApplication``.

        :param app_name: 
        :param cluster_id: 
        :param application_description: 
        :param command: 
        :param command_args: 
        :param deploy_across_nodes: 
        :param deploy_across_zones: 
        :param edas_container_version: 
        :param enable_ahas: 
        :param envs: 
        :param image_url: 
        :param internet_slb_id: 
        :param internet_slb_port: 
        :param internet_slb_protocol: 
        :param internet_target_port: 
        :param intranet_slb_id: 
        :param intranet_slb_port: 
        :param intranet_slb_protocol: 
        :param intranet_target_port: 
        :param is_multilingual_app: 
        :param java_start_up_config: 
        :param jdk: 
        :param limit_cpu: 
        :param limit_mem: 
        :param liveness: 
        :param local_volume: 
        :param logical_region_id: 
        :param mount_descs: 
        :param namespace: 
        :param nas_id: 
        :param package_type: 
        :param package_url: 
        :param package_version: 
        :param post_start: 
        :param pre_stop: 
        :param readiness: 
        :param replicas: 
        :param repo_id: 
        :param requests_cpu: 
        :param requests_mem: 
        :param runtime_class_name: 
        :param sls_configs: 
        :param storage_type: 
        :param timeout: 
        :param uri_encoding: 
        :param use_body_encoding: 
        :param web_container: 
        :param web_container_config: 
        '''
        if __debug__:
            def stub(
                *,
                app_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                application_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                command: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                command_args: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.CommandArgsProperty, typing.Dict[str, typing.Any]]]]]] = None,
                deploy_across_nodes: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                deploy_across_zones: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                edas_container_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                enable_ahas: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                envs: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.EnvsProperty, typing.Dict[str, typing.Any]]]]]] = None,
                image_url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                internet_slb_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                internet_slb_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                internet_slb_protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                internet_target_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                intranet_slb_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                intranet_slb_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                intranet_slb_protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                intranet_target_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                is_multilingual_app: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                java_start_up_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.JavaStartUpConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                jdk: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                limit_cpu: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                limit_mem: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                liveness: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.LivenessProperty, typing.Dict[str, typing.Any]]]] = None,
                local_volume: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.LocalVolumeProperty, typing.Dict[str, typing.Any]]]]]] = None,
                logical_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                mount_descs: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.MountDescsProperty, typing.Dict[str, typing.Any]]]]]] = None,
                namespace: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                nas_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                package_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                package_url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                package_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                post_start: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.PostStartProperty, typing.Dict[str, typing.Any]]]] = None,
                pre_stop: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.PreStopProperty, typing.Dict[str, typing.Any]]]] = None,
                readiness: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.ReadinessProperty, typing.Dict[str, typing.Any]]]] = None,
                replicas: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                repo_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                requests_cpu: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                requests_mem: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                runtime_class_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                sls_configs: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.SlsConfigsProperty, typing.Dict[str, typing.Any]]]]]] = None,
                storage_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                uri_encoding: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                use_body_encoding: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                web_container: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                web_container_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sApplication.WebContainerConfigProperty, typing.Dict[str, typing.Any]]]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument app_name", value=app_name, expected_type=type_hints["app_name"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument application_description", value=application_description, expected_type=type_hints["application_description"])
            check_type(argname="argument command", value=command, expected_type=type_hints["command"])
            check_type(argname="argument command_args", value=command_args, expected_type=type_hints["command_args"])
            check_type(argname="argument deploy_across_nodes", value=deploy_across_nodes, expected_type=type_hints["deploy_across_nodes"])
            check_type(argname="argument deploy_across_zones", value=deploy_across_zones, expected_type=type_hints["deploy_across_zones"])
            check_type(argname="argument edas_container_version", value=edas_container_version, expected_type=type_hints["edas_container_version"])
            check_type(argname="argument enable_ahas", value=enable_ahas, expected_type=type_hints["enable_ahas"])
            check_type(argname="argument envs", value=envs, expected_type=type_hints["envs"])
            check_type(argname="argument image_url", value=image_url, expected_type=type_hints["image_url"])
            check_type(argname="argument internet_slb_id", value=internet_slb_id, expected_type=type_hints["internet_slb_id"])
            check_type(argname="argument internet_slb_port", value=internet_slb_port, expected_type=type_hints["internet_slb_port"])
            check_type(argname="argument internet_slb_protocol", value=internet_slb_protocol, expected_type=type_hints["internet_slb_protocol"])
            check_type(argname="argument internet_target_port", value=internet_target_port, expected_type=type_hints["internet_target_port"])
            check_type(argname="argument intranet_slb_id", value=intranet_slb_id, expected_type=type_hints["intranet_slb_id"])
            check_type(argname="argument intranet_slb_port", value=intranet_slb_port, expected_type=type_hints["intranet_slb_port"])
            check_type(argname="argument intranet_slb_protocol", value=intranet_slb_protocol, expected_type=type_hints["intranet_slb_protocol"])
            check_type(argname="argument intranet_target_port", value=intranet_target_port, expected_type=type_hints["intranet_target_port"])
            check_type(argname="argument is_multilingual_app", value=is_multilingual_app, expected_type=type_hints["is_multilingual_app"])
            check_type(argname="argument java_start_up_config", value=java_start_up_config, expected_type=type_hints["java_start_up_config"])
            check_type(argname="argument jdk", value=jdk, expected_type=type_hints["jdk"])
            check_type(argname="argument limit_cpu", value=limit_cpu, expected_type=type_hints["limit_cpu"])
            check_type(argname="argument limit_mem", value=limit_mem, expected_type=type_hints["limit_mem"])
            check_type(argname="argument liveness", value=liveness, expected_type=type_hints["liveness"])
            check_type(argname="argument local_volume", value=local_volume, expected_type=type_hints["local_volume"])
            check_type(argname="argument logical_region_id", value=logical_region_id, expected_type=type_hints["logical_region_id"])
            check_type(argname="argument mount_descs", value=mount_descs, expected_type=type_hints["mount_descs"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument nas_id", value=nas_id, expected_type=type_hints["nas_id"])
            check_type(argname="argument package_type", value=package_type, expected_type=type_hints["package_type"])
            check_type(argname="argument package_url", value=package_url, expected_type=type_hints["package_url"])
            check_type(argname="argument package_version", value=package_version, expected_type=type_hints["package_version"])
            check_type(argname="argument post_start", value=post_start, expected_type=type_hints["post_start"])
            check_type(argname="argument pre_stop", value=pre_stop, expected_type=type_hints["pre_stop"])
            check_type(argname="argument readiness", value=readiness, expected_type=type_hints["readiness"])
            check_type(argname="argument replicas", value=replicas, expected_type=type_hints["replicas"])
            check_type(argname="argument repo_id", value=repo_id, expected_type=type_hints["repo_id"])
            check_type(argname="argument requests_cpu", value=requests_cpu, expected_type=type_hints["requests_cpu"])
            check_type(argname="argument requests_mem", value=requests_mem, expected_type=type_hints["requests_mem"])
            check_type(argname="argument runtime_class_name", value=runtime_class_name, expected_type=type_hints["runtime_class_name"])
            check_type(argname="argument sls_configs", value=sls_configs, expected_type=type_hints["sls_configs"])
            check_type(argname="argument storage_type", value=storage_type, expected_type=type_hints["storage_type"])
            check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
            check_type(argname="argument uri_encoding", value=uri_encoding, expected_type=type_hints["uri_encoding"])
            check_type(argname="argument use_body_encoding", value=use_body_encoding, expected_type=type_hints["use_body_encoding"])
            check_type(argname="argument web_container", value=web_container, expected_type=type_hints["web_container"])
            check_type(argname="argument web_container_config", value=web_container_config, expected_type=type_hints["web_container_config"])
        self._values: typing.Dict[str, typing.Any] = {
            "app_name": app_name,
            "cluster_id": cluster_id,
        }
        if application_description is not None:
            self._values["application_description"] = application_description
        if command is not None:
            self._values["command"] = command
        if command_args is not None:
            self._values["command_args"] = command_args
        if deploy_across_nodes is not None:
            self._values["deploy_across_nodes"] = deploy_across_nodes
        if deploy_across_zones is not None:
            self._values["deploy_across_zones"] = deploy_across_zones
        if edas_container_version is not None:
            self._values["edas_container_version"] = edas_container_version
        if enable_ahas is not None:
            self._values["enable_ahas"] = enable_ahas
        if envs is not None:
            self._values["envs"] = envs
        if image_url is not None:
            self._values["image_url"] = image_url
        if internet_slb_id is not None:
            self._values["internet_slb_id"] = internet_slb_id
        if internet_slb_port is not None:
            self._values["internet_slb_port"] = internet_slb_port
        if internet_slb_protocol is not None:
            self._values["internet_slb_protocol"] = internet_slb_protocol
        if internet_target_port is not None:
            self._values["internet_target_port"] = internet_target_port
        if intranet_slb_id is not None:
            self._values["intranet_slb_id"] = intranet_slb_id
        if intranet_slb_port is not None:
            self._values["intranet_slb_port"] = intranet_slb_port
        if intranet_slb_protocol is not None:
            self._values["intranet_slb_protocol"] = intranet_slb_protocol
        if intranet_target_port is not None:
            self._values["intranet_target_port"] = intranet_target_port
        if is_multilingual_app is not None:
            self._values["is_multilingual_app"] = is_multilingual_app
        if java_start_up_config is not None:
            self._values["java_start_up_config"] = java_start_up_config
        if jdk is not None:
            self._values["jdk"] = jdk
        if limit_cpu is not None:
            self._values["limit_cpu"] = limit_cpu
        if limit_mem is not None:
            self._values["limit_mem"] = limit_mem
        if liveness is not None:
            self._values["liveness"] = liveness
        if local_volume is not None:
            self._values["local_volume"] = local_volume
        if logical_region_id is not None:
            self._values["logical_region_id"] = logical_region_id
        if mount_descs is not None:
            self._values["mount_descs"] = mount_descs
        if namespace is not None:
            self._values["namespace"] = namespace
        if nas_id is not None:
            self._values["nas_id"] = nas_id
        if package_type is not None:
            self._values["package_type"] = package_type
        if package_url is not None:
            self._values["package_url"] = package_url
        if package_version is not None:
            self._values["package_version"] = package_version
        if post_start is not None:
            self._values["post_start"] = post_start
        if pre_stop is not None:
            self._values["pre_stop"] = pre_stop
        if readiness is not None:
            self._values["readiness"] = readiness
        if replicas is not None:
            self._values["replicas"] = replicas
        if repo_id is not None:
            self._values["repo_id"] = repo_id
        if requests_cpu is not None:
            self._values["requests_cpu"] = requests_cpu
        if requests_mem is not None:
            self._values["requests_mem"] = requests_mem
        if runtime_class_name is not None:
            self._values["runtime_class_name"] = runtime_class_name
        if sls_configs is not None:
            self._values["sls_configs"] = sls_configs
        if storage_type is not None:
            self._values["storage_type"] = storage_type
        if timeout is not None:
            self._values["timeout"] = timeout
        if uri_encoding is not None:
            self._values["uri_encoding"] = uri_encoding
        if use_body_encoding is not None:
            self._values["use_body_encoding"] = use_body_encoding
        if web_container is not None:
            self._values["web_container"] = web_container
        if web_container_config is not None:
            self._values["web_container_config"] = web_container_config

    @builtins.property
    def app_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        appName: The name of the application. The name must start with a letter and can contain digits,
        letters, and hyphens (-). It can be up to 36 characters in length.
        '''
        result = self._values.get("app_name")
        assert result is not None, "Required property 'app_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        clusterId: The cluster ID. You can query the cluster ID by calling the ListCluster operation.
        For more information, see ListCluster.
        '''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def application_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: applicationDescription: The description of the application.
        '''
        result = self._values.get("application_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def command(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: command: The command that is specified. If it is specified, it replaces the startup command in the image when the image is started.
        '''
        result = self._values.get("command")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def command_args(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.CommandArgsProperty]]]]:
        '''
        :Property: commandArgs: The collection of commands. For example, [{"argument":"-c"},{"argument":"test"}], where -c and test are two parameters that can be set.
        '''
        result = self._values.get("command_args")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.CommandArgsProperty]]]], result)

    @builtins.property
    def deploy_across_nodes(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deployAcrossNodes: Specifies whether to distribute application instances to multiple nodes. The value true indicates yes, whereas other values indicate no.
        '''
        result = self._values.get("deploy_across_nodes")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deploy_across_zones(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deployAcrossZones: Specifies whether to distribute application instances to multiple zones. The value true indicates yes, whereas other values indicate no.
        '''
        result = self._values.get("deploy_across_zones")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def edas_container_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        edasContainerVersion: The version of EDAS Container on which the deployment package of the application depends.
        Note This parameter is not supported when you deploy an application by using images.
        '''
        result = self._values.get("edas_container_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable_ahas(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: enableAhas: Specifies whether to enable access to Application High Availability Service (AHAS).
        '''
        result = self._values.get("enable_ahas")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def envs(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.EnvsProperty]]]]:
        '''
        :Property: envs: The collection of deployment environment variables. For example, [{"Name":"x","Value":"y"},{"Name":"x2","Value":"y2"}].
        '''
        result = self._values.get("envs")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.EnvsProperty]]]], result)

    @builtins.property
    def image_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: imageUrl: The image URL. When PackageType is set to Image, this parameter is required.
        '''
        result = self._values.get("image_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_slb_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: internetSlbId: The ID of the Internet-facing SLB instance. If this parameter is not specified, EDAS automatically purchases a new SLB instance for you.
        '''
        result = self._values.get("internet_slb_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_slb_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: internetSlbPort: The frontend port of the Internet-facing SLB instance. Valid values: 1 to 65535.
        '''
        result = self._values.get("internet_slb_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_slb_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: internetSlbProtocol: The protocol of the Internet-facing SLB instance. Valid values: TCP, HTTP, and HTTPS.
        '''
        result = self._values.get("internet_slb_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_target_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        internetTargetPort: The backend port of the internal-facing SLB instance, which is also the service port of the application.
        Valid values: 1 to 65535.
        '''
        result = self._values.get("internet_target_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def intranet_slb_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: intranetSlbId: The ID of the internal-facing SLB instance. If this parameter is not specified, Enterprise Distributed Application Service (EDAS) automatically purchases a new SLB instance for you.
        '''
        result = self._values.get("intranet_slb_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def intranet_slb_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: intranetSlbPort: The frontend port of the internal-facing SLB instance. Valid values: 1 to 65535.
        '''
        result = self._values.get("intranet_slb_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def intranet_slb_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: intranetSlbProtocol: The protocol of the internal-facing SLB instance. Valid values: TCP, HTTP, and HTTPS.
        '''
        result = self._values.get("intranet_slb_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def intranet_target_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: intranetTargetPort: The backend port of the internal-facing Server Load Balancer (SLB) instance, which is also the service port of the application. Valid values: 1 to 65535.
        '''
        result = self._values.get("intranet_target_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def is_multilingual_app(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: isMultilingualApp: Specifies whether the application is a multi-language application.
        '''
        result = self._values.get("is_multilingual_app")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def java_start_up_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.JavaStartUpConfigProperty]]:
        '''
        :Property:

        javaStartUpConfig: The configuration of Java startup parameters for a Java application. These startup parameters involve the memory, application, garbage collection (GC) policy, tools, service registration and discovery, and custom configurations. Proper parameter settings help reduce the GC overhead, shorten the server response time, and improve the throughput.
        The system automatically concatenates all startup values as the configuration of Java startup parameters for the application.
        '''
        result = self._values.get("java_start_up_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.JavaStartUpConfigProperty]], result)

    @builtins.property
    def jdk(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        jdk: The version of Java Development Kit (JDK) on which the deployment package of the application depends.
        Valid values: Open JDK 7 and Open JDK 8. This parameter is not supported when you deploy an application by using images.
        '''
        result = self._values.get("jdk")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def limit_cpu(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        limitCpu: The maximum number of CPUs allowed for each application instance when the application
        is running. Unit: cores.
        '''
        result = self._values.get("limit_cpu")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def limit_mem(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: limitMem: The maximum amount of memory allowed for each application instance when the application is running. Unit: MB.
        '''
        result = self._values.get("limit_mem")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def liveness(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.LivenessProperty]]:
        '''
        :Property: liveness: The liveness check on the container.
        '''
        result = self._values.get("liveness")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.LivenessProperty]], result)

    @builtins.property
    def local_volume(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.LocalVolumeProperty]]]]:
        '''
        :Property: localVolume: The configuration for mounting host files to the container where the application is running. For example, the value can be [{"type":"", "nodePath":"/localfiles", "mountPath":"/app/files"}, {"type":"Directory", "nodePath":"/mnt", "mountPath":"/app/storage"}].
        '''
        result = self._values.get("local_volume")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.LocalVolumeProperty]]]], result)

    @builtins.property
    def logical_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: logicalRegionId: The ID of the EDAS namespace. This parameter is required for a non-default namespace.
        '''
        result = self._values.get("logical_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def mount_descs(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.MountDescsProperty]]]]:
        '''
        :Property: mountDescs: The description of the NAS mounting configuration. For example, the value can be [{"NasPath": "/k8s","MountPath": "/mnt"}, {"NasPath": "/files", "MountPath": "/app/files"}].
        '''
        result = self._values.get("mount_descs")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.MountDescsProperty]]]], result)

    @builtins.property
    def namespace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: namespace: The namespace of the Kubernetes cluster. This parameter determines the Kubernetes namespace where your application is deployed. By default, this parameter is set to default.
        '''
        result = self._values.get("namespace")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def nas_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        nasId: The ID of the Network Attached Storage (NAS) file system mounted to the container where the application is running. The NAS file system must be in the same region as the cluster. The NAS file system must have an available mount target, or have a mount
        target on the vSwitch in the virtual private cloud (VPC) where the application is located. If this parameter is not specified and the mountDescs field exists, a NAS file system is automatically purchased and mounted to the vSwitch in the VPC by default.
        '''
        result = self._values.get("nas_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def package_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: packageType: The type of the deployment package. Valid values: FatJar, WAR, and Image.
        '''
        result = self._values.get("package_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def package_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        packageUrl: The URL of the deployment package. This parameter must be set for the applications
        that are deployed by using FatJar or WAR packages.
        Note The version of SDK for Java or Python must be 2.44.0 or later.
        '''
        result = self._values.get("package_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def package_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        packageVersion: The version of the deployment package. This parameter is required when the PackageType parameter is set to WAR or FatJar. You must specify a version.
        Note The version of SDK for Java or Python must be 2.44.0 or later.
        '''
        result = self._values.get("package_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def post_start(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.PostStartProperty]]:
        '''
        :Property: postStart: The post-start script. For example, {"Exec": {"Command": ["ls", "/"]}}.
        '''
        result = self._values.get("post_start")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.PostStartProperty]], result)

    @builtins.property
    def pre_stop(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.PreStopProperty]]:
        '''
        :Property: preStop: The pre-stop script. For example, {"Exec": {"Command": ["ls", "/"]}}.
        '''
        result = self._values.get("pre_stop")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.PreStopProperty]], result)

    @builtins.property
    def readiness(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.ReadinessProperty]]:
        '''
        :Property: readiness: The readiness check on the container.
        '''
        result = self._values.get("readiness")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.ReadinessProperty]], result)

    @builtins.property
    def replicas(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: replicas: The number of instances for the application that you want to create. Default: 1
        '''
        result = self._values.get("replicas")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def repo_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: repoId: The ID of the image repository.
        '''
        result = self._values.get("repo_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def requests_cpu(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: requestsCpu: The maximum number of CPUs allowed for each application instance when the application is created. Unit: cores. The value 0 indicates no limit.
        '''
        result = self._values.get("requests_cpu")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def requests_mem(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        requestsMem: The maximum amount of memory allowed for each application instance when the application
        is created. Unit: MB. The value 0 indicates no limit.
        '''
        result = self._values.get("requests_mem")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def runtime_class_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: runtimeClassName: The type of the container runtime. This parameter is applicable only to clusters that use sandboxed containers.
        '''
        result = self._values.get("runtime_class_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def sls_configs(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.SlsConfigsProperty]]]]:
        '''
        :Property: slsConfigs: The Logstore configurations.
        '''
        result = self._values.get("sls_configs")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.SlsConfigsProperty]]]], result)

    @builtins.property
    def storage_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: storageType: Only SSD is supported.
        '''
        result = self._values.get("storage_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: timeout: The timeout interval of the change process. Unit: seconds.
        '''
        result = self._values.get("timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def uri_encoding(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        uriEncoding: The uniform resource identifier (URI) encoding scheme. Valid values: ISO-8859-1, GBK, GB2312, and UTF-8.
        Note If this parameter is not specified in application configuration, the default URI encoding
        scheme in the Tomcat container is applied.
        '''
        result = self._values.get("uri_encoding")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def use_body_encoding(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        useBodyEncoding: Specifies whether useBodyEncodingForURI is enabled.
        Note If this parameter is not specified in application configuration, the default value
        false is applied.
        '''
        result = self._values.get("use_body_encoding")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def web_container(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: webContainer: The version of the Tomcat container on which the deployment package of the application depends. This parameter is applicable to Spring Cloud and Apache Dubbo applications that are deployed by using WAR packages. This parameter is not supported when you deploy an application by using images.
        '''
        result = self._values.get("web_container")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def web_container_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.WebContainerConfigProperty]]:
        '''
        :Property: webContainerConfig: The Tomcat container configuration.
        '''
        result = self._values.get("web_container_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosK8sApplication.WebContainerConfigProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosK8sApplicationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosK8sCluster(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.RosK8sCluster",
):
    '''A ROS template type:  ``ALIYUN::EDAS::K8sCluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosK8sClusterProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::K8sCluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosK8sClusterProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrClusterName")
    def attr_cluster_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterName: The name of the cluster.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterName"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute:

        ClusterType: The type of the cluster:
        2: ECS cluster
        5: Container Service K8s cluster or Serverless K8s cluster
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrCsClusterId")
    def attr_cs_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CsClusterId: The ID of the K8s cluster.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCsClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkMode")
    def attr_network_mode(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute:

        NetworkMode: Network node:
        1: Classic network
        2: VPC
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNetworkMode"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeNum")
    def attr_node_num(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: NodeNum: Number of nodes.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNodeNum"))

    @builtins.property
    @jsii.member(jsii_name="attrSubNetCidr")
    def attr_sub_net_cidr(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SubNetCidr: Sub net CIDR.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSubNetCidr"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcId: The ID of the cluster.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVswitchId")
    def attr_vswitch_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VswitchId: The ID of the cluster.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVswitchId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="csClusterId")
    def cs_cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: csClusterId: The ID of the CS cluster.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "csClusterId"))

    @cs_cluster_id.setter
    def cs_cluster_id(
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
        jsii.set(self, "csClusterId", value)

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
    @jsii.member(jsii_name="enableAsm")
    def enable_asm(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: enableAsm: Whether enable ASM.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "enableAsm"))

    @enable_asm.setter
    def enable_asm(
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
        jsii.set(self, "enableAsm", value)

    @builtins.property
    @jsii.member(jsii_name="namespaceId")
    def namespace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: namespaceId: The ID of the namespace to which the cluster that you want to import belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "namespaceId"))

    @namespace_id.setter
    def namespace_id(
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
        jsii.set(self, "namespaceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.RosK8sClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "cs_cluster_id": "csClusterId",
        "enable_asm": "enableAsm",
        "namespace_id": "namespaceId",
    },
)
class RosK8sClusterProps:
    def __init__(
        self,
        *,
        cs_cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        enable_asm: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        namespace_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::K8sCluster``.

        :param cs_cluster_id: 
        :param enable_asm: 
        :param namespace_id: 
        '''
        if __debug__:
            def stub(
                *,
                cs_cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                enable_asm: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                namespace_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument cs_cluster_id", value=cs_cluster_id, expected_type=type_hints["cs_cluster_id"])
            check_type(argname="argument enable_asm", value=enable_asm, expected_type=type_hints["enable_asm"])
            check_type(argname="argument namespace_id", value=namespace_id, expected_type=type_hints["namespace_id"])
        self._values: typing.Dict[str, typing.Any] = {
            "cs_cluster_id": cs_cluster_id,
        }
        if enable_asm is not None:
            self._values["enable_asm"] = enable_asm
        if namespace_id is not None:
            self._values["namespace_id"] = namespace_id

    @builtins.property
    def cs_cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: csClusterId: The ID of the CS cluster.
        '''
        result = self._values.get("cs_cluster_id")
        assert result is not None, "Required property 'cs_cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def enable_asm(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: enableAsm: Whether enable ASM.
        '''
        result = self._values.get("enable_asm")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def namespace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: namespaceId: The ID of the namespace to which the cluster that you want to import belongs.
        '''
        result = self._values.get("namespace_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosK8sClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosK8sSlbBinding(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.RosK8sSlbBinding",
):
    '''A ROS template type:  ``ALIYUN::EDAS::K8sSlbBinding``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosK8sSlbBindingProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::K8sSlbBinding``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosK8sSlbBindingProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrAddress")
    def attr_address(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Address: The address of load balancer instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AppId: The ID of the application.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property
    @jsii.member(jsii_name="attrChangeOrderId")
    def attr_change_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ChangeOrderId: The ID of the change process.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrChangeOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LoadBalancerId: The ID of load balancer instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerName")
    def attr_load_balancer_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LoadBalancerName: The name of load balancer instance defined in EDAS.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="appId")
    def app_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: appId: The ID of the application.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "appId"))

    @app_id.setter
    def app_id(
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
        jsii.set(self, "appId", value)

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
    @jsii.member(jsii_name="servicePortInfos")
    def service_port_infos(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sSlbBinding.ServicePortInfosProperty"]]]:
        '''
        :Property: servicePortInfos: The information about the ports.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sSlbBinding.ServicePortInfosProperty"]]], jsii.get(self, "servicePortInfos"))

    @service_port_infos.setter
    def service_port_infos(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosK8sSlbBinding.ServicePortInfosProperty"]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosK8sSlbBinding.ServicePortInfosProperty]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "servicePortInfos", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: type: The type of the SLB instance. Valid values: internet and intranet.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "type"))

    @type.setter
    def type(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: loadBalancerId: The ID of the load balancer instance. If you leave this parameter empty, Enterprise Distributed Application Service (EDAS) automatically purchases an SLB instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
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
        jsii.set(self, "loadBalancerId", value)

    @builtins.property
    @jsii.member(jsii_name="scheduler")
    def scheduler(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        scheduler: The scheduling algorithm. Valid values:
        wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
        rr: Requests are distributed to backend servers in sequence.
        Default value: rr
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "scheduler"))

    @scheduler.setter
    def scheduler(
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
        jsii.set(self, "scheduler", value)

    @builtins.property
    @jsii.member(jsii_name="specification")
    def specification(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: specification: The specification of the load balancer instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "specification"))

    @specification.setter
    def specification(
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
        jsii.set(self, "specification", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-edas.RosK8sSlbBinding.ServicePortInfosProperty",
        jsii_struct_bases=[],
        name_mapping={
            "load_balancer_protocol": "loadBalancerProtocol",
            "port": "port",
            "target_port": "targetPort",
            "cert_id": "certId",
        },
    )
    class ServicePortInfosProperty:
        def __init__(
            self,
            *,
            load_balancer_protocol: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            target_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            cert_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param load_balancer_protocol: 
            :param port: 
            :param target_port: 
            :param cert_id: 
            '''
            if __debug__:
                def stub(
                    *,
                    load_balancer_protocol: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                    target_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                    cert_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument load_balancer_protocol", value=load_balancer_protocol, expected_type=type_hints["load_balancer_protocol"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument target_port", value=target_port, expected_type=type_hints["target_port"])
                check_type(argname="argument cert_id", value=cert_id, expected_type=type_hints["cert_id"])
            self._values: typing.Dict[str, typing.Any] = {
                "load_balancer_protocol": load_balancer_protocol,
                "port": port,
                "target_port": target_port,
            }
            if cert_id is not None:
                self._values["cert_id"] = cert_id

        @builtins.property
        def load_balancer_protocol(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: loadBalancerProtocol: The protocol of load balancer. Valid values: TCP and HTTPS. If the HTTP protocol is used, set this parameter to TCP.
            '''
            result = self._values.get("load_balancer_protocol")
            assert result is not None, "Required property 'load_balancer_protocol' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: port: The frontend port. Valid values: 1 to 65535. Each port must be unique.
            '''
            result = self._values.get("port")
            assert result is not None, "Required property 'port' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def target_port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: targetPort: The backend port. Valid values: 1 to 65535.
            '''
            result = self._values.get("target_port")
            assert result is not None, "Required property 'target_port' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def cert_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: certId: The ID of the certificate. This parameter is required if the HTTPS protocol is used.
            '''
            result = self._values.get("cert_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ServicePortInfosProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.RosK8sSlbBindingProps",
    jsii_struct_bases=[],
    name_mapping={
        "app_id": "appId",
        "cluster_id": "clusterId",
        "service_port_infos": "servicePortInfos",
        "type": "type",
        "load_balancer_id": "loadBalancerId",
        "scheduler": "scheduler",
        "specification": "specification",
    },
)
class RosK8sSlbBindingProps:
    def __init__(
        self,
        *,
        app_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        service_port_infos: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sSlbBinding.ServicePortInfosProperty, typing.Dict[str, typing.Any]]]]],
        type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        load_balancer_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        scheduler: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        specification: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::K8sSlbBinding``.

        :param app_id: 
        :param cluster_id: 
        :param service_port_infos: 
        :param type: 
        :param load_balancer_id: 
        :param scheduler: 
        :param specification: 
        '''
        if __debug__:
            def stub(
                *,
                app_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                service_port_infos: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosK8sSlbBinding.ServicePortInfosProperty, typing.Dict[str, typing.Any]]]]],
                type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                load_balancer_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                scheduler: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                specification: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument app_id", value=app_id, expected_type=type_hints["app_id"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument service_port_infos", value=service_port_infos, expected_type=type_hints["service_port_infos"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument scheduler", value=scheduler, expected_type=type_hints["scheduler"])
            check_type(argname="argument specification", value=specification, expected_type=type_hints["specification"])
        self._values: typing.Dict[str, typing.Any] = {
            "app_id": app_id,
            "cluster_id": cluster_id,
            "service_port_infos": service_port_infos,
            "type": type,
        }
        if load_balancer_id is not None:
            self._values["load_balancer_id"] = load_balancer_id
        if scheduler is not None:
            self._values["scheduler"] = scheduler
        if specification is not None:
            self._values["specification"] = specification

    @builtins.property
    def app_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: appId: The ID of the application.
        '''
        result = self._values.get("app_id")
        assert result is not None, "Required property 'app_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterId: The ID of the cluster.
        '''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def service_port_infos(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosK8sSlbBinding.ServicePortInfosProperty]]]:
        '''
        :Property: servicePortInfos: The information about the ports.
        '''
        result = self._values.get("service_port_infos")
        assert result is not None, "Required property 'service_port_infos' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosK8sSlbBinding.ServicePortInfosProperty]]], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: type: The type of the SLB instance. Valid values: internet and intranet.
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: loadBalancerId: The ID of the load balancer instance. If you leave this parameter empty, Enterprise Distributed Application Service (EDAS) automatically purchases an SLB instance.
        '''
        result = self._values.get("load_balancer_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def scheduler(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        scheduler: The scheduling algorithm. Valid values:
        wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
        rr: Requests are distributed to backend servers in sequence.
        Default value: rr
        '''
        result = self._values.get("scheduler")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def specification(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: specification: The specification of the load balancer instance.
        '''
        result = self._values.get("specification")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosK8sSlbBindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUserDefineRegion(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.RosUserDefineRegion",
):
    '''A ROS template type:  ``ALIYUN::EDAS::UserDefineRegion``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosUserDefineRegionProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::UserDefineRegion``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosUserDefineRegionProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrBelongRegion")
    def attr_belong_region(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: BelongRegion: Under the physical region ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBelongRegion"))

    @builtins.property
    @jsii.member(jsii_name="attrDebugEnable")
    def attr_debug_enable(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DebugEnable: Whether debug is enable
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDebugEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Id: Resource ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrId"))

    @builtins.property
    @jsii.member(jsii_name="attrRegionName")
    def attr_region_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RegionName: Region name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRegionName"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: UserId: User account ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUserId"))

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
    @jsii.member(jsii_name="regionName")
    def region_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: regionName: Logical region (or namespace) name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "regionName"))

    @region_name.setter
    def region_name(
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
        jsii.set(self, "regionName", value)

    @builtins.property
    @jsii.member(jsii_name="regionTag")
    def region_tag(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier")
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "regionTag"))

    @region_tag.setter
    def region_tag(
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
        jsii.set(self, "regionTag", value)

    @builtins.property
    @jsii.member(jsii_name="debugEnable")
    def debug_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: debugEnable: Whether debug is enable
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "debugEnable"))

    @debug_enable.setter
    def debug_enable(
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
        jsii.set(self, "debugEnable", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Logic region (or namespace) description
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
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
        jsii.set(self, "description", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.RosUserDefineRegionProps",
    jsii_struct_bases=[],
    name_mapping={
        "region_name": "regionName",
        "region_tag": "regionTag",
        "debug_enable": "debugEnable",
        "description": "description",
    },
)
class RosUserDefineRegionProps:
    def __init__(
        self,
        *,
        region_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        region_tag: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        debug_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::UserDefineRegion``.

        :param region_name: 
        :param region_tag: 
        :param debug_enable: 
        :param description: 
        '''
        if __debug__:
            def stub(
                *,
                region_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                region_tag: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                debug_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument region_name", value=region_name, expected_type=type_hints["region_name"])
            check_type(argname="argument region_tag", value=region_tag, expected_type=type_hints["region_tag"])
            check_type(argname="argument debug_enable", value=debug_enable, expected_type=type_hints["debug_enable"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[str, typing.Any] = {
            "region_name": region_name,
            "region_tag": region_tag,
        }
        if debug_enable is not None:
            self._values["debug_enable"] = debug_enable
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def region_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: regionName: Logical region (or namespace) name
        '''
        result = self._values.get("region_name")
        assert result is not None, "Required property 'region_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def region_tag(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier")
        '''
        result = self._values.get("region_tag")
        assert result is not None, "Required property 'region_tag' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def debug_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: debugEnable: Whether debug is enable
        '''
        result = self._values.get("debug_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Logic region (or namespace) description
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserDefineRegionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class UserDefineRegion(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.UserDefineRegion",
):
    '''A ROS resource type:  ``ALIYUN::EDAS::UserDefineRegion``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["UserDefineRegionProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::UserDefineRegion``.

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
                props: typing.Union[UserDefineRegionProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrBelongRegion")
    def attr_belong_region(self) -> ros_cdk_core.IResolvable:
        '''Attribute BelongRegion: Under the physical region ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBelongRegion"))

    @builtins.property
    @jsii.member(jsii_name="attrDebugEnable")
    def attr_debug_enable(self) -> ros_cdk_core.IResolvable:
        '''Attribute DebugEnable: Whether debug is enable.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDebugEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute Id: Resource ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrId"))

    @builtins.property
    @jsii.member(jsii_name="attrRegionName")
    def attr_region_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute RegionName: Region name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRegionName"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute UserId: User account ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUserId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.UserDefineRegionProps",
    jsii_struct_bases=[],
    name_mapping={
        "region_name": "regionName",
        "region_tag": "regionTag",
        "debug_enable": "debugEnable",
        "description": "description",
    },
)
class UserDefineRegionProps:
    def __init__(
        self,
        *,
        region_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        region_tag: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        debug_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::UserDefineRegion``.

        :param region_name: Property regionName: Logical region (or namespace) name.
        :param region_tag: Property regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier").
        :param debug_enable: Property debugEnable: Whether debug is enable.
        :param description: Property description: Logic region (or namespace) description.
        '''
        if __debug__:
            def stub(
                *,
                region_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                region_tag: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                debug_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument region_name", value=region_name, expected_type=type_hints["region_name"])
            check_type(argname="argument region_tag", value=region_tag, expected_type=type_hints["region_tag"])
            check_type(argname="argument debug_enable", value=debug_enable, expected_type=type_hints["debug_enable"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[str, typing.Any] = {
            "region_name": region_name,
            "region_tag": region_tag,
        }
        if debug_enable is not None:
            self._values["debug_enable"] = debug_enable
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def region_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property regionName: Logical region (or namespace) name.'''
        result = self._values.get("region_name")
        assert result is not None, "Required property 'region_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def region_tag(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier").'''
        result = self._values.get("region_tag")
        assert result is not None, "Required property 'region_tag' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def debug_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property debugEnable: Whether debug is enable.'''
        result = self._values.get("debug_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Logic region (or namespace) description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UserDefineRegionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Application",
    "ApplicationProps",
    "Cluster",
    "ClusterMember",
    "ClusterMemberProps",
    "ClusterProps",
    "DeployGroup",
    "DeployGroupProps",
    "K8sApplication",
    "K8sApplicationProps",
    "K8sCluster",
    "K8sClusterProps",
    "K8sSlbBinding",
    "K8sSlbBindingProps",
    "RosApplication",
    "RosApplicationProps",
    "RosCluster",
    "RosClusterMember",
    "RosClusterMemberProps",
    "RosClusterProps",
    "RosDeployGroup",
    "RosDeployGroupProps",
    "RosK8sApplication",
    "RosK8sApplicationProps",
    "RosK8sCluster",
    "RosK8sClusterProps",
    "RosK8sSlbBinding",
    "RosK8sSlbBindingProps",
    "RosUserDefineRegion",
    "RosUserDefineRegionProps",
    "UserDefineRegion",
    "UserDefineRegionProps",
]

publication.publish()
