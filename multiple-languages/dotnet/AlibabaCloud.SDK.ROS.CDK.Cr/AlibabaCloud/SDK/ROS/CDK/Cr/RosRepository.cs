using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>A ROS template type:  `ALIYUN::CR::Repository`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cr.RosRepository), fullyQualifiedName: "@alicloud/ros-cdk-cr.RosRepository", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cr.RosRepositoryProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosRepository : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::CR::Repository`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosRepository(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cr.IRosRepositoryProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosRepository(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosRepository(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Cr.RosRepository))!;

        /// <remarks>
        /// <strong>Attribute</strong>: InstanceId: The ID of the enterprise edition instance which repository belongs to.
        /// </remarks>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrInstanceId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: RepoId: The repository ID.
        /// </remarks>
        [JsiiProperty(name: "attrRepoId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrRepoId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: RepoName: The name of the repository.
        /// </remarks>
        [JsiiProperty(name: "attrRepoName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrRepoName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: RepoNamespace: The name of the namespace to which the repository belongs.
        /// </remarks>
        [JsiiProperty(name: "attrRepoNamespace", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrRepoNamespace
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: RepoType: The type of the repository.
        /// </remarks>
        [JsiiProperty(name: "attrRepoType", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrRepoType
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
        /// <strong>Property</strong>: repoName: The name of the repository.
        /// </remarks>
        [JsiiProperty(name: "repoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object RepoName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: repoNamespace: The name of the namespace to which the repository belongs.
        /// </remarks>
        [JsiiProperty(name: "repoNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object RepoNamespace
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: repoType: The type of the repository. Valid values: PUBLIC, PRIVATE.
        /// </remarks>
        [JsiiProperty(name: "repoType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object RepoType
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: summary: The summary of the repository.
        /// </remarks>
        [JsiiProperty(name: "summary", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object Summary
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: detail: The description of the repository.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Detail
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the enterprise edition instance which repository belongs to. If not provided, will use personal edition instance as default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? InstanceId
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: repoSource: Code Source message.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "repoSource", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cr.RosRepository.RepoSourceProperty\"}]}}", isOptional: true)]
        public virtual object? RepoSource
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: tagImmutability: Specifies whether the repository is immutable. Only takes effect when InstanceId is specified.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tagImmutability", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? TagImmutability
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IRepoSourceProperty), fullyQualifiedName: "@alicloud/ros-cdk-cr.RosRepository.RepoSourceProperty")]
        public interface IRepoSourceProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: isAutoBuild: Whether to enable automatic construction
            /// </remarks>
            [JsiiProperty(name: "isAutoBuild", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object IsAutoBuild
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: isDisableCache: Whether to disable Cache at build time
            /// </remarks>
            [JsiiProperty(name: "isDisableCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object IsDisableCache
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: isOversea: Whether to enable overseas construction
            /// </remarks>
            [JsiiProperty(name: "isOversea", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object IsOversea
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceRepoName: Source code warehouse name
            /// </remarks>
            [JsiiProperty(name: "sourceRepoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object SourceRepoName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceRepoNamespace: Source code repository namespace
            /// </remarks>
            [JsiiProperty(name: "sourceRepoNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object SourceRepoNamespace
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceRepoType: code source type. Allow values:
            /// CODE, GITHUB, GITLAB, BITBUCKET. Enterprise Edition additional support CODEUP and GITEE
            /// </remarks>
            [JsiiProperty(name: "sourceRepoType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object SourceRepoType
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IRepoSourceProperty), fullyQualifiedName: "@alicloud/ros-cdk-cr.RosRepository.RepoSourceProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.RosRepository.IRepoSourceProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: isAutoBuild: Whether to enable automatic construction
                /// </remarks>
                [JsiiProperty(name: "isAutoBuild", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object IsAutoBuild
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: isDisableCache: Whether to disable Cache at build time
                /// </remarks>
                [JsiiProperty(name: "isDisableCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object IsDisableCache
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: isOversea: Whether to enable overseas construction
                /// </remarks>
                [JsiiProperty(name: "isOversea", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object IsOversea
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: sourceRepoName: Source code warehouse name
                /// </remarks>
                [JsiiProperty(name: "sourceRepoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object SourceRepoName
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: sourceRepoNamespace: Source code repository namespace
                /// </remarks>
                [JsiiProperty(name: "sourceRepoNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object SourceRepoNamespace
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: sourceRepoType: code source type. Allow values:
                /// CODE, GITHUB, GITLAB, BITBUCKET. Enterprise Edition additional support CODEUP and GITEE
                /// </remarks>
                [JsiiProperty(name: "sourceRepoType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object SourceRepoType
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cr.RosRepository.RepoSourceProperty")]
        public class RepoSourceProperty : AlibabaCloud.SDK.ROS.CDK.Cr.RosRepository.IRepoSourceProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: isAutoBuild: Whether to enable automatic construction
            /// </remarks>
            [JsiiProperty(name: "isAutoBuild", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IsAutoBuild
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: isDisableCache: Whether to disable Cache at build time
            /// </remarks>
            [JsiiProperty(name: "isDisableCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IsDisableCache
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: isOversea: Whether to enable overseas construction
            /// </remarks>
            [JsiiProperty(name: "isOversea", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IsOversea
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceRepoName: Source code warehouse name
            /// </remarks>
            [JsiiProperty(name: "sourceRepoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceRepoName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceRepoNamespace: Source code repository namespace
            /// </remarks>
            [JsiiProperty(name: "sourceRepoNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceRepoNamespace
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceRepoType: code source type. Allow values:
            /// CODE, GITHUB, GITLAB, BITBUCKET. Enterprise Edition additional support CODEUP and GITEE
            /// </remarks>
            [JsiiProperty(name: "sourceRepoType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceRepoType
            {
                get;
                set;
            }
        }
    }
}
