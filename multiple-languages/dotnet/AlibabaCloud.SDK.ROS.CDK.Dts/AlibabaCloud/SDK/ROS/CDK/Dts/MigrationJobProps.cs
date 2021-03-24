using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::DTS::MigrationJob`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.MigrationJobProps")]
    public class MigrationJobProps : AlibabaCloud.SDK.ROS.CDK.Dts.IMigrationJobProps
    {
        /// <summary>Property migrationJobClass: Migrating instance specifications, which can be: small, medium, large and so on.</summary>
        /// <remarks>
        /// Various specifications of the reference data migration test performance specifications
        /// </remarks>
        [JsiiProperty(name: "migrationJobClass", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string MigrationJobClass
        {
            get;
            set;
        }

        /// <summary>Property destinationEndpoint: Migration target configuration.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.DestinationEndpointProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? DestinationEndpoint
        {
            get;
            set;
        }

        /// <summary>Property migrationJobName: Migrating job name.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "migrationJobName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MigrationJobName
        {
            get;
            set;
        }

        /// <summary>Property migrationMode: Migration mode.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "migrationMode", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.MigrationModeProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? MigrationMode
        {
            get;
            set;
        }

        /// <summary>Property migrationObject: Objects that need to be migrated.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "migrationObject", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.MigrationObjectProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? MigrationObject
        {
            get;
            set;
        }

        /// <summary>Property sourceEndpoint: Migration source configuration.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "sourceEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.SourceEndpointProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? SourceEndpoint
        {
            get;
            set;
        }
    }
}
