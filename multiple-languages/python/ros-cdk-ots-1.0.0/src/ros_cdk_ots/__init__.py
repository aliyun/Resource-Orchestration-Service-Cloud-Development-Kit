"""
## Aliyun ROS OTS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_ots as OTS
```
"""
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


class Instance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ots.Instance",
):
    """A ROS resource type:  ``ALIYUN::OTS::Instance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "InstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::OTS::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Instance, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> typing.Any:
        """
        :Attribute: InstanceName: Instance name
        """
        return jsii.get(self, "attrInstanceName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPrivateEndpoint")
    def attr_private_endpoint(self) -> typing.Any:
        """
        :Attribute: PrivateEndpoint: Private endpoint
        """
        return jsii.get(self, "attrPrivateEndpoint")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPublicEndpoint")
    def attr_public_endpoint(self) -> typing.Any:
        """
        :Attribute: PublicEndpoint: Public endpoint
        """
        return jsii.get(self, "attrPublicEndpoint")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVpcEndpoint")
    def attr_vpc_endpoint(self) -> typing.Any:
        """
        :Attribute: VpcEndpoint: Vpc endpoint
        """
        return jsii.get(self, "attrVpcEndpoint")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ots.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_name": "instanceName",
        "cluster_type": "clusterType",
        "description": "description",
        "network": "network",
        "tags": "tags",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        instance_name: builtins.str,
        cluster_type: typing.Optional[builtins.str] = None,
        description: typing.Optional[builtins.str] = None,
        network: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::OTS::Instance``.

        :param instance_name: 
        :param cluster_type: 
        :param description: 
        :param network: 
        :param tags: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "instance_name": instance_name,
        }
        if cluster_type is not None:
            self._values["cluster_type"] = cluster_type
        if description is not None:
            self._values["description"] = description
        if network is not None:
            self._values["network"] = network
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def instance_name(self) -> builtins.str:
        """
        :Property: instanceName: The name of the instance.
        """
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return result

    @builtins.property
    def cluster_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: clusterType: Cluster type, the default is SSD.
        """
        result = self._values.get("cluster_type")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Instance description.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def network(self) -> typing.Optional[builtins.str]:
        """
        :Property: network: Instance network type, default is NORMAL.
        """
        result = self._values.get("network")
        return result

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: tags: Tags to attach to instance. Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        """
        result = self._values.get("tags")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ots.RosInstance",
):
    """A ROS template type:  ``ALIYUN::OTS::Instance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::OTS::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosInstance, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> typing.Any:
        """
        :Attribute: InstanceName: Instance name
        """
        return jsii.get(self, "attrInstanceName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPrivateEndpoint")
    def attr_private_endpoint(self) -> typing.Any:
        """
        :Attribute: PrivateEndpoint: Private endpoint
        """
        return jsii.get(self, "attrPrivateEndpoint")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPublicEndpoint")
    def attr_public_endpoint(self) -> typing.Any:
        """
        :Attribute: PublicEndpoint: Public endpoint
        """
        return jsii.get(self, "attrPublicEndpoint")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVpcEndpoint")
    def attr_vpc_endpoint(self) -> typing.Any:
        """
        :Attribute: VpcEndpoint: Vpc endpoint
        """
        return jsii.get(self, "attrVpcEndpoint")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tags")
    def tags(self) -> ros_cdk_core.TagManager:
        """
        :Property: tags: Tags to attach to instance. Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        """
        return jsii.get(self, "tags")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceName")
    def instance_name(self) -> builtins.str:
        """
        :Property: instanceName: The name of the instance.
        """
        return jsii.get(self, "instanceName")

    @instance_name.setter # type: ignore
    def instance_name(self, value: builtins.str) -> None:
        jsii.set(self, "instanceName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="clusterType")
    def cluster_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: clusterType: Cluster type, the default is SSD.
        """
        return jsii.get(self, "clusterType")

    @cluster_type.setter # type: ignore
    def cluster_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "clusterType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Instance description.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="network")
    def network(self) -> typing.Optional[builtins.str]:
        """
        :Property: network: Instance network type, default is NORMAL.
        """
        return jsii.get(self, "network")

    @network.setter # type: ignore
    def network(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "network", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ots.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_name": "instanceName",
        "cluster_type": "clusterType",
        "description": "description",
        "network": "network",
        "tags": "tags",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        instance_name: builtins.str,
        cluster_type: typing.Optional[builtins.str] = None,
        description: typing.Optional[builtins.str] = None,
        network: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[ros_cdk_core.RosTag]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::OTS::Instance``.

        :param instance_name: 
        :param cluster_type: 
        :param description: 
        :param network: 
        :param tags: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "instance_name": instance_name,
        }
        if cluster_type is not None:
            self._values["cluster_type"] = cluster_type
        if description is not None:
            self._values["description"] = description
        if network is not None:
            self._values["network"] = network
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def instance_name(self) -> builtins.str:
        """
        :Property: instanceName: The name of the instance.
        """
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return result

    @builtins.property
    def cluster_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: clusterType: Cluster type, the default is SSD.
        """
        result = self._values.get("cluster_type")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Instance description.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def network(self) -> typing.Optional[builtins.str]:
        """
        :Property: network: Instance network type, default is NORMAL.
        """
        result = self._values.get("network")
        return result

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[ros_cdk_core.RosTag]]:
        """
        :Property: tags: Tags to attach to instance. Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        """
        result = self._values.get("tags")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSearchIndex(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex",
):
    """A ROS template type:  ``ALIYUN::OTS::SearchIndex``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSearchIndexProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::OTS::SearchIndex``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosSearchIndex, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIndexName")
    def attr_index_name(self) -> typing.Any:
        """
        :Attribute: IndexName: Index name.
        """
        return jsii.get(self, "attrIndexName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="fieldSchemas")
    def field_schemas(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: fieldSchemas: list of field_schema.
        """
        return jsii.get(self, "fieldSchemas")

    @field_schemas.setter # type: ignore
    def field_schemas(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "fieldSchemas", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="indexName")
    def index_name(self) -> builtins.str:
        """
        :Property: indexName: The index name.
        """
        return jsii.get(self, "indexName")

    @index_name.setter # type: ignore
    def index_name(self, value: builtins.str) -> None:
        jsii.set(self, "indexName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceName")
    def instance_name(self) -> builtins.str:
        """
        :Property: instanceName: The name of the OTS instance in which table will locate.
        """
        return jsii.get(self, "instanceName")

    @instance_name.setter # type: ignore
    def instance_name(self, value: builtins.str) -> None:
        jsii.set(self, "instanceName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tableName")
    def table_name(self) -> builtins.str:
        """
        :Property: tableName: The table name of the OTS instance.
        """
        return jsii.get(self, "tableName")

    @table_name.setter # type: ignore
    def table_name(self, value: builtins.str) -> None:
        jsii.set(self, "tableName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="indexSetting")
    def index_setting(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.IndexSettingProperty"]]:
        """
        :Property: indexSetting: Index settings
        """
        return jsii.get(self, "indexSetting")

    @index_setting.setter # type: ignore
    def index_setting(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.IndexSettingProperty"]],
    ) -> None:
        jsii.set(self, "indexSetting", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="indexSort")
    def index_sort(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.IndexSortProperty"]]:
        """
        :Property:

        indexSort: This parameter specifies how data is sorted.
        By default, the data is sorted in the same way as the primary key of the table.
        If the search index contains NESTED fields, data is not sorted by default.
        """
        return jsii.get(self, "indexSort")

    @index_sort.setter # type: ignore
    def index_sort(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.IndexSortProperty"]],
    ) -> None:
        jsii.set(self, "indexSort", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.FieldSortProperty",
        jsii_struct_bases=[],
        name_mapping={
            "field_name": "fieldName",
            "sort_mode": "sortMode",
            "sort_order": "sortOrder",
        },
    )
    class FieldSortProperty:
        def __init__(
            self,
            *,
            field_name: builtins.str,
            sort_mode: typing.Optional[builtins.str] = None,
            sort_order: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param field_name: 
            :param sort_mode: 
            :param sort_order: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "field_name": field_name,
            }
            if sort_mode is not None:
                self._values["sort_mode"] = sort_mode
            if sort_order is not None:
                self._values["sort_order"] = sort_order

        @builtins.property
        def field_name(self) -> builtins.str:
            """
            :Property: fieldName: Sorted field name.
            """
            result = self._values.get("field_name")
            assert result is not None, "Required property 'field_name' is missing"
            return result

        @builtins.property
        def sort_mode(self) -> typing.Optional[builtins.str]:
            """
            :Property: sortMode: Sorting method when there are multiple values in the field.
            """
            result = self._values.get("sort_mode")
            return result

        @builtins.property
        def sort_order(self) -> typing.Optional[builtins.str]:
            """
            :Property: sortOrder: The sort order can be sorted in ascending or descending order, the default is ascending(SortOrder.ASC).
            """
            result = self._values.get("sort_order")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "FieldSortProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.GeoDistanceSortProperty",
        jsii_struct_bases=[],
        name_mapping={
            "field_name": "fieldName",
            "points": "points",
            "sort_mode": "sortMode",
            "sort_order": "sortOrder",
        },
    )
    class GeoDistanceSortProperty:
        def __init__(
            self,
            *,
            field_name: builtins.str,
            points: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
            sort_mode: typing.Optional[builtins.str] = None,
            sort_order: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param field_name: 
            :param points: 
            :param sort_mode: 
            :param sort_order: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "field_name": field_name,
                "points": points,
            }
            if sort_mode is not None:
                self._values["sort_mode"] = sort_mode
            if sort_order is not None:
                self._values["sort_order"] = sort_order

        @builtins.property
        def field_name(self) -> builtins.str:
            """
            :Property: fieldName: Sorted field name.
            """
            result = self._values.get("field_name")
            assert result is not None, "Required property 'field_name' is missing"
            return result

        @builtins.property
        def points(
            self,
        ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
            """
            :Property: points: The parameter of GeoDistanceSort
            """
            result = self._values.get("points")
            assert result is not None, "Required property 'points' is missing"
            return result

        @builtins.property
        def sort_mode(self) -> typing.Optional[builtins.str]:
            """
            :Property: sortMode: Sorting method when there are multiple values in the field.
            """
            result = self._values.get("sort_mode")
            return result

        @builtins.property
        def sort_order(self) -> typing.Optional[builtins.str]:
            """
            :Property: sortOrder: The sort order can be sorted in ascending or descending order
            """
            result = self._values.get("sort_order")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "GeoDistanceSortProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.IndexSettingProperty",
        jsii_struct_bases=[],
        name_mapping={"routing_fields": "routingFields"},
    )
    class IndexSettingProperty:
        def __init__(
            self,
            *,
            routing_fields: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        ) -> None:
            """
            :param routing_fields: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if routing_fields is not None:
                self._values["routing_fields"] = routing_fields

        @builtins.property
        def routing_fields(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            """
            :Property:

            routingFields: You can use this advanced feature to customize routing fields.
            You can specify some primary key columns as routing fields.
            Tablestore distributes data that is written to a search index to different partitions based on the specified routing fields.
            The data with the same routing field values is distributed to the same data partition.
            """
            result = self._values.get("routing_fields")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IndexSettingProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.IndexSortProperty",
        jsii_struct_bases=[],
        name_mapping={"sorters": "sorters"},
    )
    class IndexSortProperty:
        def __init__(
            self,
            *,
            sorters: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.SortersProperty"]]],
        ) -> None:
            """
            :param sorters: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "sorters": sorters,
            }

        @builtins.property
        def sorters(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.SortersProperty"]]]:
            """
            :Property:

            sorters: This parameter specifies the sorting methods.  Valid values:

            - PrimaryKeySort: The index is sorted by primary key in ascending or descending order.
            - FieldSort: The index is sorted by a specified column in ascending or descending order.
            """
            result = self._values.get("sorters")
            assert result is not None, "Required property 'sorters' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IndexSortProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.PrimaryKeySortProperty",
        jsii_struct_bases=[],
        name_mapping={"sort_order": "sortOrder"},
    )
    class PrimaryKeySortProperty:
        def __init__(self, *, sort_order: typing.Optional[builtins.str] = None) -> None:
            """
            :param sort_order: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if sort_order is not None:
                self._values["sort_order"] = sort_order

        @builtins.property
        def sort_order(self) -> typing.Optional[builtins.str]:
            """
            :Property: sortOrder: The sort order can be sorted in ascending or descending order, the default is ascending(SortOrder.ASC).
            """
            result = self._values.get("sort_order")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PrimaryKeySortProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.ScoreSortProperty",
        jsii_struct_bases=[],
        name_mapping={"sort_order": "sortOrder"},
    )
    class ScoreSortProperty:
        def __init__(self, *, sort_order: typing.Optional[builtins.str] = None) -> None:
            """
            :param sort_order: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if sort_order is not None:
                self._values["sort_order"] = sort_order

        @builtins.property
        def sort_order(self) -> typing.Optional[builtins.str]:
            """
            :Property: sortOrder: The sort order can be sorted in ascending or descending order
            """
            result = self._values.get("sort_order")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ScoreSortProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.SortersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "field_sort": "fieldSort",
            "geo_distance_sort": "geoDistanceSort",
            "primary_key_sort": "primaryKeySort",
            "score_sort": "scoreSort",
        },
    )
    class SortersProperty:
        def __init__(
            self,
            *,
            field_sort: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.FieldSortProperty"]] = None,
            geo_distance_sort: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.GeoDistanceSortProperty"]] = None,
            primary_key_sort: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.PrimaryKeySortProperty"]] = None,
            score_sort: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.ScoreSortProperty"]] = None,
        ) -> None:
            """
            :param field_sort: 
            :param geo_distance_sort: 
            :param primary_key_sort: 
            :param score_sort: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if field_sort is not None:
                self._values["field_sort"] = field_sort
            if geo_distance_sort is not None:
                self._values["geo_distance_sort"] = geo_distance_sort
            if primary_key_sort is not None:
                self._values["primary_key_sort"] = primary_key_sort
            if score_sort is not None:
                self._values["score_sort"] = score_sort

        @builtins.property
        def field_sort(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.FieldSortProperty"]]:
            """
            :Property:

            fieldSort: Sort by field value.
            Only fields that are indexed and have sorting and statistical aggregation functions enabled can be pre-sorted
            """
            result = self._values.get("field_sort")
            return result

        @builtins.property
        def geo_distance_sort(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.GeoDistanceSortProperty"]]:
            """
            :Property: geoDistanceSort: You can use GeoDistanceSort to sort the query result based on distances of geographical locations.
            """
            result = self._values.get("geo_distance_sort")
            return result

        @builtins.property
        def primary_key_sort(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.PrimaryKeySortProperty"]]:
            """
            :Property: primaryKeySort: You can use PrimaryKeySort to sort the query result based on the order of primary key columns.
            """
            result = self._values.get("primary_key_sort")
            return result

        @builtins.property
        def score_sort(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.ScoreSortProperty"]]:
            """
            :Property:

            scoreSort: You can use ScoreSort to sort the query result by keyword relevance score.
            ScoreSort is applicable to scenarios such as full-text indexing.
            Note Note that you must set ScoreSort to sort the query result by keyword relevance score. Otherwise, the query result is sorted based on the value of the IndexSort field.
            """
            result = self._values.get("score_sort")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SortersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ots.RosSearchIndexProps",
    jsii_struct_bases=[],
    name_mapping={
        "field_schemas": "fieldSchemas",
        "index_name": "indexName",
        "instance_name": "instanceName",
        "table_name": "tableName",
        "index_setting": "indexSetting",
        "index_sort": "indexSort",
    },
)
class RosSearchIndexProps:
    def __init__(
        self,
        *,
        field_schemas: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        index_name: builtins.str,
        instance_name: builtins.str,
        table_name: builtins.str,
        index_setting: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.IndexSettingProperty]] = None,
        index_sort: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.IndexSortProperty]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::OTS::SearchIndex``.

        :param field_schemas: 
        :param index_name: 
        :param instance_name: 
        :param table_name: 
        :param index_setting: 
        :param index_sort: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "field_schemas": field_schemas,
            "index_name": index_name,
            "instance_name": instance_name,
            "table_name": table_name,
        }
        if index_setting is not None:
            self._values["index_setting"] = index_setting
        if index_sort is not None:
            self._values["index_sort"] = index_sort

    @builtins.property
    def field_schemas(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: fieldSchemas: list of field_schema.
        """
        result = self._values.get("field_schemas")
        assert result is not None, "Required property 'field_schemas' is missing"
        return result

    @builtins.property
    def index_name(self) -> builtins.str:
        """
        :Property: indexName: The index name.
        """
        result = self._values.get("index_name")
        assert result is not None, "Required property 'index_name' is missing"
        return result

    @builtins.property
    def instance_name(self) -> builtins.str:
        """
        :Property: instanceName: The name of the OTS instance in which table will locate.
        """
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return result

    @builtins.property
    def table_name(self) -> builtins.str:
        """
        :Property: tableName: The table name of the OTS instance.
        """
        result = self._values.get("table_name")
        assert result is not None, "Required property 'table_name' is missing"
        return result

    @builtins.property
    def index_setting(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.IndexSettingProperty]]:
        """
        :Property: indexSetting: Index settings
        """
        result = self._values.get("index_setting")
        return result

    @builtins.property
    def index_sort(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.IndexSortProperty]]:
        """
        :Property:

        indexSort: This parameter specifies how data is sorted.
        By default, the data is sorted in the same way as the primary key of the table.
        If the search index contains NESTED fields, data is not sorted by default.
        """
        result = self._values.get("index_sort")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSearchIndexProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTable(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ots.RosTable",
):
    """A ROS template type:  ``ALIYUN::OTS::Table``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTableProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::OTS::Table``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosTable, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTableName")
    def attr_table_name(self) -> typing.Any:
        """
        :Attribute: TableName: Table name
        """
        return jsii.get(self, "attrTableName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceName")
    def instance_name(self) -> builtins.str:
        """
        :Property: instanceName: The name of the OTS instance in which table will locate.
        """
        return jsii.get(self, "instanceName")

    @instance_name.setter # type: ignore
    def instance_name(self, value: builtins.str) -> None:
        jsii.set(self, "instanceName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="primaryKey")
    def primary_key(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTable.PrimaryKeyProperty"]]]:
        """
        :Property: primaryKey: It describes the attribute value of primary key. The number of primary_key should not be less than one and not be more than four.
        """
        return jsii.get(self, "primaryKey")

    @primary_key.setter # type: ignore
    def primary_key(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTable.PrimaryKeyProperty"]]],
    ) -> None:
        jsii.set(self, "primaryKey", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tableName")
    def table_name(self) -> builtins.str:
        """
        :Property: tableName: The table name of the OTS instance.
        """
        return jsii.get(self, "tableName")

    @table_name.setter # type: ignore
    def table_name(self, value: builtins.str) -> None:
        jsii.set(self, "tableName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="columns")
    def columns(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTable.ColumnsProperty"]]]]:
        """
        :Property: columns: Attribute column for table store.
        """
        return jsii.get(self, "columns")

    @columns.setter # type: ignore
    def columns(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTable.ColumnsProperty"]]]],
    ) -> None:
        jsii.set(self, "columns", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="deviationCellVersionInSec")
    def deviation_cell_version_in_sec(self) -> typing.Optional[jsii.Number]:
        """
        :Property: deviationCellVersionInSec: Maximum version deviation. The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
        """
        return jsii.get(self, "deviationCellVersionInSec")

    @deviation_cell_version_in_sec.setter # type: ignore
    def deviation_cell_version_in_sec(
        self,
        value: typing.Optional[jsii.Number],
    ) -> None:
        jsii.set(self, "deviationCellVersionInSec", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="maxVersions")
    def max_versions(self) -> typing.Optional[jsii.Number]:
        """
        :Property: maxVersions: The maximum number of versions stored in this table. The valid value is 1-2147483647. Default to 1.
        """
        return jsii.get(self, "maxVersions")

    @max_versions.setter # type: ignore
    def max_versions(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "maxVersions", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="reservedThroughput")
    def reserved_throughput(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosTable.ReservedThroughputProperty"]]:
        """
        :Property: reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
        """
        return jsii.get(self, "reservedThroughput")

    @reserved_throughput.setter # type: ignore
    def reserved_throughput(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosTable.ReservedThroughputProperty"]],
    ) -> None:
        jsii.set(self, "reservedThroughput", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="secondaryIndices")
    def secondary_indices(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTable.SecondaryIndicesProperty"]]]]:
        """
        :Property: secondaryIndices: The secondary indices of the table.
        """
        return jsii.get(self, "secondaryIndices")

    @secondary_indices.setter # type: ignore
    def secondary_indices(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTable.SecondaryIndicesProperty"]]]],
    ) -> None:
        jsii.set(self, "secondaryIndices", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="timeToLive")
    def time_to_live(self) -> typing.Optional[jsii.Number]:
        """
        :Property: timeToLive: The retention time of data stored in this table (unit: second). The value maximum is 2147483647 and -1 means never expired. Default to -1.
        """
        return jsii.get(self, "timeToLive")

    @time_to_live.setter # type: ignore
    def time_to_live(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "timeToLive", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosTable.ColumnsProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "type": "type"},
    )
    class ColumnsProperty:
        def __init__(self, *, name: builtins.str, type: builtins.str) -> None:
            """
            :param name: 
            :param type: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "name": name,
                "type": type,
            }

        @builtins.property
        def name(self) -> builtins.str:
            """
            :Property: name: The column name of the column.
            """
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return result

        @builtins.property
        def type(self) -> builtins.str:
            """
            :Property: type: The type of the column.
            """
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ColumnsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosTable.PrimaryKeyProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "type": "type"},
    )
    class PrimaryKeyProperty:
        def __init__(self, *, name: builtins.str, type: builtins.str) -> None:
            """
            :param name: 
            :param type: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "name": name,
                "type": type,
            }

        @builtins.property
        def name(self) -> builtins.str:
            """
            :Property: name: Name for primary key.
            """
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return result

        @builtins.property
        def type(self) -> builtins.str:
            """
            :Property: type: Type for primary key. Only INTEGER, STRING or BINARY is allowed.
            """
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PrimaryKeyProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosTable.ReservedThroughputProperty",
        jsii_struct_bases=[],
        name_mapping={"read": "read", "write": "write"},
    )
    class ReservedThroughputProperty:
        def __init__(self, *, read: jsii.Number, write: jsii.Number) -> None:
            """
            :param read: 
            :param write: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "read": read,
                "write": write,
            }

        @builtins.property
        def read(self) -> jsii.Number:
            """
            :Property: read: The read service capability unit consumed by this operation or the reserved read throughput of the table. Default to 0.
            """
            result = self._values.get("read")
            assert result is not None, "Required property 'read' is missing"
            return result

        @builtins.property
        def write(self) -> jsii.Number:
            """
            :Property: write: The write service capability unit consumed by this operation or the reserved write throughput of the table. Default to 0.
            """
            result = self._values.get("write")
            assert result is not None, "Required property 'write' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ReservedThroughputProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosTable.SecondaryIndicesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "columns": "columns",
            "index_name": "indexName",
            "primary_keys": "primaryKeys",
            "index_type": "indexType",
        },
    )
    class SecondaryIndicesProperty:
        def __init__(
            self,
            *,
            columns: typing.List[builtins.str],
            index_name: builtins.str,
            primary_keys: typing.List[builtins.str],
            index_type: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param columns: 
            :param index_name: 
            :param primary_keys: 
            :param index_type: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "columns": columns,
                "index_name": index_name,
                "primary_keys": primary_keys,
            }
            if index_type is not None:
                self._values["index_type"] = index_type

        @builtins.property
        def columns(self) -> typing.List[builtins.str]:
            """
            :Property: columns: The columns of the index.
            """
            result = self._values.get("columns")
            assert result is not None, "Required property 'columns' is missing"
            return result

        @builtins.property
        def index_name(self) -> builtins.str:
            """
            :Property: indexName: The index name.
            """
            result = self._values.get("index_name")
            assert result is not None, "Required property 'index_name' is missing"
            return result

        @builtins.property
        def primary_keys(self) -> typing.List[builtins.str]:
            """
            :Property: primaryKeys: The primary keys of the index.
            """
            result = self._values.get("primary_keys")
            assert result is not None, "Required property 'primary_keys' is missing"
            return result

        @builtins.property
        def index_type(self) -> typing.Optional[builtins.str]:
            """
            :Property: indexType: The index type
            """
            result = self._values.get("index_type")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SecondaryIndicesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ots.RosTableProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_name": "instanceName",
        "primary_key": "primaryKey",
        "table_name": "tableName",
        "columns": "columns",
        "deviation_cell_version_in_sec": "deviationCellVersionInSec",
        "max_versions": "maxVersions",
        "reserved_throughput": "reservedThroughput",
        "secondary_indices": "secondaryIndices",
        "time_to_live": "timeToLive",
    },
)
class RosTableProps:
    def __init__(
        self,
        *,
        instance_name: builtins.str,
        primary_key: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.PrimaryKeyProperty]]],
        table_name: builtins.str,
        columns: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.ColumnsProperty]]]] = None,
        deviation_cell_version_in_sec: typing.Optional[jsii.Number] = None,
        max_versions: typing.Optional[jsii.Number] = None,
        reserved_throughput: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosTable.ReservedThroughputProperty]] = None,
        secondary_indices: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.SecondaryIndicesProperty]]]] = None,
        time_to_live: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::OTS::Table``.

        :param instance_name: 
        :param primary_key: 
        :param table_name: 
        :param columns: 
        :param deviation_cell_version_in_sec: 
        :param max_versions: 
        :param reserved_throughput: 
        :param secondary_indices: 
        :param time_to_live: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "instance_name": instance_name,
            "primary_key": primary_key,
            "table_name": table_name,
        }
        if columns is not None:
            self._values["columns"] = columns
        if deviation_cell_version_in_sec is not None:
            self._values["deviation_cell_version_in_sec"] = deviation_cell_version_in_sec
        if max_versions is not None:
            self._values["max_versions"] = max_versions
        if reserved_throughput is not None:
            self._values["reserved_throughput"] = reserved_throughput
        if secondary_indices is not None:
            self._values["secondary_indices"] = secondary_indices
        if time_to_live is not None:
            self._values["time_to_live"] = time_to_live

    @builtins.property
    def instance_name(self) -> builtins.str:
        """
        :Property: instanceName: The name of the OTS instance in which table will locate.
        """
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return result

    @builtins.property
    def primary_key(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.PrimaryKeyProperty]]]:
        """
        :Property: primaryKey: It describes the attribute value of primary key. The number of primary_key should not be less than one and not be more than four.
        """
        result = self._values.get("primary_key")
        assert result is not None, "Required property 'primary_key' is missing"
        return result

    @builtins.property
    def table_name(self) -> builtins.str:
        """
        :Property: tableName: The table name of the OTS instance.
        """
        result = self._values.get("table_name")
        assert result is not None, "Required property 'table_name' is missing"
        return result

    @builtins.property
    def columns(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.ColumnsProperty]]]]:
        """
        :Property: columns: Attribute column for table store.
        """
        result = self._values.get("columns")
        return result

    @builtins.property
    def deviation_cell_version_in_sec(self) -> typing.Optional[jsii.Number]:
        """
        :Property: deviationCellVersionInSec: Maximum version deviation. The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
        """
        result = self._values.get("deviation_cell_version_in_sec")
        return result

    @builtins.property
    def max_versions(self) -> typing.Optional[jsii.Number]:
        """
        :Property: maxVersions: The maximum number of versions stored in this table. The valid value is 1-2147483647. Default to 1.
        """
        result = self._values.get("max_versions")
        return result

    @builtins.property
    def reserved_throughput(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosTable.ReservedThroughputProperty]]:
        """
        :Property: reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
        """
        result = self._values.get("reserved_throughput")
        return result

    @builtins.property
    def secondary_indices(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.SecondaryIndicesProperty]]]]:
        """
        :Property: secondaryIndices: The secondary indices of the table.
        """
        result = self._values.get("secondary_indices")
        return result

    @builtins.property
    def time_to_live(self) -> typing.Optional[jsii.Number]:
        """
        :Property: timeToLive: The retention time of data stored in this table (unit: second). The value maximum is 2147483647 and -1 means never expired. Default to -1.
        """
        result = self._values.get("time_to_live")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVpcBinder(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ots.RosVpcBinder",
):
    """A ROS template type:  ``ALIYUN::OTS::VpcBinder``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosVpcBinderProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::OTS::VpcBinder``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosVpcBinder, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDomains")
    def attr_domains(self) -> typing.Any:
        """
        :Attribute: Domains: The domain names used to access the OTS instance in the VPC.
        """
        return jsii.get(self, "attrDomains")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrEndpoints")
    def attr_endpoints(self) -> typing.Any:
        """
        :Attribute: Endpoints: Private network addresses used to access the OTS instance in the VPC.
        """
        return jsii.get(self, "attrEndpoints")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceName")
    def instance_name(self) -> builtins.str:
        """
        :Property: instanceName: Instance name
        """
        return jsii.get(self, "instanceName")

    @instance_name.setter # type: ignore
    def instance_name(self, value: builtins.str) -> None:
        jsii.set(self, "instanceName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcs")
    def vpcs(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosVpcBinder.VpcsProperty"]]]:
        """
        :Property: vpcs: Vpc binding configuration.
        """
        return jsii.get(self, "vpcs")

    @vpcs.setter # type: ignore
    def vpcs(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosVpcBinder.VpcsProperty"]]],
    ) -> None:
        jsii.set(self, "vpcs", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosVpcBinder.VpcsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_vpc_name": "instanceVpcName",
            "network": "network",
            "virtual_switch_id": "virtualSwitchId",
            "vpc_id": "vpcId",
        },
    )
    class VpcsProperty:
        def __init__(
            self,
            *,
            instance_vpc_name: builtins.str,
            network: builtins.str,
            virtual_switch_id: builtins.str,
            vpc_id: builtins.str,
        ) -> None:
            """
            :param instance_vpc_name: 
            :param network: 
            :param virtual_switch_id: 
            :param vpc_id: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "instance_vpc_name": instance_vpc_name,
                "network": network,
                "virtual_switch_id": virtual_switch_id,
                "vpc_id": vpc_id,
            }

        @builtins.property
        def instance_vpc_name(self) -> builtins.str:
            """
            :Property: instanceVpcName: Custom name, need to be unique under the OTS instance.
            """
            result = self._values.get("instance_vpc_name")
            assert result is not None, "Required property 'instance_vpc_name' is missing"
            return result

        @builtins.property
        def network(self) -> builtins.str:
            """
            :Property:

            network: Instance network type. The values are as follows:
            1, the NORMAL instance does not limit the source of the request. (Defaults)
            2. A VPC instance only allows requests from all VPCs it is bound to.
            3, VPC_CONSOLE instance only allows requests from the console and all VPCs it is bound to
            """
            result = self._values.get("network")
            assert result is not None, "Required property 'network' is missing"
            return result

        @builtins.property
        def virtual_switch_id(self) -> builtins.str:
            """
            :Property: virtualSwitchId: vSwitch Id.
            """
            result = self._values.get("virtual_switch_id")
            assert result is not None, "Required property 'virtual_switch_id' is missing"
            return result

        @builtins.property
        def vpc_id(self) -> builtins.str:
            """
            :Property: vpcId: Vpc Id.
            """
            result = self._values.get("vpc_id")
            assert result is not None, "Required property 'vpc_id' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VpcsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ots.RosVpcBinderProps",
    jsii_struct_bases=[],
    name_mapping={"instance_name": "instanceName", "vpcs": "vpcs"},
)
class RosVpcBinderProps:
    def __init__(
        self,
        *,
        instance_name: builtins.str,
        vpcs: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosVpcBinder.VpcsProperty]]],
    ) -> None:
        """Properties for defining a ``ALIYUN::OTS::VpcBinder``.

        :param instance_name: 
        :param vpcs: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "instance_name": instance_name,
            "vpcs": vpcs,
        }

    @builtins.property
    def instance_name(self) -> builtins.str:
        """
        :Property: instanceName: Instance name
        """
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return result

    @builtins.property
    def vpcs(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosVpcBinder.VpcsProperty]]]:
        """
        :Property: vpcs: Vpc binding configuration.
        """
        result = self._values.get("vpcs")
        assert result is not None, "Required property 'vpcs' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVpcBinderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SearchIndex(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ots.SearchIndex",
):
    """A ROS resource type:  ``ALIYUN::OTS::SearchIndex``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SearchIndexProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::OTS::SearchIndex``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(SearchIndex, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIndexName")
    def attr_index_name(self) -> typing.Any:
        """
        :Attribute: IndexName: Index name.
        """
        return jsii.get(self, "attrIndexName")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ots.SearchIndexProps",
    jsii_struct_bases=[],
    name_mapping={
        "field_schemas": "fieldSchemas",
        "index_name": "indexName",
        "instance_name": "instanceName",
        "table_name": "tableName",
        "index_setting": "indexSetting",
        "index_sort": "indexSort",
    },
)
class SearchIndexProps:
    def __init__(
        self,
        *,
        field_schemas: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        index_name: builtins.str,
        instance_name: builtins.str,
        table_name: builtins.str,
        index_setting: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.IndexSettingProperty]] = None,
        index_sort: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.IndexSortProperty]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::OTS::SearchIndex``.

        :param field_schemas: 
        :param index_name: 
        :param instance_name: 
        :param table_name: 
        :param index_setting: 
        :param index_sort: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "field_schemas": field_schemas,
            "index_name": index_name,
            "instance_name": instance_name,
            "table_name": table_name,
        }
        if index_setting is not None:
            self._values["index_setting"] = index_setting
        if index_sort is not None:
            self._values["index_sort"] = index_sort

    @builtins.property
    def field_schemas(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: fieldSchemas: list of field_schema.
        """
        result = self._values.get("field_schemas")
        assert result is not None, "Required property 'field_schemas' is missing"
        return result

    @builtins.property
    def index_name(self) -> builtins.str:
        """
        :Property: indexName: The index name.
        """
        result = self._values.get("index_name")
        assert result is not None, "Required property 'index_name' is missing"
        return result

    @builtins.property
    def instance_name(self) -> builtins.str:
        """
        :Property: instanceName: The name of the OTS instance in which table will locate.
        """
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return result

    @builtins.property
    def table_name(self) -> builtins.str:
        """
        :Property: tableName: The table name of the OTS instance.
        """
        result = self._values.get("table_name")
        assert result is not None, "Required property 'table_name' is missing"
        return result

    @builtins.property
    def index_setting(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.IndexSettingProperty]]:
        """
        :Property: indexSetting: Index settings
        """
        result = self._values.get("index_setting")
        return result

    @builtins.property
    def index_sort(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.IndexSortProperty]]:
        """
        :Property:

        indexSort: This parameter specifies how data is sorted.
        By default, the data is sorted in the same way as the primary key of the table.
        If the search index contains NESTED fields, data is not sorted by default.
        """
        result = self._values.get("index_sort")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SearchIndexProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Table(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ots.Table",
):
    """A ROS resource type:  ``ALIYUN::OTS::Table``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TableProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::OTS::Table``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Table, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTableName")
    def attr_table_name(self) -> typing.Any:
        """
        :Attribute: TableName: Table name
        """
        return jsii.get(self, "attrTableName")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ots.TableProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_name": "instanceName",
        "primary_key": "primaryKey",
        "table_name": "tableName",
        "columns": "columns",
        "deviation_cell_version_in_sec": "deviationCellVersionInSec",
        "max_versions": "maxVersions",
        "reserved_throughput": "reservedThroughput",
        "secondary_indices": "secondaryIndices",
        "time_to_live": "timeToLive",
    },
)
class TableProps:
    def __init__(
        self,
        *,
        instance_name: builtins.str,
        primary_key: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.PrimaryKeyProperty]]],
        table_name: builtins.str,
        columns: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.ColumnsProperty]]]] = None,
        deviation_cell_version_in_sec: typing.Optional[jsii.Number] = None,
        max_versions: typing.Optional[jsii.Number] = None,
        reserved_throughput: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosTable.ReservedThroughputProperty]] = None,
        secondary_indices: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.SecondaryIndicesProperty]]]] = None,
        time_to_live: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::OTS::Table``.

        :param instance_name: 
        :param primary_key: 
        :param table_name: 
        :param columns: 
        :param deviation_cell_version_in_sec: 
        :param max_versions: 
        :param reserved_throughput: 
        :param secondary_indices: 
        :param time_to_live: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "instance_name": instance_name,
            "primary_key": primary_key,
            "table_name": table_name,
        }
        if columns is not None:
            self._values["columns"] = columns
        if deviation_cell_version_in_sec is not None:
            self._values["deviation_cell_version_in_sec"] = deviation_cell_version_in_sec
        if max_versions is not None:
            self._values["max_versions"] = max_versions
        if reserved_throughput is not None:
            self._values["reserved_throughput"] = reserved_throughput
        if secondary_indices is not None:
            self._values["secondary_indices"] = secondary_indices
        if time_to_live is not None:
            self._values["time_to_live"] = time_to_live

    @builtins.property
    def instance_name(self) -> builtins.str:
        """
        :Property: instanceName: The name of the OTS instance in which table will locate.
        """
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return result

    @builtins.property
    def primary_key(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.PrimaryKeyProperty]]]:
        """
        :Property: primaryKey: It describes the attribute value of primary key. The number of primary_key should not be less than one and not be more than four.
        """
        result = self._values.get("primary_key")
        assert result is not None, "Required property 'primary_key' is missing"
        return result

    @builtins.property
    def table_name(self) -> builtins.str:
        """
        :Property: tableName: The table name of the OTS instance.
        """
        result = self._values.get("table_name")
        assert result is not None, "Required property 'table_name' is missing"
        return result

    @builtins.property
    def columns(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.ColumnsProperty]]]]:
        """
        :Property: columns: Attribute column for table store.
        """
        result = self._values.get("columns")
        return result

    @builtins.property
    def deviation_cell_version_in_sec(self) -> typing.Optional[jsii.Number]:
        """
        :Property: deviationCellVersionInSec: Maximum version deviation. The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
        """
        result = self._values.get("deviation_cell_version_in_sec")
        return result

    @builtins.property
    def max_versions(self) -> typing.Optional[jsii.Number]:
        """
        :Property: maxVersions: The maximum number of versions stored in this table. The valid value is 1-2147483647. Default to 1.
        """
        result = self._values.get("max_versions")
        return result

    @builtins.property
    def reserved_throughput(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosTable.ReservedThroughputProperty]]:
        """
        :Property: reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
        """
        result = self._values.get("reserved_throughput")
        return result

    @builtins.property
    def secondary_indices(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.SecondaryIndicesProperty]]]]:
        """
        :Property: secondaryIndices: The secondary indices of the table.
        """
        result = self._values.get("secondary_indices")
        return result

    @builtins.property
    def time_to_live(self) -> typing.Optional[jsii.Number]:
        """
        :Property: timeToLive: The retention time of data stored in this table (unit: second). The value maximum is 2147483647 and -1 means never expired. Default to -1.
        """
        result = self._values.get("time_to_live")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class VpcBinder(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ots.VpcBinder",
):
    """A ROS resource type:  ``ALIYUN::OTS::VpcBinder``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "VpcBinderProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::OTS::VpcBinder``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(VpcBinder, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDomains")
    def attr_domains(self) -> typing.Any:
        """
        :Attribute: Domains: The domain names used to access the OTS instance in the VPC.
        """
        return jsii.get(self, "attrDomains")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrEndpoints")
    def attr_endpoints(self) -> typing.Any:
        """
        :Attribute: Endpoints: Private network addresses used to access the OTS instance in the VPC.
        """
        return jsii.get(self, "attrEndpoints")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ots.VpcBinderProps",
    jsii_struct_bases=[],
    name_mapping={"instance_name": "instanceName", "vpcs": "vpcs"},
)
class VpcBinderProps:
    def __init__(
        self,
        *,
        instance_name: builtins.str,
        vpcs: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosVpcBinder.VpcsProperty]]],
    ) -> None:
        """Properties for defining a ``ALIYUN::OTS::VpcBinder``.

        :param instance_name: 
        :param vpcs: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "instance_name": instance_name,
            "vpcs": vpcs,
        }

    @builtins.property
    def instance_name(self) -> builtins.str:
        """
        :Property: instanceName: Instance name
        """
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return result

    @builtins.property
    def vpcs(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosVpcBinder.VpcsProperty]]]:
        """
        :Property: vpcs: Vpc binding configuration.
        """
        result = self._values.get("vpcs")
        assert result is not None, "Required property 'vpcs' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VpcBinderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Instance",
    "InstanceProps",
    "RosInstance",
    "RosInstanceProps",
    "RosSearchIndex",
    "RosSearchIndexProps",
    "RosTable",
    "RosTableProps",
    "RosVpcBinder",
    "RosVpcBinderProps",
    "SearchIndex",
    "SearchIndexProps",
    "Table",
    "TableProps",
    "VpcBinder",
    "VpcBinderProps",
]

publication.publish()
