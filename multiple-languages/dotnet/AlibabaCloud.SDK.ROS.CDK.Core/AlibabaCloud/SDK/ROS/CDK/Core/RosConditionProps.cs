using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.RosConditionProps")]
    public class RosConditionProps : AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionProps
    {
        /// <summary>The expression that the condition will evaluate.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - None.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "expression", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression? Expression
        {
            get;
            set;
        }
    }
}
