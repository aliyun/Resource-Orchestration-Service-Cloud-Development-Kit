using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `RosAlertContactGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontactgroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAlertContactGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RosAlertContactGroupProps")]
    public interface IRosAlertContactGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: contactGroupName: The name of the alert contact group that you want to create.
        /// </remarks>
        [JsiiProperty(name: "contactGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ContactGroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: contactIds: The list of alert contact ID.
        /// </remarks>
        [JsiiProperty(name: "contactIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object ContactIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: proxyUserId: Internal parameters
        /// </remarks>
        [JsiiProperty(name: "proxyUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProxyUserId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: regionId: Region ID. Default to region of stack.
        /// </remarks>
        [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAlertContactGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontactgroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAlertContactGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RosAlertContactGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IRosAlertContactGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: contactGroupName: The name of the alert contact group that you want to create.
            /// </remarks>
            [JsiiProperty(name: "contactGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ContactGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: contactIds: The list of alert contact ID.
            /// </remarks>
            [JsiiProperty(name: "contactIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object ContactIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: proxyUserId: Internal parameters
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proxyUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProxyUserId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: regionId: Region ID. Default to region of stack.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RegionId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
