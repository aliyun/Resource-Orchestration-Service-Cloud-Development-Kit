using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>Properties for defining a `ALIYUN::EDAS::Application`.</summary>
    [JsiiInterface(nativeType: typeof(IApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.ApplicationProps")]
    public interface IApplicationProps
    {
        /// <summary>Property applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters).</summary>
        [JsiiProperty(name: "applicationName", typeJson: "{\"primitive\":\"string\"}")]
        string ApplicationName
        {
            get;
        }

        /// <summary>Property clusterId: Cluster ID of ECS application.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"primitive\":\"string\"}")]
        string ClusterId
        {
            get;
        }

        /// <summary>Property buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition).</summary>
        /// <remarks>
        /// When creating HSF application, this parameter must be specified
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

        /// <summary>Property componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo Application required) or standard Java application (jar package format Spring Boot / Spring Cloud applications require) you need to specify when the operating environment.</summary>
        /// <remarks>
        /// Commonly used application component ID and meaning:
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

        /// <summary>Property description: Descriptive information.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id Interface to obtain).</summary>
        [JsiiProperty(name: "ecuInfo", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? EcuInfo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property healthCheckUrl: Application Health Check URL.</summary>
        [JsiiProperty(name: "healthCheckUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? HealthCheckUrl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logicalRegionId: Namespace ID.</summary>
        [JsiiProperty(name: "logicalRegionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? LogicalRegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property packageType: Application packet format, possible values: war or jar.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.ApplicationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.IApplicationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters).</summary>
            [JsiiProperty(name: "applicationName", typeJson: "{\"primitive\":\"string\"}")]
            public string ApplicationName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property clusterId: Cluster ID of ECS application.</summary>
            [JsiiProperty(name: "clusterId", typeJson: "{\"primitive\":\"string\"}")]
            public string ClusterId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition).</summary>
            /// <remarks>
            /// When creating HSF application, this parameter must be specified
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "buildPackId", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? BuildPackId
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo Application required) or standard Java application (jar package format Spring Boot / Spring Cloud applications require) you need to specify when the operating environment.</summary>
            /// <remarks>
            /// Commonly used application component ID and meaning:
            /// 4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
            /// 1.7.x
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "componentIds", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ComponentIds
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property description: Descriptive information.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id Interface to obtain).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ecuInfo", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? EcuInfo
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property healthCheckUrl: Application Health Check URL.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? HealthCheckUrl
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property logicalRegionId: Namespace ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "logicalRegionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? LogicalRegionId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property packageType: Application packet format, possible values: war or jar.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "packageType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PackageType
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
