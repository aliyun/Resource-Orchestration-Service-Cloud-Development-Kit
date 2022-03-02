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
        [JsiiProperty(name: "contactGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ContactGroupName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: contactNames: The name of the alert contact.
        /// </remarks>
        [JsiiProperty(name: "contactNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        public object ContactNames
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: describe: The description of the alert contact group.
        /// </remarks>
        [JsiiProperty(name: "describe", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Describe
        {
            get;
            set;
        }
    }
}
