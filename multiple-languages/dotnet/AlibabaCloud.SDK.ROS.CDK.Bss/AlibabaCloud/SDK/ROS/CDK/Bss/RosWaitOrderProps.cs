using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Bss
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::BSS::WaitOrder`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-bss.RosWaitOrderProps")]
    public class RosWaitOrderProps : AlibabaCloud.SDK.ROS.CDK.Bss.IRosWaitOrderProps
    {
        /// <remarks>
        /// <strong>Property</strong>: orderIds: A list of order ids.
        /// </remarks>
        [JsiiProperty(name: "orderIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object OrderIds
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: cancelOnDelete: Cancel order where delete the resource. Ignore the paid order. Default true
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cancelOnDelete", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? CancelOnDelete
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: waitForOrderProduced: Wait util all orders related ROS resources are produced. 
        /// Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "waitForOrderProduced", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? WaitForOrderProduced
        {
            get;
            set;
        }
    }
}
