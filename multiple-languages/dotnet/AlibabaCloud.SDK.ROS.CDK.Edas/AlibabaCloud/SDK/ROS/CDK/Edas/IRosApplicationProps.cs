using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>Properties for defining a `ALIYUN::EDAS::Application`.</summary>
    [JsiiInterface(nativeType: typeof(IRosApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosApplicationProps")]
    public interface IRosApplicationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters)
        /// </remarks>
        [JsiiProperty(name: "applicationName", typeJson: "{\"primitive\":\"string\"}")]
        string ApplicationName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterId: Cluster ID of ECS application
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"primitive\":\"string\"}")]
        string ClusterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition). When creating HSF application, this parameter must be specified
        /// </remarks>
        [JsiiProperty(name: "buildPackId", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? BuildPackId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo
        /// Application required) or standard Java application (jar package format Spring Boot / Spring Cloud applications require) you need to specify when the operating environment. Commonly used application component ID and meaning:
        /// 4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
        /// 1.7.x
        /// </remarks>
        [JsiiProperty(name: "componentIds", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ComponentIds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Descriptive information
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id
        /// Interface to obtain).
        /// </remarks>
        [JsiiProperty(name: "ecuInfo", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? EcuInfo
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheckUrl: Application Health Check URL
        /// </remarks>
        [JsiiProperty(name: "healthCheckUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? HealthCheckUrl
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: logicalRegionId: Namespace ID
        /// </remarks>
        [JsiiProperty(name: "logicalRegionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? LogicalRegionId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: packageType: Application packet format, possible values: war or jar
        /// </remarks>
        [JsiiProperty(name: "packageType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PackageType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::EDAS::Application`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosApplicationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.IRosApplicationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters)
            /// </remarks>
            [JsiiProperty(name: "applicationName", typeJson: "{\"primitive\":\"string\"}")]
            public string ApplicationName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterId: Cluster ID of ECS application
            /// </remarks>
            [JsiiProperty(name: "clusterId", typeJson: "{\"primitive\":\"string\"}")]
            public string ClusterId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition). When creating HSF application, this parameter must be specified
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "buildPackId", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? BuildPackId
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo
            /// Application required) or standard Java application (jar package format Spring Boot / Spring Cloud applications require) you need to specify when the operating environment. Commonly used application component ID and meaning:
            /// 4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
            /// 1.7.x
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "componentIds", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ComponentIds
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Descriptive information
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id
            /// Interface to obtain).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ecuInfo", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? EcuInfo
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckUrl: Application Health Check URL
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? HealthCheckUrl
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: logicalRegionId: Namespace ID
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logicalRegionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? LogicalRegionId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: packageType: Application packet format, possible values: war or jar
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "packageType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PackageType
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
