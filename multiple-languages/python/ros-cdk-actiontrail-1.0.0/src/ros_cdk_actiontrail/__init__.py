"""
## Aliyun ROS ACTIONTRAIL Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_actiontrail as ACTIONTRAIL
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


class RosTrail(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-actiontrail.RosTrail",
):
    """A ROS template type:  ``ALIYUN::ACTIONTRAIL::Trail``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTrailProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ACTIONTRAIL::Trail``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosTrail, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> typing.Any:
        """
        :Attribute: Name: The name of the trail to be created, which must be unique for an account.
        """
        return jsii.get(self, "attrName")

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
    @jsii.member(jsii_name="name")
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the trail to be created, which must be unique for an account.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: builtins.str) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ossBucketName")
    def oss_bucket_name(self) -> builtins.str:
        """
        :Property: ossBucketName: The OSS bucket to which the trail delivers logs. Ensure that this is an existing OSS bucket.
        """
        return jsii.get(self, "ossBucketName")

    @oss_bucket_name.setter # type: ignore
    def oss_bucket_name(self, value: builtins.str) -> None:
        jsii.set(self, "ossBucketName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="roleName")
    def role_name(self) -> builtins.str:
        """
        :Property: roleName: The RAM role in ActionTrail permitted by the user.
        """
        return jsii.get(self, "roleName")

    @role_name.setter # type: ignore
    def role_name(self, value: builtins.str) -> None:
        jsii.set(self, "roleName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="eventRw")
    def event_rw(self) -> typing.Optional[builtins.str]:
        """
        :Property: eventRw: Indicates whether the event is a read or a write event. Valid values: Read, Write, and All. Default value: Write.
        """
        return jsii.get(self, "eventRw")

    @event_rw.setter # type: ignore
    def event_rw(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "eventRw", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ossKeyPrefix")
    def oss_key_prefix(self) -> typing.Optional[builtins.str]:
        """
        :Property: ossKeyPrefix: The prefix of the specified OSS bucket name. This parameter can be left empty.
        """
        return jsii.get(self, "ossKeyPrefix")

    @oss_key_prefix.setter # type: ignore
    def oss_key_prefix(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "ossKeyPrefix", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="slsProjectArn")
    def sls_project_arn(self) -> typing.Optional[builtins.str]:
        """
        :Property: slsProjectArn: The unique ARN of the Log Service project.
        """
        return jsii.get(self, "slsProjectArn")

    @sls_project_arn.setter # type: ignore
    def sls_project_arn(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "slsProjectArn", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="slsWriteRoleArn")
    def sls_write_role_arn(self) -> typing.Optional[builtins.str]:
        """
        :Property: slsWriteRoleArn: The unique ARN of the Log Service role.
        """
        return jsii.get(self, "slsWriteRoleArn")

    @sls_write_role_arn.setter # type: ignore
    def sls_write_role_arn(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "slsWriteRoleArn", value)


class RosTrailLogging(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-actiontrail.RosTrailLogging",
):
    """A ROS template type:  ``ALIYUN::ACTIONTRAIL::TrailLogging``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTrailLoggingProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ACTIONTRAIL::TrailLogging``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosTrailLogging, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrIsLogging")
    def attr_is_logging(self) -> typing.Any:
        """
        :Attribute: IsLogging: Indicates whether the trail is logging API invocations.
        """
        return jsii.get(self, "attrIsLogging")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrLatestDeliveryError")
    def attr_latest_delivery_error(self) -> typing.Any:
        """
        :Attribute: LatestDeliveryError: The last time an error occurred when the trail attempted to deliver log files.
        """
        return jsii.get(self, "attrLatestDeliveryError")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrLatestDeliveryTime")
    def attr_latest_delivery_time(self) -> typing.Any:
        """
        :Attribute: LatestDeliveryTime: The date and time of the last successful delivery of a log file.
        """
        return jsii.get(self, "attrLatestDeliveryTime")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrStartLoggingTime")
    def attr_start_logging_time(self) -> typing.Any:
        """
        :Attribute: StartLoggingTime: The most recent date and time when the user enables the trail.
        """
        return jsii.get(self, "attrStartLoggingTime")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrStopLoggingTime")
    def attr_stop_logging_time(self) -> typing.Any:
        """
        :Attribute: StopLoggingTime: The most recent date and time when the user disables the trail.
        """
        return jsii.get(self, "attrStopLoggingTime")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enable")
    def enable(self) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        """
        :Property: enable: Whether to enable the trail logging.
        """
        return jsii.get(self, "enable")

    @enable.setter # type: ignore
    def enable(
        self,
        value: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "enable", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the trail to be enabled.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: builtins.str) -> None:
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
        enable: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
        name: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::ACTIONTRAIL::TrailLogging``.

        :param enable: 
        :param name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "enable": enable,
            "name": name,
        }

    @builtins.property
    def enable(self) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        """
        :Property: enable: Whether to enable the trail logging.
        """
        result = self._values.get("enable")
        assert result is not None, "Required property 'enable' is missing"
        return result

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the trail to be enabled.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

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
        "oss_bucket_name": "ossBucketName",
        "role_name": "roleName",
        "event_rw": "eventRw",
        "oss_key_prefix": "ossKeyPrefix",
        "sls_project_arn": "slsProjectArn",
        "sls_write_role_arn": "slsWriteRoleArn",
    },
)
class RosTrailProps:
    def __init__(
        self,
        *,
        name: builtins.str,
        oss_bucket_name: builtins.str,
        role_name: builtins.str,
        event_rw: typing.Optional[builtins.str] = None,
        oss_key_prefix: typing.Optional[builtins.str] = None,
        sls_project_arn: typing.Optional[builtins.str] = None,
        sls_write_role_arn: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ACTIONTRAIL::Trail``.

        :param name: 
        :param oss_bucket_name: 
        :param role_name: 
        :param event_rw: 
        :param oss_key_prefix: 
        :param sls_project_arn: 
        :param sls_write_role_arn: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
            "oss_bucket_name": oss_bucket_name,
            "role_name": role_name,
        }
        if event_rw is not None:
            self._values["event_rw"] = event_rw
        if oss_key_prefix is not None:
            self._values["oss_key_prefix"] = oss_key_prefix
        if sls_project_arn is not None:
            self._values["sls_project_arn"] = sls_project_arn
        if sls_write_role_arn is not None:
            self._values["sls_write_role_arn"] = sls_write_role_arn

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the trail to be created, which must be unique for an account.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def oss_bucket_name(self) -> builtins.str:
        """
        :Property: ossBucketName: The OSS bucket to which the trail delivers logs. Ensure that this is an existing OSS bucket.
        """
        result = self._values.get("oss_bucket_name")
        assert result is not None, "Required property 'oss_bucket_name' is missing"
        return result

    @builtins.property
    def role_name(self) -> builtins.str:
        """
        :Property: roleName: The RAM role in ActionTrail permitted by the user.
        """
        result = self._values.get("role_name")
        assert result is not None, "Required property 'role_name' is missing"
        return result

    @builtins.property
    def event_rw(self) -> typing.Optional[builtins.str]:
        """
        :Property: eventRw: Indicates whether the event is a read or a write event. Valid values: Read, Write, and All. Default value: Write.
        """
        result = self._values.get("event_rw")
        return result

    @builtins.property
    def oss_key_prefix(self) -> typing.Optional[builtins.str]:
        """
        :Property: ossKeyPrefix: The prefix of the specified OSS bucket name. This parameter can be left empty.
        """
        result = self._values.get("oss_key_prefix")
        return result

    @builtins.property
    def sls_project_arn(self) -> typing.Optional[builtins.str]:
        """
        :Property: slsProjectArn: The unique ARN of the Log Service project.
        """
        result = self._values.get("sls_project_arn")
        return result

    @builtins.property
    def sls_write_role_arn(self) -> typing.Optional[builtins.str]:
        """
        :Property: slsWriteRoleArn: The unique ARN of the Log Service role.
        """
        result = self._values.get("sls_write_role_arn")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTrailProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Trail(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-actiontrail.Trail",
):
    """A ROS resource type:  ``ALIYUN::ACTIONTRAIL::Trail``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TrailProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ACTIONTRAIL::Trail``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Trail, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> typing.Any:
        """
        :Attribute: Name: The name of the trail to be created, which must be unique for an account.
        """
        return jsii.get(self, "attrName")


class TrailLogging(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-actiontrail.TrailLogging",
):
    """A ROS resource type:  ``ALIYUN::ACTIONTRAIL::TrailLogging``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TrailLoggingProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ACTIONTRAIL::TrailLogging``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(TrailLogging, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIsLogging")
    def attr_is_logging(self) -> typing.Any:
        """
        :Attribute: IsLogging: Indicates whether the trail is logging API invocations.
        """
        return jsii.get(self, "attrIsLogging")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrLatestDeliveryError")
    def attr_latest_delivery_error(self) -> typing.Any:
        """
        :Attribute: LatestDeliveryError: The last time an error occurred when the trail attempted to deliver log files.
        """
        return jsii.get(self, "attrLatestDeliveryError")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrLatestDeliveryTime")
    def attr_latest_delivery_time(self) -> typing.Any:
        """
        :Attribute: LatestDeliveryTime: The date and time of the last successful delivery of a log file.
        """
        return jsii.get(self, "attrLatestDeliveryTime")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrStartLoggingTime")
    def attr_start_logging_time(self) -> typing.Any:
        """
        :Attribute: StartLoggingTime: The most recent date and time when the user enables the trail.
        """
        return jsii.get(self, "attrStartLoggingTime")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrStopLoggingTime")
    def attr_stop_logging_time(self) -> typing.Any:
        """
        :Attribute: StopLoggingTime: The most recent date and time when the user disables the trail.
        """
        return jsii.get(self, "attrStopLoggingTime")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-actiontrail.TrailLoggingProps",
    jsii_struct_bases=[],
    name_mapping={"enable": "enable", "name": "name"},
)
class TrailLoggingProps:
    def __init__(
        self,
        *,
        enable: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
        name: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::ACTIONTRAIL::TrailLogging``.

        :param enable: 
        :param name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "enable": enable,
            "name": name,
        }

    @builtins.property
    def enable(self) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        """
        :Property: enable: Whether to enable the trail logging.
        """
        result = self._values.get("enable")
        assert result is not None, "Required property 'enable' is missing"
        return result

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the trail to be enabled.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

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
        "oss_bucket_name": "ossBucketName",
        "role_name": "roleName",
        "event_rw": "eventRw",
        "oss_key_prefix": "ossKeyPrefix",
        "sls_project_arn": "slsProjectArn",
        "sls_write_role_arn": "slsWriteRoleArn",
    },
)
class TrailProps:
    def __init__(
        self,
        *,
        name: builtins.str,
        oss_bucket_name: builtins.str,
        role_name: builtins.str,
        event_rw: typing.Optional[builtins.str] = None,
        oss_key_prefix: typing.Optional[builtins.str] = None,
        sls_project_arn: typing.Optional[builtins.str] = None,
        sls_write_role_arn: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ACTIONTRAIL::Trail``.

        :param name: 
        :param oss_bucket_name: 
        :param role_name: 
        :param event_rw: 
        :param oss_key_prefix: 
        :param sls_project_arn: 
        :param sls_write_role_arn: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
            "oss_bucket_name": oss_bucket_name,
            "role_name": role_name,
        }
        if event_rw is not None:
            self._values["event_rw"] = event_rw
        if oss_key_prefix is not None:
            self._values["oss_key_prefix"] = oss_key_prefix
        if sls_project_arn is not None:
            self._values["sls_project_arn"] = sls_project_arn
        if sls_write_role_arn is not None:
            self._values["sls_write_role_arn"] = sls_write_role_arn

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the trail to be created, which must be unique for an account.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def oss_bucket_name(self) -> builtins.str:
        """
        :Property: ossBucketName: The OSS bucket to which the trail delivers logs. Ensure that this is an existing OSS bucket.
        """
        result = self._values.get("oss_bucket_name")
        assert result is not None, "Required property 'oss_bucket_name' is missing"
        return result

    @builtins.property
    def role_name(self) -> builtins.str:
        """
        :Property: roleName: The RAM role in ActionTrail permitted by the user.
        """
        result = self._values.get("role_name")
        assert result is not None, "Required property 'role_name' is missing"
        return result

    @builtins.property
    def event_rw(self) -> typing.Optional[builtins.str]:
        """
        :Property: eventRw: Indicates whether the event is a read or a write event. Valid values: Read, Write, and All. Default value: Write.
        """
        result = self._values.get("event_rw")
        return result

    @builtins.property
    def oss_key_prefix(self) -> typing.Optional[builtins.str]:
        """
        :Property: ossKeyPrefix: The prefix of the specified OSS bucket name. This parameter can be left empty.
        """
        result = self._values.get("oss_key_prefix")
        return result

    @builtins.property
    def sls_project_arn(self) -> typing.Optional[builtins.str]:
        """
        :Property: slsProjectArn: The unique ARN of the Log Service project.
        """
        result = self._values.get("sls_project_arn")
        return result

    @builtins.property
    def sls_write_role_arn(self) -> typing.Optional[builtins.str]:
        """
        :Property: slsWriteRoleArn: The unique ARN of the Log Service role.
        """
        result = self._values.get("sls_write_role_arn")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TrailProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
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
