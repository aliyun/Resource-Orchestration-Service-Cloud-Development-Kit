using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAG::GrantCcnToCen`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sag.RosGrantCcnToCenProps")]
    public class RosGrantCcnToCenProps : AlibabaCloud.SDK.ROS.CDK.Sag.IRosGrantCcnToCenProps
    {
        /// <remarks>
        /// <strong>Property</strong>: ccnInstanceId: The ID of the CCN instance.
        /// </remarks>
        [JsiiProperty(name: "ccnInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string CcnInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: cenInstanceId: The ID of the CEN instance.
        /// </remarks>
        [JsiiProperty(name: "cenInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string CenInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: cenUid: The ID of the account to which the CEN instance belongs.
        /// </remarks>
        [JsiiProperty(name: "cenUid", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string CenUid
        {
            get;
            set;
        }
    }
}
