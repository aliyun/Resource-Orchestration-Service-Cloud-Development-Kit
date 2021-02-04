"""
## Aliyun ROS CAS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_cas as CAS
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


class Certificate(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cas.Certificate",
):
    """A ROS resource type:  ``ALIYUN::CAS::Certificate``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CertificateProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CAS::Certificate``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Certificate, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCertId")
    def attr_cert_id(self) -> typing.Any:
        """
        :Attribute: CertId: Certificate ID.
        """
        return jsii.get(self, "attrCertId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cas.CertificateProps",
    jsii_struct_bases=[],
    name_mapping={
        "cert": "cert",
        "key": "key",
        "name": "name",
        "lang": "lang",
        "source_ip": "sourceIp",
    },
)
class CertificateProps:
    def __init__(
        self,
        *,
        cert: builtins.str,
        key: builtins.str,
        name: builtins.str,
        lang: typing.Optional[builtins.str] = None,
        source_ip: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CAS::Certificate``.

        :param cert: 
        :param key: 
        :param name: 
        :param lang: 
        :param source_ip: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cert": cert,
            "key": key,
            "name": name,
        }
        if lang is not None:
            self._values["lang"] = lang
        if source_ip is not None:
            self._values["source_ip"] = source_ip

    @builtins.property
    def cert(self) -> builtins.str:
        """
        :Property: cert: Specify the content of the certificate. To use the PEM encoding format.
        """
        result = self._values.get("cert")
        assert result is not None, "Required property 'cert' is missing"
        return result

    @builtins.property
    def key(self) -> builtins.str:
        """
        :Property: key: Specify the certificate private key content. To use the PEM encoding format.
        """
        result = self._values.get("key")
        assert result is not None, "Required property 'key' is missing"
        return result

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: Custom certificate name. The certificate name under a user cannot be duplicated.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def lang(self) -> typing.Optional[builtins.str]:
        """
        :Property: lang: Specifies the language type for requesting and receiving messages.
        """
        result = self._values.get("lang")
        return result

    @builtins.property
    def source_ip(self) -> typing.Optional[builtins.str]:
        """
        :Property: sourceIp: Specifies the source IP address of the request.
        """
        result = self._values.get("source_ip")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CertificateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCertificate(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cas.RosCertificate",
):
    """A ROS template type:  ``ALIYUN::CAS::Certificate``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCertificateProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CAS::Certificate``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosCertificate, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrCertId")
    def attr_cert_id(self) -> typing.Any:
        """
        :Attribute: CertId: Certificate ID.
        """
        return jsii.get(self, "attrCertId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cert")
    def cert(self) -> builtins.str:
        """
        :Property: cert: Specify the content of the certificate. To use the PEM encoding format.
        """
        return jsii.get(self, "cert")

    @cert.setter # type: ignore
    def cert(self, value: builtins.str) -> None:
        jsii.set(self, "cert", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="key")
    def key(self) -> builtins.str:
        """
        :Property: key: Specify the certificate private key content. To use the PEM encoding format.
        """
        return jsii.get(self, "key")

    @key.setter # type: ignore
    def key(self, value: builtins.str) -> None:
        jsii.set(self, "key", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> builtins.str:
        """
        :Property: name: Custom certificate name. The certificate name under a user cannot be duplicated.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: builtins.str) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="lang")
    def lang(self) -> typing.Optional[builtins.str]:
        """
        :Property: lang: Specifies the language type for requesting and receiving messages.
        """
        return jsii.get(self, "lang")

    @lang.setter # type: ignore
    def lang(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "lang", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sourceIp")
    def source_ip(self) -> typing.Optional[builtins.str]:
        """
        :Property: sourceIp: Specifies the source IP address of the request.
        """
        return jsii.get(self, "sourceIp")

    @source_ip.setter # type: ignore
    def source_ip(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "sourceIp", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cas.RosCertificateProps",
    jsii_struct_bases=[],
    name_mapping={
        "cert": "cert",
        "key": "key",
        "name": "name",
        "lang": "lang",
        "source_ip": "sourceIp",
    },
)
class RosCertificateProps:
    def __init__(
        self,
        *,
        cert: builtins.str,
        key: builtins.str,
        name: builtins.str,
        lang: typing.Optional[builtins.str] = None,
        source_ip: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CAS::Certificate``.

        :param cert: 
        :param key: 
        :param name: 
        :param lang: 
        :param source_ip: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cert": cert,
            "key": key,
            "name": name,
        }
        if lang is not None:
            self._values["lang"] = lang
        if source_ip is not None:
            self._values["source_ip"] = source_ip

    @builtins.property
    def cert(self) -> builtins.str:
        """
        :Property: cert: Specify the content of the certificate. To use the PEM encoding format.
        """
        result = self._values.get("cert")
        assert result is not None, "Required property 'cert' is missing"
        return result

    @builtins.property
    def key(self) -> builtins.str:
        """
        :Property: key: Specify the certificate private key content. To use the PEM encoding format.
        """
        result = self._values.get("key")
        assert result is not None, "Required property 'key' is missing"
        return result

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: Custom certificate name. The certificate name under a user cannot be duplicated.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def lang(self) -> typing.Optional[builtins.str]:
        """
        :Property: lang: Specifies the language type for requesting and receiving messages.
        """
        result = self._values.get("lang")
        return result

    @builtins.property
    def source_ip(self) -> typing.Optional[builtins.str]:
        """
        :Property: sourceIp: Specifies the source IP address of the request.
        """
        result = self._values.get("source_ip")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCertificateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Certificate",
    "CertificateProps",
    "RosCertificate",
    "RosCertificateProps",
]

publication.publish()
