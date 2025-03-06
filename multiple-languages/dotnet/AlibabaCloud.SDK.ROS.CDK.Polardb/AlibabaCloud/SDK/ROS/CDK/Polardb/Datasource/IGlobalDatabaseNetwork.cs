using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource
{
    /// <summary>Represents a `GlobalDatabaseNetwork`.</summary>
    [JsiiInterface(nativeType: typeof(IGlobalDatabaseNetwork), fullyQualifiedName: "@alicloud/ros-cdk-polardb.datasource.IGlobalDatabaseNetwork")]
    public interface IGlobalDatabaseNetwork : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Connections: The information about the connection to the cluster.</summary>
        [JsiiProperty(name: "attrConnections", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConnections
        {
            get;
        }

        /// <summary>Attribute CreateTime: The time at which the GDN was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DbClusters: The clusters that are included in the GDN.</summary>
        [JsiiProperty(name: "attrDbClusters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbClusters
        {
            get;
        }

        /// <summary>Attribute DbType: The type of the database engine.</summary>
        /// <remarks>
        /// Only MySQL is supported.
        /// </remarks>
        [JsiiProperty(name: "attrDbType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbType
        {
            get;
        }

        /// <summary>Attribute DbVersion: The version of the database engine.</summary>
        /// <remarks>
        /// Only version 8.0 is supported.
        /// </remarks>
        [JsiiProperty(name: "attrDbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbVersion
        {
            get;
        }

        /// <summary>Attribute GdnDescription: The description of the GDN.</summary>
        /// <remarks>
        /// The description must meet the following requirements:
        /// It cannot start with http:// or https://.
        /// It must start with a letter.
        /// It can contain letters, digits, underscores (_), and hyphens (-).
        /// It must be 2 to 126 characters in length.
        /// </remarks>
        [JsiiProperty(name: "attrGdnDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGdnDescription
        {
            get;
        }

        /// <summary>Attribute GdnId: The ID of the GDN.</summary>
        [JsiiProperty(name: "attrGdnId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGdnId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-polardb.datasource.GlobalDatabaseNetworkProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IGlobalDatabaseNetworkProps Props
        {
            get;
        }

        /// <summary>Represents a `GlobalDatabaseNetwork`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IGlobalDatabaseNetwork), fullyQualifiedName: "@alicloud/ros-cdk-polardb.datasource.IGlobalDatabaseNetwork")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IGlobalDatabaseNetwork
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Connections: The information about the connection to the cluster.</summary>
            [JsiiProperty(name: "attrConnections", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConnections
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The time at which the GDN was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbClusters: The clusters that are included in the GDN.</summary>
            [JsiiProperty(name: "attrDbClusters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbClusters
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbType: The type of the database engine.</summary>
            /// <remarks>
            /// Only MySQL is supported.
            /// </remarks>
            [JsiiProperty(name: "attrDbType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbVersion: The version of the database engine.</summary>
            /// <remarks>
            /// Only version 8.0 is supported.
            /// </remarks>
            [JsiiProperty(name: "attrDbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GdnDescription: The description of the GDN.</summary>
            /// <remarks>
            /// The description must meet the following requirements:
            /// It cannot start with http:// or https://.
            /// It must start with a letter.
            /// It can contain letters, digits, underscores (_), and hyphens (-).
            /// It must be 2 to 126 characters in length.
            /// </remarks>
            [JsiiProperty(name: "attrGdnDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGdnDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GdnId: The ID of the GDN.</summary>
            [JsiiProperty(name: "attrGdnId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGdnId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-polardb.datasource.GlobalDatabaseNetworkProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IGlobalDatabaseNetworkProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IGlobalDatabaseNetworkProps>()!;
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
