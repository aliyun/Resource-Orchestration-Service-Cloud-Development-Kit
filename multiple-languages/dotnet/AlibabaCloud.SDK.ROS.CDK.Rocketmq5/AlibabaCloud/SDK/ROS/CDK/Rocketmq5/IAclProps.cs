using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rocketmq5
{
    /// <summary>Properties for defining a `Acl`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-acl
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAclProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq5.AclProps")]
    public interface IAclProps
    {
        /// <summary>Property actions: The type of operation authorized.</summary>
        [JsiiProperty(name: "actions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Actions
        {
            get;
        }

        /// <summary>Property decision: The decision result of the authorization.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Deny: Access is denied.</description>
        /// <description>Allow: Allow access.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "decision", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Decision
        {
            get;
        }

        /// <summary>Property instanceId: The ID of the RocketMQ instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property resourceName: The name of the resource on which you want to grant permissions.</summary>
        [JsiiProperty(name: "resourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResourceName
        {
            get;
        }

        /// <summary>Property resourceType: The type of the resource on which you want to grant permissions.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Group: consumer Group.</description>
        /// <description>Topic: Topic.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResourceType
        {
            get;
        }

        /// <summary>Property username: The username of the account.</summary>
        [JsiiProperty(name: "username", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Username
        {
            get;
        }

        /// <summary>Property ipWhitelists: The IP addresses in the whitelist.</summary>
        [JsiiProperty(name: "ipWhitelists", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpWhitelists
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Acl`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-acl
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAclProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq5.AclProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rocketmq5.IAclProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property actions: The type of operation authorized.</summary>
            [JsiiProperty(name: "actions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Actions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property decision: The decision result of the authorization.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Deny: Access is denied.</description>
            /// <description>Allow: Allow access.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "decision", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Decision
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: The ID of the RocketMQ instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property resourceName: The name of the resource on which you want to grant permissions.</summary>
            [JsiiProperty(name: "resourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property resourceType: The type of the resource on which you want to grant permissions.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Group: consumer Group.</description>
            /// <description>Topic: Topic.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property username: The username of the account.</summary>
            [JsiiProperty(name: "username", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Username
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ipWhitelists: The IP addresses in the whitelist.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipWhitelists", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? IpWhitelists
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
