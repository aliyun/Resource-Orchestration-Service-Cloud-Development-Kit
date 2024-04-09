using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ens
{
    /// <summary>Properties for defining a `NetworkAcl`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-networkacl
    /// </remarks>
    [JsiiInterface(nativeType: typeof(INetworkAclProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.NetworkAclProps")]
    public interface INetworkAclProps
    {
        /// <summary>Property aclEntries: The entry of Network ACL.</summary>
        [JsiiProperty(name: "aclEntries", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ens.RosNetworkAcl.AclEntriesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AclEntries
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the network ACL.</summary>
        /// <remarks>
        /// The description must be 1 to 256 characters in length and cannot start with http:// or https://.
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

        /// <summary>Property networkAclName: Enter a name for the network ACL.</summary>
        /// <remarks>
        /// The name must be 1 to 128 characters in length and cannot start with http:// or https://.
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
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-networkacl
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(INetworkAclProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.NetworkAclProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ens.INetworkAclProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property aclEntries: The entry of Network ACL.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "aclEntries", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ens.RosNetworkAcl.AclEntriesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AclEntries
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the network ACL.</summary>
            /// <remarks>
            /// The description must be 1 to 256 characters in length and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkAclName: Enter a name for the network ACL.</summary>
            /// <remarks>
            /// The name must be 1 to 128 characters in length and cannot start with http:// or https://.
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
