using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::Bucket`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class does not contain additional functions, so it is recommended to use the `Bucket` class instead of this class for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucketProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosBucket : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosBucket(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Oss.IRosBucketProps props, bool enableResourcePropertyConstraint): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Oss.IRosBucketProps props, bool enableResourcePropertyConstraint)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosBucket(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosBucket(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket))!;

        /// <remarks>
        /// <strong>Attribute</strong>: Arn: The Alibaba Cloud Resource Name (ARN).
        /// </remarks>
        [JsiiProperty(name: "attrArn", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrArn
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: DomainName: The public DNS name of the specified bucket.
        /// </remarks>
        [JsiiProperty(name: "attrDomainName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDomainName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InternalDomainName: The internal DNS name of the specified bucket.
        /// </remarks>
        [JsiiProperty(name: "attrInternalDomainName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrInternalDomainName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Name: The name of Bucket
        /// </remarks>
        [JsiiProperty(name: "attrName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: bucketName: bucket name.
        /// </remarks>
        [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object BucketName
        {
            get => GetInstanceProperty<object>()!;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: accessControl: The access control list.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "accessControl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? AccessControl
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: blockPublicAccess: Whether to block public access.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "blockPublicAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? BlockPublicAccess
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "corsConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.CORSConfigurationProperty\"}]}}", isOptional: true)]
        public virtual object? CorsConfiguration
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ICORSConfigurationProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ICORSConfigurationProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: deletionForce: Whether force delete the relative objects in the bucket. Default value is false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DeletionForce
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableOssHdfsService: Whether enable OSS-HDFS service.
        /// **Note**: Once it's enabled, it can't be disabled again.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableOssHdfsService", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? EnableOssHdfsService
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "lifecycleConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.LifecycleConfigurationProperty\"}]}}", isOptional: true)]
        public virtual object? LifecycleConfiguration
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ILifecycleConfigurationProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ILifecycleConfigurationProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: loggingConfiguration: Settings that defines where logs are stored.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "loggingConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.LoggingConfigurationProperty\"}]}}", isOptional: true)]
        public virtual object? LoggingConfiguration
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ILoggingConfigurationProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ILoggingConfigurationProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: policy: Bucket policy
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        public virtual object? Policy
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case System.Collections.Generic.IDictionary<string, object> cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, System.Collections.Generic.IDictionary<string, object>; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: redundancyType: Specifies the data disaster recovery type of the storage space. The value range is as follows:
        /// LRS (default): Local redundant LRS stores your data redundantly on different storage devices in the same availability zone, and can support data loss and normal access even when two storage devices are damaged concurrently.
        /// ZRS: Intra-city redundant ZRS adopts a data redundancy storage mechanism in multiple availability zones (AZ), and stores user data redundantly in multiple availability zones in the same region. When an availability zone is unavailable, normal access to data can still be guaranteed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "redundancyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? RedundancyType
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: refererConfiguration: undefined
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "refererConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.RefererConfigurationProperty\"}]}}", isOptional: true)]
        public virtual object? RefererConfiguration
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IRefererConfigurationProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IRefererConfigurationProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The resource group id.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ResourceGroupId
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "serverSideEncryptionConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.ServerSideEncryptionConfigurationProperty\"}]}}", isOptional: true)]
        public virtual object? ServerSideEncryptionConfiguration
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IServerSideEncryptionConfigurationProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IServerSideEncryptionConfigurationProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: storageClass: Specifies the storage class of the bucket. Default is "Standard".
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "storageClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? StorageClass
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Bucket tags in k-v pairs format.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
        public virtual System.Collections.Generic.IDictionary<string, object>? Tags
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: versioningConfiguration: A state of versioning
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "versioningConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.VersioningConfigurationProperty\"}]}}", isOptional: true)]
        public virtual object? VersioningConfiguration
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IVersioningConfigurationProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IVersioningConfigurationProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: websiteConfigurationV2: Website configuration.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "websiteConfigurationV2", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.WebsiteConfigurationV2Property\"}]}}", isOptional: true)]
        public virtual object? WebsiteConfigurationV2
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IWebsiteConfigurationV2Property cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IWebsiteConfigurationV2Property).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }
        [JsiiInterface(nativeType: typeof(IAbortMultipartUploadProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.AbortMultipartUploadProperty")]
        public interface IAbortMultipartUploadProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: createdBeforeDate: undefined
            /// </remarks>
            [JsiiProperty(name: "createdBeforeDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CreatedBeforeDate
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: days: undefined
            /// </remarks>
            [JsiiProperty(name: "days", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Days
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IAbortMultipartUploadProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.AbortMultipartUploadProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IAbortMultipartUploadProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: createdBeforeDate: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "createdBeforeDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CreatedBeforeDate
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: days: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "days", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Days
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.AbortMultipartUploadProperty")]
        public class AbortMultipartUploadProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IAbortMultipartUploadProperty
        {
            private object? _createdBeforeDate;

            /// <remarks>
            /// <strong>Property</strong>: createdBeforeDate: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "createdBeforeDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CreatedBeforeDate
            {
                get => _createdBeforeDate;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _createdBeforeDate = value;
                }
            }

            private object? _days;

            /// <remarks>
            /// <strong>Property</strong>: days: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "days", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Days
            {
                get => _days;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case double cast_cd4240:
                                break;
                            case byte cast_cd4240:
                                break;
                            case decimal cast_cd4240:
                                break;
                            case float cast_cd4240:
                                break;
                            case int cast_cd4240:
                                break;
                            case long cast_cd4240:
                                break;
                            case sbyte cast_cd4240:
                                break;
                            case short cast_cd4240:
                                break;
                            case uint cast_cd4240:
                                break;
                            case ulong cast_cd4240:
                                break;
                            case ushort cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _days = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(ICORSConfigurationProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.CORSConfigurationProperty")]
        public interface ICORSConfigurationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: corsRule: A set of origins and methods that you allow.
            /// </remarks>
            [JsiiProperty(name: "corsRule", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.CORSRuleProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CorsRule
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: responseVary: Whether to return the Vary: Origin header. The range is as follows:
            /// - true: The Vary: Origin header is returned regardless of whether a cross-origin request was sent or whether the cross-origin request was successful.
            /// - false (default) : Do not return the Vary: Origin header under any circumstances
            /// Note: This field cannot be configured separately; at least one cross-domain rule must be configured to take effect.
            /// </remarks>
            [JsiiProperty(name: "responseVary", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ResponseVary
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ICORSConfigurationProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.CORSConfigurationProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ICORSConfigurationProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: corsRule: A set of origins and methods that you allow.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "corsRule", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.CORSRuleProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? CorsRule
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: responseVary: Whether to return the Vary: Origin header. The range is as follows:
                /// - true: The Vary: Origin header is returned regardless of whether a cross-origin request was sent or whether the cross-origin request was successful.
                /// - false (default) : Do not return the Vary: Origin header under any circumstances
                /// Note: This field cannot be configured separately; at least one cross-domain rule must be configured to take effect.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "responseVary", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ResponseVary
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.CORSConfigurationProperty")]
        public class CORSConfigurationProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ICORSConfigurationProperty
        {
            private object? _corsRule;

            /// <remarks>
            /// <strong>Property</strong>: corsRule: A set of origins and methods that you allow.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "corsRule", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.CORSRuleProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? CorsRule
            {
                get => _corsRule;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case object[] cast_cd4240:
                                for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                                {
                                    switch (cast_cd4240[__idx_f64a5c])
                                    {
                                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                            break;
                                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ICORSRuleProperty cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ICORSRuleProperty).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ICORSRuleProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                    }
                                }
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _corsRule = value;
                }
            }

            private object? _responseVary;

            /// <remarks>
            /// <strong>Property</strong>: responseVary: Whether to return the Vary: Origin header. The range is as follows:
            /// - true: The Vary: Origin header is returned regardless of whether a cross-origin request was sent or whether the cross-origin request was successful.
            /// - false (default) : Do not return the Vary: Origin header under any circumstances
            /// Note: This field cannot be configured separately; at least one cross-domain rule must be configured to take effect.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "responseVary", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResponseVary
            {
                get => _responseVary;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _responseVary = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(ICORSRuleProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.CORSRuleProperty")]
        public interface ICORSRuleProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: allowedHeader: undefined
            /// </remarks>
            [JsiiProperty(name: "allowedHeader", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? AllowedHeader
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: allowedMethod: undefined
            /// </remarks>
            [JsiiProperty(name: "allowedMethod", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? AllowedMethod
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: allowedOrigin: undefined
            /// </remarks>
            [JsiiProperty(name: "allowedOrigin", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? AllowedOrigin
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: exposeHeader: undefined
            /// </remarks>
            [JsiiProperty(name: "exposeHeader", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ExposeHeader
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: maxAgeSeconds: undefined
            /// </remarks>
            [JsiiProperty(name: "maxAgeSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MaxAgeSeconds
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ICORSRuleProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.CORSRuleProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ICORSRuleProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: allowedHeader: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "allowedHeader", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? AllowedHeader
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: allowedMethod: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "allowedMethod", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? AllowedMethod
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: allowedOrigin: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "allowedOrigin", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? AllowedOrigin
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: exposeHeader: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "exposeHeader", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? ExposeHeader
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: maxAgeSeconds: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "maxAgeSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? MaxAgeSeconds
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.CORSRuleProperty")]
        public class CORSRuleProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ICORSRuleProperty
        {
            private object? _allowedHeader;

            /// <remarks>
            /// <strong>Property</strong>: allowedHeader: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allowedHeader", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AllowedHeader
            {
                get => _allowedHeader;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case object[] cast_cd4240:
                                for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                                {
                                    switch (cast_cd4240[__idx_f64a5c])
                                    {
                                        case string cast_201718:
                                            break;
                                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                    }
                                }
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _allowedHeader = value;
                }
            }

            private object? _allowedMethod;

            /// <remarks>
            /// <strong>Property</strong>: allowedMethod: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allowedMethod", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AllowedMethod
            {
                get => _allowedMethod;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case object[] cast_cd4240:
                                for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                                {
                                    switch (cast_cd4240[__idx_f64a5c])
                                    {
                                        case string cast_201718:
                                            break;
                                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                    }
                                }
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _allowedMethod = value;
                }
            }

            private object? _allowedOrigin;

            /// <remarks>
            /// <strong>Property</strong>: allowedOrigin: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allowedOrigin", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AllowedOrigin
            {
                get => _allowedOrigin;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case object[] cast_cd4240:
                                for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                                {
                                    switch (cast_cd4240[__idx_f64a5c])
                                    {
                                        case string cast_201718:
                                            break;
                                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                    }
                                }
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _allowedOrigin = value;
                }
            }

            private object? _exposeHeader;

            /// <remarks>
            /// <strong>Property</strong>: exposeHeader: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "exposeHeader", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ExposeHeader
            {
                get => _exposeHeader;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case object[] cast_cd4240:
                                for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                                {
                                    switch (cast_cd4240[__idx_f64a5c])
                                    {
                                        case string cast_201718:
                                            break;
                                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                    }
                                }
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _exposeHeader = value;
                }
            }

            private object? _maxAgeSeconds;

            /// <remarks>
            /// <strong>Property</strong>: maxAgeSeconds: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxAgeSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxAgeSeconds
            {
                get => _maxAgeSeconds;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case double cast_cd4240:
                                break;
                            case byte cast_cd4240:
                                break;
                            case decimal cast_cd4240:
                                break;
                            case float cast_cd4240:
                                break;
                            case int cast_cd4240:
                                break;
                            case long cast_cd4240:
                                break;
                            case sbyte cast_cd4240:
                                break;
                            case short cast_cd4240:
                                break;
                            case uint cast_cd4240:
                                break;
                            case ulong cast_cd4240:
                                break;
                            case ushort cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _maxAgeSeconds = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IConditionProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.ConditionProperty")]
        public interface IConditionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: httpErrorCodeReturnedEquals: When accessing the specified Object, this status must be returned to match this rule. This field must be 404 when the jump rule is mirror-back to the source type.
            /// </remarks>
            [JsiiProperty(name: "httpErrorCodeReturnedEquals", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HttpErrorCodeReturnedEquals
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: includeHeaders: This rule will only match if the request contains the specified Header and the value is the specified value. Up to 10.
            /// </remarks>
            [JsiiProperty(name: "includeHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.IncludeHeadersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IncludeHeaders
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: keyPrefixEquals: The prefix of the Object name to be matched.
            /// </remarks>
            [JsiiProperty(name: "keyPrefixEquals", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? KeyPrefixEquals
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: keySuffixEquals: The suffix of the Object name to be matched.
            /// </remarks>
            [JsiiProperty(name: "keySuffixEquals", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? KeySuffixEquals
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IConditionProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.ConditionProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IConditionProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: httpErrorCodeReturnedEquals: When accessing the specified Object, this status must be returned to match this rule. This field must be 404 when the jump rule is mirror-back to the source type.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "httpErrorCodeReturnedEquals", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? HttpErrorCodeReturnedEquals
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: includeHeaders: This rule will only match if the request contains the specified Header and the value is the specified value. Up to 10.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "includeHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.IncludeHeadersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? IncludeHeaders
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: keyPrefixEquals: The prefix of the Object name to be matched.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "keyPrefixEquals", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? KeyPrefixEquals
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: keySuffixEquals: The suffix of the Object name to be matched.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "keySuffixEquals", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? KeySuffixEquals
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.ConditionProperty")]
        public class ConditionProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IConditionProperty
        {
            private object? _httpErrorCodeReturnedEquals;

            /// <remarks>
            /// <strong>Property</strong>: httpErrorCodeReturnedEquals: When accessing the specified Object, this status must be returned to match this rule. This field must be 404 when the jump rule is mirror-back to the source type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpErrorCodeReturnedEquals", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HttpErrorCodeReturnedEquals
            {
                get => _httpErrorCodeReturnedEquals;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _httpErrorCodeReturnedEquals = value;
                }
            }

            private object? _includeHeaders;

            /// <remarks>
            /// <strong>Property</strong>: includeHeaders: This rule will only match if the request contains the specified Header and the value is the specified value. Up to 10.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "includeHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.IncludeHeadersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? IncludeHeaders
            {
                get => _includeHeaders;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case object[] cast_cd4240:
                                for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                                {
                                    switch (cast_cd4240[__idx_f64a5c])
                                    {
                                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                            break;
                                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IIncludeHeadersProperty cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IIncludeHeadersProperty).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IIncludeHeadersProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                    }
                                }
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _includeHeaders = value;
                }
            }

            private object? _keyPrefixEquals;

            /// <remarks>
            /// <strong>Property</strong>: keyPrefixEquals: The prefix of the Object name to be matched.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "keyPrefixEquals", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeyPrefixEquals
            {
                get => _keyPrefixEquals;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _keyPrefixEquals = value;
                }
            }

            private object? _keySuffixEquals;

            /// <remarks>
            /// <strong>Property</strong>: keySuffixEquals: The suffix of the Object name to be matched.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "keySuffixEquals", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeySuffixEquals
            {
                get => _keySuffixEquals;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _keySuffixEquals = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IErrorDocumentProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.ErrorDocumentProperty")]
        public interface IErrorDocumentProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: The default error page.
            /// When an error page is specified, if the accessed Object does not exist, this error page is returned.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Key
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: httpStatus: The HTTP status code of the error page. Valid values: 200, 404 (default).
            /// </remarks>
            [JsiiProperty(name: "httpStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HttpStatus
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IErrorDocumentProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.ErrorDocumentProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IErrorDocumentProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: key: The default error page.
                /// When an error page is specified, if the accessed Object does not exist, this error page is returned.
                /// </remarks>
                [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Key
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: httpStatus: The HTTP status code of the error page. Valid values: 200, 404 (default).
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "httpStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? HttpStatus
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.ErrorDocumentProperty")]
        public class ErrorDocumentProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IErrorDocumentProperty
        {
            private object _key;

            /// <remarks>
            /// <strong>Property</strong>: key: The default error page.
            /// When an error page is specified, if the accessed Object does not exist, this error page is returned.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Key
            {
                get => _key;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _key = value;
                }
            }

            private object? _httpStatus;

            /// <remarks>
            /// <strong>Property</strong>: httpStatus: The HTTP status code of the error page. Valid values: 200, 404 (default).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HttpStatus
            {
                get => _httpStatus;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _httpStatus = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IExpirationProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.ExpirationProperty")]
        public interface IExpirationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: createdBeforeDate: undefined
            /// </remarks>
            [JsiiProperty(name: "createdBeforeDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CreatedBeforeDate
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: days: undefined
            /// </remarks>
            [JsiiProperty(name: "days", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Days
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: expiredObjectDeleteMarker: Specifies whether expired delete tags should be removed automatically. The values are as follows:
            /// - true: This means that the expiration delete flag is automatically removed. When set to true, specifying Days or CreatedBeforeDate is not supported.
            /// - false: This indicates that the expiration delete marker will not be automatically removed. When false, either Days or CreatedBeforeDate must be specified.
            /// </remarks>
            [JsiiProperty(name: "expiredObjectDeleteMarker", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ExpiredObjectDeleteMarker
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IExpirationProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.ExpirationProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IExpirationProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: createdBeforeDate: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "createdBeforeDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CreatedBeforeDate
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: days: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "days", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Days
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: expiredObjectDeleteMarker: Specifies whether expired delete tags should be removed automatically. The values are as follows:
                /// - true: This means that the expiration delete flag is automatically removed. When set to true, specifying Days or CreatedBeforeDate is not supported.
                /// - false: This indicates that the expiration delete marker will not be automatically removed. When false, either Days or CreatedBeforeDate must be specified.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "expiredObjectDeleteMarker", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ExpiredObjectDeleteMarker
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.ExpirationProperty")]
        public class ExpirationProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IExpirationProperty
        {
            private object? _createdBeforeDate;

            /// <remarks>
            /// <strong>Property</strong>: createdBeforeDate: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "createdBeforeDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CreatedBeforeDate
            {
                get => _createdBeforeDate;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _createdBeforeDate = value;
                }
            }

            private object? _days;

            /// <remarks>
            /// <strong>Property</strong>: days: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "days", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Days
            {
                get => _days;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case double cast_cd4240:
                                break;
                            case byte cast_cd4240:
                                break;
                            case decimal cast_cd4240:
                                break;
                            case float cast_cd4240:
                                break;
                            case int cast_cd4240:
                                break;
                            case long cast_cd4240:
                                break;
                            case sbyte cast_cd4240:
                                break;
                            case short cast_cd4240:
                                break;
                            case uint cast_cd4240:
                                break;
                            case ulong cast_cd4240:
                                break;
                            case ushort cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _days = value;
                }
            }

            private object? _expiredObjectDeleteMarker;

            /// <remarks>
            /// <strong>Property</strong>: expiredObjectDeleteMarker: Specifies whether expired delete tags should be removed automatically. The values are as follows:
            /// - true: This means that the expiration delete flag is automatically removed. When set to true, specifying Days or CreatedBeforeDate is not supported.
            /// - false: This indicates that the expiration delete marker will not be automatically removed. When false, either Days or CreatedBeforeDate must be specified.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "expiredObjectDeleteMarker", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExpiredObjectDeleteMarker
            {
                get => _expiredObjectDeleteMarker;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _expiredObjectDeleteMarker = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IFilterProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.FilterProperty")]
        public interface IFilterProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: not: undefined
            /// </remarks>
            [JsiiProperty(name: "not", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.NotProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Not
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IFilterProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.FilterProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IFilterProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: not: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "not", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.NotProperty\"}]}}", isOptional: true)]
                public object? Not
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.FilterProperty")]
        public class FilterProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IFilterProperty
        {
            private object? _not;

            /// <remarks>
            /// <strong>Property</strong>: not: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "not", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.NotProperty\"}]}}", isOptional: true)]
            public object? Not
            {
                get => _not;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.INotProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.INotProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _not = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IIncludeHeadersProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.IncludeHeadersProperty")]
        public interface IIncludeHeadersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: The name of the header.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Key
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: equalsTo: The value of the header.
            /// </remarks>
            [JsiiProperty(name: "equalsTo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? EqualsTo
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IIncludeHeadersProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.IncludeHeadersProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IIncludeHeadersProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: key: The name of the header.
                /// </remarks>
                [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Key
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: equalsTo: The value of the header.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "equalsTo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? EqualsTo
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.IncludeHeadersProperty")]
        public class IncludeHeadersProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IIncludeHeadersProperty
        {
            private object _key;

            /// <remarks>
            /// <strong>Property</strong>: key: The name of the header.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Key
            {
                get => _key;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _key = value;
                }
            }

            private object? _equalsTo;

            /// <remarks>
            /// <strong>Property</strong>: equalsTo: The value of the header.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "equalsTo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EqualsTo
            {
                get => _equalsTo;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _equalsTo = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IIndexDocumentProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.IndexDocumentProperty")]
        public interface IIndexDocumentProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: suffix: Default home page.
            /// After setting the default home page, if you visit an Object ending with a forward slash (\/), OSS will return to this default home page.
            /// </remarks>
            [JsiiProperty(name: "suffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Suffix
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: supportSubDir: Whether to jump to the default home page of a subdirectory when accessing it. The range is as follows:
            /// - true: Go to the default home page in a subdirectory.
            /// - false (default) : Instead of going to the default home page in a subdirectory, go to the default home page in the root directory.
            /// Assume that the default home page for the index. The HTML, to access bucket.oss-cn-hangzhou.aliyuncs.com\/subdir\/, if set SupportSubDir to false, Then go to bucket.oss-cn-hangzhou.aliyuncs.com\/index.html; If set SupportSubDir is true, then transferred to the bucket.oss-cn-hangzhou.aliyuncs.com\/subdir\/index.html.
            /// </remarks>
            [JsiiProperty(name: "supportSubDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SupportSubDir
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: type: Behavior when an Object that ends with a non-forward slash (\/) and does not exist is accessed after setting the default home page. It only takes effect when SupportSubDir is set to true, and it takes effect after RoutingRule and before ErrorFile.
            /// Assume that the default home page for the index. The HTML, to access the file path for bucket.oss-cn-hangzhou.aliyuncs.com\/abc, and ABC this Object does not exist, at this moment, in different values corresponding to the Type of behavior is as follows:
            /// - 0 (default) : Check if abc\/index.html exists (Object + forward slash (\/) + home page) and return 302 with the URL code of \/abc\/ as Location header (forward slash (\/) + Object + forward slash (\/)). If it doesn't, it will return 404 and keep checking ErrorFile.
            /// - 1: Directly return 404, error NoSuchKey, continue to check ErrorFile.
            /// - 2: Check if abc\/index.html exists and return the contents of the Object if it does. If it doesn't, it will return 404 and keep checking ErrorFile.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Type
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IIndexDocumentProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.IndexDocumentProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IIndexDocumentProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: suffix: Default home page.
                /// After setting the default home page, if you visit an Object ending with a forward slash (\/), OSS will return to this default home page.
                /// </remarks>
                [JsiiProperty(name: "suffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Suffix
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: supportSubDir: Whether to jump to the default home page of a subdirectory when accessing it. The range is as follows:
                /// - true: Go to the default home page in a subdirectory.
                /// - false (default) : Instead of going to the default home page in a subdirectory, go to the default home page in the root directory.
                /// Assume that the default home page for the index. The HTML, to access bucket.oss-cn-hangzhou.aliyuncs.com\/subdir\/, if set SupportSubDir to false, Then go to bucket.oss-cn-hangzhou.aliyuncs.com\/index.html; If set SupportSubDir is true, then transferred to the bucket.oss-cn-hangzhou.aliyuncs.com\/subdir\/index.html.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "supportSubDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SupportSubDir
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: type: Behavior when an Object that ends with a non-forward slash (\/) and does not exist is accessed after setting the default home page. It only takes effect when SupportSubDir is set to true, and it takes effect after RoutingRule and before ErrorFile.
                /// Assume that the default home page for the index. The HTML, to access the file path for bucket.oss-cn-hangzhou.aliyuncs.com\/abc, and ABC this Object does not exist, at this moment, in different values corresponding to the Type of behavior is as follows:
                /// - 0 (default) : Check if abc\/index.html exists (Object + forward slash (\/) + home page) and return 302 with the URL code of \/abc\/ as Location header (forward slash (\/) + Object + forward slash (\/)). If it doesn't, it will return 404 and keep checking ErrorFile.
                /// - 1: Directly return 404, error NoSuchKey, continue to check ErrorFile.
                /// - 2: Check if abc\/index.html exists and return the contents of the Object if it does. If it doesn't, it will return 404 and keep checking ErrorFile.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Type
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.IndexDocumentProperty")]
        public class IndexDocumentProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IIndexDocumentProperty
        {
            private object _suffix;

            /// <remarks>
            /// <strong>Property</strong>: suffix: Default home page.
            /// After setting the default home page, if you visit an Object ending with a forward slash (\/), OSS will return to this default home page.
            /// </remarks>
            [JsiiProperty(name: "suffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Suffix
            {
                get => _suffix;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _suffix = value;
                }
            }

            private object? _supportSubDir;

            /// <remarks>
            /// <strong>Property</strong>: supportSubDir: Whether to jump to the default home page of a subdirectory when accessing it. The range is as follows:
            /// - true: Go to the default home page in a subdirectory.
            /// - false (default) : Instead of going to the default home page in a subdirectory, go to the default home page in the root directory.
            /// Assume that the default home page for the index. The HTML, to access bucket.oss-cn-hangzhou.aliyuncs.com\/subdir\/, if set SupportSubDir to false, Then go to bucket.oss-cn-hangzhou.aliyuncs.com\/index.html; If set SupportSubDir is true, then transferred to the bucket.oss-cn-hangzhou.aliyuncs.com\/subdir\/index.html.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "supportSubDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SupportSubDir
            {
                get => _supportSubDir;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _supportSubDir = value;
                }
            }

            private object? _type;

            /// <remarks>
            /// <strong>Property</strong>: type: Behavior when an Object that ends with a non-forward slash (\/) and does not exist is accessed after setting the default home page. It only takes effect when SupportSubDir is set to true, and it takes effect after RoutingRule and before ErrorFile.
            /// Assume that the default home page for the index. The HTML, to access the file path for bucket.oss-cn-hangzhou.aliyuncs.com\/abc, and ABC this Object does not exist, at this moment, in different values corresponding to the Type of behavior is as follows:
            /// - 0 (default) : Check if abc\/index.html exists (Object + forward slash (\/) + home page) and return 302 with the URL code of \/abc\/ as Location header (forward slash (\/) + Object + forward slash (\/)). If it doesn't, it will return 404 and keep checking ErrorFile.
            /// - 1: Directly return 404, error NoSuchKey, continue to check ErrorFile.
            /// - 2: Check if abc\/index.html exists and return the contents of the Object if it does. If it doesn't, it will return 404 and keep checking ErrorFile.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Type
            {
                get => _type;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _type = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(ILifecycleConfigurationProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.LifecycleConfigurationProperty")]
        public interface ILifecycleConfigurationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: rule: Describes lifecycle rules for the oss bucket Lifecycle Configuration property.
            /// </remarks>
            [JsiiProperty(name: "rule", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.RuleProperty\"}]}},\"kind\":\"array\"}}]}}")]
            object Rule
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(ILifecycleConfigurationProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.LifecycleConfigurationProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ILifecycleConfigurationProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: rule: Describes lifecycle rules for the oss bucket Lifecycle Configuration property.
                /// </remarks>
                [JsiiProperty(name: "rule", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.RuleProperty\"}]}},\"kind\":\"array\"}}]}}")]
                public object Rule
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.LifecycleConfigurationProperty")]
        public class LifecycleConfigurationProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ILifecycleConfigurationProperty
        {
            private object _rule;

            /// <remarks>
            /// <strong>Property</strong>: rule: Describes lifecycle rules for the oss bucket Lifecycle Configuration property.
            /// </remarks>
            [JsiiProperty(name: "rule", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.RuleProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Rule
            {
                get => _rule;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case object[] cast_cd4240:
                                for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                                {
                                    switch (cast_cd4240[__idx_f64a5c])
                                    {
                                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                            break;
                                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IRuleProperty cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IRuleProperty).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IRuleProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                    }
                                }
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _rule = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(ILoggingConfigurationProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.LoggingConfigurationProperty")]
        public interface ILoggingConfigurationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: targetBucket: Specifies the bucket where you want Aliyun OSS to store server access logs.
            /// </remarks>
            [JsiiProperty(name: "targetBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? TargetBucket
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: targetPrefix: This element lets you specify a prefix for the objects that the log files will be stored.
            /// </remarks>
            [JsiiProperty(name: "targetPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? TargetPrefix
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ILoggingConfigurationProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.LoggingConfigurationProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ILoggingConfigurationProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: targetBucket: Specifies the bucket where you want Aliyun OSS to store server access logs.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "targetBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? TargetBucket
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: targetPrefix: This element lets you specify a prefix for the objects that the log files will be stored.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "targetPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? TargetPrefix
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.LoggingConfigurationProperty")]
        public class LoggingConfigurationProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ILoggingConfigurationProperty
        {
            private object? _targetBucket;

            /// <remarks>
            /// <strong>Property</strong>: targetBucket: Specifies the bucket where you want Aliyun OSS to store server access logs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "targetBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TargetBucket
            {
                get => _targetBucket;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _targetBucket = value;
                }
            }

            private object? _targetPrefix;

            /// <remarks>
            /// <strong>Property</strong>: targetPrefix: This element lets you specify a prefix for the objects that the log files will be stored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "targetPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TargetPrefix
            {
                get => _targetPrefix;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _targetPrefix = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IMirrorHeadersProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.MirrorHeadersProperty")]
        public interface IMirrorHeadersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: pass: Pass through the specified Header to the source. This only works if RedirectType is set to Mirror.
            /// Each Header is at most 1,024 bytes long and has the character sets 0-9, a-z, A-Z, and dash (-).
            /// A maximum of 10 can be specified for this field.
            /// </remarks>
            [JsiiProperty(name: "pass", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Pass
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: passAll: Whether to pass through other headers to the source except the following headers. This only works if RedirectType is set to Mirror.
            /// - content-length, authorization2, authorization, range, date and other headers
            /// - Headers starting with oss-\/x-oss-\/x-drs-
            /// Default value: false
            /// </remarks>
            [JsiiProperty(name: "passAll", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PassAll
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: remove: Disables pass-through of the specified Header to the source. This only works if RedirectType is set to Mirror.
            /// Each Header is at most 1,024 bytes long and has the character sets 0-9, a-z, A-Z, and dash (-).
            /// A maximum of 10 can be specified for this field.
            /// </remarks>
            [JsiiProperty(name: "remove", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Remove
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sets: Set a Header to the origin, and it will be set when the request is sent back to the origin, regardless of whether the specified headers are included in the request. This only works if RedirectType is set to Mirror.
            /// Up to 10 groups can be specified for this container.
            /// </remarks>
            [JsiiProperty(name: "sets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.SetsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Sets
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IMirrorHeadersProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.MirrorHeadersProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IMirrorHeadersProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: pass: Pass through the specified Header to the source. This only works if RedirectType is set to Mirror.
                /// Each Header is at most 1,024 bytes long and has the character sets 0-9, a-z, A-Z, and dash (-).
                /// A maximum of 10 can be specified for this field.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "pass", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Pass
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: passAll: Whether to pass through other headers to the source except the following headers. This only works if RedirectType is set to Mirror.
                /// - content-length, authorization2, authorization, range, date and other headers
                /// - Headers starting with oss-\/x-oss-\/x-drs-
                /// Default value: false
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "passAll", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PassAll
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: remove: Disables pass-through of the specified Header to the source. This only works if RedirectType is set to Mirror.
                /// Each Header is at most 1,024 bytes long and has the character sets 0-9, a-z, A-Z, and dash (-).
                /// A maximum of 10 can be specified for this field.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "remove", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Remove
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sets: Set a Header to the origin, and it will be set when the request is sent back to the origin, regardless of whether the specified headers are included in the request. This only works if RedirectType is set to Mirror.
                /// Up to 10 groups can be specified for this container.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.SetsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Sets
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.MirrorHeadersProperty")]
        public class MirrorHeadersProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IMirrorHeadersProperty
        {
            private object? _pass;

            /// <remarks>
            /// <strong>Property</strong>: pass: Pass through the specified Header to the source. This only works if RedirectType is set to Mirror.
            /// Each Header is at most 1,024 bytes long and has the character sets 0-9, a-z, A-Z, and dash (-).
            /// A maximum of 10 can be specified for this field.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pass", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Pass
            {
                get => _pass;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case object[] cast_cd4240:
                                for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                                {
                                    switch (cast_cd4240[__idx_f64a5c])
                                    {
                                        case string cast_201718:
                                            break;
                                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                    }
                                }
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _pass = value;
                }
            }

            private object? _passAll;

            /// <remarks>
            /// <strong>Property</strong>: passAll: Whether to pass through other headers to the source except the following headers. This only works if RedirectType is set to Mirror.
            /// - content-length, authorization2, authorization, range, date and other headers
            /// - Headers starting with oss-\/x-oss-\/x-drs-
            /// Default value: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "passAll", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PassAll
            {
                get => _passAll;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _passAll = value;
                }
            }

            private object? _remove;

            /// <remarks>
            /// <strong>Property</strong>: remove: Disables pass-through of the specified Header to the source. This only works if RedirectType is set to Mirror.
            /// Each Header is at most 1,024 bytes long and has the character sets 0-9, a-z, A-Z, and dash (-).
            /// A maximum of 10 can be specified for this field.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "remove", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Remove
            {
                get => _remove;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case object[] cast_cd4240:
                                for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                                {
                                    switch (cast_cd4240[__idx_f64a5c])
                                    {
                                        case string cast_201718:
                                            break;
                                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                    }
                                }
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _remove = value;
                }
            }

            private object? _sets;

            /// <remarks>
            /// <strong>Property</strong>: sets: Set a Header to the origin, and it will be set when the request is sent back to the origin, regardless of whether the specified headers are included in the request. This only works if RedirectType is set to Mirror.
            /// Up to 10 groups can be specified for this container.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.SetsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Sets
            {
                get => _sets;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case object[] cast_cd4240:
                                for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                                {
                                    switch (cast_cd4240[__idx_f64a5c])
                                    {
                                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                            break;
                                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ISetsProperty cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ISetsProperty).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ISetsProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                    }
                                }
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _sets = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(INotProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.NotProperty")]
        public interface INotProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: prefix: The Object prefix to which this exclusion rule applies.
            /// - If Prefix is configured under Rule node, the Prefix under Not node must be prefixed by the Prefix under Rule node. For example, if the Prefix configured under the Rule node is dir, the Prefix under the Not node must begin with dir, such as dir1, dir2, and so on.
            /// - If the Tag is Not configured under the Not node, the Prefix configured under the NOT node cannot be the same as the Prefix configured under the Rule node.
            /// </remarks>
            [JsiiProperty(name: "prefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Prefix
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: tag: At most one Object tag to which this exclusion rule applies.
            /// </remarks>
            [JsiiProperty(name: "tag", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Tag
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(INotProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.NotProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.INotProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: prefix: The Object prefix to which this exclusion rule applies.
                /// - If Prefix is configured under Rule node, the Prefix under Not node must be prefixed by the Prefix under Rule node. For example, if the Prefix configured under the Rule node is dir, the Prefix under the Not node must begin with dir, such as dir1, dir2, and so on.
                /// - If the Tag is Not configured under the Not node, the Prefix configured under the NOT node cannot be the same as the Prefix configured under the Rule node.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "prefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Prefix
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: tag: At most one Object tag to which this exclusion rule applies.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tag", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Tag
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.NotProperty")]
        public class NotProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.INotProperty
        {
            private object? _prefix;

            /// <remarks>
            /// <strong>Property</strong>: prefix: The Object prefix to which this exclusion rule applies.
            /// - If Prefix is configured under Rule node, the Prefix under Not node must be prefixed by the Prefix under Rule node. For example, if the Prefix configured under the Rule node is dir, the Prefix under the Not node must begin with dir, such as dir1, dir2, and so on.
            /// - If the Tag is Not configured under the Not node, the Prefix configured under the NOT node cannot be the same as the Prefix configured under the Rule node.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "prefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Prefix
            {
                get => _prefix;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _prefix = value;
                }
            }

            private object? _tag;

            /// <remarks>
            /// <strong>Property</strong>: tag: At most one Object tag to which this exclusion rule applies.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tag", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Tag
            {
                get => _tag;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case object[] cast_cd4240:
                                for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                                {
                                    switch (cast_cd4240[__idx_f64a5c])
                                    {
                                        case string cast_201718:
                                            break;
                                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                    }
                                }
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _tag = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IRedirectProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.RedirectProperty")]
        public interface IRedirectProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: redirectType: Specifies the type of jump. The range is as follows:
            /// - Mirror: Mirror back to the source.
            /// - External: External branch, i.e. OSS will return a 3xx request specifying the branch to another address.
            /// - AliCDN: Aliyun CDN jump, mainly used for the CDN of Aliyun. Unlike External, OSS adds an additional Header. After identifying this Header, Aliyun CDN will actively jump to the specified address and return the obtained data to the user instead of returning the 3xx jump request to the user.
            /// </remarks>
            [JsiiProperty(name: "redirectType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object RedirectType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: enableReplacePrefix: If you set this field to true, the prefix of Object is replaced with the value specified by ReplaceKeyPrefixWith. If this field is not specified or is empty, it means that the Object prefix is truncated.
            /// Notes: This field cannot be set to true when the ReplaceKeyWith field is not null.
            /// Default value: false
            /// </remarks>
            [JsiiProperty(name: "enableReplacePrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? EnableReplacePrefix
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: hostName: The domain name of the jump, the domain name should conform to the domain name specification.
            /// If the file you want to access is test, the Protocol is set to https, and the Hostname is set to example.com, the Location header is https:\/\/example.com\/test.
            /// </remarks>
            [JsiiProperty(name: "hostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HostName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: httpRedirectCode: Status code returned when jumping. Only if RedirectType is set to External or AliCDN.The default value is 302.
            /// Value: 301, 302, 307
            /// </remarks>
            [JsiiProperty(name: "httpRedirectCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HttpRedirectCode
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: mirrorCheckMd5: Whether to check MD5 back to the source body. This only works if RedirectType is set to Mirror.
            /// When MirrorCheckMd5 is set to true, and the response returned by the source contains the Content-Md5 Header, OSS checks whether the pulled data MD5 matches this header, if not, it is not saved on OSS.
            /// Default value: false
            /// </remarks>
            [JsiiProperty(name: "mirrorCheckMd5", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MirrorCheckMd5
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: mirrorFollowRedirect: If the result obtained by mirriling back to the source is 3xx, whether to continue to jump to the specified Location to obtain data. This only works if RedirectType is set to Mirror.
            /// For example, when we mirror back to the source, the source returns a 302 with Location specified.
            /// - If set to true, OSS will continue to request the Location.
            /// It can jump up to 10 times, and if it jumps more than 10 times, it fails to return the mirror back to the source.
            /// - If set to false, OSS will return 302 and pass through the Location.
            /// Default value: true
            /// </remarks>
            [JsiiProperty(name: "mirrorFollowRedirect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MirrorFollowRedirect
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: mirrorHeaders: Specifies the Header that is mirrored back to the source. This only works if RedirectType is set to Mirror.
            /// </remarks>
            [JsiiProperty(name: "mirrorHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.MirrorHeadersProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MirrorHeaders
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: mirrorPassQueryString: Same as PassQueryString, but takes precedence over PassQueryString. This only works if RedirectType is set to Mirror.
            /// Default value: false
            /// </remarks>
            [JsiiProperty(name: "mirrorPassQueryString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MirrorPassQueryString
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: mirrorUrl: Mirror back to the source station address of the source. This only works if RedirectType is set to Mirror.
            /// The origin URL must begin with http:\/\/ or https:\/\/ and end with a forward slash (\/), which OSS will follow with the Object name to form the return URL.
            /// Name to access the Object myobject, for example, if you specify this to http:\/\/example.com\/, then back to the source URL for http:\/\/example.com\/myobject, if you specify this to http:\/\/example.com\/dir1\/, Back to the source URL as http:\/\/example.com\/dir1\/myobject.
            /// </remarks>
            [JsiiProperty(name: "mirrorUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MirrorUrl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: passQueryString: Whether to carry request parameters when performing a jump or mirroring back to the source rule.
            /// Does the user request OSS with the request parameters? a=b&c=d, and set PassQueryString to true, if the rule is a 302 jump, then this request parameter is added in the Location header of the jump. For example, Location:example.com?a=b&c=d, the jump type is mirror back to the source, then this request parameter will also be carried in the initiated back to the source request.
            /// Valid values: true, false (default)
            /// </remarks>
            [JsiiProperty(name: "passQueryString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PassQueryString
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: protocol: Protocol when jumping. Only if RedirectType is set to External or AliCDN.
            /// If the file you want to access is test, set to go to example.com, and set Protocol to https, the Location header is https:\/\/example.com\/test.
            /// Value: http, https
            /// </remarks>
            [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Protocol
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: replaceKeyPrefixWith: This value will be substituted for the prefix of the Object name in Redirect. If the prefix is empty, the string is inserted before the Object name.
            /// Notes: Only ReplaceKeyWith or ReplaceKeyPrefixWith nodes are allowed.
            /// Hypothesis to access the Object for ABC\/test. TXT, if set KeyPrefixEquals for ABC \/, ReplaceKeyPrefixWith for def \/, then the Location head to http:\/\/example.com\/def\/test.txt.
            /// </remarks>
            [JsiiProperty(name: "replaceKeyPrefixWith", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ReplaceKeyPrefixWith
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: replaceKeyWith: With Redirect, the Object name is replaced with the value specified by ReplaceKeyWith, which allows you to set variables. The currently supported variable is ${key}, which represents the name of the Object in the request.
            /// Suppose to access the Object for the test, if set ReplaceKeyWith to prefix\/${key}. The suffix, is the Location head to http:\/\/example.com\/prefix\/test.suffix.
            /// </remarks>
            [JsiiProperty(name: "replaceKeyWith", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ReplaceKeyWith
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IRedirectProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.RedirectProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IRedirectProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: redirectType: Specifies the type of jump. The range is as follows:
                /// - Mirror: Mirror back to the source.
                /// - External: External branch, i.e. OSS will return a 3xx request specifying the branch to another address.
                /// - AliCDN: Aliyun CDN jump, mainly used for the CDN of Aliyun. Unlike External, OSS adds an additional Header. After identifying this Header, Aliyun CDN will actively jump to the specified address and return the obtained data to the user instead of returning the 3xx jump request to the user.
                /// </remarks>
                [JsiiProperty(name: "redirectType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object RedirectType
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: enableReplacePrefix: If you set this field to true, the prefix of Object is replaced with the value specified by ReplaceKeyPrefixWith. If this field is not specified or is empty, it means that the Object prefix is truncated.
                /// Notes: This field cannot be set to true when the ReplaceKeyWith field is not null.
                /// Default value: false
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "enableReplacePrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? EnableReplacePrefix
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: hostName: The domain name of the jump, the domain name should conform to the domain name specification.
                /// If the file you want to access is test, the Protocol is set to https, and the Hostname is set to example.com, the Location header is https:\/\/example.com\/test.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "hostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? HostName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: httpRedirectCode: Status code returned when jumping. Only if RedirectType is set to External or AliCDN.The default value is 302.
                /// Value: 301, 302, 307
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "httpRedirectCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? HttpRedirectCode
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: mirrorCheckMd5: Whether to check MD5 back to the source body. This only works if RedirectType is set to Mirror.
                /// When MirrorCheckMd5 is set to true, and the response returned by the source contains the Content-Md5 Header, OSS checks whether the pulled data MD5 matches this header, if not, it is not saved on OSS.
                /// Default value: false
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "mirrorCheckMd5", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? MirrorCheckMd5
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: mirrorFollowRedirect: If the result obtained by mirriling back to the source is 3xx, whether to continue to jump to the specified Location to obtain data. This only works if RedirectType is set to Mirror.
                /// For example, when we mirror back to the source, the source returns a 302 with Location specified.
                /// - If set to true, OSS will continue to request the Location.
                /// It can jump up to 10 times, and if it jumps more than 10 times, it fails to return the mirror back to the source.
                /// - If set to false, OSS will return 302 and pass through the Location.
                /// Default value: true
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "mirrorFollowRedirect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? MirrorFollowRedirect
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: mirrorHeaders: Specifies the Header that is mirrored back to the source. This only works if RedirectType is set to Mirror.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "mirrorHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.MirrorHeadersProperty\"}]}}", isOptional: true)]
                public object? MirrorHeaders
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: mirrorPassQueryString: Same as PassQueryString, but takes precedence over PassQueryString. This only works if RedirectType is set to Mirror.
                /// Default value: false
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "mirrorPassQueryString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? MirrorPassQueryString
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: mirrorUrl: Mirror back to the source station address of the source. This only works if RedirectType is set to Mirror.
                /// The origin URL must begin with http:\/\/ or https:\/\/ and end with a forward slash (\/), which OSS will follow with the Object name to form the return URL.
                /// Name to access the Object myobject, for example, if you specify this to http:\/\/example.com\/, then back to the source URL for http:\/\/example.com\/myobject, if you specify this to http:\/\/example.com\/dir1\/, Back to the source URL as http:\/\/example.com\/dir1\/myobject.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "mirrorUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? MirrorUrl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: passQueryString: Whether to carry request parameters when performing a jump or mirroring back to the source rule.
                /// Does the user request OSS with the request parameters? a=b&c=d, and set PassQueryString to true, if the rule is a 302 jump, then this request parameter is added in the Location header of the jump. For example, Location:example.com?a=b&c=d, the jump type is mirror back to the source, then this request parameter will also be carried in the initiated back to the source request.
                /// Valid values: true, false (default)
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "passQueryString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PassQueryString
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: protocol: Protocol when jumping. Only if RedirectType is set to External or AliCDN.
                /// If the file you want to access is test, set to go to example.com, and set Protocol to https, the Location header is https:\/\/example.com\/test.
                /// Value: http, https
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Protocol
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: replaceKeyPrefixWith: This value will be substituted for the prefix of the Object name in Redirect. If the prefix is empty, the string is inserted before the Object name.
                /// Notes: Only ReplaceKeyWith or ReplaceKeyPrefixWith nodes are allowed.
                /// Hypothesis to access the Object for ABC\/test. TXT, if set KeyPrefixEquals for ABC \/, ReplaceKeyPrefixWith for def \/, then the Location head to http:\/\/example.com\/def\/test.txt.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "replaceKeyPrefixWith", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ReplaceKeyPrefixWith
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: replaceKeyWith: With Redirect, the Object name is replaced with the value specified by ReplaceKeyWith, which allows you to set variables. The currently supported variable is ${key}, which represents the name of the Object in the request.
                /// Suppose to access the Object for the test, if set ReplaceKeyWith to prefix\/${key}. The suffix, is the Location head to http:\/\/example.com\/prefix\/test.suffix.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "replaceKeyWith", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ReplaceKeyWith
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.RedirectProperty")]
        public class RedirectProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IRedirectProperty
        {
            private object _redirectType;

            /// <remarks>
            /// <strong>Property</strong>: redirectType: Specifies the type of jump. The range is as follows:
            /// - Mirror: Mirror back to the source.
            /// - External: External branch, i.e. OSS will return a 3xx request specifying the branch to another address.
            /// - AliCDN: Aliyun CDN jump, mainly used for the CDN of Aliyun. Unlike External, OSS adds an additional Header. After identifying this Header, Aliyun CDN will actively jump to the specified address and return the obtained data to the user instead of returning the 3xx jump request to the user.
            /// </remarks>
            [JsiiProperty(name: "redirectType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RedirectType
            {
                get => _redirectType;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _redirectType = value;
                }
            }

            private object? _enableReplacePrefix;

            /// <remarks>
            /// <strong>Property</strong>: enableReplacePrefix: If you set this field to true, the prefix of Object is replaced with the value specified by ReplaceKeyPrefixWith. If this field is not specified or is empty, it means that the Object prefix is truncated.
            /// Notes: This field cannot be set to true when the ReplaceKeyWith field is not null.
            /// Default value: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableReplacePrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableReplacePrefix
            {
                get => _enableReplacePrefix;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _enableReplacePrefix = value;
                }
            }

            private object? _hostName;

            /// <remarks>
            /// <strong>Property</strong>: hostName: The domain name of the jump, the domain name should conform to the domain name specification.
            /// If the file you want to access is test, the Protocol is set to https, and the Hostname is set to example.com, the Location header is https:\/\/example.com\/test.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HostName
            {
                get => _hostName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _hostName = value;
                }
            }

            private object? _httpRedirectCode;

            /// <remarks>
            /// <strong>Property</strong>: httpRedirectCode: Status code returned when jumping. Only if RedirectType is set to External or AliCDN.The default value is 302.
            /// Value: 301, 302, 307
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpRedirectCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HttpRedirectCode
            {
                get => _httpRedirectCode;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _httpRedirectCode = value;
                }
            }

            private object? _mirrorCheckMd5;

            /// <remarks>
            /// <strong>Property</strong>: mirrorCheckMd5: Whether to check MD5 back to the source body. This only works if RedirectType is set to Mirror.
            /// When MirrorCheckMd5 is set to true, and the response returned by the source contains the Content-Md5 Header, OSS checks whether the pulled data MD5 matches this header, if not, it is not saved on OSS.
            /// Default value: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mirrorCheckMd5", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MirrorCheckMd5
            {
                get => _mirrorCheckMd5;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _mirrorCheckMd5 = value;
                }
            }

            private object? _mirrorFollowRedirect;

            /// <remarks>
            /// <strong>Property</strong>: mirrorFollowRedirect: If the result obtained by mirriling back to the source is 3xx, whether to continue to jump to the specified Location to obtain data. This only works if RedirectType is set to Mirror.
            /// For example, when we mirror back to the source, the source returns a 302 with Location specified.
            /// - If set to true, OSS will continue to request the Location.
            /// It can jump up to 10 times, and if it jumps more than 10 times, it fails to return the mirror back to the source.
            /// - If set to false, OSS will return 302 and pass through the Location.
            /// Default value: true
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mirrorFollowRedirect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MirrorFollowRedirect
            {
                get => _mirrorFollowRedirect;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _mirrorFollowRedirect = value;
                }
            }

            private object? _mirrorHeaders;

            /// <remarks>
            /// <strong>Property</strong>: mirrorHeaders: Specifies the Header that is mirrored back to the source. This only works if RedirectType is set to Mirror.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mirrorHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.MirrorHeadersProperty\"}]}}", isOptional: true)]
            public object? MirrorHeaders
            {
                get => _mirrorHeaders;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IMirrorHeadersProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IMirrorHeadersProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _mirrorHeaders = value;
                }
            }

            private object? _mirrorPassQueryString;

            /// <remarks>
            /// <strong>Property</strong>: mirrorPassQueryString: Same as PassQueryString, but takes precedence over PassQueryString. This only works if RedirectType is set to Mirror.
            /// Default value: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mirrorPassQueryString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MirrorPassQueryString
            {
                get => _mirrorPassQueryString;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _mirrorPassQueryString = value;
                }
            }

            private object? _mirrorUrl;

            /// <remarks>
            /// <strong>Property</strong>: mirrorUrl: Mirror back to the source station address of the source. This only works if RedirectType is set to Mirror.
            /// The origin URL must begin with http:\/\/ or https:\/\/ and end with a forward slash (\/), which OSS will follow with the Object name to form the return URL.
            /// Name to access the Object myobject, for example, if you specify this to http:\/\/example.com\/, then back to the source URL for http:\/\/example.com\/myobject, if you specify this to http:\/\/example.com\/dir1\/, Back to the source URL as http:\/\/example.com\/dir1\/myobject.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mirrorUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MirrorUrl
            {
                get => _mirrorUrl;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _mirrorUrl = value;
                }
            }

            private object? _passQueryString;

            /// <remarks>
            /// <strong>Property</strong>: passQueryString: Whether to carry request parameters when performing a jump or mirroring back to the source rule.
            /// Does the user request OSS with the request parameters? a=b&c=d, and set PassQueryString to true, if the rule is a 302 jump, then this request parameter is added in the Location header of the jump. For example, Location:example.com?a=b&c=d, the jump type is mirror back to the source, then this request parameter will also be carried in the initiated back to the source request.
            /// Valid values: true, false (default)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "passQueryString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PassQueryString
            {
                get => _passQueryString;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _passQueryString = value;
                }
            }

            private object? _protocol;

            /// <remarks>
            /// <strong>Property</strong>: protocol: Protocol when jumping. Only if RedirectType is set to External or AliCDN.
            /// If the file you want to access is test, set to go to example.com, and set Protocol to https, the Location header is https:\/\/example.com\/test.
            /// Value: http, https
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Protocol
            {
                get => _protocol;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _protocol = value;
                }
            }

            private object? _replaceKeyPrefixWith;

            /// <remarks>
            /// <strong>Property</strong>: replaceKeyPrefixWith: This value will be substituted for the prefix of the Object name in Redirect. If the prefix is empty, the string is inserted before the Object name.
            /// Notes: Only ReplaceKeyWith or ReplaceKeyPrefixWith nodes are allowed.
            /// Hypothesis to access the Object for ABC\/test. TXT, if set KeyPrefixEquals for ABC \/, ReplaceKeyPrefixWith for def \/, then the Location head to http:\/\/example.com\/def\/test.txt.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "replaceKeyPrefixWith", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReplaceKeyPrefixWith
            {
                get => _replaceKeyPrefixWith;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _replaceKeyPrefixWith = value;
                }
            }

            private object? _replaceKeyWith;

            /// <remarks>
            /// <strong>Property</strong>: replaceKeyWith: With Redirect, the Object name is replaced with the value specified by ReplaceKeyWith, which allows you to set variables. The currently supported variable is ${key}, which represents the name of the Object in the request.
            /// Suppose to access the Object for the test, if set ReplaceKeyWith to prefix\/${key}. The suffix, is the Location head to http:\/\/example.com\/prefix\/test.suffix.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "replaceKeyWith", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReplaceKeyWith
            {
                get => _replaceKeyWith;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _replaceKeyWith = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IRefererConfigurationProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.RefererConfigurationProperty")]
        public interface IRefererConfigurationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: allowEmptyReferer: undefined
            /// </remarks>
            [JsiiProperty(name: "allowEmptyReferer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? AllowEmptyReferer
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: refererList: undefined
            /// </remarks>
            [JsiiProperty(name: "refererList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RefererList
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IRefererConfigurationProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.RefererConfigurationProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IRefererConfigurationProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: allowEmptyReferer: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "allowEmptyReferer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? AllowEmptyReferer
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: refererList: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "refererList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RefererList
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.RefererConfigurationProperty")]
        public class RefererConfigurationProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IRefererConfigurationProperty
        {
            private object? _allowEmptyReferer;

            /// <remarks>
            /// <strong>Property</strong>: allowEmptyReferer: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allowEmptyReferer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllowEmptyReferer
            {
                get => _allowEmptyReferer;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _allowEmptyReferer = value;
                }
            }

            private object? _refererList;

            /// <remarks>
            /// <strong>Property</strong>: refererList: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "refererList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RefererList
            {
                get => _refererList;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case object[] cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _refererList = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IRoutingRulesProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.RoutingRulesProperty")]
        public interface IRoutingRulesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: condition: Conditions for matching.
            /// This rule is executed if the specified items are all satisfied. A match is only considered if all conditions for each node under this container are met.
            /// </remarks>
            [JsiiProperty(name: "condition", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.ConditionProperty\"}]}}")]
            object Condition
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: redirect: Specifies the action to be performed when this rule is matched.
            /// </remarks>
            [JsiiProperty(name: "redirect", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.RedirectProperty\"}]}}")]
            object Redirect
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleNumber: Match and execute the sequence number of the RoutingRule, OSS will match the rules in turn according to this sequence number. If the match is successful, this rule is executed and no subsequent rules are executed.
            /// </remarks>
            [JsiiProperty(name: "ruleNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object RuleNumber
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IRoutingRulesProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.RoutingRulesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IRoutingRulesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: condition: Conditions for matching.
                /// This rule is executed if the specified items are all satisfied. A match is only considered if all conditions for each node under this container are met.
                /// </remarks>
                [JsiiProperty(name: "condition", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.ConditionProperty\"}]}}")]
                public object Condition
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: redirect: Specifies the action to be performed when this rule is matched.
                /// </remarks>
                [JsiiProperty(name: "redirect", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.RedirectProperty\"}]}}")]
                public object Redirect
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: ruleNumber: Match and execute the sequence number of the RoutingRule, OSS will match the rules in turn according to this sequence number. If the match is successful, this rule is executed and no subsequent rules are executed.
                /// </remarks>
                [JsiiProperty(name: "ruleNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object RuleNumber
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.RoutingRulesProperty")]
        public class RoutingRulesProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IRoutingRulesProperty
        {
            private object _condition;

            /// <remarks>
            /// <strong>Property</strong>: condition: Conditions for matching.
            /// This rule is executed if the specified items are all satisfied. A match is only considered if all conditions for each node under this container are met.
            /// </remarks>
            [JsiiProperty(name: "condition", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.ConditionProperty\"}]}}")]
            public object Condition
            {
                get => _condition;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IConditionProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IConditionProperty).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IConditionProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _condition = value;
                }
            }

            private object _redirect;

            /// <remarks>
            /// <strong>Property</strong>: redirect: Specifies the action to be performed when this rule is matched.
            /// </remarks>
            [JsiiProperty(name: "redirect", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.RedirectProperty\"}]}}")]
            public object Redirect
            {
                get => _redirect;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IRedirectProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IRedirectProperty).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IRedirectProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _redirect = value;
                }
            }

            private object _ruleNumber;

            /// <remarks>
            /// <strong>Property</strong>: ruleNumber: Match and execute the sequence number of the RoutingRule, OSS will match the rules in turn according to this sequence number. If the match is successful, this rule is executed and no subsequent rules are executed.
            /// </remarks>
            [JsiiProperty(name: "ruleNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RuleNumber
            {
                get => _ruleNumber;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case double cast_cd4240:
                                break;
                            case byte cast_cd4240:
                                break;
                            case decimal cast_cd4240:
                                break;
                            case float cast_cd4240:
                                break;
                            case int cast_cd4240:
                                break;
                            case long cast_cd4240:
                                break;
                            case sbyte cast_cd4240:
                                break;
                            case short cast_cd4240:
                                break;
                            case uint cast_cd4240:
                                break;
                            case ulong cast_cd4240:
                                break;
                            case ushort cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _ruleNumber = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IRuleProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.RuleProperty")]
        public interface IRuleProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: prefix: undefined
            /// </remarks>
            [JsiiProperty(name: "prefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Prefix
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: abortMultipartUpload: undefined
            /// </remarks>
            [JsiiProperty(name: "abortMultipartUpload", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.AbortMultipartUploadProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? AbortMultipartUpload
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: expiration: undefined
            /// </remarks>
            [JsiiProperty(name: "expiration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.ExpirationProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Expiration
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: filter: This exclusion rule has at most one conditional argument container.
            /// </remarks>
            [JsiiProperty(name: "filter", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.FilterProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Filter
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: id: undefined
            /// </remarks>
            [JsiiProperty(name: "id", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Id
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: status: undefined
            /// </remarks>
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Status
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IRuleProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.RuleProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IRuleProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: prefix: undefined
                /// </remarks>
                [JsiiProperty(name: "prefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Prefix
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: abortMultipartUpload: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "abortMultipartUpload", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.AbortMultipartUploadProperty\"}]}}", isOptional: true)]
                public object? AbortMultipartUpload
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: expiration: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "expiration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.ExpirationProperty\"}]}}", isOptional: true)]
                public object? Expiration
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: filter: This exclusion rule has at most one conditional argument container.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "filter", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.FilterProperty\"}]}}", isOptional: true)]
                public object? Filter
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: id: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "id", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Id
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: status: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Status
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.RuleProperty")]
        public class RuleProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IRuleProperty
        {
            private object _prefix;

            /// <remarks>
            /// <strong>Property</strong>: prefix: undefined
            /// </remarks>
            [JsiiProperty(name: "prefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Prefix
            {
                get => _prefix;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _prefix = value;
                }
            }

            private object? _abortMultipartUpload;

            /// <remarks>
            /// <strong>Property</strong>: abortMultipartUpload: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "abortMultipartUpload", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.AbortMultipartUploadProperty\"}]}}", isOptional: true)]
            public object? AbortMultipartUpload
            {
                get => _abortMultipartUpload;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IAbortMultipartUploadProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IAbortMultipartUploadProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _abortMultipartUpload = value;
                }
            }

            private object? _expiration;

            /// <remarks>
            /// <strong>Property</strong>: expiration: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "expiration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.ExpirationProperty\"}]}}", isOptional: true)]
            public object? Expiration
            {
                get => _expiration;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IExpirationProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IExpirationProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _expiration = value;
                }
            }

            private object? _filter;

            /// <remarks>
            /// <strong>Property</strong>: filter: This exclusion rule has at most one conditional argument container.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "filter", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.FilterProperty\"}]}}", isOptional: true)]
            public object? Filter
            {
                get => _filter;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IFilterProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IFilterProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _filter = value;
                }
            }

            private object? _id;

            /// <remarks>
            /// <strong>Property</strong>: id: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "id", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Id
            {
                get => _id;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _id = value;
                }
            }

            private object? _status;

            /// <remarks>
            /// <strong>Property</strong>: status: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => _status;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _status = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IServerSideEncryptionConfigurationProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.ServerSideEncryptionConfigurationProperty")]
        public interface IServerSideEncryptionConfigurationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: sseAlgorithm: Specifies the default server-side encryption method.
            /// </remarks>
            [JsiiProperty(name: "sseAlgorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object SseAlgorithm
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: kmsMasterKeyId: Specifies the CMK ID when the value of SSEAlgorithm is KMS and a specified CMK is used for encryption. If the value of SSEAlgorithm is not KMS, this element must be null.
            /// </remarks>
            [JsiiProperty(name: "kmsMasterKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? KmsMasterKeyId
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IServerSideEncryptionConfigurationProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.ServerSideEncryptionConfigurationProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IServerSideEncryptionConfigurationProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: sseAlgorithm: Specifies the default server-side encryption method.
                /// </remarks>
                [JsiiProperty(name: "sseAlgorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object SseAlgorithm
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: kmsMasterKeyId: Specifies the CMK ID when the value of SSEAlgorithm is KMS and a specified CMK is used for encryption. If the value of SSEAlgorithm is not KMS, this element must be null.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "kmsMasterKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? KmsMasterKeyId
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.ServerSideEncryptionConfigurationProperty")]
        public class ServerSideEncryptionConfigurationProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IServerSideEncryptionConfigurationProperty
        {
            private object _sseAlgorithm;

            /// <remarks>
            /// <strong>Property</strong>: sseAlgorithm: Specifies the default server-side encryption method.
            /// </remarks>
            [JsiiProperty(name: "sseAlgorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SseAlgorithm
            {
                get => _sseAlgorithm;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _sseAlgorithm = value;
                }
            }

            private object? _kmsMasterKeyId;

            /// <remarks>
            /// <strong>Property</strong>: kmsMasterKeyId: Specifies the CMK ID when the value of SSEAlgorithm is KMS and a specified CMK is used for encryption. If the value of SSEAlgorithm is not KMS, this element must be null.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "kmsMasterKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KmsMasterKeyId
            {
                get => _kmsMasterKeyId;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _kmsMasterKeyId = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(ISetsProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.SetsProperty")]
        public interface ISetsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: Sets the Header key to a maximum of 1024 bytes in the same character set as Pass. This only works if RedirectType is set to Mirror.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Key
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: Set the value of the Header to a maximum of 1024 bytes without \r\n. This only works if RedirectType is set to Mirror.
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Value
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(ISetsProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.SetsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ISetsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: key: Sets the Header key to a maximum of 1024 bytes in the same character set as Pass. This only works if RedirectType is set to Mirror.
                /// </remarks>
                [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Key
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: value: Set the value of the Header to a maximum of 1024 bytes without \r\n. This only works if RedirectType is set to Mirror.
                /// </remarks>
                [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Value
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.SetsProperty")]
        public class SetsProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ISetsProperty
        {
            private object _key;

            /// <remarks>
            /// <strong>Property</strong>: key: Sets the Header key to a maximum of 1024 bytes in the same character set as Pass. This only works if RedirectType is set to Mirror.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Key
            {
                get => _key;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _key = value;
                }
            }

            private object _value;

            /// <remarks>
            /// <strong>Property</strong>: value: Set the value of the Header to a maximum of 1024 bytes without \r\n. This only works if RedirectType is set to Mirror.
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Value
            {
                get => _value;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _value = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IVersioningConfigurationProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.VersioningConfigurationProperty")]
        public interface IVersioningConfigurationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: status: Specifies the versioning state of a bucket. Valid values: Enabled and Suspended.
            /// </remarks>
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Status
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IVersioningConfigurationProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.VersioningConfigurationProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IVersioningConfigurationProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: status: Specifies the versioning state of a bucket. Valid values: Enabled and Suspended.
                /// </remarks>
                [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Status
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.VersioningConfigurationProperty")]
        public class VersioningConfigurationProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IVersioningConfigurationProperty
        {
            private object _status;

            /// <remarks>
            /// <strong>Property</strong>: status: Specifies the versioning state of a bucket. Valid values: Enabled and Suspended.
            /// </remarks>
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Status
            {
                get => _status;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _status = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IWebsiteConfigurationV2Property), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.WebsiteConfigurationV2Property")]
        public interface IWebsiteConfigurationV2Property
        {
            /// <remarks>
            /// <strong>Property</strong>: errorDocument: The properties of default error page.
            /// </remarks>
            [JsiiProperty(name: "errorDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.ErrorDocumentProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ErrorDocument
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: indexDocument: The properties of default home page.
            /// </remarks>
            [JsiiProperty(name: "indexDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.IndexDocumentProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IndexDocument
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: routingRules: The list of routing rules, up to 20.
            /// </remarks>
            [JsiiProperty(name: "routingRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.RoutingRulesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RoutingRules
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IWebsiteConfigurationV2Property), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.WebsiteConfigurationV2Property")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IWebsiteConfigurationV2Property
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: errorDocument: The properties of default error page.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "errorDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.ErrorDocumentProperty\"}]}}", isOptional: true)]
                public object? ErrorDocument
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: indexDocument: The properties of default home page.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "indexDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.IndexDocumentProperty\"}]}}", isOptional: true)]
                public object? IndexDocument
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: routingRules: The list of routing rules, up to 20.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "routingRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.RoutingRulesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? RoutingRules
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.WebsiteConfigurationV2Property")]
        public class WebsiteConfigurationV2Property : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IWebsiteConfigurationV2Property
        {
            private object? _errorDocument;

            /// <remarks>
            /// <strong>Property</strong>: errorDocument: The properties of default error page.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "errorDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.ErrorDocumentProperty\"}]}}", isOptional: true)]
            public object? ErrorDocument
            {
                get => _errorDocument;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IErrorDocumentProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IErrorDocumentProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _errorDocument = value;
                }
            }

            private object? _indexDocument;

            /// <remarks>
            /// <strong>Property</strong>: indexDocument: The properties of default home page.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "indexDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.IndexDocumentProperty\"}]}}", isOptional: true)]
            public object? IndexDocument
            {
                get => _indexDocument;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IIndexDocumentProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IIndexDocumentProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _indexDocument = value;
                }
            }

            private object? _routingRules;

            /// <remarks>
            /// <strong>Property</strong>: routingRules: The list of routing rules, up to 20.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "routingRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.RoutingRulesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? RoutingRules
            {
                get => _routingRules;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case object[] cast_cd4240:
                                for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                                {
                                    switch (cast_cd4240[__idx_f64a5c])
                                    {
                                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                            break;
                                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IRoutingRulesProperty cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IRoutingRulesProperty).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IRoutingRulesProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                    }
                                }
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _routingRules = value;
                }
            }
        }
    }
}
