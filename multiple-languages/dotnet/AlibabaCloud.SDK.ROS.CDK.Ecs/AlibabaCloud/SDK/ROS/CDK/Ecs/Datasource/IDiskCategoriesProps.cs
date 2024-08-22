using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `DiskCategories`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-diskcategories
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDiskCategoriesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.DiskCategoriesProps")]
    public interface IDiskCategoriesProps
    {
        /// <summary>Property type: The resource type to query.</summary>
        /// <remarks>
        /// If you set Type to data,you can specify the InstanceType parameter to disk.
        /// If you set Type to system, you must specify the InstanceType parameter.
        /// Valid values:
        /// system: system disk
        /// data: data disk
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <summary>Property zoneId: The ID of the zone for which to query resources.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <summary>Property dataDiskCategory: The category of the data disk.</summary>
        /// <remarks>
        /// Valid values:
        /// cloud: basic disk
        /// cloud_efficiency: ultra disk
        /// cloud_ssd: standard SSD
        /// ephemeral_ssd: local SSD
        /// cloud_essd: ESSD
        /// </remarks>
        [JsiiProperty(name: "dataDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataDiskCategory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceType: The instance type.</summary>
        /// <remarks>
        /// For more information,see Instance families or call the DescribeInstanceTypes,operation to query the most recent instance type list.
        /// When the Type parameter is set to system or data,you must set the InstanceType parameter.
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
        /// <description>Always: Always refresh the datasource resource when the stack is updated.
        /// Default is Never.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RefreshOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property systemDiskCategory: The category of the system disk.</summary>
        /// <remarks>
        /// Valid values:
        /// cloud: basic disk
        /// cloud_efficiency: ultra disk
        /// cloud_ssd: standard SSD
        /// ephemeral_ssd: local SSD
        /// cloud_essd: ESSD
        /// </remarks>
        [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SystemDiskCategory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DiskCategories`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-diskcategories
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDiskCategoriesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.DiskCategoriesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDiskCategoriesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property type: The resource type to query.</summary>
            /// <remarks>
            /// If you set Type to data,you can specify the InstanceType parameter to disk.
            /// If you set Type to system, you must specify the InstanceType parameter.
            /// Valid values:
            /// system: system disk
            /// data: data disk
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneId: The ID of the zone for which to query resources.</summary>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dataDiskCategory: The category of the data disk.</summary>
            /// <remarks>
            /// Valid values:
            /// cloud: basic disk
            /// cloud_efficiency: ultra disk
            /// cloud_ssd: standard SSD
            /// ephemeral_ssd: local SSD
            /// cloud_essd: ESSD
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataDiskCategory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceType: The instance type.</summary>
            /// <remarks>
            /// For more information,see Instance families or call the DescribeInstanceTypes,operation to query the most recent instance type list.
            /// When the Type parameter is set to system or data,you must set the InstanceType parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
            /// <description>Always: Always refresh the datasource resource when the stack is updated.
            /// Default is Never.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RefreshOptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property systemDiskCategory: The category of the system disk.</summary>
            /// <remarks>
            /// Valid values:
            /// cloud: basic disk
            /// cloud_efficiency: ultra disk
            /// cloud_ssd: standard SSD
            /// ephemeral_ssd: local SSD
            /// cloud_essd: ESSD
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemDiskCategory
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
