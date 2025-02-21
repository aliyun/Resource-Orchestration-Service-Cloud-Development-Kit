using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>This class is a base encapsulation around the ROS resource type `ALIYUN::OSS::Website`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class does not contain additional functions, so it is recommended to use the `Website` class instead of this class for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-website
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosWebsite", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsiteProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosWebsite : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosWebsite(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Oss.IRosWebsiteProps props, bool enableResourcePropertyConstraint): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Oss.IRosWebsiteProps props, bool enableResourcePropertyConstraint)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosWebsite(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosWebsite(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite))!;

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: bucketName: Bucket name.
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
        /// <strong>Property</strong>: websiteConfiguration: Website configuration.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "websiteConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.WebsiteConfigurationProperty\"}]}}", isOptional: true)]
        public virtual object? WebsiteConfiguration
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
                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IWebsiteConfigurationProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IWebsiteConfigurationProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }
        [JsiiInterface(nativeType: typeof(IConditionProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosWebsite.ConditionProperty")]
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
            [JsiiProperty(name: "includeHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.IncludeHeadersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
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

            [JsiiTypeProxy(nativeType: typeof(IConditionProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosWebsite.ConditionProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IConditionProperty
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
                [JsiiProperty(name: "includeHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.IncludeHeadersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
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
        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosWebsite.ConditionProperty")]
        public class ConditionProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IConditionProperty
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
            [JsiiProperty(name: "includeHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.IncludeHeadersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
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
                                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IIncludeHeadersProperty cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IIncludeHeadersProperty).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IIncludeHeadersProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
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
        [JsiiInterface(nativeType: typeof(IErrorDocumentProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosWebsite.ErrorDocumentProperty")]
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

            [JsiiTypeProxy(nativeType: typeof(IErrorDocumentProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosWebsite.ErrorDocumentProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IErrorDocumentProperty
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

        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosWebsite.ErrorDocumentProperty")]
        public class ErrorDocumentProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IErrorDocumentProperty
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
        [JsiiInterface(nativeType: typeof(IIncludeHeadersProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosWebsite.IncludeHeadersProperty")]
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

            [JsiiTypeProxy(nativeType: typeof(IIncludeHeadersProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosWebsite.IncludeHeadersProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IIncludeHeadersProperty
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

        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosWebsite.IncludeHeadersProperty")]
        public class IncludeHeadersProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IIncludeHeadersProperty
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
        [JsiiInterface(nativeType: typeof(IIndexDocumentProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosWebsite.IndexDocumentProperty")]
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

            [JsiiTypeProxy(nativeType: typeof(IIndexDocumentProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosWebsite.IndexDocumentProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IIndexDocumentProperty
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

        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosWebsite.IndexDocumentProperty")]
        public class IndexDocumentProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IIndexDocumentProperty
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
        [JsiiInterface(nativeType: typeof(IMirrorHeadersProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosWebsite.MirrorHeadersProperty")]
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
            [JsiiProperty(name: "sets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.SetsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Sets
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IMirrorHeadersProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosWebsite.MirrorHeadersProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IMirrorHeadersProperty
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
                [JsiiProperty(name: "sets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.SetsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Sets
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosWebsite.MirrorHeadersProperty")]
        public class MirrorHeadersProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IMirrorHeadersProperty
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
            [JsiiProperty(name: "sets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.SetsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
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
                                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.ISetsProperty cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.ISetsProperty).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.ISetsProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
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
        [JsiiInterface(nativeType: typeof(IRedirectProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosWebsite.RedirectProperty")]
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
            [JsiiProperty(name: "mirrorHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.MirrorHeadersProperty\"}]}}", isOptional: true)]
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

            [JsiiTypeProxy(nativeType: typeof(IRedirectProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosWebsite.RedirectProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IRedirectProperty
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
                [JsiiProperty(name: "mirrorHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.MirrorHeadersProperty\"}]}}", isOptional: true)]
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

        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosWebsite.RedirectProperty")]
        public class RedirectProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IRedirectProperty
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
            [JsiiProperty(name: "mirrorHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.MirrorHeadersProperty\"}]}}", isOptional: true)]
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
                            case AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IMirrorHeadersProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IMirrorHeadersProperty).FullName}; received {value.GetType().FullName}", nameof(value));
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
        [JsiiInterface(nativeType: typeof(IRoutingRulesProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosWebsite.RoutingRulesProperty")]
        public interface IRoutingRulesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: condition: Conditions for matching.
            /// This rule is executed if the specified items are all satisfied. A match is only considered if all conditions for each node under this container are met.
            /// </remarks>
            [JsiiProperty(name: "condition", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.ConditionProperty\"}]}}")]
            object Condition
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: redirect: Specifies the action to be performed when this rule is matched.
            /// </remarks>
            [JsiiProperty(name: "redirect", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.RedirectProperty\"}]}}")]
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

            [JsiiTypeProxy(nativeType: typeof(IRoutingRulesProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosWebsite.RoutingRulesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IRoutingRulesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: condition: Conditions for matching.
                /// This rule is executed if the specified items are all satisfied. A match is only considered if all conditions for each node under this container are met.
                /// </remarks>
                [JsiiProperty(name: "condition", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.ConditionProperty\"}]}}")]
                public object Condition
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: redirect: Specifies the action to be performed when this rule is matched.
                /// </remarks>
                [JsiiProperty(name: "redirect", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.RedirectProperty\"}]}}")]
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

        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosWebsite.RoutingRulesProperty")]
        public class RoutingRulesProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IRoutingRulesProperty
        {
            private object _condition;

            /// <remarks>
            /// <strong>Property</strong>: condition: Conditions for matching.
            /// This rule is executed if the specified items are all satisfied. A match is only considered if all conditions for each node under this container are met.
            /// </remarks>
            [JsiiProperty(name: "condition", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.ConditionProperty\"}]}}")]
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
                            case AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IConditionProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IConditionProperty).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IConditionProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _condition = value;
                }
            }

            private object _redirect;

            /// <remarks>
            /// <strong>Property</strong>: redirect: Specifies the action to be performed when this rule is matched.
            /// </remarks>
            [JsiiProperty(name: "redirect", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.RedirectProperty\"}]}}")]
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
                            case AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IRedirectProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IRedirectProperty).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IRedirectProperty).FullName}; received {value.GetType().FullName}", nameof(value));
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
        [JsiiInterface(nativeType: typeof(ISetsProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosWebsite.SetsProperty")]
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

            [JsiiTypeProxy(nativeType: typeof(ISetsProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosWebsite.SetsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.ISetsProperty
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

        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosWebsite.SetsProperty")]
        public class SetsProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.ISetsProperty
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
        [JsiiInterface(nativeType: typeof(IWebsiteConfigurationProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosWebsite.WebsiteConfigurationProperty")]
        public interface IWebsiteConfigurationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: errorDocument: The properties of default error page.
            /// </remarks>
            [JsiiProperty(name: "errorDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.ErrorDocumentProperty\"}]}}", isOptional: true)]
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
            [JsiiProperty(name: "indexDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.IndexDocumentProperty\"}]}}", isOptional: true)]
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
            [JsiiProperty(name: "routingRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.RoutingRulesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RoutingRules
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IWebsiteConfigurationProperty), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosWebsite.WebsiteConfigurationProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IWebsiteConfigurationProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: errorDocument: The properties of default error page.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "errorDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.ErrorDocumentProperty\"}]}}", isOptional: true)]
                public object? ErrorDocument
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: indexDocument: The properties of default home page.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "indexDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.IndexDocumentProperty\"}]}}", isOptional: true)]
                public object? IndexDocument
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: routingRules: The list of routing rules, up to 20.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "routingRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.RoutingRulesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? RoutingRules
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosWebsite.WebsiteConfigurationProperty")]
        public class WebsiteConfigurationProperty : AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IWebsiteConfigurationProperty
        {
            private object? _errorDocument;

            /// <remarks>
            /// <strong>Property</strong>: errorDocument: The properties of default error page.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "errorDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.ErrorDocumentProperty\"}]}}", isOptional: true)]
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
                            case AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IErrorDocumentProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IErrorDocumentProperty).FullName}; received {value.GetType().FullName}", nameof(value));
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
            [JsiiProperty(name: "indexDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.IndexDocumentProperty\"}]}}", isOptional: true)]
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
                            case AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IIndexDocumentProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IIndexDocumentProperty).FullName}; received {value.GetType().FullName}", nameof(value));
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
            [JsiiProperty(name: "routingRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.RoutingRulesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
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
                                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IRoutingRulesProperty cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IRoutingRulesProperty).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IRoutingRulesProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
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
