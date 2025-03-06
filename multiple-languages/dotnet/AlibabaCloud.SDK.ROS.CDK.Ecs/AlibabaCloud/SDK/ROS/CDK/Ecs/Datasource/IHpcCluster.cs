using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Represents a `HpcCluster`.</summary>
    [JsiiInterface(nativeType: typeof(IHpcCluster), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.IHpcCluster")]
    public interface IHpcCluster : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Description: The description of the HPC cluster.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute HpcClusterId: The ID of cluster.</summary>
        [JsiiProperty(name: "attrHpcClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHpcClusterId
        {
            get;
        }

        /// <summary>Attribute HpcClusterName: The name of the HPC cluster.</summary>
        [JsiiProperty(name: "attrHpcClusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHpcClusterName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.HpcClusterProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IHpcClusterProps Props
        {
            get;
        }

        /// <summary>Represents a `HpcCluster`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IHpcCluster), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.IHpcCluster")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IHpcCluster
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Description: The description of the HPC cluster.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HpcClusterId: The ID of cluster.</summary>
            [JsiiProperty(name: "attrHpcClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHpcClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HpcClusterName: The name of the HPC cluster.</summary>
            [JsiiProperty(name: "attrHpcClusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHpcClusterName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.HpcClusterProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IHpcClusterProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IHpcClusterProps>()!;
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
