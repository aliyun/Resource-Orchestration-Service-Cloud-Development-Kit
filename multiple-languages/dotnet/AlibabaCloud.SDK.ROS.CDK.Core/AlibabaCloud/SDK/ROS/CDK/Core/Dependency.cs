using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    #pragma warning disable CS8618

    /// <summary>A single dependency.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.Dependency")]
    public class Dependency : AlibabaCloud.SDK.ROS.CDK.Core.IDependency
    {
        /// <summary>Source the dependency.</summary>
        [JsiiProperty(name: "source", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}")]
        public AlibabaCloud.SDK.ROS.CDK.Core.IConstruct Source
        {
            get;
            set;
        }

        /// <summary>Target of the dependency.</summary>
        [JsiiProperty(name: "target", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}")]
        public AlibabaCloud.SDK.ROS.CDK.Core.IConstruct Target
        {
            get;
            set;
        }
    }
}
