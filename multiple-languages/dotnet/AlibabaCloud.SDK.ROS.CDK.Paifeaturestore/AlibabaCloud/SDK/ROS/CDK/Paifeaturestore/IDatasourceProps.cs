using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Paifeaturestore
{
    /// <summary>Properties for defining a `Datasource`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paifeaturestore-datasource
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDatasourceProps), fullyQualifiedName: "@alicloud/ros-cdk-paifeaturestore.DatasourceProps")]
    public interface IDatasourceProps
    {
        /// <summary>Property datasourceName: The datasource name.</summary>
        /// <remarks>
        /// Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
        /// </remarks>
        [JsiiProperty(name: "datasourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DatasourceName
        {
            get;
        }

        /// <summary>Property instanceId: The ID of FeatureStore instance, which can be obtained through the ListInstances interface.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property type: Data source type.</summary>
        /// <remarks>
        /// The value is as follows:
        ///
        /// <list type="bullet">
        /// <description>Hologres</description>
        /// <description>GraphCompute</description>
        /// <description>FeatureDB</description>
        /// <description>MaxCompute.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <summary>Property uri: The resource address of the datasource.</summary>
        /// <remarks>
        /// The maximum length cannot exceed 64.
        /// </remarks>
        [JsiiProperty(name: "uri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Uri
        {
            get;
        }

        /// <summary>Property workspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface.</summary>
        [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkspaceId
        {
            get;
        }

        /// <summary>Property config: Resource configuration information.</summary>
        /// <remarks>
        /// The string format is json.
        /// </remarks>
        [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Config
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Datasource`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paifeaturestore-datasource
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDatasourceProps), fullyQualifiedName: "@alicloud/ros-cdk-paifeaturestore.DatasourceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Paifeaturestore.IDatasourceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property datasourceName: The datasource name.</summary>
            /// <remarks>
            /// Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
            /// </remarks>
            [JsiiProperty(name: "datasourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DatasourceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: The ID of FeatureStore instance, which can be obtained through the ListInstances interface.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property type: Data source type.</summary>
            /// <remarks>
            /// The value is as follows:
            ///
            /// <list type="bullet">
            /// <description>Hologres</description>
            /// <description>GraphCompute</description>
            /// <description>FeatureDB</description>
            /// <description>MaxCompute.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property uri: The resource address of the datasource.</summary>
            /// <remarks>
            /// The maximum length cannot exceed 64.
            /// </remarks>
            [JsiiProperty(name: "uri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Uri
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property workspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface.</summary>
            [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property config: Resource configuration information.</summary>
            /// <remarks>
            /// The string format is json.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Config
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
