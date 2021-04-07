using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CMS::ContactGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.ContactGroupProps")]
    public class ContactGroupProps : AlibabaCloud.SDK.ROS.CDK.Cms.IContactGroupProps
    {
        /// <summary>Property contactGroupName: The name of the alert contact group.</summary>
        [JsiiProperty(name: "contactGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ContactGroupName
        {
            get;
            set;
        }

        /// <summary>Property contactNames: The name of the alert contact.</summary>
        [JsiiProperty(name: "contactNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object ContactNames
        {
            get;
            set;
        }

        /// <summary>Property describe: The description of the alert contact group.</summary>
        [JsiiProperty(name: "describe", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Describe
        {
            get;
            set;
        }
    }
}
