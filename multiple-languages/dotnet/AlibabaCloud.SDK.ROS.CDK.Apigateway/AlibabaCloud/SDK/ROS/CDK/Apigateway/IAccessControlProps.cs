using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `AccessControl`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-accesscontrol
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAccessControlProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.AccessControlProps")]
    public interface IAccessControlProps
    {
        /// <summary>Property accessControlListName: The name of the ACL.</summary>
        /// <remarks>
        /// The name must be 1 to 30 characters in length, and can contain letters, digits, periods (.), hyphens (-), forward slashes (/), and underscores (_). The name must be unique within the region.
        /// </remarks>
        [JsiiProperty(name: "accessControlListName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessControlListName
        {
            get;
        }

        /// <summary>Property aclEntrys: Information list of access control policies.</summary>
        /// <remarks>
        /// You can add at most 50 IP addresses or CIDR blocks to an ACL in each call. If the IP address or CIDR block that you want to add to an ACL already exists, the IP address or CIDR block is not added. The entries that you add must be CIDR blocks.
        /// </remarks>
        [JsiiProperty(name: "aclEntrys", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosAccessControl.AclEntrysProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AclEntrys
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property addressIpVersion: The IP version.</summary>
        /// <remarks>
        /// Valid values: ipv4 and ipv6.
        /// </remarks>
        [JsiiProperty(name: "addressIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AddressIpVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `AccessControl`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-accesscontrol
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAccessControlProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.AccessControlProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IAccessControlProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accessControlListName: The name of the ACL.</summary>
            /// <remarks>
            /// The name must be 1 to 30 characters in length, and can contain letters, digits, periods (.), hyphens (-), forward slashes (/), and underscores (_). The name must be unique within the region.
            /// </remarks>
            [JsiiProperty(name: "accessControlListName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessControlListName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property aclEntrys: Information list of access control policies.</summary>
            /// <remarks>
            /// You can add at most 50 IP addresses or CIDR blocks to an ACL in each call. If the IP address or CIDR block that you want to add to an ACL already exists, the IP address or CIDR block is not added. The entries that you add must be CIDR blocks.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "aclEntrys", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosAccessControl.AclEntrysProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AclEntrys
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property addressIpVersion: The IP version.</summary>
            /// <remarks>
            /// Valid values: ipv4 and ipv6.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "addressIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AddressIpVersion
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
