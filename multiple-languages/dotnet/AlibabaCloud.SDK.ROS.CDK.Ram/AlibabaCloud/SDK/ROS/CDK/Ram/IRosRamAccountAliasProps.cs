using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `RosRamAccountAlias`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-ramaccountalias
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosRamAccountAliasProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRamAccountAliasProps")]
    public interface IRosRamAccountAliasProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accountAlias: The alias of the Alibaba Cloud account.
        /// The alias must be 1 to 50 characters in length, and can contain lowercase letters,
        /// digits, hyphens (-), periods (.) and underscores (_).
        /// Note It cannot start or end with a hyphen (-).The default domain name cannot start or end with a
        /// hyphen (-) and cannot have two consecutive hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "accountAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountAlias
        {
            get;
        }

        /// <summary>Properties for defining a `RosRamAccountAlias`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-ramaccountalias
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosRamAccountAliasProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRamAccountAliasProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IRosRamAccountAliasProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accountAlias: The alias of the Alibaba Cloud account.
            /// The alias must be 1 to 50 characters in length, and can contain lowercase letters,
            /// digits, hyphens (-), periods (.) and underscores (_).
            /// Note It cannot start or end with a hyphen (-).The default domain name cannot start or end with a
            /// hyphen (-) and cannot have two consecutive hyphens (-).
            /// </remarks>
            [JsiiProperty(name: "accountAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountAlias
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
