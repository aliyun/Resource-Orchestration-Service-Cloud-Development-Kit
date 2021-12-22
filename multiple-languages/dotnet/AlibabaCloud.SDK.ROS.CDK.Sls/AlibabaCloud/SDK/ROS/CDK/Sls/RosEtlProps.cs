using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLS::Etl`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.RosEtlProps")]
    public class RosEtlProps : AlibabaCloud.SDK.ROS.CDK.Sls.IRosEtlProps
    {
        /// <remarks>
        /// <strong>Property</strong>: configuration: The configuration of ETL task
        /// </remarks>
        [JsiiProperty(name: "configuration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosEtl.ConfigurationProperty\"}]}}", isOverride: true)]
        public object Configuration
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: displayName: ETL display name
        /// </remarks>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object DisplayName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: ETL name
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: projectName: Project name
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ProjectName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: schedule: Task scheduling strategy
        /// </remarks>
        [JsiiProperty(name: "schedule", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosEtl.ScheduleProperty\"}]}}", isOverride: true)]
        public object Schedule
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: ETL description message.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }
    }
}
