using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts.Datasource
{
    /// <summary>Properties for defining a `RosMigrationInstances`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationinstances
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosMigrationInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.datasource.RosMigrationInstancesProps")]
    public interface IRosMigrationInstancesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dtsInstanceId: Synchronization instance ID.
        /// </remarks>
        [JsiiProperty(name: "dtsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DtsInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosMigrationInstances`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationinstances
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosMigrationInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.datasource.RosMigrationInstancesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.IRosMigrationInstancesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dtsInstanceId: Synchronization instance ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dtsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DtsInstanceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
