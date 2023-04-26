'''
## Aliyun ROS OSS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as OSS from '@alicloud/ros-cdk-oss';
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


class Bucket(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.Bucket",
):
    '''A ROS resource type:  ``ALIYUN::OSS::Bucket``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["BucketProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::OSS::Bucket``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__730c62484cd5b2f1b487ca1905e107626562b75756b2887a5cdd195f617b4529)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DomainName: The public DNS name of the specified bucket.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrInternalDomainName")
    def attr_internal_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InternalDomainName: The internal DNS name of the specified bucket.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternalDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Name: The name of Bucket.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.BucketProps",
    jsii_struct_bases=[],
    name_mapping={
        "bucket_name": "bucketName",
        "access_control": "accessControl",
        "cors_configuration": "corsConfiguration",
        "deletion_force": "deletionForce",
        "lifecycle_configuration": "lifecycleConfiguration",
        "logging_configuration": "loggingConfiguration",
        "policy": "policy",
        "referer_configuration": "refererConfiguration",
        "server_side_encryption_configuration": "serverSideEncryptionConfiguration",
        "storage_class": "storageClass",
        "tags": "tags",
        "website_configuration": "websiteConfiguration",
    },
)
class BucketProps:
    def __init__(
        self,
        *,
        bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        access_control: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cors_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.CORSConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lifecycle_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.LifecycleConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        logging_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.LoggingConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        referer_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.RefererConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        server_side_encryption_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.ServerSideEncryptionConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        storage_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        website_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.WebsiteConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::OSS::Bucket``.

        :param bucket_name: Property bucketName: bucket name.
        :param access_control: Property accessControl: The access control list.
        :param cors_configuration: Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
        :param deletion_force: Property deletionForce: Whether force delete the relative objects in the bucket. Default value is false.
        :param lifecycle_configuration: Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
        :param logging_configuration: Property loggingConfiguration: Settings that defines where logs are stored.
        :param policy: Property policy: Bucket policy.
        :param referer_configuration: Property refererConfiguration: undefined.
        :param server_side_encryption_configuration: Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
        :param storage_class: Property storageClass: Specifies the storage class of the bucket. Default is "Standard".
        :param tags: Property tags: Bucket tags in k-v pairs format.
        :param website_configuration: Property websiteConfiguration: The properties of website config.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2374e407bda9e563bb7cc76f82731ee58531a6858dce69684dd641441bce9b00)
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument access_control", value=access_control, expected_type=type_hints["access_control"])
            check_type(argname="argument cors_configuration", value=cors_configuration, expected_type=type_hints["cors_configuration"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument lifecycle_configuration", value=lifecycle_configuration, expected_type=type_hints["lifecycle_configuration"])
            check_type(argname="argument logging_configuration", value=logging_configuration, expected_type=type_hints["logging_configuration"])
            check_type(argname="argument policy", value=policy, expected_type=type_hints["policy"])
            check_type(argname="argument referer_configuration", value=referer_configuration, expected_type=type_hints["referer_configuration"])
            check_type(argname="argument server_side_encryption_configuration", value=server_side_encryption_configuration, expected_type=type_hints["server_side_encryption_configuration"])
            check_type(argname="argument storage_class", value=storage_class, expected_type=type_hints["storage_class"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument website_configuration", value=website_configuration, expected_type=type_hints["website_configuration"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket_name": bucket_name,
        }
        if access_control is not None:
            self._values["access_control"] = access_control
        if cors_configuration is not None:
            self._values["cors_configuration"] = cors_configuration
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if lifecycle_configuration is not None:
            self._values["lifecycle_configuration"] = lifecycle_configuration
        if logging_configuration is not None:
            self._values["logging_configuration"] = logging_configuration
        if policy is not None:
            self._values["policy"] = policy
        if referer_configuration is not None:
            self._values["referer_configuration"] = referer_configuration
        if server_side_encryption_configuration is not None:
            self._values["server_side_encryption_configuration"] = server_side_encryption_configuration
        if storage_class is not None:
            self._values["storage_class"] = storage_class
        if tags is not None:
            self._values["tags"] = tags
        if website_configuration is not None:
            self._values["website_configuration"] = website_configuration

    @builtins.property
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bucketName: bucket name.'''
        result = self._values.get("bucket_name")
        assert result is not None, "Required property 'bucket_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def access_control(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accessControl: The access control list.'''
        result = self._values.get("access_control")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cors_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.CORSConfigurationProperty"]]:
        '''Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.'''
        result = self._values.get("cors_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.CORSConfigurationProperty"]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionForce: Whether force delete the relative objects in the bucket.

        Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lifecycle_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.LifecycleConfigurationProperty"]]:
        '''Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.'''
        result = self._values.get("lifecycle_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.LifecycleConfigurationProperty"]], result)

    @builtins.property
    def logging_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.LoggingConfigurationProperty"]]:
        '''Property loggingConfiguration: Settings that defines where logs are stored.'''
        result = self._values.get("logging_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.LoggingConfigurationProperty"]], result)

    @builtins.property
    def policy(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property policy: Bucket policy.'''
        result = self._values.get("policy")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def referer_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.RefererConfigurationProperty"]]:
        '''Property refererConfiguration: undefined.'''
        result = self._values.get("referer_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.RefererConfigurationProperty"]], result)

    @builtins.property
    def server_side_encryption_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.ServerSideEncryptionConfigurationProperty"]]:
        '''Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.'''
        result = self._values.get("server_side_encryption_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.ServerSideEncryptionConfigurationProperty"]], result)

    @builtins.property
    def storage_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property storageClass: Specifies the storage class of the bucket.

        Default is "Standard".
        '''
        result = self._values.get("storage_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Property tags: Bucket tags in k-v pairs format.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def website_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.WebsiteConfigurationProperty"]]:
        '''Property websiteConfiguration: The properties of website config.'''
        result = self._values.get("website_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.WebsiteConfigurationProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BucketProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBucket(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.RosBucket",
):
    '''A ROS template type:  ``ALIYUN::OSS::Bucket``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBucketProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::OSS::Bucket``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4071028f1086ef2a8d1ef1506d63a579b2cf8d550e7156449b09a05fc4e3f7a5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__187423387916f4bdc9b6d0414791fcefc13a698454c7ba1f1c671a0a67ec29a3)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainName: The public DNS name of the specified bucket.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrInternalDomainName")
    def attr_internal_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InternalDomainName: The internal DNS name of the specified bucket.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternalDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Name: The name of Bucket
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="bucketName")
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bucketName: bucket name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bucketName"))

    @bucket_name.setter
    def bucket_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b85d300bd141c569474b2e982197f0370cf6a90f5a084bf5da62914ff2e7f06)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bucketName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0fe35927fa0b06db25165ca3f0f58e7a73b9445161186358061372e338a66eb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="accessControl")
    def access_control(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accessControl: The access control list.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accessControl"))

    @access_control.setter
    def access_control(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61a7738ec80ab9f9bc3aae87799219cebf02e7e8a93bf79f51e7ac53cdb9338c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessControl", value)

    @builtins.property
    @jsii.member(jsii_name="corsConfiguration")
    def cors_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.CORSConfigurationProperty"]]:
        '''
        :Property: corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.CORSConfigurationProperty"]], jsii.get(self, "corsConfiguration"))

    @cors_configuration.setter
    def cors_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.CORSConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8942b9978d920a7b0ecb0c7091bea6276db7f1072b4512318c407e1127f2bc06)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "corsConfiguration", value)

    @builtins.property
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether force delete the relative objects in the bucket. Default value is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4bc0b450845bc1a61aa5d1f0fa500950865aa23e494b60bb9b94aa3586bb5677)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionForce", value)

    @builtins.property
    @jsii.member(jsii_name="lifecycleConfiguration")
    def lifecycle_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.LifecycleConfigurationProperty"]]:
        '''
        :Property: lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.LifecycleConfigurationProperty"]], jsii.get(self, "lifecycleConfiguration"))

    @lifecycle_configuration.setter
    def lifecycle_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.LifecycleConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1a708471b95cf193c959db5fd0267a672a39a713774eb73818f3ad8bb750587)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lifecycleConfiguration", value)

    @builtins.property
    @jsii.member(jsii_name="loggingConfiguration")
    def logging_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.LoggingConfigurationProperty"]]:
        '''
        :Property: loggingConfiguration: Settings that defines where logs are stored.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.LoggingConfigurationProperty"]], jsii.get(self, "loggingConfiguration"))

    @logging_configuration.setter
    def logging_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.LoggingConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b14e50e9493b7ce387caf37c0f3d4c9159a6017d9c2cebc491dd259fd831acb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loggingConfiguration", value)

    @builtins.property
    @jsii.member(jsii_name="policy")
    def policy(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: policy: Bucket policy
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "policy"))

    @policy.setter
    def policy(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca09f44d80ba7e55a5cdcd4f0df96878229f60761f37bf28965174af98d25c6d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policy", value)

    @builtins.property
    @jsii.member(jsii_name="refererConfiguration")
    def referer_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.RefererConfigurationProperty"]]:
        '''
        :Property: refererConfiguration: undefined
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.RefererConfigurationProperty"]], jsii.get(self, "refererConfiguration"))

    @referer_configuration.setter
    def referer_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.RefererConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1d1e94ba56a06821763a7f70c6e11674075a382e6256a264d0b34f44d6cb50c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refererConfiguration", value)

    @builtins.property
    @jsii.member(jsii_name="serverSideEncryptionConfiguration")
    def server_side_encryption_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.ServerSideEncryptionConfigurationProperty"]]:
        '''
        :Property: serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.ServerSideEncryptionConfigurationProperty"]], jsii.get(self, "serverSideEncryptionConfiguration"))

    @server_side_encryption_configuration.setter
    def server_side_encryption_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.ServerSideEncryptionConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b3c5cf45dc33ed6dd434b0e13ed0c172336a9445c58baea170379ca213e86ba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serverSideEncryptionConfiguration", value)

    @builtins.property
    @jsii.member(jsii_name="storageClass")
    def storage_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: storageClass: Specifies the storage class of the bucket. Default is "Standard".
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "storageClass"))

    @storage_class.setter
    def storage_class(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0de248f2d8dbc2439f6ef8822746b2a449c41e402d0ab7e47cb9ec8fbd0dd9e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageClass", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: tags: Bucket tags in k-v pairs format.
        '''
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__450811e87d75543a2070edc450f3db40357478ade5f5f8af9c1244b6c4b61365)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="websiteConfiguration")
    def website_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.WebsiteConfigurationProperty"]]:
        '''
        :Property: websiteConfiguration: The properties of website config.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.WebsiteConfigurationProperty"]], jsii.get(self, "websiteConfiguration"))

    @website_configuration.setter
    def website_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.WebsiteConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4198238cbc909292808bddf648074cfe32a2fa43ae7e383e2519df246c03c296)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "websiteConfiguration", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.AbortMultipartUploadProperty",
        jsii_struct_bases=[],
        name_mapping={"created_before_date": "createdBeforeDate", "days": "days"},
    )
    class AbortMultipartUploadProperty:
        def __init__(
            self,
            *,
            created_before_date: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            days: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param created_before_date: 
            :param days: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__3934ba2fbf015b5413e35819d015a9118560764281258dd4da8bb5c7869b6da9)
                check_type(argname="argument created_before_date", value=created_before_date, expected_type=type_hints["created_before_date"])
                check_type(argname="argument days", value=days, expected_type=type_hints["days"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if created_before_date is not None:
                self._values["created_before_date"] = created_before_date
            if days is not None:
                self._values["days"] = days

        @builtins.property
        def created_before_date(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: createdBeforeDate: undefined
            '''
            result = self._values.get("created_before_date")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def days(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: days: undefined
            '''
            result = self._values.get("days")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AbortMultipartUploadProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.CORSConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={"cors_rule": "corsRule"},
    )
    class CORSConfigurationProperty:
        def __init__(
            self,
            *,
            cors_rule: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.CORSRuleProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param cors_rule: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__4563a0ce00cecd34040601f3d76b7122d55e01316e2b98bd18f8cf1561085b6c)
                check_type(argname="argument cors_rule", value=cors_rule, expected_type=type_hints["cors_rule"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if cors_rule is not None:
                self._values["cors_rule"] = cors_rule

        @builtins.property
        def cors_rule(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.CORSRuleProperty"]]]]:
            '''
            :Property: corsRule: A set of origins and methods that you allow.
            '''
            result = self._values.get("cors_rule")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.CORSRuleProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CORSConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.CORSRuleProperty",
        jsii_struct_bases=[],
        name_mapping={
            "allowed_header": "allowedHeader",
            "allowed_method": "allowedMethod",
            "allowed_origin": "allowedOrigin",
            "expose_header": "exposeHeader",
            "max_age_seconds": "maxAgeSeconds",
        },
    )
    class CORSRuleProperty:
        def __init__(
            self,
            *,
            allowed_header: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            allowed_method: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            allowed_origin: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            expose_header: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            max_age_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param allowed_header: 
            :param allowed_method: 
            :param allowed_origin: 
            :param expose_header: 
            :param max_age_seconds: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__2f111f5c92540f1df4650c4eec6fdc4c40f1e7b7e009c96d02a6934d4944cebe)
                check_type(argname="argument allowed_header", value=allowed_header, expected_type=type_hints["allowed_header"])
                check_type(argname="argument allowed_method", value=allowed_method, expected_type=type_hints["allowed_method"])
                check_type(argname="argument allowed_origin", value=allowed_origin, expected_type=type_hints["allowed_origin"])
                check_type(argname="argument expose_header", value=expose_header, expected_type=type_hints["expose_header"])
                check_type(argname="argument max_age_seconds", value=max_age_seconds, expected_type=type_hints["max_age_seconds"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if allowed_header is not None:
                self._values["allowed_header"] = allowed_header
            if allowed_method is not None:
                self._values["allowed_method"] = allowed_method
            if allowed_origin is not None:
                self._values["allowed_origin"] = allowed_origin
            if expose_header is not None:
                self._values["expose_header"] = expose_header
            if max_age_seconds is not None:
                self._values["max_age_seconds"] = max_age_seconds

        @builtins.property
        def allowed_header(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: allowedHeader: undefined
            '''
            result = self._values.get("allowed_header")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def allowed_method(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: allowedMethod: undefined
            '''
            result = self._values.get("allowed_method")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def allowed_origin(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: allowedOrigin: undefined
            '''
            result = self._values.get("allowed_origin")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def expose_header(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: exposeHeader: undefined
            '''
            result = self._values.get("expose_header")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def max_age_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: maxAgeSeconds: undefined
            '''
            result = self._values.get("max_age_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CORSRuleProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.ExpirationProperty",
        jsii_struct_bases=[],
        name_mapping={"created_before_date": "createdBeforeDate", "days": "days"},
    )
    class ExpirationProperty:
        def __init__(
            self,
            *,
            created_before_date: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            days: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param created_before_date: 
            :param days: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8812eb0ed0e79f296e3e6473d1c2d52261a297caaee23a7eb38b4549f579b4fa)
                check_type(argname="argument created_before_date", value=created_before_date, expected_type=type_hints["created_before_date"])
                check_type(argname="argument days", value=days, expected_type=type_hints["days"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if created_before_date is not None:
                self._values["created_before_date"] = created_before_date
            if days is not None:
                self._values["days"] = days

        @builtins.property
        def created_before_date(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: createdBeforeDate: undefined
            '''
            result = self._values.get("created_before_date")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def days(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: days: undefined
            '''
            result = self._values.get("days")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ExpirationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.LifecycleConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={"rule": "rule"},
    )
    class LifecycleConfigurationProperty:
        def __init__(
            self,
            *,
            rule: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.RuleProperty", typing.Dict[builtins.str, typing.Any]]]]],
        ) -> None:
            '''
            :param rule: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__9370c463a7de461a01f3a5f48f0eea9a1dbe46b234a420cb896bae80830dadfe)
                check_type(argname="argument rule", value=rule, expected_type=type_hints["rule"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "rule": rule,
            }

        @builtins.property
        def rule(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.RuleProperty"]]]:
            '''
            :Property: rule: Describes lifecycle rules for the oss bucket Lifecycle Configuration property.
            '''
            result = self._values.get("rule")
            assert result is not None, "Required property 'rule' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.RuleProperty"]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LifecycleConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.LoggingConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "target_bucket": "targetBucket",
            "target_prefix": "targetPrefix",
        },
    )
    class LoggingConfigurationProperty:
        def __init__(
            self,
            *,
            target_bucket: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            target_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param target_bucket: 
            :param target_prefix: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d35ba80257bb3428431cf432fb831f56c919d5e5242194bf3231c95ff601786a)
                check_type(argname="argument target_bucket", value=target_bucket, expected_type=type_hints["target_bucket"])
                check_type(argname="argument target_prefix", value=target_prefix, expected_type=type_hints["target_prefix"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if target_bucket is not None:
                self._values["target_bucket"] = target_bucket
            if target_prefix is not None:
                self._values["target_prefix"] = target_prefix

        @builtins.property
        def target_bucket(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: targetBucket: Specifies the bucket where you want Aliyun OSS to store server access logs.
            '''
            result = self._values.get("target_bucket")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def target_prefix(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: targetPrefix: This element lets you specify a prefix for the objects that the log files will be stored.
            '''
            result = self._values.get("target_prefix")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LoggingConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.RefererConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "allow_empty_referer": "allowEmptyReferer",
            "referer_list": "refererList",
        },
    )
    class RefererConfigurationProperty:
        def __init__(
            self,
            *,
            allow_empty_referer: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            referer_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param allow_empty_referer: 
            :param referer_list: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__c5e6da584a1336e0b1bf4ae0c58c9c1400b896f6857c6145dff0dc1dee043462)
                check_type(argname="argument allow_empty_referer", value=allow_empty_referer, expected_type=type_hints["allow_empty_referer"])
                check_type(argname="argument referer_list", value=referer_list, expected_type=type_hints["referer_list"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if allow_empty_referer is not None:
                self._values["allow_empty_referer"] = allow_empty_referer
            if referer_list is not None:
                self._values["referer_list"] = referer_list

        @builtins.property
        def allow_empty_referer(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: allowEmptyReferer: undefined
            '''
            result = self._values.get("allow_empty_referer")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def referer_list(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: refererList: undefined
            '''
            result = self._values.get("referer_list")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RefererConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.RuleProperty",
        jsii_struct_bases=[],
        name_mapping={
            "prefix": "prefix",
            "abort_multipart_upload": "abortMultipartUpload",
            "expiration": "expiration",
            "id": "id",
            "status": "status",
        },
    )
    class RuleProperty:
        def __init__(
            self,
            *,
            prefix: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            abort_multipart_upload: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.AbortMultipartUploadProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            expiration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.ExpirationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param prefix: 
            :param abort_multipart_upload: 
            :param expiration: 
            :param id: 
            :param status: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ca14119ad442382fb4fa579a442a8423bfd5f221e6719325d0e6ad26cacead71)
                check_type(argname="argument prefix", value=prefix, expected_type=type_hints["prefix"])
                check_type(argname="argument abort_multipart_upload", value=abort_multipart_upload, expected_type=type_hints["abort_multipart_upload"])
                check_type(argname="argument expiration", value=expiration, expected_type=type_hints["expiration"])
                check_type(argname="argument id", value=id, expected_type=type_hints["id"])
                check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "prefix": prefix,
            }
            if abort_multipart_upload is not None:
                self._values["abort_multipart_upload"] = abort_multipart_upload
            if expiration is not None:
                self._values["expiration"] = expiration
            if id is not None:
                self._values["id"] = id
            if status is not None:
                self._values["status"] = status

        @builtins.property
        def prefix(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: prefix: undefined
            '''
            result = self._values.get("prefix")
            assert result is not None, "Required property 'prefix' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def abort_multipart_upload(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.AbortMultipartUploadProperty"]]:
            '''
            :Property: abortMultipartUpload: undefined
            '''
            result = self._values.get("abort_multipart_upload")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.AbortMultipartUploadProperty"]], result)

        @builtins.property
        def expiration(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.ExpirationProperty"]]:
            '''
            :Property: expiration: undefined
            '''
            result = self._values.get("expiration")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.ExpirationProperty"]], result)

        @builtins.property
        def id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: id: undefined
            '''
            result = self._values.get("id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def status(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: status: undefined
            '''
            result = self._values.get("status")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RuleProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.ServerSideEncryptionConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "sse_algorithm": "sseAlgorithm",
            "kms_master_key_id": "kmsMasterKeyId",
        },
    )
    class ServerSideEncryptionConfigurationProperty:
        def __init__(
            self,
            *,
            sse_algorithm: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            kms_master_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param sse_algorithm: 
            :param kms_master_key_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__21b99abd5f200ae480d6590dc1cce050cb159c64fb0fcee949e87176b5a80612)
                check_type(argname="argument sse_algorithm", value=sse_algorithm, expected_type=type_hints["sse_algorithm"])
                check_type(argname="argument kms_master_key_id", value=kms_master_key_id, expected_type=type_hints["kms_master_key_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "sse_algorithm": sse_algorithm,
            }
            if kms_master_key_id is not None:
                self._values["kms_master_key_id"] = kms_master_key_id

        @builtins.property
        def sse_algorithm(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: sseAlgorithm: Specifies the default server-side encryption method.
            '''
            result = self._values.get("sse_algorithm")
            assert result is not None, "Required property 'sse_algorithm' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def kms_master_key_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: kmsMasterKeyId: Specifies the CMK ID when the value of SSEAlgorithm is KMS and a specified CMK is used for encryption. If the value of SSEAlgorithm is not KMS, this element must be null.
            '''
            result = self._values.get("kms_master_key_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ServerSideEncryptionConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.WebsiteConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "error_document": "errorDocument",
            "index_document": "indexDocument",
        },
    )
    class WebsiteConfigurationProperty:
        def __init__(
            self,
            *,
            error_document: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            index_document: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param error_document: 
            :param index_document: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__54bfc12f984298350062b6bc4277efb132aabc5dbacba804ce82f12fbf84c5ec)
                check_type(argname="argument error_document", value=error_document, expected_type=type_hints["error_document"])
                check_type(argname="argument index_document", value=index_document, expected_type=type_hints["index_document"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if error_document is not None:
                self._values["error_document"] = error_document
            if index_document is not None:
                self._values["index_document"] = index_document

        @builtins.property
        def error_document(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: errorDocument: default error page.
            '''
            result = self._values.get("error_document")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def index_document(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: indexDocument: default home page.
            '''
            result = self._values.get("index_document")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "WebsiteConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.RosBucketProps",
    jsii_struct_bases=[],
    name_mapping={
        "bucket_name": "bucketName",
        "access_control": "accessControl",
        "cors_configuration": "corsConfiguration",
        "deletion_force": "deletionForce",
        "lifecycle_configuration": "lifecycleConfiguration",
        "logging_configuration": "loggingConfiguration",
        "policy": "policy",
        "referer_configuration": "refererConfiguration",
        "server_side_encryption_configuration": "serverSideEncryptionConfiguration",
        "storage_class": "storageClass",
        "tags": "tags",
        "website_configuration": "websiteConfiguration",
    },
)
class RosBucketProps:
    def __init__(
        self,
        *,
        bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        access_control: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cors_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.CORSConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lifecycle_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.LifecycleConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        logging_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.LoggingConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        referer_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.RefererConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        server_side_encryption_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.ServerSideEncryptionConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        storage_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        website_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.WebsiteConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::OSS::Bucket``.

        :param bucket_name: 
        :param access_control: 
        :param cors_configuration: 
        :param deletion_force: 
        :param lifecycle_configuration: 
        :param logging_configuration: 
        :param policy: 
        :param referer_configuration: 
        :param server_side_encryption_configuration: 
        :param storage_class: 
        :param tags: 
        :param website_configuration: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59b8e759d9a1804f51f8db67701032e1a1d434bbb8080006c3aef57ac85282b9)
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument access_control", value=access_control, expected_type=type_hints["access_control"])
            check_type(argname="argument cors_configuration", value=cors_configuration, expected_type=type_hints["cors_configuration"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument lifecycle_configuration", value=lifecycle_configuration, expected_type=type_hints["lifecycle_configuration"])
            check_type(argname="argument logging_configuration", value=logging_configuration, expected_type=type_hints["logging_configuration"])
            check_type(argname="argument policy", value=policy, expected_type=type_hints["policy"])
            check_type(argname="argument referer_configuration", value=referer_configuration, expected_type=type_hints["referer_configuration"])
            check_type(argname="argument server_side_encryption_configuration", value=server_side_encryption_configuration, expected_type=type_hints["server_side_encryption_configuration"])
            check_type(argname="argument storage_class", value=storage_class, expected_type=type_hints["storage_class"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument website_configuration", value=website_configuration, expected_type=type_hints["website_configuration"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket_name": bucket_name,
        }
        if access_control is not None:
            self._values["access_control"] = access_control
        if cors_configuration is not None:
            self._values["cors_configuration"] = cors_configuration
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if lifecycle_configuration is not None:
            self._values["lifecycle_configuration"] = lifecycle_configuration
        if logging_configuration is not None:
            self._values["logging_configuration"] = logging_configuration
        if policy is not None:
            self._values["policy"] = policy
        if referer_configuration is not None:
            self._values["referer_configuration"] = referer_configuration
        if server_side_encryption_configuration is not None:
            self._values["server_side_encryption_configuration"] = server_side_encryption_configuration
        if storage_class is not None:
            self._values["storage_class"] = storage_class
        if tags is not None:
            self._values["tags"] = tags
        if website_configuration is not None:
            self._values["website_configuration"] = website_configuration

    @builtins.property
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bucketName: bucket name.
        '''
        result = self._values.get("bucket_name")
        assert result is not None, "Required property 'bucket_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def access_control(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accessControl: The access control list.
        '''
        result = self._values.get("access_control")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cors_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.CORSConfigurationProperty]]:
        '''
        :Property: corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
        '''
        result = self._values.get("cors_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.CORSConfigurationProperty]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether force delete the relative objects in the bucket. Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lifecycle_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.LifecycleConfigurationProperty]]:
        '''
        :Property: lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
        '''
        result = self._values.get("lifecycle_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.LifecycleConfigurationProperty]], result)

    @builtins.property
    def logging_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.LoggingConfigurationProperty]]:
        '''
        :Property: loggingConfiguration: Settings that defines where logs are stored.
        '''
        result = self._values.get("logging_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.LoggingConfigurationProperty]], result)

    @builtins.property
    def policy(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: policy: Bucket policy
        '''
        result = self._values.get("policy")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def referer_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.RefererConfigurationProperty]]:
        '''
        :Property: refererConfiguration: undefined
        '''
        result = self._values.get("referer_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.RefererConfigurationProperty]], result)

    @builtins.property
    def server_side_encryption_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.ServerSideEncryptionConfigurationProperty]]:
        '''
        :Property: serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
        '''
        result = self._values.get("server_side_encryption_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.ServerSideEncryptionConfigurationProperty]], result)

    @builtins.property
    def storage_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: storageClass: Specifies the storage class of the bucket. Default is "Standard".
        '''
        result = self._values.get("storage_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: tags: Bucket tags in k-v pairs format.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def website_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.WebsiteConfigurationProperty]]:
        '''
        :Property: websiteConfiguration: The properties of website config.
        '''
        result = self._values.get("website_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.WebsiteConfigurationProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBucketProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Bucket",
    "BucketProps",
    "RosBucket",
    "RosBucketProps",
]

publication.publish()

def _typecheckingstub__730c62484cd5b2f1b487ca1905e107626562b75756b2887a5cdd195f617b4529(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BucketProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2374e407bda9e563bb7cc76f82731ee58531a6858dce69684dd641441bce9b00(
    *,
    bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    access_control: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cors_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.CORSConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lifecycle_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.LifecycleConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    logging_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.LoggingConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    referer_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.RefererConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    server_side_encryption_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.ServerSideEncryptionConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    storage_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    website_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.WebsiteConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4071028f1086ef2a8d1ef1506d63a579b2cf8d550e7156449b09a05fc4e3f7a5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBucketProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__187423387916f4bdc9b6d0414791fcefc13a698454c7ba1f1c671a0a67ec29a3(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b85d300bd141c569474b2e982197f0370cf6a90f5a084bf5da62914ff2e7f06(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0fe35927fa0b06db25165ca3f0f58e7a73b9445161186358061372e338a66eb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61a7738ec80ab9f9bc3aae87799219cebf02e7e8a93bf79f51e7ac53cdb9338c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8942b9978d920a7b0ecb0c7091bea6276db7f1072b4512318c407e1127f2bc06(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.CORSConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4bc0b450845bc1a61aa5d1f0fa500950865aa23e494b60bb9b94aa3586bb5677(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1a708471b95cf193c959db5fd0267a672a39a713774eb73818f3ad8bb750587(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.LifecycleConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b14e50e9493b7ce387caf37c0f3d4c9159a6017d9c2cebc491dd259fd831acb(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.LoggingConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca09f44d80ba7e55a5cdcd4f0df96878229f60761f37bf28965174af98d25c6d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1d1e94ba56a06821763a7f70c6e11674075a382e6256a264d0b34f44d6cb50c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.RefererConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b3c5cf45dc33ed6dd434b0e13ed0c172336a9445c58baea170379ca213e86ba(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.ServerSideEncryptionConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0de248f2d8dbc2439f6ef8822746b2a449c41e402d0ab7e47cb9ec8fbd0dd9e7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__450811e87d75543a2070edc450f3db40357478ade5f5f8af9c1244b6c4b61365(
    value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4198238cbc909292808bddf648074cfe32a2fa43ae7e383e2519df246c03c296(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.WebsiteConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3934ba2fbf015b5413e35819d015a9118560764281258dd4da8bb5c7869b6da9(
    *,
    created_before_date: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    days: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4563a0ce00cecd34040601f3d76b7122d55e01316e2b98bd18f8cf1561085b6c(
    *,
    cors_rule: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.CORSRuleProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f111f5c92540f1df4650c4eec6fdc4c40f1e7b7e009c96d02a6934d4944cebe(
    *,
    allowed_header: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    allowed_method: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    allowed_origin: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    expose_header: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    max_age_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8812eb0ed0e79f296e3e6473d1c2d52261a297caaee23a7eb38b4549f579b4fa(
    *,
    created_before_date: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    days: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9370c463a7de461a01f3a5f48f0eea9a1dbe46b234a420cb896bae80830dadfe(
    *,
    rule: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.RuleProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d35ba80257bb3428431cf432fb831f56c919d5e5242194bf3231c95ff601786a(
    *,
    target_bucket: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    target_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5e6da584a1336e0b1bf4ae0c58c9c1400b896f6857c6145dff0dc1dee043462(
    *,
    allow_empty_referer: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    referer_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca14119ad442382fb4fa579a442a8423bfd5f221e6719325d0e6ad26cacead71(
    *,
    prefix: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    abort_multipart_upload: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.AbortMultipartUploadProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    expiration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.ExpirationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__21b99abd5f200ae480d6590dc1cce050cb159c64fb0fcee949e87176b5a80612(
    *,
    sse_algorithm: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    kms_master_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54bfc12f984298350062b6bc4277efb132aabc5dbacba804ce82f12fbf84c5ec(
    *,
    error_document: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    index_document: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59b8e759d9a1804f51f8db67701032e1a1d434bbb8080006c3aef57ac85282b9(
    *,
    bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    access_control: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cors_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.CORSConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lifecycle_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.LifecycleConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    logging_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.LoggingConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    referer_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.RefererConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    server_side_encryption_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.ServerSideEncryptionConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    storage_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    website_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.WebsiteConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass
