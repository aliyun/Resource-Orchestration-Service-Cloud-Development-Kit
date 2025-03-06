using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Represents a `DedicatedHosts`.</summary>
    [JsiiInterface(nativeType: typeof(IDedicatedHosts), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.IDedicatedHosts")]
    public interface IDedicatedHosts : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DedicatedHostIds: The list of dedicated host ids.</summary>
        [JsiiProperty(name: "attrDedicatedHostIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDedicatedHostIds
        {
            get;
        }

        /// <summary>Attribute DedicatedHosts: The list of dedicated hosts.</summary>
        [JsiiProperty(name: "attrDedicatedHosts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDedicatedHosts
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.DedicatedHostsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDedicatedHostsProps Props
        {
            get;
        }

        /// <summary>Represents a `DedicatedHosts`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDedicatedHosts), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.IDedicatedHosts")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDedicatedHosts
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DedicatedHostIds: The list of dedicated host ids.</summary>
            [JsiiProperty(name: "attrDedicatedHostIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDedicatedHostIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DedicatedHosts: The list of dedicated hosts.</summary>
            [JsiiProperty(name: "attrDedicatedHosts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDedicatedHosts
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.DedicatedHostsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDedicatedHostsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDedicatedHostsProps>()!;
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
