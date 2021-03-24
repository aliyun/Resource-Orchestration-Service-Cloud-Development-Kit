using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLB::Rule`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.RuleProps")]
    public class RuleProps : AlibabaCloud.SDK.ROS.CDK.Slb.IRuleProps
    {
        /// <summary>Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.</summary>
        /// <remarks>
        /// Valid value:
        /// 1-65535
        /// </remarks>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double ListenerPort
        {
            get;
            set;
        }

        /// <summary>Property loadBalancerId: The ID of Server Load Balancer instance.</summary>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string LoadBalancerId
        {
            get;
            set;
        }

        /// <summary>Property ruleList: The forwarding rules to add.</summary>
        [JsiiProperty(name: "ruleList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosRule.RuleListProperty\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object RuleList
        {
            get;
            set;
        }
    }
}
