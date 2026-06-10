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

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


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
        cert: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Certificate``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-certificate

        :param cert: Property cert: Specify the content of the certificate. To use the PEM encoding format.
        :param key: Property key: Specify the certificate private key content. To use the PEM encoding format.
        :param name: Property name: Custom certificate name. The certificate name under a user cannot be duplicated.
        :param lang: Property lang: Specifies the language type for requesting and receiving messages.
        :param source_ip: Property sourceIp: Specifies the source IP address of the request.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__07e0a2ae254f018b4c89dd3f7f79bcc2272bc543adacd01e9c591a9f9e589493)
            check_type(argname="argument cert", value=cert, expected_type=type_hints["cert"])
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument lang", value=lang, expected_type=type_hints["lang"])
            check_type(argname="argument source_ip", value=source_ip, expected_type=type_hints["source_ip"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cert": cert,
            "key": key,
            "name": name,
        }
        if lang is not None:
            self._values["lang"] = lang
        if source_ip is not None:
            self._values["source_ip"] = source_ip

    @builtins.property
    def cert(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cert: Specify the content of the certificate.

        To use the PEM encoding format.
        '''
        result = self._values.get("cert")
        assert result is not None, "Required property 'cert' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property key: Specify the certificate private key content.

        To use the PEM encoding format.
        '''
        result = self._values.get("key")
        assert result is not None, "Required property 'key' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: Custom certificate name.

        The certificate name under a user cannot be duplicated.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property lang: Specifies the language type for requesting and receiving messages.'''
        result = self._values.get("lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceIp: Specifies the source IP address of the request.'''
        result = self._values.get("source_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CertificateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-cas.ICertificate")
class ICertificate(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Certificate``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCertId")
    def attr_cert_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CertId: Certificate ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CertificateProps:
        ...


class _ICertificateProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Certificate``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cas.ICertificate"

    @builtins.property
    @jsii.member(jsii_name="attrCertId")
    def attr_cert_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CertId: Certificate ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCertId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CertificateProps:
        return typing.cast(CertificateProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ICertificate).__jsii_proxy_class__ = lambda : _ICertificateProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cas.IOrder")
class IOrder(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Order``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OrderProps":
        ...


class _IOrderProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Order``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cas.IOrder"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OrderProps":
        return typing.cast("OrderProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IOrder).__jsii_proxy_class__ = lambda : _IOrderProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cas.IPcaCertificate")
class IPcaCertificate(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``PcaCertificate``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAlgorithm")
    def attr_algorithm(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Algorithm: The key algorithm type of the root CA certificate.

        The key algorithm is expressed using the '_< key length>' format.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCertificateType")
    def attr_certificate_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CertificateType: The type of CA.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCommonName")
    def attr_common_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CommonName: The common name or abbreviation of the organization.

        Support the use of Chinese, English characters.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCountryCode")
    def attr_country_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CountryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation.

        For example, **CN** represents China and **US** represents the United States.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIdentifier")
    def attr_identifier(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Identifier: Certificate Identifier.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIssuerType")
    def attr_issuer_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IssuerType: The institution issuing the CA.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLocality")
    def attr_locality(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Locality: Name of the city where the organization is located.

        Support the use of Chinese, English characters.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOrganization")
    def attr_organization(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate.

        Support the use of Chinese, English characters.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOrganizationUnit")
    def attr_organization_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrganizationUnit: The name of the department or branch under the organization.

        Support the use of Chinese, English characters.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrState")
    def attr_state(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute State: <props = "china"> The name of the province, municipality, or autonomous region in which the organization is located.

        Support the use of Chinese, English characters.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrYears")
    def attr_years(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Years: The validity period of the root CA certificate, in years.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PcaCertificateProps":
        ...


class _IPcaCertificateProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``PcaCertificate``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cas.IPcaCertificate"

    @builtins.property
    @jsii.member(jsii_name="attrAlgorithm")
    def attr_algorithm(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Algorithm: The key algorithm type of the root CA certificate.

        The key algorithm is expressed using the '_< key length>' format.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAlgorithm"))

    @builtins.property
    @jsii.member(jsii_name="attrCertificateType")
    def attr_certificate_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CertificateType: The type of CA.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCertificateType"))

    @builtins.property
    @jsii.member(jsii_name="attrCommonName")
    def attr_common_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CommonName: The common name or abbreviation of the organization.

        Support the use of Chinese, English characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCommonName"))

    @builtins.property
    @jsii.member(jsii_name="attrCountryCode")
    def attr_country_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CountryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation.

        For example, **CN** represents China and **US** represents the United States.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCountryCode"))

    @builtins.property
    @jsii.member(jsii_name="attrIdentifier")
    def attr_identifier(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Identifier: Certificate Identifier.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIdentifier"))

    @builtins.property
    @jsii.member(jsii_name="attrIssuerType")
    def attr_issuer_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IssuerType: The institution issuing the CA.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIssuerType"))

    @builtins.property
    @jsii.member(jsii_name="attrLocality")
    def attr_locality(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Locality: Name of the city where the organization is located.

        Support the use of Chinese, English characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLocality"))

    @builtins.property
    @jsii.member(jsii_name="attrOrganization")
    def attr_organization(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate.

        Support the use of Chinese, English characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOrganization"))

    @builtins.property
    @jsii.member(jsii_name="attrOrganizationUnit")
    def attr_organization_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrganizationUnit: The name of the department or branch under the organization.

        Support the use of Chinese, English characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOrganizationUnit"))

    @builtins.property
    @jsii.member(jsii_name="attrState")
    def attr_state(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute State: <props = "china"> The name of the province, municipality, or autonomous region in which the organization is located.

        Support the use of Chinese, English characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrState"))

    @builtins.property
    @jsii.member(jsii_name="attrYears")
    def attr_years(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Years: The validity period of the root CA certificate, in years.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrYears"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PcaCertificateProps":
        return typing.cast("PcaCertificateProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IPcaCertificate).__jsii_proxy_class__ = lambda : _IPcaCertificateProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cas.ISslCertificate")
class ISslCertificate(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``SslCertificate``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCertificateId")
    def attr_certificate_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CertificateId: The ID of the certificate issued to you.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrderId: The ID of the certificate order.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SslCertificateProps":
        ...


class _ISslCertificateProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``SslCertificate``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cas.ISslCertificate"

    @builtins.property
    @jsii.member(jsii_name="attrCertificateId")
    def attr_certificate_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CertificateId: The ID of the certificate issued to you.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCertificateId"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrderId: The ID of the certificate order.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SslCertificateProps":
        return typing.cast("SslCertificateProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ISslCertificate).__jsii_proxy_class__ = lambda : _ISslCertificateProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cas.IUserCertificate")
class IUserCertificate(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``UserCertificate``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCert")
    def attr_cert(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cert: The certificate content in PEM format.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCertId")
    def attr_cert_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CertId: Certificate ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCertificateName")
    def attr_certificate_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CertificateName: Custom certificate name.

        Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEncryptCert")
    def attr_encrypt_cert(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EncryptCert: The content of the encryption certificate in PEM format.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEncryptPrivateKey")
    def attr_encrypt_private_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EncryptPrivateKey: The private key content of the encryption certificate in PEM format.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrKey")
    def attr_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Key: The private key content of the certificate in PEM format.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSignCert")
    def attr_sign_cert(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SignCert: The signature certificate content in PEM format.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSignPrivateKey")
    def attr_sign_private_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SignPrivateKey: The private key content of the signature certificate in PEM format.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tag of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserCertificateProps":
        ...


class _IUserCertificateProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``UserCertificate``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cas.IUserCertificate"

    @builtins.property
    @jsii.member(jsii_name="attrCert")
    def attr_cert(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cert: The certificate content in PEM format.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCert"))

    @builtins.property
    @jsii.member(jsii_name="attrCertId")
    def attr_cert_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CertId: Certificate ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCertId"))

    @builtins.property
    @jsii.member(jsii_name="attrCertificateName")
    def attr_certificate_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CertificateName: Custom certificate name.

        Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCertificateName"))

    @builtins.property
    @jsii.member(jsii_name="attrEncryptCert")
    def attr_encrypt_cert(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EncryptCert: The content of the encryption certificate in PEM format.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEncryptCert"))

    @builtins.property
    @jsii.member(jsii_name="attrEncryptPrivateKey")
    def attr_encrypt_private_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EncryptPrivateKey: The private key content of the encryption certificate in PEM format.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEncryptPrivateKey"))

    @builtins.property
    @jsii.member(jsii_name="attrKey")
    def attr_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Key: The private key content of the certificate in PEM format.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKey"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSignCert")
    def attr_sign_cert(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SignCert: The signature certificate content in PEM format.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSignCert"))

    @builtins.property
    @jsii.member(jsii_name="attrSignPrivateKey")
    def attr_sign_private_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SignPrivateKey: The private key content of the signature certificate in PEM format.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSignPrivateKey"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tag of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserCertificateProps":
        return typing.cast("UserCertificateProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IUserCertificate).__jsii_proxy_class__ = lambda : _IUserCertificateProxy


@jsii.implements(IOrder)
class Order(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cas.Order",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CAS::Order``, which is used to create a certificate order.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosOrder``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-order
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["OrderProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__041f36dcf60488ce421cfd113ed4585a1567bb1c95159f7b6a86635c6bde6d8d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OrderProps":
        return typing.cast("OrderProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__333ad91c5b35d26707bdc6636f83da503ae00053a6a3ed10976ff5b918dce31e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8484a5696ae8fcc62a3154de44099beb7e491f98a56c66af632712154e63a07d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3fb0f24403298ae06d0a58086f5b768985bfab57cce2ededc8f1823f641b8e8e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cas.OrderProps",
    jsii_struct_bases=[],
    name_mapping={
        "cert_brand": "certBrand",
        "cert_type": "certType",
        "domain_cnt": "domainCnt",
        "domain_type": "domainType",
        "period": "period",
        "service": "service",
    },
)
class OrderProps:
    def __init__(
        self,
        *,
        cert_brand: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cert_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        domain_cnt: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        domain_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Order``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-order

        :param cert_brand: Property certBrand: Certificate brand. Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
        :param cert_type: Property certType: Certificate type. Valid values: DV, OV, EV.
        :param domain_cnt: Property domainCnt: Number of domains to be included in the certificate. Valid values: 1-500.
        :param domain_type: Property domainType: Domain type. Valid values: one, all, multiple.
        :param period: Property period: Service time of the certificate, in year. Valid values: 1, 2, 3. Note: Starting September 1, 2020, certificates issued by cas around the world will be valid for a maximum of 1 year.
        :param service: Property service: Whether enable other service. Valid values: - NoNeed: Do not apply for any services. - ExpeditedProduct: Request assistance services. - DeployProduct: Deploy services. - SM2DeployProduct: Deploy services with SM2 encryption. - VipProduct: Request assistance and deployment services. **Note:** This parameter is not supported by international stations.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1983f4ef767984ef716296ae644d4dc4dfef7599b6eaec1880da670ca56c0fa)
            check_type(argname="argument cert_brand", value=cert_brand, expected_type=type_hints["cert_brand"])
            check_type(argname="argument cert_type", value=cert_type, expected_type=type_hints["cert_type"])
            check_type(argname="argument domain_cnt", value=domain_cnt, expected_type=type_hints["domain_cnt"])
            check_type(argname="argument domain_type", value=domain_type, expected_type=type_hints["domain_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument service", value=service, expected_type=type_hints["service"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cert_brand": cert_brand,
            "cert_type": cert_type,
        }
        if domain_cnt is not None:
            self._values["domain_cnt"] = domain_cnt
        if domain_type is not None:
            self._values["domain_type"] = domain_type
        if period is not None:
            self._values["period"] = period
        if service is not None:
            self._values["service"] = service

    @builtins.property
    def cert_brand(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property certBrand: Certificate brand.

        Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
        '''
        result = self._values.get("cert_brand")
        assert result is not None, "Required property 'cert_brand' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cert_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property certType: Certificate type.

        Valid values: DV, OV, EV.
        '''
        result = self._values.get("cert_type")
        assert result is not None, "Required property 'cert_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def domain_cnt(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property domainCnt: Number of domains to be included in the certificate.

        Valid values: 1-500.
        '''
        result = self._values.get("domain_cnt")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def domain_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property domainType: Domain type.

        Valid values: one, all, multiple.
        '''
        result = self._values.get("domain_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: Service time of the certificate, in year.

        Valid values: 1, 2, 3.
        Note: Starting September 1, 2020, certificates issued by cas around the world will be valid for a maximum of 1 year.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property service: Whether enable other service.

        Valid values:

        - NoNeed: Do not apply for any services.
        - ExpeditedProduct: Request assistance services.
        - DeployProduct: Deploy services.
        - SM2DeployProduct: Deploy services with SM2 encryption.
        - VipProduct: Request assistance and deployment services.
          **Note:** This parameter is not supported by international stations.
        '''
        result = self._values.get("service")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "OrderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IPcaCertificate)
class PcaCertificate(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cas.PcaCertificate",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CAS::PcaCertificate``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPcaCertificate``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-pcacertificate
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PcaCertificateProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6030dec7403a4f9f3d571ea557323e4ca3430da2d85abb7652aba79baddcc9f9)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAlgorithm")
    def attr_algorithm(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Algorithm: The key algorithm type of the root CA certificate.

        The key algorithm is expressed using the '_< key length>' format.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAlgorithm"))

    @builtins.property
    @jsii.member(jsii_name="attrCertificateType")
    def attr_certificate_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CertificateType: The type of CA.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCertificateType"))

    @builtins.property
    @jsii.member(jsii_name="attrCommonName")
    def attr_common_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CommonName: The common name or abbreviation of the organization.

        Support the use of Chinese, English characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCommonName"))

    @builtins.property
    @jsii.member(jsii_name="attrCountryCode")
    def attr_country_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CountryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation.

        For example, **CN** represents China and **US** represents the United States.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCountryCode"))

    @builtins.property
    @jsii.member(jsii_name="attrIdentifier")
    def attr_identifier(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Identifier: Certificate Identifier.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIdentifier"))

    @builtins.property
    @jsii.member(jsii_name="attrIssuerType")
    def attr_issuer_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IssuerType: The institution issuing the CA.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIssuerType"))

    @builtins.property
    @jsii.member(jsii_name="attrLocality")
    def attr_locality(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Locality: Name of the city where the organization is located.

        Support the use of Chinese, English characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLocality"))

    @builtins.property
    @jsii.member(jsii_name="attrOrganization")
    def attr_organization(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate.

        Support the use of Chinese, English characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOrganization"))

    @builtins.property
    @jsii.member(jsii_name="attrOrganizationUnit")
    def attr_organization_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrganizationUnit: The name of the department or branch under the organization.

        Support the use of Chinese, English characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOrganizationUnit"))

    @builtins.property
    @jsii.member(jsii_name="attrState")
    def attr_state(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute State: <props = "china"> The name of the province, municipality, or autonomous region in which the organization is located.

        Support the use of Chinese, English characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrState"))

    @builtins.property
    @jsii.member(jsii_name="attrYears")
    def attr_years(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Years: The validity period of the root CA certificate, in years.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrYears"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PcaCertificateProps":
        return typing.cast("PcaCertificateProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f98aed47c1b3658bafc9b4466383077f5e243636cd750b8e12ee9191c55ecd1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f455f3f885cc2f2de1f9c8596926f4c7eb6bf415ed1635a54f010c394e78b0c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1f3b93e4d252949d661a678148ce96aedf91861e14e08ddf52c53784d8bd748)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cas.PcaCertificateProps",
    jsii_struct_bases=[],
    name_mapping={
        "common_name": "commonName",
        "locality": "locality",
        "organization": "organization",
        "organization_unit": "organizationUnit",
        "state": "state",
        "years": "years",
        "algorithm": "algorithm",
        "ca_status": "caStatus",
        "country_code": "countryCode",
    },
)
class PcaCertificateProps:
    def __init__(
        self,
        *,
        common_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        locality: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        organization: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        organization_unit: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        state: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        years: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        algorithm: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ca_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        country_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``PcaCertificate``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-pcacertificate

        :param common_name: Property commonName: The common name or abbreviation of the organization. Support the use of Chinese, English characters.
        :param locality: Property locality: Name of the city where the organization is located. Support the use of Chinese, English characters.
        :param organization: Property organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate. Support the use of Chinese, English characters.
        :param organization_unit: Property organizationUnit: The name of the department or branch under the organization. Support the use of Chinese, English characters.
        :param state: Property state: <props = "china"> The name of the province, municipality, or autonomous region in which the organization is located. Support the use of Chinese, English characters. </props> <props = "intl"> Name of the province or state where the organization is located. Support the use of Chinese, English characters. </props>.
        :param years: Property years: The validity period of the root CA certificate, in years. .. epigraph:: It is recommended to set to 5~10 years.
        :param algorithm: Property algorithm: The key algorithm type of the root CA certificate. The key algorithm is expressed using the '_< key length>' format. Value: - **RSA_1024**: The corresponding signature algorithm is Sha256WithRSA. - **RSA_2048**: The corresponding signature algorithm is Sha256WithRSA. - **RSA_4096**: The corresponding signature algorithm is Sha256WithRSA. - **ECC_256**: The signature algorithm is Sha256WithECDSA. - **ECC_384**: The corresponding signature algorithm is Sha256WithECDSA. - **ECC_512**: The signature algorithm is Sha256WithECDSA. - **SM2_256**: The corresponding signature algorithm is SM3WithSM2. The encryption algorithm of the root CA certificate must be the same as the **certificate algorithm** of the private Root CA you purchased. Example: If the **certificate algorithm** selected when you purchase a private Root CA is **RSA**, the key algorithm of the root CA certificate must be **RSA_1024**, **RSA_2048**, or **RSA_4096**.
        :param ca_status: Property caStatus: The current CA status. Value: - Issue: Enabled. - Forbidden: Disabled. - Revoke: Revoked.
        :param country_code: Property countryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation. For example, **CN** represents China and **US** represents the United States. For more information about the codes of different countries, see **International Code** in [Management Company Information](~~ 198289 ~~).
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__60d26c877cabb12aeb36b01c30e17551dd82bb47ac9171aee03cc1f826d4ed98)
            check_type(argname="argument common_name", value=common_name, expected_type=type_hints["common_name"])
            check_type(argname="argument locality", value=locality, expected_type=type_hints["locality"])
            check_type(argname="argument organization", value=organization, expected_type=type_hints["organization"])
            check_type(argname="argument organization_unit", value=organization_unit, expected_type=type_hints["organization_unit"])
            check_type(argname="argument state", value=state, expected_type=type_hints["state"])
            check_type(argname="argument years", value=years, expected_type=type_hints["years"])
            check_type(argname="argument algorithm", value=algorithm, expected_type=type_hints["algorithm"])
            check_type(argname="argument ca_status", value=ca_status, expected_type=type_hints["ca_status"])
            check_type(argname="argument country_code", value=country_code, expected_type=type_hints["country_code"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "common_name": common_name,
            "locality": locality,
            "organization": organization,
            "organization_unit": organization_unit,
            "state": state,
            "years": years,
        }
        if algorithm is not None:
            self._values["algorithm"] = algorithm
        if ca_status is not None:
            self._values["ca_status"] = ca_status
        if country_code is not None:
            self._values["country_code"] = country_code

    @builtins.property
    def common_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property commonName: The common name or abbreviation of the organization.

        Support the use of Chinese, English characters.
        '''
        result = self._values.get("common_name")
        assert result is not None, "Required property 'common_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def locality(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property locality: Name of the city where the organization is located.

        Support the use of Chinese, English characters.
        '''
        result = self._values.get("locality")
        assert result is not None, "Required property 'locality' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def organization(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate.

        Support the use of Chinese, English characters.
        '''
        result = self._values.get("organization")
        assert result is not None, "Required property 'organization' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def organization_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property organizationUnit: The name of the department or branch under the organization.

        Support the use of Chinese, English characters.
        '''
        result = self._values.get("organization_unit")
        assert result is not None, "Required property 'organization_unit' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def state(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property state: <props = "china"> The name of the province, municipality, or autonomous region in which the organization is located.

        Support the use of Chinese, English characters.
        <props = "intl"> Name of the province or state where the organization is located. Support the use of Chinese, English characters. .
        '''
        result = self._values.get("state")
        assert result is not None, "Required property 'state' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def years(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property years: The validity period of the root CA certificate, in years.

        .. epigraph::

           It is recommended to set to 5~10 years.
        '''
        result = self._values.get("years")
        assert result is not None, "Required property 'years' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def algorithm(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property algorithm: The key algorithm type of the root CA certificate.

        The key algorithm is expressed using the '_< key length>' format. Value:

        - **RSA_1024**: The corresponding signature algorithm is Sha256WithRSA.
        - **RSA_2048**: The corresponding signature algorithm is Sha256WithRSA.
        - **RSA_4096**: The corresponding signature algorithm is Sha256WithRSA.
        - **ECC_256**: The signature algorithm is Sha256WithECDSA.
        - **ECC_384**: The corresponding signature algorithm is Sha256WithECDSA.
        - **ECC_512**: The signature algorithm is Sha256WithECDSA.
        - **SM2_256**: The corresponding signature algorithm is SM3WithSM2.

        The encryption algorithm of the root CA certificate must be the same as the **certificate algorithm** of the private Root CA you purchased. Example: If the **certificate algorithm** selected when you purchase a private Root CA is **RSA**, the key algorithm of the root CA certificate must be **RSA_1024**, **RSA_2048**, or **RSA_4096**.
        '''
        result = self._values.get("algorithm")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ca_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property caStatus: The current CA status.

        Value:

        - Issue: Enabled.
        - Forbidden: Disabled.
        - Revoke: Revoked.
        '''
        result = self._values.get("ca_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def country_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property countryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation.

        For example, **CN** represents China and **US** represents the United States.
        For more information about the codes of different countries, see **International Code** in [Management Company Information](~~ 198289 ~~).
        '''
        result = self._values.get("country_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PcaCertificateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCertificate(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cas.RosCertificate",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CAS::Certificate``, which is used to add a certificate.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Certificate`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-certificate
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCertificateProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8810f552d9ea1a7b2e94b1f7b6e7382fee697cf796c7ca9dd1b936f486b6dcbc)
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
            type_hints = typing.get_type_hints(_typecheckingstub__536b746d585cb4253afbf99ba729eea3b43a4cfe97ab1df64168beda75a14a53)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCertId")
    def attr_cert_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CertId: Certificate ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCertId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="cert")
    def cert(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cert: Specify the content of the certificate. To use the PEM encoding format.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cert"))

    @cert.setter
    def cert(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2354cf030ed10aa7c0accbe6ddec0c6e653f40430c22226c0f125318742b45b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cert", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__71db2b31a9e51fe92b0cb684a0fb906fd653cbc00ccb08c09eb445a2a4b767a4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="key")
    def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: key: Specify the certificate private key content. To use the PEM encoding format.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "key"))

    @key.setter
    def key(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d90d80db51c7504011d35ce24be1b5c0fed275078cf00686bcf3005c94217c59)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "key", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: Custom certificate name. The certificate name under a user cannot be duplicated.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__84c67126c949c0a38caf260021375fbb5ea65427af261cb29eafdcb2a182c9af)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="lang")
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: lang: Specifies the language type for requesting and receiving messages.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "lang"))

    @lang.setter
    def lang(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b80787f6c95cde7755ed275da224e1264dfb3f62abe3b73e984f1d9f240ba2f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lang", value)

    @builtins.property
    @jsii.member(jsii_name="sourceIp")
    def source_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceIp: Specifies the source IP address of the request.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceIp"))

    @source_ip.setter
    def source_ip(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67a982d45319e32cd72f9f23c0ced9265141968b5f935eb4ac8e8a97e1f46cf6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        cert: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosCertificate``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-certificate

        :param cert: 
        :param key: 
        :param name: 
        :param lang: 
        :param source_ip: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ff148f63432986b50f253a72db70c1105e107f3da35b2b6ff541dfd30de675e)
            check_type(argname="argument cert", value=cert, expected_type=type_hints["cert"])
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument lang", value=lang, expected_type=type_hints["lang"])
            check_type(argname="argument source_ip", value=source_ip, expected_type=type_hints["source_ip"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cert": cert,
            "key": key,
            "name": name,
        }
        if lang is not None:
            self._values["lang"] = lang
        if source_ip is not None:
            self._values["source_ip"] = source_ip

    @builtins.property
    def cert(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cert: Specify the content of the certificate. To use the PEM encoding format.
        '''
        result = self._values.get("cert")
        assert result is not None, "Required property 'cert' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: key: Specify the certificate private key content. To use the PEM encoding format.
        '''
        result = self._values.get("key")
        assert result is not None, "Required property 'key' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: Custom certificate name. The certificate name under a user cannot be duplicated.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: lang: Specifies the language type for requesting and receiving messages.
        '''
        result = self._values.get("lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceIp: Specifies the source IP address of the request.
        '''
        result = self._values.get("source_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCertificateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosOrder(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cas.RosOrder",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CAS::Order``, which is used to create a certificate order.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Order`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-order
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosOrderProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e336d9fcd37b79cd79e3494ea7e396f5798033daff45d8f5199988399053921)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b7005fdf0f170e4a7f92b16674ce80ab86f204918b95c919f3813be7bbba2712)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="certBrand")
    def cert_brand(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: certBrand: Certificate brand. Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "certBrand"))

    @cert_brand.setter
    def cert_brand(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eaef3acf3afa63a4af0f0218a63516f9be45781167e87461824a6a0bce7e81b8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "certBrand", value)

    @builtins.property
    @jsii.member(jsii_name="certType")
    def cert_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: certType: Certificate type. Valid values: DV, OV, EV.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "certType"))

    @cert_type.setter
    def cert_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd2e4fc4e0a9c8b0f09a114b9fc591f5a992d13b9a6ce0e3b960191e203ee562)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "certType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b231e4cccbf8903765b925a104e969fd9340862d1766a9ecca9c265a075be02f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="domainCnt")
    def domain_cnt(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: domainCnt: Number of domains to be included in the certificate. Valid values: 1-500.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "domainCnt"))

    @domain_cnt.setter
    def domain_cnt(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca041e2d6c0760591d196c760cc5733cd2bd212b98502f62d2644f56e7682dac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainCnt", value)

    @builtins.property
    @jsii.member(jsii_name="domainType")
    def domain_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: domainType: Domain type. Valid values: one, all, multiple.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "domainType"))

    @domain_type.setter
    def domain_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c744317592e8e407dee6672598706afd7f1b1911b6b5d150a539fff7a50be53f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: Service time of the certificate, in year. Valid values: 1, 2, 3.
        Note: Starting September 1, 2020, certificates issued by cas around the world will be valid for a maximum of 1 year.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e3f2f53a64e36b1d13ec5ebb6805ca485d409601688bf8d3f5e5383839c797f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="service")
    def service(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        service: Whether enable other service. Valid values:

        - NoNeed: Do not apply for any services.
        - ExpeditedProduct: Request assistance services.
        - DeployProduct: Deploy services.
        - SM2DeployProduct: Deploy services with SM2 encryption.
        - VipProduct: Request assistance and deployment services.
        **Note:** This parameter is not supported by international stations.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "service"))

    @service.setter
    def service(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f634f3ed77d57f3f7e1f21f79fab23fb8d60542323b88adfaf58b9a56c9481d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "service", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cas.RosOrderProps",
    jsii_struct_bases=[],
    name_mapping={
        "cert_brand": "certBrand",
        "cert_type": "certType",
        "domain_cnt": "domainCnt",
        "domain_type": "domainType",
        "period": "period",
        "service": "service",
    },
)
class RosOrderProps:
    def __init__(
        self,
        *,
        cert_brand: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cert_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        domain_cnt: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        domain_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosOrder``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-order

        :param cert_brand: 
        :param cert_type: 
        :param domain_cnt: 
        :param domain_type: 
        :param period: 
        :param service: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2924fabbb53fbf3ad36c0e08a6b49a1d18d0f0d7fcbc09a0541ee451f8797a3e)
            check_type(argname="argument cert_brand", value=cert_brand, expected_type=type_hints["cert_brand"])
            check_type(argname="argument cert_type", value=cert_type, expected_type=type_hints["cert_type"])
            check_type(argname="argument domain_cnt", value=domain_cnt, expected_type=type_hints["domain_cnt"])
            check_type(argname="argument domain_type", value=domain_type, expected_type=type_hints["domain_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument service", value=service, expected_type=type_hints["service"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cert_brand": cert_brand,
            "cert_type": cert_type,
        }
        if domain_cnt is not None:
            self._values["domain_cnt"] = domain_cnt
        if domain_type is not None:
            self._values["domain_type"] = domain_type
        if period is not None:
            self._values["period"] = period
        if service is not None:
            self._values["service"] = service

    @builtins.property
    def cert_brand(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: certBrand: Certificate brand. Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
        '''
        result = self._values.get("cert_brand")
        assert result is not None, "Required property 'cert_brand' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cert_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: certType: Certificate type. Valid values: DV, OV, EV.
        '''
        result = self._values.get("cert_type")
        assert result is not None, "Required property 'cert_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def domain_cnt(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: domainCnt: Number of domains to be included in the certificate. Valid values: 1-500.
        '''
        result = self._values.get("domain_cnt")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def domain_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: domainType: Domain type. Valid values: one, all, multiple.
        '''
        result = self._values.get("domain_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: Service time of the certificate, in year. Valid values: 1, 2, 3.
        Note: Starting September 1, 2020, certificates issued by cas around the world will be valid for a maximum of 1 year.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        service: Whether enable other service. Valid values:

        - NoNeed: Do not apply for any services.
        - ExpeditedProduct: Request assistance services.
        - DeployProduct: Deploy services.
        - SM2DeployProduct: Deploy services with SM2 encryption.
        - VipProduct: Request assistance and deployment services.
        **Note:** This parameter is not supported by international stations.
        '''
        result = self._values.get("service")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosOrderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPcaCertificate(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cas.RosPcaCertificate",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CAS::PcaCertificate``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``PcaCertificate`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-pcacertificate
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPcaCertificateProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__11a5d9a18e4fcedc87ff255a2ca7917c0c044cbde78286c6662284dea6350431)
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
            type_hints = typing.get_type_hints(_typecheckingstub__adb8c383a334ced4a318f507e1c9596d3586ce098d02db2f66e629f0b9f60987)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAlgorithm")
    def attr_algorithm(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Algorithm: The key algorithm type of the root CA certificate. The key algorithm is expressed using the '_< key length>' format.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAlgorithm"))

    @builtins.property
    @jsii.member(jsii_name="attrCertificateType")
    def attr_certificate_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CertificateType: The type of CA.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCertificateType"))

    @builtins.property
    @jsii.member(jsii_name="attrCommonName")
    def attr_common_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CommonName: The common name or abbreviation of the organization. Support the use of Chinese, English characters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCommonName"))

    @builtins.property
    @jsii.member(jsii_name="attrCountryCode")
    def attr_country_code(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CountryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation. For example, **CN** represents China and **US** represents the United States.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCountryCode"))

    @builtins.property
    @jsii.member(jsii_name="attrIdentifier")
    def attr_identifier(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Identifier: Certificate Identifier.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIdentifier"))

    @builtins.property
    @jsii.member(jsii_name="attrIssuerType")
    def attr_issuer_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IssuerType: The institution issuing the CA.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIssuerType"))

    @builtins.property
    @jsii.member(jsii_name="attrLocality")
    def attr_locality(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Locality: Name of the city where the organization is located. Support the use of Chinese, English characters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLocality"))

    @builtins.property
    @jsii.member(jsii_name="attrOrganization")
    def attr_organization(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate. Support the use of Chinese, English characters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrganization"))

    @builtins.property
    @jsii.member(jsii_name="attrOrganizationUnit")
    def attr_organization_unit(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrganizationUnit: The name of the department or branch under the organization. Support the use of Chinese, English characters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrganizationUnit"))

    @builtins.property
    @jsii.member(jsii_name="attrState")
    def attr_state(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: State: <props = "china"> The name of the province, municipality, or autonomous region in which the organization is located. Support the use of Chinese, English characters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrState"))

    @builtins.property
    @jsii.member(jsii_name="attrYears")
    def attr_years(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Years: The validity period of the root CA certificate, in years.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrYears"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="commonName")
    def common_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: commonName: The common name or abbreviation of the organization. Support the use of Chinese, English characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "commonName"))

    @common_name.setter
    def common_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f68a1f590afe38ca604faaa345cc441cf90c665f08948c7b08136c343d5be073)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "commonName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c59f517c31b972d34df3f67a9685f5702cbccbd5f068c817372a6578adbb83f9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="locality")
    def locality(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: locality: Name of the city where the organization is located. Support the use of Chinese, English characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "locality"))

    @locality.setter
    def locality(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6232f4fb81de13ffc0c3c2b56ff88599daf4947227f701d2daf482dc95550e5c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "locality", value)

    @builtins.property
    @jsii.member(jsii_name="organization")
    def organization(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate. Support the use of Chinese, English characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "organization"))

    @organization.setter
    def organization(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5acfcf95fcff5f53705727a3584ede82a74cc405cd3a52b83751b34128b47d2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "organization", value)

    @builtins.property
    @jsii.member(jsii_name="organizationUnit")
    def organization_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: organizationUnit: The name of the department or branch under the organization. Support the use of Chinese, English characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "organizationUnit"))

    @organization_unit.setter
    def organization_unit(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05a7a787b021188bc4df65990d59ed6a6b4f4b905e6fb844d5331892ca76469e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "organizationUnit", value)

    @builtins.property
    @jsii.member(jsii_name="state")
    def state(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        state: <props = "china"> The name of the province, municipality, or autonomous region in which the organization is located. Support the use of Chinese, English characters. </props>
        <props = "intl"> Name of the province or state where the organization is located. Support the use of Chinese, English characters. </props>.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "state"))

    @state.setter
    def state(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a6b347f5af8c68f1454c8b385ef6a11f5df4d3b43e87704a8bc59dd9f7c8d01)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "state", value)

    @builtins.property
    @jsii.member(jsii_name="years")
    def years(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        years: The validity period of the root CA certificate, in years.
        .. epigraph::

        It is recommended to set to 5~10 years.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "years"))

    @years.setter
    def years(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a8e1e968ebd155afd94eff715a42455bb00db36f361f404f5766ac7ad326728)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "years", value)

    @builtins.property
    @jsii.member(jsii_name="algorithm")
    def algorithm(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        algorithm: The key algorithm type of the root CA certificate. The key algorithm is expressed using the '_< key length>' format. Value:

        - **RSA_1024**: The corresponding signature algorithm is Sha256WithRSA.
        - **RSA_2048**: The corresponding signature algorithm is Sha256WithRSA.
        - **RSA_4096**: The corresponding signature algorithm is Sha256WithRSA.
        - **ECC_256**: The signature algorithm is Sha256WithECDSA.
        - **ECC_384**: The corresponding signature algorithm is Sha256WithECDSA.
        - **ECC_512**: The signature algorithm is Sha256WithECDSA.
        - **SM2_256**: The corresponding signature algorithm is SM3WithSM2.

        The encryption algorithm of the root CA certificate must be the same as the **certificate algorithm** of the private Root CA you purchased. Example: If the **certificate algorithm** selected when you purchase a private Root CA is **RSA**, the key algorithm of the root CA certificate must be **RSA_1024**, **RSA_2048**, or **RSA_4096**.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "algorithm"))

    @algorithm.setter
    def algorithm(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a0f59ac1ed10e064df2a45ecbbbd927141322b941a52cd3fcc09341b3764023)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "algorithm", value)

    @builtins.property
    @jsii.member(jsii_name="caStatus")
    def ca_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        caStatus: The current CA status. Value:

        - Issue: Enabled.
        - Forbidden: Disabled.
        - Revoke: Revoked.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "caStatus"))

    @ca_status.setter
    def ca_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a8a875ea1b54b1ff2aeb75d27578f5750581578cc24118ee1023a7cda7d130e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "caStatus", value)

    @builtins.property
    @jsii.member(jsii_name="countryCode")
    def country_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        countryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation. For example, **CN** represents China and **US** represents the United States.
        For more information about the codes of different countries, see **International Code** in [Management Company Information](~~ 198289 ~~).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "countryCode"))

    @country_code.setter
    def country_code(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__115e12f0a59f2ae133902487988d65ae0ef4c96dda2b1112a5c66ba13283352a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "countryCode", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cas.RosPcaCertificateProps",
    jsii_struct_bases=[],
    name_mapping={
        "common_name": "commonName",
        "locality": "locality",
        "organization": "organization",
        "organization_unit": "organizationUnit",
        "state": "state",
        "years": "years",
        "algorithm": "algorithm",
        "ca_status": "caStatus",
        "country_code": "countryCode",
    },
)
class RosPcaCertificateProps:
    def __init__(
        self,
        *,
        common_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        locality: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        organization: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        organization_unit: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        state: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        years: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        algorithm: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ca_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        country_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosPcaCertificate``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-pcacertificate

        :param common_name: 
        :param locality: 
        :param organization: 
        :param organization_unit: 
        :param state: 
        :param years: 
        :param algorithm: 
        :param ca_status: 
        :param country_code: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__273c6ffc1db2bc655974105a63bdf99a7496f8338c6645ce065911dbcda2efcd)
            check_type(argname="argument common_name", value=common_name, expected_type=type_hints["common_name"])
            check_type(argname="argument locality", value=locality, expected_type=type_hints["locality"])
            check_type(argname="argument organization", value=organization, expected_type=type_hints["organization"])
            check_type(argname="argument organization_unit", value=organization_unit, expected_type=type_hints["organization_unit"])
            check_type(argname="argument state", value=state, expected_type=type_hints["state"])
            check_type(argname="argument years", value=years, expected_type=type_hints["years"])
            check_type(argname="argument algorithm", value=algorithm, expected_type=type_hints["algorithm"])
            check_type(argname="argument ca_status", value=ca_status, expected_type=type_hints["ca_status"])
            check_type(argname="argument country_code", value=country_code, expected_type=type_hints["country_code"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "common_name": common_name,
            "locality": locality,
            "organization": organization,
            "organization_unit": organization_unit,
            "state": state,
            "years": years,
        }
        if algorithm is not None:
            self._values["algorithm"] = algorithm
        if ca_status is not None:
            self._values["ca_status"] = ca_status
        if country_code is not None:
            self._values["country_code"] = country_code

    @builtins.property
    def common_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: commonName: The common name or abbreviation of the organization. Support the use of Chinese, English characters.
        '''
        result = self._values.get("common_name")
        assert result is not None, "Required property 'common_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def locality(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: locality: Name of the city where the organization is located. Support the use of Chinese, English characters.
        '''
        result = self._values.get("locality")
        assert result is not None, "Required property 'locality' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def organization(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate. Support the use of Chinese, English characters.
        '''
        result = self._values.get("organization")
        assert result is not None, "Required property 'organization' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def organization_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: organizationUnit: The name of the department or branch under the organization. Support the use of Chinese, English characters.
        '''
        result = self._values.get("organization_unit")
        assert result is not None, "Required property 'organization_unit' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def state(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        state: <props = "china"> The name of the province, municipality, or autonomous region in which the organization is located. Support the use of Chinese, English characters. </props>
        <props = "intl"> Name of the province or state where the organization is located. Support the use of Chinese, English characters. </props>.
        '''
        result = self._values.get("state")
        assert result is not None, "Required property 'state' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def years(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        years: The validity period of the root CA certificate, in years.
        .. epigraph::

        It is recommended to set to 5~10 years.
        '''
        result = self._values.get("years")
        assert result is not None, "Required property 'years' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def algorithm(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        algorithm: The key algorithm type of the root CA certificate. The key algorithm is expressed using the '_< key length>' format. Value:

        - **RSA_1024**: The corresponding signature algorithm is Sha256WithRSA.
        - **RSA_2048**: The corresponding signature algorithm is Sha256WithRSA.
        - **RSA_4096**: The corresponding signature algorithm is Sha256WithRSA.
        - **ECC_256**: The signature algorithm is Sha256WithECDSA.
        - **ECC_384**: The corresponding signature algorithm is Sha256WithECDSA.
        - **ECC_512**: The signature algorithm is Sha256WithECDSA.
        - **SM2_256**: The corresponding signature algorithm is SM3WithSM2.

        The encryption algorithm of the root CA certificate must be the same as the **certificate algorithm** of the private Root CA you purchased. Example: If the **certificate algorithm** selected when you purchase a private Root CA is **RSA**, the key algorithm of the root CA certificate must be **RSA_1024**, **RSA_2048**, or **RSA_4096**.
        '''
        result = self._values.get("algorithm")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ca_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        caStatus: The current CA status. Value:

        - Issue: Enabled.
        - Forbidden: Disabled.
        - Revoke: Revoked.
        '''
        result = self._values.get("ca_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def country_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        countryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation. For example, **CN** represents China and **US** represents the United States.
        For more information about the codes of different countries, see **International Code** in [Management Company Information](~~ 198289 ~~).
        '''
        result = self._values.get("country_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPcaCertificateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSslCertificate(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cas.RosSslCertificate",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CAS::SslCertificate``, which is used to create an SSL certificate.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``SslCertificate`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-sslcertificate
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSslCertificateProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__826713664035255658598e8d0f35db0a845f713a2b97d934fde8191e40794203)
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
            type_hints = typing.get_type_hints(_typecheckingstub__bf14e555e90c25f2707301919cd2b856dbea9d3731ef826156b60cde86dbf725)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCertificateId")
    def attr_certificate_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CertificateId: The ID of the certificate issued to you.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCertificateId"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderId: The ID of the certificate order.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__63da5d2e03ac6157a25d39c2bed082b67ce6196b06d354a97ee37f605ae2437e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="certBrand")
    def cert_brand(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        certBrand: Certificate brand. Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
        **Note:** This parameter must be specified along with or without the CertType and DomainTyp parameters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "certBrand"))

    @cert_brand.setter
    def cert_brand(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40f97d6518ac383e35fc49aa53c35555c27b22b2a10e64a4df3136e554724350)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "certBrand", value)

    @builtins.property
    @jsii.member(jsii_name="certType")
    def cert_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        certType: Certificate type. Valid values: DV, OV, EV.
        **Note:** This parameter must be specified along with or without the DomainType and CertBrand parameters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "certType"))

    @cert_type.setter
    def cert_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5699f25f3ba65296c6bacade9bf2a658d62f875e9a4421ccaf54c209a8309136)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "certType", value)

    @builtins.property
    @jsii.member(jsii_name="companyName")
    def company_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        companyName: The name of the certificate application company.
        **Note**: This parameter is only applicable when applying for OV certificates.
        When applying for OV certificate, if you set the company name here, it means that the corresponding company information in the information management module is used; If you do not set this parameter, it indicates that the latest company information added is selected from the information management module.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "companyName"))

    @company_name.setter
    def company_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9cf44236e40c4d7877d33ab81aac26ddf3e5858acde769b45f1d71578bd4c034)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "companyName", value)

    @builtins.property
    @jsii.member(jsii_name="csr")
    def csr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        csr: The contents of a manually generated CSR file for a domain name using the OpenSSL or Keytool tools. The CSR key type must be RSA or ECC, and the RSA key length must be greater than or equal to 2048. If this parameter is not set, the CSR is automatically created for you by the SSL certificate service.
        A CSR (Certificate Signing Request) is a certificate signing request file that contains information about your server and your company. When you apply for a certificate, you will need to submit the CSR file of your certificate to the CA certification authority for review. After the CA center signs the CSR file with the root certificate's private key, it will generate the certificate public key file (that is, the SSL certificate issued to you).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "csr"))

    @csr.setter
    def csr(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__43d2390f7b380bd31d08957b0a04b8e5b7aa8e6902014463984e5bcd3c520f0e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "csr", value)

    @builtins.property
    @jsii.member(jsii_name="domains")
    def domains(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        domains: The domain to bind the certificate to. The specific requirements are as follows:

        - Supports single or wildcard domains (e.g., *.aliyundoc.com).
        - Multiple domains are supported. You can set up to 5 domains.
        - If you set more than one domain name, the multiple domains can only be single domain name or wildcard domain name, not both single domain name and wildcard domain name.
        **Note:** This is required when the certificate is bound to more than one hostname. This parameter is not allowed to be empty at the same time as the Csr parameter. If you set both this parameter and the Csr parameter, take the CN field value in the Csr as the domain name for the certificate to bind to.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "domains"))

    @domains.setter
    def domains(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fcb91df8601d8d0db2602a9cd5f270db611ff06090b592543a5617552109b27a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domains", value)

    @builtins.property
    @jsii.member(jsii_name="domainType")
    def domain_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        domainType: Domain type. Valid values: one, all, multiple.
        **Note:** This parameter must be specified along with or without the CertType and CertBrand parameters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "domainType"))

    @domain_type.setter
    def domain_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__062a2a6e9b99842902f18d763055fada74e2ff3c8eeee4a8c083f4364b6d9a6e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainType", value)

    @builtins.property
    @jsii.member(jsii_name="email")
    def email(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: email: The applicant's email.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "email"))

    @email.setter
    def email(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__258337fc6d94e03d7c097926dda8912df3e428e3d0de7e0b08c496386458eb27)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "email", value)

    @builtins.property
    @jsii.member(jsii_name="phone")
    def phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: phone: The applicant's mobile phone number. A CA official may contact you at this number to verify your certificate request.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "phone"))

    @phone.setter
    def phone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4540365d3c3baa366de349ee6ddbe73214f0feda660766a118945c6bace204a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "phone", value)

    @builtins.property
    @jsii.member(jsii_name="productCode")
    def product_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        productCode: Specification of the certificate to apply for. Value:

        - digicert-free-1-free (default) : This indicates DigiCert DV single-domain certificates (free 3-month certificates).
        - symantec-free 1-free: Stands for DigiCert DV free single-domain certificate (1-year free certificate).
        - symantec-dv-1-starter: This represents the DigiCert DV wildcard domain name certificate.
        - symantec-ov-1-personal: This stands for DigiCert OV single-domain certificate
        - symantec-ov-w-personal: This stands for DigiCert OV wildcard domain name certificate.
        - geotrust-dv-1-starter: This represents the GeoTrust DV single-domain certificate.
        - geotrust-dv-w-starter: This represents the GeoTrust DV wildcard domain name certificate.
        - geotrust-ov-1-personal: This stands for GeoTrust OV single-domain certificate.
        - geotrust-ov-w-personal: This represents the GeoTrust OV wildcard domain name certificate.
        - globalsign-dv-1-personal: This stands for GlobalSign DV single-domain certificate.
        - globalsign-dv-w-advanced: This stands for GlobalSign DV wildcard domain name certificate.
        - globalsign-ov-1-personal: This stands for GlobalSign OV single-domain certificate.
        - globalsign-ov-w-advanced: This represents the GlobalSign OV wildcard domain name certificate.
        - cfca-ov-1-personal: This stands for CFCA OV single domain certificate
        - cfca-ev-w-advanced: This stands for CFCA OV wildcard domain name certificate.
        **Note:** If you specify this parameter, you do not need to specify the DomainType, CertType, and CertBrand parameters; otherwise, this parameter will prevail.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "productCode"))

    @product_code.setter
    def product_code(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__33637879d325d5f7945c368bb793f18cd6b7f04d50eb223a53605cd69b3eccbd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "productCode", value)

    @builtins.property
    @jsii.member(jsii_name="username")
    def username(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: username: The applicant's name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "username"))

    @username.setter
    def username(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__58870da053ced1332c7aa08d2a2e01d4683b313b97e95629ca64a521dedf286a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "username", value)

    @builtins.property
    @jsii.member(jsii_name="validateType")
    def validate_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        validateType: How domain ownership is verified. Valid values:

        - DNS: DNS validation The ownership of the domain name is verified by adding a TXT type DNS record to the domain name's DNS management platform. You need administrative permission for domain resolution to complete validation.
        - FILE: File validation Ownership of a domain name is verified by creating a specified file on the domain name server. You need administrator access to your domain name server to complete validation.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "validateType"))

    @validate_type.setter
    def validate_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38aadf57af2f61aabffe6a8dd44caf68a38e78313d72423f643344fdb9399563)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "validateType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cas.RosSslCertificateProps",
    jsii_struct_bases=[],
    name_mapping={
        "cert_brand": "certBrand",
        "cert_type": "certType",
        "company_name": "companyName",
        "csr": "csr",
        "domains": "domains",
        "domain_type": "domainType",
        "email": "email",
        "phone": "phone",
        "product_code": "productCode",
        "username": "username",
        "validate_type": "validateType",
    },
)
class RosSslCertificateProps:
    def __init__(
        self,
        *,
        cert_brand: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cert_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        company_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        csr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        domains: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        domain_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        email: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        product_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        username: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        validate_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosSslCertificate``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-sslcertificate

        :param cert_brand: 
        :param cert_type: 
        :param company_name: 
        :param csr: 
        :param domains: 
        :param domain_type: 
        :param email: 
        :param phone: 
        :param product_code: 
        :param username: 
        :param validate_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06594a0653a8550d84193ffbbbe4d4ff3acf691c69bb7cb9c6c5175f5c99884c)
            check_type(argname="argument cert_brand", value=cert_brand, expected_type=type_hints["cert_brand"])
            check_type(argname="argument cert_type", value=cert_type, expected_type=type_hints["cert_type"])
            check_type(argname="argument company_name", value=company_name, expected_type=type_hints["company_name"])
            check_type(argname="argument csr", value=csr, expected_type=type_hints["csr"])
            check_type(argname="argument domains", value=domains, expected_type=type_hints["domains"])
            check_type(argname="argument domain_type", value=domain_type, expected_type=type_hints["domain_type"])
            check_type(argname="argument email", value=email, expected_type=type_hints["email"])
            check_type(argname="argument phone", value=phone, expected_type=type_hints["phone"])
            check_type(argname="argument product_code", value=product_code, expected_type=type_hints["product_code"])
            check_type(argname="argument username", value=username, expected_type=type_hints["username"])
            check_type(argname="argument validate_type", value=validate_type, expected_type=type_hints["validate_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if cert_brand is not None:
            self._values["cert_brand"] = cert_brand
        if cert_type is not None:
            self._values["cert_type"] = cert_type
        if company_name is not None:
            self._values["company_name"] = company_name
        if csr is not None:
            self._values["csr"] = csr
        if domains is not None:
            self._values["domains"] = domains
        if domain_type is not None:
            self._values["domain_type"] = domain_type
        if email is not None:
            self._values["email"] = email
        if phone is not None:
            self._values["phone"] = phone
        if product_code is not None:
            self._values["product_code"] = product_code
        if username is not None:
            self._values["username"] = username
        if validate_type is not None:
            self._values["validate_type"] = validate_type

    @builtins.property
    def cert_brand(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        certBrand: Certificate brand. Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
        **Note:** This parameter must be specified along with or without the CertType and DomainTyp parameters.
        '''
        result = self._values.get("cert_brand")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cert_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        certType: Certificate type. Valid values: DV, OV, EV.
        **Note:** This parameter must be specified along with or without the DomainType and CertBrand parameters.
        '''
        result = self._values.get("cert_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def company_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        companyName: The name of the certificate application company.
        **Note**: This parameter is only applicable when applying for OV certificates.
        When applying for OV certificate, if you set the company name here, it means that the corresponding company information in the information management module is used; If you do not set this parameter, it indicates that the latest company information added is selected from the information management module.
        '''
        result = self._values.get("company_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def csr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        csr: The contents of a manually generated CSR file for a domain name using the OpenSSL or Keytool tools. The CSR key type must be RSA or ECC, and the RSA key length must be greater than or equal to 2048. If this parameter is not set, the CSR is automatically created for you by the SSL certificate service.
        A CSR (Certificate Signing Request) is a certificate signing request file that contains information about your server and your company. When you apply for a certificate, you will need to submit the CSR file of your certificate to the CA certification authority for review. After the CA center signs the CSR file with the root certificate's private key, it will generate the certificate public key file (that is, the SSL certificate issued to you).
        '''
        result = self._values.get("csr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def domains(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        domains: The domain to bind the certificate to. The specific requirements are as follows:

        - Supports single or wildcard domains (e.g., *.aliyundoc.com).
        - Multiple domains are supported. You can set up to 5 domains.
        - If you set more than one domain name, the multiple domains can only be single domain name or wildcard domain name, not both single domain name and wildcard domain name.
        **Note:** This is required when the certificate is bound to more than one hostname. This parameter is not allowed to be empty at the same time as the Csr parameter. If you set both this parameter and the Csr parameter, take the CN field value in the Csr as the domain name for the certificate to bind to.
        '''
        result = self._values.get("domains")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def domain_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        domainType: Domain type. Valid values: one, all, multiple.
        **Note:** This parameter must be specified along with or without the CertType and CertBrand parameters.
        '''
        result = self._values.get("domain_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def email(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: email: The applicant's email.
        '''
        result = self._values.get("email")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: phone: The applicant's mobile phone number. A CA official may contact you at this number to verify your certificate request.
        '''
        result = self._values.get("phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def product_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        productCode: Specification of the certificate to apply for. Value:

        - digicert-free-1-free (default) : This indicates DigiCert DV single-domain certificates (free 3-month certificates).
        - symantec-free 1-free: Stands for DigiCert DV free single-domain certificate (1-year free certificate).
        - symantec-dv-1-starter: This represents the DigiCert DV wildcard domain name certificate.
        - symantec-ov-1-personal: This stands for DigiCert OV single-domain certificate
        - symantec-ov-w-personal: This stands for DigiCert OV wildcard domain name certificate.
        - geotrust-dv-1-starter: This represents the GeoTrust DV single-domain certificate.
        - geotrust-dv-w-starter: This represents the GeoTrust DV wildcard domain name certificate.
        - geotrust-ov-1-personal: This stands for GeoTrust OV single-domain certificate.
        - geotrust-ov-w-personal: This represents the GeoTrust OV wildcard domain name certificate.
        - globalsign-dv-1-personal: This stands for GlobalSign DV single-domain certificate.
        - globalsign-dv-w-advanced: This stands for GlobalSign DV wildcard domain name certificate.
        - globalsign-ov-1-personal: This stands for GlobalSign OV single-domain certificate.
        - globalsign-ov-w-advanced: This represents the GlobalSign OV wildcard domain name certificate.
        - cfca-ov-1-personal: This stands for CFCA OV single domain certificate
        - cfca-ev-w-advanced: This stands for CFCA OV wildcard domain name certificate.
        **Note:** If you specify this parameter, you do not need to specify the DomainType, CertType, and CertBrand parameters; otherwise, this parameter will prevail.
        '''
        result = self._values.get("product_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def username(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: username: The applicant's name.
        '''
        result = self._values.get("username")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def validate_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        validateType: How domain ownership is verified. Valid values:

        - DNS: DNS validation The ownership of the domain name is verified by adding a TXT type DNS record to the domain name's DNS management platform. You need administrative permission for domain resolution to complete validation.
        - FILE: File validation Ownership of a domain name is verified by creating a specified file on the domain name server. You need administrator access to your domain name server to complete validation.
        '''
        result = self._values.get("validate_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSslCertificateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUserCertificate(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cas.RosUserCertificate",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CAS::UserCertificate``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``UserCertificate`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-usercertificate
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosUserCertificateProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c8b69f577be53767f5b0e9cb9dc798dd28b564488388e75018fa331aa3602700)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e13fe36618a52ad1aa6ee241f69e36f854790a1b335dd9f0a89bea133ea0f530)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCert")
    def attr_cert(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Cert: The certificate content in PEM format.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCert"))

    @builtins.property
    @jsii.member(jsii_name="attrCertId")
    def attr_cert_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CertId: Certificate ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCertId"))

    @builtins.property
    @jsii.member(jsii_name="attrCertificateName")
    def attr_certificate_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CertificateName: Custom certificate name. Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCertificateName"))

    @builtins.property
    @jsii.member(jsii_name="attrEncryptCert")
    def attr_encrypt_cert(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EncryptCert: The content of the encryption certificate in PEM format.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEncryptCert"))

    @builtins.property
    @jsii.member(jsii_name="attrEncryptPrivateKey")
    def attr_encrypt_private_key(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EncryptPrivateKey: The private key content of the encryption certificate in PEM format.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEncryptPrivateKey"))

    @builtins.property
    @jsii.member(jsii_name="attrKey")
    def attr_key(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Key: The private key content of the certificate in PEM format.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKey"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSignCert")
    def attr_sign_cert(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SignCert: The signature certificate content in PEM format.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSignCert"))

    @builtins.property
    @jsii.member(jsii_name="attrSignPrivateKey")
    def attr_sign_private_key(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SignPrivateKey: The private key content of the signature certificate in PEM format.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSignPrivateKey"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The tag of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__cd9c8f14cd4b9bab704c52dee7e283d409963609b3a2ca8945a4ca4d9be18380)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="cert")
    def cert(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cert: The certificate content in PEM format.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cert"))

    @cert.setter
    def cert(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__558aefb3aeb9b53bb02ec67b7e565bebc5605a3aa21fa7298bff98c06cd5e82f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cert", value)

    @builtins.property
    @jsii.member(jsii_name="certificateName")
    def certificate_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        certificateName: Custom certificate name. Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
        The certificate name under the same user cannot be duplicated.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "certificateName"))

    @certificate_name.setter
    def certificate_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__162d2f86e0975037e18c0882efd2f391203694f739553ebc46a9edb5123f58b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "certificateName", value)

    @builtins.property
    @jsii.member(jsii_name="encryptCert")
    def encrypt_cert(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encryptCert: The content of the encryption certificate in PEM format.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "encryptCert"))

    @encrypt_cert.setter
    def encrypt_cert(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c8e48df9a03f6fe69ca34432e2230285605c8f5d625d499f21cc0ace28a1f5d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encryptCert", value)

    @builtins.property
    @jsii.member(jsii_name="encryptPrivateKey")
    def encrypt_private_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encryptPrivateKey: The private key content of the encryption certificate in PEM format.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "encryptPrivateKey"))

    @encrypt_private_key.setter
    def encrypt_private_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9c9300965c7e87369151781e8ff7483198698a329b4489a9d41ac0f4449a265)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encryptPrivateKey", value)

    @builtins.property
    @jsii.member(jsii_name="key")
    def key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: key: The private key content of the certificate in PEM format.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "key"))

    @key.setter
    def key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27486da52c8876f56a4cfb9ea536cf87b5ab32518f38877969fbff9c6db8d07b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "key", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3742ad1d8e9d680ed229749f10b234edfeaa6268c1c7a671c00fe157f516e417)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="resourceId")
    def resource_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceId: Resource ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceId"))

    @resource_id.setter
    def resource_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ade16051a88b2914adc5c9a6bde43c7c233548c9339d54071eae638b5871d23)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceId", value)

    @builtins.property
    @jsii.member(jsii_name="signCert")
    def sign_cert(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: signCert: The signature certificate content in PEM format.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "signCert"))

    @sign_cert.setter
    def sign_cert(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a062c5218f9e88661e9f7004e55887b0a13f1e0da11a9afbd57493f11421f9f5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "signCert", value)

    @builtins.property
    @jsii.member(jsii_name="signPrivateKey")
    def sign_private_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: signPrivateKey: The private key content of the signature certificate in PEM format.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "signPrivateKey"))

    @sign_private_key.setter
    def sign_private_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ca11a51565ea4361f28ac6078584cdc81eaac3954c0fa7794bb6331004a84ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "signPrivateKey", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosUserCertificate.TagsProperty"]]:
        '''
        :Property: tags: Tags of certificate.
        '''
        return typing.cast(typing.Optional[typing.List["RosUserCertificate.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosUserCertificate.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e7bae3a19aad8d4f12f441426344ba2b86b1d0e76e4430ebc523ebf76a1f4de)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cas.RosUserCertificate.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__fa07a0e3e013caf828606847f410b093c6195b89dcc856281a8cac8a39d46c7f)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cas.RosUserCertificateProps",
    jsii_struct_bases=[],
    name_mapping={
        "cert": "cert",
        "certificate_name": "certificateName",
        "encrypt_cert": "encryptCert",
        "encrypt_private_key": "encryptPrivateKey",
        "key": "key",
        "resource_group_id": "resourceGroupId",
        "resource_id": "resourceId",
        "sign_cert": "signCert",
        "sign_private_key": "signPrivateKey",
        "tags": "tags",
    },
)
class RosUserCertificateProps:
    def __init__(
        self,
        *,
        cert: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        certificate_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encrypt_cert: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encrypt_private_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sign_cert: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sign_private_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosUserCertificate.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosUserCertificate``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-usercertificate

        :param cert: 
        :param certificate_name: 
        :param encrypt_cert: 
        :param encrypt_private_key: 
        :param key: 
        :param resource_group_id: 
        :param resource_id: 
        :param sign_cert: 
        :param sign_private_key: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__97ab341f23967cf659f5713f6d0e088ecaae0a73f5e3206ac009cc2deddd2b00)
            check_type(argname="argument cert", value=cert, expected_type=type_hints["cert"])
            check_type(argname="argument certificate_name", value=certificate_name, expected_type=type_hints["certificate_name"])
            check_type(argname="argument encrypt_cert", value=encrypt_cert, expected_type=type_hints["encrypt_cert"])
            check_type(argname="argument encrypt_private_key", value=encrypt_private_key, expected_type=type_hints["encrypt_private_key"])
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument resource_id", value=resource_id, expected_type=type_hints["resource_id"])
            check_type(argname="argument sign_cert", value=sign_cert, expected_type=type_hints["sign_cert"])
            check_type(argname="argument sign_private_key", value=sign_private_key, expected_type=type_hints["sign_private_key"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if cert is not None:
            self._values["cert"] = cert
        if certificate_name is not None:
            self._values["certificate_name"] = certificate_name
        if encrypt_cert is not None:
            self._values["encrypt_cert"] = encrypt_cert
        if encrypt_private_key is not None:
            self._values["encrypt_private_key"] = encrypt_private_key
        if key is not None:
            self._values["key"] = key
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if resource_id is not None:
            self._values["resource_id"] = resource_id
        if sign_cert is not None:
            self._values["sign_cert"] = sign_cert
        if sign_private_key is not None:
            self._values["sign_private_key"] = sign_private_key
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def cert(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cert: The certificate content in PEM format.
        '''
        result = self._values.get("cert")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def certificate_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        certificateName: Custom certificate name. Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
        The certificate name under the same user cannot be duplicated.
        '''
        result = self._values.get("certificate_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encrypt_cert(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encryptCert: The content of the encryption certificate in PEM format.
        '''
        result = self._values.get("encrypt_cert")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encrypt_private_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encryptPrivateKey: The private key content of the encryption certificate in PEM format.
        '''
        result = self._values.get("encrypt_private_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: key: The private key content of the certificate in PEM format.
        '''
        result = self._values.get("key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceId: Resource ID.
        '''
        result = self._values.get("resource_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sign_cert(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: signCert: The signature certificate content in PEM format.
        '''
        result = self._values.get("sign_cert")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sign_private_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: signPrivateKey: The private key content of the signature certificate in PEM format.
        '''
        result = self._values.get("sign_private_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosUserCertificate.TagsProperty]]:
        '''
        :Property: tags: Tags of certificate.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosUserCertificate.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserCertificateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ISslCertificate)
class SslCertificate(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cas.SslCertificate",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CAS::SslCertificate``, which is used to create an SSL certificate.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSslCertificate``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-sslcertificate
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["SslCertificateProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10a8b30f3436ebb3fb1fdb30f8bc3a721ecc15a088b275d4df7a13150e4b201d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCertificateId")
    def attr_certificate_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CertificateId: The ID of the certificate issued to you.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCertificateId"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrderId: The ID of the certificate order.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SslCertificateProps":
        return typing.cast("SslCertificateProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3ed7bab9096ca81ae1b54d291733ecdaa02381f58aa7ba3f0319abbaccce077)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd47bd535b72cc38de325e05d205b9c51caf9ab84c85480b36fd19d6dd085a16)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__720a07ce66056cf1960107b8e1a7b41e5a90bae9abc2795da117a471c1b5243e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cas.SslCertificateProps",
    jsii_struct_bases=[],
    name_mapping={
        "cert_brand": "certBrand",
        "cert_type": "certType",
        "company_name": "companyName",
        "csr": "csr",
        "domains": "domains",
        "domain_type": "domainType",
        "email": "email",
        "phone": "phone",
        "product_code": "productCode",
        "username": "username",
        "validate_type": "validateType",
    },
)
class SslCertificateProps:
    def __init__(
        self,
        *,
        cert_brand: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cert_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        company_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        csr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        domains: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        domain_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        email: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        product_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        username: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        validate_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``SslCertificate``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-sslcertificate

        :param cert_brand: Property certBrand: Certificate brand. Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA. **Note:** This parameter must be specified along with or without the CertType and DomainTyp parameters.
        :param cert_type: Property certType: Certificate type. Valid values: DV, OV, EV. **Note:** This parameter must be specified along with or without the DomainType and CertBrand parameters.
        :param company_name: Property companyName: The name of the certificate application company. **Note**: This parameter is only applicable when applying for OV certificates. When applying for OV certificate, if you set the company name here, it means that the corresponding company information in the information management module is used; If you do not set this parameter, it indicates that the latest company information added is selected from the information management module.
        :param csr: Property csr: The contents of a manually generated CSR file for a domain name using the OpenSSL or Keytool tools. The CSR key type must be RSA or ECC, and the RSA key length must be greater than or equal to 2048. If this parameter is not set, the CSR is automatically created for you by the SSL certificate service. A CSR (Certificate Signing Request) is a certificate signing request file that contains information about your server and your company. When you apply for a certificate, you will need to submit the CSR file of your certificate to the CA certification authority for review. After the CA center signs the CSR file with the root certificate's private key, it will generate the certificate public key file (that is, the SSL certificate issued to you).
        :param domains: Property domains: The domain to bind the certificate to. The specific requirements are as follows: - Supports single or wildcard domains (e.g., *.aliyundoc.com). - Multiple domains are supported. You can set up to 5 domains. - If you set more than one domain name, the multiple domains can only be single domain name or wildcard domain name, not both single domain name and wildcard domain name. **Note:** This is required when the certificate is bound to more than one hostname. This parameter is not allowed to be empty at the same time as the Csr parameter. If you set both this parameter and the Csr parameter, take the CN field value in the Csr as the domain name for the certificate to bind to.
        :param domain_type: Property domainType: Domain type. Valid values: one, all, multiple. **Note:** This parameter must be specified along with or without the CertType and CertBrand parameters.
        :param email: Property email: The applicant's email.
        :param phone: Property phone: The applicant's mobile phone number. A CA official may contact you at this number to verify your certificate request.
        :param product_code: Property productCode: Specification of the certificate to apply for. Value: - digicert-free-1-free (default) : This indicates DigiCert DV single-domain certificates (free 3-month certificates). - symantec-free 1-free: Stands for DigiCert DV free single-domain certificate (1-year free certificate). - symantec-dv-1-starter: This represents the DigiCert DV wildcard domain name certificate. - symantec-ov-1-personal: This stands for DigiCert OV single-domain certificate - symantec-ov-w-personal: This stands for DigiCert OV wildcard domain name certificate. - geotrust-dv-1-starter: This represents the GeoTrust DV single-domain certificate. - geotrust-dv-w-starter: This represents the GeoTrust DV wildcard domain name certificate. - geotrust-ov-1-personal: This stands for GeoTrust OV single-domain certificate. - geotrust-ov-w-personal: This represents the GeoTrust OV wildcard domain name certificate. - globalsign-dv-1-personal: This stands for GlobalSign DV single-domain certificate. - globalsign-dv-w-advanced: This stands for GlobalSign DV wildcard domain name certificate. - globalsign-ov-1-personal: This stands for GlobalSign OV single-domain certificate. - globalsign-ov-w-advanced: This represents the GlobalSign OV wildcard domain name certificate. - cfca-ov-1-personal: This stands for CFCA OV single domain certificate - cfca-ev-w-advanced: This stands for CFCA OV wildcard domain name certificate. **Note:** If you specify this parameter, you do not need to specify the DomainType, CertType, and CertBrand parameters; otherwise, this parameter will prevail.
        :param username: Property username: The applicant's name.
        :param validate_type: Property validateType: How domain ownership is verified. Valid values: - DNS: DNS validation The ownership of the domain name is verified by adding a TXT type DNS record to the domain name's DNS management platform. You need administrative permission for domain resolution to complete validation. - FILE: File validation Ownership of a domain name is verified by creating a specified file on the domain name server. You need administrator access to your domain name server to complete validation.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44f31f4d590b42fd106dde0fa9ec492c50596ba88876331bb4192123392f6fed)
            check_type(argname="argument cert_brand", value=cert_brand, expected_type=type_hints["cert_brand"])
            check_type(argname="argument cert_type", value=cert_type, expected_type=type_hints["cert_type"])
            check_type(argname="argument company_name", value=company_name, expected_type=type_hints["company_name"])
            check_type(argname="argument csr", value=csr, expected_type=type_hints["csr"])
            check_type(argname="argument domains", value=domains, expected_type=type_hints["domains"])
            check_type(argname="argument domain_type", value=domain_type, expected_type=type_hints["domain_type"])
            check_type(argname="argument email", value=email, expected_type=type_hints["email"])
            check_type(argname="argument phone", value=phone, expected_type=type_hints["phone"])
            check_type(argname="argument product_code", value=product_code, expected_type=type_hints["product_code"])
            check_type(argname="argument username", value=username, expected_type=type_hints["username"])
            check_type(argname="argument validate_type", value=validate_type, expected_type=type_hints["validate_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if cert_brand is not None:
            self._values["cert_brand"] = cert_brand
        if cert_type is not None:
            self._values["cert_type"] = cert_type
        if company_name is not None:
            self._values["company_name"] = company_name
        if csr is not None:
            self._values["csr"] = csr
        if domains is not None:
            self._values["domains"] = domains
        if domain_type is not None:
            self._values["domain_type"] = domain_type
        if email is not None:
            self._values["email"] = email
        if phone is not None:
            self._values["phone"] = phone
        if product_code is not None:
            self._values["product_code"] = product_code
        if username is not None:
            self._values["username"] = username
        if validate_type is not None:
            self._values["validate_type"] = validate_type

    @builtins.property
    def cert_brand(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property certBrand: Certificate brand.

        Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
        **Note:** This parameter must be specified along with or without the CertType and DomainTyp parameters.
        '''
        result = self._values.get("cert_brand")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cert_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property certType: Certificate type.

        Valid values: DV, OV, EV.
        **Note:** This parameter must be specified along with or without the DomainType and CertBrand parameters.
        '''
        result = self._values.get("cert_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def company_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property companyName: The name of the certificate application company.

        **Note**: This parameter is only applicable when applying for OV certificates.
        When applying for OV certificate, if you set the company name here, it means that the corresponding company information in the information management module is used; If you do not set this parameter, it indicates that the latest company information added is selected from the information management module.
        '''
        result = self._values.get("company_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def csr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property csr: The contents of a manually generated CSR file for a domain name using the OpenSSL or Keytool tools.

        The CSR key type must be RSA or ECC, and the RSA key length must be greater than or equal to 2048. If this parameter is not set, the CSR is automatically created for you by the SSL certificate service.
        A CSR (Certificate Signing Request) is a certificate signing request file that contains information about your server and your company. When you apply for a certificate, you will need to submit the CSR file of your certificate to the CA certification authority for review. After the CA center signs the CSR file with the root certificate's private key, it will generate the certificate public key file (that is, the SSL certificate issued to you).
        '''
        result = self._values.get("csr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def domains(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property domains: The domain to bind the certificate to.

        The specific requirements are as follows:

        - Supports single or wildcard domains (e.g., *.aliyundoc.com).
        - Multiple domains are supported. You can set up to 5 domains.
        - If you set more than one domain name, the multiple domains can only be single domain name or wildcard domain name, not both single domain name and wildcard domain name.
          **Note:** This is required when the certificate is bound to more than one hostname. This parameter is not allowed to be empty at the same time as the Csr parameter. If you set both this parameter and the Csr parameter, take the CN field value in the Csr as the domain name for the certificate to bind to.
        '''
        result = self._values.get("domains")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def domain_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property domainType: Domain type.

        Valid values: one, all, multiple.
        **Note:** This parameter must be specified along with or without the CertType and CertBrand parameters.
        '''
        result = self._values.get("domain_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def email(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property email: The applicant's email.'''
        result = self._values.get("email")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property phone: The applicant's mobile phone number.

        A CA official may contact you at this number to verify your certificate request.
        '''
        result = self._values.get("phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def product_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property productCode: Specification of the certificate to apply for.

        Value:

        - digicert-free-1-free (default) : This indicates DigiCert DV single-domain certificates (free 3-month certificates).
        - symantec-free 1-free: Stands for DigiCert DV free single-domain certificate (1-year free certificate).
        - symantec-dv-1-starter: This represents the DigiCert DV wildcard domain name certificate.
        - symantec-ov-1-personal: This stands for DigiCert OV single-domain certificate
        - symantec-ov-w-personal: This stands for DigiCert OV wildcard domain name certificate.
        - geotrust-dv-1-starter: This represents the GeoTrust DV single-domain certificate.
        - geotrust-dv-w-starter: This represents the GeoTrust DV wildcard domain name certificate.
        - geotrust-ov-1-personal: This stands for GeoTrust OV single-domain certificate.
        - geotrust-ov-w-personal: This represents the GeoTrust OV wildcard domain name certificate.
        - globalsign-dv-1-personal: This stands for GlobalSign DV single-domain certificate.
        - globalsign-dv-w-advanced: This stands for GlobalSign DV wildcard domain name certificate.
        - globalsign-ov-1-personal: This stands for GlobalSign OV single-domain certificate.
        - globalsign-ov-w-advanced: This represents the GlobalSign OV wildcard domain name certificate.
        - cfca-ov-1-personal: This stands for CFCA OV single domain certificate
        - cfca-ev-w-advanced: This stands for CFCA OV wildcard domain name certificate.
          **Note:** If you specify this parameter, you do not need to specify the DomainType, CertType, and CertBrand parameters; otherwise, this parameter will prevail.
        '''
        result = self._values.get("product_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def username(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property username: The applicant's name.'''
        result = self._values.get("username")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def validate_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property validateType: How domain ownership is verified.

        Valid values:

        - DNS: DNS validation The ownership of the domain name is verified by adding a TXT type DNS record to the domain name's DNS management platform. You need administrative permission for domain resolution to complete validation.
        - FILE: File validation Ownership of a domain name is verified by creating a specified file on the domain name server. You need administrator access to your domain name server to complete validation.
        '''
        result = self._values.get("validate_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SslCertificateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IUserCertificate)
class UserCertificate(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cas.UserCertificate",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CAS::UserCertificate``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosUserCertificate``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-usercertificate
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["UserCertificateProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e00206334d7b91e4316e5cff0fe0f5bd717fe06721a37cf7ab88e7fe374ab6d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCert")
    def attr_cert(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cert: The certificate content in PEM format.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCert"))

    @builtins.property
    @jsii.member(jsii_name="attrCertId")
    def attr_cert_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CertId: Certificate ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCertId"))

    @builtins.property
    @jsii.member(jsii_name="attrCertificateName")
    def attr_certificate_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CertificateName: Custom certificate name.

        Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCertificateName"))

    @builtins.property
    @jsii.member(jsii_name="attrEncryptCert")
    def attr_encrypt_cert(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EncryptCert: The content of the encryption certificate in PEM format.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEncryptCert"))

    @builtins.property
    @jsii.member(jsii_name="attrEncryptPrivateKey")
    def attr_encrypt_private_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EncryptPrivateKey: The private key content of the encryption certificate in PEM format.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEncryptPrivateKey"))

    @builtins.property
    @jsii.member(jsii_name="attrKey")
    def attr_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Key: The private key content of the certificate in PEM format.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKey"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSignCert")
    def attr_sign_cert(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SignCert: The signature certificate content in PEM format.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSignCert"))

    @builtins.property
    @jsii.member(jsii_name="attrSignPrivateKey")
    def attr_sign_private_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SignPrivateKey: The private key content of the signature certificate in PEM format.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSignPrivateKey"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tag of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserCertificateProps":
        return typing.cast("UserCertificateProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8324bb3315695f321e1301120dc7f33e6414739cacf7fe52595759dedd8397a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34cb27b5afb811ee37abac2da06d30eda4790adebe9338890b04821500f4f9f1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e122cf34414aa9f8c21f88bf2a6d511c0f8cd9a53ea7eb8f7de33d5452212a3e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cas.UserCertificateProps",
    jsii_struct_bases=[],
    name_mapping={
        "cert": "cert",
        "certificate_name": "certificateName",
        "encrypt_cert": "encryptCert",
        "encrypt_private_key": "encryptPrivateKey",
        "key": "key",
        "resource_group_id": "resourceGroupId",
        "resource_id": "resourceId",
        "sign_cert": "signCert",
        "sign_private_key": "signPrivateKey",
        "tags": "tags",
    },
)
class UserCertificateProps:
    def __init__(
        self,
        *,
        cert: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        certificate_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encrypt_cert: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encrypt_private_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sign_cert: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sign_private_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosUserCertificate.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``UserCertificate``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-usercertificate

        :param cert: Property cert: The certificate content in PEM format.
        :param certificate_name: Property certificateName: Custom certificate name. Maximum supported character length:128. All character types are supported, including letters, numbers and underscores. The certificate name under the same user cannot be duplicated.
        :param encrypt_cert: Property encryptCert: The content of the encryption certificate in PEM format.
        :param encrypt_private_key: Property encryptPrivateKey: The private key content of the encryption certificate in PEM format.
        :param key: Property key: The private key content of the certificate in PEM format.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param resource_id: Property resourceId: Resource ID.
        :param sign_cert: Property signCert: The signature certificate content in PEM format.
        :param sign_private_key: Property signPrivateKey: The private key content of the signature certificate in PEM format.
        :param tags: Property tags: Tags of certificate.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__655edf6e9acad63950cd7d2e196c293d4089247858826c6cf68daec99fb56b7a)
            check_type(argname="argument cert", value=cert, expected_type=type_hints["cert"])
            check_type(argname="argument certificate_name", value=certificate_name, expected_type=type_hints["certificate_name"])
            check_type(argname="argument encrypt_cert", value=encrypt_cert, expected_type=type_hints["encrypt_cert"])
            check_type(argname="argument encrypt_private_key", value=encrypt_private_key, expected_type=type_hints["encrypt_private_key"])
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument resource_id", value=resource_id, expected_type=type_hints["resource_id"])
            check_type(argname="argument sign_cert", value=sign_cert, expected_type=type_hints["sign_cert"])
            check_type(argname="argument sign_private_key", value=sign_private_key, expected_type=type_hints["sign_private_key"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if cert is not None:
            self._values["cert"] = cert
        if certificate_name is not None:
            self._values["certificate_name"] = certificate_name
        if encrypt_cert is not None:
            self._values["encrypt_cert"] = encrypt_cert
        if encrypt_private_key is not None:
            self._values["encrypt_private_key"] = encrypt_private_key
        if key is not None:
            self._values["key"] = key
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if resource_id is not None:
            self._values["resource_id"] = resource_id
        if sign_cert is not None:
            self._values["sign_cert"] = sign_cert
        if sign_private_key is not None:
            self._values["sign_private_key"] = sign_private_key
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def cert(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cert: The certificate content in PEM format.'''
        result = self._values.get("cert")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def certificate_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property certificateName: Custom certificate name.

        Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
        The certificate name under the same user cannot be duplicated.
        '''
        result = self._values.get("certificate_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encrypt_cert(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property encryptCert: The content of the encryption certificate in PEM format.'''
        result = self._values.get("encrypt_cert")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encrypt_private_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property encryptPrivateKey: The private key content of the encryption certificate in PEM format.'''
        result = self._values.get("encrypt_private_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property key: The private key content of the certificate in PEM format.'''
        result = self._values.get("key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceId: Resource ID.'''
        result = self._values.get("resource_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sign_cert(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property signCert: The signature certificate content in PEM format.'''
        result = self._values.get("sign_cert")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sign_private_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property signPrivateKey: The private key content of the signature certificate in PEM format.'''
        result = self._values.get("sign_private_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosUserCertificate.TagsProperty]]:
        '''Property tags: Tags of certificate.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosUserCertificate.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UserCertificateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ICertificate)
class Certificate(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cas.Certificate",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CAS::Certificate``, which is used to add a certificate.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCertificate``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-certificate
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[CertificateProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b234d46789e8c2016fcf32b39f570e7d2a9ab6c0bd7e26c709d41b68738956a3)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCertId")
    def attr_cert_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CertId: Certificate ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCertId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CertificateProps:
        return typing.cast(CertificateProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__abdcc3e24722ab4cd85f12ff3d6dd1279a4b7e5ce2b0df33bb8c0611c3f2114c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b6c9e4c0fc7916cad1bba2672a82f14f3a277319213b9ca3bfc3bc120d162f6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b07e176174ec774969f11fc199255c7223fe5b75518ca30cfe1054d5f5c81ba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "Certificate",
    "CertificateProps",
    "ICertificate",
    "IOrder",
    "IPcaCertificate",
    "ISslCertificate",
    "IUserCertificate",
    "Order",
    "OrderProps",
    "PcaCertificate",
    "PcaCertificateProps",
    "RosCertificate",
    "RosCertificateProps",
    "RosOrder",
    "RosOrderProps",
    "RosPcaCertificate",
    "RosPcaCertificateProps",
    "RosSslCertificate",
    "RosSslCertificateProps",
    "RosUserCertificate",
    "RosUserCertificateProps",
    "SslCertificate",
    "SslCertificateProps",
    "UserCertificate",
    "UserCertificateProps",
]

publication.publish()

def _typecheckingstub__07e0a2ae254f018b4c89dd3f7f79bcc2272bc543adacd01e9c591a9f9e589493(
    *,
    cert: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__041f36dcf60488ce421cfd113ed4585a1567bb1c95159f7b6a86635c6bde6d8d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[OrderProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__333ad91c5b35d26707bdc6636f83da503ae00053a6a3ed10976ff5b918dce31e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8484a5696ae8fcc62a3154de44099beb7e491f98a56c66af632712154e63a07d(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3fb0f24403298ae06d0a58086f5b768985bfab57cce2ededc8f1823f641b8e8e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1983f4ef767984ef716296ae644d4dc4dfef7599b6eaec1880da670ca56c0fa(
    *,
    cert_brand: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cert_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    domain_cnt: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    domain_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6030dec7403a4f9f3d571ea557323e4ca3430da2d85abb7652aba79baddcc9f9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PcaCertificateProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f98aed47c1b3658bafc9b4466383077f5e243636cd750b8e12ee9191c55ecd1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f455f3f885cc2f2de1f9c8596926f4c7eb6bf415ed1635a54f010c394e78b0c(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1f3b93e4d252949d661a678148ce96aedf91861e14e08ddf52c53784d8bd748(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__60d26c877cabb12aeb36b01c30e17551dd82bb47ac9171aee03cc1f826d4ed98(
    *,
    common_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    locality: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    organization: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    organization_unit: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    state: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    years: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    algorithm: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ca_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    country_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8810f552d9ea1a7b2e94b1f7b6e7382fee697cf796c7ca9dd1b936f486b6dcbc(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCertificateProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__536b746d585cb4253afbf99ba729eea3b43a4cfe97ab1df64168beda75a14a53(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2354cf030ed10aa7c0accbe6ddec0c6e653f40430c22226c0f125318742b45b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__71db2b31a9e51fe92b0cb684a0fb906fd653cbc00ccb08c09eb445a2a4b767a4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d90d80db51c7504011d35ce24be1b5c0fed275078cf00686bcf3005c94217c59(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__84c67126c949c0a38caf260021375fbb5ea65427af261cb29eafdcb2a182c9af(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b80787f6c95cde7755ed275da224e1264dfb3f62abe3b73e984f1d9f240ba2f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67a982d45319e32cd72f9f23c0ced9265141968b5f935eb4ac8e8a97e1f46cf6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ff148f63432986b50f253a72db70c1105e107f3da35b2b6ff541dfd30de675e(
    *,
    cert: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e336d9fcd37b79cd79e3494ea7e396f5798033daff45d8f5199988399053921(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosOrderProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7005fdf0f170e4a7f92b16674ce80ab86f204918b95c919f3813be7bbba2712(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eaef3acf3afa63a4af0f0218a63516f9be45781167e87461824a6a0bce7e81b8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd2e4fc4e0a9c8b0f09a114b9fc591f5a992d13b9a6ce0e3b960191e203ee562(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b231e4cccbf8903765b925a104e969fd9340862d1766a9ecca9c265a075be02f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca041e2d6c0760591d196c760cc5733cd2bd212b98502f62d2644f56e7682dac(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c744317592e8e407dee6672598706afd7f1b1911b6b5d150a539fff7a50be53f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e3f2f53a64e36b1d13ec5ebb6805ca485d409601688bf8d3f5e5383839c797f(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f634f3ed77d57f3f7e1f21f79fab23fb8d60542323b88adfaf58b9a56c9481d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2924fabbb53fbf3ad36c0e08a6b49a1d18d0f0d7fcbc09a0541ee451f8797a3e(
    *,
    cert_brand: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cert_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    domain_cnt: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    domain_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11a5d9a18e4fcedc87ff255a2ca7917c0c044cbde78286c6662284dea6350431(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPcaCertificateProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__adb8c383a334ced4a318f507e1c9596d3586ce098d02db2f66e629f0b9f60987(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f68a1f590afe38ca604faaa345cc441cf90c665f08948c7b08136c343d5be073(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c59f517c31b972d34df3f67a9685f5702cbccbd5f068c817372a6578adbb83f9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6232f4fb81de13ffc0c3c2b56ff88599daf4947227f701d2daf482dc95550e5c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5acfcf95fcff5f53705727a3584ede82a74cc405cd3a52b83751b34128b47d2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05a7a787b021188bc4df65990d59ed6a6b4f4b905e6fb844d5331892ca76469e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a6b347f5af8c68f1454c8b385ef6a11f5df4d3b43e87704a8bc59dd9f7c8d01(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a8e1e968ebd155afd94eff715a42455bb00db36f361f404f5766ac7ad326728(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a0f59ac1ed10e064df2a45ecbbbd927141322b941a52cd3fcc09341b3764023(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a8a875ea1b54b1ff2aeb75d27578f5750581578cc24118ee1023a7cda7d130e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__115e12f0a59f2ae133902487988d65ae0ef4c96dda2b1112a5c66ba13283352a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__273c6ffc1db2bc655974105a63bdf99a7496f8338c6645ce065911dbcda2efcd(
    *,
    common_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    locality: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    organization: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    organization_unit: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    state: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    years: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    algorithm: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ca_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    country_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__826713664035255658598e8d0f35db0a845f713a2b97d934fde8191e40794203(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSslCertificateProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf14e555e90c25f2707301919cd2b856dbea9d3731ef826156b60cde86dbf725(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63da5d2e03ac6157a25d39c2bed082b67ce6196b06d354a97ee37f605ae2437e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40f97d6518ac383e35fc49aa53c35555c27b22b2a10e64a4df3136e554724350(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5699f25f3ba65296c6bacade9bf2a658d62f875e9a4421ccaf54c209a8309136(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9cf44236e40c4d7877d33ab81aac26ddf3e5858acde769b45f1d71578bd4c034(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43d2390f7b380bd31d08957b0a04b8e5b7aa8e6902014463984e5bcd3c520f0e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fcb91df8601d8d0db2602a9cd5f270db611ff06090b592543a5617552109b27a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__062a2a6e9b99842902f18d763055fada74e2ff3c8eeee4a8c083f4364b6d9a6e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__258337fc6d94e03d7c097926dda8912df3e428e3d0de7e0b08c496386458eb27(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4540365d3c3baa366de349ee6ddbe73214f0feda660766a118945c6bace204a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33637879d325d5f7945c368bb793f18cd6b7f04d50eb223a53605cd69b3eccbd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__58870da053ced1332c7aa08d2a2e01d4683b313b97e95629ca64a521dedf286a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38aadf57af2f61aabffe6a8dd44caf68a38e78313d72423f643344fdb9399563(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06594a0653a8550d84193ffbbbe4d4ff3acf691c69bb7cb9c6c5175f5c99884c(
    *,
    cert_brand: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cert_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    company_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    csr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    domains: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    domain_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    email: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    product_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    username: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    validate_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8b69f577be53767f5b0e9cb9dc798dd28b564488388e75018fa331aa3602700(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosUserCertificateProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e13fe36618a52ad1aa6ee241f69e36f854790a1b335dd9f0a89bea133ea0f530(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd9c8f14cd4b9bab704c52dee7e283d409963609b3a2ca8945a4ca4d9be18380(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__558aefb3aeb9b53bb02ec67b7e565bebc5605a3aa21fa7298bff98c06cd5e82f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__162d2f86e0975037e18c0882efd2f391203694f739553ebc46a9edb5123f58b9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c8e48df9a03f6fe69ca34432e2230285605c8f5d625d499f21cc0ace28a1f5d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9c9300965c7e87369151781e8ff7483198698a329b4489a9d41ac0f4449a265(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27486da52c8876f56a4cfb9ea536cf87b5ab32518f38877969fbff9c6db8d07b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3742ad1d8e9d680ed229749f10b234edfeaa6268c1c7a671c00fe157f516e417(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ade16051a88b2914adc5c9a6bde43c7c233548c9339d54071eae638b5871d23(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a062c5218f9e88661e9f7004e55887b0a13f1e0da11a9afbd57493f11421f9f5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ca11a51565ea4361f28ac6078584cdc81eaac3954c0fa7794bb6331004a84ac(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e7bae3a19aad8d4f12f441426344ba2b86b1d0e76e4430ebc523ebf76a1f4de(
    value: typing.Optional[typing.List[RosUserCertificate.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa07a0e3e013caf828606847f410b093c6195b89dcc856281a8cac8a39d46c7f(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__97ab341f23967cf659f5713f6d0e088ecaae0a73f5e3206ac009cc2deddd2b00(
    *,
    cert: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    certificate_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypt_cert: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypt_private_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sign_cert: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sign_private_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosUserCertificate.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10a8b30f3436ebb3fb1fdb30f8bc3a721ecc15a088b275d4df7a13150e4b201d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[SslCertificateProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3ed7bab9096ca81ae1b54d291733ecdaa02381f58aa7ba3f0319abbaccce077(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd47bd535b72cc38de325e05d205b9c51caf9ab84c85480b36fd19d6dd085a16(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__720a07ce66056cf1960107b8e1a7b41e5a90bae9abc2795da117a471c1b5243e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44f31f4d590b42fd106dde0fa9ec492c50596ba88876331bb4192123392f6fed(
    *,
    cert_brand: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cert_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    company_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    csr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    domains: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    domain_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    email: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    product_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    username: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    validate_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e00206334d7b91e4316e5cff0fe0f5bd717fe06721a37cf7ab88e7fe374ab6d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[UserCertificateProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8324bb3315695f321e1301120dc7f33e6414739cacf7fe52595759dedd8397a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34cb27b5afb811ee37abac2da06d30eda4790adebe9338890b04821500f4f9f1(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e122cf34414aa9f8c21f88bf2a6d511c0f8cd9a53ea7eb8f7de33d5452212a3e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__655edf6e9acad63950cd7d2e196c293d4089247858826c6cf68daec99fb56b7a(
    *,
    cert: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    certificate_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypt_cert: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypt_private_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sign_cert: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sign_private_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosUserCertificate.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b234d46789e8c2016fcf32b39f570e7d2a9ab6c0bd7e26c709d41b68738956a3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CertificateProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__abdcc3e24722ab4cd85f12ff3d6dd1279a4b7e5ce2b0df33bb8c0611c3f2114c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b6c9e4c0fc7916cad1bba2672a82f14f3a277319213b9ca3bfc3bc120d162f6(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b07e176174ec774969f11fc199255c7223fe5b75518ca30cfe1054d5f5c81ba(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
