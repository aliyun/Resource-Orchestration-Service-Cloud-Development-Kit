'''
## Aliyun ROS CLOUDSIEM Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as CLOUDSIEM from '@alicloud/ros-cdk-cloudsiem';
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


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudsiem.IImportLogTasksSubmission")
class IImportLogTasksSubmission(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``ImportLogTasksSubmission``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ImportLogTasksSubmissionProps":
        ...


class _IImportLogTasksSubmissionProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ImportLogTasksSubmission``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudsiem.IImportLogTasksSubmission"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ImportLogTasksSubmissionProps":
        return typing.cast("ImportLogTasksSubmissionProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IImportLogTasksSubmission).__jsii_proxy_class__ = lambda : _IImportLogTasksSubmissionProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudsiem.IUserSourceLogConfig")
class IUserSourceLogConfig(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``UserSourceLogConfig``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserSourceLogConfigProps":
        ...


class _IUserSourceLogConfigProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``UserSourceLogConfig``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudsiem.IUserSourceLogConfig"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserSourceLogConfigProps":
        return typing.cast("UserSourceLogConfigProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IUserSourceLogConfig).__jsii_proxy_class__ = lambda : _IUserSourceLogConfigProxy


@jsii.implements(IImportLogTasksSubmission)
class ImportLogTasksSubmission(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsiem.ImportLogTasksSubmission",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CloudSiem::ImportLogTasksSubmission``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosImportLogTasksSubmission``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-importlogtaskssubmission
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ImportLogTasksSubmissionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a290dc227325c15de4f39898974ca4f16e1ceaa09c17917047e4edf786596dcb)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ImportLogTasksSubmissionProps":
        return typing.cast("ImportLogTasksSubmissionProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__085290441ed36ffc992601be847566d9a74071993db35d46041f93eb6c7b8935)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98ac3f87ac0b50731741f59333bb6ba3ba13003620cdb45b37965f3a094f9195)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5a1e89c2962a06cbb5c20831751e3cc9fa74950e8d9f700766b00145408ab06)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsiem.ImportLogTasksSubmissionProps",
    jsii_struct_bases=[],
    name_mapping={
        "accounts": "accounts",
        "cloud_code": "cloudCode",
        "log_codes": "logCodes",
        "prod_code": "prodCode",
    },
)
class ImportLogTasksSubmissionProps:
    def __init__(
        self,
        *,
        accounts: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        cloud_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        log_codes: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        prod_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ImportLogTasksSubmission``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-importlogtaskssubmission

        :param accounts: Property accounts: The list of accounts to be submitted.
        :param cloud_code: Property cloudCode: The cloud code. The code that is used for multi-cloud environments. Valid values: qcloud for Tencent Cloud, aliyun for Alibaba Cloud, hcloud for Huawei Cloud
        :param log_codes: Property logCodes: The list of log codes to be submitted. For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
        :param prod_code: Property prodCode: The product code. For all available product codes, query the Cloud Siem ListAllProds API.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__266290bcb8fa72d5ae2e0ac9d47601c8ab8a7ca353880b5a96ea1596d2b344f3)
            check_type(argname="argument accounts", value=accounts, expected_type=type_hints["accounts"])
            check_type(argname="argument cloud_code", value=cloud_code, expected_type=type_hints["cloud_code"])
            check_type(argname="argument log_codes", value=log_codes, expected_type=type_hints["log_codes"])
            check_type(argname="argument prod_code", value=prod_code, expected_type=type_hints["prod_code"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accounts": accounts,
            "cloud_code": cloud_code,
            "log_codes": log_codes,
            "prod_code": prod_code,
        }

    @builtins.property
    def accounts(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property accounts: The list of accounts to be submitted.'''
        result = self._values.get("accounts")
        assert result is not None, "Required property 'accounts' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def cloud_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cloudCode: The cloud code.

        The code that is used for multi-cloud environments. Valid values: qcloud for Tencent Cloud, aliyun for Alibaba Cloud, hcloud for Huawei Cloud
        '''
        result = self._values.get("cloud_code")
        assert result is not None, "Required property 'cloud_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def log_codes(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property logCodes: The list of log codes to be submitted.

        For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
        '''
        result = self._values.get("log_codes")
        assert result is not None, "Required property 'log_codes' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def prod_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property prodCode: The product code.

        For all available product codes, query the Cloud Siem ListAllProds API.
        '''
        result = self._values.get("prod_code")
        assert result is not None, "Required property 'prod_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ImportLogTasksSubmissionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosImportLogTasksSubmission(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsiem.RosImportLogTasksSubmission",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CloudSiem::ImportLogTasksSubmission``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ImportLogTasksSubmission`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-importlogtaskssubmission
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosImportLogTasksSubmissionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e7f66e709a8830bd9ff8fd4d775641afb8b1002d4255666c297903c5c9175466)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d617d272e3247a23b0a422c6751ef01e7f6d565f9398cd7adf0c7b216519bbc6)
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
    @jsii.member(jsii_name="accounts")
    def accounts(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: accounts: The list of accounts to be submitted.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "accounts"))

    @accounts.setter
    def accounts(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a006a38de4dfb461017ccced235cfeb41b26a75a44386b5170059050833fd68a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accounts", value)

    @builtins.property
    @jsii.member(jsii_name="cloudCode")
    def cloud_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cloudCode: The cloud code. The code that is used for multi-cloud environments. Valid values: qcloud for Tencent Cloud, aliyun for Alibaba Cloud, hcloud for Huawei Cloud
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cloudCode"))

    @cloud_code.setter
    def cloud_code(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b1134d232ccd3e9110fbecfd6345d7ecb69aacd23b1c800257517dfb94074a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cloudCode", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de2e838bbd1d09e34d7013980fcaa43ed626c908b41931edf05f0f9e0e290f0d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="logCodes")
    def log_codes(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: logCodes: The list of log codes to be submitted. For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "logCodes"))

    @log_codes.setter
    def log_codes(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d32f7b4d9c9a6bbe1ba3fb029391aa03980ee4dec4237a4e12ff5e281cd6bdc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logCodes", value)

    @builtins.property
    @jsii.member(jsii_name="prodCode")
    def prod_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: prodCode: The product code. For all available product codes, query the Cloud Siem ListAllProds API.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "prodCode"))

    @prod_code.setter
    def prod_code(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e07672586f534607866ffb7a3d371a8e6afbc210c37cd17c36169a99c4eb7bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "prodCode", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsiem.RosImportLogTasksSubmissionProps",
    jsii_struct_bases=[],
    name_mapping={
        "accounts": "accounts",
        "cloud_code": "cloudCode",
        "log_codes": "logCodes",
        "prod_code": "prodCode",
    },
)
class RosImportLogTasksSubmissionProps:
    def __init__(
        self,
        *,
        accounts: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        cloud_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        log_codes: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        prod_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosImportLogTasksSubmission``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-importlogtaskssubmission

        :param accounts: 
        :param cloud_code: 
        :param log_codes: 
        :param prod_code: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__833dba66408b937aac59ea6d0366be019eff8c7c33abf0d98b4581d69fa377ac)
            check_type(argname="argument accounts", value=accounts, expected_type=type_hints["accounts"])
            check_type(argname="argument cloud_code", value=cloud_code, expected_type=type_hints["cloud_code"])
            check_type(argname="argument log_codes", value=log_codes, expected_type=type_hints["log_codes"])
            check_type(argname="argument prod_code", value=prod_code, expected_type=type_hints["prod_code"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accounts": accounts,
            "cloud_code": cloud_code,
            "log_codes": log_codes,
            "prod_code": prod_code,
        }

    @builtins.property
    def accounts(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: accounts: The list of accounts to be submitted.
        '''
        result = self._values.get("accounts")
        assert result is not None, "Required property 'accounts' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def cloud_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cloudCode: The cloud code. The code that is used for multi-cloud environments. Valid values: qcloud for Tencent Cloud, aliyun for Alibaba Cloud, hcloud for Huawei Cloud
        '''
        result = self._values.get("cloud_code")
        assert result is not None, "Required property 'cloud_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def log_codes(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: logCodes: The list of log codes to be submitted. For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
        '''
        result = self._values.get("log_codes")
        assert result is not None, "Required property 'log_codes' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def prod_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: prodCode: The product code. For all available product codes, query the Cloud Siem ListAllProds API.
        '''
        result = self._values.get("prod_code")
        assert result is not None, "Required property 'prod_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosImportLogTasksSubmissionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUserSourceLogConfig(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsiem.RosUserSourceLogConfig",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CloudSiem::UserSourceLogConfig``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``UserSourceLogConfig`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-usersourcelogconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosUserSourceLogConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f27c725b573572bd250edffbe230134baa1e521012ed46326d8f6a549fa7f3d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__cce35177cf89e15c13ec823e03d9e3f0363c1f0f199be779de84f54f41424f82)
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
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b289ecd79c500867f664e7d444bf7fb02dc6a1f8fead2e1d6853f7d5bc88258)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="sourceLogCode")
    def source_log_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceLogCode: The source log code. For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceLogCode"))

    @source_log_code.setter
    def source_log_code(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f40f5a216f59703e012b8b444a29909a9faba68a65be94577ac003b383c0275)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceLogCode", value)

    @builtins.property
    @jsii.member(jsii_name="sourceLogInfo")
    def source_log_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUserSourceLogConfig.SourceLogInfoProperty"]:
        '''
        :Property: sourceLogInfo: The info of log to be added.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUserSourceLogConfig.SourceLogInfoProperty"], jsii.get(self, "sourceLogInfo"))

    @source_log_info.setter
    def source_log_info(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUserSourceLogConfig.SourceLogInfoProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4fd9bb0b680735180c9c3b74023bb5e3412c30d00d51c532da0ed6e912b9b2db)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceLogInfo", value)

    @builtins.property
    @jsii.member(jsii_name="sourceProdCode")
    def source_prod_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceProdCode: The product code. For all available product codes, query the Cloud Siem ListAllProds API.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceProdCode"))

    @source_prod_code.setter
    def source_prod_code(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e56b8c2b0622c0346521c7ccf41c09ba26c40658d9912aef4142aaf6986098be)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceProdCode", value)

    @builtins.property
    @jsii.member(jsii_name="subUserId")
    def sub_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: subUserId: The Id of the account to be submitted.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "subUserId"))

    @sub_user_id.setter
    def sub_user_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d60f4cf32329263b2411cc2d0875cccab893da10e0aa21fe8933fe528f03420)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "subUserId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cloudsiem.RosUserSourceLogConfig.SourceLogInfoProperty",
        jsii_struct_bases=[],
        name_mapping={
            "log_store": "logStore",
            "project": "project",
            "region_code": "regionCode",
        },
    )
    class SourceLogInfoProperty:
        def __init__(
            self,
            *,
            log_store: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            region_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param log_store: 
            :param project: 
            :param region_code: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0bb0a99a95a23f47c94985b9ece1e8e303db12f42d1bb7ba8b3d2c0c3b0116c6)
                check_type(argname="argument log_store", value=log_store, expected_type=type_hints["log_store"])
                check_type(argname="argument project", value=project, expected_type=type_hints["project"])
                check_type(argname="argument region_code", value=region_code, expected_type=type_hints["region_code"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "log_store": log_store,
                "project": project,
                "region_code": region_code,
            }

        @builtins.property
        def log_store(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: logStore: The logstore name.
            '''
            result = self._values.get("log_store")
            assert result is not None, "Required property 'log_store' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def project(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: project: The log project name
            '''
            result = self._values.get("project")
            assert result is not None, "Required property 'project' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def region_code(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: regionCode: The region of the log
            '''
            result = self._values.get("region_code")
            assert result is not None, "Required property 'region_code' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SourceLogInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsiem.RosUserSourceLogConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "source_log_code": "sourceLogCode",
        "source_log_info": "sourceLogInfo",
        "source_prod_code": "sourceProdCode",
        "sub_user_id": "subUserId",
    },
)
class RosUserSourceLogConfigProps:
    def __init__(
        self,
        *,
        source_log_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_log_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUserSourceLogConfig.SourceLogInfoProperty, typing.Dict[builtins.str, typing.Any]]],
        source_prod_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        sub_user_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosUserSourceLogConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-usersourcelogconfig

        :param source_log_code: 
        :param source_log_info: 
        :param source_prod_code: 
        :param sub_user_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__17524c48bbcb3e5a5fd2951fabe57d3ad84b2563bab3914133c78db359c4d5fe)
            check_type(argname="argument source_log_code", value=source_log_code, expected_type=type_hints["source_log_code"])
            check_type(argname="argument source_log_info", value=source_log_info, expected_type=type_hints["source_log_info"])
            check_type(argname="argument source_prod_code", value=source_prod_code, expected_type=type_hints["source_prod_code"])
            check_type(argname="argument sub_user_id", value=sub_user_id, expected_type=type_hints["sub_user_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "source_log_code": source_log_code,
            "source_log_info": source_log_info,
            "source_prod_code": source_prod_code,
            "sub_user_id": sub_user_id,
        }

    @builtins.property
    def source_log_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceLogCode: The source log code. For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
        '''
        result = self._values.get("source_log_code")
        assert result is not None, "Required property 'source_log_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_log_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUserSourceLogConfig.SourceLogInfoProperty]:
        '''
        :Property: sourceLogInfo: The info of log to be added.
        '''
        result = self._values.get("source_log_info")
        assert result is not None, "Required property 'source_log_info' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUserSourceLogConfig.SourceLogInfoProperty], result)

    @builtins.property
    def source_prod_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceProdCode: The product code. For all available product codes, query the Cloud Siem ListAllProds API.
        '''
        result = self._values.get("source_prod_code")
        assert result is not None, "Required property 'source_prod_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def sub_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: subUserId: The Id of the account to be submitted.
        '''
        result = self._values.get("sub_user_id")
        assert result is not None, "Required property 'sub_user_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserSourceLogConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IUserSourceLogConfig)
class UserSourceLogConfig(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudsiem.UserSourceLogConfig",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CloudSiem::UserSourceLogConfig``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosUserSourceLogConfig``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-usersourcelogconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["UserSourceLogConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4d7cc4e2bfa72d79f497ac1f71db5249ad9226b5fde9e9302b7ef26890e1aefd)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserSourceLogConfigProps":
        return typing.cast("UserSourceLogConfigProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee2ab77e7fe9ab4a93187044e057e89635c8235e8b09bfe8258545aefd4bc91d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2079bab45145745e4e31191bef3b3fd46e6d1b5dc499a7f42be186bcee314620)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3693c7e58c496ea9d43a194c1e1c263d754b9ba04f4a51b2b15808a3f1c28824)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudsiem.UserSourceLogConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "source_log_code": "sourceLogCode",
        "source_log_info": "sourceLogInfo",
        "source_prod_code": "sourceProdCode",
        "sub_user_id": "subUserId",
    },
)
class UserSourceLogConfigProps:
    def __init__(
        self,
        *,
        source_log_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_log_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUserSourceLogConfig.SourceLogInfoProperty, typing.Dict[builtins.str, typing.Any]]],
        source_prod_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        sub_user_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``UserSourceLogConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-usersourcelogconfig

        :param source_log_code: Property sourceLogCode: The source log code. For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
        :param source_log_info: Property sourceLogInfo: The info of log to be added.
        :param source_prod_code: Property sourceProdCode: The product code. For all available product codes, query the Cloud Siem ListAllProds API.
        :param sub_user_id: Property subUserId: The Id of the account to be submitted.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9d9da353d22ab63d7556a67ee2e2073e6129ab769d33aac06861de2e4158684)
            check_type(argname="argument source_log_code", value=source_log_code, expected_type=type_hints["source_log_code"])
            check_type(argname="argument source_log_info", value=source_log_info, expected_type=type_hints["source_log_info"])
            check_type(argname="argument source_prod_code", value=source_prod_code, expected_type=type_hints["source_prod_code"])
            check_type(argname="argument sub_user_id", value=sub_user_id, expected_type=type_hints["sub_user_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "source_log_code": source_log_code,
            "source_log_info": source_log_info,
            "source_prod_code": source_prod_code,
            "sub_user_id": sub_user_id,
        }

    @builtins.property
    def source_log_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceLogCode: The source log code.

        For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
        '''
        result = self._values.get("source_log_code")
        assert result is not None, "Required property 'source_log_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_log_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUserSourceLogConfig.SourceLogInfoProperty]:
        '''Property sourceLogInfo: The info of log to be added.'''
        result = self._values.get("source_log_info")
        assert result is not None, "Required property 'source_log_info' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUserSourceLogConfig.SourceLogInfoProperty], result)

    @builtins.property
    def source_prod_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceProdCode: The product code.

        For all available product codes, query the Cloud Siem ListAllProds API.
        '''
        result = self._values.get("source_prod_code")
        assert result is not None, "Required property 'source_prod_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def sub_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property subUserId: The Id of the account to be submitted.'''
        result = self._values.get("sub_user_id")
        assert result is not None, "Required property 'sub_user_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UserSourceLogConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "IImportLogTasksSubmission",
    "IUserSourceLogConfig",
    "ImportLogTasksSubmission",
    "ImportLogTasksSubmissionProps",
    "RosImportLogTasksSubmission",
    "RosImportLogTasksSubmissionProps",
    "RosUserSourceLogConfig",
    "RosUserSourceLogConfigProps",
    "UserSourceLogConfig",
    "UserSourceLogConfigProps",
]

publication.publish()

def _typecheckingstub__a290dc227325c15de4f39898974ca4f16e1ceaa09c17917047e4edf786596dcb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ImportLogTasksSubmissionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__085290441ed36ffc992601be847566d9a74071993db35d46041f93eb6c7b8935(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98ac3f87ac0b50731741f59333bb6ba3ba13003620cdb45b37965f3a094f9195(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5a1e89c2962a06cbb5c20831751e3cc9fa74950e8d9f700766b00145408ab06(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__266290bcb8fa72d5ae2e0ac9d47601c8ab8a7ca353880b5a96ea1596d2b344f3(
    *,
    accounts: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    cloud_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    log_codes: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    prod_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e7f66e709a8830bd9ff8fd4d775641afb8b1002d4255666c297903c5c9175466(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosImportLogTasksSubmissionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d617d272e3247a23b0a422c6751ef01e7f6d565f9398cd7adf0c7b216519bbc6(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a006a38de4dfb461017ccced235cfeb41b26a75a44386b5170059050833fd68a(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b1134d232ccd3e9110fbecfd6345d7ecb69aacd23b1c800257517dfb94074a1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de2e838bbd1d09e34d7013980fcaa43ed626c908b41931edf05f0f9e0e290f0d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d32f7b4d9c9a6bbe1ba3fb029391aa03980ee4dec4237a4e12ff5e281cd6bdc(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e07672586f534607866ffb7a3d371a8e6afbc210c37cd17c36169a99c4eb7bd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__833dba66408b937aac59ea6d0366be019eff8c7c33abf0d98b4581d69fa377ac(
    *,
    accounts: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    cloud_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    log_codes: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    prod_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f27c725b573572bd250edffbe230134baa1e521012ed46326d8f6a549fa7f3d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosUserSourceLogConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cce35177cf89e15c13ec823e03d9e3f0363c1f0f199be779de84f54f41424f82(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b289ecd79c500867f664e7d444bf7fb02dc6a1f8fead2e1d6853f7d5bc88258(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f40f5a216f59703e012b8b444a29909a9faba68a65be94577ac003b383c0275(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4fd9bb0b680735180c9c3b74023bb5e3412c30d00d51c532da0ed6e912b9b2db(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUserSourceLogConfig.SourceLogInfoProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e56b8c2b0622c0346521c7ccf41c09ba26c40658d9912aef4142aaf6986098be(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d60f4cf32329263b2411cc2d0875cccab893da10e0aa21fe8933fe528f03420(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0bb0a99a95a23f47c94985b9ece1e8e303db12f42d1bb7ba8b3d2c0c3b0116c6(
    *,
    log_store: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    region_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__17524c48bbcb3e5a5fd2951fabe57d3ad84b2563bab3914133c78db359c4d5fe(
    *,
    source_log_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_log_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUserSourceLogConfig.SourceLogInfoProperty, typing.Dict[builtins.str, typing.Any]]],
    source_prod_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    sub_user_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d7cc4e2bfa72d79f497ac1f71db5249ad9226b5fde9e9302b7ef26890e1aefd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[UserSourceLogConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee2ab77e7fe9ab4a93187044e057e89635c8235e8b09bfe8258545aefd4bc91d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2079bab45145745e4e31191bef3b3fd46e6d1b5dc499a7f42be186bcee314620(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3693c7e58c496ea9d43a194c1e1c263d754b9ba04f4a51b2b15808a3f1c28824(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9d9da353d22ab63d7556a67ee2e2073e6129ab769d33aac06861de2e4158684(
    *,
    source_log_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_log_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUserSourceLogConfig.SourceLogInfoProperty, typing.Dict[builtins.str, typing.Any]]],
    source_prod_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    sub_user_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass
