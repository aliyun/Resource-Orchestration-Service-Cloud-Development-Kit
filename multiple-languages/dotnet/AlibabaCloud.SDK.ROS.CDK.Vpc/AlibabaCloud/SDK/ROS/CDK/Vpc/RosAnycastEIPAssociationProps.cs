using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::AnycastEIPAssociation`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosAnycastEIPAssociationProps")]
    public class RosAnycastEIPAssociationProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IRosAnycastEIPAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: anycastId: Anycast EIP instance ID.
        /// </remarks>
        [JsiiProperty(name: "anycastId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AnycastId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: bindInstanceId: The ID of the cloud resource instance to be bound.
        /// </remarks>
        [JsiiProperty(name: "bindInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object BindInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: bindInstanceRegionId: The region ID of the cloud resource instance to be bound.
        /// </remarks>
        [JsiiProperty(name: "bindInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object BindInstanceRegionId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: bindInstanceType: The cloud resource instance type to be bound. Valid value: SlbInstance, SLB instance of private network type.
        /// </remarks>
        [JsiiProperty(name: "bindInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object BindInstanceType
        {
            get;
            set;
        }
    }
}
