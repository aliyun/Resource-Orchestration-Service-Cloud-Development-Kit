using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>A ROS template type:  `ALIYUN::OSS::Bucket`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucketProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosBucket : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::OSS::Bucket`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosBucket(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Oss.IRosBucketProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
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

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
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
            set => SetInstanceProperty(value);
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
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "corsConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.CORSConfigurationProperty\"}]}}", isOptional: true)]
        public virtual object? CorsConfiguration
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: deletionForce: Whether force delete the relative objects in the bucket. Default value is false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DeletionForce
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "lifecycleConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.LifecycleConfigurationProperty\"}]}}", isOptional: true)]
        public virtual object? LifecycleConfiguration
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: loggingConfiguration: Settings that defines where logs are stored.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "loggingConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.LoggingConfigurationProperty\"}]}}", isOptional: true)]
        public virtual object? LoggingConfiguration
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: policy: Bucket policy
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        public virtual object? Policy
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: refererConfiguration: undefined
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "refererConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.RefererConfigurationProperty\"}]}}", isOptional: true)]
        public virtual object? RefererConfiguration
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "serverSideEncryptionConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.ServerSideEncryptionConfigurationProperty\"}]}}", isOptional: true)]
        public virtual object? ServerSideEncryptionConfiguration
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: storageClass: Specifies the storage class of the bucket. Default is "Standard".
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "storageClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? StorageClass
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
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
        /// <strong>Property</strong>: websiteConfiguration: The properties of website config.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "websiteConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.WebsiteConfigurationProperty\"}]}}", isOptional: true)]
        public virtual object? WebsiteConfiguration
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
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
            /// <remarks>
            /// <strong>Property</strong>: createdBeforeDate: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "createdBeforeDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? CreatedBeforeDate
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: days: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "days", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Days
            {
                get;
                set;
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
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.CORSConfigurationProperty")]
        public class CORSConfigurationProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.ICORSConfigurationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: corsRule: A set of origins and methods that you allow.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "corsRule", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.CORSRuleProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? CorsRule
            {
                get;
                set;
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
            /// <remarks>
            /// <strong>Property</strong>: allowedHeader: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allowedHeader", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? AllowedHeader
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: allowedMethod: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allowedMethod", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? AllowedMethod
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: allowedOrigin: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allowedOrigin", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? AllowedOrigin
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: exposeHeader: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "exposeHeader", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? ExposeHeader
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: maxAgeSeconds: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxAgeSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? MaxAgeSeconds
            {
                get;
                set;
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
            /// <strong>Property</strong>: date: undefined
            /// </remarks>
            [JsiiProperty(name: "date", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Date
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
                /// <strong>Property</strong>: date: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "date", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Date
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
        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.ExpirationProperty")]
        public class ExpirationProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IExpirationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: createdBeforeDate: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "createdBeforeDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? CreatedBeforeDate
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: date: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "date", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Date
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: days: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "days", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Days
            {
                get;
                set;
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
            /// <remarks>
            /// <strong>Property</strong>: rule: Describes lifecycle rules for the oss bucket Lifecycle Configuration property.
            /// </remarks>
            [JsiiProperty(name: "rule", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.RuleProperty\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
            public object Rule
            {
                get;
                set;
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
            /// <remarks>
            /// <strong>Property</strong>: targetBucket: Specifies the bucket where you want Aliyun OSS to store server access logs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "targetBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? TargetBucket
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetPrefix: This element lets you specify a prefix for the objects that the log files will be stored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "targetPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? TargetPrefix
            {
                get;
                set;
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
            /// <remarks>
            /// <strong>Property</strong>: allowEmptyReferer: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allowEmptyReferer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? AllowEmptyReferer
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: refererList: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "refererList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RefererList
            {
                get;
                set;
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
            /// <remarks>
            /// <strong>Property</strong>: prefix: undefined
            /// </remarks>
            [JsiiProperty(name: "prefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object Prefix
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: abortMultipartUpload: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "abortMultipartUpload", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.AbortMultipartUploadProperty\"}]}}", isOptional: true, isOverride: true)]
            public object? AbortMultipartUpload
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: expiration: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "expiration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucket.ExpirationProperty\"}]}}", isOptional: true, isOverride: true)]
            public object? Expiration
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: id: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "id", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Id
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: status: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Status
            {
                get;
                set;
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
            /// <remarks>
            /// <strong>Property</strong>: sseAlgorithm: Specifies the default server-side encryption method.
            /// </remarks>
            [JsiiProperty(name: "sseAlgorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object SseAlgorithm
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: kmsMasterKeyId: Specifies the CMK ID when the value of SSEAlgorithm is KMS and a specified CMK is used for encryption. If the value of SSEAlgorithm is not KMS, this element must be null.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "kmsMasterKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? KmsMasterKeyId
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IWebsiteConfigurationProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.WebsiteConfigurationProperty")]
        public interface IWebsiteConfigurationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: errorDocument: default error page.
            /// </remarks>
            [JsiiProperty(name: "errorDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ErrorDocument
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: indexDocument: default home page.
            /// </remarks>
            [JsiiProperty(name: "indexDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IndexDocument
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IWebsiteConfigurationProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucket.WebsiteConfigurationProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IWebsiteConfigurationProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: errorDocument: default error page.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "errorDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ErrorDocument
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: indexDocument: default home page.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "indexDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IndexDocument
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosBucket.WebsiteConfigurationProperty")]
        public class WebsiteConfigurationProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosBucket.IWebsiteConfigurationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: errorDocument: default error page.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "errorDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? ErrorDocument
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: indexDocument: default home page.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "indexDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? IndexDocument
            {
                get;
                set;
            }
        }
    }
}
