using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.RemovalPolicyOptions")]
    public class RemovalPolicyOptions : AlibabaCloud.SDK.ROS.CDK.Core.IRemovalPolicyOptions
    {
        [JsiiOptional]
        [JsiiProperty(name: "applyToUpdateReplacePolicy", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        public bool? ApplyToUpdateReplacePolicy
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "defaultPolicy", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.RemovalPolicy\"}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.RemovalPolicy? DefaultPolicy
        {
            get;
            set;
        }
    }
}
