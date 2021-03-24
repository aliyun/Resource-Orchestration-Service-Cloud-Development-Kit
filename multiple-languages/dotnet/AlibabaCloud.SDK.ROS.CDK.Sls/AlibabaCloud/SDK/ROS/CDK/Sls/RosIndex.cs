using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>A ROS template type:  `ALIYUN::SLS::Index`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Sls.RosIndex), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosIndex", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-sls.RosIndexProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosIndex : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::SLS::Index`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosIndex(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Sls.IRosIndexProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosIndex(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosIndex(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Sls.RosIndex))!;

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <summary>A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.</summary>
        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: fullTextIndex: Full-text indexing configuration.
        /// Full-text indexing and key indexing must have at least one enabled.
        /// </remarks>
        [JsiiProperty(name: "fullTextIndex", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosIndex.FullTextIndexProperty\"}]}}")]
        public virtual object FullTextIndex
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: logstoreName: Logstore name:
        /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "logstoreName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string LogstoreName
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: projectName: Project name:
        /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ProjectName
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: keyIndices: Key index configurations.
        /// Full-text indexing and key indexing must have at least one enabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keyIndices", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosIndex.KeyIndicesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? KeyIndices
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: logReduce: Whether to enable log reduce. Default to false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "logReduce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? LogReduce
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IFullTextIndexProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosIndex.FullTextIndexProperty")]
        public interface IFullTextIndexProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: enable: Whether to enable full-text indexing. Default to true.
            /// </remarks>
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Enable
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: caseSensitive: Whether it is case sensitive. Default to false.
            /// </remarks>
            [JsiiProperty(name: "caseSensitive", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CaseSensitive
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong></strong>: &<>/:\n\t\r )).
            /// 
            /// <strong>Property</strong>: delimiter: Delimiter. Default to (( , '";=()[]{}?
            /// </remarks>
            [JsiiProperty(name: "delimiter", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Delimiter
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: includeChinese: Whether it contains Chinese. Default to false.
            /// </remarks>
            [JsiiProperty(name: "includeChinese", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IncludeChinese
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IFullTextIndexProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosIndex.FullTextIndexProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.RosIndex.IFullTextIndexProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: enable: Whether to enable full-text indexing. Default to true.
                /// </remarks>
                [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Enable
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: caseSensitive: Whether it is case sensitive. Default to false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "caseSensitive", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CaseSensitive
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong></strong>: &<>/:\n\t\r )).
                /// 
                /// <strong>Property</strong>: delimiter: Delimiter. Default to (( , '";=()[]{}?
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "delimiter", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Delimiter
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: includeChinese: Whether it contains Chinese. Default to false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "includeChinese", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IncludeChinese
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.RosIndex.FullTextIndexProperty")]
        public class FullTextIndexProperty : AlibabaCloud.SDK.ROS.CDK.Sls.RosIndex.IFullTextIndexProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: enable: Whether to enable full-text indexing. Default to true.
            /// </remarks>
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object Enable
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: caseSensitive: Whether it is case sensitive. Default to false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "caseSensitive", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? CaseSensitive
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong></strong>: &<>/:\n\t\r )).
            /// 
            /// <strong>Property</strong>: delimiter: Delimiter. Default to (( , '";=()[]{}?
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "delimiter", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Delimiter
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: includeChinese: Whether it contains Chinese. Default to false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "includeChinese", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? IncludeChinese
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IJsonKeyIndicesProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosIndex.JsonKeyIndicesProperty")]
        public interface IJsonKeyIndicesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: Json key name. It can be nested by dot(.), such as k1.k2.k3.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            string Name
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: Json key type. Allowed types: text, long, double. Default to text.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
            string Type
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: alias: Json key alias.
            /// </remarks>
            [JsiiProperty(name: "alias", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Alias
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: enableAnalytics: Whether this json key is enabled for statistics. Default to true.
            /// </remarks>
            [JsiiProperty(name: "enableAnalytics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? EnableAnalytics
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IJsonKeyIndicesProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosIndex.JsonKeyIndicesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.RosIndex.IJsonKeyIndicesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: name: Json key name. It can be nested by dot(.), such as k1.k2.k3.
                /// </remarks>
                [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
                public string Name
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: type: Json key type. Allowed types: text, long, double. Default to text.
                /// </remarks>
                [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
                public string Type
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: alias: Json key alias.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "alias", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Alias
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: enableAnalytics: Whether this json key is enabled for statistics. Default to true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "enableAnalytics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? EnableAnalytics
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.RosIndex.JsonKeyIndicesProperty")]
        public class JsonKeyIndicesProperty : AlibabaCloud.SDK.ROS.CDK.Sls.RosIndex.IJsonKeyIndicesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: Json key name. It can be nested by dot(.), such as k1.k2.k3.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Name
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: Json key type. Allowed types: text, long, double. Default to text.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Type
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: alias: Json key alias.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "alias", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Alias
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: enableAnalytics: Whether this json key is enabled for statistics. Default to true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableAnalytics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? EnableAnalytics
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IKeyIndicesProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosIndex.KeyIndicesProperty")]
        public interface IKeyIndicesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: Key name.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            string Name
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: Key type. Allowed types: text, long, double, json. Default to text.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
            string Type
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: alias: Key alias.
            /// </remarks>
            [JsiiProperty(name: "alias", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Alias
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: caseSensitive: Whether it is case sensitive. It takes effect when Type is text or json. Default to false.
            /// </remarks>
            [JsiiProperty(name: "caseSensitive", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CaseSensitive
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong></strong>: &<>/:\n\t\r )).
            /// 
            /// <strong>Property</strong>: delimiter: Delimiter. It takes effect when Type is text or json. Default to (( , '";=()[]{}?
            /// </remarks>
            [JsiiProperty(name: "delimiter", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Delimiter
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: enableAnalytics: Whether this key is enabled for statistics. Default to false for json type, else true.
            /// </remarks>
            [JsiiProperty(name: "enableAnalytics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? EnableAnalytics
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: includeChinese: Whether it contains Chinese. It takes effect when Type is text or json. Default to false.
            /// </remarks>
            [JsiiProperty(name: "includeChinese", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IncludeChinese
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: jsonKeyIndices: Json key index configurations.
            /// </remarks>
            [JsiiProperty(name: "jsonKeyIndices", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosIndex.JsonKeyIndicesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? JsonKeyIndices
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IKeyIndicesProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosIndex.KeyIndicesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.RosIndex.IKeyIndicesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: name: Key name.
                /// </remarks>
                [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
                public string Name
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: type: Key type. Allowed types: text, long, double, json. Default to text.
                /// </remarks>
                [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
                public string Type
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: alias: Key alias.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "alias", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Alias
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: caseSensitive: Whether it is case sensitive. It takes effect when Type is text or json. Default to false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "caseSensitive", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CaseSensitive
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong></strong>: &<>/:\n\t\r )).
                /// 
                /// <strong>Property</strong>: delimiter: Delimiter. It takes effect when Type is text or json. Default to (( , '";=()[]{}?
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "delimiter", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Delimiter
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: enableAnalytics: Whether this key is enabled for statistics. Default to false for json type, else true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "enableAnalytics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? EnableAnalytics
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: includeChinese: Whether it contains Chinese. It takes effect when Type is text or json. Default to false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "includeChinese", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IncludeChinese
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: jsonKeyIndices: Json key index configurations.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "jsonKeyIndices", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosIndex.JsonKeyIndicesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? JsonKeyIndices
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.RosIndex.KeyIndicesProperty")]
        public class KeyIndicesProperty : AlibabaCloud.SDK.ROS.CDK.Sls.RosIndex.IKeyIndicesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: Key name.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Name
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: Key type. Allowed types: text, long, double, json. Default to text.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Type
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: alias: Key alias.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "alias", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Alias
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: caseSensitive: Whether it is case sensitive. It takes effect when Type is text or json. Default to false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "caseSensitive", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? CaseSensitive
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong></strong>: &<>/:\n\t\r )).
            /// 
            /// <strong>Property</strong>: delimiter: Delimiter. It takes effect when Type is text or json. Default to (( , '";=()[]{}?
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "delimiter", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Delimiter
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: enableAnalytics: Whether this key is enabled for statistics. Default to false for json type, else true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableAnalytics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? EnableAnalytics
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: includeChinese: Whether it contains Chinese. It takes effect when Type is text or json. Default to false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "includeChinese", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? IncludeChinese
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: jsonKeyIndices: Json key index configurations.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "jsonKeyIndices", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosIndex.JsonKeyIndicesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? JsonKeyIndices
            {
                get;
                set;
            }
        }
    }
}
