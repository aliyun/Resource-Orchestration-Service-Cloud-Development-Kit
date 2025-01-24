'''
## Aliyun ROS ALIGREEN Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ALIGREEN from '@alicloud/ros-cdk-aligreen';
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
    jsii_type="@alicloud/ros-cdk-aligreen.AuditCallbackProps",
    jsii_struct_bases=[],
    name_mapping={
        "audit_callback_name": "auditCallbackName",
        "callback_suggestions": "callbackSuggestions",
        "callback_types": "callbackTypes",
        "crypt_type": "cryptType",
        "url": "url",
    },
)
class AuditCallbackProps:
    def __init__(
        self,
        *,
        audit_callback_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        callback_suggestions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        callback_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        crypt_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``AuditCallback``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-auditcallback

        :param audit_callback_name: Property auditCallbackName: The AuditCallback name defined by the customer. It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
        :param callback_suggestions: Property callbackSuggestions: List of audit results supported by message notification. Value: block: confirmed violation, review: Suspected violation, pass: normal.
        :param callback_types: Property callbackTypes: A list of Callback types. Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
        :param crypt_type: Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service. The value is SHA256:SHA256 encryption algorithm and SM3: SM3 encryption algorithm.
        :param url: Property url: The detection result will be called back to the url.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c155c8c908fbceaec2969429165b0b0ce35fbbe69f2084c525feb83922ac942)
            check_type(argname="argument audit_callback_name", value=audit_callback_name, expected_type=type_hints["audit_callback_name"])
            check_type(argname="argument callback_suggestions", value=callback_suggestions, expected_type=type_hints["callback_suggestions"])
            check_type(argname="argument callback_types", value=callback_types, expected_type=type_hints["callback_types"])
            check_type(argname="argument crypt_type", value=crypt_type, expected_type=type_hints["crypt_type"])
            check_type(argname="argument url", value=url, expected_type=type_hints["url"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "audit_callback_name": audit_callback_name,
            "callback_suggestions": callback_suggestions,
            "callback_types": callback_types,
            "crypt_type": crypt_type,
            "url": url,
        }

    @builtins.property
    def audit_callback_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property auditCallbackName: The AuditCallback name defined by the customer.

        It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
        '''
        result = self._values.get("audit_callback_name")
        assert result is not None, "Required property 'audit_callback_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def callback_suggestions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property callbackSuggestions: List of audit results supported by message notification.

        Value: block: confirmed violation, review: Suspected violation, pass: normal.
        '''
        result = self._values.get("callback_suggestions")
        assert result is not None, "Required property 'callback_suggestions' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def callback_types(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property callbackTypes: A list of Callback types.

        Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
        '''
        result = self._values.get("callback_types")
        assert result is not None, "Required property 'callback_types' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def crypt_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service.

        The value is SHA256:SHA256 encryption algorithm and SM3: SM3 encryption algorithm.
        '''
        result = self._values.get("crypt_type")
        assert result is not None, "Required property 'crypt_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def url(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property url: The detection result will be called back to the url.'''
        result = self._values.get("url")
        assert result is not None, "Required property 'url' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AuditCallbackProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-aligreen.BizTypeProps",
    jsii_struct_bases=[],
    name_mapping={
        "biz_type_name": "bizTypeName",
        "cite_template": "citeTemplate",
        "biz_type_import": "bizTypeImport",
        "description": "description",
        "industry_info": "industryInfo",
    },
)
class BizTypeProps:
    def __init__(
        self,
        *,
        biz_type_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cite_template: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        biz_type_import: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        industry_info: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``BizType``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-biztype

        :param biz_type_name: Property bizTypeName: The name of the business scenario defined by the customer. It can contain no more than 32 characters in English, numbers, and underscores.
        :param cite_template: Property citeTemplate: Specifies whether to import the configuration of an industry template. Default value: false. Valid values: true: imports the configuration of an industry template. false: does not import the configuration of an industry template. If the value is true, you must specify the industryInfo parameter.
        :param biz_type_import: Property bizTypeImport: The name of the existing business scenario that was imported from when the business scenario was created.
        :param description: Property description: The description of the business scenario defined by the customer, which is a combination of Chinese and English, numbers, and underscores, and cannot exceed 32 characters.
        :param industry_info: Property industryInfo: The industry classification. For specific types see CreateBizType</a>.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__382bb1506ba6565fc579c60e07dd51154ef5a89cea8c6f276cc132f270a76b9f)
            check_type(argname="argument biz_type_name", value=biz_type_name, expected_type=type_hints["biz_type_name"])
            check_type(argname="argument cite_template", value=cite_template, expected_type=type_hints["cite_template"])
            check_type(argname="argument biz_type_import", value=biz_type_import, expected_type=type_hints["biz_type_import"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument industry_info", value=industry_info, expected_type=type_hints["industry_info"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "biz_type_name": biz_type_name,
            "cite_template": cite_template,
        }
        if biz_type_import is not None:
            self._values["biz_type_import"] = biz_type_import
        if description is not None:
            self._values["description"] = description
        if industry_info is not None:
            self._values["industry_info"] = industry_info

    @builtins.property
    def biz_type_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bizTypeName: The name of the business scenario defined by the customer.

        It can contain no more than 32 characters in English, numbers, and underscores.
        '''
        result = self._values.get("biz_type_name")
        assert result is not None, "Required property 'biz_type_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cite_template(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property citeTemplate: Specifies whether to import the configuration of an industry template.

        Default value: false. Valid values:
        true: imports the configuration of an industry template.
        false: does not import the configuration of an industry template. If the value is true, you must specify the industryInfo parameter.
        '''
        result = self._values.get("cite_template")
        assert result is not None, "Required property 'cite_template' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def biz_type_import(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property bizTypeImport: The name of the existing business scenario that was imported from when the business scenario was created.'''
        result = self._values.get("biz_type_import")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the business scenario defined by the customer, which is a combination of Chinese and English, numbers, and underscores, and cannot exceed 32 characters.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def industry_info(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property industryInfo: The industry classification.

        For specific types see CreateBizType.
        '''
        result = self._values.get("industry_info")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BizTypeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-aligreen.CallbackProps",
    jsii_struct_bases=[],
    name_mapping={
        "callback_name": "callbackName",
        "callback_suggestions": "callbackSuggestions",
        "callback_types": "callbackTypes",
        "callback_url": "callbackUrl",
        "crypt_type": "cryptType",
    },
)
class CallbackProps:
    def __init__(
        self,
        *,
        callback_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        callback_suggestions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        callback_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        callback_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        crypt_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Callback``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-callback

        :param callback_name: Property callbackName: The Callback name defined by the customer. It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
        :param callback_suggestions: Property callbackSuggestions: List of audit results supported by message notification. Value: block: confirmed violation, review: Suspected violation, pass: normal.
        :param callback_types: Property callbackTypes: A list of Callback types. Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
        :param callback_url: Property callbackUrl: The detection result will be called back to the url.
        :param crypt_type: Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service. Value: 0:SHA256,1: SM3.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff731800089ae9ef793da0d3b34979874bf7e1205488fb5f5da6dc44f4b5f216)
            check_type(argname="argument callback_name", value=callback_name, expected_type=type_hints["callback_name"])
            check_type(argname="argument callback_suggestions", value=callback_suggestions, expected_type=type_hints["callback_suggestions"])
            check_type(argname="argument callback_types", value=callback_types, expected_type=type_hints["callback_types"])
            check_type(argname="argument callback_url", value=callback_url, expected_type=type_hints["callback_url"])
            check_type(argname="argument crypt_type", value=crypt_type, expected_type=type_hints["crypt_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "callback_name": callback_name,
            "callback_suggestions": callback_suggestions,
            "callback_types": callback_types,
            "callback_url": callback_url,
        }
        if crypt_type is not None:
            self._values["crypt_type"] = crypt_type

    @builtins.property
    def callback_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property callbackName: The Callback name defined by the customer.

        It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
        '''
        result = self._values.get("callback_name")
        assert result is not None, "Required property 'callback_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def callback_suggestions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property callbackSuggestions: List of audit results supported by message notification.

        Value: block: confirmed violation, review: Suspected violation, pass: normal.
        '''
        result = self._values.get("callback_suggestions")
        assert result is not None, "Required property 'callback_suggestions' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def callback_types(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property callbackTypes: A list of Callback types.

        Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
        '''
        result = self._values.get("callback_types")
        assert result is not None, "Required property 'callback_types' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def callback_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property callbackUrl: The detection result will be called back to the url.'''
        result = self._values.get("callback_url")
        assert result is not None, "Required property 'callback_url' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def crypt_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service.

        Value: 0:SHA256,1: SM3.
        '''
        result = self._values.get("crypt_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CallbackProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-aligreen.IAuditCallback")
class IAuditCallback(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``AuditCallback``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAuditCallbackName")
    def attr_audit_callback_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuditCallbackName: The AuditCallback name defined by the customer.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCallbackSuggestions")
    def attr_callback_suggestions(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackSuggestions: List of audit results supported by message notification.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCallbackTypes")
    def attr_callback_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackTypes: A list of Callback types.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCryptType")
    def attr_crypt_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUrl")
    def attr_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Url: The detection result will be called back to the url.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AuditCallbackProps:
        ...


class _IAuditCallbackProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``AuditCallback``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-aligreen.IAuditCallback"

    @builtins.property
    @jsii.member(jsii_name="attrAuditCallbackName")
    def attr_audit_callback_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuditCallbackName: The AuditCallback name defined by the customer.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAuditCallbackName"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackSuggestions")
    def attr_callback_suggestions(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackSuggestions: List of audit results supported by message notification.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCallbackSuggestions"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackTypes")
    def attr_callback_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackTypes: A list of Callback types.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCallbackTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrCryptType")
    def attr_crypt_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCryptType"))

    @builtins.property
    @jsii.member(jsii_name="attrUrl")
    def attr_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Url: The detection result will be called back to the url.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUrl"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AuditCallbackProps:
        return typing.cast(AuditCallbackProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAuditCallback).__jsii_proxy_class__ = lambda : _IAuditCallbackProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-aligreen.IBizType")
class IBizType(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``BizType``.'''

    @builtins.property
    @jsii.member(jsii_name="attrBizTypeName")
    def attr_biz_type_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BizTypeName: The name of the business scenario defined by the customer.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCiteTemplate")
    def attr_cite_template(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CiteTemplate: Specifies whether to import the configuration of an industry template.

        Default value: false.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the business scenario defined by the customer.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIndustryInfo")
    def attr_industry_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IndustryInfo: The industry classification.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BizTypeProps:
        ...


class _IBizTypeProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``BizType``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-aligreen.IBizType"

    @builtins.property
    @jsii.member(jsii_name="attrBizTypeName")
    def attr_biz_type_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BizTypeName: The name of the business scenario defined by the customer.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBizTypeName"))

    @builtins.property
    @jsii.member(jsii_name="attrCiteTemplate")
    def attr_cite_template(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CiteTemplate: Specifies whether to import the configuration of an industry template.

        Default value: false.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCiteTemplate"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the business scenario defined by the customer.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIndustryInfo")
    def attr_industry_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IndustryInfo: The industry classification.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIndustryInfo"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BizTypeProps:
        return typing.cast(BizTypeProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IBizType).__jsii_proxy_class__ = lambda : _IBizTypeProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-aligreen.ICallback")
class ICallback(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Callback``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCallbackId")
    def attr_callback_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackId: The ID of the primary key of the Callback.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCallbackName")
    def attr_callback_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackName: The Callback name defined by the customer.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCallbackSuggestions")
    def attr_callback_suggestions(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackSuggestions: List of audit results supported by message notification.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCallbackTypes")
    def attr_callback_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackTypes: The list of Callback types.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCallbackUrl")
    def attr_callback_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackUrl: The detection result will be called back to the url.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCryptType")
    def attr_crypt_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CallbackProps:
        ...


class _ICallbackProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Callback``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-aligreen.ICallback"

    @builtins.property
    @jsii.member(jsii_name="attrCallbackId")
    def attr_callback_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackId: The ID of the primary key of the Callback.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCallbackId"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackName")
    def attr_callback_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackName: The Callback name defined by the customer.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCallbackName"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackSuggestions")
    def attr_callback_suggestions(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackSuggestions: List of audit results supported by message notification.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCallbackSuggestions"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackTypes")
    def attr_callback_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackTypes: The list of Callback types.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCallbackTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackUrl")
    def attr_callback_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackUrl: The detection result will be called back to the url.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCallbackUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrCryptType")
    def attr_crypt_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCryptType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CallbackProps:
        return typing.cast(CallbackProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ICallback).__jsii_proxy_class__ = lambda : _ICallbackProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-aligreen.IImageLib")
class IImageLib(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ImageLib``.'''

    @builtins.property
    @jsii.member(jsii_name="attrBizTypes")
    def attr_biz_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BizTypes: List of business scenarios.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Category: The category of the image library.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnable")
    def attr_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Enable: Specifies whether to enable the image library.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrImageLibId")
    def attr_image_lib_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageLibId: The ID of the primary key of the image library.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrImageLibName")
    def attr_image_lib_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageLibName: The name of the image library defined by the customer.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScene")
    def attr_scene(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Scene: The moderation scenario to which the custom image library applies.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ImageLibProps":
        ...


class _IImageLibProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ImageLib``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-aligreen.IImageLib"

    @builtins.property
    @jsii.member(jsii_name="attrBizTypes")
    def attr_biz_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BizTypes: List of business scenarios.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBizTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Category: The category of the image library.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrEnable")
    def attr_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Enable: Specifies whether to enable the image library.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrImageLibId")
    def attr_image_lib_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageLibId: The ID of the primary key of the image library.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageLibId"))

    @builtins.property
    @jsii.member(jsii_name="attrImageLibName")
    def attr_image_lib_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageLibName: The name of the image library defined by the customer.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageLibName"))

    @builtins.property
    @jsii.member(jsii_name="attrScene")
    def attr_scene(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Scene: The moderation scenario to which the custom image library applies.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScene"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ImageLibProps":
        return typing.cast("ImageLibProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IImageLib).__jsii_proxy_class__ = lambda : _IImageLibProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-aligreen.IKeywordLib")
class IKeywordLib(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``KeywordLib``.'''

    @builtins.property
    @jsii.member(jsii_name="attrBizTypes")
    def attr_biz_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BizTypes: The business scenario.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Category: The category of the text library.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnable")
    def attr_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Enable: Specifies whether to enable text library.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrKeywordLibId")
    def attr_keyword_lib_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KeywordLibId: The ID of the primary key of the keyword library.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrKeywordLibName")
    def attr_keyword_lib_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KeywordLibName: The name of the keyword library defined by the customer.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLanguage")
    def attr_language(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Language: Language used by the text Library.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLibType")
    def attr_lib_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LibType: The category of the text library in each moderation scenario.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMatchMode")
    def attr_match_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MatchMode: The matching method.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceType: The moderation scenario to which the text library applies.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "KeywordLibProps":
        ...


class _IKeywordLibProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``KeywordLib``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-aligreen.IKeywordLib"

    @builtins.property
    @jsii.member(jsii_name="attrBizTypes")
    def attr_biz_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BizTypes: The business scenario.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBizTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Category: The category of the text library.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrEnable")
    def attr_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Enable: Specifies whether to enable text library.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrKeywordLibId")
    def attr_keyword_lib_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KeywordLibId: The ID of the primary key of the keyword library.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKeywordLibId"))

    @builtins.property
    @jsii.member(jsii_name="attrKeywordLibName")
    def attr_keyword_lib_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KeywordLibName: The name of the keyword library defined by the customer.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKeywordLibName"))

    @builtins.property
    @jsii.member(jsii_name="attrLanguage")
    def attr_language(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Language: Language used by the text Library.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLanguage"))

    @builtins.property
    @jsii.member(jsii_name="attrLibType")
    def attr_lib_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LibType: The category of the text library in each moderation scenario.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLibType"))

    @builtins.property
    @jsii.member(jsii_name="attrMatchMode")
    def attr_match_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MatchMode: The matching method.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMatchMode"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceType: The moderation scenario to which the text library applies.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "KeywordLibProps":
        return typing.cast("KeywordLibProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IKeywordLib).__jsii_proxy_class__ = lambda : _IKeywordLibProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-aligreen.IOssStockTask")
class IOssStockTask(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``OssStockTask``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAudioAntispamFreezeConfig")
    def attr_audio_antispam_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AudioAntispamFreezeConfig: Voice auto freeze configuration.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAudioAutoFreezeOpened")
    def attr_audio_auto_freeze_opened(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AudioAutoFreezeOpened: Audio detection auto freeze switch.

        Value: true: automatically freeze, false: not automatically freeze.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAudioMaxSize")
    def attr_audio_max_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AudioMaxSize: Resource property field representing the maximum size of a single audio.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAudioOpened")
    def attr_audio_opened(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AudioOpened: oss stock scan task detect audio.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAudioScanLimit")
    def attr_audio_scan_limit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AudioScanLimit: The upper limit of voice scan in the oss stock scan task.

        The default value is 1000/Bucket.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAudioScenes")
    def attr_audio_scenes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AudioScenes: The audio detection scenarios included in the oss stock scan task.

        Set the value to antispam.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAutoFreezeType")
    def attr_auto_freeze_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AutoFreezeType: Automatic freeze type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBizType")
    def attr_biz_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BizType: Business scenarios used by the oss stock scan task.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBuckets")
    def attr_buckets(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Buckets: The bucket configuration list of the oss stock scan task.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCallbackId")
    def attr_callback_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackId: The ID of the primary key of the notification message bound to the oss stock scan task.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEndDate")
    def attr_end_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EndDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrImageAdFreezeConfig")
    def attr_image_ad_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrImageAutoFreezeOpened")
    def attr_image_auto_freeze_opened(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageAutoFreezeOpened: Picture detection auto freeze switch.

        Value: true: auto freeze, false: not auto freeze.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrImageLiveFreezeConfig")
    def attr_image_live_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageLiveFreezeConfig: Picture automatic freezing live scene configuration.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrImageOpened")
    def attr_image_opened(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageOpened: oss stock scan task detect images.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrImagePornFreezeConfig")
    def attr_image_porn_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImagePornFreezeConfig: Picture automatic freezing porn scene configuration.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrImageScanLimit")
    def attr_image_scan_limit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageScanLimit: The upper limit for scanning images in the oss stock scan task.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrImageScenes")
    def attr_image_scenes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageScenes: The image moderation scenario included in the oss stock scan task.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrImageTerrorismFreezeConfig")
    def attr_image_terrorism_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScanImageNoFileType")
    def attr_scan_image_no_file_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStartDate")
    def attr_start_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StartDate: The start time of the file upload time range represents the files uploaded after scanning this time point.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVideoAdFreezeConfig")
    def attr_video_ad_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVideoAutoFreezeOpened")
    def attr_video_auto_freeze_opened(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoAutoFreezeOpened: Video detection auto freeze switch.

        Value: true: automatically freeze, false: not automatically freeze.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVideoFrameInterval")
    def attr_video_frame_interval(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoFrameInterval: Resource attribute field representing the framing frequency.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVideoLiveFreezeConfig")
    def attr_video_live_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoLiveFreezeConfig: Video automatic freeze live scene configuration.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVideoMaxFrames")
    def attr_video_max_frames(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVideoMaxSize")
    def attr_video_max_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoMaxSize: Resource property field representing the maximum size of a single video.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVideoOpened")
    def attr_video_opened(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoOpened: oss stock scan task detect video.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVideoPornFreezeConfig")
    def attr_video_porn_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoPornFreezeConfig: Video automatic freezing porn scene configuration.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVideoScanLimit")
    def attr_video_scan_limit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoScanLimit: The upper limit of video scanning in the oss stock scan task.

        The default value is 1000/Bucket.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVideoScenes")
    def attr_video_scenes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoScenes: The video detection scenarios included in the oss stock scan task.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVideoTerrorismFreezeConfig")
    def attr_video_terrorism_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVideoVoiceAntispamFreezeConfig")
    def attr_video_voice_antispam_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OssStockTaskProps":
        ...


class _IOssStockTaskProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``OssStockTask``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-aligreen.IOssStockTask"

    @builtins.property
    @jsii.member(jsii_name="attrAudioAntispamFreezeConfig")
    def attr_audio_antispam_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AudioAntispamFreezeConfig: Voice auto freeze configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAudioAntispamFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrAudioAutoFreezeOpened")
    def attr_audio_auto_freeze_opened(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AudioAutoFreezeOpened: Audio detection auto freeze switch.

        Value: true: automatically freeze, false: not automatically freeze.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAudioAutoFreezeOpened"))

    @builtins.property
    @jsii.member(jsii_name="attrAudioMaxSize")
    def attr_audio_max_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AudioMaxSize: Resource property field representing the maximum size of a single audio.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAudioMaxSize"))

    @builtins.property
    @jsii.member(jsii_name="attrAudioOpened")
    def attr_audio_opened(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AudioOpened: oss stock scan task detect audio.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAudioOpened"))

    @builtins.property
    @jsii.member(jsii_name="attrAudioScanLimit")
    def attr_audio_scan_limit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AudioScanLimit: The upper limit of voice scan in the oss stock scan task.

        The default value is 1000/Bucket.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAudioScanLimit"))

    @builtins.property
    @jsii.member(jsii_name="attrAudioScenes")
    def attr_audio_scenes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AudioScenes: The audio detection scenarios included in the oss stock scan task.

        Set the value to antispam.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAudioScenes"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoFreezeType")
    def attr_auto_freeze_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AutoFreezeType: Automatic freeze type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAutoFreezeType"))

    @builtins.property
    @jsii.member(jsii_name="attrBizType")
    def attr_biz_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BizType: Business scenarios used by the oss stock scan task.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBizType"))

    @builtins.property
    @jsii.member(jsii_name="attrBuckets")
    def attr_buckets(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Buckets: The bucket configuration list of the oss stock scan task.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBuckets"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackId")
    def attr_callback_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackId: The ID of the primary key of the notification message bound to the oss stock scan task.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCallbackId"))

    @builtins.property
    @jsii.member(jsii_name="attrEndDate")
    def attr_end_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EndDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEndDate"))

    @builtins.property
    @jsii.member(jsii_name="attrImageAdFreezeConfig")
    def attr_image_ad_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageAdFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrImageAutoFreezeOpened")
    def attr_image_auto_freeze_opened(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageAutoFreezeOpened: Picture detection auto freeze switch.

        Value: true: auto freeze, false: not auto freeze.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageAutoFreezeOpened"))

    @builtins.property
    @jsii.member(jsii_name="attrImageLiveFreezeConfig")
    def attr_image_live_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageLiveFreezeConfig: Picture automatic freezing live scene configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageLiveFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrImageOpened")
    def attr_image_opened(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageOpened: oss stock scan task detect images.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageOpened"))

    @builtins.property
    @jsii.member(jsii_name="attrImagePornFreezeConfig")
    def attr_image_porn_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImagePornFreezeConfig: Picture automatic freezing porn scene configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImagePornFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrImageScanLimit")
    def attr_image_scan_limit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageScanLimit: The upper limit for scanning images in the oss stock scan task.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageScanLimit"))

    @builtins.property
    @jsii.member(jsii_name="attrImageScenes")
    def attr_image_scenes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageScenes: The image moderation scenario included in the oss stock scan task.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageScenes"))

    @builtins.property
    @jsii.member(jsii_name="attrImageTerrorismFreezeConfig")
    def attr_image_terrorism_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageTerrorismFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrScanImageNoFileType")
    def attr_scan_image_no_file_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScanImageNoFileType"))

    @builtins.property
    @jsii.member(jsii_name="attrStartDate")
    def attr_start_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StartDate: The start time of the file upload time range represents the files uploaded after scanning this time point.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStartDate"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoAdFreezeConfig")
    def attr_video_ad_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoAdFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoAutoFreezeOpened")
    def attr_video_auto_freeze_opened(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoAutoFreezeOpened: Video detection auto freeze switch.

        Value: true: automatically freeze, false: not automatically freeze.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoAutoFreezeOpened"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoFrameInterval")
    def attr_video_frame_interval(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoFrameInterval: Resource attribute field representing the framing frequency.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoFrameInterval"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoLiveFreezeConfig")
    def attr_video_live_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoLiveFreezeConfig: Video automatic freeze live scene configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoLiveFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoMaxFrames")
    def attr_video_max_frames(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoMaxFrames"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoMaxSize")
    def attr_video_max_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoMaxSize: Resource property field representing the maximum size of a single video.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoMaxSize"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoOpened")
    def attr_video_opened(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoOpened: oss stock scan task detect video.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoOpened"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoPornFreezeConfig")
    def attr_video_porn_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoPornFreezeConfig: Video automatic freezing porn scene configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoPornFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoScanLimit")
    def attr_video_scan_limit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoScanLimit: The upper limit of video scanning in the oss stock scan task.

        The default value is 1000/Bucket.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoScanLimit"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoScenes")
    def attr_video_scenes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoScenes: The video detection scenarios included in the oss stock scan task.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoScenes"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoTerrorismFreezeConfig")
    def attr_video_terrorism_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoTerrorismFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoVoiceAntispamFreezeConfig")
    def attr_video_voice_antispam_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoVoiceAntispamFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OssStockTaskProps":
        return typing.cast("OssStockTaskProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IOssStockTask).__jsii_proxy_class__ = lambda : _IOssStockTaskProxy


@jsii.implements(IImageLib)
class ImageLib(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-aligreen.ImageLib",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::Aligreen::ImageLib``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosImageLib``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-imagelib
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ImageLibProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3bce5d467a8cd80b84c66d57300facce4755af5f67651f4e6f1a314a83687b4e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBizTypes")
    def attr_biz_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BizTypes: List of business scenarios.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBizTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Category: The category of the image library.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrEnable")
    def attr_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Enable: Specifies whether to enable the image library.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrImageLibId")
    def attr_image_lib_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageLibId: The ID of the primary key of the image library.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageLibId"))

    @builtins.property
    @jsii.member(jsii_name="attrImageLibName")
    def attr_image_lib_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageLibName: The name of the image library defined by the customer.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageLibName"))

    @builtins.property
    @jsii.member(jsii_name="attrScene")
    def attr_scene(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Scene: The moderation scenario to which the custom image library applies.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScene"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ImageLibProps":
        return typing.cast("ImageLibProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2695914f03e653fb1aeb1ef8f70466d0eb5d50fd7ee98be55d5bc71a1289dfcf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19e260197fddf160033aadcacc148acb641db74edbe8607fc22f030b4a8b3a6c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b0083a5affeb07a0b2eef4fc471e16251c07fafaddc9c43178f648560df2fbe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-aligreen.ImageLibProps",
    jsii_struct_bases=[],
    name_mapping={
        "category": "category",
        "image_lib_name": "imageLibName",
        "scene": "scene",
        "biz_types": "bizTypes",
        "enable": "enable",
    },
)
class ImageLibProps:
    def __init__(
        self,
        *,
        category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        image_lib_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        scene: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        biz_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ImageLib``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-imagelib

        :param category: Property category: The category of the image library. Valid values: BLACK: a blacklist, WHITE: a whitelist, REVIEW: a review list.
        :param image_lib_name: Property imageLibName: The name of the image library defined by the customer. It can contain no more than 20 characters in Chinese, English, and underscore (_).
        :param scene: Property scene: The moderation scenario to which the custom image library applies. Valid values: PORN: pornography detection, AD: ad detection, ILLEGAL: terrorist content detection.
        :param biz_types: Property bizTypes: List of business scenarios. For example: ["bizTypeA", "bizTypeB", "bizTypeC"].
        :param enable: Property enable: Specifies whether to enable the image library. Valid values: true: Enable the image library. This is the default value. false: Disable the image library.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01596dfe95392e6ddc546ff29a26f3c8eb5658cc7a95c5b8ed6fdd0fb4716541)
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument image_lib_name", value=image_lib_name, expected_type=type_hints["image_lib_name"])
            check_type(argname="argument scene", value=scene, expected_type=type_hints["scene"])
            check_type(argname="argument biz_types", value=biz_types, expected_type=type_hints["biz_types"])
            check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "category": category,
            "image_lib_name": image_lib_name,
            "scene": scene,
        }
        if biz_types is not None:
            self._values["biz_types"] = biz_types
        if enable is not None:
            self._values["enable"] = enable

    @builtins.property
    def category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property category: The category of the image library.

        Valid values: BLACK: a blacklist, WHITE: a whitelist, REVIEW: a review list.
        '''
        result = self._values.get("category")
        assert result is not None, "Required property 'category' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def image_lib_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property imageLibName: The name of the image library defined by the customer.

        It can contain no more than 20 characters in Chinese, English, and underscore (_).
        '''
        result = self._values.get("image_lib_name")
        assert result is not None, "Required property 'image_lib_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def scene(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property scene: The moderation scenario to which the custom image library applies.

        Valid values: PORN: pornography detection, AD: ad detection, ILLEGAL: terrorist content detection.
        '''
        result = self._values.get("scene")
        assert result is not None, "Required property 'scene' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def biz_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property bizTypes: List of business scenarios.

        For example: ["bizTypeA", "bizTypeB", "bizTypeC"].
        '''
        result = self._values.get("biz_types")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enable: Specifies whether to enable the image library.

        Valid values:
        true: Enable the image library. This is the default value. false: Disable the image library.
        '''
        result = self._values.get("enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ImageLibProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IKeywordLib)
class KeywordLib(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-aligreen.KeywordLib",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::Aligreen::KeywordLib``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosKeywordLib``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-keywordlib
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["KeywordLibProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__313320bab46fbef69602d3aebdcbe413fe55c0330e2f86e3ce3d3aca21694e1b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBizTypes")
    def attr_biz_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BizTypes: The business scenario.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBizTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Category: The category of the text library.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrEnable")
    def attr_enable(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Enable: Specifies whether to enable text library.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrKeywordLibId")
    def attr_keyword_lib_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KeywordLibId: The ID of the primary key of the keyword library.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKeywordLibId"))

    @builtins.property
    @jsii.member(jsii_name="attrKeywordLibName")
    def attr_keyword_lib_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KeywordLibName: The name of the keyword library defined by the customer.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKeywordLibName"))

    @builtins.property
    @jsii.member(jsii_name="attrLanguage")
    def attr_language(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Language: Language used by the text Library.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLanguage"))

    @builtins.property
    @jsii.member(jsii_name="attrLibType")
    def attr_lib_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LibType: The category of the text library in each moderation scenario.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLibType"))

    @builtins.property
    @jsii.member(jsii_name="attrMatchMode")
    def attr_match_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MatchMode: The matching method.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMatchMode"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceType: The moderation scenario to which the text library applies.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "KeywordLibProps":
        return typing.cast("KeywordLibProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3c9a980be202a497115a92dc31a528d99ef51b32c21add6820e2d36267eab188)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0a9e34517ed77871f6ef8c76f3e2e1dfb28bef3d4db38989b3b9ae4111ab800)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e05d82ff3a5ef73c7494301ff09b4a5fd50062b505f9cfd07364cabf08bf9df4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-aligreen.KeywordLibProps",
    jsii_struct_bases=[],
    name_mapping={
        "keyword_lib_name": "keywordLibName",
        "resource_type": "resourceType",
        "biz_types": "bizTypes",
        "category": "category",
        "enable": "enable",
        "language": "language",
        "lib_type": "libType",
        "match_mode": "matchMode",
    },
)
class KeywordLibProps:
    def __init__(
        self,
        *,
        keyword_lib_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        biz_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lib_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        match_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``KeywordLib``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-keywordlib

        :param keyword_lib_name: Property keywordLibName: The name of the keyword library defined by the customer. It can contain no more than 20 characters in Chinese, English, and underscore (_).
        :param resource_type: Property resourceType: The moderation scenario to which the text library applies. Valid values:TEXT: text anti-spam、IMAGE: ad violation detection、VOICE: audio anti-spam.
        :param biz_types: Property bizTypes: The business scenario. Example:["bizTypeA","bizTypeB"].
        :param category: Property category: The category of the text library. Valid values: BLACK: a blacklist. WHITE: a whitelist. REVIEW: a review list.
        :param enable: Property enable: Specifies whether to enable text library.true: Enable the text library. This is the default value.false: Disable the text library.
        :param language: Property language: Language used by the text Library. Example: zh:Chinese、en:English
        :param lib_type: Property libType: The category of the text library in each moderation scenario. Valid values: textKeyword: a text library against which terms in text are matched. similarText: a text library against which text patterns are matched. voiceText: a text library against which terms converted from audio are matched.
        :param match_mode: Property matchMode: The matching method. Valid values:fuzzy: fuzzy match precise: exact match.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__403c45892904f9371b39ce938ea40c00ad88ca864372018dd5d0ab802b504555)
            check_type(argname="argument keyword_lib_name", value=keyword_lib_name, expected_type=type_hints["keyword_lib_name"])
            check_type(argname="argument resource_type", value=resource_type, expected_type=type_hints["resource_type"])
            check_type(argname="argument biz_types", value=biz_types, expected_type=type_hints["biz_types"])
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
            check_type(argname="argument language", value=language, expected_type=type_hints["language"])
            check_type(argname="argument lib_type", value=lib_type, expected_type=type_hints["lib_type"])
            check_type(argname="argument match_mode", value=match_mode, expected_type=type_hints["match_mode"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "keyword_lib_name": keyword_lib_name,
            "resource_type": resource_type,
        }
        if biz_types is not None:
            self._values["biz_types"] = biz_types
        if category is not None:
            self._values["category"] = category
        if enable is not None:
            self._values["enable"] = enable
        if language is not None:
            self._values["language"] = language
        if lib_type is not None:
            self._values["lib_type"] = lib_type
        if match_mode is not None:
            self._values["match_mode"] = match_mode

    @builtins.property
    def keyword_lib_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property keywordLibName: The name of the keyword library defined by the customer.

        It can contain no more than 20 characters in Chinese, English, and underscore (_).
        '''
        result = self._values.get("keyword_lib_name")
        assert result is not None, "Required property 'keyword_lib_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property resourceType: The moderation scenario to which the text library applies.

        Valid values:TEXT: text anti-spam、IMAGE: ad violation detection、VOICE: audio anti-spam.
        '''
        result = self._values.get("resource_type")
        assert result is not None, "Required property 'resource_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def biz_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property bizTypes: The business scenario.

        Example:["bizTypeA","bizTypeB"].
        '''
        result = self._values.get("biz_types")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property category: The category of the text library.

        Valid values:
        BLACK: a blacklist. WHITE: a whitelist. REVIEW: a review list.
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enable: Specifies whether to enable text library.true: Enable the text library. This is the default value.false: Disable the text library.'''
        result = self._values.get("enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property language: Language used by the text Library.

        Example: zh:Chinese、en:English
        '''
        result = self._values.get("language")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lib_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property libType: The category of the text library in each moderation scenario.

        Valid values: textKeyword: a text library against which terms in text are matched. similarText: a text library against which text patterns are matched. voiceText: a text library against which terms converted from audio are matched.
        '''
        result = self._values.get("lib_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property matchMode: The matching method.

        Valid values:fuzzy: fuzzy match precise: exact match.
        '''
        result = self._values.get("match_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "KeywordLibProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IOssStockTask)
class OssStockTask(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-aligreen.OssStockTask",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::Aligreen::OssStockTask``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosOssStockTask``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-ossstocktask
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["OssStockTaskProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__775d548970d0bf2513c619d9a7afb6cb19a8dbdc2e4df610855d34989e6a0be8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAudioAntispamFreezeConfig")
    def attr_audio_antispam_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AudioAntispamFreezeConfig: Voice auto freeze configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAudioAntispamFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrAudioAutoFreezeOpened")
    def attr_audio_auto_freeze_opened(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AudioAutoFreezeOpened: Audio detection auto freeze switch.

        Value: true: automatically freeze, false: not automatically freeze.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAudioAutoFreezeOpened"))

    @builtins.property
    @jsii.member(jsii_name="attrAudioMaxSize")
    def attr_audio_max_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AudioMaxSize: Resource property field representing the maximum size of a single audio.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAudioMaxSize"))

    @builtins.property
    @jsii.member(jsii_name="attrAudioOpened")
    def attr_audio_opened(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AudioOpened: oss stock scan task detect audio.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAudioOpened"))

    @builtins.property
    @jsii.member(jsii_name="attrAudioScanLimit")
    def attr_audio_scan_limit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AudioScanLimit: The upper limit of voice scan in the oss stock scan task.

        The default value is 1000/Bucket.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAudioScanLimit"))

    @builtins.property
    @jsii.member(jsii_name="attrAudioScenes")
    def attr_audio_scenes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AudioScenes: The audio detection scenarios included in the oss stock scan task.

        Set the value to antispam.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAudioScenes"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoFreezeType")
    def attr_auto_freeze_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AutoFreezeType: Automatic freeze type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAutoFreezeType"))

    @builtins.property
    @jsii.member(jsii_name="attrBizType")
    def attr_biz_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BizType: Business scenarios used by the oss stock scan task.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBizType"))

    @builtins.property
    @jsii.member(jsii_name="attrBuckets")
    def attr_buckets(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Buckets: The bucket configuration list of the oss stock scan task.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBuckets"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackId")
    def attr_callback_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackId: The ID of the primary key of the notification message bound to the oss stock scan task.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCallbackId"))

    @builtins.property
    @jsii.member(jsii_name="attrEndDate")
    def attr_end_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EndDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEndDate"))

    @builtins.property
    @jsii.member(jsii_name="attrImageAdFreezeConfig")
    def attr_image_ad_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageAdFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrImageAutoFreezeOpened")
    def attr_image_auto_freeze_opened(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageAutoFreezeOpened: Picture detection auto freeze switch.

        Value: true: auto freeze, false: not auto freeze.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageAutoFreezeOpened"))

    @builtins.property
    @jsii.member(jsii_name="attrImageLiveFreezeConfig")
    def attr_image_live_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageLiveFreezeConfig: Picture automatic freezing live scene configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageLiveFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrImageOpened")
    def attr_image_opened(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageOpened: oss stock scan task detect images.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageOpened"))

    @builtins.property
    @jsii.member(jsii_name="attrImagePornFreezeConfig")
    def attr_image_porn_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImagePornFreezeConfig: Picture automatic freezing porn scene configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImagePornFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrImageScanLimit")
    def attr_image_scan_limit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageScanLimit: The upper limit for scanning images in the oss stock scan task.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageScanLimit"))

    @builtins.property
    @jsii.member(jsii_name="attrImageScenes")
    def attr_image_scenes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageScenes: The image moderation scenario included in the oss stock scan task.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageScenes"))

    @builtins.property
    @jsii.member(jsii_name="attrImageTerrorismFreezeConfig")
    def attr_image_terrorism_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageTerrorismFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrScanImageNoFileType")
    def attr_scan_image_no_file_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScanImageNoFileType"))

    @builtins.property
    @jsii.member(jsii_name="attrStartDate")
    def attr_start_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StartDate: The start time of the file upload time range represents the files uploaded after scanning this time point.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStartDate"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoAdFreezeConfig")
    def attr_video_ad_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoAdFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoAutoFreezeOpened")
    def attr_video_auto_freeze_opened(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoAutoFreezeOpened: Video detection auto freeze switch.

        Value: true: automatically freeze, false: not automatically freeze.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoAutoFreezeOpened"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoFrameInterval")
    def attr_video_frame_interval(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoFrameInterval: Resource attribute field representing the framing frequency.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoFrameInterval"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoLiveFreezeConfig")
    def attr_video_live_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoLiveFreezeConfig: Video automatic freeze live scene configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoLiveFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoMaxFrames")
    def attr_video_max_frames(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoMaxFrames"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoMaxSize")
    def attr_video_max_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoMaxSize: Resource property field representing the maximum size of a single video.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoMaxSize"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoOpened")
    def attr_video_opened(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoOpened: oss stock scan task detect video.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoOpened"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoPornFreezeConfig")
    def attr_video_porn_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoPornFreezeConfig: Video automatic freezing porn scene configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoPornFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoScanLimit")
    def attr_video_scan_limit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoScanLimit: The upper limit of video scanning in the oss stock scan task.

        The default value is 1000/Bucket.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoScanLimit"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoScenes")
    def attr_video_scenes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoScenes: The video detection scenarios included in the oss stock scan task.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoScenes"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoTerrorismFreezeConfig")
    def attr_video_terrorism_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoTerrorismFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoVoiceAntispamFreezeConfig")
    def attr_video_voice_antispam_freeze_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VideoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVideoVoiceAntispamFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OssStockTaskProps":
        return typing.cast("OssStockTaskProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d8c9a5ff0a2d177e09680fad6bd3f9794a7dc516fb93d0195243f4b06d01644)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a6ba37c64c3bb0ce7c105ee0a5fb06973d423dc830ab1807aeed5a1cd67a0b5e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e5aae38642d376377137fce9a1636920810223693cf92c4bef04a6163329ccf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-aligreen.OssStockTaskProps",
    jsii_struct_bases=[],
    name_mapping={
        "buckets": "buckets",
        "start_date": "startDate",
        "audio_antispam_freeze_config": "audioAntispamFreezeConfig",
        "audio_auto_freeze_opened": "audioAutoFreezeOpened",
        "audio_max_size": "audioMaxSize",
        "audio_opened": "audioOpened",
        "audio_scan_limit": "audioScanLimit",
        "audio_scenes": "audioScenes",
        "auto_freeze_type": "autoFreezeType",
        "biz_type": "bizType",
        "callback_id": "callbackId",
        "end_date": "endDate",
        "image_ad_freeze_config": "imageAdFreezeConfig",
        "image_auto_freeze_opened": "imageAutoFreezeOpened",
        "image_live_freeze_config": "imageLiveFreezeConfig",
        "image_opened": "imageOpened",
        "image_porn_freeze_config": "imagePornFreezeConfig",
        "image_scan_limit": "imageScanLimit",
        "image_scenes": "imageScenes",
        "image_terrorism_freeze_config": "imageTerrorismFreezeConfig",
        "oss_stock_task_name": "ossStockTaskName",
        "scan_image_no_file_type": "scanImageNoFileType",
        "video_ad_freeze_config": "videoAdFreezeConfig",
        "video_auto_freeze_opened": "videoAutoFreezeOpened",
        "video_frame_interval": "videoFrameInterval",
        "video_live_freeze_config": "videoLiveFreezeConfig",
        "video_max_frames": "videoMaxFrames",
        "video_max_size": "videoMaxSize",
        "video_opened": "videoOpened",
        "video_porn_freeze_config": "videoPornFreezeConfig",
        "video_scan_limit": "videoScanLimit",
        "video_scenes": "videoScenes",
        "video_terrorism_freeze_config": "videoTerrorismFreezeConfig",
        "video_voice_antispam_freeze_config": "videoVoiceAntispamFreezeConfig",
    },
)
class OssStockTaskProps:
    def __init__(
        self,
        *,
        buckets: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
        start_date: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        audio_antispam_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        audio_auto_freeze_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        audio_max_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        audio_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        audio_scan_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        audio_scenes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        auto_freeze_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        biz_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        callback_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        end_date: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_ad_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        image_auto_freeze_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_live_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        image_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_porn_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        image_scan_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_scenes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        image_terrorism_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        oss_stock_task_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scan_image_no_file_type: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        video_ad_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        video_auto_freeze_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        video_frame_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        video_live_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        video_max_frames: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        video_max_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        video_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        video_porn_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        video_scan_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        video_scenes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        video_terrorism_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        video_voice_antispam_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``OssStockTask``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-ossstocktask

        :param buckets: Property buckets: The bucket configuration list of the oss stock scan task. Example:[{"Bucket":"bucket_01","Selected":true,"Prefixes":["img/test_"],"Type":"exclude"}].
        :param start_date: Property startDate: The start time of the file upload time range represents the files uploaded after scanning this time point.Example: 2024-08-01 00:00:00 +0800.
        :param audio_antispam_freeze_config: Property audioAntispamFreezeConfig: Voice auto freeze configuration. Example:{"Type": "suggestion", "Value" : "block" }. The results are frozen according to the suggestion in the speech detection results.
        :param audio_auto_freeze_opened: Property audioAutoFreezeOpened: Audio detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
        :param audio_max_size: Property audioMaxSize: Resource property field representing the maximum size of a single audio. 1~2048MB, the default is 200MB, more than not detected.
        :param audio_opened: Property audioOpened: Oss stock scan task detect audio. true: scan audio, false: do not scan audio.
        :param audio_scan_limit: Property audioScanLimit: The upper limit of voice scan in the oss stock scan task. The default value is 1000/Bucket.
        :param audio_scenes: Property audioScenes: The audio detection scenarios included in the oss stock scan task. Set the value to ["antispam"].
        :param auto_freeze_type: Property autoFreezeType: Automatic freeze type. Value: acl: modify permissions, copy: Move files.
        :param biz_type: Property bizType: Business scenarios used by the oss stock scan task.
        :param callback_id: Property callbackId: The ID of the primary key of the notification message bound to the oss stock scan task.
        :param end_date: Property endDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point. Example: 2024-12-30 00:00:00 +0800
        :param image_ad_freeze_config: Property imageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
        :param image_auto_freeze_opened: Property imageAutoFreezeOpened: Picture detection auto freeze switch. Value: true: auto freeze, false: not auto freeze.
        :param image_live_freeze_config: Property imageLiveFreezeConfig: Picture automatic freezing live scene configuration. Example:{"Type":"suggestion","Value":"block,review"}. The result will be frozen according to the suggestion in the picture detection result.
        :param image_opened: Property imageOpened: Oss stock scan task detect images. true: scan images, false: do not scan images.
        :param image_porn_freeze_config: Property imagePornFreezeConfig: Picture automatic freezing porn scene configuration. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
        :param image_scan_limit: Property imageScanLimit: The upper limit for scanning images in the oss stock scan task. The default value is 10000 images per Bucket.
        :param image_scenes: Property imageScenes: The image moderation scenario included in the oss stock scan task.Valid values: porn: pornography detection terrorism: terrorist content detection ad: ad violation detection live: undesirable scene detection.
        :param image_terrorism_freeze_config: Property imageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
        :param oss_stock_task_name: Property ossStockTaskName: The name of the oss stock scan task.
        :param scan_image_no_file_type: Property scanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes. true: Detect pictures with file names without suffixes, false: Do not detect pictures with file names without suffixes.
        :param video_ad_freeze_config: Property videoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios. Example:{"Type":"suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
        :param video_auto_freeze_opened: Property videoAutoFreezeOpened: Video detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
        :param video_frame_interval: Property videoFrameInterval: Resource attribute field representing the framing frequency. 1~60 seconds/frame, the default is 1 second/frame.
        :param video_live_freeze_config: Property videoLiveFreezeConfig: Video automatic freeze live scene configuration. Example:{"Type" : "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
        :param video_max_frames: Property videoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut. 5 to 20000 frames, the default is 200 frames.
        :param video_max_size: Property videoMaxSize: Resource property field representing the maximum size of a single video. 1~2048MB, the default is 500MB, more than not detected.
        :param video_opened: Property videoOpened: Oss stock scan task detect video. true: scan video, false: do not scan video.
        :param video_porn_freeze_config: Property videoPornFreezeConfig: Video automatic freezing porn scene configuration. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the video detection result.
        :param video_scan_limit: Property videoScanLimit: The upper limit of video scanning in the oss stock scan task. The default value is 1000/Bucket.
        :param video_scenes: Property videoScenes: The video detection scenarios included in the oss stock scan task. porn: pornography detection terrorism: terrorist content detection ad: ad violation detection live: undesirable scene detection antispam: Video voice antispam.
        :param video_terrorism_freeze_config: Property videoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes. Example:{"Type": "suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
        :param video_voice_antispam_freeze_config: Property videoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video. Example:{"Type": "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3123d16dcd0429e509d8bd3584182190e542c4af8821303a042fdcd2bed1ba65)
            check_type(argname="argument buckets", value=buckets, expected_type=type_hints["buckets"])
            check_type(argname="argument start_date", value=start_date, expected_type=type_hints["start_date"])
            check_type(argname="argument audio_antispam_freeze_config", value=audio_antispam_freeze_config, expected_type=type_hints["audio_antispam_freeze_config"])
            check_type(argname="argument audio_auto_freeze_opened", value=audio_auto_freeze_opened, expected_type=type_hints["audio_auto_freeze_opened"])
            check_type(argname="argument audio_max_size", value=audio_max_size, expected_type=type_hints["audio_max_size"])
            check_type(argname="argument audio_opened", value=audio_opened, expected_type=type_hints["audio_opened"])
            check_type(argname="argument audio_scan_limit", value=audio_scan_limit, expected_type=type_hints["audio_scan_limit"])
            check_type(argname="argument audio_scenes", value=audio_scenes, expected_type=type_hints["audio_scenes"])
            check_type(argname="argument auto_freeze_type", value=auto_freeze_type, expected_type=type_hints["auto_freeze_type"])
            check_type(argname="argument biz_type", value=biz_type, expected_type=type_hints["biz_type"])
            check_type(argname="argument callback_id", value=callback_id, expected_type=type_hints["callback_id"])
            check_type(argname="argument end_date", value=end_date, expected_type=type_hints["end_date"])
            check_type(argname="argument image_ad_freeze_config", value=image_ad_freeze_config, expected_type=type_hints["image_ad_freeze_config"])
            check_type(argname="argument image_auto_freeze_opened", value=image_auto_freeze_opened, expected_type=type_hints["image_auto_freeze_opened"])
            check_type(argname="argument image_live_freeze_config", value=image_live_freeze_config, expected_type=type_hints["image_live_freeze_config"])
            check_type(argname="argument image_opened", value=image_opened, expected_type=type_hints["image_opened"])
            check_type(argname="argument image_porn_freeze_config", value=image_porn_freeze_config, expected_type=type_hints["image_porn_freeze_config"])
            check_type(argname="argument image_scan_limit", value=image_scan_limit, expected_type=type_hints["image_scan_limit"])
            check_type(argname="argument image_scenes", value=image_scenes, expected_type=type_hints["image_scenes"])
            check_type(argname="argument image_terrorism_freeze_config", value=image_terrorism_freeze_config, expected_type=type_hints["image_terrorism_freeze_config"])
            check_type(argname="argument oss_stock_task_name", value=oss_stock_task_name, expected_type=type_hints["oss_stock_task_name"])
            check_type(argname="argument scan_image_no_file_type", value=scan_image_no_file_type, expected_type=type_hints["scan_image_no_file_type"])
            check_type(argname="argument video_ad_freeze_config", value=video_ad_freeze_config, expected_type=type_hints["video_ad_freeze_config"])
            check_type(argname="argument video_auto_freeze_opened", value=video_auto_freeze_opened, expected_type=type_hints["video_auto_freeze_opened"])
            check_type(argname="argument video_frame_interval", value=video_frame_interval, expected_type=type_hints["video_frame_interval"])
            check_type(argname="argument video_live_freeze_config", value=video_live_freeze_config, expected_type=type_hints["video_live_freeze_config"])
            check_type(argname="argument video_max_frames", value=video_max_frames, expected_type=type_hints["video_max_frames"])
            check_type(argname="argument video_max_size", value=video_max_size, expected_type=type_hints["video_max_size"])
            check_type(argname="argument video_opened", value=video_opened, expected_type=type_hints["video_opened"])
            check_type(argname="argument video_porn_freeze_config", value=video_porn_freeze_config, expected_type=type_hints["video_porn_freeze_config"])
            check_type(argname="argument video_scan_limit", value=video_scan_limit, expected_type=type_hints["video_scan_limit"])
            check_type(argname="argument video_scenes", value=video_scenes, expected_type=type_hints["video_scenes"])
            check_type(argname="argument video_terrorism_freeze_config", value=video_terrorism_freeze_config, expected_type=type_hints["video_terrorism_freeze_config"])
            check_type(argname="argument video_voice_antispam_freeze_config", value=video_voice_antispam_freeze_config, expected_type=type_hints["video_voice_antispam_freeze_config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "buckets": buckets,
            "start_date": start_date,
        }
        if audio_antispam_freeze_config is not None:
            self._values["audio_antispam_freeze_config"] = audio_antispam_freeze_config
        if audio_auto_freeze_opened is not None:
            self._values["audio_auto_freeze_opened"] = audio_auto_freeze_opened
        if audio_max_size is not None:
            self._values["audio_max_size"] = audio_max_size
        if audio_opened is not None:
            self._values["audio_opened"] = audio_opened
        if audio_scan_limit is not None:
            self._values["audio_scan_limit"] = audio_scan_limit
        if audio_scenes is not None:
            self._values["audio_scenes"] = audio_scenes
        if auto_freeze_type is not None:
            self._values["auto_freeze_type"] = auto_freeze_type
        if biz_type is not None:
            self._values["biz_type"] = biz_type
        if callback_id is not None:
            self._values["callback_id"] = callback_id
        if end_date is not None:
            self._values["end_date"] = end_date
        if image_ad_freeze_config is not None:
            self._values["image_ad_freeze_config"] = image_ad_freeze_config
        if image_auto_freeze_opened is not None:
            self._values["image_auto_freeze_opened"] = image_auto_freeze_opened
        if image_live_freeze_config is not None:
            self._values["image_live_freeze_config"] = image_live_freeze_config
        if image_opened is not None:
            self._values["image_opened"] = image_opened
        if image_porn_freeze_config is not None:
            self._values["image_porn_freeze_config"] = image_porn_freeze_config
        if image_scan_limit is not None:
            self._values["image_scan_limit"] = image_scan_limit
        if image_scenes is not None:
            self._values["image_scenes"] = image_scenes
        if image_terrorism_freeze_config is not None:
            self._values["image_terrorism_freeze_config"] = image_terrorism_freeze_config
        if oss_stock_task_name is not None:
            self._values["oss_stock_task_name"] = oss_stock_task_name
        if scan_image_no_file_type is not None:
            self._values["scan_image_no_file_type"] = scan_image_no_file_type
        if video_ad_freeze_config is not None:
            self._values["video_ad_freeze_config"] = video_ad_freeze_config
        if video_auto_freeze_opened is not None:
            self._values["video_auto_freeze_opened"] = video_auto_freeze_opened
        if video_frame_interval is not None:
            self._values["video_frame_interval"] = video_frame_interval
        if video_live_freeze_config is not None:
            self._values["video_live_freeze_config"] = video_live_freeze_config
        if video_max_frames is not None:
            self._values["video_max_frames"] = video_max_frames
        if video_max_size is not None:
            self._values["video_max_size"] = video_max_size
        if video_opened is not None:
            self._values["video_opened"] = video_opened
        if video_porn_freeze_config is not None:
            self._values["video_porn_freeze_config"] = video_porn_freeze_config
        if video_scan_limit is not None:
            self._values["video_scan_limit"] = video_scan_limit
        if video_scenes is not None:
            self._values["video_scenes"] = video_scenes
        if video_terrorism_freeze_config is not None:
            self._values["video_terrorism_freeze_config"] = video_terrorism_freeze_config
        if video_voice_antispam_freeze_config is not None:
            self._values["video_voice_antispam_freeze_config"] = video_voice_antispam_freeze_config

    @builtins.property
    def buckets(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property buckets: The bucket configuration list of the oss stock scan task.

        Example:[{"Bucket":"bucket_01","Selected":true,"Prefixes":["img/test_"],"Type":"exclude"}].
        '''
        result = self._values.get("buckets")
        assert result is not None, "Required property 'buckets' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def start_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property startDate: The start time of the file upload time range represents the files uploaded after scanning this time point.Example: 2024-08-01 00:00:00 +0800.'''
        result = self._values.get("start_date")
        assert result is not None, "Required property 'start_date' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def audio_antispam_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property audioAntispamFreezeConfig: Voice auto freeze configuration.

        Example:{"Type": "suggestion", "Value" : "block" }. The results are frozen according to the suggestion in the speech detection results.
        '''
        result = self._values.get("audio_antispam_freeze_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def audio_auto_freeze_opened(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property audioAutoFreezeOpened: Audio detection auto freeze switch.

        Value: true: automatically freeze, false: not automatically freeze.
        '''
        result = self._values.get("audio_auto_freeze_opened")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def audio_max_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property audioMaxSize: Resource property field representing the maximum size of a single audio.

        1~2048MB, the default is 200MB, more than not detected.
        '''
        result = self._values.get("audio_max_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def audio_opened(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property audioOpened: Oss stock scan task detect audio.

        true: scan audio, false: do not scan audio.
        '''
        result = self._values.get("audio_opened")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def audio_scan_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property audioScanLimit: The upper limit of voice scan in the oss stock scan task.

        The default value is 1000/Bucket.
        '''
        result = self._values.get("audio_scan_limit")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def audio_scenes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property audioScenes: The audio detection scenarios included in the oss stock scan task.

        Set the value to ["antispam"].
        '''
        result = self._values.get("audio_scenes")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def auto_freeze_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoFreezeType: Automatic freeze type.

        Value: acl: modify permissions, copy: Move files.
        '''
        result = self._values.get("auto_freeze_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def biz_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property bizType: Business scenarios used by the oss stock scan task.'''
        result = self._values.get("biz_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def callback_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property callbackId: The ID of the primary key of the notification message bound to the oss stock scan task.'''
        result = self._values.get("callback_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def end_date(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point.

        Example: 2024-12-30 00:00:00 +0800
        '''
        result = self._values.get("end_date")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_ad_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property imageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes.

        Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
        '''
        result = self._values.get("image_ad_freeze_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def image_auto_freeze_opened(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageAutoFreezeOpened: Picture detection auto freeze switch.

        Value: true: auto freeze, false: not auto freeze.
        '''
        result = self._values.get("image_auto_freeze_opened")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_live_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property imageLiveFreezeConfig: Picture automatic freezing live scene configuration.

        Example:{"Type":"suggestion","Value":"block,review"}. The result will be frozen according to the suggestion in the picture detection result.
        '''
        result = self._values.get("image_live_freeze_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def image_opened(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageOpened: Oss stock scan task detect images.

        true: scan images, false: do not scan images.
        '''
        result = self._values.get("image_opened")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_porn_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property imagePornFreezeConfig: Picture automatic freezing porn scene configuration.

        Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
        '''
        result = self._values.get("image_porn_freeze_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def image_scan_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageScanLimit: The upper limit for scanning images in the oss stock scan task.

        The default value is 10000 images per Bucket.
        '''
        result = self._values.get("image_scan_limit")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_scenes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property imageScenes: The image moderation scenario included in the oss stock scan task.Valid values: porn: pornography detection terrorism: terrorist content detection ad: ad violation detection live: undesirable scene detection.'''
        result = self._values.get("image_scenes")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def image_terrorism_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property imageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes.

        Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
        '''
        result = self._values.get("image_terrorism_freeze_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def oss_stock_task_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ossStockTaskName: The name of the oss stock scan task.'''
        result = self._values.get("oss_stock_task_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scan_image_no_file_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes.

        true: Detect pictures with file names without suffixes, false: Do not detect pictures with file names without suffixes.
        '''
        result = self._values.get("scan_image_no_file_type")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def video_ad_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property videoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios.

        Example:{"Type":"suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
        '''
        result = self._values.get("video_ad_freeze_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def video_auto_freeze_opened(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property videoAutoFreezeOpened: Video detection auto freeze switch.

        Value: true: automatically freeze, false: not automatically freeze.
        '''
        result = self._values.get("video_auto_freeze_opened")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def video_frame_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property videoFrameInterval: Resource attribute field representing the framing frequency.

        1~60 seconds/frame, the default is 1 second/frame.
        '''
        result = self._values.get("video_frame_interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def video_live_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property videoLiveFreezeConfig: Video automatic freeze live scene configuration.

        Example:{"Type" : "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
        '''
        result = self._values.get("video_live_freeze_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def video_max_frames(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property videoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut.

        5 to 20000 frames, the default is 200 frames.
        '''
        result = self._values.get("video_max_frames")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def video_max_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property videoMaxSize: Resource property field representing the maximum size of a single video.

        1~2048MB, the default is 500MB, more than not detected.
        '''
        result = self._values.get("video_max_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def video_opened(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property videoOpened: Oss stock scan task detect video.

        true: scan video, false: do not scan video.
        '''
        result = self._values.get("video_opened")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def video_porn_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property videoPornFreezeConfig: Video automatic freezing porn scene configuration.

        Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the video detection result.
        '''
        result = self._values.get("video_porn_freeze_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def video_scan_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property videoScanLimit: The upper limit of video scanning in the oss stock scan task.

        The default value is 1000/Bucket.
        '''
        result = self._values.get("video_scan_limit")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def video_scenes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property videoScenes: The video detection scenarios included in the oss stock scan task.

        porn: pornography detection
        terrorism: terrorist content detection
        ad: ad violation detection
        live: undesirable scene detection
        antispam: Video voice antispam.
        '''
        result = self._values.get("video_scenes")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def video_terrorism_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property videoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes.

        Example:{"Type": "suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
        '''
        result = self._values.get("video_terrorism_freeze_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def video_voice_antispam_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property videoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video.

        Example:{"Type": "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
        '''
        result = self._values.get("video_voice_antispam_freeze_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "OssStockTaskProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAuditCallback(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-aligreen.RosAuditCallback",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::Aligreen::AuditCallback``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AuditCallback`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-auditcallback
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAuditCallbackProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9e68871e4a20c03c388e7907115ace5ba529a89f3cbbe60e90822429ae67990)
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
            type_hints = typing.get_type_hints(_typecheckingstub__60354265e4e52c638144c697f42e3a9d442d4615f8ad047bbfcb2437c7690908)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAuditCallbackName")
    def attr_audit_callback_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AuditCallbackName: The AuditCallback name defined by the customer.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAuditCallbackName"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackSuggestions")
    def attr_callback_suggestions(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CallbackSuggestions: List of audit results supported by message notification.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCallbackSuggestions"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackTypes")
    def attr_callback_types(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CallbackTypes: A list of Callback types.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCallbackTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrCryptType")
    def attr_crypt_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCryptType"))

    @builtins.property
    @jsii.member(jsii_name="attrUrl")
    def attr_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Url: The detection result will be called back to the url.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUrl"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="auditCallbackName")
    def audit_callback_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: auditCallbackName: The AuditCallback name defined by the customer. It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "auditCallbackName"))

    @audit_callback_name.setter
    def audit_callback_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c82ab9c56cf583b86822e0c2df9143cbabb84a06f30714ad2df8a80f821b4a58)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "auditCallbackName", value)

    @builtins.property
    @jsii.member(jsii_name="callbackSuggestions")
    def callback_suggestions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: callbackSuggestions: List of audit results supported by message notification. Value: block: confirmed violation, review: Suspected violation, pass: normal.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "callbackSuggestions"))

    @callback_suggestions.setter
    def callback_suggestions(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__95f0469512c983da7162b9f46fe86f2904507f13921c5b478fa73a6326222ab5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "callbackSuggestions", value)

    @builtins.property
    @jsii.member(jsii_name="callbackTypes")
    def callback_types(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: callbackTypes: A list of Callback types. Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "callbackTypes"))

    @callback_types.setter
    def callback_types(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2bad402b59de825e36c500ca1fcc4bff75904417bf53d2d7e426b0657012a6e4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "callbackTypes", value)

    @builtins.property
    @jsii.member(jsii_name="cryptType")
    def crypt_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service. The value is SHA256:SHA256 encryption algorithm and SM3: SM3 encryption algorithm.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cryptType"))

    @crypt_type.setter
    def crypt_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__008973bd163b47cdd090f48ab254901b6d276191fcb4c7251adb374ac4592f63)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cryptType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__efdad9598a0d2e8dac522e46ac8d8cc2c6e144e5a414a94b538d28d3503ef6cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="url")
    def url(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: url: The detection result will be called back to the url.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "url"))

    @url.setter
    def url(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d649abafe55f0e59436e167a3838d70e82c0cb8c0b2a928b6e05481e23ef9969)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "url", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-aligreen.RosAuditCallbackProps",
    jsii_struct_bases=[],
    name_mapping={
        "audit_callback_name": "auditCallbackName",
        "callback_suggestions": "callbackSuggestions",
        "callback_types": "callbackTypes",
        "crypt_type": "cryptType",
        "url": "url",
    },
)
class RosAuditCallbackProps:
    def __init__(
        self,
        *,
        audit_callback_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        callback_suggestions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        callback_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        crypt_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosAuditCallback``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-auditcallback

        :param audit_callback_name: 
        :param callback_suggestions: 
        :param callback_types: 
        :param crypt_type: 
        :param url: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__85083becb6409e095cbe29c5f5392e6e337006e24060ba4ccdeee2b4dc7bcbf0)
            check_type(argname="argument audit_callback_name", value=audit_callback_name, expected_type=type_hints["audit_callback_name"])
            check_type(argname="argument callback_suggestions", value=callback_suggestions, expected_type=type_hints["callback_suggestions"])
            check_type(argname="argument callback_types", value=callback_types, expected_type=type_hints["callback_types"])
            check_type(argname="argument crypt_type", value=crypt_type, expected_type=type_hints["crypt_type"])
            check_type(argname="argument url", value=url, expected_type=type_hints["url"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "audit_callback_name": audit_callback_name,
            "callback_suggestions": callback_suggestions,
            "callback_types": callback_types,
            "crypt_type": crypt_type,
            "url": url,
        }

    @builtins.property
    def audit_callback_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: auditCallbackName: The AuditCallback name defined by the customer. It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
        '''
        result = self._values.get("audit_callback_name")
        assert result is not None, "Required property 'audit_callback_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def callback_suggestions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: callbackSuggestions: List of audit results supported by message notification. Value: block: confirmed violation, review: Suspected violation, pass: normal.
        '''
        result = self._values.get("callback_suggestions")
        assert result is not None, "Required property 'callback_suggestions' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def callback_types(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: callbackTypes: A list of Callback types. Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
        '''
        result = self._values.get("callback_types")
        assert result is not None, "Required property 'callback_types' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def crypt_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service. The value is SHA256:SHA256 encryption algorithm and SM3: SM3 encryption algorithm.
        '''
        result = self._values.get("crypt_type")
        assert result is not None, "Required property 'crypt_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def url(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: url: The detection result will be called back to the url.
        '''
        result = self._values.get("url")
        assert result is not None, "Required property 'url' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAuditCallbackProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBizType(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-aligreen.RosBizType",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::Aligreen::BizType``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``BizType`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-biztype
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBizTypeProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50d24836a49837f21b0bc5b3ff02e4de768f5dd592b4fa68ea6fc5cd34c33faa)
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
            type_hints = typing.get_type_hints(_typecheckingstub__cd6e8d40b92dc7fed9d6fed2995c1f80327e5d44ecd8790c5358f1055ff844f7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBizTypeName")
    def attr_biz_type_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BizTypeName: The name of the business scenario defined by the customer.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBizTypeName"))

    @builtins.property
    @jsii.member(jsii_name="attrCiteTemplate")
    def attr_cite_template(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CiteTemplate: Specifies whether to import the configuration of an industry template. Default value: false.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCiteTemplate"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the business scenario defined by the customer.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIndustryInfo")
    def attr_industry_info(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IndustryInfo: The industry classification.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIndustryInfo"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="bizTypeName")
    def biz_type_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bizTypeName: The name of the business scenario defined by the customer. It can contain no more than 32 characters in English, numbers, and underscores.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bizTypeName"))

    @biz_type_name.setter
    def biz_type_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a74eb585412a26e1abbef201c1527821dc4f4667f9f3ccb4418b0770ca0a0e39)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bizTypeName", value)

    @builtins.property
    @jsii.member(jsii_name="citeTemplate")
    def cite_template(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        citeTemplate: Specifies whether to import the configuration of an industry template. Default value: false. Valid values:
        true: imports the configuration of an industry template.
        false: does not import the configuration of an industry template. If the value is true, you must specify the industryInfo parameter.
        '''
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "citeTemplate"))

    @cite_template.setter
    def cite_template(
        self,
        value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__967338568e48c25a477bf71ba4eba244c74bfaac21959f44276c4ac2f26d6322)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "citeTemplate", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b78c442238516595ba8bfc48251ec76630df5ee45ddbc9c8b37a08ac0fe8f8d0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="bizTypeImport")
    def biz_type_import(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bizTypeImport: The name of the existing business scenario that was imported from when the business scenario was created.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "bizTypeImport"))

    @biz_type_import.setter
    def biz_type_import(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec3de076615dc6be4efedf8edd79e099c66d21fbf1b4d9c0122185109439cabd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bizTypeImport", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the business scenario defined by the customer, which is a combination of Chinese and English, numbers, and underscores, and cannot exceed 32 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e19fd63d8f8b7ff7dd61a8cf1236e6dd7f6563614e3c5484295231e76d52e531)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="industryInfo")
    def industry_info(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: industryInfo: The industry classification. For specific types see CreateBizType</a>.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "industryInfo"))

    @industry_info.setter
    def industry_info(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a4fc87c9013265e661ae9f50fac0bb7ccd94bcb29bbfc94c84f553e8ca89c43)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "industryInfo", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-aligreen.RosBizTypeProps",
    jsii_struct_bases=[],
    name_mapping={
        "biz_type_name": "bizTypeName",
        "cite_template": "citeTemplate",
        "biz_type_import": "bizTypeImport",
        "description": "description",
        "industry_info": "industryInfo",
    },
)
class RosBizTypeProps:
    def __init__(
        self,
        *,
        biz_type_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cite_template: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        biz_type_import: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        industry_info: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosBizType``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-biztype

        :param biz_type_name: 
        :param cite_template: 
        :param biz_type_import: 
        :param description: 
        :param industry_info: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c43de71892a8fdfbc0c5bcd647fbd02f0efe67742c9ee4e7db05e5f6ec6e3db7)
            check_type(argname="argument biz_type_name", value=biz_type_name, expected_type=type_hints["biz_type_name"])
            check_type(argname="argument cite_template", value=cite_template, expected_type=type_hints["cite_template"])
            check_type(argname="argument biz_type_import", value=biz_type_import, expected_type=type_hints["biz_type_import"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument industry_info", value=industry_info, expected_type=type_hints["industry_info"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "biz_type_name": biz_type_name,
            "cite_template": cite_template,
        }
        if biz_type_import is not None:
            self._values["biz_type_import"] = biz_type_import
        if description is not None:
            self._values["description"] = description
        if industry_info is not None:
            self._values["industry_info"] = industry_info

    @builtins.property
    def biz_type_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bizTypeName: The name of the business scenario defined by the customer. It can contain no more than 32 characters in English, numbers, and underscores.
        '''
        result = self._values.get("biz_type_name")
        assert result is not None, "Required property 'biz_type_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cite_template(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        citeTemplate: Specifies whether to import the configuration of an industry template. Default value: false. Valid values:
        true: imports the configuration of an industry template.
        false: does not import the configuration of an industry template. If the value is true, you must specify the industryInfo parameter.
        '''
        result = self._values.get("cite_template")
        assert result is not None, "Required property 'cite_template' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def biz_type_import(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bizTypeImport: The name of the existing business scenario that was imported from when the business scenario was created.
        '''
        result = self._values.get("biz_type_import")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the business scenario defined by the customer, which is a combination of Chinese and English, numbers, and underscores, and cannot exceed 32 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def industry_info(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: industryInfo: The industry classification. For specific types see CreateBizType</a>.
        '''
        result = self._values.get("industry_info")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBizTypeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCallback(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-aligreen.RosCallback",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::Aligreen::Callback``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Callback`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-callback
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCallbackProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50073db29001bfe0f3c99a49daea860c7bb1efad11004abcc5ccceb268009b3f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__9936919e00e3571b461fe2697a1f8ca918482fb56924f62bc4c0c7af53a84ad2)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackId")
    def attr_callback_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CallbackId: The ID of the primary key of the Callback.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCallbackId"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackName")
    def attr_callback_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CallbackName: The Callback name defined by the customer.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCallbackName"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackSuggestions")
    def attr_callback_suggestions(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CallbackSuggestions: List of audit results supported by message notification.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCallbackSuggestions"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackTypes")
    def attr_callback_types(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CallbackTypes: The list of Callback types.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCallbackTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackUrl")
    def attr_callback_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CallbackUrl: The detection result will be called back to the url.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCallbackUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrCryptType")
    def attr_crypt_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCryptType"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="callbackName")
    def callback_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: callbackName: The Callback name defined by the customer. It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "callbackName"))

    @callback_name.setter
    def callback_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fafc255ff99e5aaaadabb50e80e110842167f032a221d915f4640c5134f1822a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "callbackName", value)

    @builtins.property
    @jsii.member(jsii_name="callbackSuggestions")
    def callback_suggestions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: callbackSuggestions: List of audit results supported by message notification. Value: block: confirmed violation, review: Suspected violation, pass: normal.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "callbackSuggestions"))

    @callback_suggestions.setter
    def callback_suggestions(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4945cdd2bab50ff170b05224f616c7104e7e60776ba816ebd5cbd5e64e255160)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "callbackSuggestions", value)

    @builtins.property
    @jsii.member(jsii_name="callbackTypes")
    def callback_types(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: callbackTypes: A list of Callback types. Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "callbackTypes"))

    @callback_types.setter
    def callback_types(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6e4e10db03bdda194b956995439adfde775f88d5fe59487a76b39c2ae497f26)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "callbackTypes", value)

    @builtins.property
    @jsii.member(jsii_name="callbackUrl")
    def callback_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: callbackUrl: The detection result will be called back to the url.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "callbackUrl"))

    @callback_url.setter
    def callback_url(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b09ae9d2e859bd1680acc899c1b2e74f3511184ab553e3b0d5398464095131a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "callbackUrl", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57bb0f972d832c2264b0d86679dcdc3a3e1bc346c00395bf86a8734f19946e04)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="cryptType")
    def crypt_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service. Value: 0:SHA256,1: SM3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cryptType"))

    @crypt_type.setter
    def crypt_type(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca749c7700d6c3cb4eaba5da145ae031fd31ccacbf95b36aba0af06fa26caea5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cryptType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-aligreen.RosCallbackProps",
    jsii_struct_bases=[],
    name_mapping={
        "callback_name": "callbackName",
        "callback_suggestions": "callbackSuggestions",
        "callback_types": "callbackTypes",
        "callback_url": "callbackUrl",
        "crypt_type": "cryptType",
    },
)
class RosCallbackProps:
    def __init__(
        self,
        *,
        callback_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        callback_suggestions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        callback_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        callback_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        crypt_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosCallback``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-callback

        :param callback_name: 
        :param callback_suggestions: 
        :param callback_types: 
        :param callback_url: 
        :param crypt_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36d79990ab9731a601c6022fdff4430b57f80cf205ec79b7a513a6507afd0d1e)
            check_type(argname="argument callback_name", value=callback_name, expected_type=type_hints["callback_name"])
            check_type(argname="argument callback_suggestions", value=callback_suggestions, expected_type=type_hints["callback_suggestions"])
            check_type(argname="argument callback_types", value=callback_types, expected_type=type_hints["callback_types"])
            check_type(argname="argument callback_url", value=callback_url, expected_type=type_hints["callback_url"])
            check_type(argname="argument crypt_type", value=crypt_type, expected_type=type_hints["crypt_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "callback_name": callback_name,
            "callback_suggestions": callback_suggestions,
            "callback_types": callback_types,
            "callback_url": callback_url,
        }
        if crypt_type is not None:
            self._values["crypt_type"] = crypt_type

    @builtins.property
    def callback_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: callbackName: The Callback name defined by the customer. It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
        '''
        result = self._values.get("callback_name")
        assert result is not None, "Required property 'callback_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def callback_suggestions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: callbackSuggestions: List of audit results supported by message notification. Value: block: confirmed violation, review: Suspected violation, pass: normal.
        '''
        result = self._values.get("callback_suggestions")
        assert result is not None, "Required property 'callback_suggestions' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def callback_types(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: callbackTypes: A list of Callback types. Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
        '''
        result = self._values.get("callback_types")
        assert result is not None, "Required property 'callback_types' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def callback_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: callbackUrl: The detection result will be called back to the url.
        '''
        result = self._values.get("callback_url")
        assert result is not None, "Required property 'callback_url' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def crypt_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service. Value: 0:SHA256,1: SM3.
        '''
        result = self._values.get("crypt_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCallbackProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosImageLib(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-aligreen.RosImageLib",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::Aligreen::ImageLib``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ImageLib`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-imagelib
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosImageLibProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73d63ffe2db3bd413e9b8cc6c67fea247c9a5e5fa289e4d8b420b4991018183f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ca85c9b58605e35e9b2cb5878fce35315c333a8c0bcaffd39354c2e076e98744)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBizTypes")
    def attr_biz_types(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BizTypes: List of business scenarios.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBizTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Category: The category of the image library.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrEnable")
    def attr_enable(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Enable: Specifies whether to enable the image library.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrImageLibId")
    def attr_image_lib_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageLibId: The ID of the primary key of the image library.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageLibId"))

    @builtins.property
    @jsii.member(jsii_name="attrImageLibName")
    def attr_image_lib_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageLibName: The name of the image library defined by the customer.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageLibName"))

    @builtins.property
    @jsii.member(jsii_name="attrScene")
    def attr_scene(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Scene: The moderation scenario to which the custom image library applies.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScene"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="category")
    def category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: category: The category of the image library. Valid values: BLACK: a blacklist, WHITE: a whitelist, REVIEW: a review list.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "category"))

    @category.setter
    def category(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a65841f2535c4636a0b4ccae2a01df8516e9ee940de02d0492ad72b129f4d394)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "category", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0523e5f549cee7443630572b72ce684a00253cc1bfa083c6d6d5ad6a1c364a1a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="imageLibName")
    def image_lib_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageLibName: The name of the image library defined by the customer. It can contain no more than 20 characters in Chinese, English, and underscore (_).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "imageLibName"))

    @image_lib_name.setter
    def image_lib_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f2308cddc72eae5969adc2664a07bc332e197364398d4bca824b4eb6c15e766)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageLibName", value)

    @builtins.property
    @jsii.member(jsii_name="scene")
    def scene(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: scene: The moderation scenario to which the custom image library applies. Valid values: PORN: pornography detection, AD: ad detection, ILLEGAL: terrorist content detection.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "scene"))

    @scene.setter
    def scene(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20577227a091a205f22b868bc2ce1a0740a45ea3009acd93dcd9702a247e28b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scene", value)

    @builtins.property
    @jsii.member(jsii_name="bizTypes")
    def biz_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: bizTypes: List of business scenarios. For example: ["bizTypeA", "bizTypeB", "bizTypeC"].
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "bizTypes"))

    @biz_types.setter
    def biz_types(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6d8b9192c1502b5a565fda89e018c86f04c18abb65aa294fb17e8b8f2211dd9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bizTypes", value)

    @builtins.property
    @jsii.member(jsii_name="enable")
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enable: Specifies whether to enable the image library. Valid values:
        true: Enable the image library. This is the default value. false: Disable the image library.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enable"))

    @enable.setter
    def enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae57b6ffa055490d7ae9d0ad965b0b35b86d0316bcbf340dc02196fb432f0994)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enable", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-aligreen.RosImageLibProps",
    jsii_struct_bases=[],
    name_mapping={
        "category": "category",
        "image_lib_name": "imageLibName",
        "scene": "scene",
        "biz_types": "bizTypes",
        "enable": "enable",
    },
)
class RosImageLibProps:
    def __init__(
        self,
        *,
        category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        image_lib_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        scene: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        biz_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosImageLib``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-imagelib

        :param category: 
        :param image_lib_name: 
        :param scene: 
        :param biz_types: 
        :param enable: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f33fcd16a60e938866eab1158f69c82a010bc41f69998bd753a9f8fa9274d6d)
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument image_lib_name", value=image_lib_name, expected_type=type_hints["image_lib_name"])
            check_type(argname="argument scene", value=scene, expected_type=type_hints["scene"])
            check_type(argname="argument biz_types", value=biz_types, expected_type=type_hints["biz_types"])
            check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "category": category,
            "image_lib_name": image_lib_name,
            "scene": scene,
        }
        if biz_types is not None:
            self._values["biz_types"] = biz_types
        if enable is not None:
            self._values["enable"] = enable

    @builtins.property
    def category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: category: The category of the image library. Valid values: BLACK: a blacklist, WHITE: a whitelist, REVIEW: a review list.
        '''
        result = self._values.get("category")
        assert result is not None, "Required property 'category' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def image_lib_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageLibName: The name of the image library defined by the customer. It can contain no more than 20 characters in Chinese, English, and underscore (_).
        '''
        result = self._values.get("image_lib_name")
        assert result is not None, "Required property 'image_lib_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def scene(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: scene: The moderation scenario to which the custom image library applies. Valid values: PORN: pornography detection, AD: ad detection, ILLEGAL: terrorist content detection.
        '''
        result = self._values.get("scene")
        assert result is not None, "Required property 'scene' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def biz_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: bizTypes: List of business scenarios. For example: ["bizTypeA", "bizTypeB", "bizTypeC"].
        '''
        result = self._values.get("biz_types")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enable: Specifies whether to enable the image library. Valid values:
        true: Enable the image library. This is the default value. false: Disable the image library.
        '''
        result = self._values.get("enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosImageLibProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosKeywordLib(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-aligreen.RosKeywordLib",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::Aligreen::KeywordLib``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``KeywordLib`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-keywordlib
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosKeywordLibProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f26b783bdd356f01c1b4f43602fe5eef4f000e4d0eedf505fe368d4f93a9b71)
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
            type_hints = typing.get_type_hints(_typecheckingstub__50f09c09d481e4b2d0d838954f092da31688f47d8aa1be93ef1927ebf53138b9)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBizTypes")
    def attr_biz_types(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BizTypes: The business scenario.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBizTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Category: The category of the text library.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrEnable")
    def attr_enable(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Enable: Specifies whether to enable text library.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrKeywordLibId")
    def attr_keyword_lib_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: KeywordLibId: The ID of the primary key of the keyword library.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeywordLibId"))

    @builtins.property
    @jsii.member(jsii_name="attrKeywordLibName")
    def attr_keyword_lib_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: KeywordLibName: The name of the keyword library defined by the customer.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeywordLibName"))

    @builtins.property
    @jsii.member(jsii_name="attrLanguage")
    def attr_language(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Language: Language used by the text Library.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLanguage"))

    @builtins.property
    @jsii.member(jsii_name="attrLibType")
    def attr_lib_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LibType: The category of the text library in each moderation scenario.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLibType"))

    @builtins.property
    @jsii.member(jsii_name="attrMatchMode")
    def attr_match_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MatchMode: The matching method.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMatchMode"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceType: The moderation scenario to which the text library applies.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceType"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__7a2c3a6c6129468b51ce9be65465718584152c8d48070d3c6a941846683765be)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="keywordLibName")
    def keyword_lib_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: keywordLibName: The name of the keyword library defined by the customer. It can contain no more than 20 characters in Chinese, English, and underscore (_).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "keywordLibName"))

    @keyword_lib_name.setter
    def keyword_lib_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5039097dac66d31dfcee4300ed642db5ce5d5559434afa01711f06f6d1a69906)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keywordLibName", value)

    @builtins.property
    @jsii.member(jsii_name="resourceType")
    def resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: resourceType: The moderation scenario to which the text library applies. Valid values:TEXT: text anti-spam、IMAGE: ad violation detection、VOICE: audio anti-spam.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "resourceType"))

    @resource_type.setter
    def resource_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ebc3a442b68d3f6cd3b055a706fe4d97f9c21daf3e08bb6e4948aec96b852dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceType", value)

    @builtins.property
    @jsii.member(jsii_name="bizTypes")
    def biz_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: bizTypes: The business scenario. Example:["bizTypeA","bizTypeB"].
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "bizTypes"))

    @biz_types.setter
    def biz_types(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__039566a01f57d86fbeadcc80f2d9159ef36a9b07607be90244a26a681daad314)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bizTypes", value)

    @builtins.property
    @jsii.member(jsii_name="category")
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        category: The category of the text library. Valid values:
        BLACK: a blacklist. WHITE: a whitelist. REVIEW: a review list.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "category"))

    @category.setter
    def category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__077ed3b0672675fdbc034b2ff919a36eb862fc2899823b9aa65226af5aea6737)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "category", value)

    @builtins.property
    @jsii.member(jsii_name="enable")
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enable: Specifies whether to enable text library.true: Enable the text library. This is the default value.false: Disable the text library.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enable"))

    @enable.setter
    def enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__425a50134ce17f6669c9f32e7ec188dce44dcded27bdd54e72cdacb3147bcbf9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enable", value)

    @builtins.property
    @jsii.member(jsii_name="language")
    def language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: language: Language used by the text Library. Example: zh:Chinese、en:English
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "language"))

    @language.setter
    def language(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9425282749317b1eb1c972029b51b9230c837143eb08eb00cd0cb8f4c76d1679)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "language", value)

    @builtins.property
    @jsii.member(jsii_name="libType")
    def lib_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: libType: The category of the text library in each moderation scenario. Valid values: textKeyword: a text library against which terms in text are matched. similarText: a text library against which text patterns are matched. voiceText: a text library against which terms converted from audio are matched.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "libType"))

    @lib_type.setter
    def lib_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e2fba87357c9422d9f1c58485e6b5df30348678905421b45f55950cd2e5e83e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "libType", value)

    @builtins.property
    @jsii.member(jsii_name="matchMode")
    def match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: matchMode: The matching method. Valid values:fuzzy: fuzzy match precise: exact match.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "matchMode"))

    @match_mode.setter
    def match_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d252e58e1cfb5f7ce6c5311eade128092c7c1313be0f359cdce0d8649f7f7979)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "matchMode", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-aligreen.RosKeywordLibProps",
    jsii_struct_bases=[],
    name_mapping={
        "keyword_lib_name": "keywordLibName",
        "resource_type": "resourceType",
        "biz_types": "bizTypes",
        "category": "category",
        "enable": "enable",
        "language": "language",
        "lib_type": "libType",
        "match_mode": "matchMode",
    },
)
class RosKeywordLibProps:
    def __init__(
        self,
        *,
        keyword_lib_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        biz_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lib_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        match_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosKeywordLib``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-keywordlib

        :param keyword_lib_name: 
        :param resource_type: 
        :param biz_types: 
        :param category: 
        :param enable: 
        :param language: 
        :param lib_type: 
        :param match_mode: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55d227ce6151a4687a8e8bd139ca9d966a5e687b45d10dfa4fe5a2187bb4946c)
            check_type(argname="argument keyword_lib_name", value=keyword_lib_name, expected_type=type_hints["keyword_lib_name"])
            check_type(argname="argument resource_type", value=resource_type, expected_type=type_hints["resource_type"])
            check_type(argname="argument biz_types", value=biz_types, expected_type=type_hints["biz_types"])
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
            check_type(argname="argument language", value=language, expected_type=type_hints["language"])
            check_type(argname="argument lib_type", value=lib_type, expected_type=type_hints["lib_type"])
            check_type(argname="argument match_mode", value=match_mode, expected_type=type_hints["match_mode"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "keyword_lib_name": keyword_lib_name,
            "resource_type": resource_type,
        }
        if biz_types is not None:
            self._values["biz_types"] = biz_types
        if category is not None:
            self._values["category"] = category
        if enable is not None:
            self._values["enable"] = enable
        if language is not None:
            self._values["language"] = language
        if lib_type is not None:
            self._values["lib_type"] = lib_type
        if match_mode is not None:
            self._values["match_mode"] = match_mode

    @builtins.property
    def keyword_lib_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: keywordLibName: The name of the keyword library defined by the customer. It can contain no more than 20 characters in Chinese, English, and underscore (_).
        '''
        result = self._values.get("keyword_lib_name")
        assert result is not None, "Required property 'keyword_lib_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: resourceType: The moderation scenario to which the text library applies. Valid values:TEXT: text anti-spam、IMAGE: ad violation detection、VOICE: audio anti-spam.
        '''
        result = self._values.get("resource_type")
        assert result is not None, "Required property 'resource_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def biz_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: bizTypes: The business scenario. Example:["bizTypeA","bizTypeB"].
        '''
        result = self._values.get("biz_types")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        category: The category of the text library. Valid values:
        BLACK: a blacklist. WHITE: a whitelist. REVIEW: a review list.
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enable: Specifies whether to enable text library.true: Enable the text library. This is the default value.false: Disable the text library.
        '''
        result = self._values.get("enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: language: Language used by the text Library. Example: zh:Chinese、en:English
        '''
        result = self._values.get("language")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lib_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: libType: The category of the text library in each moderation scenario. Valid values: textKeyword: a text library against which terms in text are matched. similarText: a text library against which text patterns are matched. voiceText: a text library against which terms converted from audio are matched.
        '''
        result = self._values.get("lib_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: matchMode: The matching method. Valid values:fuzzy: fuzzy match precise: exact match.
        '''
        result = self._values.get("match_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosKeywordLibProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosOssStockTask(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-aligreen.RosOssStockTask",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::Aligreen::OssStockTask``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``OssStockTask`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-ossstocktask
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosOssStockTaskProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a3e7c67191823fa22ed24ce17bd5a2515111967f5c31f9aed35593044ab9fba4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__1f17ebc6c901b4d9779e252d99ce0db2c5dd14581a5a4d9a625bd0397e4b2fde)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAudioAntispamFreezeConfig")
    def attr_audio_antispam_freeze_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AudioAntispamFreezeConfig: Voice auto freeze configuration.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAudioAntispamFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrAudioAutoFreezeOpened")
    def attr_audio_auto_freeze_opened(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AudioAutoFreezeOpened: Audio detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAudioAutoFreezeOpened"))

    @builtins.property
    @jsii.member(jsii_name="attrAudioMaxSize")
    def attr_audio_max_size(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AudioMaxSize: Resource property field representing the maximum size of a single audio.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAudioMaxSize"))

    @builtins.property
    @jsii.member(jsii_name="attrAudioOpened")
    def attr_audio_opened(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AudioOpened: oss stock scan task detect audio.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAudioOpened"))

    @builtins.property
    @jsii.member(jsii_name="attrAudioScanLimit")
    def attr_audio_scan_limit(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AudioScanLimit: The upper limit of voice scan in the oss stock scan task. The default value is 1000/Bucket.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAudioScanLimit"))

    @builtins.property
    @jsii.member(jsii_name="attrAudioScenes")
    def attr_audio_scenes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AudioScenes: The audio detection scenarios included in the oss stock scan task. Set the value to antispam.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAudioScenes"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoFreezeType")
    def attr_auto_freeze_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AutoFreezeType: Automatic freeze type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoFreezeType"))

    @builtins.property
    @jsii.member(jsii_name="attrBizType")
    def attr_biz_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BizType: Business scenarios used by the oss stock scan task.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBizType"))

    @builtins.property
    @jsii.member(jsii_name="attrBuckets")
    def attr_buckets(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Buckets: The bucket configuration list of the oss stock scan task.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBuckets"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackId")
    def attr_callback_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CallbackId: The ID of the primary key of the notification message bound to the oss stock scan task.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCallbackId"))

    @builtins.property
    @jsii.member(jsii_name="attrEndDate")
    def attr_end_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EndDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndDate"))

    @builtins.property
    @jsii.member(jsii_name="attrImageAdFreezeConfig")
    def attr_image_ad_freeze_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageAdFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrImageAutoFreezeOpened")
    def attr_image_auto_freeze_opened(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageAutoFreezeOpened: Picture detection auto freeze switch. Value: true: auto freeze, false: not auto freeze.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageAutoFreezeOpened"))

    @builtins.property
    @jsii.member(jsii_name="attrImageLiveFreezeConfig")
    def attr_image_live_freeze_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageLiveFreezeConfig: Picture automatic freezing live scene configuration.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageLiveFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrImageOpened")
    def attr_image_opened(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageOpened: oss stock scan task detect images.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageOpened"))

    @builtins.property
    @jsii.member(jsii_name="attrImagePornFreezeConfig")
    def attr_image_porn_freeze_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImagePornFreezeConfig: Picture automatic freezing porn scene configuration.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImagePornFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrImageScanLimit")
    def attr_image_scan_limit(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageScanLimit: The upper limit for scanning images in the oss stock scan task.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageScanLimit"))

    @builtins.property
    @jsii.member(jsii_name="attrImageScenes")
    def attr_image_scenes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageScenes: The image moderation scenario included in the oss stock scan task.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageScenes"))

    @builtins.property
    @jsii.member(jsii_name="attrImageTerrorismFreezeConfig")
    def attr_image_terrorism_freeze_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageTerrorismFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrScanImageNoFileType")
    def attr_scan_image_no_file_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScanImageNoFileType"))

    @builtins.property
    @jsii.member(jsii_name="attrStartDate")
    def attr_start_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StartDate: The start time of the file upload time range represents the files uploaded after scanning this time point.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStartDate"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoAdFreezeConfig")
    def attr_video_ad_freeze_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VideoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVideoAdFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoAutoFreezeOpened")
    def attr_video_auto_freeze_opened(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VideoAutoFreezeOpened: Video detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVideoAutoFreezeOpened"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoFrameInterval")
    def attr_video_frame_interval(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VideoFrameInterval: Resource attribute field representing the framing frequency.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVideoFrameInterval"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoLiveFreezeConfig")
    def attr_video_live_freeze_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VideoLiveFreezeConfig: Video automatic freeze live scene configuration.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVideoLiveFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoMaxFrames")
    def attr_video_max_frames(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VideoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVideoMaxFrames"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoMaxSize")
    def attr_video_max_size(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VideoMaxSize: Resource property field representing the maximum size of a single video.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVideoMaxSize"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoOpened")
    def attr_video_opened(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VideoOpened: oss stock scan task detect video.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVideoOpened"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoPornFreezeConfig")
    def attr_video_porn_freeze_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VideoPornFreezeConfig: Video automatic freezing porn scene configuration.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVideoPornFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoScanLimit")
    def attr_video_scan_limit(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VideoScanLimit: The upper limit of video scanning in the oss stock scan task. The default value is 1000/Bucket.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVideoScanLimit"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoScenes")
    def attr_video_scenes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VideoScenes: The video detection scenarios included in the oss stock scan task.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVideoScenes"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoTerrorismFreezeConfig")
    def attr_video_terrorism_freeze_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VideoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVideoTerrorismFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrVideoVoiceAntispamFreezeConfig")
    def attr_video_voice_antispam_freeze_config(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VideoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVideoVoiceAntispamFreezeConfig"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="buckets")
    def buckets(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: buckets: The bucket configuration list of the oss stock scan task. Example:[{"Bucket":"bucket_01","Selected":true,"Prefixes":["img/test_"],"Type":"exclude"}].
        '''
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "buckets"))

    @buckets.setter
    def buckets(
        self,
        value: typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78e2ee81f85343bc65adc358dbfad2f9c7bc86e419c59053614e8b6307779143)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "buckets", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73ebf2077e99fb44c17482e5ca8227985450db14d13bd70c36753d80304ff310)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="startDate")
    def start_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: startDate: The start time of the file upload time range represents the files uploaded after scanning this time point.Example: 2024-08-01 00:00:00 +0800
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "startDate"))

    @start_date.setter
    def start_date(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__feb24369ac67aca4f27a879065e9e9d09960401d3ec97d4163dfb5791c97b4cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "startDate", value)

    @builtins.property
    @jsii.member(jsii_name="audioAntispamFreezeConfig")
    def audio_antispam_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: audioAntispamFreezeConfig: Voice auto freeze configuration. Example:{"Type": "suggestion", "Value" : "block" }. The results are frozen according to the suggestion in the speech detection results.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "audioAntispamFreezeConfig"))

    @audio_antispam_freeze_config.setter
    def audio_antispam_freeze_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6836a7636100144814c57e9d3830f5f24e4caf244dfc8a455ccc9cac7545109)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "audioAntispamFreezeConfig", value)

    @builtins.property
    @jsii.member(jsii_name="audioAutoFreezeOpened")
    def audio_auto_freeze_opened(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: audioAutoFreezeOpened: Audio detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "audioAutoFreezeOpened"))

    @audio_auto_freeze_opened.setter
    def audio_auto_freeze_opened(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__abb57c2404d4fa3b7fb7c20481c66f4435e818d54c88f8871a0feaceec3bf96f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "audioAutoFreezeOpened", value)

    @builtins.property
    @jsii.member(jsii_name="audioMaxSize")
    def audio_max_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: audioMaxSize: Resource property field representing the maximum size of a single audio. 1~2048MB, the default is 200MB, more than not detected.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "audioMaxSize"))

    @audio_max_size.setter
    def audio_max_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8954edec2ef4425e2c3721a7973b82939105737c9b60ea4337d79cea8c9d4a89)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "audioMaxSize", value)

    @builtins.property
    @jsii.member(jsii_name="audioOpened")
    def audio_opened(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: audioOpened: Oss stock scan task detect audio. true: scan audio, false: do not scan audio.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "audioOpened"))

    @audio_opened.setter
    def audio_opened(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__def0ecd5659a14c698483b50cce9a8607f45e2461d661fc743f283f28eb27c7d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "audioOpened", value)

    @builtins.property
    @jsii.member(jsii_name="audioScanLimit")
    def audio_scan_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: audioScanLimit: The upper limit of voice scan in the oss stock scan task. The default value is 1000/Bucket.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "audioScanLimit"))

    @audio_scan_limit.setter
    def audio_scan_limit(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5b1b2882d0be7b03385667370bef0e9dc2eeabee6c803f1db4fd2b5d3919651)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "audioScanLimit", value)

    @builtins.property
    @jsii.member(jsii_name="audioScenes")
    def audio_scenes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: audioScenes: The audio detection scenarios included in the oss stock scan task. Set the value to ["antispam"].
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "audioScenes"))

    @audio_scenes.setter
    def audio_scenes(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bbf10dff81727ad29a545027b42542c27a43dbc8e59005ce44e4ab4cdc505fbd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "audioScenes", value)

    @builtins.property
    @jsii.member(jsii_name="autoFreezeType")
    def auto_freeze_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoFreezeType: Automatic freeze type. Value: acl: modify permissions, copy: Move files.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoFreezeType"))

    @auto_freeze_type.setter
    def auto_freeze_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__388065a4048bd6434ad258c7e43350cbe9c9def5963c1db82cd7886ea14f895a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoFreezeType", value)

    @builtins.property
    @jsii.member(jsii_name="bizType")
    def biz_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bizType: Business scenarios used by the oss stock scan task.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "bizType"))

    @biz_type.setter
    def biz_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f156bd05e3b02f4c44755c2dae7ce04dde10b3700ed094fdbb2346b14826098a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bizType", value)

    @builtins.property
    @jsii.member(jsii_name="callbackId")
    def callback_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: callbackId: The ID of the primary key of the notification message bound to the oss stock scan task.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "callbackId"))

    @callback_id.setter
    def callback_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29351854b33f73d7640bd5bbeb06effe5e9fe6f5b011c8dfd902cb18ddc12f4b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "callbackId", value)

    @builtins.property
    @jsii.member(jsii_name="endDate")
    def end_date(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: endDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point. Example: 2024-12-30 00:00:00 +0800
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endDate"))

    @end_date.setter
    def end_date(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db247b916db30d40900cf5fabd002ed7060e8987284d6ffbd81bbea30a9a4c2f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endDate", value)

    @builtins.property
    @jsii.member(jsii_name="imageAdFreezeConfig")
    def image_ad_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: imageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "imageAdFreezeConfig"))

    @image_ad_freeze_config.setter
    def image_ad_freeze_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2242f6cf4b3d650b4aeb77559a3d17831fdeabe81d2e2c8056ce740b5da7eb5b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageAdFreezeConfig", value)

    @builtins.property
    @jsii.member(jsii_name="imageAutoFreezeOpened")
    def image_auto_freeze_opened(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageAutoFreezeOpened: Picture detection auto freeze switch. Value: true: auto freeze, false: not auto freeze.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageAutoFreezeOpened"))

    @image_auto_freeze_opened.setter
    def image_auto_freeze_opened(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6fc232b1516efcca2533c0257f3d9548246108d9e5e8186e58c749ce397d657)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageAutoFreezeOpened", value)

    @builtins.property
    @jsii.member(jsii_name="imageLiveFreezeConfig")
    def image_live_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: imageLiveFreezeConfig: Picture automatic freezing live scene configuration. Example:{"Type":"suggestion","Value":"block,review"}. The result will be frozen according to the suggestion in the picture detection result.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "imageLiveFreezeConfig"))

    @image_live_freeze_config.setter
    def image_live_freeze_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__edde911abbf8d2371d1b6a3f46f114cbf82ecb3bd80bc350f03f7ab859f81ce8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageLiveFreezeConfig", value)

    @builtins.property
    @jsii.member(jsii_name="imageOpened")
    def image_opened(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageOpened: Oss stock scan task detect images. true: scan images, false: do not scan images.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageOpened"))

    @image_opened.setter
    def image_opened(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cf8f55b8c92393f87f6fdc18ebd577147973d060133b76868ebc70024935f8ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageOpened", value)

    @builtins.property
    @jsii.member(jsii_name="imagePornFreezeConfig")
    def image_porn_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: imagePornFreezeConfig: Picture automatic freezing porn scene configuration. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "imagePornFreezeConfig"))

    @image_porn_freeze_config.setter
    def image_porn_freeze_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8871d36932dd2d097c94def04f0644cc43632a24f3656b30640208077522bb28)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imagePornFreezeConfig", value)

    @builtins.property
    @jsii.member(jsii_name="imageScanLimit")
    def image_scan_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageScanLimit: The upper limit for scanning images in the oss stock scan task. The default value is 10000 images per Bucket.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageScanLimit"))

    @image_scan_limit.setter
    def image_scan_limit(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b715f8a5a19ecba86897aae96d2a1c1de36b95acbf48dac69b9ec17d4dedbe1f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageScanLimit", value)

    @builtins.property
    @jsii.member(jsii_name="imageScenes")
    def image_scenes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        imageScenes: The image moderation scenario included in the oss stock scan task.Valid values:
        porn: pornography detection
        terrorism: terrorist content detection
        ad: ad violation detection
        live: undesirable scene detection.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "imageScenes"))

    @image_scenes.setter
    def image_scenes(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__358ada40a489b993b84aed155d1a2eb07f84e12417dba26b5dddc5fd5334c54c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageScenes", value)

    @builtins.property
    @jsii.member(jsii_name="imageTerrorismFreezeConfig")
    def image_terrorism_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: imageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "imageTerrorismFreezeConfig"))

    @image_terrorism_freeze_config.setter
    def image_terrorism_freeze_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7a5a956e7cf85c9e3f7879f51ee2a0611bbb075ea537e7871e7cad318a37409)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageTerrorismFreezeConfig", value)

    @builtins.property
    @jsii.member(jsii_name="ossStockTaskName")
    def oss_stock_task_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ossStockTaskName: The name of the oss stock scan task.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ossStockTaskName"))

    @oss_stock_task_name.setter
    def oss_stock_task_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8715a0e5b44a1c2cf157c391793b4345bf4512a926096fae6ffdc5f47f8b2c7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ossStockTaskName", value)

    @builtins.property
    @jsii.member(jsii_name="scanImageNoFileType")
    def scan_image_no_file_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes. true: Detect pictures with file names without suffixes, false: Do not detect pictures with file names without suffixes.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scanImageNoFileType"))

    @scan_image_no_file_type.setter
    def scan_image_no_file_type(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__028d1135bc7f016ba108c32618924ebacc89849075ff617db4a3c2b23557e074)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scanImageNoFileType", value)

    @builtins.property
    @jsii.member(jsii_name="videoAdFreezeConfig")
    def video_ad_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: videoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios. Example:{"Type":"suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "videoAdFreezeConfig"))

    @video_ad_freeze_config.setter
    def video_ad_freeze_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__137fc3e967f1c1e717ca9e6e64b5dbdb3edf60bf25be30273844dce172d42414)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "videoAdFreezeConfig", value)

    @builtins.property
    @jsii.member(jsii_name="videoAutoFreezeOpened")
    def video_auto_freeze_opened(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: videoAutoFreezeOpened: Video detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "videoAutoFreezeOpened"))

    @video_auto_freeze_opened.setter
    def video_auto_freeze_opened(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea93411adc8aa7c09e3d02c9f7a99eace60967f6fd1657b2bcd992ca03b81844)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "videoAutoFreezeOpened", value)

    @builtins.property
    @jsii.member(jsii_name="videoFrameInterval")
    def video_frame_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: videoFrameInterval: Resource attribute field representing the framing frequency. 1~60 seconds/frame, the default is 1 second/frame.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "videoFrameInterval"))

    @video_frame_interval.setter
    def video_frame_interval(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2fe16053ad1b6c323c1e685b47016e943e9630d4288886b9746a44ae12f0ec90)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "videoFrameInterval", value)

    @builtins.property
    @jsii.member(jsii_name="videoLiveFreezeConfig")
    def video_live_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: videoLiveFreezeConfig: Video automatic freeze live scene configuration. Example:{"Type" : "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "videoLiveFreezeConfig"))

    @video_live_freeze_config.setter
    def video_live_freeze_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e80257679a201f7dc68de1675328358392c0d7143128b144359503934b45f45)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "videoLiveFreezeConfig", value)

    @builtins.property
    @jsii.member(jsii_name="videoMaxFrames")
    def video_max_frames(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: videoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut. 5 to 20000 frames, the default is 200 frames.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "videoMaxFrames"))

    @video_max_frames.setter
    def video_max_frames(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d7f7ca52f04dfd7a2c5002194977ce6b7702ac9318ce3189b297234f5bfe1859)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "videoMaxFrames", value)

    @builtins.property
    @jsii.member(jsii_name="videoMaxSize")
    def video_max_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: videoMaxSize: Resource property field representing the maximum size of a single video. 1~2048MB, the default is 500MB, more than not detected.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "videoMaxSize"))

    @video_max_size.setter
    def video_max_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3783eb15f94f1de90547095bbb1986b9554348f461cd3c57c9e1a5a7b91efa4e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "videoMaxSize", value)

    @builtins.property
    @jsii.member(jsii_name="videoOpened")
    def video_opened(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: videoOpened: Oss stock scan task detect video. true: scan video, false: do not scan video.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "videoOpened"))

    @video_opened.setter
    def video_opened(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9abe4c0b6c9075188aa78f1d349e26dcd2660a33b3e9f5ed99a77cc1385c851f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "videoOpened", value)

    @builtins.property
    @jsii.member(jsii_name="videoPornFreezeConfig")
    def video_porn_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: videoPornFreezeConfig: Video automatic freezing porn scene configuration. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the video detection result.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "videoPornFreezeConfig"))

    @video_porn_freeze_config.setter
    def video_porn_freeze_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01f91859386d6e4b036761e03727adc5f461e775dd33cf9c537ba3309413f9a3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "videoPornFreezeConfig", value)

    @builtins.property
    @jsii.member(jsii_name="videoScanLimit")
    def video_scan_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: videoScanLimit: The upper limit of video scanning in the oss stock scan task. The default value is 1000/Bucket.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "videoScanLimit"))

    @video_scan_limit.setter
    def video_scan_limit(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a7fa6fecdde2021be3307881aa5a351e1661b7be2086438214c1570667813a76)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "videoScanLimit", value)

    @builtins.property
    @jsii.member(jsii_name="videoScenes")
    def video_scenes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        videoScenes: The video detection scenarios included in the oss stock scan task.
        porn: pornography detection
        terrorism: terrorist content detection
        ad: ad violation detection
        live: undesirable scene detection
        antispam: Video voice antispam.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "videoScenes"))

    @video_scenes.setter
    def video_scenes(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2de31b4f7839cba2a282bfcf9f79e6eca54a1883e02929a6bf04368240b4df2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "videoScenes", value)

    @builtins.property
    @jsii.member(jsii_name="videoTerrorismFreezeConfig")
    def video_terrorism_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: videoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes. Example:{"Type": "suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "videoTerrorismFreezeConfig"))

    @video_terrorism_freeze_config.setter
    def video_terrorism_freeze_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f16cd04e76e557d4c9dbf65141873cb93697077933e3b8a41db4ed620ff3d8b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "videoTerrorismFreezeConfig", value)

    @builtins.property
    @jsii.member(jsii_name="videoVoiceAntispamFreezeConfig")
    def video_voice_antispam_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: videoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video. Example:{"Type": "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "videoVoiceAntispamFreezeConfig"))

    @video_voice_antispam_freeze_config.setter
    def video_voice_antispam_freeze_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c15b8e64b1880edf4be10abcab03ebaef060a67d2b3ea566a94c6736f07d487)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "videoVoiceAntispamFreezeConfig", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-aligreen.RosOssStockTaskProps",
    jsii_struct_bases=[],
    name_mapping={
        "buckets": "buckets",
        "start_date": "startDate",
        "audio_antispam_freeze_config": "audioAntispamFreezeConfig",
        "audio_auto_freeze_opened": "audioAutoFreezeOpened",
        "audio_max_size": "audioMaxSize",
        "audio_opened": "audioOpened",
        "audio_scan_limit": "audioScanLimit",
        "audio_scenes": "audioScenes",
        "auto_freeze_type": "autoFreezeType",
        "biz_type": "bizType",
        "callback_id": "callbackId",
        "end_date": "endDate",
        "image_ad_freeze_config": "imageAdFreezeConfig",
        "image_auto_freeze_opened": "imageAutoFreezeOpened",
        "image_live_freeze_config": "imageLiveFreezeConfig",
        "image_opened": "imageOpened",
        "image_porn_freeze_config": "imagePornFreezeConfig",
        "image_scan_limit": "imageScanLimit",
        "image_scenes": "imageScenes",
        "image_terrorism_freeze_config": "imageTerrorismFreezeConfig",
        "oss_stock_task_name": "ossStockTaskName",
        "scan_image_no_file_type": "scanImageNoFileType",
        "video_ad_freeze_config": "videoAdFreezeConfig",
        "video_auto_freeze_opened": "videoAutoFreezeOpened",
        "video_frame_interval": "videoFrameInterval",
        "video_live_freeze_config": "videoLiveFreezeConfig",
        "video_max_frames": "videoMaxFrames",
        "video_max_size": "videoMaxSize",
        "video_opened": "videoOpened",
        "video_porn_freeze_config": "videoPornFreezeConfig",
        "video_scan_limit": "videoScanLimit",
        "video_scenes": "videoScenes",
        "video_terrorism_freeze_config": "videoTerrorismFreezeConfig",
        "video_voice_antispam_freeze_config": "videoVoiceAntispamFreezeConfig",
    },
)
class RosOssStockTaskProps:
    def __init__(
        self,
        *,
        buckets: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
        start_date: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        audio_antispam_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        audio_auto_freeze_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        audio_max_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        audio_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        audio_scan_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        audio_scenes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        auto_freeze_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        biz_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        callback_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        end_date: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_ad_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        image_auto_freeze_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_live_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        image_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_porn_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        image_scan_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_scenes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        image_terrorism_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        oss_stock_task_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scan_image_no_file_type: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        video_ad_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        video_auto_freeze_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        video_frame_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        video_live_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        video_max_frames: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        video_max_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        video_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        video_porn_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        video_scan_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        video_scenes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        video_terrorism_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        video_voice_antispam_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``RosOssStockTask``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-ossstocktask

        :param buckets: 
        :param start_date: 
        :param audio_antispam_freeze_config: 
        :param audio_auto_freeze_opened: 
        :param audio_max_size: 
        :param audio_opened: 
        :param audio_scan_limit: 
        :param audio_scenes: 
        :param auto_freeze_type: 
        :param biz_type: 
        :param callback_id: 
        :param end_date: 
        :param image_ad_freeze_config: 
        :param image_auto_freeze_opened: 
        :param image_live_freeze_config: 
        :param image_opened: 
        :param image_porn_freeze_config: 
        :param image_scan_limit: 
        :param image_scenes: 
        :param image_terrorism_freeze_config: 
        :param oss_stock_task_name: 
        :param scan_image_no_file_type: 
        :param video_ad_freeze_config: 
        :param video_auto_freeze_opened: 
        :param video_frame_interval: 
        :param video_live_freeze_config: 
        :param video_max_frames: 
        :param video_max_size: 
        :param video_opened: 
        :param video_porn_freeze_config: 
        :param video_scan_limit: 
        :param video_scenes: 
        :param video_terrorism_freeze_config: 
        :param video_voice_antispam_freeze_config: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__248b8a82289a1283016154969a3d7f292c379f6c23a60ef31b558b1b57b70704)
            check_type(argname="argument buckets", value=buckets, expected_type=type_hints["buckets"])
            check_type(argname="argument start_date", value=start_date, expected_type=type_hints["start_date"])
            check_type(argname="argument audio_antispam_freeze_config", value=audio_antispam_freeze_config, expected_type=type_hints["audio_antispam_freeze_config"])
            check_type(argname="argument audio_auto_freeze_opened", value=audio_auto_freeze_opened, expected_type=type_hints["audio_auto_freeze_opened"])
            check_type(argname="argument audio_max_size", value=audio_max_size, expected_type=type_hints["audio_max_size"])
            check_type(argname="argument audio_opened", value=audio_opened, expected_type=type_hints["audio_opened"])
            check_type(argname="argument audio_scan_limit", value=audio_scan_limit, expected_type=type_hints["audio_scan_limit"])
            check_type(argname="argument audio_scenes", value=audio_scenes, expected_type=type_hints["audio_scenes"])
            check_type(argname="argument auto_freeze_type", value=auto_freeze_type, expected_type=type_hints["auto_freeze_type"])
            check_type(argname="argument biz_type", value=biz_type, expected_type=type_hints["biz_type"])
            check_type(argname="argument callback_id", value=callback_id, expected_type=type_hints["callback_id"])
            check_type(argname="argument end_date", value=end_date, expected_type=type_hints["end_date"])
            check_type(argname="argument image_ad_freeze_config", value=image_ad_freeze_config, expected_type=type_hints["image_ad_freeze_config"])
            check_type(argname="argument image_auto_freeze_opened", value=image_auto_freeze_opened, expected_type=type_hints["image_auto_freeze_opened"])
            check_type(argname="argument image_live_freeze_config", value=image_live_freeze_config, expected_type=type_hints["image_live_freeze_config"])
            check_type(argname="argument image_opened", value=image_opened, expected_type=type_hints["image_opened"])
            check_type(argname="argument image_porn_freeze_config", value=image_porn_freeze_config, expected_type=type_hints["image_porn_freeze_config"])
            check_type(argname="argument image_scan_limit", value=image_scan_limit, expected_type=type_hints["image_scan_limit"])
            check_type(argname="argument image_scenes", value=image_scenes, expected_type=type_hints["image_scenes"])
            check_type(argname="argument image_terrorism_freeze_config", value=image_terrorism_freeze_config, expected_type=type_hints["image_terrorism_freeze_config"])
            check_type(argname="argument oss_stock_task_name", value=oss_stock_task_name, expected_type=type_hints["oss_stock_task_name"])
            check_type(argname="argument scan_image_no_file_type", value=scan_image_no_file_type, expected_type=type_hints["scan_image_no_file_type"])
            check_type(argname="argument video_ad_freeze_config", value=video_ad_freeze_config, expected_type=type_hints["video_ad_freeze_config"])
            check_type(argname="argument video_auto_freeze_opened", value=video_auto_freeze_opened, expected_type=type_hints["video_auto_freeze_opened"])
            check_type(argname="argument video_frame_interval", value=video_frame_interval, expected_type=type_hints["video_frame_interval"])
            check_type(argname="argument video_live_freeze_config", value=video_live_freeze_config, expected_type=type_hints["video_live_freeze_config"])
            check_type(argname="argument video_max_frames", value=video_max_frames, expected_type=type_hints["video_max_frames"])
            check_type(argname="argument video_max_size", value=video_max_size, expected_type=type_hints["video_max_size"])
            check_type(argname="argument video_opened", value=video_opened, expected_type=type_hints["video_opened"])
            check_type(argname="argument video_porn_freeze_config", value=video_porn_freeze_config, expected_type=type_hints["video_porn_freeze_config"])
            check_type(argname="argument video_scan_limit", value=video_scan_limit, expected_type=type_hints["video_scan_limit"])
            check_type(argname="argument video_scenes", value=video_scenes, expected_type=type_hints["video_scenes"])
            check_type(argname="argument video_terrorism_freeze_config", value=video_terrorism_freeze_config, expected_type=type_hints["video_terrorism_freeze_config"])
            check_type(argname="argument video_voice_antispam_freeze_config", value=video_voice_antispam_freeze_config, expected_type=type_hints["video_voice_antispam_freeze_config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "buckets": buckets,
            "start_date": start_date,
        }
        if audio_antispam_freeze_config is not None:
            self._values["audio_antispam_freeze_config"] = audio_antispam_freeze_config
        if audio_auto_freeze_opened is not None:
            self._values["audio_auto_freeze_opened"] = audio_auto_freeze_opened
        if audio_max_size is not None:
            self._values["audio_max_size"] = audio_max_size
        if audio_opened is not None:
            self._values["audio_opened"] = audio_opened
        if audio_scan_limit is not None:
            self._values["audio_scan_limit"] = audio_scan_limit
        if audio_scenes is not None:
            self._values["audio_scenes"] = audio_scenes
        if auto_freeze_type is not None:
            self._values["auto_freeze_type"] = auto_freeze_type
        if biz_type is not None:
            self._values["biz_type"] = biz_type
        if callback_id is not None:
            self._values["callback_id"] = callback_id
        if end_date is not None:
            self._values["end_date"] = end_date
        if image_ad_freeze_config is not None:
            self._values["image_ad_freeze_config"] = image_ad_freeze_config
        if image_auto_freeze_opened is not None:
            self._values["image_auto_freeze_opened"] = image_auto_freeze_opened
        if image_live_freeze_config is not None:
            self._values["image_live_freeze_config"] = image_live_freeze_config
        if image_opened is not None:
            self._values["image_opened"] = image_opened
        if image_porn_freeze_config is not None:
            self._values["image_porn_freeze_config"] = image_porn_freeze_config
        if image_scan_limit is not None:
            self._values["image_scan_limit"] = image_scan_limit
        if image_scenes is not None:
            self._values["image_scenes"] = image_scenes
        if image_terrorism_freeze_config is not None:
            self._values["image_terrorism_freeze_config"] = image_terrorism_freeze_config
        if oss_stock_task_name is not None:
            self._values["oss_stock_task_name"] = oss_stock_task_name
        if scan_image_no_file_type is not None:
            self._values["scan_image_no_file_type"] = scan_image_no_file_type
        if video_ad_freeze_config is not None:
            self._values["video_ad_freeze_config"] = video_ad_freeze_config
        if video_auto_freeze_opened is not None:
            self._values["video_auto_freeze_opened"] = video_auto_freeze_opened
        if video_frame_interval is not None:
            self._values["video_frame_interval"] = video_frame_interval
        if video_live_freeze_config is not None:
            self._values["video_live_freeze_config"] = video_live_freeze_config
        if video_max_frames is not None:
            self._values["video_max_frames"] = video_max_frames
        if video_max_size is not None:
            self._values["video_max_size"] = video_max_size
        if video_opened is not None:
            self._values["video_opened"] = video_opened
        if video_porn_freeze_config is not None:
            self._values["video_porn_freeze_config"] = video_porn_freeze_config
        if video_scan_limit is not None:
            self._values["video_scan_limit"] = video_scan_limit
        if video_scenes is not None:
            self._values["video_scenes"] = video_scenes
        if video_terrorism_freeze_config is not None:
            self._values["video_terrorism_freeze_config"] = video_terrorism_freeze_config
        if video_voice_antispam_freeze_config is not None:
            self._values["video_voice_antispam_freeze_config"] = video_voice_antispam_freeze_config

    @builtins.property
    def buckets(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: buckets: The bucket configuration list of the oss stock scan task. Example:[{"Bucket":"bucket_01","Selected":true,"Prefixes":["img/test_"],"Type":"exclude"}].
        '''
        result = self._values.get("buckets")
        assert result is not None, "Required property 'buckets' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def start_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: startDate: The start time of the file upload time range represents the files uploaded after scanning this time point.Example: 2024-08-01 00:00:00 +0800
        '''
        result = self._values.get("start_date")
        assert result is not None, "Required property 'start_date' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def audio_antispam_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: audioAntispamFreezeConfig: Voice auto freeze configuration. Example:{"Type": "suggestion", "Value" : "block" }. The results are frozen according to the suggestion in the speech detection results.
        '''
        result = self._values.get("audio_antispam_freeze_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def audio_auto_freeze_opened(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: audioAutoFreezeOpened: Audio detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
        '''
        result = self._values.get("audio_auto_freeze_opened")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def audio_max_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: audioMaxSize: Resource property field representing the maximum size of a single audio. 1~2048MB, the default is 200MB, more than not detected.
        '''
        result = self._values.get("audio_max_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def audio_opened(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: audioOpened: Oss stock scan task detect audio. true: scan audio, false: do not scan audio.
        '''
        result = self._values.get("audio_opened")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def audio_scan_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: audioScanLimit: The upper limit of voice scan in the oss stock scan task. The default value is 1000/Bucket.
        '''
        result = self._values.get("audio_scan_limit")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def audio_scenes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: audioScenes: The audio detection scenarios included in the oss stock scan task. Set the value to ["antispam"].
        '''
        result = self._values.get("audio_scenes")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def auto_freeze_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoFreezeType: Automatic freeze type. Value: acl: modify permissions, copy: Move files.
        '''
        result = self._values.get("auto_freeze_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def biz_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bizType: Business scenarios used by the oss stock scan task.
        '''
        result = self._values.get("biz_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def callback_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: callbackId: The ID of the primary key of the notification message bound to the oss stock scan task.
        '''
        result = self._values.get("callback_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def end_date(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: endDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point. Example: 2024-12-30 00:00:00 +0800
        '''
        result = self._values.get("end_date")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_ad_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: imageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
        '''
        result = self._values.get("image_ad_freeze_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def image_auto_freeze_opened(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageAutoFreezeOpened: Picture detection auto freeze switch. Value: true: auto freeze, false: not auto freeze.
        '''
        result = self._values.get("image_auto_freeze_opened")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_live_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: imageLiveFreezeConfig: Picture automatic freezing live scene configuration. Example:{"Type":"suggestion","Value":"block,review"}. The result will be frozen according to the suggestion in the picture detection result.
        '''
        result = self._values.get("image_live_freeze_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def image_opened(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageOpened: Oss stock scan task detect images. true: scan images, false: do not scan images.
        '''
        result = self._values.get("image_opened")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_porn_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: imagePornFreezeConfig: Picture automatic freezing porn scene configuration. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
        '''
        result = self._values.get("image_porn_freeze_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def image_scan_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageScanLimit: The upper limit for scanning images in the oss stock scan task. The default value is 10000 images per Bucket.
        '''
        result = self._values.get("image_scan_limit")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_scenes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        imageScenes: The image moderation scenario included in the oss stock scan task.Valid values:
        porn: pornography detection
        terrorism: terrorist content detection
        ad: ad violation detection
        live: undesirable scene detection.
        '''
        result = self._values.get("image_scenes")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def image_terrorism_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: imageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
        '''
        result = self._values.get("image_terrorism_freeze_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def oss_stock_task_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ossStockTaskName: The name of the oss stock scan task.
        '''
        result = self._values.get("oss_stock_task_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scan_image_no_file_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes. true: Detect pictures with file names without suffixes, false: Do not detect pictures with file names without suffixes.
        '''
        result = self._values.get("scan_image_no_file_type")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def video_ad_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: videoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios. Example:{"Type":"suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
        '''
        result = self._values.get("video_ad_freeze_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def video_auto_freeze_opened(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: videoAutoFreezeOpened: Video detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
        '''
        result = self._values.get("video_auto_freeze_opened")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def video_frame_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: videoFrameInterval: Resource attribute field representing the framing frequency. 1~60 seconds/frame, the default is 1 second/frame.
        '''
        result = self._values.get("video_frame_interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def video_live_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: videoLiveFreezeConfig: Video automatic freeze live scene configuration. Example:{"Type" : "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
        '''
        result = self._values.get("video_live_freeze_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def video_max_frames(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: videoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut. 5 to 20000 frames, the default is 200 frames.
        '''
        result = self._values.get("video_max_frames")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def video_max_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: videoMaxSize: Resource property field representing the maximum size of a single video. 1~2048MB, the default is 500MB, more than not detected.
        '''
        result = self._values.get("video_max_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def video_opened(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: videoOpened: Oss stock scan task detect video. true: scan video, false: do not scan video.
        '''
        result = self._values.get("video_opened")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def video_porn_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: videoPornFreezeConfig: Video automatic freezing porn scene configuration. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the video detection result.
        '''
        result = self._values.get("video_porn_freeze_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def video_scan_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: videoScanLimit: The upper limit of video scanning in the oss stock scan task. The default value is 1000/Bucket.
        '''
        result = self._values.get("video_scan_limit")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def video_scenes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        videoScenes: The video detection scenarios included in the oss stock scan task.
        porn: pornography detection
        terrorism: terrorist content detection
        ad: ad violation detection
        live: undesirable scene detection
        antispam: Video voice antispam.
        '''
        result = self._values.get("video_scenes")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def video_terrorism_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: videoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes. Example:{"Type": "suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
        '''
        result = self._values.get("video_terrorism_freeze_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def video_voice_antispam_freeze_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: videoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video. Example:{"Type": "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
        '''
        result = self._values.get("video_voice_antispam_freeze_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosOssStockTaskProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IAuditCallback)
class AuditCallback(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-aligreen.AuditCallback",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::Aligreen::AuditCallback``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAuditCallback``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-auditcallback
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AuditCallbackProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1835c82510e9fb57b3f8044658af9267d623ecf4f0e05eab02103b8fb3166d83)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAuditCallbackName")
    def attr_audit_callback_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuditCallbackName: The AuditCallback name defined by the customer.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAuditCallbackName"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackSuggestions")
    def attr_callback_suggestions(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackSuggestions: List of audit results supported by message notification.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCallbackSuggestions"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackTypes")
    def attr_callback_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackTypes: A list of Callback types.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCallbackTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrCryptType")
    def attr_crypt_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCryptType"))

    @builtins.property
    @jsii.member(jsii_name="attrUrl")
    def attr_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Url: The detection result will be called back to the url.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUrl"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AuditCallbackProps:
        return typing.cast(AuditCallbackProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__127a6380bbec4ed0cada6293a8ab2d56938182d0979a53ae58512bd8771b675a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8373098e2dff6abd8d7cbd992b2ed2979600bb40bcafd7f189f2c0ab73250819)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b02f563230a5a2bea0a20b252b5eaee013eacd8babb012d889c1c635991cb2b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IBizType)
class BizType(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-aligreen.BizType",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::Aligreen::BizType``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosBizType``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-biztype
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[BizTypeProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c698ed858781631820488d4af5d9462335fcb2e5dc0088fe4685faeab1e7c314)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBizTypeName")
    def attr_biz_type_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BizTypeName: The name of the business scenario defined by the customer.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBizTypeName"))

    @builtins.property
    @jsii.member(jsii_name="attrCiteTemplate")
    def attr_cite_template(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CiteTemplate: Specifies whether to import the configuration of an industry template.

        Default value: false.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCiteTemplate"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the business scenario defined by the customer.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIndustryInfo")
    def attr_industry_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IndustryInfo: The industry classification.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIndustryInfo"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BizTypeProps:
        return typing.cast(BizTypeProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69d18961e44d787bff29d33e214fee9780b7605e6eaf0e03ab970d84717c6e55)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ffa30f39f5c2b5dae0dfc72ddc4530327f99ca4b594bf9a98b153bb9a9c4116)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5eaf506aa387764cca15a620ff25e26fec97ae5b8e5b96272736bec2c938bc9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(ICallback)
class Callback(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-aligreen.Callback",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::Aligreen::Callback``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCallback``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-callback
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[CallbackProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1788184fb13df01ea6fb524b992f06f658dbcdb7d7a089351d801c6504a8688)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCallbackId")
    def attr_callback_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackId: The ID of the primary key of the Callback.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCallbackId"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackName")
    def attr_callback_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackName: The Callback name defined by the customer.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCallbackName"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackSuggestions")
    def attr_callback_suggestions(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackSuggestions: List of audit results supported by message notification.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCallbackSuggestions"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackTypes")
    def attr_callback_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackTypes: The list of Callback types.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCallbackTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrCallbackUrl")
    def attr_callback_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallbackUrl: The detection result will be called back to the url.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCallbackUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrCryptType")
    def attr_crypt_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCryptType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CallbackProps:
        return typing.cast(CallbackProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f24e896600c4d7f040007c11919947200aaf424db8eac5ef66fd038d4c3b159)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__76c30d1dbdecad963c92771e8586a0a5d9b43b773f4f298998f644e97e5932f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__521a237134a568c92a0c2703f2903899fc0007417caadcc598f7a9c83d35681e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "AuditCallback",
    "AuditCallbackProps",
    "BizType",
    "BizTypeProps",
    "Callback",
    "CallbackProps",
    "IAuditCallback",
    "IBizType",
    "ICallback",
    "IImageLib",
    "IKeywordLib",
    "IOssStockTask",
    "ImageLib",
    "ImageLibProps",
    "KeywordLib",
    "KeywordLibProps",
    "OssStockTask",
    "OssStockTaskProps",
    "RosAuditCallback",
    "RosAuditCallbackProps",
    "RosBizType",
    "RosBizTypeProps",
    "RosCallback",
    "RosCallbackProps",
    "RosImageLib",
    "RosImageLibProps",
    "RosKeywordLib",
    "RosKeywordLibProps",
    "RosOssStockTask",
    "RosOssStockTaskProps",
]

publication.publish()

def _typecheckingstub__8c155c8c908fbceaec2969429165b0b0ce35fbbe69f2084c525feb83922ac942(
    *,
    audit_callback_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    callback_suggestions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    callback_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    crypt_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__382bb1506ba6565fc579c60e07dd51154ef5a89cea8c6f276cc132f270a76b9f(
    *,
    biz_type_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cite_template: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    biz_type_import: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    industry_info: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff731800089ae9ef793da0d3b34979874bf7e1205488fb5f5da6dc44f4b5f216(
    *,
    callback_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    callback_suggestions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    callback_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    callback_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    crypt_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3bce5d467a8cd80b84c66d57300facce4755af5f67651f4e6f1a314a83687b4e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ImageLibProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2695914f03e653fb1aeb1ef8f70466d0eb5d50fd7ee98be55d5bc71a1289dfcf(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19e260197fddf160033aadcacc148acb641db74edbe8607fc22f030b4a8b3a6c(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b0083a5affeb07a0b2eef4fc471e16251c07fafaddc9c43178f648560df2fbe(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01596dfe95392e6ddc546ff29a26f3c8eb5658cc7a95c5b8ed6fdd0fb4716541(
    *,
    category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    image_lib_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    scene: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    biz_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__313320bab46fbef69602d3aebdcbe413fe55c0330e2f86e3ce3d3aca21694e1b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[KeywordLibProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3c9a980be202a497115a92dc31a528d99ef51b32c21add6820e2d36267eab188(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0a9e34517ed77871f6ef8c76f3e2e1dfb28bef3d4db38989b3b9ae4111ab800(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e05d82ff3a5ef73c7494301ff09b4a5fd50062b505f9cfd07364cabf08bf9df4(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__403c45892904f9371b39ce938ea40c00ad88ca864372018dd5d0ab802b504555(
    *,
    keyword_lib_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    biz_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lib_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    match_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__775d548970d0bf2513c619d9a7afb6cb19a8dbdc2e4df610855d34989e6a0be8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[OssStockTaskProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d8c9a5ff0a2d177e09680fad6bd3f9794a7dc516fb93d0195243f4b06d01644(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a6ba37c64c3bb0ce7c105ee0a5fb06973d423dc830ab1807aeed5a1cd67a0b5e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e5aae38642d376377137fce9a1636920810223693cf92c4bef04a6163329ccf(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3123d16dcd0429e509d8bd3584182190e542c4af8821303a042fdcd2bed1ba65(
    *,
    buckets: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    start_date: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    audio_antispam_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    audio_auto_freeze_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    audio_max_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    audio_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    audio_scan_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    audio_scenes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    auto_freeze_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    biz_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    callback_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    end_date: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_ad_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    image_auto_freeze_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_live_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    image_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_porn_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    image_scan_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_scenes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    image_terrorism_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    oss_stock_task_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scan_image_no_file_type: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    video_ad_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    video_auto_freeze_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    video_frame_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    video_live_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    video_max_frames: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    video_max_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    video_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    video_porn_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    video_scan_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    video_scenes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    video_terrorism_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    video_voice_antispam_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9e68871e4a20c03c388e7907115ace5ba529a89f3cbbe60e90822429ae67990(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAuditCallbackProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__60354265e4e52c638144c697f42e3a9d442d4615f8ad047bbfcb2437c7690908(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c82ab9c56cf583b86822e0c2df9143cbabb84a06f30714ad2df8a80f821b4a58(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95f0469512c983da7162b9f46fe86f2904507f13921c5b478fa73a6326222ab5(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2bad402b59de825e36c500ca1fcc4bff75904417bf53d2d7e426b0657012a6e4(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__008973bd163b47cdd090f48ab254901b6d276191fcb4c7251adb374ac4592f63(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__efdad9598a0d2e8dac522e46ac8d8cc2c6e144e5a414a94b538d28d3503ef6cc(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d649abafe55f0e59436e167a3838d70e82c0cb8c0b2a928b6e05481e23ef9969(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__85083becb6409e095cbe29c5f5392e6e337006e24060ba4ccdeee2b4dc7bcbf0(
    *,
    audit_callback_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    callback_suggestions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    callback_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    crypt_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50d24836a49837f21b0bc5b3ff02e4de768f5dd592b4fa68ea6fc5cd34c33faa(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBizTypeProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd6e8d40b92dc7fed9d6fed2995c1f80327e5d44ecd8790c5358f1055ff844f7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a74eb585412a26e1abbef201c1527821dc4f4667f9f3ccb4418b0770ca0a0e39(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__967338568e48c25a477bf71ba4eba244c74bfaac21959f44276c4ac2f26d6322(
    value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b78c442238516595ba8bfc48251ec76630df5ee45ddbc9c8b37a08ac0fe8f8d0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec3de076615dc6be4efedf8edd79e099c66d21fbf1b4d9c0122185109439cabd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e19fd63d8f8b7ff7dd61a8cf1236e6dd7f6563614e3c5484295231e76d52e531(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a4fc87c9013265e661ae9f50fac0bb7ccd94bcb29bbfc94c84f553e8ca89c43(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c43de71892a8fdfbc0c5bcd647fbd02f0efe67742c9ee4e7db05e5f6ec6e3db7(
    *,
    biz_type_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cite_template: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    biz_type_import: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    industry_info: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50073db29001bfe0f3c99a49daea860c7bb1efad11004abcc5ccceb268009b3f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCallbackProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9936919e00e3571b461fe2697a1f8ca918482fb56924f62bc4c0c7af53a84ad2(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fafc255ff99e5aaaadabb50e80e110842167f032a221d915f4640c5134f1822a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4945cdd2bab50ff170b05224f616c7104e7e60776ba816ebd5cbd5e64e255160(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6e4e10db03bdda194b956995439adfde775f88d5fe59487a76b39c2ae497f26(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b09ae9d2e859bd1680acc899c1b2e74f3511184ab553e3b0d5398464095131a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57bb0f972d832c2264b0d86679dcdc3a3e1bc346c00395bf86a8734f19946e04(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca749c7700d6c3cb4eaba5da145ae031fd31ccacbf95b36aba0af06fa26caea5(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36d79990ab9731a601c6022fdff4430b57f80cf205ec79b7a513a6507afd0d1e(
    *,
    callback_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    callback_suggestions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    callback_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    callback_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    crypt_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73d63ffe2db3bd413e9b8cc6c67fea247c9a5e5fa289e4d8b420b4991018183f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosImageLibProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca85c9b58605e35e9b2cb5878fce35315c333a8c0bcaffd39354c2e076e98744(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a65841f2535c4636a0b4ccae2a01df8516e9ee940de02d0492ad72b129f4d394(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0523e5f549cee7443630572b72ce684a00253cc1bfa083c6d6d5ad6a1c364a1a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f2308cddc72eae5969adc2664a07bc332e197364398d4bca824b4eb6c15e766(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20577227a091a205f22b868bc2ce1a0740a45ea3009acd93dcd9702a247e28b2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6d8b9192c1502b5a565fda89e018c86f04c18abb65aa294fb17e8b8f2211dd9(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae57b6ffa055490d7ae9d0ad965b0b35b86d0316bcbf340dc02196fb432f0994(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f33fcd16a60e938866eab1158f69c82a010bc41f69998bd753a9f8fa9274d6d(
    *,
    category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    image_lib_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    scene: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    biz_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f26b783bdd356f01c1b4f43602fe5eef4f000e4d0eedf505fe368d4f93a9b71(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosKeywordLibProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50f09c09d481e4b2d0d838954f092da31688f47d8aa1be93ef1927ebf53138b9(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a2c3a6c6129468b51ce9be65465718584152c8d48070d3c6a941846683765be(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5039097dac66d31dfcee4300ed642db5ce5d5559434afa01711f06f6d1a69906(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ebc3a442b68d3f6cd3b055a706fe4d97f9c21daf3e08bb6e4948aec96b852dd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__039566a01f57d86fbeadcc80f2d9159ef36a9b07607be90244a26a681daad314(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__077ed3b0672675fdbc034b2ff919a36eb862fc2899823b9aa65226af5aea6737(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__425a50134ce17f6669c9f32e7ec188dce44dcded27bdd54e72cdacb3147bcbf9(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9425282749317b1eb1c972029b51b9230c837143eb08eb00cd0cb8f4c76d1679(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e2fba87357c9422d9f1c58485e6b5df30348678905421b45f55950cd2e5e83e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d252e58e1cfb5f7ce6c5311eade128092c7c1313be0f359cdce0d8649f7f7979(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55d227ce6151a4687a8e8bd139ca9d966a5e687b45d10dfa4fe5a2187bb4946c(
    *,
    keyword_lib_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    biz_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lib_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    match_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3e7c67191823fa22ed24ce17bd5a2515111967f5c31f9aed35593044ab9fba4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosOssStockTaskProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f17ebc6c901b4d9779e252d99ce0db2c5dd14581a5a4d9a625bd0397e4b2fde(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78e2ee81f85343bc65adc358dbfad2f9c7bc86e419c59053614e8b6307779143(
    value: typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73ebf2077e99fb44c17482e5ca8227985450db14d13bd70c36753d80304ff310(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__feb24369ac67aca4f27a879065e9e9d09960401d3ec97d4163dfb5791c97b4cd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6836a7636100144814c57e9d3830f5f24e4caf244dfc8a455ccc9cac7545109(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__abb57c2404d4fa3b7fb7c20481c66f4435e818d54c88f8871a0feaceec3bf96f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8954edec2ef4425e2c3721a7973b82939105737c9b60ea4337d79cea8c9d4a89(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__def0ecd5659a14c698483b50cce9a8607f45e2461d661fc743f283f28eb27c7d(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5b1b2882d0be7b03385667370bef0e9dc2eeabee6c803f1db4fd2b5d3919651(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbf10dff81727ad29a545027b42542c27a43dbc8e59005ce44e4ab4cdc505fbd(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__388065a4048bd6434ad258c7e43350cbe9c9def5963c1db82cd7886ea14f895a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f156bd05e3b02f4c44755c2dae7ce04dde10b3700ed094fdbb2346b14826098a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29351854b33f73d7640bd5bbeb06effe5e9fe6f5b011c8dfd902cb18ddc12f4b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db247b916db30d40900cf5fabd002ed7060e8987284d6ffbd81bbea30a9a4c2f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2242f6cf4b3d650b4aeb77559a3d17831fdeabe81d2e2c8056ce740b5da7eb5b(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6fc232b1516efcca2533c0257f3d9548246108d9e5e8186e58c749ce397d657(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__edde911abbf8d2371d1b6a3f46f114cbf82ecb3bd80bc350f03f7ab859f81ce8(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cf8f55b8c92393f87f6fdc18ebd577147973d060133b76868ebc70024935f8ef(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8871d36932dd2d097c94def04f0644cc43632a24f3656b30640208077522bb28(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b715f8a5a19ecba86897aae96d2a1c1de36b95acbf48dac69b9ec17d4dedbe1f(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__358ada40a489b993b84aed155d1a2eb07f84e12417dba26b5dddc5fd5334c54c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7a5a956e7cf85c9e3f7879f51ee2a0611bbb075ea537e7871e7cad318a37409(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8715a0e5b44a1c2cf157c391793b4345bf4512a926096fae6ffdc5f47f8b2c7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__028d1135bc7f016ba108c32618924ebacc89849075ff617db4a3c2b23557e074(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__137fc3e967f1c1e717ca9e6e64b5dbdb3edf60bf25be30273844dce172d42414(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea93411adc8aa7c09e3d02c9f7a99eace60967f6fd1657b2bcd992ca03b81844(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2fe16053ad1b6c323c1e685b47016e943e9630d4288886b9746a44ae12f0ec90(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e80257679a201f7dc68de1675328358392c0d7143128b144359503934b45f45(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7f7ca52f04dfd7a2c5002194977ce6b7702ac9318ce3189b297234f5bfe1859(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3783eb15f94f1de90547095bbb1986b9554348f461cd3c57c9e1a5a7b91efa4e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9abe4c0b6c9075188aa78f1d349e26dcd2660a33b3e9f5ed99a77cc1385c851f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01f91859386d6e4b036761e03727adc5f461e775dd33cf9c537ba3309413f9a3(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a7fa6fecdde2021be3307881aa5a351e1661b7be2086438214c1570667813a76(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2de31b4f7839cba2a282bfcf9f79e6eca54a1883e02929a6bf04368240b4df2(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f16cd04e76e557d4c9dbf65141873cb93697077933e3b8a41db4ed620ff3d8b(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c15b8e64b1880edf4be10abcab03ebaef060a67d2b3ea566a94c6736f07d487(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__248b8a82289a1283016154969a3d7f292c379f6c23a60ef31b558b1b57b70704(
    *,
    buckets: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    start_date: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    audio_antispam_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    audio_auto_freeze_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    audio_max_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    audio_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    audio_scan_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    audio_scenes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    auto_freeze_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    biz_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    callback_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    end_date: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_ad_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    image_auto_freeze_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_live_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    image_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_porn_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    image_scan_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_scenes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    image_terrorism_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    oss_stock_task_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scan_image_no_file_type: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    video_ad_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    video_auto_freeze_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    video_frame_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    video_live_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    video_max_frames: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    video_max_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    video_opened: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    video_porn_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    video_scan_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    video_scenes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    video_terrorism_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    video_voice_antispam_freeze_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1835c82510e9fb57b3f8044658af9267d623ecf4f0e05eab02103b8fb3166d83(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AuditCallbackProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__127a6380bbec4ed0cada6293a8ab2d56938182d0979a53ae58512bd8771b675a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8373098e2dff6abd8d7cbd992b2ed2979600bb40bcafd7f189f2c0ab73250819(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b02f563230a5a2bea0a20b252b5eaee013eacd8babb012d889c1c635991cb2b9(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c698ed858781631820488d4af5d9462335fcb2e5dc0088fe4685faeab1e7c314(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BizTypeProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69d18961e44d787bff29d33e214fee9780b7605e6eaf0e03ab970d84717c6e55(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ffa30f39f5c2b5dae0dfc72ddc4530327f99ca4b594bf9a98b153bb9a9c4116(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5eaf506aa387764cca15a620ff25e26fec97ae5b8e5b96272736bec2c938bc9(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1788184fb13df01ea6fb524b992f06f658dbcdb7d7a089351d801c6504a8688(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CallbackProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f24e896600c4d7f040007c11919947200aaf424db8eac5ef66fd038d4c3b159(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76c30d1dbdecad963c92771e8586a0a5d9b43b773f4f298998f644e97e5932f4(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__521a237134a568c92a0c2703f2903899fc0007417caadcc598f7a9c83d35681e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
