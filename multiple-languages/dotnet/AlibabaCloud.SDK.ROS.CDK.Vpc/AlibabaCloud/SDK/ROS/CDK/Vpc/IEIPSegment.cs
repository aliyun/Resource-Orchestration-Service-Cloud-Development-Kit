using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Represents a `EIPSegment`.</summary>
    [JsiiInterface(nativeType: typeof(IEIPSegment), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IEIPSegment")]
    public interface IEIPSegment : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute EipAddresses: List of EIP addresses.</summary>
        /// <remarks>
        /// like [{"AllocationId": "eip-xxx", "IpAddress": "xx.xx.xx.xx"}]
        /// </remarks>
        [JsiiProperty(name: "attrEipAddresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEipAddresses
        {
            get;
        }

        /// <summary>Attribute EipSegmentInstanceId: The ID of the contiguous EIP group.</summary>
        [JsiiProperty(name: "attrEipSegmentInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEipSegmentInstanceId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.EIPSegmentProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.IEIPSegmentProps Props
        {
            get;
        }

        /// <summary>Represents a `EIPSegment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IEIPSegment), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IEIPSegment")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IEIPSegment
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute EipAddresses: List of EIP addresses.</summary>
            /// <remarks>
            /// like [{"AllocationId": "eip-xxx", "IpAddress": "xx.xx.xx.xx"}]
            /// </remarks>
            [JsiiProperty(name: "attrEipAddresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEipAddresses
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EipSegmentInstanceId: The ID of the contiguous EIP group.</summary>
            [JsiiProperty(name: "attrEipSegmentInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEipSegmentInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.EIPSegmentProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.IEIPSegmentProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.IEIPSegmentProps>()!;
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
