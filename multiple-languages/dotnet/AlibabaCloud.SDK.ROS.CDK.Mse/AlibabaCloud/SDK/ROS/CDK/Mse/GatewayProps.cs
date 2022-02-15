using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::MSE::Gateway`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-mse.GatewayProps")]
    public class GatewayProps : AlibabaCloud.SDK.ROS.CDK.Mse.IGatewayProps
    {
        /// <summary>Property replica: Gateway Node Number.</summary>
        [JsiiProperty(name: "replica", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Replica
        {
            get;
            set;
        }

        /// <summary>Property spec: Gateway Node Specifications.</summary>
        [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Spec
        {
            get;
            set;
        }

        /// <summary>Property vpcId: VpcId.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VpcId
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: VSwitchId.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VSwitchId
        {
            get;
            set;
        }

        /// <summary>Property backupVSwitchId: VSwitchId For Backup.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "backupVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? BackupVSwitchId
        {
            get;
            set;
        }

        /// <summary>Property enterpriseSecurityGroup:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "enterpriseSecurityGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EnterpriseSecurityGroup
        {
            get;
            set;
        }

        /// <summary>Property internetSlbSpec:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "internetSlbSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InternetSlbSpec
        {
            get;
            set;
        }

        /// <summary>Property name:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Name
        {
            get;
            set;
        }

        /// <summary>Property slbSpec:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "slbSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SlbSpec
        {
            get;
            set;
        }
    }
}
