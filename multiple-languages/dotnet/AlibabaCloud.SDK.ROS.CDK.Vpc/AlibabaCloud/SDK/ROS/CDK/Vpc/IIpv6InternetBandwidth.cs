using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Represents a `Ipv6InternetBandwidth`.</summary>
    [JsiiInterface(nativeType: typeof(IIpv6InternetBandwidth), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IIpv6InternetBandwidth")]
    public interface IIpv6InternetBandwidth : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute InternetBandwidthId: Purchase of public network bandwidth.</summary>
        [JsiiProperty(name: "attrInternetBandwidthId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetBandwidthId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.Ipv6InternetBandwidthProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.IIpv6InternetBandwidthProps Props
        {
            get;
        }

        /// <summary>Represents a `Ipv6InternetBandwidth`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IIpv6InternetBandwidth), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IIpv6InternetBandwidth")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IIpv6InternetBandwidth
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute InternetBandwidthId: Purchase of public network bandwidth.</summary>
            [JsiiProperty(name: "attrInternetBandwidthId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetBandwidthId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.Ipv6InternetBandwidthProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.IIpv6InternetBandwidthProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.IIpv6InternetBandwidthProps>()!;
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
