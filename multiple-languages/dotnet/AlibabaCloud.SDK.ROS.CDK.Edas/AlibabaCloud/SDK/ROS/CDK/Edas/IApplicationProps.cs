using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>Properties for defining a `Application`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-application
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.ApplicationProps")]
    public interface IApplicationProps
    {
        /// <summary>Property applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters).</summary>
        [JsiiProperty(name: "applicationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ApplicationName
        {
            get;
        }

        /// <summary>Property clusterId: Cluster ID of ECS application.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <summary>Property buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition).</summary>
        /// <remarks>
        /// When creating HSF application, this parameter must be specified
        /// </remarks>
        [JsiiProperty(name: "buildPackId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BuildPackId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo Application required) or standard Java application (jar package format Spring Boot \/ Spring Cloud applications require) you need to specify when the operating environment.</summary>
        /// <remarks>
        /// Commonly used application component ID and meaning:
        /// 4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
        /// 1.7.x
        /// </remarks>
        [JsiiProperty(name: "componentIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ComponentIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deployment: Deploy application information to ECS clusters.</summary>
        [JsiiProperty(name: "deployment", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosApplication.DeploymentProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Deployment
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Descriptive information.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id Interface to obtain).</summary>
        [JsiiProperty(name: "ecuInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EcuInfo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property healthCheckUrl: Application Health Check URL.</summary>
        [JsiiProperty(name: "healthCheckUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckUrl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logicalRegionId: Namespace ID.</summary>
        [JsiiProperty(name: "logicalRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogicalRegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property packageType: Application packet format, possible values: war or jar.</summary>
        [JsiiProperty(name: "packageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PackageType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Application`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-application
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.ApplicationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.IApplicationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters).</summary>
            [JsiiProperty(name: "applicationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ApplicationName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property clusterId: Cluster ID of ECS application.</summary>
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition).</summary>
            /// <remarks>
            /// When creating HSF application, this parameter must be specified
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "buildPackId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BuildPackId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo Application required) or standard Java application (jar package format Spring Boot \/ Spring Cloud applications require) you need to specify when the operating environment.</summary>
            /// <remarks>
            /// Commonly used application component ID and meaning:
            /// 4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
            /// 1.7.x
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "componentIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ComponentIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deployment: Deploy application information to ECS clusters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deployment", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosApplication.DeploymentProperty\"}]}}", isOptional: true)]
            public object? Deployment
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Descriptive information.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id Interface to obtain).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ecuInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EcuInfo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckUrl: Application Health Check URL.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckUrl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property logicalRegionId: Namespace ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "logicalRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogicalRegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property packageType: Application packet format, possible values: war or jar.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "packageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PackageType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
