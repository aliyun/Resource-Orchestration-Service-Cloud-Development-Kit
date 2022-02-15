'''
## Aliyun ROS CAS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as CAS from '@alicloud/ros-cdk-cas';
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


class Certificate(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cas.Certificate",
):
    '''A ROS resource type:  ``ALIYUN::CAS::Certificate``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CertificateProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CAS::Certificate``.

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
    @jsii.member(jsii_name="attrCertId")
    def attr_cert_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute CertId: Certificate ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCertId"))


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
        cert: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        lang: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        source_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CAS::Certificate``.

        :param cert: Property cert: Specify the content of the certificate. To use the PEM encoding format.
        :param key: Property key: Specify the certificate private key content. To use the PEM encoding format.
        :param name: Property name: Custom certificate name. The certificate name under a user cannot be duplicated.
        :param lang: Property lang: Specifies the language type for requesting and receiving messages.
        :param source_ip: Property sourceIp: Specifies the source IP address of the request.
        '''
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
    def cert(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property cert: Specify the content of the certificate.

        To use the PEM encoding format.
        '''
        result = self._values.get("cert")
        assert result is not None, "Required property 'cert' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property key: Specify the certificate private key content.

        To use the PEM encoding format.
        '''
        result = self._values.get("key")
        assert result is not None, "Required property 'key' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property name: Custom certificate name.

        The certificate name under a user cannot be duplicated.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property lang: Specifies the language type for requesting and receiving messages.'''
        result = self._values.get("lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def source_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property sourceIp: Specifies the source IP address of the request.'''
        result = self._values.get("source_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS template type:  ``ALIYUN::CAS::Certificate``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCertificateProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CAS::Certificate``.

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
    @jsii.member(jsii_name="attrCertId")
    def attr_cert_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CertId: Certificate ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCertId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cert")
    def cert(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cert: Specify the content of the certificate. To use the PEM encoding format.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "cert"))

    @cert.setter
    def cert(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "cert", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="key")
    def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: key: Specify the certificate private key content. To use the PEM encoding format.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "key"))

    @key.setter
    def key(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "key", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: Custom certificate name. The certificate name under a user cannot be duplicated.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="lang")
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: lang: Specifies the language type for requesting and receiving messages.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "lang"))

    @lang.setter
    def lang(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "lang", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourceIp")
    def source_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: sourceIp: Specifies the source IP address of the request.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "sourceIp"))

    @source_ip.setter
    def source_ip(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        cert: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        lang: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        source_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CAS::Certificate``.

        :param cert: 
        :param key: 
        :param name: 
        :param lang: 
        :param source_ip: 
        '''
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
    def cert(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cert: Specify the content of the certificate. To use the PEM encoding format.
        '''
        result = self._values.get("cert")
        assert result is not None, "Required property 'cert' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: key: Specify the certificate private key content. To use the PEM encoding format.
        '''
        result = self._values.get("key")
        assert result is not None, "Required property 'key' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: Custom certificate name. The certificate name under a user cannot be duplicated.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: lang: Specifies the language type for requesting and receiving messages.
        '''
        result = self._values.get("lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def source_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: sourceIp: Specifies the source IP address of the request.
        '''
        result = self._values.get("source_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
