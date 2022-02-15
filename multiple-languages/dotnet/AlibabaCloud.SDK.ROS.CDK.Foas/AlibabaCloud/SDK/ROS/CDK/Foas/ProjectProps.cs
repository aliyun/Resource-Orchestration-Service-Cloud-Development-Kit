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
        [JsiiProperty(name: "deployType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DeployType
        {
            get;
            set;
        }

        /// <summary>Property managerIds: Comma delimited account Id list of managers.</summary>
        [JsiiProperty(name: "managerIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ManagerIds
        {
            get;
            set;
        }

        /// <summary>Property name: Project name.</summary>
        /// <remarks>
        /// It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Name
        {
            get;
            set;
        }

        /// <summary>Property clusterId: Cluster ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ClusterId
        {
            get;
            set;
        }

        /// <summary>Property description: Project description.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property orderId: Order Id of Shared cluster.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "orderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? OrderId
        {
            get;
            set;
        }
    }
}
