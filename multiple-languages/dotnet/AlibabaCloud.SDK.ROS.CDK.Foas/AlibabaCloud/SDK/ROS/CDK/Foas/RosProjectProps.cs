using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Foas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FOAS::Project`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-foas.RosProjectProps")]
    public class RosProjectProps : AlibabaCloud.SDK.ROS.CDK.Foas.IRosProjectProps
    {
        /// <remarks>
        /// <strong>Property</strong>: deployType: Cluster type:
        /// Exclusive cluster: cell
        /// Shared cluster: public
        /// </remarks>
        [JsiiProperty(name: "deployType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DeployType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: managerIds: Comma delimited account Id list of managers.
        /// </remarks>
        [JsiiProperty(name: "managerIds", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ManagerIds
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: Project name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterId: Cluster ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "clusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ClusterId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Project description.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: orderId: Order Id of Shared cluster.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "orderId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? OrderId
        {
            get;
            set;
        }
    }
}
