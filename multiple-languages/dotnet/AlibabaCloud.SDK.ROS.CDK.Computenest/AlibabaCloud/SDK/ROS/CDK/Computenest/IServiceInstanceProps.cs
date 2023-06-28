using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Computenest
{
    /// <summary>Properties for defining a `ALIYUN::ComputeNest::ServiceInstance`.</summary>
    [JsiiInterface(nativeType: typeof(IServiceInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-computenest.ServiceInstanceProps")]
    public interface IServiceInstanceProps
    {
        /// <summary>Property service: Service details.</summary>
        [JsiiProperty(name: "service", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-computenest.RosServiceInstance.ServiceProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Service
        {
            get;
        }

        /// <summary>Property commodity: Cloud market commodity purchase parameters.</summary>
        [JsiiProperty(name: "commodity", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-computenest.RosServiceInstance.CommodityProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Commodity
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property contactGroup: Alarm Contact Group.</summary>
        [JsiiProperty(name: "contactGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ContactGroup
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableInstanceOps: Whether the service instance has the O &amp; M function.</summary>
        /// <remarks>
        /// Possible values:
        ///
        /// <list type="bullet">
        /// <description>true: The service instance has a generation O &amp; M function.</description>
        /// <description>false: The service instance does not have the O &amp; M function.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "enableInstanceOps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableInstanceOps
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableUserPrometheus: Whether Prometheus monitoring is enabled.</summary>
        /// <remarks>
        /// Possible values:
        ///
        /// <list type="bullet">
        /// <description>true: enabled.</description>
        /// <description>false: not enabled.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "enableUserPrometheus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableUserPrometheus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property marketInstanceId: The ID of the cloud marketplace instance.</summary>
        [JsiiProperty(name: "marketInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MarketInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the service instance.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property operationName: Change operation name.</summary>
        [JsiiProperty(name: "operationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OperationName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property parameters: The parameters entered by the deployment service instance.</summary>
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Parameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property predefinedParameterName: Package name.</summary>
        [JsiiProperty(name: "predefinedParameterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PredefinedParameterName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property specificationCode: Commodity specification Code.</summary>
        [JsiiProperty(name: "specificationCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SpecificationCode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags of service instance.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-computenest.RosServiceInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Computenest.RosServiceInstance.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property templateName: Template name.</summary>
        [JsiiProperty(name: "templateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TemplateName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ComputeNest::ServiceInstance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IServiceInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-computenest.ServiceInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Computenest.IServiceInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property service: Service details.</summary>
            [JsiiProperty(name: "service", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-computenest.RosServiceInstance.ServiceProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Service
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property commodity: Cloud market commodity purchase parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "commodity", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-computenest.RosServiceInstance.CommodityProperty\"}]}}", isOptional: true)]
            public object? Commodity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property contactGroup: Alarm Contact Group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "contactGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ContactGroup
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableInstanceOps: Whether the service instance has the O &amp; M function.</summary>
            /// <remarks>
            /// Possible values:
            ///
            /// <list type="bullet">
            /// <description>true: The service instance has a generation O &amp; M function.</description>
            /// <description>false: The service instance does not have the O &amp; M function.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableInstanceOps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableInstanceOps
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableUserPrometheus: Whether Prometheus monitoring is enabled.</summary>
            /// <remarks>
            /// Possible values:
            ///
            /// <list type="bullet">
            /// <description>true: enabled.</description>
            /// <description>false: not enabled.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableUserPrometheus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableUserPrometheus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property marketInstanceId: The ID of the cloud marketplace instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "marketInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MarketInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the service instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property operationName: Change operation name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "operationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OperationName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property parameters: The parameters entered by the deployment service instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Parameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property predefinedParameterName: Package name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "predefinedParameterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PredefinedParameterName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property specificationCode: Commodity specification Code.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "specificationCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpecificationCode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of service instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-computenest.RosServiceInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Computenest.RosServiceInstance.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Computenest.RosServiceInstance.ITagsProperty[]?>();
            }

            /// <summary>Property templateName: Template name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "templateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TemplateName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
