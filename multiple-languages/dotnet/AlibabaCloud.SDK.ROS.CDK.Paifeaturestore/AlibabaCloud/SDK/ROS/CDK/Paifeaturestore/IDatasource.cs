using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Paifeaturestore
{
    /// <summary>Represents a `Datasource`.</summary>
    [JsiiInterface(nativeType: typeof(IDatasource), fullyQualifiedName: "@alicloud/ros-cdk-paifeaturestore.IDatasource")]
    public interface IDatasource : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Config: Resource configuration information.</summary>
        /// <remarks>
        /// The string format is json.
        /// </remarks>
        [JsiiProperty(name: "attrConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfig
        {
            get;
        }

        /// <summary>Attribute CreateTime: The creation time of the resource.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DatasourceId: The first ID of the resource.</summary>
        [JsiiProperty(name: "attrDatasourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDatasourceId
        {
            get;
        }

        /// <summary>Attribute DatasourceName: The datasource name.</summary>
        /// <remarks>
        /// Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
        /// </remarks>
        [JsiiProperty(name: "attrDatasourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDatasourceName
        {
            get;
        }

        /// <summary>Attribute Type: Data source type.</summary>
        [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrType
        {
            get;
        }

        /// <summary>Attribute Uri: The resource address of the datasource.</summary>
        /// <remarks>
        /// The maximum length cannot exceed 64.
        /// </remarks>
        [JsiiProperty(name: "attrUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUri
        {
            get;
        }

        /// <summary>Attribute WorkspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface.</summary>
        [JsiiProperty(name: "attrWorkspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWorkspaceId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-paifeaturestore.DatasourceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Paifeaturestore.IDatasourceProps Props
        {
            get;
        }

        /// <summary>Represents a `Datasource`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDatasource), fullyQualifiedName: "@alicloud/ros-cdk-paifeaturestore.IDatasource")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Paifeaturestore.IDatasource
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Config: Resource configuration information.</summary>
            /// <remarks>
            /// The string format is json.
            /// </remarks>
            [JsiiProperty(name: "attrConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The creation time of the resource.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DatasourceId: The first ID of the resource.</summary>
            [JsiiProperty(name: "attrDatasourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDatasourceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DatasourceName: The datasource name.</summary>
            /// <remarks>
            /// Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
            /// </remarks>
            [JsiiProperty(name: "attrDatasourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDatasourceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Type: Data source type.</summary>
            [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Uri: The resource address of the datasource.</summary>
            /// <remarks>
            /// The maximum length cannot exceed 64.
            /// </remarks>
            [JsiiProperty(name: "attrUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUri
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WorkspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface.</summary>
            [JsiiProperty(name: "attrWorkspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-paifeaturestore.DatasourceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Paifeaturestore.IDatasourceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Paifeaturestore.IDatasourceProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
