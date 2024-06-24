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
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::OSS::Bucket``, which is used to create an Object Storage Service (OSS) bucket.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosBucket``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["BucketProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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

    @jsii.member(jsii_name="validateBucketName")
    @builtins.classmethod
    def validate_bucket_name(cls, physical_name: builtins.str) -> None:
        '''Thrown an exception if the given bucket name is not valid.

        :param physical_name: name of the bucket.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b1464ce9f3374036a96752dc41d4d29b9e28f0fa299122282936bf27c08da3c)
            check_type(argname="argument physical_name", value=physical_name, expected_type=type_hints["physical_name"])
        return typing.cast(None, jsii.sinvoke(cls, "validateBucketName", [physical_name]))

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

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7756fc53d73a69497adac3b3eef813ed97a80f8a4ab2ea8329b00bc52ee2b8f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c54e7b952c59e9482b53523b6463eccb970c2b6933b06f7951e3580e0e363c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "BucketProps":
        return typing.cast("BucketProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "BucketProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__622d32f60e7bf6fa77f3e4b8ff10e1b394fcf2f2e6a706ead24d874f0f121cb2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4070c676c2db8e03e891930c33b92cee65a18ff152d144ce83613a30bf35b248)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.BucketAttributes",
    jsii_struct_bases=[],
    name_mapping={
        "bucket_domain_name": "bucketDomainName",
        "bucket_endpoint": "bucketEndpoint",
        "bucket_name": "bucketName",
        "bucket_website_url": "bucketWebsiteUrl",
        "is_website": "isWebsite",
        "region": "region",
    },
)
class BucketAttributes:
    def __init__(
        self,
        *,
        bucket_domain_name: typing.Optional[builtins.str] = None,
        bucket_endpoint: typing.Optional[builtins.str] = None,
        bucket_name: typing.Optional[builtins.str] = None,
        bucket_website_url: typing.Optional[builtins.str] = None,
        is_website: typing.Optional[builtins.bool] = None,
        region: typing.Optional[builtins.str] = None,
    ) -> None:
        '''A reference to a bucket outside this stack.

        :param bucket_domain_name: The domain name of the bucket. Default: - Inferred from bucket name and region
        :param bucket_endpoint: The endpoint of the bucket. Default: - Inferred from region
        :param bucket_name: The name of the bucket.
        :param bucket_website_url: The website URL of the bucket (if static web hosting is enabled). Default: - Inferred from bucket name and region
        :param is_website: If this bucket has been configured for static website hosting. Default: false
        :param region: The region this existing bucket is in. Features that require the region (e.g. ``bucketWebsiteUrl``) won't fully work if the region cannot be correctly inferred. Default: - it's assumed the bucket is in the same region as the scope it's being imported into
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9184223f55b99e95b82356408cffdebead93fea499d19cb4becb1c40e1520f16)
            check_type(argname="argument bucket_domain_name", value=bucket_domain_name, expected_type=type_hints["bucket_domain_name"])
            check_type(argname="argument bucket_endpoint", value=bucket_endpoint, expected_type=type_hints["bucket_endpoint"])
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument bucket_website_url", value=bucket_website_url, expected_type=type_hints["bucket_website_url"])
            check_type(argname="argument is_website", value=is_website, expected_type=type_hints["is_website"])
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if bucket_domain_name is not None:
            self._values["bucket_domain_name"] = bucket_domain_name
        if bucket_endpoint is not None:
            self._values["bucket_endpoint"] = bucket_endpoint
        if bucket_name is not None:
            self._values["bucket_name"] = bucket_name
        if bucket_website_url is not None:
            self._values["bucket_website_url"] = bucket_website_url
        if is_website is not None:
            self._values["is_website"] = is_website
        if region is not None:
            self._values["region"] = region

    @builtins.property
    def bucket_domain_name(self) -> typing.Optional[builtins.str]:
        '''The domain name of the bucket.

        :default: - Inferred from bucket name and region
        '''
        result = self._values.get("bucket_domain_name")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def bucket_endpoint(self) -> typing.Optional[builtins.str]:
        '''The endpoint of the bucket.

        :default: - Inferred from region
        '''
        result = self._values.get("bucket_endpoint")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def bucket_name(self) -> typing.Optional[builtins.str]:
        '''The name of the bucket.'''
        result = self._values.get("bucket_name")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def bucket_website_url(self) -> typing.Optional[builtins.str]:
        '''The website URL of the bucket (if static web hosting is enabled).

        :default: - Inferred from bucket name and region
        '''
        result = self._values.get("bucket_website_url")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def is_website(self) -> typing.Optional[builtins.bool]:
        '''If this bucket has been configured for static website hosting.

        :default: false
        '''
        result = self._values.get("is_website")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def region(self) -> typing.Optional[builtins.str]:
        '''The region this existing bucket is in.

        Features that require the region (e.g. ``bucketWebsiteUrl``) won't fully work
        if the region cannot be correctly inferred.

        :default: - it's assumed the bucket is in the same region as the scope it's being imported into
        '''
        result = self._values.get("region")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BucketAttributes(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.BucketProps",
    jsii_struct_bases=[],
    name_mapping={
        "bucket_name": "bucketName",
        "access_control": "accessControl",
        "cors_configuration": "corsConfiguration",
        "deletion_force": "deletionForce",
        "enable_oss_hdfs_service": "enableOssHdfsService",
        "lifecycle_configuration": "lifecycleConfiguration",
        "logging_configuration": "loggingConfiguration",
        "policy": "policy",
        "redundancy_type": "redundancyType",
        "referer_configuration": "refererConfiguration",
        "resource_group_id": "resourceGroupId",
        "server_side_encryption_configuration": "serverSideEncryptionConfiguration",
        "storage_class": "storageClass",
        "tags": "tags",
        "versioning_configuration": "versioningConfiguration",
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
        enable_oss_hdfs_service: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lifecycle_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.LifecycleConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        logging_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.LoggingConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        referer_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.RefererConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        server_side_encryption_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.ServerSideEncryptionConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        storage_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        versioning_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.VersioningConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        website_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.WebsiteConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``Bucket``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket

        :param bucket_name: Property bucketName: bucket name.
        :param access_control: Property accessControl: The access control list.
        :param cors_configuration: Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
        :param deletion_force: Property deletionForce: Whether force delete the relative objects in the bucket. Default value is false.
        :param enable_oss_hdfs_service: Property enableOssHdfsService: Whether enable OSS-HDFS service. **Note**: Once it's enabled, it can't be disabled again.
        :param lifecycle_configuration: Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
        :param logging_configuration: Property loggingConfiguration: Settings that defines where logs are stored.
        :param policy: Property policy: Bucket policy.
        :param redundancy_type: Property redundancyType: Specifies the data disaster recovery type of the storage space. The value range is as follows: LRS (default): Local redundant LRS stores your data redundantly on different storage devices in the same availability zone, and can support data loss and normal access even when two storage devices are damaged concurrently. ZRS: Intra-city redundant ZRS adopts a data redundancy storage mechanism in multiple availability zones (AZ), and stores user data redundantly in multiple availability zones in the same region. When an availability zone is unavailable, normal access to data can still be guaranteed.
        :param referer_configuration: Property refererConfiguration: undefined.
        :param resource_group_id: Property resourceGroupId: The resource group id.
        :param server_side_encryption_configuration: Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
        :param storage_class: Property storageClass: Specifies the storage class of the bucket. Default is "Standard".
        :param tags: Property tags: Bucket tags in k-v pairs format.
        :param versioning_configuration: Property versioningConfiguration: A state of versioning.
        :param website_configuration: Property websiteConfiguration: The properties of website config.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2374e407bda9e563bb7cc76f82731ee58531a6858dce69684dd641441bce9b00)
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument access_control", value=access_control, expected_type=type_hints["access_control"])
            check_type(argname="argument cors_configuration", value=cors_configuration, expected_type=type_hints["cors_configuration"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument enable_oss_hdfs_service", value=enable_oss_hdfs_service, expected_type=type_hints["enable_oss_hdfs_service"])
            check_type(argname="argument lifecycle_configuration", value=lifecycle_configuration, expected_type=type_hints["lifecycle_configuration"])
            check_type(argname="argument logging_configuration", value=logging_configuration, expected_type=type_hints["logging_configuration"])
            check_type(argname="argument policy", value=policy, expected_type=type_hints["policy"])
            check_type(argname="argument redundancy_type", value=redundancy_type, expected_type=type_hints["redundancy_type"])
            check_type(argname="argument referer_configuration", value=referer_configuration, expected_type=type_hints["referer_configuration"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument server_side_encryption_configuration", value=server_side_encryption_configuration, expected_type=type_hints["server_side_encryption_configuration"])
            check_type(argname="argument storage_class", value=storage_class, expected_type=type_hints["storage_class"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument versioning_configuration", value=versioning_configuration, expected_type=type_hints["versioning_configuration"])
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
        if enable_oss_hdfs_service is not None:
            self._values["enable_oss_hdfs_service"] = enable_oss_hdfs_service
        if lifecycle_configuration is not None:
            self._values["lifecycle_configuration"] = lifecycle_configuration
        if logging_configuration is not None:
            self._values["logging_configuration"] = logging_configuration
        if policy is not None:
            self._values["policy"] = policy
        if redundancy_type is not None:
            self._values["redundancy_type"] = redundancy_type
        if referer_configuration is not None:
            self._values["referer_configuration"] = referer_configuration
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if server_side_encryption_configuration is not None:
            self._values["server_side_encryption_configuration"] = server_side_encryption_configuration
        if storage_class is not None:
            self._values["storage_class"] = storage_class
        if tags is not None:
            self._values["tags"] = tags
        if versioning_configuration is not None:
            self._values["versioning_configuration"] = versioning_configuration
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
    def enable_oss_hdfs_service(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableOssHdfsService: Whether enable OSS-HDFS service.

        **Note**: Once it's enabled, it can't be disabled again.
        '''
        result = self._values.get("enable_oss_hdfs_service")
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
    def redundancy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property redundancyType: Specifies the data disaster recovery type of the storage space.

        The value range is as follows:
        LRS (default): Local redundant LRS stores your data redundantly on different storage devices in the same availability zone, and can support data loss and normal access even when two storage devices are damaged concurrently.
        ZRS: Intra-city redundant ZRS adopts a data redundancy storage mechanism in multiple availability zones (AZ), and stores user data redundantly in multiple availability zones in the same region. When an availability zone is unavailable, normal access to data can still be guaranteed.
        '''
        result = self._values.get("redundancy_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def referer_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.RefererConfigurationProperty"]]:
        '''Property refererConfiguration: undefined.'''
        result = self._values.get("referer_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.RefererConfigurationProperty"]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def versioning_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.VersioningConfigurationProperty"]]:
        '''Property versioningConfiguration: A state of versioning.'''
        result = self._values.get("versioning_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.VersioningConfigurationProperty"]], result)

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


class Directory(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.Directory",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::OSS::Directory``, which is used to create a directory for a specified bucket.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDirectory``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-directory
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DirectoryProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c56b96bc948df5bafd30ccda11e91f12480860a8bf184df3b63d4a85b4b603d8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBucketName")
    def attr_bucket_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute BucketName: The name of Bucket.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBucketName"))

    @builtins.property
    @jsii.member(jsii_name="attrDirectoryName")
    def attr_directory_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DirectoryName: The name of Directory.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDirectoryName"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2eac822e31f0b14f0d445fcda5edcd9fb35550a0a54886dfaf08136f102fcc01)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__51e3e791fb2d0bdf654569dd7ce8a93ee24d8579014569f016d6566c6c629333)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "DirectoryProps":
        return typing.cast("DirectoryProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "DirectoryProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18ff22d48361bc308ee42442aef7ecbed12661ebddd89bf323e426587df923db)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__298c85fb6fd909790774361a86ea13d1df94e101a4660380ac15b037f121662a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.DirectoryProps",
    jsii_struct_bases=[],
    name_mapping={
        "bucket_name": "bucketName",
        "directory_name": "directoryName",
        "deletion_force": "deletionForce",
    },
)
class DirectoryProps:
    def __init__(
        self,
        *,
        bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        directory_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Directory``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-directory

        :param bucket_name: Property bucketName: bucket name.
        :param directory_name: Property directoryName: Directory name.
        :param deletion_force: Property deletionForce: Whether force delete the relative objects in the directory. Default value is false.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__df2cb970d623e337f370e0d103d5f60438c56810a3ec723aeafef623f143ae32)
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument directory_name", value=directory_name, expected_type=type_hints["directory_name"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket_name": bucket_name,
            "directory_name": directory_name,
        }
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force

    @builtins.property
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bucketName: bucket name.'''
        result = self._values.get("bucket_name")
        assert result is not None, "Required property 'bucket_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def directory_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property directoryName: Directory name.'''
        result = self._values.get("directory_name")
        assert result is not None, "Required property 'directory_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionForce: Whether force delete the relative objects in the directory.

        Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DirectoryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Domain(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.Domain",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::OSS::Domain``, which is used to bind a custom domain name.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDomain``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-domain
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DomainProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__146aa14b61658a030a56558c92a249b414a7e999717b613c98ec1b00cb1e3c98)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBucketName")
    def attr_bucket_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute BucketName: The name of Bucket.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBucketName"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DomainName: The custom domain name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2d7e8692b736cc8dbf7dee0a6ed4e275320d2ea0c9ae86afb9e11fe4bda0d43)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e38311073c8b58de75347086e3a426e8b627724ed3e80d2b897e9cf83d39abb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "DomainProps":
        return typing.cast("DomainProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "DomainProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9e5922433fec4a53fb05386bc5a0ab0bbb7ca8fb7150b96f438f1cd02f40608)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__742ad1e383e99aac79692ae4615b4b3604c5b48599e3657cdb22867d54cd4421)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.DomainProps",
    jsii_struct_bases=[],
    name_mapping={"bucket_name": "bucketName", "domain_name": "domainName"},
)
class DomainProps:
    def __init__(
        self,
        *,
        bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``Domain``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-domain

        :param bucket_name: Property bucketName: bucket name.
        :param domain_name: Property domainName: Domain name.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6159db363f2f92413d166bdeb6f6f022d6d008f9ddfaaba90df63ddf6367c29a)
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket_name": bucket_name,
            "domain_name": domain_name,
        }

    @builtins.property
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bucketName: bucket name.'''
        result = self._values.get("bucket_name")
        assert result is not None, "Required property 'bucket_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domainName: Domain name.'''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ObjectAcl(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.ObjectAcl",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::OSS::ObjectAcl``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosObjectAcl``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-objectacl
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ObjectAclProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a88914b78a3654af71d7a958640e90202587322368de62c5c6376b7e87c69048)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e792f1fb174116eddc5223a564f90ea8ed5dc5f242bfb41f0e277e8bd44ae7a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c30d0fd226c6b9c13882b0736098560078ead93d6d432ffb033995d37fa71f12)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ObjectAclProps":
        return typing.cast("ObjectAclProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ObjectAclProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59c9e234b731e584f60422d61884acdc5427e28bfc6517256dc1267921d99f55)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__04d543decd4dee14963e4214f345c05402befc8a90920e96c846e335723079cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.ObjectAclProps",
    jsii_struct_bases=[],
    name_mapping={
        "bucket": "bucket",
        "object_acl": "objectAcl",
        "object_key": "objectKey",
    },
)
class ObjectAclProps:
    def __init__(
        self,
        *,
        bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        object_acl: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        object_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ObjectAcl``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-objectacl

        :param bucket: Property bucket: Bucket name.
        :param object_acl: Property objectAcl: Object acl.
        :param object_key: Property objectKey: Object key.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ed4cfa392490e28309fc8acc620409be48856a8f74b8fc575ba3c73dae79e5e)
            check_type(argname="argument bucket", value=bucket, expected_type=type_hints["bucket"])
            check_type(argname="argument object_acl", value=object_acl, expected_type=type_hints["object_acl"])
            check_type(argname="argument object_key", value=object_key, expected_type=type_hints["object_key"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket": bucket,
            "object_acl": object_acl,
            "object_key": object_key,
        }

    @builtins.property
    def bucket(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bucket: Bucket name.'''
        result = self._values.get("bucket")
        assert result is not None, "Required property 'bucket' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def object_acl(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property objectAcl: Object acl.'''
        result = self._values.get("object_acl")
        assert result is not None, "Required property 'object_acl' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def object_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property objectKey: Object key.'''
        result = self._values.get("object_key")
        assert result is not None, "Required property 'object_key' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ObjectAclProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBucket(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.RosBucket",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::OSS::Bucket``, which is used to create an Object Storage Service (OSS) bucket.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Bucket`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBucketProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
    @jsii.member(jsii_name="enableOssHdfsService")
    def enable_oss_hdfs_service(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableOssHdfsService: Whether enable OSS-HDFS service.
        **Note**: Once it's enabled, it can't be disabled again.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableOssHdfsService"))

    @enable_oss_hdfs_service.setter
    def enable_oss_hdfs_service(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae097ab9f27a9db23f521656f49e73fd8adafb3f45e12f531aba97ded51cf1d6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableOssHdfsService", value)

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
    @jsii.member(jsii_name="redundancyType")
    def redundancy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        redundancyType: Specifies the data disaster recovery type of the storage space. The value range is as follows:
        LRS (default): Local redundant LRS stores your data redundantly on different storage devices in the same availability zone, and can support data loss and normal access even when two storage devices are damaged concurrently.
        ZRS: Intra-city redundant ZRS adopts a data redundancy storage mechanism in multiple availability zones (AZ), and stores user data redundantly in multiple availability zones in the same region. When an availability zone is unavailable, normal access to data can still be guaranteed.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "redundancyType"))

    @redundancy_type.setter
    def redundancy_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23f4c6306b9f2a6f1bdcdd6776db4454358a7513bdc61ee2a87ac484a2399f40)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "redundancyType", value)

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
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82f278d2ab7e19b09646d15c71ba467b5ab79743cceae9e032615eaf8ee5e981)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

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
    @jsii.member(jsii_name="versioningConfiguration")
    def versioning_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.VersioningConfigurationProperty"]]:
        '''
        :Property: versioningConfiguration: A state of versioning
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.VersioningConfigurationProperty"]], jsii.get(self, "versioningConfiguration"))

    @versioning_configuration.setter
    def versioning_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.VersioningConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6397ea1c5ea28e6509c6541ecd6007cc68a550434ac40c6843f32a2e06b82997)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "versioningConfiguration", value)

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
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.VersioningConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={"status": "status"},
    )
    class VersioningConfigurationProperty:
        def __init__(
            self,
            *,
            status: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param status: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b8f66b3d0c710d8e5bf5c7477590933a5128c030dfb04aa0e2fcd9cd7ba851d5)
                check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "status": status,
            }

        @builtins.property
        def status(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: status: Specifies the versioning state of a bucket. Valid values: Enabled and Suspended.
            '''
            result = self._values.get("status")
            assert result is not None, "Required property 'status' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VersioningConfigurationProperty(%s)" % ", ".join(
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
        "enable_oss_hdfs_service": "enableOssHdfsService",
        "lifecycle_configuration": "lifecycleConfiguration",
        "logging_configuration": "loggingConfiguration",
        "policy": "policy",
        "redundancy_type": "redundancyType",
        "referer_configuration": "refererConfiguration",
        "resource_group_id": "resourceGroupId",
        "server_side_encryption_configuration": "serverSideEncryptionConfiguration",
        "storage_class": "storageClass",
        "tags": "tags",
        "versioning_configuration": "versioningConfiguration",
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
        enable_oss_hdfs_service: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lifecycle_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.LifecycleConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        logging_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.LoggingConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        referer_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.RefererConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        server_side_encryption_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.ServerSideEncryptionConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        storage_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        versioning_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.VersioningConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        website_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.WebsiteConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosBucket``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket

        :param bucket_name: 
        :param access_control: 
        :param cors_configuration: 
        :param deletion_force: 
        :param enable_oss_hdfs_service: 
        :param lifecycle_configuration: 
        :param logging_configuration: 
        :param policy: 
        :param redundancy_type: 
        :param referer_configuration: 
        :param resource_group_id: 
        :param server_side_encryption_configuration: 
        :param storage_class: 
        :param tags: 
        :param versioning_configuration: 
        :param website_configuration: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59b8e759d9a1804f51f8db67701032e1a1d434bbb8080006c3aef57ac85282b9)
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument access_control", value=access_control, expected_type=type_hints["access_control"])
            check_type(argname="argument cors_configuration", value=cors_configuration, expected_type=type_hints["cors_configuration"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument enable_oss_hdfs_service", value=enable_oss_hdfs_service, expected_type=type_hints["enable_oss_hdfs_service"])
            check_type(argname="argument lifecycle_configuration", value=lifecycle_configuration, expected_type=type_hints["lifecycle_configuration"])
            check_type(argname="argument logging_configuration", value=logging_configuration, expected_type=type_hints["logging_configuration"])
            check_type(argname="argument policy", value=policy, expected_type=type_hints["policy"])
            check_type(argname="argument redundancy_type", value=redundancy_type, expected_type=type_hints["redundancy_type"])
            check_type(argname="argument referer_configuration", value=referer_configuration, expected_type=type_hints["referer_configuration"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument server_side_encryption_configuration", value=server_side_encryption_configuration, expected_type=type_hints["server_side_encryption_configuration"])
            check_type(argname="argument storage_class", value=storage_class, expected_type=type_hints["storage_class"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument versioning_configuration", value=versioning_configuration, expected_type=type_hints["versioning_configuration"])
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
        if enable_oss_hdfs_service is not None:
            self._values["enable_oss_hdfs_service"] = enable_oss_hdfs_service
        if lifecycle_configuration is not None:
            self._values["lifecycle_configuration"] = lifecycle_configuration
        if logging_configuration is not None:
            self._values["logging_configuration"] = logging_configuration
        if policy is not None:
            self._values["policy"] = policy
        if redundancy_type is not None:
            self._values["redundancy_type"] = redundancy_type
        if referer_configuration is not None:
            self._values["referer_configuration"] = referer_configuration
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if server_side_encryption_configuration is not None:
            self._values["server_side_encryption_configuration"] = server_side_encryption_configuration
        if storage_class is not None:
            self._values["storage_class"] = storage_class
        if tags is not None:
            self._values["tags"] = tags
        if versioning_configuration is not None:
            self._values["versioning_configuration"] = versioning_configuration
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
    def enable_oss_hdfs_service(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableOssHdfsService: Whether enable OSS-HDFS service.
        **Note**: Once it's enabled, it can't be disabled again.
        '''
        result = self._values.get("enable_oss_hdfs_service")
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
    def redundancy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        redundancyType: Specifies the data disaster recovery type of the storage space. The value range is as follows:
        LRS (default): Local redundant LRS stores your data redundantly on different storage devices in the same availability zone, and can support data loss and normal access even when two storage devices are damaged concurrently.
        ZRS: Intra-city redundant ZRS adopts a data redundancy storage mechanism in multiple availability zones (AZ), and stores user data redundantly in multiple availability zones in the same region. When an availability zone is unavailable, normal access to data can still be guaranteed.
        '''
        result = self._values.get("redundancy_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def versioning_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.VersioningConfigurationProperty]]:
        '''
        :Property: versioningConfiguration: A state of versioning
        '''
        result = self._values.get("versioning_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.VersioningConfigurationProperty]], result)

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


class RosDirectory(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.RosDirectory",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::OSS::Directory``, which is used to create a directory for a specified bucket.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Directory`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-directory
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDirectoryProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9120c9e4ae48c332de0f0d5c7e64d12ce0b680fe06cccd6edd551882d6d84a3)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3f3c66bb9e7962a2837b7e713cf48b8172d52576d6fc4bdeb0643901a5c96cf0)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBucketName")
    def attr_bucket_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BucketName: The name of Bucket
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBucketName"))

    @builtins.property
    @jsii.member(jsii_name="attrDirectoryName")
    def attr_directory_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DirectoryName: The name of Directory
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDirectoryName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__094b93b571c4fee2408fd6d4435fbe19aad5738b05b52d2a3ece89d1a81b3751)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bucketName", value)

    @builtins.property
    @jsii.member(jsii_name="directoryName")
    def directory_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryName: Directory name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "directoryName"))

    @directory_name.setter
    def directory_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb5844ea4373044ae1fffcaf95f7993c7f6c19adbaf41b7b233703e8d60351f9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "directoryName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bb939ab5aa6986433f52a3f0c9ae830f8a146d4a625e735f03a181c6d6866526)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether force delete the relative objects in the directory. Default value is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0f8556b8eff48addd8855753113aad9c6a294840940974db9a7c78e314648a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionForce", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.RosDirectoryProps",
    jsii_struct_bases=[],
    name_mapping={
        "bucket_name": "bucketName",
        "directory_name": "directoryName",
        "deletion_force": "deletionForce",
    },
)
class RosDirectoryProps:
    def __init__(
        self,
        *,
        bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        directory_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDirectory``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-directory

        :param bucket_name: 
        :param directory_name: 
        :param deletion_force: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__850be1f972b25386682ff2233242a3681ea732ca5e68445c34d7dd16e0a6151e)
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument directory_name", value=directory_name, expected_type=type_hints["directory_name"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket_name": bucket_name,
            "directory_name": directory_name,
        }
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force

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
    def directory_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryName: Directory name
        '''
        result = self._values.get("directory_name")
        assert result is not None, "Required property 'directory_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether force delete the relative objects in the directory. Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDirectoryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDomain(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.RosDomain",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::OSS::Domain``, which is used to bind a custom domain name.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Domain`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-domain
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDomainProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5f092cad0d6a0a777305c359f4ebf6ee37871b961c3f80ea31ce881d6223644)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b50547bb8875dbb25f224523624d75fcec3b2709f5d7dee53b700524d8521ea4)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBucketName")
    def attr_bucket_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BucketName: The name of Bucket
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBucketName"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainName: The custom domain name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__d40c2ccb7fa9acbbe891068ca8b87a965fded1f87f3428299438d0ce8afa6aa8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bucketName", value)

    @builtins.property
    @jsii.member(jsii_name="domainName")
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: Domain name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domainName"))

    @domain_name.setter
    def domain_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5cc953f8996caf9c1193b9511198d98efb9ac9857d092f5c61d10673374666eb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__adbc441337559cb44b30e2dcd17f607bb2f59196a53192cb66f265d5d1eb63aa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.RosDomainProps",
    jsii_struct_bases=[],
    name_mapping={"bucket_name": "bucketName", "domain_name": "domainName"},
)
class RosDomainProps:
    def __init__(
        self,
        *,
        bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosDomain``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-domain

        :param bucket_name: 
        :param domain_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d153c1ee543a64c26da9ae81a2a61748f9ce2a429ecc474e513b9932e3938aec)
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket_name": bucket_name,
            "domain_name": domain_name,
        }

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
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: Domain name
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosObjectAcl(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.RosObjectAcl",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::OSS::ObjectAcl``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ObjectAcl`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-objectacl
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosObjectAclProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc109fa8c24f6dc389764378d612836e4275e7f549d972b097a6a1d592e4ba63)
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
            type_hints = typing.get_type_hints(_typecheckingstub__33f01656b8b2f44ab41f30be5093470e0ec02d942d7ee4fa26e2c59ab66b7bf7)
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
    @jsii.member(jsii_name="bucket")
    def bucket(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bucket: Bucket name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bucket"))

    @bucket.setter
    def bucket(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6f3bfa1bc56147e7b83b3c833462c96aca23c53cf033cb66d6ca427d77b8721)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bucket", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d8fc85fbbdf17b7d543a3f79cc3150541e360aa5734bd97c64d1af29ba5f08d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="objectAcl")
    def object_acl(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: objectAcl: Object acl.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "objectAcl"))

    @object_acl.setter
    def object_acl(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30d4542d3377413a29c6e0c227a0e083e75efb70019eb43f6bb0170b42ff6706)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "objectAcl", value)

    @builtins.property
    @jsii.member(jsii_name="objectKey")
    def object_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: objectKey: Object key.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "objectKey"))

    @object_key.setter
    def object_key(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f10b2b3fcaa3f78283f44b29c06d3cb157f3cfc87fa2e38bf7cf5f533850ede)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "objectKey", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.RosObjectAclProps",
    jsii_struct_bases=[],
    name_mapping={
        "bucket": "bucket",
        "object_acl": "objectAcl",
        "object_key": "objectKey",
    },
)
class RosObjectAclProps:
    def __init__(
        self,
        *,
        bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        object_acl: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        object_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosObjectAcl``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-objectacl

        :param bucket: 
        :param object_acl: 
        :param object_key: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e691ba75458f52783139e7ec0e3adbb5f1c4f528ee4117b9b0ce9e27bf3289e8)
            check_type(argname="argument bucket", value=bucket, expected_type=type_hints["bucket"])
            check_type(argname="argument object_acl", value=object_acl, expected_type=type_hints["object_acl"])
            check_type(argname="argument object_key", value=object_key, expected_type=type_hints["object_key"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket": bucket,
            "object_acl": object_acl,
            "object_key": object_key,
        }

    @builtins.property
    def bucket(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bucket: Bucket name.
        '''
        result = self._values.get("bucket")
        assert result is not None, "Required property 'bucket' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def object_acl(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: objectAcl: Object acl.
        '''
        result = self._values.get("object_acl")
        assert result is not None, "Required property 'object_acl' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def object_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: objectKey: Object key.
        '''
        result = self._values.get("object_key")
        assert result is not None, "Required property 'object_key' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosObjectAclProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Bucket",
    "BucketAttributes",
    "BucketProps",
    "Directory",
    "DirectoryProps",
    "Domain",
    "DomainProps",
    "ObjectAcl",
    "ObjectAclProps",
    "RosBucket",
    "RosBucketProps",
    "RosDirectory",
    "RosDirectoryProps",
    "RosDomain",
    "RosDomainProps",
    "RosObjectAcl",
    "RosObjectAclProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__730c62484cd5b2f1b487ca1905e107626562b75756b2887a5cdd195f617b4529(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BucketProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b1464ce9f3374036a96752dc41d4d29b9e28f0fa299122282936bf27c08da3c(
    physical_name: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7756fc53d73a69497adac3b3eef813ed97a80f8a4ab2ea8329b00bc52ee2b8f4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c54e7b952c59e9482b53523b6463eccb970c2b6933b06f7951e3580e0e363c5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__622d32f60e7bf6fa77f3e4b8ff10e1b394fcf2f2e6a706ead24d874f0f121cb2(
    value: BucketProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4070c676c2db8e03e891930c33b92cee65a18ff152d144ce83613a30bf35b248(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9184223f55b99e95b82356408cffdebead93fea499d19cb4becb1c40e1520f16(
    *,
    bucket_domain_name: typing.Optional[builtins.str] = None,
    bucket_endpoint: typing.Optional[builtins.str] = None,
    bucket_name: typing.Optional[builtins.str] = None,
    bucket_website_url: typing.Optional[builtins.str] = None,
    is_website: typing.Optional[builtins.bool] = None,
    region: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2374e407bda9e563bb7cc76f82731ee58531a6858dce69684dd641441bce9b00(
    *,
    bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    access_control: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cors_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.CORSConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_oss_hdfs_service: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lifecycle_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.LifecycleConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    logging_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.LoggingConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    referer_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.RefererConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    server_side_encryption_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.ServerSideEncryptionConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    storage_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    versioning_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.VersioningConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    website_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.WebsiteConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c56b96bc948df5bafd30ccda11e91f12480860a8bf184df3b63d4a85b4b603d8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DirectoryProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2eac822e31f0b14f0d445fcda5edcd9fb35550a0a54886dfaf08136f102fcc01(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__51e3e791fb2d0bdf654569dd7ce8a93ee24d8579014569f016d6566c6c629333(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18ff22d48361bc308ee42442aef7ecbed12661ebddd89bf323e426587df923db(
    value: DirectoryProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__298c85fb6fd909790774361a86ea13d1df94e101a4660380ac15b037f121662a(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df2cb970d623e337f370e0d103d5f60438c56810a3ec723aeafef623f143ae32(
    *,
    bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    directory_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__146aa14b61658a030a56558c92a249b414a7e999717b613c98ec1b00cb1e3c98(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2d7e8692b736cc8dbf7dee0a6ed4e275320d2ea0c9ae86afb9e11fe4bda0d43(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e38311073c8b58de75347086e3a426e8b627724ed3e80d2b897e9cf83d39abb(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9e5922433fec4a53fb05386bc5a0ab0bbb7ca8fb7150b96f438f1cd02f40608(
    value: DomainProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__742ad1e383e99aac79692ae4615b4b3604c5b48599e3657cdb22867d54cd4421(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6159db363f2f92413d166bdeb6f6f022d6d008f9ddfaaba90df63ddf6367c29a(
    *,
    bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a88914b78a3654af71d7a958640e90202587322368de62c5c6376b7e87c69048(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ObjectAclProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e792f1fb174116eddc5223a564f90ea8ed5dc5f242bfb41f0e277e8bd44ae7a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c30d0fd226c6b9c13882b0736098560078ead93d6d432ffb033995d37fa71f12(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59c9e234b731e584f60422d61884acdc5427e28bfc6517256dc1267921d99f55(
    value: ObjectAclProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__04d543decd4dee14963e4214f345c05402befc8a90920e96c846e335723079cf(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ed4cfa392490e28309fc8acc620409be48856a8f74b8fc575ba3c73dae79e5e(
    *,
    bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    object_acl: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    object_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
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

def _typecheckingstub__ae097ab9f27a9db23f521656f49e73fd8adafb3f45e12f531aba97ded51cf1d6(
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

def _typecheckingstub__23f4c6306b9f2a6f1bdcdd6776db4454358a7513bdc61ee2a87ac484a2399f40(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1d1e94ba56a06821763a7f70c6e11674075a382e6256a264d0b34f44d6cb50c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.RefererConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82f278d2ab7e19b09646d15c71ba467b5ab79743cceae9e032615eaf8ee5e981(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
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

def _typecheckingstub__6397ea1c5ea28e6509c6541ecd6007cc68a550434ac40c6843f32a2e06b82997(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.VersioningConfigurationProperty]],
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

def _typecheckingstub__b8f66b3d0c710d8e5bf5c7477590933a5128c030dfb04aa0e2fcd9cd7ba851d5(
    *,
    status: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
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
    enable_oss_hdfs_service: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lifecycle_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.LifecycleConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    logging_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.LoggingConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    referer_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.RefererConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    server_side_encryption_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.ServerSideEncryptionConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    storage_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    versioning_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.VersioningConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    website_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.WebsiteConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9120c9e4ae48c332de0f0d5c7e64d12ce0b680fe06cccd6edd551882d6d84a3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDirectoryProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f3c66bb9e7962a2837b7e713cf48b8172d52576d6fc4bdeb0643901a5c96cf0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__094b93b571c4fee2408fd6d4435fbe19aad5738b05b52d2a3ece89d1a81b3751(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb5844ea4373044ae1fffcaf95f7993c7f6c19adbaf41b7b233703e8d60351f9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb939ab5aa6986433f52a3f0c9ae830f8a146d4a625e735f03a181c6d6866526(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0f8556b8eff48addd8855753113aad9c6a294840940974db9a7c78e314648a1(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__850be1f972b25386682ff2233242a3681ea732ca5e68445c34d7dd16e0a6151e(
    *,
    bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    directory_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5f092cad0d6a0a777305c359f4ebf6ee37871b961c3f80ea31ce881d6223644(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b50547bb8875dbb25f224523624d75fcec3b2709f5d7dee53b700524d8521ea4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d40c2ccb7fa9acbbe891068ca8b87a965fded1f87f3428299438d0ce8afa6aa8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5cc953f8996caf9c1193b9511198d98efb9ac9857d092f5c61d10673374666eb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__adbc441337559cb44b30e2dcd17f607bb2f59196a53192cb66f265d5d1eb63aa(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d153c1ee543a64c26da9ae81a2a61748f9ce2a429ecc474e513b9932e3938aec(
    *,
    bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc109fa8c24f6dc389764378d612836e4275e7f549d972b097a6a1d592e4ba63(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosObjectAclProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33f01656b8b2f44ab41f30be5093470e0ec02d942d7ee4fa26e2c59ab66b7bf7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6f3bfa1bc56147e7b83b3c833462c96aca23c53cf033cb66d6ca427d77b8721(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d8fc85fbbdf17b7d543a3f79cc3150541e360aa5734bd97c64d1af29ba5f08d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__30d4542d3377413a29c6e0c227a0e083e75efb70019eb43f6bb0170b42ff6706(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f10b2b3fcaa3f78283f44b29c06d3cb157f3cfc87fa2e38bf7cf5f533850ede(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e691ba75458f52783139e7ec0e3adbb5f1c4f528ee4117b9b0ce9e27bf3289e8(
    *,
    bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    object_acl: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    object_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass
