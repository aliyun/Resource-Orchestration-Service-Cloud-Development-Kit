using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `GlobalSecurityIPGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globalsecurityipgroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IGlobalSecurityIPGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.GlobalSecurityIPGroupProps")]
    public interface IGlobalSecurityIPGroupProps
    {
        /// <summary>Property gIpList: The IP addresses in the whitelist template.</summary>
        /// <remarks>
        /// You can create up to 1,000 IP addresses or CIDR blocks for all IP whitelists.
        /// </remarks>
        [JsiiProperty(name: "gIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object GIpList
        {
            get;
        }

        /// <summary>Property globalIgName: The name of the IP whitelist template.</summary>
        /// <remarks>
        /// The name must meet the following requirements:
        /// The name can contain lowercase letters, digits, and underscores (_).
        /// The name must start with a letter and end with a letter or digit.
        /// The name must be 2 to 120 characters in length.
        /// </remarks>
        [JsiiProperty(name: "globalIgName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GlobalIgName
        {
            get;
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `GlobalSecurityIPGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globalsecurityipgroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IGlobalSecurityIPGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.GlobalSecurityIPGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IGlobalSecurityIPGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property gIpList: The IP addresses in the whitelist template.</summary>
            /// <remarks>
            /// You can create up to 1,000 IP addresses or CIDR blocks for all IP whitelists.
            /// </remarks>
            [JsiiProperty(name: "gIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object GIpList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property globalIgName: The name of the IP whitelist template.</summary>
            /// <remarks>
            /// The name must meet the following requirements:
            /// The name can contain lowercase letters, digits, and underscores (_).
            /// The name must start with a letter and end with a letter or digit.
            /// The name must be 2 to 120 characters in length.
            /// </remarks>
            [JsiiProperty(name: "globalIgName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GlobalIgName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
