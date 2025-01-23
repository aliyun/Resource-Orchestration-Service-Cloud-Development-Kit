using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Represents a `CommonBandwidthPackageIp`.</summary>
    [JsiiInterface(nativeType: typeof(ICommonBandwidthPackageIp), fullyQualifiedName: "@alicloud/ros-cdk-vpc.ICommonBandwidthPackageIp")]
    public interface ICommonBandwidthPackageIp : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AllocationIds: All eip allocation ids of common bandwidth package.</summary>
        [JsiiProperty(name: "attrAllocationIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAllocationIds
        {
            get;
        }

        /// <summary>Attribute IpAddresses: All eip addresses of common bandwidth package.</summary>
        [JsiiProperty(name: "attrIpAddresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpAddresses
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.CommonBandwidthPackageIpProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.ICommonBandwidthPackageIpProps Props
        {
            get;
        }

        /// <summary>Represents a `CommonBandwidthPackageIp`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICommonBandwidthPackageIp), fullyQualifiedName: "@alicloud/ros-cdk-vpc.ICommonBandwidthPackageIp")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.ICommonBandwidthPackageIp
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AllocationIds: All eip allocation ids of common bandwidth package.</summary>
            [JsiiProperty(name: "attrAllocationIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAllocationIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpAddresses: All eip addresses of common bandwidth package.</summary>
            [JsiiProperty(name: "attrIpAddresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpAddresses
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.CommonBandwidthPackageIpProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.ICommonBandwidthPackageIpProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.ICommonBandwidthPackageIpProps>()!;
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
