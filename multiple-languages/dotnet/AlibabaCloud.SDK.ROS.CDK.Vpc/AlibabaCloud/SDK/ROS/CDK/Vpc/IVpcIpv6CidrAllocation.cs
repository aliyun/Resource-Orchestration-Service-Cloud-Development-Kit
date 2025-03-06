using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Represents a `VpcIpv6CidrAllocation`.</summary>
    [JsiiInterface(nativeType: typeof(IVpcIpv6CidrAllocation), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IVpcIpv6CidrAllocation")]
    public interface IVpcIpv6CidrAllocation : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Ipv6CidrBlock: The IPv6 CIDR block that is reserved.</summary>
        [JsiiProperty(name: "attrIpv6CidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpv6CidrBlock
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.VpcIpv6CidrAllocationProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.IVpcIpv6CidrAllocationProps Props
        {
            get;
        }

        /// <summary>Represents a `VpcIpv6CidrAllocation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVpcIpv6CidrAllocation), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IVpcIpv6CidrAllocation")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IVpcIpv6CidrAllocation
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Ipv6CidrBlock: The IPv6 CIDR block that is reserved.</summary>
            [JsiiProperty(name: "attrIpv6CidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpv6CidrBlock
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.VpcIpv6CidrAllocationProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.IVpcIpv6CidrAllocationProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.IVpcIpv6CidrAllocationProps>()!;
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
