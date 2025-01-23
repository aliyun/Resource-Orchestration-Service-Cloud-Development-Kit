using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource
{
    /// <summary>Represents a `GlobalDatabaseNetworks`.</summary>
    [JsiiInterface(nativeType: typeof(IGlobalDatabaseNetworks), fullyQualifiedName: "@alicloud/ros-cdk-polardb.datasource.IGlobalDatabaseNetworks")]
    public interface IGlobalDatabaseNetworks : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute GdnIds: The list of gdn IDs.</summary>
        [JsiiProperty(name: "attrGdnIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGdnIds
        {
            get;
        }

        /// <summary>Attribute GlobalDatabaseNetworks: The list of global database networks.</summary>
        [JsiiProperty(name: "attrGlobalDatabaseNetworks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGlobalDatabaseNetworks
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-polardb.datasource.GlobalDatabaseNetworksProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IGlobalDatabaseNetworksProps Props
        {
            get;
        }

        /// <summary>Represents a `GlobalDatabaseNetworks`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IGlobalDatabaseNetworks), fullyQualifiedName: "@alicloud/ros-cdk-polardb.datasource.IGlobalDatabaseNetworks")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IGlobalDatabaseNetworks
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute GdnIds: The list of gdn IDs.</summary>
            [JsiiProperty(name: "attrGdnIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGdnIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GlobalDatabaseNetworks: The list of global database networks.</summary>
            [JsiiProperty(name: "attrGlobalDatabaseNetworks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGlobalDatabaseNetworks
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-polardb.datasource.GlobalDatabaseNetworksProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IGlobalDatabaseNetworksProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IGlobalDatabaseNetworksProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
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
