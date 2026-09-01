using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `NetworkAcl`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-networkacl
    /// </remarks>
    [JsiiInterface(nativeType: typeof(INetworkAclProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.NetworkAclProps")]
    public interface INetworkAclProps
    {
        /// <summary>Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.</summary>
        /// <remarks>
        /// If the VPC contains Elastic Compute Service (ECS) instances of the following
        /// instance families, you must upgrade the ECS instances or release the ECS
        /// instances. Otherwise, you cannot create a network ACL for the VPC.
        /// ecs.c1, ecs.c2, ecs.c4, ecs.c5, ecs.ce4, ecs.cm4, ecs.d1, ecs.e3, ecs.e4,
        /// ecs.ga1, ecs.gn4, ecs.gn5, ecs.i1, ecs.m1, ecs.m2, ecs.mn4, ecs.n1, ecs.n2,
        /// ecs.n4, ecs.s1, ecs.s2, ecs.s3, ecs.se1, ecs.sn1, ecs.sn2, ecs.t1, and ecs.xn4.
        ///
        ///     If the VPC contains an ECS instance that does not support network ACLs,
        ///     upgrade the ECS instance.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property description: The description of the network ACL.</summary>
        /// <remarks>
        /// The description must be 1 to 256 characters in length, and cannot start with
        /// <c>http:\/\/</c> or <c>https:\/\/</c>.
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
        /// The name must be 1 to 128 characters in length, and cannot start with <c>http:\/\/</c>
        /// or <c>https:\/\/</c>.
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

        /// <summary>Properties for defining a `NetworkAcl`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-networkacl
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(INetworkAclProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.NetworkAclProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.INetworkAclProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.</summary>
            /// <remarks>
            /// If the VPC contains Elastic Compute Service (ECS) instances of the following
            /// instance families, you must upgrade the ECS instances or release the ECS
            /// instances. Otherwise, you cannot create a network ACL for the VPC.
            /// ecs.c1, ecs.c2, ecs.c4, ecs.c5, ecs.ce4, ecs.cm4, ecs.d1, ecs.e3, ecs.e4,
            /// ecs.ga1, ecs.gn4, ecs.gn5, ecs.i1, ecs.m1, ecs.m2, ecs.mn4, ecs.n1, ecs.n2,
            /// ecs.n4, ecs.s1, ecs.s2, ecs.s3, ecs.se1, ecs.sn1, ecs.sn2, ecs.t1, and ecs.xn4.
            ///
            ///     If the VPC contains an ECS instance that does not support network ACLs,
            ///     upgrade the ECS instance.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the network ACL.</summary>
            /// <remarks>
            /// The description must be 1 to 256 characters in length, and cannot start with
            /// <c>http:\/\/</c> or <c>https:\/\/</c>.
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
            /// The name must be 1 to 128 characters in length, and cannot start with <c>http:\/\/</c>
            /// or <c>https:\/\/</c>.
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
