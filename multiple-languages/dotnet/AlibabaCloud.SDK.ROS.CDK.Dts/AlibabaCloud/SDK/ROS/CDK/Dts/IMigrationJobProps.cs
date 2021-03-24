using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Properties for defining a `ALIYUN::DTS::MigrationJob`.</summary>
    [JsiiInterface(nativeType: typeof(IMigrationJobProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.MigrationJobProps")]
    public interface IMigrationJobProps
    {
        /// <summary>Property migrationJobClass: Migrating instance specifications, which can be: small, medium, large and so on.</summary>
        /// <remarks>
        /// Various specifications of the reference data migration test performance specifications
        /// </remarks>
        [JsiiProperty(name: "migrationJobClass", typeJson: "{\"primitive\":\"string\"}")]
        string MigrationJobClass
        {
            get;
        }

        /// <summary>Property destinationEndpoint: Migration target configuration.</summary>
        [JsiiProperty(name: "destinationEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.DestinationEndpointProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationEndpoint
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property migrationJobName: Migrating job name.</summary>
        [JsiiProperty(name: "migrationJobName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? MigrationJobName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property migrationMode: Migration mode.</summary>
        [JsiiProperty(name: "migrationMode", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.MigrationModeProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MigrationMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property migrationObject: Objects that need to be migrated.</summary>
        [JsiiProperty(name: "migrationObject", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.MigrationObjectProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MigrationObject
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceEndpoint: Migration source configuration.</summary>
        [JsiiProperty(name: "sourceEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.SourceEndpointProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceEndpoint
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::DTS::MigrationJob`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IMigrationJobProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.MigrationJobProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.IMigrationJobProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property migrationJobClass: Migrating instance specifications, which can be: small, medium, large and so on.</summary>
            /// <remarks>
            /// Various specifications of the reference data migration test performance specifications
            /// </remarks>
            [JsiiProperty(name: "migrationJobClass", typeJson: "{\"primitive\":\"string\"}")]
            public string MigrationJobClass
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property destinationEndpoint: Migration target configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.DestinationEndpointProperty\"}]}}", isOptional: true)]
            public object? DestinationEndpoint
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property migrationJobName: Migrating job name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "migrationJobName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? MigrationJobName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property migrationMode: Migration mode.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "migrationMode", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.MigrationModeProperty\"}]}}", isOptional: true)]
            public object? MigrationMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property migrationObject: Objects that need to be migrated.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "migrationObject", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.MigrationObjectProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? MigrationObject
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceEndpoint: Migration source configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sourceEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.SourceEndpointProperty\"}]}}", isOptional: true)]
            public object? SourceEndpoint
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
