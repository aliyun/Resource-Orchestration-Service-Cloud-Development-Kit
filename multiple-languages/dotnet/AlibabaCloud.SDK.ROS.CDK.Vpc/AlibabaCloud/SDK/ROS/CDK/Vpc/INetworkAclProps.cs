using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::NetworkAcl`.</summary>
    [JsiiInterface(nativeType: typeof(INetworkAclProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.NetworkAclProps")]
    public interface INetworkAclProps
    {
        /// <summary>Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property description: The description of the network ACL.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length. The description must start
        /// with a letter but cannot start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property egressAclEntries: The list of egress network ACL entries.</summary>
        [JsiiProperty(name: "egressAclEntries", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosNetworkAcl.EgressAclEntriesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EgressAclEntries
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ingressAclEntries: The list of ingress network ACL entries.</summary>
        [JsiiProperty(name: "ingressAclEntries", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosNetworkAcl.IngressAclEntriesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IngressAclEntries
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkAclName: The name of the network ACL.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length and can contain letters, digits, periods
        /// (.), underscores (_), and hyphens (-). The name must start with a letter and cannot
        /// start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "networkAclName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkAclName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::NetworkAcl`.</summary>
        [JsiiTypeProxy(nativeType: typeof(INetworkAclProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.NetworkAclProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.INetworkAclProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the network ACL.</summary>
            /// <remarks>
            /// The description must be 2 to 256 characters in length. The description must start
            /// with a letter but cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property egressAclEntries: The list of egress network ACL entries.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "egressAclEntries", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosNetworkAcl.EgressAclEntriesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? EgressAclEntries
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ingressAclEntries: The list of ingress network ACL entries.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ingressAclEntries", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosNetworkAcl.IngressAclEntriesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? IngressAclEntries
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkAclName: The name of the network ACL.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length and can contain letters, digits, periods
            /// (.), underscores (_), and hyphens (-). The name must start with a letter and cannot
            /// start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkAclName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkAclName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
