using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Foas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FOAS::Project`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-foas.ProjectProps")]
    public class ProjectProps : AlibabaCloud.SDK.ROS.CDK.Foas.IProjectProps
    {
        /// <summary>Property deployType: Cluster type: Exclusive cluster: cell Shared cluster: public.</summary>
        [JsiiProperty(name: "deployType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DeployType
        {
            get;
            set;
        }

        /// <summary>Property managerIds: Comma delimited account Id list of managers.</summary>
        [JsiiProperty(name: "managerIds", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ManagerIds
        {
            get;
            set;
        }

        /// <summary>Property name: Project name.</summary>
        /// <remarks>
        /// It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Name
        {
            get;
            set;
        }

        /// <summary>Property clusterId: Cluster ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "clusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ClusterId
        {
            get;
            set;
        }

        /// <summary>Property description: Project description.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property orderId: Order Id of Shared cluster.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "orderId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? OrderId
        {
            get;
            set;
        }
    }
}
