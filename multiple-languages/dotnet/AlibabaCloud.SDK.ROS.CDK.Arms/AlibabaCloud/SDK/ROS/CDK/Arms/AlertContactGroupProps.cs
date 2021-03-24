using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ARMS::AlertContactGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-arms.AlertContactGroupProps")]
    public class AlertContactGroupProps : AlibabaCloud.SDK.ROS.CDK.Arms.IAlertContactGroupProps
    {
        /// <summary>Property contactGroupName: The name of the alert contact group that you want to create.</summary>
        [JsiiProperty(name: "contactGroupName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ContactGroupName
        {
            get;
            set;
        }

        /// <summary>Property contactIds: The list of alert contact ID.</summary>
        [JsiiProperty(name: "contactIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"number\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ContactIds
        {
            get;
            set;
        }

        /// <summary>Property proxyUserId: Internal parameters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "proxyUserId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ProxyUserId
        {
            get;
            set;
        }

        /// <summary>Property regionId: Region ID.</summary>
        /// <remarks>
        /// Default to region of stack.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RegionId
        {
            get;
            set;
        }
    }
}
