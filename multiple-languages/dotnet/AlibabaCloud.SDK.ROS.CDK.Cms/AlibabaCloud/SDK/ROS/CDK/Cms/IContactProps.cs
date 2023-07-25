using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `ALIYUN::CMS::Contact`.</summary>
    [JsiiInterface(nativeType: typeof(IContactProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.ContactProps")]
    public interface IContactProps
    {
        /// <summary>Property channels: undefined.</summary>
        [JsiiProperty(name: "channels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosContact.ChannelsProperty\"}]}}")]
        object Channels
        {
            get;
        }

        /// <summary>Property contactName: The name of the alarm contact.</summary>
        [JsiiProperty(name: "contactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ContactName
        {
            get;
        }

        /// <summary>Property describe: The description of the alert contact.</summary>
        [JsiiProperty(name: "describe", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Describe
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::CMS::Contact`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IContactProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.ContactProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IContactProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property channels: undefined.</summary>
            [JsiiProperty(name: "channels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosContact.ChannelsProperty\"}]}}")]
            public object Channels
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property contactName: The name of the alarm contact.</summary>
            [JsiiProperty(name: "contactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ContactName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property describe: The description of the alert contact.</summary>
            [JsiiProperty(name: "describe", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Describe
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
