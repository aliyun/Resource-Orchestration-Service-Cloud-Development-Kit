using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Represents a `IpSets`.</summary>
    [JsiiInterface(nativeType: typeof(IIpSets), fullyQualifiedName: "@alicloud/ros-cdk-ga.IIpSets")]
    public interface IIpSets : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AccelerateRegionIds: The ID list of the accelerate region.</summary>
        [JsiiProperty(name: "attrAccelerateRegionIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAccelerateRegionIds
        {
            get;
        }

        /// <summary>Attribute IpSetIds: The ID list of the ip set.</summary>
        [JsiiProperty(name: "attrIpSetIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpSetIds
        {
            get;
        }

        /// <summary>Attribute IpVersions: The IP version list of the accelerate region.</summary>
        [JsiiProperty(name: "attrIpVersions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpVersions
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ga.IpSetsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ga.IIpSetsProps Props
        {
            get;
        }

        /// <summary>Represents a `IpSets`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IIpSets), fullyQualifiedName: "@alicloud/ros-cdk-ga.IIpSets")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IIpSets
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AccelerateRegionIds: The ID list of the accelerate region.</summary>
            [JsiiProperty(name: "attrAccelerateRegionIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAccelerateRegionIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpSetIds: The ID list of the ip set.</summary>
            [JsiiProperty(name: "attrIpSetIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpSetIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpVersions: The IP version list of the accelerate region.</summary>
            [JsiiProperty(name: "attrIpVersions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpVersions
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ga.IpSetsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ga.IIpSetsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ga.IIpSetsProps>()!;
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
