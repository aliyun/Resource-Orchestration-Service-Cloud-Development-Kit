using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `ALIYUN::CMS::Contact`.</summary>
    [JsiiInterface(nativeType: typeof(IRosContactProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosContactProps")]
    public interface IRosContactProps
    {
        /// <remarks>
        /// <strong>Property</strong>: channels: undefined
        /// </remarks>
        [JsiiProperty(name: "channels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-cms.RosContact.ChannelsProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Channels
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: contactName: The name of the alarm contact.
        /// </remarks>
        [JsiiProperty(name: "contactName", typeJson: "{\"primitive\":\"string\"}")]
        string ContactName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: describe: The description of the alert contact.
        /// </remarks>
        [JsiiProperty(name: "describe", typeJson: "{\"primitive\":\"string\"}")]
        string Describe
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::CMS::Contact`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosContactProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosContactProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IRosContactProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: channels: undefined
            /// </remarks>
            [JsiiProperty(name: "channels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-cms.RosContact.ChannelsProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Channels
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: contactName: The name of the alarm contact.
            /// </remarks>
            [JsiiProperty(name: "contactName", typeJson: "{\"primitive\":\"string\"}")]
            public string ContactName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: describe: The description of the alert contact.
            /// </remarks>
            [JsiiProperty(name: "describe", typeJson: "{\"primitive\":\"string\"}")]
            public string Describe
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
