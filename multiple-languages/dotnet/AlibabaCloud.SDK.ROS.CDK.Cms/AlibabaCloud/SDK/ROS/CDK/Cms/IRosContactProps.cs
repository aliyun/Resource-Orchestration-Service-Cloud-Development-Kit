using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `RosContact`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-contact
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosContactProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosContactProps")]
    public interface IRosContactProps
    {
        /// <remarks>
        /// <strong>Property</strong>: channels: undefined
        /// </remarks>
        [JsiiProperty(name: "channels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosContact.ChannelsProperty\"}]}}")]
        object Channels
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: contactName: The name of the alarm contact.
        /// </remarks>
        [JsiiProperty(name: "contactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ContactName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: describe: The description of the alert contact.
        /// </remarks>
        [JsiiProperty(name: "describe", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Describe
        {
            get;
        }

        /// <summary>Properties for defining a `RosContact`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-contact
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosContactProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosContactProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IRosContactProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: channels: undefined
            /// </remarks>
            [JsiiProperty(name: "channels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosContact.ChannelsProperty\"}]}}")]
            public object Channels
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: contactName: The name of the alarm contact.
            /// </remarks>
            [JsiiProperty(name: "contactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ContactName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: describe: The description of the alert contact.
            /// </remarks>
            [JsiiProperty(name: "describe", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Describe
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
