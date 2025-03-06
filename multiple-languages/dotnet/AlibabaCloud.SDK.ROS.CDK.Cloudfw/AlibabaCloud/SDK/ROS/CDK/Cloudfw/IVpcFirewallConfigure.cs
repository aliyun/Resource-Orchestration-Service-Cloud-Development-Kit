using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    /// <summary>Represents a `VpcFirewallConfigure`.</summary>
    [JsiiInterface(nativeType: typeof(IVpcFirewallConfigure), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.IVpcFirewallConfigure")]
    public interface IVpcFirewallConfigure : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute VpcFirewallId: The instance ID of the VPC firewall.</summary>
        [JsiiProperty(name: "attrVpcFirewallId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcFirewallId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cloudfw.VpcFirewallConfigureProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cloudfw.IVpcFirewallConfigureProps Props
        {
            get;
        }

        /// <summary>Represents a `VpcFirewallConfigure`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVpcFirewallConfigure), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.IVpcFirewallConfigure")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudfw.IVpcFirewallConfigure
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute VpcFirewallId: The instance ID of the VPC firewall.</summary>
            [JsiiProperty(name: "attrVpcFirewallId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcFirewallId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cloudfw.VpcFirewallConfigureProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cloudfw.IVpcFirewallConfigureProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cloudfw.IVpcFirewallConfigureProps>()!;
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
