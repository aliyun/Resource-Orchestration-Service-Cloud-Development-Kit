'''
## Aliyun ROS MAXCOMPUTE Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as MAXCOMPUTE from '@alicloud/ros-cdk-maxcompute';
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

from ._jsii import *

import ros_cdk_core


class RosTable(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-maxcompute.RosTable",
):
    '''A ROS template type:  ``ALIYUN::MaxCompute::Table``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTableProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::MaxCompute::Table``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Name: Table name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrProject")
    def attr_project(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Project: Project name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrProject"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: Table name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="project")
    def project(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: project: Project name, if not provided, will be the default project
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "project"))

    @project.setter
    def project(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "project", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="comment")
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: comment: Table comment
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "comment"))

    @comment.setter
    def comment(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "comment", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ifNotExists")
    def if_not_exists(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ifNotExists: If you create a table by using the name of an existing table and
        the parameter set to false, an error is returned.
        If you specify the if not exists parameter, a success message
        is returned when you create a table by using the name of an
        existing table. The success message is returned even if the
        schema of the existing table is different from that of the table you want to create.
        If you create a table by using the name of an existing table,
        the table is not created and the metadata of the existing table is not changed.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "ifNotExists"))

    @if_not_exists.setter
    def if_not_exists(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "ifNotExists", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="lifecycle")
    def lifecycle(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: lifecycle: Table's lifecycle.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "lifecycle"))

    @lifecycle.setter
    def lifecycle(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "lifecycle", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="schema")
    def schema(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosTable.SchemaProperty"]]:
        '''
        :Property: schema: Table schema
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosTable.SchemaProperty"]], jsii.get(self, "schema"))

    @schema.setter
    def schema(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosTable.SchemaProperty"]],
    ) -> None:
        jsii.set(self, "schema", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="stringSchema")
    def string_schema(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        stringSchema: Create a table with field names and field type strings.
        Example: 'num bigint, num2 double', 'pt string'
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "stringSchema"))

    @string_schema.setter
    def string_schema(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "stringSchema", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-maxcompute.RosTable.ColumnsProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "type": "type", "comment": "comment"},
    )
    class ColumnsProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            comment: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param type: 
            :param comment: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "name": name,
                "type": type,
            }
            if comment is not None:
                self._values["comment"] = comment

        @builtins.property
        def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: name: Column name.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: type: Column type.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def comment(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: comment: Column comment.
            '''
            result = self._values.get("comment")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ColumnsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-maxcompute.RosTable.PartitionsProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "type": "type", "comment": "comment"},
    )
    class PartitionsProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            comment: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param type: 
            :param comment: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "name": name,
                "type": type,
            }
            if comment is not None:
                self._values["comment"] = comment

        @builtins.property
        def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: name: Partition name.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: type: Partition type.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def comment(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: comment: Partition comment.
            '''
            result = self._values.get("comment")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PartitionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-maxcompute.RosTable.SchemaProperty",
        jsii_struct_bases=[],
        name_mapping={"columns": "columns", "partitions": "partitions"},
    )
    class SchemaProperty:
        def __init__(
            self,
            *,
            columns: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosTable.ColumnsProperty"]]],
            partitions: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosTable.PartitionsProperty"]]]] = None,
        ) -> None:
            '''
            :param columns: 
            :param partitions: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "columns": columns,
            }
            if partitions is not None:
                self._values["partitions"] = partitions

        @builtins.property
        def columns(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTable.ColumnsProperty"]]]:
            '''
            :Property: columns:
            '''
            result = self._values.get("columns")
            assert result is not None, "Required property 'columns' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTable.ColumnsProperty"]]], result)

        @builtins.property
        def partitions(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTable.PartitionsProperty"]]]]:
            '''
            :Property: partitions:
            '''
            result = self._values.get("partitions")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTable.PartitionsProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SchemaProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-maxcompute.RosTableProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "project": "project",
        "comment": "comment",
        "if_not_exists": "ifNotExists",
        "lifecycle": "lifecycle",
        "schema": "schema",
        "string_schema": "stringSchema",
    },
)
class RosTableProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        project: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        comment: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        if_not_exists: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        lifecycle: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        schema: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosTable.SchemaProperty]] = None,
        string_schema: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MaxCompute::Table``.

        :param name: 
        :param project: 
        :param comment: 
        :param if_not_exists: 
        :param lifecycle: 
        :param schema: 
        :param string_schema: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
            "project": project,
        }
        if comment is not None:
            self._values["comment"] = comment
        if if_not_exists is not None:
            self._values["if_not_exists"] = if_not_exists
        if lifecycle is not None:
            self._values["lifecycle"] = lifecycle
        if schema is not None:
            self._values["schema"] = schema
        if string_schema is not None:
            self._values["string_schema"] = string_schema

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: Table name
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def project(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: project: Project name, if not provided, will be the default project
        '''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: comment: Table comment
        '''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def if_not_exists(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ifNotExists: If you create a table by using the name of an existing table and
        the parameter set to false, an error is returned.
        If you specify the if not exists parameter, a success message
        is returned when you create a table by using the name of an
        existing table. The success message is returned even if the
        schema of the existing table is different from that of the table you want to create.
        If you create a table by using the name of an existing table,
        the table is not created and the metadata of the existing table is not changed.
        '''
        result = self._values.get("if_not_exists")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def lifecycle(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: lifecycle: Table's lifecycle.
        '''
        result = self._values.get("lifecycle")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def schema(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosTable.SchemaProperty]]:
        '''
        :Property: schema: Table schema
        '''
        result = self._values.get("schema")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosTable.SchemaProperty]], result)

    @builtins.property
    def string_schema(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        stringSchema: Create a table with field names and field type strings.
        Example: 'num bigint, num2 double', 'pt string'
        '''
        result = self._values.get("string_schema")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Table(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-maxcompute.Table",
):
    '''A ROS resource type:  ``ALIYUN::MaxCompute::Table``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TableProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::MaxCompute::Table``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute Name: Table name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrProject")
    def attr_project(self) -> ros_cdk_core.IResolvable:
        '''Attribute Project: Project name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrProject"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-maxcompute.TableProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "project": "project",
        "comment": "comment",
        "if_not_exists": "ifNotExists",
        "lifecycle": "lifecycle",
        "schema": "schema",
        "string_schema": "stringSchema",
    },
)
class TableProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        project: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        comment: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        if_not_exists: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        lifecycle: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        schema: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosTable.SchemaProperty]] = None,
        string_schema: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MaxCompute::Table``.

        :param name: Property name: Table name.
        :param project: Property project: Project name, if not provided, will be the default project.
        :param comment: Property comment: Table comment.
        :param if_not_exists: Property ifNotExists: If you create a table by using the name of an existing table and the parameter set to false, an error is returned. If you specify the if not exists parameter, a success message is returned when you create a table by using the name of an existing table. The success message is returned even if the schema of the existing table is different from that of the table you want to create. If you create a table by using the name of an existing table, the table is not created and the metadata of the existing table is not changed.
        :param lifecycle: Property lifecycle: Table's lifecycle.
        :param schema: Property schema: Table schema.
        :param string_schema: Property stringSchema: Create a table with field names and field type strings. Example: 'num bigint, num2 double', 'pt string'
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
            "project": project,
        }
        if comment is not None:
            self._values["comment"] = comment
        if if_not_exists is not None:
            self._values["if_not_exists"] = if_not_exists
        if lifecycle is not None:
            self._values["lifecycle"] = lifecycle
        if schema is not None:
            self._values["schema"] = schema
        if string_schema is not None:
            self._values["string_schema"] = string_schema

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property name: Table name.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def project(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property project: Project name, if not provided, will be the default project.'''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property comment: Table comment.'''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def if_not_exists(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property ifNotExists: If you create a table by using the name of an existing table and  the parameter set to false, an error is returned.

        If you specify the if not exists parameter, a success message
        is returned when you create a table by using the name of an
        existing table. The success message is returned even if the
        schema of the existing table is different from that of the table you want to create.
        If you create a table by using the name of an existing table,
        the table is not created and the metadata of the existing table is not changed.
        '''
        result = self._values.get("if_not_exists")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def lifecycle(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property lifecycle: Table's lifecycle.'''
        result = self._values.get("lifecycle")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def schema(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosTable.SchemaProperty]]:
        '''Property schema: Table schema.'''
        result = self._values.get("schema")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosTable.SchemaProperty]], result)

    @builtins.property
    def string_schema(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property stringSchema: Create a table with field names and field type strings.

        Example: 'num bigint, num2 double', 'pt string'
        '''
        result = self._values.get("string_schema")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "RosTable",
    "RosTableProps",
    "Table",
    "TableProps",
]

publication.publish()
