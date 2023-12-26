using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `RosDiskCategories`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-diskcategories
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDiskCategoriesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosDiskCategoriesProps")]
    public interface IRosDiskCategoriesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: type: The resource type to query.
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

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The ID of the zone for which to query resources.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dataDiskCategory: The category of the data disk. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: instanceType: The instance type. For more information,see Instance families or call the DescribeInstanceTypes,operation to query the most recent instance type list.
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

        /// <remarks>
        /// <strong>Property</strong>: systemDiskCategory: The category of the system disk. Valid values:
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

        /// <summary>Properties for defining a `RosDiskCategories`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-diskcategories
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDiskCategoriesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosDiskCategoriesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IRosDiskCategoriesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The resource type to query.
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

            /// <remarks>
            /// <strong>Property</strong>: zoneId: The ID of the zone for which to query resources.
            /// </remarks>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dataDiskCategory: The category of the data disk. Valid values:
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

            /// <remarks>
            /// <strong>Property</strong>: instanceType: The instance type. For more information,see Instance families or call the DescribeInstanceTypes,operation to query the most recent instance type list.
            /// When the Type parameter is set to system or data,you must set the InstanceType parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: systemDiskCategory: The category of the system disk. Valid values:
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
