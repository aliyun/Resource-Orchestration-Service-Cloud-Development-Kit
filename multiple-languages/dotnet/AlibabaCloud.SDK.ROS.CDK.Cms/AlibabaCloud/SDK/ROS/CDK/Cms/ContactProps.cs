using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CMS::Contact`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.ContactProps")]
    public class ContactProps : AlibabaCloud.SDK.ROS.CDK.Cms.IContactProps
    {
        /// <summary>Property channels: undefined.</summary>
        [JsiiProperty(name: "channels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-cms.RosContact.ChannelsProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Channels
        {
            get;
            set;
        }

        /// <summary>Property contactName: The name of the alarm contact.</summary>
        [JsiiProperty(name: "contactName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ContactName
        {
            get;
            set;
        }

        /// <summary>Property describe: The description of the alert contact.</summary>
        [JsiiProperty(name: "describe", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Describe
        {
            get;
            set;
        }
    }
}
