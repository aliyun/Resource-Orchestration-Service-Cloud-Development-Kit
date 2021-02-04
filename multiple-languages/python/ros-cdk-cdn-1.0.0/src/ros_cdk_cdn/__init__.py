"""
## Aliyun ROS CDN Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_cdn as CDN
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


class Domain(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cdn.Domain",
):
    """A ROS resource type:  ``ALIYUN::CDN::Domain``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DomainProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CDN::Domain``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Domain, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCname")
    def attr_cname(self) -> typing.Any:
        """
        :Attribute: Cname: The CNAME generated for the CDN domain.You must add a CNAME record with your DNS provider to map the CDN domain name to the CNAME.
        """
        return jsii.get(self, "attrCname")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> typing.Any:
        """
        :Attribute: DomainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
        """
        return jsii.get(self, "attrDomainName")


class DomainConfig(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cdn.DomainConfig",
):
    """A ROS resource type:  ``ALIYUN::CDN::DomainConfig``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DomainConfigProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CDN::DomainConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(DomainConfig, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cdn.DomainConfigProps",
    jsii_struct_bases=[],
    name_mapping={"domain_names": "domainNames", "functions": "functions"},
)
class DomainConfigProps:
    def __init__(self, *, domain_names: builtins.str, functions: builtins.str) -> None:
        """Properties for defining a ``ALIYUN::CDN::DomainConfig``.

        :param domain_names: 
        :param functions: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "domain_names": domain_names,
            "functions": functions,
        }

    @builtins.property
    def domain_names(self) -> builtins.str:
        """
        :Property: domainNames: Your accelerated domain name, separated by commas in English.
        """
        result = self._values.get("domain_names")
        assert result is not None, "Required property 'domain_names' is missing"
        return result

    @builtins.property
    def functions(self) -> builtins.str:
        """
        :Property: functions: function list, please refer to the CDN documentation for details.
        """
        result = self._values.get("functions")
        assert result is not None, "Required property 'functions' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cdn.DomainProps",
    jsii_struct_bases=[],
    name_mapping={
        "cdn_type": "cdnType",
        "domain_name": "domainName",
        "check_url": "checkUrl",
        "resource_group_id": "resourceGroupId",
        "scope": "scope",
        "sources": "sources",
        "top_level_domain": "topLevelDomain",
    },
)
class DomainProps:
    def __init__(
        self,
        *,
        cdn_type: builtins.str,
        domain_name: builtins.str,
        check_url: typing.Optional[builtins.str] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        scope: typing.Optional[builtins.str] = None,
        sources: typing.Optional[builtins.str] = None,
        top_level_domain: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CDN::Domain``.

        :param cdn_type: 
        :param domain_name: 
        :param check_url: 
        :param resource_group_id: 
        :param scope: 
        :param sources: 
        :param top_level_domain: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cdn_type": cdn_type,
            "domain_name": domain_name,
        }
        if check_url is not None:
            self._values["check_url"] = check_url
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if scope is not None:
            self._values["scope"] = scope
        if sources is not None:
            self._values["sources"] = sources
        if top_level_domain is not None:
            self._values["top_level_domain"] = top_level_domain

    @builtins.property
    def cdn_type(self) -> builtins.str:
        """
        :Property: cdnType: The business type. Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
        """
        result = self._values.get("cdn_type")
        assert result is not None, "Required property 'cdn_type' is missing"
        return result

    @builtins.property
    def domain_name(self) -> builtins.str:
        """
        :Property: domainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
        """
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return result

    @builtins.property
    def check_url(self) -> typing.Optional[builtins.str]:
        """
        :Property: checkUrl: The validation of the origin.
        """
        result = self._values.get("check_url")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def scope(self) -> typing.Optional[builtins.str]:
        """
        :Property: scope: Valid values: domestic, overseas, and global. Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
        """
        result = self._values.get("scope")
        return result

    @builtins.property
    def sources(self) -> typing.Optional[builtins.str]:
        """
        :Property: sources: The list of origin URLs.
        """
        result = self._values.get("sources")
        return result

    @builtins.property
    def top_level_domain(self) -> typing.Optional[builtins.str]:
        """
        :Property: topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
        """
        result = self._values.get("top_level_domain")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDomain(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cdn.RosDomain",
):
    """A ROS template type:  ``ALIYUN::CDN::Domain``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDomainProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CDN::Domain``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDomain, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrCname")
    def attr_cname(self) -> typing.Any:
        """
        :Attribute: Cname: The CNAME generated for the CDN domain.You must add a CNAME record with your DNS provider to map the CDN domain name to the CNAME.
        """
        return jsii.get(self, "attrCname")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> typing.Any:
        """
        :Attribute: DomainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
        """
        return jsii.get(self, "attrDomainName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cdnType")
    def cdn_type(self) -> builtins.str:
        """
        :Property: cdnType: The business type. Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
        """
        return jsii.get(self, "cdnType")

    @cdn_type.setter # type: ignore
    def cdn_type(self, value: builtins.str) -> None:
        jsii.set(self, "cdnType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="domainName")
    def domain_name(self) -> builtins.str:
        """
        :Property: domainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
        """
        return jsii.get(self, "domainName")

    @domain_name.setter # type: ignore
    def domain_name(self, value: builtins.str) -> None:
        jsii.set(self, "domainName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="checkUrl")
    def check_url(self) -> typing.Optional[builtins.str]:
        """
        :Property: checkUrl: The validation of the origin.
        """
        return jsii.get(self, "checkUrl")

    @check_url.setter # type: ignore
    def check_url(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "checkUrl", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
        """
        return jsii.get(self, "resourceGroupId")

    @resource_group_id.setter # type: ignore
    def resource_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="scope")
    def scope(self) -> typing.Optional[builtins.str]:
        """
        :Property: scope: Valid values: domestic, overseas, and global. Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
        """
        return jsii.get(self, "scope")

    @scope.setter # type: ignore
    def scope(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "scope", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sources")
    def sources(self) -> typing.Optional[builtins.str]:
        """
        :Property: sources: The list of origin URLs.
        """
        return jsii.get(self, "sources")

    @sources.setter # type: ignore
    def sources(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "sources", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="topLevelDomain")
    def top_level_domain(self) -> typing.Optional[builtins.str]:
        """
        :Property: topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
        """
        return jsii.get(self, "topLevelDomain")

    @top_level_domain.setter # type: ignore
    def top_level_domain(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "topLevelDomain", value)


class RosDomainConfig(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cdn.RosDomainConfig",
):
    """A ROS template type:  ``ALIYUN::CDN::DomainConfig``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDomainConfigProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CDN::DomainConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDomainConfig, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="domainNames")
    def domain_names(self) -> builtins.str:
        """
        :Property: domainNames: Your accelerated domain name, separated by commas in English.
        """
        return jsii.get(self, "domainNames")

    @domain_names.setter # type: ignore
    def domain_names(self, value: builtins.str) -> None:
        jsii.set(self, "domainNames", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="functions")
    def functions(self) -> builtins.str:
        """
        :Property: functions: function list, please refer to the CDN documentation for details.
        """
        return jsii.get(self, "functions")

    @functions.setter # type: ignore
    def functions(self, value: builtins.str) -> None:
        jsii.set(self, "functions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cdn.RosDomainConfigProps",
    jsii_struct_bases=[],
    name_mapping={"domain_names": "domainNames", "functions": "functions"},
)
class RosDomainConfigProps:
    def __init__(self, *, domain_names: builtins.str, functions: builtins.str) -> None:
        """Properties for defining a ``ALIYUN::CDN::DomainConfig``.

        :param domain_names: 
        :param functions: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "domain_names": domain_names,
            "functions": functions,
        }

    @builtins.property
    def domain_names(self) -> builtins.str:
        """
        :Property: domainNames: Your accelerated domain name, separated by commas in English.
        """
        result = self._values.get("domain_names")
        assert result is not None, "Required property 'domain_names' is missing"
        return result

    @builtins.property
    def functions(self) -> builtins.str:
        """
        :Property: functions: function list, please refer to the CDN documentation for details.
        """
        result = self._values.get("functions")
        assert result is not None, "Required property 'functions' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cdn.RosDomainProps",
    jsii_struct_bases=[],
    name_mapping={
        "cdn_type": "cdnType",
        "domain_name": "domainName",
        "check_url": "checkUrl",
        "resource_group_id": "resourceGroupId",
        "scope": "scope",
        "sources": "sources",
        "top_level_domain": "topLevelDomain",
    },
)
class RosDomainProps:
    def __init__(
        self,
        *,
        cdn_type: builtins.str,
        domain_name: builtins.str,
        check_url: typing.Optional[builtins.str] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        scope: typing.Optional[builtins.str] = None,
        sources: typing.Optional[builtins.str] = None,
        top_level_domain: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CDN::Domain``.

        :param cdn_type: 
        :param domain_name: 
        :param check_url: 
        :param resource_group_id: 
        :param scope: 
        :param sources: 
        :param top_level_domain: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cdn_type": cdn_type,
            "domain_name": domain_name,
        }
        if check_url is not None:
            self._values["check_url"] = check_url
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if scope is not None:
            self._values["scope"] = scope
        if sources is not None:
            self._values["sources"] = sources
        if top_level_domain is not None:
            self._values["top_level_domain"] = top_level_domain

    @builtins.property
    def cdn_type(self) -> builtins.str:
        """
        :Property: cdnType: The business type. Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
        """
        result = self._values.get("cdn_type")
        assert result is not None, "Required property 'cdn_type' is missing"
        return result

    @builtins.property
    def domain_name(self) -> builtins.str:
        """
        :Property: domainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
        """
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return result

    @builtins.property
    def check_url(self) -> typing.Optional[builtins.str]:
        """
        :Property: checkUrl: The validation of the origin.
        """
        result = self._values.get("check_url")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def scope(self) -> typing.Optional[builtins.str]:
        """
        :Property: scope: Valid values: domestic, overseas, and global. Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
        """
        result = self._values.get("scope")
        return result

    @builtins.property
    def sources(self) -> typing.Optional[builtins.str]:
        """
        :Property: sources: The list of origin URLs.
        """
        result = self._values.get("sources")
        return result

    @builtins.property
    def top_level_domain(self) -> typing.Optional[builtins.str]:
        """
        :Property: topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
        """
        result = self._values.get("top_level_domain")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Domain",
    "DomainConfig",
    "DomainConfigProps",
    "DomainProps",
    "RosDomain",
    "RosDomainConfig",
    "RosDomainConfigProps",
    "RosDomainProps",
]

publication.publish()
