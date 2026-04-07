using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rocketmq5
{
    /// <summary>Properties for defining a `RosAcl`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-acl
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAclProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq5.RosAclProps")]
    public interface IRosAclProps
    {
        /// <remarks>
        /// <strong>Property</strong>: actions: The type of operation authorized.
        /// </remarks>
        [JsiiProperty(name: "actions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Actions
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: decision: The decision result of the authorization. Valid values:
        /// * Deny: Access is denied.
        /// * Allow: Allow access.
        /// </remarks>
        [JsiiProperty(name: "decision", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Decision
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the RocketMQ instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceName: The name of the resource on which you want to grant permissions.
        /// </remarks>
        [JsiiProperty(name: "resourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResourceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceType: The type of the resource on which you want to grant permissions. Valid values:
        /// * Group: consumer Group.
        /// * Topic: Topic.
        /// </remarks>
        [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResourceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: username: The username of the account.
        /// </remarks>
        [JsiiProperty(name: "username", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Username
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipWhitelists: The IP addresses in the whitelist.
        /// </remarks>
        [JsiiProperty(name: "ipWhitelists", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpWhitelists
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAcl`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-acl
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAclProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq5.RosAclProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rocketmq5.IRosAclProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: actions: The type of operation authorized.
            /// </remarks>
            [JsiiProperty(name: "actions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Actions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: decision: The decision result of the authorization. Valid values:
            /// * Deny: Access is denied.
            /// * Allow: Allow access.
            /// </remarks>
            [JsiiProperty(name: "decision", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Decision
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the RocketMQ instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceName: The name of the resource on which you want to grant permissions.
            /// </remarks>
            [JsiiProperty(name: "resourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceType: The type of the resource on which you want to grant permissions. Valid values:
            /// * Group: consumer Group.
            /// * Topic: Topic.
            /// </remarks>
            [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: username: The username of the account.
            /// </remarks>
            [JsiiProperty(name: "username", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Username
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipWhitelists: The IP addresses in the whitelist.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipWhitelists", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? IpWhitelists
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
