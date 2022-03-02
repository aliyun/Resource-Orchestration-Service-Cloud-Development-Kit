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

from ._jsii import *

import ros_cdk_core


class Bucket(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.Bucket",
):
    '''A ROS resource type:  ``ALIYUN::OSS::Bucket``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "BucketProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute DomainName: The public DNS name of the specified bucket.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInternalDomainName")
    def attr_internal_domain_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute InternalDomainName: The internal DNS name of the specified bucket.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInternalDomainName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute Name: The name of Bucket.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))


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
        bucket_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        access_control: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cors_configuration: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.CORSConfigurationProperty"]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        lifecycle_configuration: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.LifecycleConfigurationProperty"]] = None,
        logging_configuration: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.LoggingConfigurationProperty"]] = None,
        policy: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        referer_configuration: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.RefererConfigurationProperty"]] = None,
        server_side_encryption_configuration: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.ServerSideEncryptionConfigurationProperty"]] = None,
        storage_class: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        website_configuration: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.WebsiteConfigurationProperty"]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def bucket_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property bucketName: bucket name.'''
        result = self._values.get("bucket_name")
        assert result is not None, "Required property 'bucket_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def access_control(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property accessControl: The access control list.'''
        result = self._values.get("access_control")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cors_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.CORSConfigurationProperty"]]:
        '''Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.'''
        result = self._values.get("cors_configuration")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.CORSConfigurationProperty"]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property deletionForce: Whether force delete the relative objects in the bucket.

        Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def lifecycle_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.LifecycleConfigurationProperty"]]:
        '''Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.'''
        result = self._values.get("lifecycle_configuration")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.LifecycleConfigurationProperty"]], result)

    @builtins.property
    def logging_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.LoggingConfigurationProperty"]]:
        '''Property loggingConfiguration: Settings that defines where logs are stored.'''
        result = self._values.get("logging_configuration")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.LoggingConfigurationProperty"]], result)

    @builtins.property
    def policy(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property policy: Bucket policy.'''
        result = self._values.get("policy")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def referer_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.RefererConfigurationProperty"]]:
        '''Property refererConfiguration: undefined.'''
        result = self._values.get("referer_configuration")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.RefererConfigurationProperty"]], result)

    @builtins.property
    def server_side_encryption_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.ServerSideEncryptionConfigurationProperty"]]:
        '''Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.'''
        result = self._values.get("server_side_encryption_configuration")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.ServerSideEncryptionConfigurationProperty"]], result)

    @builtins.property
    def storage_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property storageClass: Specifies the storage class of the bucket.

        Default is "Standard".
        '''
        result = self._values.get("storage_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Property tags: Bucket tags in k-v pairs format.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def website_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.WebsiteConfigurationProperty"]]:
        '''Property websiteConfiguration: The properties of website config.'''
        result = self._values.get("website_configuration")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.WebsiteConfigurationProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BucketProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBucket(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.RosBucket",
):
    '''A ROS template type:  ``ALIYUN::OSS::Bucket``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosBucketProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::OSS::Bucket``.

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
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DomainName: The public DNS name of the specified bucket.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInternalDomainName")
    def attr_internal_domain_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InternalDomainName: The internal DNS name of the specified bucket.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInternalDomainName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Name: The name of Bucket
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bucketName")
    def bucket_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bucketName: bucket name.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "bucketName"))

    @bucket_name.setter
    def bucket_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "bucketName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="accessControl")
    def access_control(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: accessControl: The access control list.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "accessControl"))

    @access_control.setter
    def access_control(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "accessControl", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="corsConfiguration")
    def cors_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.CORSConfigurationProperty"]]:
        '''
        :Property: corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.CORSConfigurationProperty"]], jsii.get(self, "corsConfiguration"))

    @cors_configuration.setter
    def cors_configuration(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.CORSConfigurationProperty"]],
    ) -> None:
        jsii.set(self, "corsConfiguration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionForce: Whether force delete the relative objects in the bucket. Default value is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deletionForce", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="lifecycleConfiguration")
    def lifecycle_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.LifecycleConfigurationProperty"]]:
        '''
        :Property: lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.LifecycleConfigurationProperty"]], jsii.get(self, "lifecycleConfiguration"))

    @lifecycle_configuration.setter
    def lifecycle_configuration(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.LifecycleConfigurationProperty"]],
    ) -> None:
        jsii.set(self, "lifecycleConfiguration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="loggingConfiguration")
    def logging_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.LoggingConfigurationProperty"]]:
        '''
        :Property: loggingConfiguration: Settings that defines where logs are stored.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.LoggingConfigurationProperty"]], jsii.get(self, "loggingConfiguration"))

    @logging_configuration.setter
    def logging_configuration(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.LoggingConfigurationProperty"]],
    ) -> None:
        jsii.set(self, "loggingConfiguration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="policy")
    def policy(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: policy: Bucket policy
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "policy"))

    @policy.setter
    def policy(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        jsii.set(self, "policy", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="refererConfiguration")
    def referer_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.RefererConfigurationProperty"]]:
        '''
        :Property: refererConfiguration: undefined
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.RefererConfigurationProperty"]], jsii.get(self, "refererConfiguration"))

    @referer_configuration.setter
    def referer_configuration(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.RefererConfigurationProperty"]],
    ) -> None:
        jsii.set(self, "refererConfiguration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serverSideEncryptionConfiguration")
    def server_side_encryption_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.ServerSideEncryptionConfigurationProperty"]]:
        '''
        :Property: serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.ServerSideEncryptionConfigurationProperty"]], jsii.get(self, "serverSideEncryptionConfiguration"))

    @server_side_encryption_configuration.setter
    def server_side_encryption_configuration(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.ServerSideEncryptionConfigurationProperty"]],
    ) -> None:
        jsii.set(self, "serverSideEncryptionConfiguration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="storageClass")
    def storage_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: storageClass: Specifies the storage class of the bucket. Default is "Standard".
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "storageClass"))

    @storage_class.setter
    def storage_class(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "storageClass", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="websiteConfiguration")
    def website_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.WebsiteConfigurationProperty"]]:
        '''
        :Property: websiteConfiguration: The properties of website config.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.WebsiteConfigurationProperty"]], jsii.get(self, "websiteConfiguration"))

    @website_configuration.setter
    def website_configuration(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.WebsiteConfigurationProperty"]],
    ) -> None:
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
            created_before_date: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            days: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param created_before_date: 
            :param days: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if created_before_date is not None:
                self._values["created_before_date"] = created_before_date
            if days is not None:
                self._values["days"] = days

        @builtins.property
        def created_before_date(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: createdBeforeDate: undefined
            '''
            result = self._values.get("created_before_date")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def days(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: days: undefined
            '''
            result = self._values.get("days")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
            cors_rule: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosBucket.CORSRuleProperty"]]]] = None,
        ) -> None:
            '''
            :param cors_rule: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if cors_rule is not None:
                self._values["cors_rule"] = cors_rule

        @builtins.property
        def cors_rule(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosBucket.CORSRuleProperty"]]]]:
            '''
            :Property: corsRule: A set of origins and methods that you allow.
            '''
            result = self._values.get("cors_rule")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosBucket.CORSRuleProperty"]]]], result)

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
            allowed_header: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
            allowed_method: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
            allowed_origin: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
            expose_header: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
            max_age_seconds: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param allowed_header: 
            :param allowed_method: 
            :param allowed_origin: 
            :param expose_header: 
            :param max_age_seconds: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property: allowedHeader: undefined
            '''
            result = self._values.get("allowed_header")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        @builtins.property
        def allowed_method(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property: allowedMethod: undefined
            '''
            result = self._values.get("allowed_method")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        @builtins.property
        def allowed_origin(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property: allowedOrigin: undefined
            '''
            result = self._values.get("allowed_origin")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        @builtins.property
        def expose_header(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property: exposeHeader: undefined
            '''
            result = self._values.get("expose_header")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        @builtins.property
        def max_age_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: maxAgeSeconds: undefined
            '''
            result = self._values.get("max_age_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
            created_before_date: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            days: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param created_before_date: 
            :param days: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if created_before_date is not None:
                self._values["created_before_date"] = created_before_date
            if days is not None:
                self._values["days"] = days

        @builtins.property
        def created_before_date(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: createdBeforeDate: undefined
            '''
            result = self._values.get("created_before_date")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def days(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: days: undefined
            '''
            result = self._values.get("days")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
            rule: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosBucket.RuleProperty"]]],
        ) -> None:
            '''
            :param rule: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "rule": rule,
            }

        @builtins.property
        def rule(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosBucket.RuleProperty"]]]:
            '''
            :Property: rule: Describes lifecycle rules for the oss bucket Lifecycle Configuration property.
            '''
            result = self._values.get("rule")
            assert result is not None, "Required property 'rule' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosBucket.RuleProperty"]]], result)

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
            target_bucket: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            target_prefix: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param target_bucket: 
            :param target_prefix: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if target_bucket is not None:
                self._values["target_bucket"] = target_bucket
            if target_prefix is not None:
                self._values["target_prefix"] = target_prefix

        @builtins.property
        def target_bucket(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: targetBucket: Specifies the bucket where you want Aliyun OSS to store server access logs.
            '''
            result = self._values.get("target_bucket")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def target_prefix(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: targetPrefix: This element lets you specify a prefix for the objects that the log files will be stored.
            '''
            result = self._values.get("target_prefix")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            allow_empty_referer: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            referer_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param allow_empty_referer: 
            :param referer_list: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if allow_empty_referer is not None:
                self._values["allow_empty_referer"] = allow_empty_referer
            if referer_list is not None:
                self._values["referer_list"] = referer_list

        @builtins.property
        def allow_empty_referer(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: allowEmptyReferer: undefined
            '''
            result = self._values.get("allow_empty_referer")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def referer_list(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: refererList: undefined
            '''
            result = self._values.get("referer_list")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

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
            prefix: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            abort_multipart_upload: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.AbortMultipartUploadProperty"]] = None,
            expiration: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.ExpirationProperty"]] = None,
            id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            status: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param prefix: 
            :param abort_multipart_upload: 
            :param expiration: 
            :param id: 
            :param status: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
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
        def prefix(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: prefix: undefined
            '''
            result = self._values.get("prefix")
            assert result is not None, "Required property 'prefix' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def abort_multipart_upload(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.AbortMultipartUploadProperty"]]:
            '''
            :Property: abortMultipartUpload: undefined
            '''
            result = self._values.get("abort_multipart_upload")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.AbortMultipartUploadProperty"]], result)

        @builtins.property
        def expiration(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.ExpirationProperty"]]:
            '''
            :Property: expiration: undefined
            '''
            result = self._values.get("expiration")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosBucket.ExpirationProperty"]], result)

        @builtins.property
        def id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: id: undefined
            '''
            result = self._values.get("id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def status(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: status: undefined
            '''
            result = self._values.get("status")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            sse_algorithm: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            kms_master_key_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param sse_algorithm: 
            :param kms_master_key_id: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "sse_algorithm": sse_algorithm,
            }
            if kms_master_key_id is not None:
                self._values["kms_master_key_id"] = kms_master_key_id

        @builtins.property
        def sse_algorithm(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: sseAlgorithm: Specifies the default server-side encryption method.
            '''
            result = self._values.get("sse_algorithm")
            assert result is not None, "Required property 'sse_algorithm' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def kms_master_key_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: kmsMasterKeyId: Specifies the CMK ID when the value of SSEAlgorithm is KMS and a specified CMK is used for encryption. If the value of SSEAlgorithm is not KMS, this element must be null.
            '''
            result = self._values.get("kms_master_key_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            error_document: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            index_document: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param error_document: 
            :param index_document: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if error_document is not None:
                self._values["error_document"] = error_document
            if index_document is not None:
                self._values["index_document"] = index_document

        @builtins.property
        def error_document(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: errorDocument: default error page.
            '''
            result = self._values.get("error_document")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def index_document(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: indexDocument: default home page.
            '''
            result = self._values.get("index_document")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        bucket_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        access_control: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cors_configuration: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosBucket.CORSConfigurationProperty]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        lifecycle_configuration: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosBucket.LifecycleConfigurationProperty]] = None,
        logging_configuration: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosBucket.LoggingConfigurationProperty]] = None,
        policy: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        referer_configuration: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosBucket.RefererConfigurationProperty]] = None,
        server_side_encryption_configuration: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosBucket.ServerSideEncryptionConfigurationProperty]] = None,
        storage_class: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        website_configuration: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosBucket.WebsiteConfigurationProperty]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def bucket_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bucketName: bucket name.
        '''
        result = self._values.get("bucket_name")
        assert result is not None, "Required property 'bucket_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def access_control(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: accessControl: The access control list.
        '''
        result = self._values.get("access_control")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cors_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosBucket.CORSConfigurationProperty]]:
        '''
        :Property: corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
        '''
        result = self._values.get("cors_configuration")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosBucket.CORSConfigurationProperty]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionForce: Whether force delete the relative objects in the bucket. Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def lifecycle_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosBucket.LifecycleConfigurationProperty]]:
        '''
        :Property: lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
        '''
        result = self._values.get("lifecycle_configuration")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosBucket.LifecycleConfigurationProperty]], result)

    @builtins.property
    def logging_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosBucket.LoggingConfigurationProperty]]:
        '''
        :Property: loggingConfiguration: Settings that defines where logs are stored.
        '''
        result = self._values.get("logging_configuration")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosBucket.LoggingConfigurationProperty]], result)

    @builtins.property
    def policy(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: policy: Bucket policy
        '''
        result = self._values.get("policy")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def referer_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosBucket.RefererConfigurationProperty]]:
        '''
        :Property: refererConfiguration: undefined
        '''
        result = self._values.get("referer_configuration")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosBucket.RefererConfigurationProperty]], result)

    @builtins.property
    def server_side_encryption_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosBucket.ServerSideEncryptionConfigurationProperty]]:
        '''
        :Property: serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
        '''
        result = self._values.get("server_side_encryption_configuration")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosBucket.ServerSideEncryptionConfigurationProperty]], result)

    @builtins.property
    def storage_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: storageClass: Specifies the storage class of the bucket. Default is "Standard".
        '''
        result = self._values.get("storage_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosBucket.WebsiteConfigurationProperty]]:
        '''
        :Property: websiteConfiguration: The properties of website config.
        '''
        result = self._values.get("website_configuration")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosBucket.WebsiteConfigurationProperty]], result)

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
