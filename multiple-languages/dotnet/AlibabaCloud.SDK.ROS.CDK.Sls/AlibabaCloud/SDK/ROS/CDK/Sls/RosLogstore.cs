using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>A ROS template type:  `ALIYUN::SLS::Logstore`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Sls.RosLogstore), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosLogstore", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-sls.RosLogstoreProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosLogstore : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::SLS::Logstore`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosLogstore(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Sls.IRosLogstoreProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosLogstore(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosLogstore(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Sls.RosLogstore))!;

        /// <remarks>
        /// <strong>Attribute</strong>: LogstoreName: Logstore name.
        /// </remarks>
        [JsiiProperty(name: "attrLogstoreName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrLogstoreName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: logstoreName: Logstore name:
        /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "logstoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object LogstoreName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: projectName: Project name:
        /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object ProjectName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: appendMeta: Whether to add client external network IP and log arrival time after receiving the log.
        /// Default to false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "appendMeta", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? AppendMeta
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: autoSplit: Whether to automatically split the shard.
        /// Default to false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoSplit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? AutoSplit
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.
        /// Default to false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableTracking", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? EnableTracking
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: encryptConf: Data encryption config
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "encryptConf", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosLogstore.EncryptConfProperty\"}]}}", isOptional: true)]
        public virtual object? EncryptConf
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: maxSplitShard: The maximum number of shards when splitting automatically. Must be specified if AutoSplit is set to true.
        /// Allowed Values: 1-64.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maxSplitShard", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? MaxSplitShard
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: preserveStorage: Whether to keep the log permanently.
        /// If set to true, TTL will be ignored.
        /// Default to false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "preserveStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? PreserveStorage
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: shardCount: The number of Shards.
        /// Allowed Values: 1-100, default to 2.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "shardCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ShardCount
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ttl: The lifecycle of log in the logstore in days.
        /// Allowed Values: 1-3600, default to 30.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ttl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Ttl
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IEncryptConfProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosLogstore.EncryptConfProperty")]
        public interface IEncryptConfProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: enable: Specifies whether data encryption is enabled.
            /// </remarks>
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Enable
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: encryptType: The encryption algorithm. The encrypt_type
            /// parameter can be set to only default or m4.
            /// </remarks>
            [JsiiProperty(name: "encryptType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object EncryptType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: userCmkInfo: If this parameter is specified, the BYOK key is used.
            /// Otherwise, the service key is used.
            /// </remarks>
            [JsiiProperty(name: "userCmkInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosLogstore.UserCmkInfoProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? UserCmkInfo
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IEncryptConfProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosLogstore.EncryptConfProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.RosLogstore.IEncryptConfProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: enable: Specifies whether data encryption is enabled.
                /// </remarks>
                [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Enable
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: encryptType: The encryption algorithm. The encrypt_type
                /// parameter can be set to only default or m4.
                /// </remarks>
                [JsiiProperty(name: "encryptType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object EncryptType
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: userCmkInfo: If this parameter is specified, the BYOK key is used.
                /// Otherwise, the service key is used.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "userCmkInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosLogstore.UserCmkInfoProperty\"}]}}", isOptional: true)]
                public object? UserCmkInfo
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.RosLogstore.EncryptConfProperty")]
        public class EncryptConfProperty : AlibabaCloud.SDK.ROS.CDK.Sls.RosLogstore.IEncryptConfProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: enable: Specifies whether data encryption is enabled.
            /// </remarks>
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Enable
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: encryptType: The encryption algorithm. The encrypt_type
            /// parameter can be set to only default or m4.
            /// </remarks>
            [JsiiProperty(name: "encryptType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EncryptType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: userCmkInfo: If this parameter is specified, the BYOK key is used.
            /// Otherwise, the service key is used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userCmkInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosLogstore.UserCmkInfoProperty\"}]}}", isOptional: true)]
            public object? UserCmkInfo
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IUserCmkInfoProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosLogstore.UserCmkInfoProperty")]
        public interface IUserCmkInfoProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: arn: The ARN of the RAM role. For more information
            /// about how to obtain the ARN of a RAM role,
            /// see Ship log data from Log Service to OSS.
            /// </remarks>
            [JsiiProperty(name: "arn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Arn
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: cmkKeyId: The ID of the CMK to which the BYOK key belongs,
            /// for example, f5136b95-2420-ab31-xxxxxxxxx.
            /// </remarks>
            [JsiiProperty(name: "cmkKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object CmkKeyId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: regionId: The ID of the region where the CMK resides.
            /// </remarks>
            [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object RegionId
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IUserCmkInfoProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosLogstore.UserCmkInfoProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.RosLogstore.IUserCmkInfoProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: arn: The ARN of the RAM role. For more information
                /// about how to obtain the ARN of a RAM role,
                /// see Ship log data from Log Service to OSS.
                /// </remarks>
                [JsiiProperty(name: "arn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Arn
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: cmkKeyId: The ID of the CMK to which the BYOK key belongs,
                /// for example, f5136b95-2420-ab31-xxxxxxxxx.
                /// </remarks>
                [JsiiProperty(name: "cmkKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object CmkKeyId
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: regionId: The ID of the region where the CMK resides.
                /// </remarks>
                [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object RegionId
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.RosLogstore.UserCmkInfoProperty")]
        public class UserCmkInfoProperty : AlibabaCloud.SDK.ROS.CDK.Sls.RosLogstore.IUserCmkInfoProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: arn: The ARN of the RAM role. For more information
            /// about how to obtain the ARN of a RAM role,
            /// see Ship log data from Log Service to OSS.
            /// </remarks>
            [JsiiProperty(name: "arn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Arn
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: cmkKeyId: The ID of the CMK to which the BYOK key belongs,
            /// for example, f5136b95-2420-ab31-xxxxxxxxx.
            /// </remarks>
            [JsiiProperty(name: "cmkKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CmkKeyId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: regionId: The ID of the region where the CMK resides.
            /// </remarks>
            [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RegionId
            {
                get;
                set;
            }
        }
    }
}
