using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::MSE::Gateway`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-mse.RosGatewayProps")]
    public class RosGatewayProps : AlibabaCloud.SDK.ROS.CDK.Mse.IRosGatewayProps
    {
        /// <remarks>
        /// <strong>Property</strong>: replica: Gateway Node Number
        /// </remarks>
        [JsiiProperty(name: "replica", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Replica
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: spec: Gateway Node Specifications
        /// </remarks>
        [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Spec
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: VpcId
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: VSwitchId
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VSwitchId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: backupVSwitchId: VSwitchId For Backup
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backupVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? BackupVSwitchId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: enterpriseSecurityGroup:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enterpriseSecurityGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EnterpriseSecurityGroup
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internetSlbSpec:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetSlbSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InternetSlbSpec
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: slbSpec:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "slbSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SlbSpec
        {
            get;
            set;
        }
    }
}
