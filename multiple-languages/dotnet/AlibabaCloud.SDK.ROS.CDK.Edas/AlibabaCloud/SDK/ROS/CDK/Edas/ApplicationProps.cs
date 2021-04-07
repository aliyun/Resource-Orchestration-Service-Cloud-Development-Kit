using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::EDAS::Application`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.ApplicationProps")]
    public class ApplicationProps : AlibabaCloud.SDK.ROS.CDK.Edas.IApplicationProps
    {
        /// <summary>Property applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters).</summary>
        [JsiiProperty(name: "applicationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ApplicationName
        {
            get;
            set;
        }

        /// <summary>Property clusterId: Cluster ID of ECS application.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ClusterId
        {
            get;
            set;
        }

        /// <summary>Property buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition).</summary>
        /// <remarks>
        /// When creating HSF application, this parameter must be specified
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "buildPackId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? BuildPackId
        {
            get;
            set;
        }

        /// <summary>Property componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo Application required) or standard Java application (jar package format Spring Boot / Spring Cloud applications require) you need to specify when the operating environment.</summary>
        /// <remarks>
        /// Commonly used application component ID and meaning:
        /// 4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
        /// 1.7.x
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "componentIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ComponentIds
        {
            get;
            set;
        }

        /// <summary>Property description: Descriptive information.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id Interface to obtain).</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ecuInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EcuInfo
        {
            get;
            set;
        }

        /// <summary>Property healthCheckUrl: Application Health Check URL.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? HealthCheckUrl
        {
            get;
            set;
        }

        /// <summary>Property logicalRegionId: Namespace ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "logicalRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? LogicalRegionId
        {
            get;
            set;
        }

        /// <summary>Property packageType: Application packet format, possible values: war or jar.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "packageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PackageType
        {
            get;
            set;
        }
    }
}
