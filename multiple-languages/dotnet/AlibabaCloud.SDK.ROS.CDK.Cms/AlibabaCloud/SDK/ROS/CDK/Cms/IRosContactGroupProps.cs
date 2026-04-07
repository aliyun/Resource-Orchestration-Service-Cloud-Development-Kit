using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `RosContactGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-contactgroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosContactGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosContactGroupProps")]
    public interface IRosContactGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: contactGroupName: The name of the alert contact group.
        /// </remarks>
        [JsiiProperty(name: "contactGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ContactGroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: contactNames: The name of the alert contact.
        /// </remarks>
        [JsiiProperty(name: "contactNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object ContactNames
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: describe: The description of the alert contact group.
        /// </remarks>
        [JsiiProperty(name: "describe", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Describe
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: enableSubscribed: Whether to enable the subscription feature.
        /// </remarks>
        [JsiiProperty(name: "enableSubscribed", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableSubscribed
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosContactGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-contactgroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosContactGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosContactGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IRosContactGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: contactGroupName: The name of the alert contact group.
            /// </remarks>
            [JsiiProperty(name: "contactGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ContactGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: contactNames: The name of the alert contact.
            /// </remarks>
            [JsiiProperty(name: "contactNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object ContactNames
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: describe: The description of the alert contact group.
            /// </remarks>
            [JsiiProperty(name: "describe", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Describe
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: enableSubscribed: Whether to enable the subscription feature.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableSubscribed", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableSubscribed
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
