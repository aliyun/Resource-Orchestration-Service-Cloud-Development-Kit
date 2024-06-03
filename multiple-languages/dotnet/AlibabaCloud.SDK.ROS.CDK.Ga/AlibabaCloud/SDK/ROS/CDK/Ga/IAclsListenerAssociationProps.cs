using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `AclsListenerAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-aclslistenerassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAclsListenerAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.AclsListenerAssociationProps")]
    public interface IAclsListenerAssociationProps
    {
        /// <summary>Property aclIds: The ID of the ACL.</summary>
        /// <remarks>
        /// You can associate up to two ACL IDs.
        /// </remarks>
        [JsiiProperty(name: "aclIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object AclIds
        {
            get;
        }

        /// <summary>Property aclType: The type of ACL.</summary>
        /// <remarks>
        /// Valid values:white: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. After you configure a whitelist for a listener, only requests from the IP addresses that are added to the whitelist are forwarded by the listener. If the whitelist is enabled but no IP addresses are added to it, the listener does not forward requests.
        /// black: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are denied. Blacklists apply to scenarios in which you want to deny access from specific IP addresses to an application. If the blacklist is enabled but no IP addresses are added to it, the listener forwards all requests.
        /// </remarks>
        [JsiiProperty(name: "aclType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AclType
        {
            get;
        }

        /// <summary>Property listenerId: The ID of the listener.</summary>
        [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerId
        {
            get;
        }

        /// <summary>Properties for defining a `AclsListenerAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-aclslistenerassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAclsListenerAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.AclsListenerAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IAclsListenerAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property aclIds: The ID of the ACL.</summary>
            /// <remarks>
            /// You can associate up to two ACL IDs.
            /// </remarks>
            [JsiiProperty(name: "aclIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object AclIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property aclType: The type of ACL.</summary>
            /// <remarks>
            /// Valid values:white: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. After you configure a whitelist for a listener, only requests from the IP addresses that are added to the whitelist are forwarded by the listener. If the whitelist is enabled but no IP addresses are added to it, the listener does not forward requests.
            /// black: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are denied. Blacklists apply to scenarios in which you want to deny access from specific IP addresses to an application. If the blacklist is enabled but no IP addresses are added to it, the listener forwards all requests.
            /// </remarks>
            [JsiiProperty(name: "aclType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AclType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property listenerId: The ID of the listener.</summary>
            [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
