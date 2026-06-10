'''
## Aliyun ROS ACTIONTRAIL Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ACTIONTRAIL from '@alicloud/ros-cdk-actiontrail';
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
    jsii_type="@alicloud/ros-cdk-actiontrail.AdvancedQueryTemplateProps",
    jsii_struct_bases=[],
    name_mapping={
        "simple_query": "simpleQuery",
        "template_sql": "templateSql",
        "template_name": "templateName",
    },
)
class AdvancedQueryTemplateProps:
    def __init__(
        self,
        *,
        simple_query: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        template_sql: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        template_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``AdvancedQueryTemplate``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-advancedquerytemplate

        :param simple_query: Property simpleQuery: Indicates whether the template is a simple query.
        :param template_sql: Property templateSql: The SQL statement of the advanced query template.
        :param template_name: Property templateName: The name of the advanced query template.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__92f0cb276a22373ecc0063e301edcb9c64988a073300fd48294de20ff660fedb)
            check_type(argname="argument simple_query", value=simple_query, expected_type=type_hints["simple_query"])
            check_type(argname="argument template_sql", value=template_sql, expected_type=type_hints["template_sql"])
            check_type(argname="argument template_name", value=template_name, expected_type=type_hints["template_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "simple_query": simple_query,
            "template_sql": template_sql,
        }
        if template_name is not None:
            self._values["template_name"] = template_name

    @builtins.property
    def simple_query(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property simpleQuery: Indicates whether the template is a simple query.'''
        result = self._values.get("simple_query")
        assert result is not None, "Required property 'simple_query' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def template_sql(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property templateSql: The SQL statement of the advanced query template.'''
        result = self._values.get("template_sql")
        assert result is not None, "Required property 'template_sql' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def template_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property templateName: The name of the advanced query template.'''
        result = self._values.get("template_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AdvancedQueryTemplateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-actiontrail.HistoryDeliveryJobProps",
    jsii_struct_bases=[],
    name_mapping={"trail_name": "trailName"},
)
class HistoryDeliveryJobProps:
    def __init__(
        self,
        *,
        trail_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``HistoryDeliveryJob``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-historydeliveryjob

        :param trail_name: Property trailName: The name of the trail.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6659b038e8bb260eaf294cf798f3ae606646fd4d40e285f5411429b68afe30ca)
            check_type(argname="argument trail_name", value=trail_name, expected_type=type_hints["trail_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "trail_name": trail_name,
        }

    @builtins.property
    def trail_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property trailName: The name of the trail.'''
        result = self._values.get("trail_name")
        assert result is not None, "Required property 'trail_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HistoryDeliveryJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-actiontrail.IAdvancedQueryTemplate")
class IAdvancedQueryTemplate(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``AdvancedQueryTemplate``.'''

    @builtins.property
    @jsii.member(jsii_name="attrTemplateId")
    def attr_template_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateId: The ID of the advanced query template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AdvancedQueryTemplateProps:
        ...


class _IAdvancedQueryTemplateProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``AdvancedQueryTemplate``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-actiontrail.IAdvancedQueryTemplate"

    @builtins.property
    @jsii.member(jsii_name="attrTemplateId")
    def attr_template_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateId: The ID of the advanced query template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplateId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AdvancedQueryTemplateProps:
        return typing.cast(AdvancedQueryTemplateProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAdvancedQueryTemplate).__jsii_proxy_class__ = lambda : _IAdvancedQueryTemplateProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-actiontrail.IHistoryDeliveryJob")
class IHistoryDeliveryJob(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``HistoryDeliveryJob``.'''

    @builtins.property
    @jsii.member(jsii_name="attrJobId")
    def attr_job_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute JobId: The ID of the delivery history job.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HistoryDeliveryJobProps:
        ...


class _IHistoryDeliveryJobProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``HistoryDeliveryJob``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-actiontrail.IHistoryDeliveryJob"

    @builtins.property
    @jsii.member(jsii_name="attrJobId")
    def attr_job_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute JobId: The ID of the delivery history job.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrJobId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HistoryDeliveryJobProps:
        return typing.cast(HistoryDeliveryJobProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IHistoryDeliveryJob).__jsii_proxy_class__ = lambda : _IHistoryDeliveryJobProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-actiontrail.ITrail")
class ITrail(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Trail``.'''

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: The name of the trail to be created, which must be unique for an account.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TrailProps":
        ...


class _ITrailProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Trail``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-actiontrail.ITrail"

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: The name of the trail to be created, which must be unique for an account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TrailProps":
        return typing.cast("TrailProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ITrail).__jsii_proxy_class__ = lambda : _ITrailProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-actiontrail.ITrailLogging")
class ITrailLogging(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``TrailLogging``.'''

    @builtins.property
    @jsii.member(jsii_name="attrIsLogging")
    def attr_is_logging(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsLogging: Indicates whether the trail is logging API invocations.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLatestDeliveryError")
    def attr_latest_delivery_error(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LatestDeliveryError: The last time an error occurred when the trail attempted to deliver log files.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLatestDeliveryTime")
    def attr_latest_delivery_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LatestDeliveryTime: The date and time of the last successful delivery of a log file.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStartLoggingTime")
    def attr_start_logging_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StartLoggingTime: The most recent date and time when the user enables the trail.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStopLoggingTime")
    def attr_stop_logging_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StopLoggingTime: The most recent date and time when the user disables the trail.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TrailLoggingProps":
        ...


class _ITrailLoggingProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``TrailLogging``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-actiontrail.ITrailLogging"

    @builtins.property
    @jsii.member(jsii_name="attrIsLogging")
    def attr_is_logging(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsLogging: Indicates whether the trail is logging API invocations.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIsLogging"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestDeliveryError")
    def attr_latest_delivery_error(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LatestDeliveryError: The last time an error occurred when the trail attempted to deliver log files.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLatestDeliveryError"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestDeliveryTime")
    def attr_latest_delivery_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LatestDeliveryTime: The date and time of the last successful delivery of a log file.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLatestDeliveryTime"))

    @builtins.property
    @jsii.member(jsii_name="attrStartLoggingTime")
    def attr_start_logging_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StartLoggingTime: The most recent date and time when the user enables the trail.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStartLoggingTime"))

    @builtins.property
    @jsii.member(jsii_name="attrStopLoggingTime")
    def attr_stop_logging_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StopLoggingTime: The most recent date and time when the user disables the trail.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStopLoggingTime"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TrailLoggingProps":
        return typing.cast("TrailLoggingProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ITrailLogging).__jsii_proxy_class__ = lambda : _ITrailLoggingProxy


class RosAdvancedQueryTemplate(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-actiontrail.RosAdvancedQueryTemplate",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ACTIONTRAIL::AdvancedQueryTemplate``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AdvancedQueryTemplate`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-advancedquerytemplate
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAdvancedQueryTemplateProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e4d330bd2a6d502368a7ee1666696902d4457f61ff6999761194b432dc63710)
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
            type_hints = typing.get_type_hints(_typecheckingstub__bb240c6ee0e77c697a85e5806bf1b499219219993fa1ec62efa80d23a5e7d1bd)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateId")
    def attr_template_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TemplateId: The ID of the advanced query template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTemplateId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__f4267dd3c2a13df5f278fd576545192b2b8dc9d1562d00c55ffa04876a4aacd0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="simpleQuery")
    def simple_query(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: simpleQuery: Indicates whether the template is a simple query.
        '''
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "simpleQuery"))

    @simple_query.setter
    def simple_query(
        self,
        value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5137e05f0adf495e5f4ebce984fec4fbc2e4d8f61b7d46c82010b12700c4036)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "simpleQuery", value)

    @builtins.property
    @jsii.member(jsii_name="templateSql")
    def template_sql(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: templateSql: The SQL statement of the advanced query template.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "templateSql"))

    @template_sql.setter
    def template_sql(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8012c092723e9b679ba77f63c7c36e9a5ce21241a1ff134f5b5f9986a670d75f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateSql", value)

    @builtins.property
    @jsii.member(jsii_name="templateName")
    def template_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateName: The name of the advanced query template.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "templateName"))

    @template_name.setter
    def template_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eeb886b47c13875141aff38b2ab5d0c948305956cfd9b30cd5961eabe7d3b96a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-actiontrail.RosAdvancedQueryTemplateProps",
    jsii_struct_bases=[],
    name_mapping={
        "simple_query": "simpleQuery",
        "template_sql": "templateSql",
        "template_name": "templateName",
    },
)
class RosAdvancedQueryTemplateProps:
    def __init__(
        self,
        *,
        simple_query: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        template_sql: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        template_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAdvancedQueryTemplate``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-advancedquerytemplate

        :param simple_query: 
        :param template_sql: 
        :param template_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8036369c5a9bef8354709e602c8b47e9e4e8fcf7a91a61c53f0a7a6bf88113af)
            check_type(argname="argument simple_query", value=simple_query, expected_type=type_hints["simple_query"])
            check_type(argname="argument template_sql", value=template_sql, expected_type=type_hints["template_sql"])
            check_type(argname="argument template_name", value=template_name, expected_type=type_hints["template_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "simple_query": simple_query,
            "template_sql": template_sql,
        }
        if template_name is not None:
            self._values["template_name"] = template_name

    @builtins.property
    def simple_query(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: simpleQuery: Indicates whether the template is a simple query.
        '''
        result = self._values.get("simple_query")
        assert result is not None, "Required property 'simple_query' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def template_sql(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: templateSql: The SQL statement of the advanced query template.
        '''
        result = self._values.get("template_sql")
        assert result is not None, "Required property 'template_sql' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def template_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateName: The name of the advanced query template.
        '''
        result = self._values.get("template_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAdvancedQueryTemplateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosHistoryDeliveryJob(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-actiontrail.RosHistoryDeliveryJob",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ACTIONTRAIL::HistoryDeliveryJob``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``HistoryDeliveryJob`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-historydeliveryjob
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosHistoryDeliveryJobProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f97aa55491f469ba72013e9c82a72513a1afcbc51ac294487e9a487751255a48)
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
            type_hints = typing.get_type_hints(_typecheckingstub__37d5add6c9bff4801b5f127ea979feb1009dceaff92925415bac8f2a597bcc9f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrJobId")
    def attr_job_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: JobId: The ID of the delivery history job.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrJobId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__e66483c1b94f51d17c815d753e39bb8e09332e4583c4e396a865e25f4063aeb3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="trailName")
    def trail_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: trailName: The name of the trail.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "trailName"))

    @trail_name.setter
    def trail_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__868ad68c636ae5d0bb51f3d1164b718a27be6da5dd0b59d71aa0bc191bde1ccb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "trailName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-actiontrail.RosHistoryDeliveryJobProps",
    jsii_struct_bases=[],
    name_mapping={"trail_name": "trailName"},
)
class RosHistoryDeliveryJobProps:
    def __init__(
        self,
        *,
        trail_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosHistoryDeliveryJob``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-historydeliveryjob

        :param trail_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50c220a79fa0f345ab24779bd275fc4aeeca2775d2273efd114f9fae4c8850bd)
            check_type(argname="argument trail_name", value=trail_name, expected_type=type_hints["trail_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "trail_name": trail_name,
        }

    @builtins.property
    def trail_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: trailName: The name of the trail.
        '''
        result = self._values.get("trail_name")
        assert result is not None, "Required property 'trail_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHistoryDeliveryJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTrail(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-actiontrail.RosTrail",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ACTIONTRAIL::Trail``, which is used to create a trail to deliver events to Simple Log Service or Object Storage Service (OSS).

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Trail`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-trail
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTrailProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__006b91342252c0a95d61ae072ee83bec4eef10b41b48ebe3e2d118501e129ae8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__48adbe48ba7de1488a3b99e798da83b59ce51c1f2147680c8d048c4d376623e4)
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
        :Attribute: Name: The name of the trail to be created, which must be unique for an account.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__bd6faa3ffce3ac4351d4e6d6d89c6da6705ecf1c246aaacc66f618ad6d276db2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the trail to be created, which must be unique for an account.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5a216af80a0e02557f5546b56ef116b6505fa152883b6ea4b3c348f09635e48)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="eventRw")
    def event_rw(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: eventRw: Indicates whether the event is a read or a write event. Valid values: Read, Write, and All. Default value: Write.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "eventRw"))

    @event_rw.setter
    def event_rw(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c60de7dd156244dacff78bdf9635e8138349a761fac0d1c69e9eab1637a25c4d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "eventRw", value)

    @builtins.property
    @jsii.member(jsii_name="ossBucketName")
    def oss_bucket_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ossBucketName: The OSS bucket to which the trail delivers logs. Ensure that this is an existing OSS bucket.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ossBucketName"))

    @oss_bucket_name.setter
    def oss_bucket_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0595b042ca54094e48de495947c6a601196952540aabfacf4f60547e0d498f51)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ossBucketName", value)

    @builtins.property
    @jsii.member(jsii_name="ossKeyPrefix")
    def oss_key_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ossKeyPrefix: The prefix of the specified OSS bucket name. This parameter can be left empty.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ossKeyPrefix"))

    @oss_key_prefix.setter
    def oss_key_prefix(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4d0d88beb8ab7a988241378a5953954024abccb7d257889bb5d0e134e3d6071)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ossKeyPrefix", value)

    @builtins.property
    @jsii.member(jsii_name="roleName")
    def role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: roleName: The RAM role in ActionTrail permitted by the user.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "roleName"))

    @role_name.setter
    def role_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5766172eea572d266b9a73582e1e40edd830f078f64f80da996669613d7114ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "roleName", value)

    @builtins.property
    @jsii.member(jsii_name="slsProjectArn")
    def sls_project_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: slsProjectArn: The unique ARN of the Log Service project.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "slsProjectArn"))

    @sls_project_arn.setter
    def sls_project_arn(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__efaf73892bfc66e09f88e50880b3f2f19152b626fc0a12c351b36d70ed755342)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "slsProjectArn", value)

    @builtins.property
    @jsii.member(jsii_name="slsWriteRoleArn")
    def sls_write_role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: slsWriteRoleArn: The unique ARN of the Log Service role.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "slsWriteRoleArn"))

    @sls_write_role_arn.setter
    def sls_write_role_arn(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d99b364cd19c0d92ed3f59cb2024faf7d1fc54e2b3773c13398517b4d1866e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "slsWriteRoleArn", value)


class RosTrailLogging(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-actiontrail.RosTrailLogging",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ACTIONTRAIL::TrailLogging``, which is used to enable or disable trail logging.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``TrailLogging`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-traillogging
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTrailLoggingProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f99fd3b3de2169556ba641eb3388cb3387cf24040bb80d2257e90c99fb9d085)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d9861e49832e2639ab6c0bd5f6ad80af2897a5cce7a2ce2bf7e5b8e591c2ff11)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrIsLogging")
    def attr_is_logging(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IsLogging: Indicates whether the trail is logging API invocations.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsLogging"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestDeliveryError")
    def attr_latest_delivery_error(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LatestDeliveryError: The last time an error occurred when the trail attempted to deliver log files.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLatestDeliveryError"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestDeliveryTime")
    def attr_latest_delivery_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LatestDeliveryTime: The date and time of the last successful delivery of a log file.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLatestDeliveryTime"))

    @builtins.property
    @jsii.member(jsii_name="attrStartLoggingTime")
    def attr_start_logging_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StartLoggingTime: The most recent date and time when the user enables the trail.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStartLoggingTime"))

    @builtins.property
    @jsii.member(jsii_name="attrStopLoggingTime")
    def attr_stop_logging_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StopLoggingTime: The most recent date and time when the user disables the trail.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStopLoggingTime"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enable")
    def enable(self) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: enable: Whether to enable the trail logging.
        '''
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "enable"))

    @enable.setter
    def enable(
        self,
        value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ffe818c529ee8d10bca7f82fe13ee4f329e0667f312b85a616f3ee45ce489b7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enable", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab2ec93ad84a711a585c48ec6da2c8fb5db453c7ae6e9124231586c493db343d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the trail to be enabled.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8a6fa4344c021021fbfd384105592c6e0b96a8661c4308d78d2ea188cad34bb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-actiontrail.RosTrailLoggingProps",
    jsii_struct_bases=[],
    name_mapping={"enable": "enable", "name": "name"},
)
class RosTrailLoggingProps:
    def __init__(
        self,
        *,
        enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosTrailLogging``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-traillogging

        :param enable: 
        :param name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5193bd424d2a8fb033f7236fbfa0520cee26cc6de5acb0cbe81e57c7bd85d6f7)
            check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "enable": enable,
            "name": name,
        }

    @builtins.property
    def enable(self) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: enable: Whether to enable the trail logging.
        '''
        result = self._values.get("enable")
        assert result is not None, "Required property 'enable' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the trail to be enabled.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTrailLoggingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-actiontrail.RosTrailProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "event_rw": "eventRw",
        "oss_bucket_name": "ossBucketName",
        "oss_key_prefix": "ossKeyPrefix",
        "role_name": "roleName",
        "sls_project_arn": "slsProjectArn",
        "sls_write_role_arn": "slsWriteRoleArn",
    },
)
class RosTrailProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        event_rw: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        oss_bucket_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        oss_key_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sls_project_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sls_write_role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosTrail``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-trail

        :param name: 
        :param event_rw: 
        :param oss_bucket_name: 
        :param oss_key_prefix: 
        :param role_name: 
        :param sls_project_arn: 
        :param sls_write_role_arn: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1a3cf37460d5bc6dd02f17c62595e29802894d507d421b65ebe2adb75229dc8)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument event_rw", value=event_rw, expected_type=type_hints["event_rw"])
            check_type(argname="argument oss_bucket_name", value=oss_bucket_name, expected_type=type_hints["oss_bucket_name"])
            check_type(argname="argument oss_key_prefix", value=oss_key_prefix, expected_type=type_hints["oss_key_prefix"])
            check_type(argname="argument role_name", value=role_name, expected_type=type_hints["role_name"])
            check_type(argname="argument sls_project_arn", value=sls_project_arn, expected_type=type_hints["sls_project_arn"])
            check_type(argname="argument sls_write_role_arn", value=sls_write_role_arn, expected_type=type_hints["sls_write_role_arn"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
        }
        if event_rw is not None:
            self._values["event_rw"] = event_rw
        if oss_bucket_name is not None:
            self._values["oss_bucket_name"] = oss_bucket_name
        if oss_key_prefix is not None:
            self._values["oss_key_prefix"] = oss_key_prefix
        if role_name is not None:
            self._values["role_name"] = role_name
        if sls_project_arn is not None:
            self._values["sls_project_arn"] = sls_project_arn
        if sls_write_role_arn is not None:
            self._values["sls_write_role_arn"] = sls_write_role_arn

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the trail to be created, which must be unique for an account.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def event_rw(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: eventRw: Indicates whether the event is a read or a write event. Valid values: Read, Write, and All. Default value: Write.
        '''
        result = self._values.get("event_rw")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def oss_bucket_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ossBucketName: The OSS bucket to which the trail delivers logs. Ensure that this is an existing OSS bucket.
        '''
        result = self._values.get("oss_bucket_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def oss_key_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ossKeyPrefix: The prefix of the specified OSS bucket name. This parameter can be left empty.
        '''
        result = self._values.get("oss_key_prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: roleName: The RAM role in ActionTrail permitted by the user.
        '''
        result = self._values.get("role_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sls_project_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: slsProjectArn: The unique ARN of the Log Service project.
        '''
        result = self._values.get("sls_project_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sls_write_role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: slsWriteRoleArn: The unique ARN of the Log Service role.
        '''
        result = self._values.get("sls_write_role_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTrailProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ITrail)
class Trail(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-actiontrail.Trail",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ACTIONTRAIL::Trail``, which is used to create a trail to deliver events to Simple Log Service or Object Storage Service (OSS).

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosTrail``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-trail
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TrailProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__976b50d4780e94a19403a61336788a251eaf600b9d4c8d269c966ae097e417b7)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: The name of the trail to be created, which must be unique for an account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TrailProps":
        return typing.cast("TrailProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e970c9acc91c91548102e25a7f8a4567a6dba358e43cde43bdf380dbdbc06110)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee2722f40db1779eb0cbafeb1b17688a84c36ca32bc2d427a057d45293bcbc6d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81ad47785f10ccd6dfffc159b8cfa0e682d244ee38d950576769a780a9f13f87)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(ITrailLogging)
class TrailLogging(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-actiontrail.TrailLogging",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ACTIONTRAIL::TrailLogging``, which is used to enable or disable trail logging.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosTrailLogging``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-traillogging
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TrailLoggingProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__258e92e72b18ef146b0d304d2fb94705de1bdcc4d1064721300fd1af4d729def)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrIsLogging")
    def attr_is_logging(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsLogging: Indicates whether the trail is logging API invocations.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIsLogging"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestDeliveryError")
    def attr_latest_delivery_error(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LatestDeliveryError: The last time an error occurred when the trail attempted to deliver log files.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLatestDeliveryError"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestDeliveryTime")
    def attr_latest_delivery_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LatestDeliveryTime: The date and time of the last successful delivery of a log file.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLatestDeliveryTime"))

    @builtins.property
    @jsii.member(jsii_name="attrStartLoggingTime")
    def attr_start_logging_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StartLoggingTime: The most recent date and time when the user enables the trail.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStartLoggingTime"))

    @builtins.property
    @jsii.member(jsii_name="attrStopLoggingTime")
    def attr_stop_logging_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StopLoggingTime: The most recent date and time when the user disables the trail.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStopLoggingTime"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TrailLoggingProps":
        return typing.cast("TrailLoggingProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b73e53c34f4d5aadc0cfffe701d2e136c443fcc14c7d2228116758dca74d1807)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42f2ee86f86daa586178337323559131077ef9451d2e75c5623e8e20ce6678fa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10eae3616b42f236f5386651ef0da98e521e8ed96be5b4a94ef2022d210139bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-actiontrail.TrailLoggingProps",
    jsii_struct_bases=[],
    name_mapping={"enable": "enable", "name": "name"},
)
class TrailLoggingProps:
    def __init__(
        self,
        *,
        enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``TrailLogging``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-traillogging

        :param enable: Property enable: Whether to enable the trail logging.
        :param name: Property name: The name of the trail to be enabled.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8f0a3f08f78e620971cf3d2534bd43873bd0e3ac3f3b55085e105534a02d16d)
            check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "enable": enable,
            "name": name,
        }

    @builtins.property
    def enable(self) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property enable: Whether to enable the trail logging.'''
        result = self._values.get("enable")
        assert result is not None, "Required property 'enable' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the trail to be enabled.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TrailLoggingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-actiontrail.TrailProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "event_rw": "eventRw",
        "oss_bucket_name": "ossBucketName",
        "oss_key_prefix": "ossKeyPrefix",
        "role_name": "roleName",
        "sls_project_arn": "slsProjectArn",
        "sls_write_role_arn": "slsWriteRoleArn",
    },
)
class TrailProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        event_rw: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        oss_bucket_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        oss_key_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sls_project_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sls_write_role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Trail``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-trail

        :param name: Property name: The name of the trail to be created, which must be unique for an account.
        :param event_rw: Property eventRw: Indicates whether the event is a read or a write event. Valid values: Read, Write, and All. Default value: Write.
        :param oss_bucket_name: Property ossBucketName: The OSS bucket to which the trail delivers logs. Ensure that this is an existing OSS bucket.
        :param oss_key_prefix: Property ossKeyPrefix: The prefix of the specified OSS bucket name. This parameter can be left empty.
        :param role_name: Property roleName: The RAM role in ActionTrail permitted by the user.
        :param sls_project_arn: Property slsProjectArn: The unique ARN of the Log Service project.
        :param sls_write_role_arn: Property slsWriteRoleArn: The unique ARN of the Log Service role.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__80c1257fd8fee9bba80000494c13199675f9ae6f19c82809eaf8073994c58a50)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument event_rw", value=event_rw, expected_type=type_hints["event_rw"])
            check_type(argname="argument oss_bucket_name", value=oss_bucket_name, expected_type=type_hints["oss_bucket_name"])
            check_type(argname="argument oss_key_prefix", value=oss_key_prefix, expected_type=type_hints["oss_key_prefix"])
            check_type(argname="argument role_name", value=role_name, expected_type=type_hints["role_name"])
            check_type(argname="argument sls_project_arn", value=sls_project_arn, expected_type=type_hints["sls_project_arn"])
            check_type(argname="argument sls_write_role_arn", value=sls_write_role_arn, expected_type=type_hints["sls_write_role_arn"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
        }
        if event_rw is not None:
            self._values["event_rw"] = event_rw
        if oss_bucket_name is not None:
            self._values["oss_bucket_name"] = oss_bucket_name
        if oss_key_prefix is not None:
            self._values["oss_key_prefix"] = oss_key_prefix
        if role_name is not None:
            self._values["role_name"] = role_name
        if sls_project_arn is not None:
            self._values["sls_project_arn"] = sls_project_arn
        if sls_write_role_arn is not None:
            self._values["sls_write_role_arn"] = sls_write_role_arn

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the trail to be created, which must be unique for an account.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def event_rw(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property eventRw: Indicates whether the event is a read or a write event.

        Valid values: Read, Write, and All. Default value: Write.
        '''
        result = self._values.get("event_rw")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def oss_bucket_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ossBucketName: The OSS bucket to which the trail delivers logs.

        Ensure that this is an existing OSS bucket.
        '''
        result = self._values.get("oss_bucket_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def oss_key_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ossKeyPrefix: The prefix of the specified OSS bucket name.

        This parameter can be left empty.
        '''
        result = self._values.get("oss_key_prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property roleName: The RAM role in ActionTrail permitted by the user.'''
        result = self._values.get("role_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sls_project_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property slsProjectArn: The unique ARN of the Log Service project.'''
        result = self._values.get("sls_project_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sls_write_role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property slsWriteRoleArn: The unique ARN of the Log Service role.'''
        result = self._values.get("sls_write_role_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TrailProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IAdvancedQueryTemplate)
class AdvancedQueryTemplate(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-actiontrail.AdvancedQueryTemplate",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ACTIONTRAIL::AdvancedQueryTemplate``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAdvancedQueryTemplate``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-advancedquerytemplate
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AdvancedQueryTemplateProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d74e161a45d5cc3294abdbc24d2cdbd330d92a8a3de7293873aef5dd43a3114)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrTemplateId")
    def attr_template_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateId: The ID of the advanced query template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplateId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AdvancedQueryTemplateProps:
        return typing.cast(AdvancedQueryTemplateProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d22bc569485703a21a1bc3d6bcf24d20b584bbaffc76433009a68b4bd2546686)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__65db2863b182294d2f88cddcae20614fc81a527d854a6d9c626f8bf82e05ddf8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8e98dd951b6bb503085627d763381c342ea859cc644a3572633afbe35d7428f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IHistoryDeliveryJob)
class HistoryDeliveryJob(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-actiontrail.HistoryDeliveryJob",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ACTIONTRAIL::HistoryDeliveryJob``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosHistoryDeliveryJob``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-historydeliveryjob
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[HistoryDeliveryJobProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8fd931873be25fcd710279fb950213fb9fd796e2fac4ca222e31d9e2b71e1e22)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrJobId")
    def attr_job_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute JobId: The ID of the delivery history job.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrJobId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HistoryDeliveryJobProps:
        return typing.cast(HistoryDeliveryJobProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34ac190def8a396e34de3cc74407343b38a9ece4df9f52515a4b41a361bd4e0c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9a2ab6f49c3c2c84c5fad8c1c3bee4ded500ad7884d6aba63d6efcca498de553)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eeeb451252fe81f5c095430b6ba1014bb45e3212f99f286290c7fce3739271df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "AdvancedQueryTemplate",
    "AdvancedQueryTemplateProps",
    "HistoryDeliveryJob",
    "HistoryDeliveryJobProps",
    "IAdvancedQueryTemplate",
    "IHistoryDeliveryJob",
    "ITrail",
    "ITrailLogging",
    "RosAdvancedQueryTemplate",
    "RosAdvancedQueryTemplateProps",
    "RosHistoryDeliveryJob",
    "RosHistoryDeliveryJobProps",
    "RosTrail",
    "RosTrailLogging",
    "RosTrailLoggingProps",
    "RosTrailProps",
    "Trail",
    "TrailLogging",
    "TrailLoggingProps",
    "TrailProps",
]

publication.publish()

def _typecheckingstub__92f0cb276a22373ecc0063e301edcb9c64988a073300fd48294de20ff660fedb(
    *,
    simple_query: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    template_sql: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    template_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6659b038e8bb260eaf294cf798f3ae606646fd4d40e285f5411429b68afe30ca(
    *,
    trail_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e4d330bd2a6d502368a7ee1666696902d4457f61ff6999761194b432dc63710(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAdvancedQueryTemplateProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb240c6ee0e77c697a85e5806bf1b499219219993fa1ec62efa80d23a5e7d1bd(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4267dd3c2a13df5f278fd576545192b2b8dc9d1562d00c55ffa04876a4aacd0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5137e05f0adf495e5f4ebce984fec4fbc2e4d8f61b7d46c82010b12700c4036(
    value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8012c092723e9b679ba77f63c7c36e9a5ce21241a1ff134f5b5f9986a670d75f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eeb886b47c13875141aff38b2ab5d0c948305956cfd9b30cd5961eabe7d3b96a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8036369c5a9bef8354709e602c8b47e9e4e8fcf7a91a61c53f0a7a6bf88113af(
    *,
    simple_query: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    template_sql: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    template_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f97aa55491f469ba72013e9c82a72513a1afcbc51ac294487e9a487751255a48(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosHistoryDeliveryJobProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37d5add6c9bff4801b5f127ea979feb1009dceaff92925415bac8f2a597bcc9f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e66483c1b94f51d17c815d753e39bb8e09332e4583c4e396a865e25f4063aeb3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__868ad68c636ae5d0bb51f3d1164b718a27be6da5dd0b59d71aa0bc191bde1ccb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50c220a79fa0f345ab24779bd275fc4aeeca2775d2273efd114f9fae4c8850bd(
    *,
    trail_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__006b91342252c0a95d61ae072ee83bec4eef10b41b48ebe3e2d118501e129ae8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTrailProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48adbe48ba7de1488a3b99e798da83b59ce51c1f2147680c8d048c4d376623e4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd6faa3ffce3ac4351d4e6d6d89c6da6705ecf1c246aaacc66f618ad6d276db2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5a216af80a0e02557f5546b56ef116b6505fa152883b6ea4b3c348f09635e48(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c60de7dd156244dacff78bdf9635e8138349a761fac0d1c69e9eab1637a25c4d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0595b042ca54094e48de495947c6a601196952540aabfacf4f60547e0d498f51(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4d0d88beb8ab7a988241378a5953954024abccb7d257889bb5d0e134e3d6071(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5766172eea572d266b9a73582e1e40edd830f078f64f80da996669613d7114ee(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__efaf73892bfc66e09f88e50880b3f2f19152b626fc0a12c351b36d70ed755342(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d99b364cd19c0d92ed3f59cb2024faf7d1fc54e2b3773c13398517b4d1866e2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f99fd3b3de2169556ba641eb3388cb3387cf24040bb80d2257e90c99fb9d085(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTrailLoggingProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9861e49832e2639ab6c0bd5f6ad80af2897a5cce7a2ce2bf7e5b8e591c2ff11(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ffe818c529ee8d10bca7f82fe13ee4f329e0667f312b85a616f3ee45ce489b7(
    value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab2ec93ad84a711a585c48ec6da2c8fb5db453c7ae6e9124231586c493db343d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8a6fa4344c021021fbfd384105592c6e0b96a8661c4308d78d2ea188cad34bb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5193bd424d2a8fb033f7236fbfa0520cee26cc6de5acb0cbe81e57c7bd85d6f7(
    *,
    enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1a3cf37460d5bc6dd02f17c62595e29802894d507d421b65ebe2adb75229dc8(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    event_rw: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_bucket_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_key_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sls_project_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sls_write_role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__976b50d4780e94a19403a61336788a251eaf600b9d4c8d269c966ae097e417b7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TrailProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e970c9acc91c91548102e25a7f8a4567a6dba358e43cde43bdf380dbdbc06110(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee2722f40db1779eb0cbafeb1b17688a84c36ca32bc2d427a057d45293bcbc6d(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81ad47785f10ccd6dfffc159b8cfa0e682d244ee38d950576769a780a9f13f87(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__258e92e72b18ef146b0d304d2fb94705de1bdcc4d1064721300fd1af4d729def(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TrailLoggingProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b73e53c34f4d5aadc0cfffe701d2e136c443fcc14c7d2228116758dca74d1807(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42f2ee86f86daa586178337323559131077ef9451d2e75c5623e8e20ce6678fa(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10eae3616b42f236f5386651ef0da98e521e8ed96be5b4a94ef2022d210139bf(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8f0a3f08f78e620971cf3d2534bd43873bd0e3ac3f3b55085e105534a02d16d(
    *,
    enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80c1257fd8fee9bba80000494c13199675f9ae6f19c82809eaf8073994c58a50(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    event_rw: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_bucket_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_key_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sls_project_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sls_write_role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d74e161a45d5cc3294abdbc24d2cdbd330d92a8a3de7293873aef5dd43a3114(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AdvancedQueryTemplateProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d22bc569485703a21a1bc3d6bcf24d20b584bbaffc76433009a68b4bd2546686(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65db2863b182294d2f88cddcae20614fc81a527d854a6d9c626f8bf82e05ddf8(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8e98dd951b6bb503085627d763381c342ea859cc644a3572633afbe35d7428f(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8fd931873be25fcd710279fb950213fb9fd796e2fac4ca222e31d9e2b71e1e22(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[HistoryDeliveryJobProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34ac190def8a396e34de3cc74407343b38a9ece4df9f52515a4b41a361bd4e0c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a2ab6f49c3c2c84c5fad8c1c3bee4ded500ad7884d6aba63d6efcca498de553(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eeeb451252fe81f5c095430b6ba1014bb45e3212f99f286290c7fce3739271df(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
