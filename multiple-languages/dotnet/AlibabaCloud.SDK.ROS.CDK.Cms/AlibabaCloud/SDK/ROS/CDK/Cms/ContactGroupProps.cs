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
        [JsiiProperty(name: "contactGroupName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ContactGroupName
        {
            get;
            set;
        }

        /// <summary>Property contactNames: The name of the alert contact.</summary>
        [JsiiProperty(name: "contactNames", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOverride: true)]
        public string[] ContactNames
        {
            get;
            set;
        }

        /// <summary>Property describe: The description of the alert contact group.</summary>
        [JsiiProperty(name: "describe", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Describe
        {
            get;
            set;
        }
    }
}
