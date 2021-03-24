using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>A ROS template type:  `ALIYUN::SLS::Savedsearch`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Sls.RosSavedsearch), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosSavedsearch", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-sls.RosSavedsearchProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosSavedsearch : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::SLS::Savedsearch`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosSavedsearch(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Sls.IRosSavedsearchProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosSavedsearch(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosSavedsearch(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Sls.RosSavedsearch))!;

        /// <remarks>
        /// <strong>Attribute</strong>: SavedsearchName: Savedsearch name.
        /// </remarks>
        [JsiiProperty(name: "attrSavedsearchName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSavedsearchName
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: detail:
        /// </remarks>
        [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosSavedsearch.DetailProperty\"}]}}")]
        public virtual object Detail
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
        /// <strong>Property</strong>: project: Project name
        /// </remarks>
        [JsiiProperty(name: "project", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Project
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IDetailProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosSavedsearch.DetailProperty")]
        public interface IDetailProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: logstore: Logstore name.
            /// </remarks>
            [JsiiProperty(name: "logstore", typeJson: "{\"primitive\":\"string\"}")]
            string Logstore
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: savedsearchName: Savedsearch name.
            /// </remarks>
            [JsiiProperty(name: "savedsearchName", typeJson: "{\"primitive\":\"string\"}")]
            string SavedsearchName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: searchQuery: Check sentence.
            /// </remarks>
            [JsiiProperty(name: "searchQuery", typeJson: "{\"primitive\":\"string\"}")]
            string SearchQuery
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: topic: Topic name
            /// </remarks>
            [JsiiProperty(name: "topic", typeJson: "{\"primitive\":\"string\"}")]
            string Topic
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: displayName: Display name.
            /// </remarks>
            [JsiiProperty(name: "displayName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? DisplayName
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IDetailProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosSavedsearch.DetailProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.RosSavedsearch.IDetailProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: logstore: Logstore name.
                /// </remarks>
                [JsiiProperty(name: "logstore", typeJson: "{\"primitive\":\"string\"}")]
                public string Logstore
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: savedsearchName: Savedsearch name.
                /// </remarks>
                [JsiiProperty(name: "savedsearchName", typeJson: "{\"primitive\":\"string\"}")]
                public string SavedsearchName
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: searchQuery: Check sentence.
                /// </remarks>
                [JsiiProperty(name: "searchQuery", typeJson: "{\"primitive\":\"string\"}")]
                public string SearchQuery
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: topic: Topic name
                /// </remarks>
                [JsiiProperty(name: "topic", typeJson: "{\"primitive\":\"string\"}")]
                public string Topic
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: displayName: Display name.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "displayName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? DisplayName
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.RosSavedsearch.DetailProperty")]
        public class DetailProperty : AlibabaCloud.SDK.ROS.CDK.Sls.RosSavedsearch.IDetailProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: logstore: Logstore name.
            /// </remarks>
            [JsiiProperty(name: "logstore", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Logstore
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: savedsearchName: Savedsearch name.
            /// </remarks>
            [JsiiProperty(name: "savedsearchName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string SavedsearchName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: searchQuery: Check sentence.
            /// </remarks>
            [JsiiProperty(name: "searchQuery", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string SearchQuery
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: topic: Topic name
            /// </remarks>
            [JsiiProperty(name: "topic", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Topic
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: displayName: Display name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "displayName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? DisplayName
            {
                get;
                set;
            }
        }
    }
}
