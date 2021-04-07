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
        [JsiiProperty(name: "ccnInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object CcnInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: cenInstanceId: The ID of the CEN instance.
        /// </remarks>
        [JsiiProperty(name: "cenInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object CenInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: cenUid: The ID of the account to which the CEN instance belongs.
        /// </remarks>
        [JsiiProperty(name: "cenUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object CenUid
        {
            get;
            set;
        }
    }
}
