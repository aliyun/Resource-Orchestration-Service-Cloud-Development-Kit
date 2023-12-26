using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Lindorm.Datasource
{
    /// <summary>Properties for defining a `RosInstances`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-lindorm-instances
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-lindorm.datasource.RosInstancesProps")]
    public interface IRosInstancesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceIds: The list of the instance id.
        /// </remarks>
        [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceIds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: queryStr: Instance name keyword, which can be used for fuzzy search.
        /// </remarks>
        [JsiiProperty(name: "queryStr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QueryStr
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The resource group id of lindorm instance.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceType: The type of lindorm instance.
        /// </remarks>
        [JsiiProperty(name: "serviceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: supportEngine: Database engine types supported by the queried instance.
        /// 1: Support search engines.
        /// 2: Support timing engine.
        /// 4: Support wide table engine.
        /// 8: Support file engine.
        /// Note For example: the value of SupportEngine is 15, 15=8+4+2+1, which means that the instance supports search engine, timing engine, wide table engine and file engine. The value of SupportEngine is 6, 6=4+2, indicating that the instance supports timing engine and wide table engine.
        /// </remarks>
        [JsiiProperty(name: "supportEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SupportEngine
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags of lindorm instance.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-lindorm.datasource.RosInstances.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Lindorm.Datasource.RosInstances.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosInstances`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-lindorm-instances
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-lindorm.datasource.RosInstancesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Lindorm.Datasource.IRosInstancesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceIds: The list of the instance id.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? InstanceIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: queryStr: Instance name keyword, which can be used for fuzzy search.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "queryStr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QueryStr
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The resource group id of lindorm instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceType: The type of lindorm instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: supportEngine: Database engine types supported by the queried instance.
            /// 1: Support search engines.
            /// 2: Support timing engine.
            /// 4: Support wide table engine.
            /// 8: Support file engine.
            /// Note For example: the value of SupportEngine is 15, 15=8+4+2+1, which means that the instance supports search engine, timing engine, wide table engine and file engine. The value of SupportEngine is 6, 6=4+2, indicating that the instance supports timing engine and wide table engine.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "supportEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SupportEngine
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags of lindorm instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-lindorm.datasource.RosInstances.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Lindorm.Datasource.RosInstances.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Lindorm.Datasource.RosInstances.ITagsProperty[]?>();
            }
        }
    }
}
