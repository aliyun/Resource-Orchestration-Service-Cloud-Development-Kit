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

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class RosTable(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-maxcompute.RosTable",
):
    '''A ROS template type:  ``ALIYUN::MaxCompute::Table``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTableProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::MaxCompute::Table``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a93caa95f18177a408c8f0f014e6af69f0994cba9a0a43b04d1051c051e8f26)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7ccdd070e469841620a1dac12ddedd90c12b0f2f134d8f17a73d72ed49cb96cf)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Name: Table name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrProject")
    def attr_project(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Project: Project name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProject"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__2f24e294f106d465f843f3f4626b424f3b0f53c9af63f528ef9fbd0daac0bf8d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: Table name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__728e203929b5d8911692f30b9e8ae1f76a3363c0d63dec1517533cb211d10066)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="project")
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: project: Project name, if not provided, will be the default project
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "project"))

    @project.setter
    def project(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dea6c6e359149d9555a7758db26d984f9d88bc76f6666d59d5e530f3891e9f10)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "project", value)

    @builtins.property
    @jsii.member(jsii_name="comment")
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comment: Table comment
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "comment"))

    @comment.setter
    def comment(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b361428301795714cf6452cb50d640f52e265ecf674ef4f47f70dcc0b3464b26)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "comment", value)

    @builtins.property
    @jsii.member(jsii_name="ifNotExists")
    def if_not_exists(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ifNotExists"))

    @if_not_exists.setter
    def if_not_exists(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__165d863b48d2db731d33131a9f829ef1a663ab236a5add8c25868bc99e8778ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ifNotExists", value)

    @builtins.property
    @jsii.member(jsii_name="lifecycle")
    def lifecycle(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: lifecycle: Table's lifecycle.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "lifecycle"))

    @lifecycle.setter
    def lifecycle(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff95f72a3c5da7770896e658e4b6b3f83f57afb483aeed31c3d09d07fe176b8c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lifecycle", value)

    @builtins.property
    @jsii.member(jsii_name="schema")
    def schema(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.SchemaProperty"]]:
        '''
        :Property: schema: Table schema
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.SchemaProperty"]], jsii.get(self, "schema"))

    @schema.setter
    def schema(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.SchemaProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__91735209ce965c3631c059939e10e84a5b075e0cd827fb0fea073b74b4206487)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "schema", value)

    @builtins.property
    @jsii.member(jsii_name="stringSchema")
    def string_schema(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        stringSchema: Create a table with field names and field type strings.
        Example: 'num bigint, num2 double', 'pt string'
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "stringSchema"))

    @string_schema.setter
    def string_schema(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7ee100ece19ed3f1d3069eab584b1cc019297c6ad3697038a28018b9bf3e9b04)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param type: 
            :param comment: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__63f561c4468a5bdf632469b1b2123a78fd54656292cf7a28913497095c0e2bd8)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
                "type": type,
            }
            if comment is not None:
                self._values["comment"] = comment

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: Column name.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: type: Column type.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def comment(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: comment: Column comment.
            '''
            result = self._values.get("comment")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param type: 
            :param comment: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__db7d6523b0d2f71904129b8f6cc7a1ec0e7117117f1c0be1cbccfc8aa744e6a0)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
                "type": type,
            }
            if comment is not None:
                self._values["comment"] = comment

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: Partition name.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: type: Partition type.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def comment(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: comment: Partition comment.
            '''
            result = self._values.get("comment")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
            columns: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosTable.ColumnsProperty", typing.Dict[builtins.str, typing.Any]]]]],
            partitions: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosTable.PartitionsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param columns: 
            :param partitions: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5ca7e469386a99064504b43a727d9768cf0087af7c2c7b675ea149e89671da6c)
                check_type(argname="argument columns", value=columns, expected_type=type_hints["columns"])
                check_type(argname="argument partitions", value=partitions, expected_type=type_hints["partitions"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "columns": columns,
            }
            if partitions is not None:
                self._values["partitions"] = partitions

        @builtins.property
        def columns(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.ColumnsProperty"]]]:
            '''
            :Property: columns:
            '''
            result = self._values.get("columns")
            assert result is not None, "Required property 'columns' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.ColumnsProperty"]]], result)

        @builtins.property
        def partitions(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.PartitionsProperty"]]]]:
            '''
            :Property: partitions:
            '''
            result = self._values.get("partitions")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.PartitionsProperty"]]]], result)

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
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        if_not_exists: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lifecycle: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        schema: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.SchemaProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        string_schema: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13d11317f6fa0701f095cdc039992757f36b1475d034c1b4b5ff579ef84b8733)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument project", value=project, expected_type=type_hints["project"])
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            check_type(argname="argument if_not_exists", value=if_not_exists, expected_type=type_hints["if_not_exists"])
            check_type(argname="argument lifecycle", value=lifecycle, expected_type=type_hints["lifecycle"])
            check_type(argname="argument schema", value=schema, expected_type=type_hints["schema"])
            check_type(argname="argument string_schema", value=string_schema, expected_type=type_hints["string_schema"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: Table name
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: project: Project name, if not provided, will be the default project
        '''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comment: Table comment
        '''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def if_not_exists(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lifecycle(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: lifecycle: Table's lifecycle.
        '''
        result = self._values.get("lifecycle")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def schema(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.SchemaProperty]]:
        '''
        :Property: schema: Table schema
        '''
        result = self._values.get("schema")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.SchemaProperty]], result)

    @builtins.property
    def string_schema(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        stringSchema: Create a table with field names and field type strings.
        Example: 'num bigint, num2 double', 'pt string'
        '''
        result = self._values.get("string_schema")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Table(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-maxcompute.Table",
):
    '''A ROS resource type:  ``ALIYUN::MaxCompute::Table``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TableProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5958eb37368224ea9efcf7b97ae99e77e791de527911a952655eda072f68e30d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Name: Table name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrProject")
    def attr_project(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Project: Project name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProject"))


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
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        if_not_exists: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lifecycle: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        schema: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.SchemaProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        string_schema: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c0952bcffaf713092591d63602220c922497d10727a5b4c0ca21cb11eee2f4b)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument project", value=project, expected_type=type_hints["project"])
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            check_type(argname="argument if_not_exists", value=if_not_exists, expected_type=type_hints["if_not_exists"])
            check_type(argname="argument lifecycle", value=lifecycle, expected_type=type_hints["lifecycle"])
            check_type(argname="argument schema", value=schema, expected_type=type_hints["schema"])
            check_type(argname="argument string_schema", value=string_schema, expected_type=type_hints["string_schema"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: Table name.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property project: Project name, if not provided, will be the default project.'''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property comment: Table comment.'''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def if_not_exists(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ifNotExists: If you create a table by using the name of an existing table and  the parameter set to false, an error is returned.

        If you specify the if not exists parameter, a success message
        is returned when you create a table by using the name of an
        existing table. The success message is returned even if the
        schema of the existing table is different from that of the table you want to create.
        If you create a table by using the name of an existing table,
        the table is not created and the metadata of the existing table is not changed.
        '''
        result = self._values.get("if_not_exists")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lifecycle(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property lifecycle: Table's lifecycle.'''
        result = self._values.get("lifecycle")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def schema(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.SchemaProperty]]:
        '''Property schema: Table schema.'''
        result = self._values.get("schema")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.SchemaProperty]], result)

    @builtins.property
    def string_schema(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property stringSchema: Create a table with field names and field type strings.

        Example: 'num bigint, num2 double', 'pt string'
        '''
        result = self._values.get("string_schema")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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

def _typecheckingstub__0a93caa95f18177a408c8f0f014e6af69f0994cba9a0a43b04d1051c051e8f26(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTableProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7ccdd070e469841620a1dac12ddedd90c12b0f2f134d8f17a73d72ed49cb96cf(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f24e294f106d465f843f3f4626b424f3b0f53c9af63f528ef9fbd0daac0bf8d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__728e203929b5d8911692f30b9e8ae1f76a3363c0d63dec1517533cb211d10066(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dea6c6e359149d9555a7758db26d984f9d88bc76f6666d59d5e530f3891e9f10(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b361428301795714cf6452cb50d640f52e265ecf674ef4f47f70dcc0b3464b26(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__165d863b48d2db731d33131a9f829ef1a663ab236a5add8c25868bc99e8778ac(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff95f72a3c5da7770896e658e4b6b3f83f57afb483aeed31c3d09d07fe176b8c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91735209ce965c3631c059939e10e84a5b075e0cd827fb0fea073b74b4206487(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.SchemaProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7ee100ece19ed3f1d3069eab584b1cc019297c6ad3697038a28018b9bf3e9b04(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63f561c4468a5bdf632469b1b2123a78fd54656292cf7a28913497095c0e2bd8(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db7d6523b0d2f71904129b8f6cc7a1ec0e7117117f1c0be1cbccfc8aa744e6a0(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ca7e469386a99064504b43a727d9768cf0087af7c2c7b675ea149e89671da6c(
    *,
    columns: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.ColumnsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    partitions: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.PartitionsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13d11317f6fa0701f095cdc039992757f36b1475d034c1b4b5ff579ef84b8733(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    if_not_exists: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lifecycle: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    schema: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.SchemaProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    string_schema: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5958eb37368224ea9efcf7b97ae99e77e791de527911a952655eda072f68e30d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TableProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c0952bcffaf713092591d63602220c922497d10727a5b4c0ca21cb11eee2f4b(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    if_not_exists: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lifecycle: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    schema: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.SchemaProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    string_schema: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
