using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `ALIYUN::CMS::Contact`.</summary>
    [JsiiInterface(nativeType: typeof(IContactProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.ContactProps")]
    public interface IContactProps
    {
        /// <summary>Property channels: undefined.</summary>
        [JsiiProperty(name: "channels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-cms.RosContact.ChannelsProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Channels
        {
            get;
        }

        /// <summary>Property contactName: The name of the alarm contact.</summary>
        [JsiiProperty(name: "contactName", typeJson: "{\"primitive\":\"string\"}")]
        string ContactName
        {
            get;
        }

        /// <summary>Property describe: The description of the alert contact.</summary>
        [JsiiProperty(name: "describe", typeJson: "{\"primitive\":\"string\"}")]
        string Describe
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
            [JsiiProperty(name: "channels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-cms.RosContact.ChannelsProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Channels
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property contactName: The name of the alarm contact.</summary>
            [JsiiProperty(name: "contactName", typeJson: "{\"primitive\":\"string\"}")]
            public string ContactName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property describe: The description of the alert contact.</summary>
            [JsiiProperty(name: "describe", typeJson: "{\"primitive\":\"string\"}")]
            public string Describe
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
