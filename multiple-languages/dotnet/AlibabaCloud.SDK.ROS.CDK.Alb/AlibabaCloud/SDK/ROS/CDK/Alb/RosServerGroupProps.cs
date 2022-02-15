using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ALB::ServerGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosServerGroupProps")]
    public class RosServerGroupProps : AlibabaCloud.SDK.ROS.CDK.Alb.IRosServerGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: healthCheckConfig: The configuration of health checks.
        /// </remarks>
        [JsiiProperty(name: "healthCheckConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.HealthCheckConfigProperty\"}]}}")]
        public object HealthCheckConfig
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: serverGroupName: The name of the server group. The name must be 2 to 128 characters in length, and
        /// can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
        /// must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "serverGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ServerGroupName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the virtual private cloud (VPC). You can add only servers that are deployed
        /// in the specified VPC to the server group.
        /// Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: protocol: The server protocol. Valid values:
        /// HTTP: allows you to associate HTTPS, HTTP, or QUIC listeners with backend servers. This
        /// is the default value.
        /// HTTPS: allows you to associate HTTPS listeners with backend servers.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Protocol
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: scheduler: The scheduling algorithm. Valid values:
        /// Wrr: Backend servers that have higher weights receive more requests than those that have
        /// lower weights. This is the default value.
        /// Wlc: Requests are distributed based on the weight and load of each backend server. The
        /// load refers to the number of connections to a backend server. If multiple backend
        /// servers have the same weight, requests are routed to the backend server with the least
        /// connections.
        /// Sch: specifies consistent hashing that is based on source IP addresses.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scheduler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Scheduler
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: serverGroupType: The type of the server group. Valid values:
        /// Instance: a server group that consists of servers. You can add Elastic Compute Service (ECS)
        /// instances, elastic network interfaces (ENIs), and elastic container instances to this
        /// type of server group. This is the default value.
        /// Ip: a server group that consists of IP addresses. You can add IP addresses to this type
        /// of server group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "serverGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ServerGroupType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: stickySessionConfig: The configuration of session persistence.
        /// Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "stickySessionConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.StickySessionConfigProperty\"}]}}", isOptional: true)]
        public object? StickySessionConfig
        {
            get;
            set;
        }
    }
}
