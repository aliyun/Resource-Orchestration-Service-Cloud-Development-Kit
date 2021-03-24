using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CMS::ContactGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosContactGroupProps")]
    public class RosContactGroupProps : AlibabaCloud.SDK.ROS.CDK.Cms.IRosContactGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: contactGroupName: The name of the alert contact group.
        /// </remarks>
        [JsiiProperty(name: "contactGroupName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ContactGroupName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: contactNames: The name of the alert contact.
        /// </remarks>
        [JsiiProperty(name: "contactNames", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOverride: true)]
        public string[] ContactNames
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: describe: The description of the alert contact group.
        /// </remarks>
        [JsiiProperty(name: "describe", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Describe
        {
            get;
            set;
        }
    }
}
