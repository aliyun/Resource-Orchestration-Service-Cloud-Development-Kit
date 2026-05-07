using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Represents a `IpamPoolAllocation`.</summary>
    [JsiiInterface(nativeType: typeof(IIpamPoolAllocation), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IIpamPoolAllocation")]
    public interface IIpamPoolAllocation : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Cidr: The allocated address segment.</summary>
        [JsiiProperty(name: "attrCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCidr
        {
            get;
        }

        /// <summary>Attribute CreateTime: Instance creation time.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute IpamPoolAllocationDescription: The description of the ipam pool alloctaion.</summary>
        [JsiiProperty(name: "attrIpamPoolAllocationDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpamPoolAllocationDescription
        {
            get;
        }

        /// <summary>Attribute IpamPoolAllocationId: The instance ID of the ipam pool allocation.</summary>
        [JsiiProperty(name: "attrIpamPoolAllocationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpamPoolAllocationId
        {
            get;
        }

        /// <summary>Attribute IpamPoolAllocationName: The name of the ipam pool allocation.</summary>
        [JsiiProperty(name: "attrIpamPoolAllocationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpamPoolAllocationName
        {
            get;
        }

        /// <summary>Attribute IpamPoolId: The ID of the IPAM Pool.</summary>
        [JsiiProperty(name: "attrIpamPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpamPoolId
        {
            get;
        }

        /// <summary>Attribute ResourceOwnerId: The ID of the Alibaba Cloud account (primary account) to which the resource belongs.</summary>
        [JsiiProperty(name: "attrResourceOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceOwnerId
        {
            get;
        }

        /// <summary>Attribute ResourceType: The type of resource.</summary>
        [JsiiProperty(name: "attrResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceType
        {
            get;
        }

        /// <summary>Attribute SourceCidr: The source address segment.</summary>
        [JsiiProperty(name: "attrSourceCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourceCidr
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.IpamPoolAllocationProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.IIpamPoolAllocationProps Props
        {
            get;
        }

        /// <summary>Represents a `IpamPoolAllocation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IIpamPoolAllocation), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IIpamPoolAllocation")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IIpamPoolAllocation
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Cidr: The allocated address segment.</summary>
            [JsiiProperty(name: "attrCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCidr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: Instance creation time.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpamPoolAllocationDescription: The description of the ipam pool alloctaion.</summary>
            [JsiiProperty(name: "attrIpamPoolAllocationDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpamPoolAllocationDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpamPoolAllocationId: The instance ID of the ipam pool allocation.</summary>
            [JsiiProperty(name: "attrIpamPoolAllocationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpamPoolAllocationId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpamPoolAllocationName: The name of the ipam pool allocation.</summary>
            [JsiiProperty(name: "attrIpamPoolAllocationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpamPoolAllocationName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpamPoolId: The ID of the IPAM Pool.</summary>
            [JsiiProperty(name: "attrIpamPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpamPoolId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceOwnerId: The ID of the Alibaba Cloud account (primary account) to which the resource belongs.</summary>
            [JsiiProperty(name: "attrResourceOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceOwnerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceType: The type of resource.</summary>
            [JsiiProperty(name: "attrResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourceCidr: The source address segment.</summary>
            [JsiiProperty(name: "attrSourceCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourceCidr
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.IpamPoolAllocationProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.IIpamPoolAllocationProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.IIpamPoolAllocationProps>()!;
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
