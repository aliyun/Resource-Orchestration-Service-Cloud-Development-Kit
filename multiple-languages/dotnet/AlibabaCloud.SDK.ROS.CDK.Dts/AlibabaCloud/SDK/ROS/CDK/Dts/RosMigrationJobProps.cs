using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::DTS::MigrationJob`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosMigrationJobProps")]
    public class RosMigrationJobProps : AlibabaCloud.SDK.ROS.CDK.Dts.IRosMigrationJobProps
    {
        /// <remarks>
        /// <strong>Property</strong>: migrationJobClass: Migrating instance specifications, which can be:
        /// small, medium, large and so on.
        /// Various specifications of the reference data migration test performance specifications
        /// </remarks>
        [JsiiProperty(name: "migrationJobClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object MigrationJobClass
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpoint: Migration target configuration
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.DestinationEndpointProperty\"}]}}", isOptional: true)]
        public object? DestinationEndpoint
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: migrationJobName: Migrating job name
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "migrationJobName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MigrationJobName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: migrationMode: Migration mode
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "migrationMode", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.MigrationModeProperty\"}]}}", isOptional: true)]
        public object? MigrationMode
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: migrationObject: Objects that need to be migrated
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "migrationObject", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.MigrationObjectProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? MigrationObject
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceEndpoint: Migration source configuration
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sourceEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.SourceEndpointProperty\"}]}}", isOptional: true)]
        public object? SourceEndpoint
        {
            get;
            set;
        }
    }
}
