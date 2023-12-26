using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosNetworkAcl`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-networkacl
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosNetworkAclProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosNetworkAclProps")]
    public interface IRosNetworkAclProps
    {
        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the network ACL.
        /// The description must be 2 to 256 characters in length. The description must start
        /// with a letter but cannot start with http:\/\/ or https:\/\/.
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

        /// <remarks>
        /// <strong>Property</strong>: egressAclEntries: The list of egress network ACL entries.
        /// </remarks>
        [JsiiProperty(name: "egressAclEntries", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosNetworkAcl.EgressAclEntriesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EgressAclEntries
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ingressAclEntries: The list of ingress network ACL entries.
        /// </remarks>
        [JsiiProperty(name: "ingressAclEntries", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosNetworkAcl.IngressAclEntriesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IngressAclEntries
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: networkAclName: The name of the network ACL.
        /// The name must be 2 to 128 characters in length and can contain letters, digits, periods
        /// (.), underscores (_), and hyphens (-). The name must start with a letter and cannot
        /// start with http:\/\/ or https:\/\/.
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

        /// <summary>Properties for defining a `RosNetworkAcl`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-networkacl
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosNetworkAclProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosNetworkAclProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosNetworkAclProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the network ACL.
            /// The description must be 2 to 256 characters in length. The description must start
            /// with a letter but cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: egressAclEntries: The list of egress network ACL entries.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "egressAclEntries", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosNetworkAcl.EgressAclEntriesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? EgressAclEntries
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ingressAclEntries: The list of ingress network ACL entries.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ingressAclEntries", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosNetworkAcl.IngressAclEntriesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? IngressAclEntries
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: networkAclName: The name of the network ACL.
            /// The name must be 2 to 128 characters in length and can contain letters, digits, periods
            /// (.), underscores (_), and hyphens (-). The name must start with a letter and cannot
            /// start with http:\/\/ or https:\/\/.
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
