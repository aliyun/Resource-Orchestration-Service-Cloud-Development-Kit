using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Computenest
{
    /// <summary>Properties for defining a `ServiceInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-serviceinstance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IServiceInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-computenest.ServiceInstanceProps")]
    public interface IServiceInstanceProps
    {
        /// <summary>Property service: Service details.</summary>
        [JsiiProperty(name: "service", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-computenest.RosServiceInstance.ServiceProperty\"}]}}")]
        object Service
        {
            get;
        }

        /// <summary>Property commodity: The purchase order information of the cloud market does not need to be transmitted if the service is not on the cloud market or charged by volume.</summary>
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

        /// <summary>Property dryRun: Whether to perform PreCheck on the creation request, including permissions and instance status verification.</summary>
        /// <remarks>
        /// Possible values:
        ///
        /// <list type="bullet">
        /// <description><strong>true</strong>: The request is sent without creating a service instance.</description>
        /// <description><strong>false</strong>: Sends the request and creates a service instance after the check is passed.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "dryRun", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DryRun
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

        /// <summary>Property resourceAutoPay: Whether the resource is automatically deducted from the balance.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description><strong>true</strong>: automatic payment.</description>
        /// <description><strong>false</strong>: Do not pay automatically.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "resourceAutoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceAutoPay
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

        /// <summary>Property serviceInstanceName: The name of the service instance.</summary>
        [JsiiProperty(name: "serviceInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceInstanceName
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

        /// <summary>Properties for defining a `ServiceInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-serviceinstance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IServiceInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-computenest.ServiceInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Computenest.IServiceInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property service: Service details.</summary>
            [JsiiProperty(name: "service", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-computenest.RosServiceInstance.ServiceProperty\"}]}}")]
            public object Service
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property commodity: The purchase order information of the cloud market does not need to be transmitted if the service is not on the cloud market or charged by volume.</summary>
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

            /// <summary>Property dryRun: Whether to perform PreCheck on the creation request, including permissions and instance status verification.</summary>
            /// <remarks>
            /// Possible values:
            ///
            /// <list type="bullet">
            /// <description><strong>true</strong>: The request is sent without creating a service instance.</description>
            /// <description><strong>false</strong>: Sends the request and creates a service instance after the check is passed.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dryRun", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DryRun
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

            /// <summary>Property resourceAutoPay: Whether the resource is automatically deducted from the balance.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description><strong>true</strong>: automatic payment.</description>
            /// <description><strong>false</strong>: Do not pay automatically.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceAutoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceAutoPay
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

            /// <summary>Property serviceInstanceName: The name of the service instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "serviceInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceInstanceName
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
